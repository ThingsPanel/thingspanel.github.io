---
sidebar_position: 5
---

# 新版 SDK 插件开发指南

本文档介绍如何使用 **ThingsPanel Device Connector SDK (Go)** 开发设备接入插件。
新版 SDK 采用纯 Go 代码实现，无需复制模板，开发者只需实现业务逻辑即可。

> **与旧版的区别**：旧版（customProtocol）需要克隆模板仓库并修改大量配置文件。新版 SDK 以 Go module 形式引入，只需实现一个接口。

---

## 核心概念

### 两种接入模式

| 模式 | 适用场景 | 典型例子 |
|------|----------|----------|
| **直连设备** | 设备直接连到插件（Modbus、私有 TCP 协议等）| Modbus RTU/TCP、自研硬件 |
| **服务接入（云对云）** | 设备托管在第三方云平台，插件作为代理 | 萤石云、小米、HomeAssistant |

### 数据流

```
设备 / 第三方云
       ↓ (推送/轮询)
    插件进程
       ↓ MQTT  "devices/telemetry"
  ThingsPanel MQTT Broker
       ↓
  ThingsPanel 后端 → 前端展示
```

平台下发命令时方向相反：ThingsPanel → MQTT → 插件 → 设备/云平台。

---

## 快速开始

### 1. 创建项目

```bash
mkdir my-connector && cd my-connector
go mod init github.com/yourorg/my-connector
go get github.com/thingspanel/device-connector-sdk-go@latest
```

### 2. 实现 Handler 接口

在 `handler.go` 中实现 `sdk.Handler`：

```go
package main

import (
    "context"
    sdk "github.com/thingspanel/device-connector-sdk-go"
)

type myHandler struct {
    // 存储已绑定设备的配置
    devices map[string]sdk.DeviceAddRequest
}

func newMyHandler() *myHandler {
    return &myHandler{devices: make(map[string]sdk.DeviceAddRequest)}
}

// FormConfig 返回接入点表单的 JSON Schema
// ThingsPanel 前端用此 schema 渲染配置表单
func (h *myHandler) FormConfig(ctx context.Context) (sdk.FormConfig, error) {
    return sdk.FormConfig{
        Schema: map[string]any{
            "type": "object",
            "properties": map[string]any{
                "host": map[string]any{
                    "type":  "string",
                    "title": "设备主机地址",
                },
                "port": map[string]any{
                    "type":    "integer",
                    "title":   "端口",
                    "default": 502,
                },
            },
            "required": []string{"host"},
        },
    }, nil
}

// OnDeviceAdd 在设备绑定时被调用
// req.DeviceID     — ThingsPanel 内部 UUID
// req.DeviceNumber — 可读标识符（如 "modbus-192.168.1.10-1"）
// req.DeviceConfig — 表单字段合并后的配置 map
// req.AccessToken  — 用于 MQTT 发布遥测的凭证
func (h *myHandler) OnDeviceAdd(ctx context.Context, req sdk.DeviceAddRequest) error {
    h.devices[req.DeviceID] = req
    return nil
}

func (h *myHandler) OnDeviceDelete(ctx context.Context, req sdk.DeviceDeleteRequest) error {
    delete(h.devices, req.DeviceID)
    return nil
}

func (h *myHandler) OnCommand(ctx context.Context, req sdk.CommandRequest) (sdk.CommandResponse, error) {
    // 处理平台下发的命令，req.Command 是 map[string]any
    return sdk.CommandResponse{OK: true}, nil
}

func (h *myHandler) OnConfigUpdate(ctx context.Context, req sdk.ConfigUpdateRequest) error {
    return nil
}

func (h *myHandler) OnDisconnect(ctx context.Context, req sdk.DisconnectRequest) error {
    return nil
}

func (h *myHandler) OnEvent(ctx context.Context, ev sdk.EventNotification) error {
    return nil
}
```

### 3. 编写 main.go

```go
package main

import (
    "context"
    "os/signal"
    "syscall"

    sdk "github.com/thingspanel/device-connector-sdk-go"
)

func main() {
    info := sdk.FromEnv()     // 从环境变量读取运行时配置
    handler := newMyHandler()
    server := sdk.NewServer(info, handler)

    ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
    defer stop()

    if err := server.Run(ctx); err != nil {
        panic(err)
    }
}
```

### 4. 本地运行

```bash
CONNECTOR_SERVICE_IDENTIFIER=my-connector \
CONNECTOR_INSTANCE_ID=local-dev \
THINGSPANEL_BACKEND_URL=http://localhost:9999 \
TP_MQTT_BROKER=tcp://localhost:1883 \
go run .
```

验证：

```bash
curl http://localhost:9001/health
curl "http://localhost:9001/api/v1/form/config"
```

