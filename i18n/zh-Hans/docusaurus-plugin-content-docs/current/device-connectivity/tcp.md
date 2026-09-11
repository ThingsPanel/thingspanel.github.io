---
sidebar_position: 5
---

# TCP 接入

ThingsPanel 通过 [通用 TCP 适配器](https://github.com/ThingsPanel/thingspanel-adapter-tcp) 接入使用 TCP 长连接的设备。适配器负责管理连接、切分报文、提取设备编号和路由上下行数据；设备业务报文的解析、字段映射、单位换算和 CRC 校验由 ThingsPanel 中每个设备模板配置的 Lua 脚本完成。

只要设备通过 TCP 长连接通信，并且每一帧报文中包含唯一的设备编号，就可以接入，不要求设备使用固定的业务协议。

## 工作方式

```text
设备 TCP 长连接
        │
        ▼
通用 TCP 适配器
  ├─ 分帧：换行符 / 长度字段 / 固定长度
  ├─ 提取 device_number
  └─ 原始报文透传到 ThingsPanel
        │
        ▼
设备模板中的 Lua 脚本
  └─ 解析业务字段并生成遥测、事件
```

适配器提供以下能力：

- TCP 长连接管理、连接数限制、空闲超时，以及向平台发送心跳。
- 按配置切分 TCP 字节流，避免一次读取对应多个报文或半个报文时解析错误。
- 从 JSON、文本或二进制报文中提取 `device_number`。
- 将原始报文上报到平台，并同步设备在线、离线状态。
- 支持在线设备直发和离线设备排队下发命令。
- 可选的设备动态注册，以及健康检查和运行指标接口。

## 报文分帧

适配器默认对所有接入设备使用同一套分帧配置。根据设备实际报文边界，在适配器的 `configs/config.yaml` 中选择一种模式：

| 分帧模式 | 适用场景 | 关键配置 |
| --- | --- | --- |
| `delimiter` | 以换行符结尾的文本或 JSON 报文 | `delimiter_hex: "0A"` |
| `length_field` | 帧头包含长度字段的二进制报文 | `length_field_offset`、`length_field_length`、`byte_order` |
| `fixed_length` | 每一帧字节数固定的协议 | `fixed_length` |

长度字段模式中，长度字段表示长度字段之后的负载长度，完整帧长度为“长度字段之前的字节数 + 长度字段长度 + 负载长度”。长度字段支持 1、2 或 4 字节，字节序支持 `big` 和 `little`。

例如，JSON 报文以换行符分隔时：

```json
{
  "protocol": {
    "frame": {
      "mode": "delimiter",
      "delimiter_hex": "0A"
    }
  }
}
```

二进制定长报文可配置为：

```json
{
  "protocol": {
    "frame": {
      "mode": "fixed_length",
      "fixed_length": 12
    }
  }
}
```

适配器还会使用 `tcp.max_frame_bytes` 限制单帧最大长度，默认配置为 4096 字节。该值应大于设备实际报文长度，避免异常大包占用过多内存。

## 提取设备编号

每一帧上报报文都必须能够提取唯一的 `device_number`。在 `protocol.extract` 中选择提取方式：

| 提取方式 | 适用场景 | 示例配置 |
| --- | --- | --- |
| `json_path` | JSON 报文 | `json_path: "$.device_number"` |
| `regex` | 非 JSON 文本报文 | `regex: "ID=([A-Za-z0-9_-]+)"`，使用第一个捕获组 |
| `byte_slice` | 二进制报文 | `offset: 4`、`length: 6`、`byte_codec: "ascii"` |

完整示例：

```json
{
  "protocol": {
    "extract": {
      "mode": "json_path",
      "json_path": "$.device_number"
    }
  }
}
```

设备编号必须与 ThingsPanel 设备凭证中的 `device_number` 完全一致。对于二进制设备，`byte_codec` 可使用 `ascii` 或 `hex`；使用 `hex` 时，提取结果为大写十六进制字符串。

## 接入步骤

### 1. 部署 TCP 适配器

适配器源码和部署文件见 [ThingsPanel/thingspanel-adapter-tcp](https://github.com/ThingsPanel/thingspanel-adapter-tcp)。生产配置文件是 `configs/config.yaml`，内容使用 JSON 格式。

适配器默认端口：

| 端口 | 用途 |
| --- | --- |
| `9000` | 设备 TCP 接入端口 |
| `8151` | 平台回调、健康检查和运维接口 |

使用 Docker Compose 部署时，需要同时映射这两个端口，并保证适配器容器能够访问 ThingsPanel backend 和 MQTT Broker。适配器配置中的 `platform.http_address` 必须填写 **backend 容器可以访问的适配器 HTTP 地址**：

- Docker 网络中使用适配器容器地址，例如 `172.20.0.12:8151`。
- 只有适配器和 backend 在同一台主机上直接运行时，才使用 `127.0.0.1:8151`。

### 2. 在平台注册接入服务

在 ThingsPanel 后台进入“设备接入服务管理”，新增服务并填写：

1. 服务标识，例如 `tcpgeneric`。
2. HTTP 服务地址：填写平台 backend 可访问的适配器地址，例如 `172.20.0.12:8151`。
3. 订阅主题前缀：`plugin/tcpgeneric/`。
4. 设备接入地址：填写设备实际可访问的 TCP 地址，例如 `<服务器IP>:9000`。
5. 保存后确认适配器心跳状态为在线。

服务标识必须与适配器配置中的 `platform.service_identifier` 一致，主题前缀必须与 `platform.topic_prefix` 一致。

### 3. 配置设备模板和凭证

创建或绑定设备模板，并在设备凭证中填写：

| 字段 | 内容 |
| --- | --- |
| 认证方式 | 设备编号认证（TCP 默认） |
| 设备编号 | 与 TCP 报文中提取出的 `device_number` 完全一致 |

适配器收到设备的第一帧报文后，会提取设备编号并向平台查询对应的 `device_id`。如果开启了动态注册，并且配置了 `template_secret`，平台找不到设备时会按该模板自动注册设备。

### 4. 配置设备模板中的 Lua 解析脚本

适配器不会解释设备的业务协议，而是将原始报文上报给平台。请在设备模板中配置 Lua 脚本完成：

- 文本或 JSON 字段解析。
- 二进制字段的偏移、大小端和类型解析。
- CRC 校验、单位换算和数据清洗。
- 遥测字段、属性和事件的映射。

例如，设备发送以下 JSON 报文，并以换行符结束：

```json
{"device_number":"dev001","temperature":25.6,"humidity":60}
```

分帧应使用 `delimiter`，设备号提取应使用 `json_path`，Lua 脚本再将 `temperature` 和 `humidity` 映射为平台需要的遥测字段。

二进制报文可以使用 `length_field` 或 `fixed_length` 分帧，并使用 `byte_slice` 从固定偏移位置提取设备编号；其余二进制字段交给 Lua 脚本解析。

## 下行命令

平台下发命令时，适配器根据设备是否在线进行处理：

- 在线设备：立即写入对应 TCP 连接。
- 离线设备：暂存到该设备的离线队列，默认每台设备保留最近 1 条命令；设备重新上线后补发。

默认下行编码模式为 `json_template`，适配器发送 JSON 命令对象。需要发送十六进制报文时，可将 `downlink.command_encode_mode` 设置为 `hex_template`，下发负载中提供十六进制字符串字段 `payload.hex`。

适配器不会替设备添加业务协议头或尾。下行编码结果必须已经符合设备的 TCP 协议，设备也应自行处理下行报文边界。

## 运行检查和排障

检查适配器进程是否正常：

```bash
curl -s http://127.0.0.1:8151/health
```

正常返回：

```json
{"status":"ok"}
```

常见问题：

- **适配器未上线**：检查 `platform.http_address` 是否从 backend 容器可达，并用 `/health` 确认 HTTP 服务正常。
- **有 TCP 连接但没有数据入库**：检查 `protocol.frame.mode` 是否匹配真实报文边界，以及 `protocol.extract` 是否能提取设备编号。
- **设备找不到**：确认报文中的 `device_number` 与设备凭证完全一致；需要自动注册时，确认 `auto_register.enabled` 和 `template_secret` 已配置。
- **下行失败**：确认设备已建立连接并完成 `device_id` 到 TCP 会话的绑定，检查 `command_encode_mode` 是否符合设备协议。
- **性能不足或大包报错**：根据设备规模调整 `tcp.max_connections`、`tcp.read_buffer_size` 和 `tcp.max_frame_bytes`，并通过 `/metrics` 观察解析失败和下行失败指标。

## 本地联调

适配器仓库提供 mock 平台和模拟设备。进入仓库后可一键验证设备上报、在线下发、离线排队和重连补发：

```bash
./scripts/mock_e2e.sh
```

也可以手动启动：

```bash
# 启动 TCP 适配器（mock 配置）
go run ./cmd -config configs/config.mock.json

# 启动模拟设备，每秒上报一次
go run ./cmd/device-simulator \
  -addr 127.0.0.1:9000 \
  -device-number sim001 \
  -interval 1s \
  -count 10 \
  -read-command=true
```

相关源码、配置和测试见 [thingspanel-adapter-tcp](https://github.com/ThingsPanel/thingspanel-adapter-tcp)。
