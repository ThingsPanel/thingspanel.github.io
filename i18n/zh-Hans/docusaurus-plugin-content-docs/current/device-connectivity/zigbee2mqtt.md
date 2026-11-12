---
sidebar_position: 13
---

# Zigbee2MQTT 接入

Zigbee2MQTT 连接器让 ThingsPanel 能够发现、绑定、监控和控制由 [Zigbee2MQTT](https://www.zigbee2mqtt.io/)（简称 Z2M）管理的 Zigbee 设备。连接器通过 MQTT 直接与 Z2M 通信，不需要 Z2M 插件，也不依赖 Home Assistant 整合。

## 1. 概述

- **发现**：连接器读取 Z2M 的 retained `bridge/devices` 列表，在 ThingsPanel 中显示已配对设备，供批量绑定。
- **上报**：设备状态（温度、湿度、开关、亮度等）作为遥测上报；Z2M 的 availability 转成在线/离线。
- **控制**：支持开关、亮度，以及设备 exposes 中任何可写属性；下发后会读回设备状态确认。
- 设备以 IEEE 地址作为标识，在 Z2M 里给设备改名不会破坏绑定。

## 2. 前置条件

- 支持“带托管运行身份的插件安装”的 ThingsPanel 平台。
- 连接到运行 Z2M 的机器上的 Zigbee 协调器（USB 网关棒）。
- Z2M 和连接器都能访问的 MQTT Broker。
- Z2M 的 Home Assistant 整合保持**关闭**。

## 3. 部署 Zigbee2MQTT

下面的 `docker-compose.yml` 同时运行 Mosquitto 和 Zigbee2MQTT。请把协调器设备路径改成你自己的（`/dev/ttyUSB0` 只是示例）。

```yaml
services:
  mosquitto:
    image: eclipse-mosquitto:2
    restart: unless-stopped
    ports:
      - "1883:1883"
    volumes:
      - ./mosquitto/config:/mosquitto/config
      - ./mosquitto/data:/mosquitto/data

  zigbee2mqtt:
    image: koenkk/zigbee2mqtt
    restart: unless-stopped
    depends_on:
      - mosquitto
    ports:
      - "8080:8080"          # Z2M 网页界面
    volumes:
      - ./z2m-data:/app/data
    devices:
      - /dev/ttyUSB0:/dev/ttyUSB0
```

`mosquitto/config/mosquitto.conf`：

```conf
persistence true
persistence_location /mosquitto/data/
listener 1883
allow_anonymous false
password_file /mosquitto/config/passwords
```

用 `mosquitto_passwd -c mosquitto/config/passwords <用户名>` 创建密码文件（在容器内或本机安装的 Mosquitto 上执行）。

`z2m-data/configuration.yaml`：

```yaml
homeassistant: false
permit_join: false
mqtt:
  base_topic: zigbee2mqtt
  server: mqtt://mosquitto:1883
  user: <MQTT 用户名>
  password: <MQTT 密码>
serial:
  port: /dev/ttyUSB0
frontend:
  port: 8080
availability: true
```

:::caution
不要手工添加或复制 `network_key`、`pan_id`：Z2M 首次启动会自动生成。请勿公开或分享你的 `configuration.yaml`，其中包含 Zigbee 网络密钥。
:::

说明：

- `availability: true` 让 Z2M 报告设备离线。不开启时，ThingsPanel 只能在设备发数据时得知它在线，永远不会把它标成离线。
- 只把 Broker 暴露给可信网络，并保持认证开启。连接器必须能访问你在接入点里填写的 Broker 地址。

用 `docker compose up -d` 启动后，打开 Z2M 网页界面确认协调器已正常运行。

## 4. 安装并配置连接器

1. 在 ThingsPanel 中打开插件安装页面，安装 **Zigbee2MQTT**（由管理员通过插件目录提供）。安装后，该插件会出现在服务插件列表中，标识为 `zigbee2mqtt`，状态健康。
2. 打开**服务接入**（设备接入），为 Zigbee2MQTT 插件新建一个接入点。

### 接入点表单

| 字段 | 说明 |
|---|---|
| Z2M MQTT Broker 地址（必填） | Z2M 发布消息的 Broker 地址，例如 `tcp://192.0.2.10:1883` |
| 用户名 / 密码 | Broker 需要认证时填写 |
| Base Topic | Z2M 的 `base_topic`，默认 `zigbee2mqtt` |

每个接入点各自连接自己的 Z2M Broker。有多套 Z2M 时，为每套各建一个接入点。

## 5. 发现并绑定设备

1. 打开接入点的设备列表。连接器会返回 Z2M 已配对且已完成 interview 的设备（协调器、不受支持和已禁用的设备不会列出）。
2. 勾选设备并批量绑定。选择遥测 key 与设备属性名一致的设备模板（如 `temperature`、`humidity`、`state`、`brightness`）。
3. 约 30 秒内连接器会获取新的绑定并开始上报。

:::note
列表为空或报错时，请检查 Broker 地址、凭证、base topic 以及 Z2M 是否在运行：连接器最多等待 3 秒来接收 Z2M 的 `bridge/devices` 消息。
:::

## 6. 配对新设备（Permit join）

配对在 Zigbee2MQTT 里完成，而不是在 ThingsPanel 里：

1. 打开 Z2M 网页界面，点击 **Permit join (All)**，或临时设置 `permit_join: true`。
2. 让设备进入配对模式（通常长按其复位键数秒）。
3. 等 Z2M 显示设备已完成 interview 后，再关闭 permit join。
4. 回到 ThingsPanel，刷新接入点的设备列表并绑定新设备。

## 7. 遥测与控制

**遥测。** key 使用 Z2M 自己的属性名。嵌套对象只展平一层（`color.x` 变成 `color_x`）；丢弃 `update`、`update_available`、`last_seen`；`ON`/`OFF` 保持字符串。

**控制。** 可在设备控制页面或通过命令下发接口发送命令。支持的方法：

| 方法 | 值 | 发给 Z2M 的内容 |
|---|---|---|
| `switch` | `on`/`off`/`true`/`false`/`1`/`0` | `{"state":"ON"}` 或 `{"state":"OFF"}`（设备有多个开关时用属性名，如 `state_l2`） |
| `brightness` | 1–100（%） | `{"brightness": <0–254>}` |
| 设备 exposes 中任意可写属性 | 值 | `{"<属性>": 值}` |

只有设备的下一次状态与下发值一致，命令才会被报告为成功（连接器最多等 5 秒）。对设备未提供或只读的属性下发命令，会被拒绝并给出明确提示。

## 8. 常见问题

**设备有数据但显示离线。** 在 Z2M 中开启 `availability: true` 以便报告离线；并确认使用的连接器版本发送的是非 retained 的状态消息（当前版本如此）。

**设备列表为空。** Z2M 必须在运行并发布 `bridge/devices`（Z2M 会将其设为 retained）。检查接入点的 Broker 地址、凭证和 base topic。

**在 Z2M 里改名后设备还能用吗？** 能：绑定使用 IEEE 地址，而不是 friendly name。

**新绑定的设备不上报。** 最多等 30 秒；确认设备在绑定后发过数据，并确认其模板包含预期的遥测 key。

**命令失败，提示 “sent but not confirmed”。** 设备在 5 秒内没有上报新值（电池设备会休眠）。请在设备唤醒时重试。

**命令在发送前就被拒绝。** 该属性不在设备 exposes 中或为只读；请在 Z2M 网页界面查看设备页面。

**设备很多时。** 每个已绑定设备在 ThingsPanel Broker 上占用一个 MQTT 连接，几百台设备就是几百个连接。