---

## 发布遥测数据

插件通过 MQTT 向 ThingsPanel 上报设备数据。每台设备有独立的 MQTT 连接，用 `req.AccessToken` 作为用户名。

```go
import (
    "encoding/json"
    mqtt "github.com/eclipse/paho.mqtt.golang"
)

func publishTelemetry(broker, deviceID, accessToken string, data map[string]any) error {
    opts := mqtt.NewClientOptions()
    opts.AddBroker(broker)                          // info.MQTTBroker
    opts.SetClientID("connector-" + deviceID)
    opts.SetUsername(accessToken)                   // req.AccessToken
    opts.SetAutoReconnect(true)

    client := mqtt.NewClient(opts)
    if tok := client.Connect(); !tok.WaitTimeout(5 * time.Second) {
        return errors.New("MQTT connect timeout")
    }

    payload, _ := json.Marshal(data)
    client.Publish("devices/telemetry", 0, false, payload)

    // 上报在线状态（"1" = 在线，"0" = 离线）
    client.Publish("devices/status/"+deviceID, 0, false, []byte("1"))
    return nil
}
```

遥测数据的 key 需与设备模板中定义的数据点标识符一致。例如：

```json
{
  "temperature": 23.5,
  "humidity": 60,
  "power": true
}
```

---

## 服务接入（云对云）模式详解

以萤石云插件为例，介绍云对云接入的完整开发流程。

### 流程图

```
用户填写接入点表单（AppKey + AppSecret）
      ↓
ThingsPanel 调用 GET /api/v1/plugin/device/list?voucher=...
      ↓
插件调用萤石云 API 获取摄像头列表，返回 DiscoveredDevice 列表
      ↓
用户选择设备，绑定设备模板
      ↓
ThingsPanel 调用 POST /api/v1/device/add（每台设备一次）
      ↓
插件存储配置，开始定时拉取/订阅云平台数据
      ↓
插件通过 MQTT 上报遥测（如直播流 URL、报警信息）
```

### 实现 DeviceLister 接口

```go
// ListDevices 在用户到达设备绑定步骤时被调用
// req.Voucher 是用户填写的接入点表单内容（JSON 字符串）
func (h *ezvizHandler) ListDevices(ctx context.Context, req sdk.DeviceListRequest) (sdk.DeviceListResponse, error) {
    var voucher struct {
        AppKey    string `json:"app_key"`
        AppSecret string `json:"app_secret"`
    }
    json.Unmarshal([]byte(req.Voucher), &voucher)

    // 调用第三方 API 获取设备列表
    cameras, err := h.client.ListCameras(ctx, voucher.AppKey, voucher.AppSecret)
    if err != nil {
        return sdk.DeviceListResponse{}, err
    }

    devices := make([]sdk.DiscoveredDevice, 0, len(cameras))
    for _, cam := range cameras {
        devices = append(devices, sdk.DiscoveredDevice{
            DeviceName:   cam.Name,
            DeviceNumber: "ys7-" + strings.ToLower(cam.Serial) + "-ch1",
            Description:  cam.Model,
            // ProtocolConfig 存储每台设备专有的配置（JSON 字符串）
            ProtocolConfig: mustJSON(map[string]any{
                "device_serial": cam.Serial,
                "channel_no":    "1",
            }),
        })
    }

    return sdk.DeviceListResponse{Total: len(devices), List: devices}, nil
}
```

### 区分不同表单类型

接入点表单（SVCR）和每设备配置表单（CFG）需要返回不同的 schema，可实现 `FormConfigProvider`：

```go
func (h *ezvizHandler) FormConfigFor(ctx context.Context, req sdk.FormConfigRequest) (sdk.FormConfig, error) {
    switch req.FormType {
    case "SVCR": // 接入点表单：填写云平台凭证
        return sdk.FormConfig{Schema: accessPointSchema()}, nil
    case "CFG":  // 每设备表单：选填流质量等参数
        return sdk.FormConfig{Schema: deviceConfigSchema()}, nil
    default:
        return sdk.FormConfig{Schema: accessPointSchema()}, nil
    }
}
```

### OnDeviceAdd 接收合并后的配置

SDK 的 `syncBoundDevices` 会将接入点凭证（`app_key`、`app_secret`）和每设备配置（`device_serial`、`channel_no`）合并后一起传入 `DeviceConfig`：

```go
func (h *ezvizHandler) OnDeviceAdd(ctx context.Context, req sdk.DeviceAddRequest) error {
    // 从合并后的 DeviceConfig 中读取所有字段
    appKey    := req.DeviceConfig["app_key"].(string)
    serial    := req.DeviceConfig["device_serial"].(string)
    channelNo := req.DeviceConfig["channel_no"].(string)

    h.mu.Lock()
    h.devices[req.DeviceID] = req
    h.mu.Unlock()

    // 触发立即上报（避免等待下一次定时周期）
    select {
    case h.immediateTelemCh <- req:
    default:
    }
    return nil
}
```

---

## 可选接口速览

### FormConfigProvider — 多表单类型

```go
type FormConfigProvider interface {
    FormConfigFor(ctx context.Context, req FormConfigRequest) (FormConfig, error)
}
```

`FormConfigRequest` 字段：

| 字段 | 含义 |
|------|------|
| `FormType` | `"SVCR"` 接入点 / `"CFG"` 设备配置 / `"VCRT"` 凭证类型 |
| `DeviceType` | `"gateway"` / `"1"` 直连设备等 |
| `ProtocolType` | 插件的 `service_identifier` |

### RawFormDataProvider — 原始数据

用于返回 VCRT（凭证类型列表）等非 JSON Schema 格式的数据：

```go
func (h *myHandler) RawFormDataFor(ctx context.Context, req sdk.FormConfigRequest) (any, bool, error) {
    if req.FormType == "VCRT" {
        return []map[string]string{
            {"label": "Token 认证", "value": "token"},
        }, true, nil
    }
    return nil, false, nil
}
```

---

## 环境变量

| 变量 | 必填 | 默认值 | 说明 |
|------|------|--------|------|
| `CONNECTOR_SERVICE_IDENTIFIER` | 是 | — | 与 `service_plugins.service_identifier` 一致 |
| `CONNECTOR_INSTANCE_ID` | 是 | — | 控制面分配的实例 ID |
| `CONNECTOR_LISTEN_ADDR` | 否 | `:9001` | HTTP 监听地址 |
| `THINGSPANEL_BACKEND_URL` | 是* | — | ThingsPanel 后端地址（心跳 + 启动同步） |
| `CONNECTOR_HEARTBEAT_INTERVAL` | 否 | `30s` | 心跳间隔 |
| `TP_MQTT_BROKER` | 否† | — | MQTT Broker 地址（优先） |
| `MQTT_BROKER` | 否† | — | MQTT Broker 地址（备用） |

*未设置时心跳和启动同步功能禁用。  
†`info.MQTTBroker` 为空时遥测功能应优雅降级。

---

## 注册插件

开发完成后，以超级管理员身份登录 ThingsPanel：

1. 进入 **集成管理** → **接入服务管理**
2. 点击 **新增服务**
3. 填写以下信息：

| 字段 | 示例值 | 说明 |
|------|--------|------|
| 服务名称 | 萤石云 | 创建设备模板时显示在协议下拉框 |
| 服务标识符 | `ezviz` | 全局唯一，与 `CONNECTOR_SERVICE_IDENTIFIER` 一致 |
| HTTP 服务地址 | `127.0.0.1:9001` | 后端回调插件的地址 |
| 设备类型 | gateway | 服务接入类填 gateway |
| 消息主题前缀 | `plugin/ezviz/` | MQTT 订阅前缀 |

---

## 启动同步机制

插件进程重启后，已绑定的设备不会再次调用 `/api/v1/device/add`。SDK 在第一次心跳成功后自动调用 `syncBoundDevices`：

1. POST `/api/v1/plugin/service/access/list`，传入 `service_identifier`
2. 遍历返回的服务接入记录，将接入点凭证（voucher）和每设备配置（protocol_config）合并
3. 以合并后的 `DeviceAddRequest` 调用 `OnDeviceAdd`

这意味着你的 `OnDeviceAdd` 必须是幂等的——多次调用相同设备应安全覆盖而非重复注册。

---

## 最佳实践

1. **`OnDeviceAdd` 幂等**：用 `deviceID` 为 key 存入 map，覆盖而非追加。
2. **按设备独立 MQTT 连接**：用 `(deviceID, accessToken)` 为 key 缓存连接，避免重复创建。
3. **立即遥测**：绑定后立即上报一次，避免用户等待下一个定时周期才看到数据。
4. **优雅处理凭证为空**：`req.AccessToken` 为空时跳过 MQTT 操作，记录警告而非 panic。
5. **FormConfig 使用 `x-order`**：在 schema 中加 `"x-order": ["field1", "field2"]` 控制表单字段顺序。

---

## 完整示例

萤石云（Ezviz）插件是使用本 SDK 的完整服务接入示例，包含：

- 三种协议直播流 URL（HLS/RTMP/FLV）上报
- PTZ 云台控制命令
- Webhook + 轮询双模式报警
- 启动同步与立即遥测

源码：`examples/device-connectors/ezviz/`
