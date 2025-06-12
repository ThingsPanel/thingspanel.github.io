---
sidebar_position: 11
---

# 直连设备MQTT数据交互规范

## 概述

本规范描述直连设备通过MQTT协议连接到ThingsPanel平台的技术要求，定义了设备与平台之间的数据交互格式和通信协议。

## 核心概念

:::info 四大核心数据类型
在开始之前，了解四个核心概念对于理解本规范至关重要：

- **🔄 遥测（Telemetry）** - 设备实时上报的数据，通常是随时间变化的测量值
  - 例如：温度传感器定期上报的温度读数
- **📋 属性（Attributes）** - 设备的静态或较少变化的特征信息
  - 例如：设备的IP地址、MAC地址或固件版本
- **🎯 事件（Events）** - 设备中发生的特定事件或状态变化
  - 例如：检测到运动或设备启动完成
- **⚡ 命令（Commands）** - 平台发送到设备的控制指令
  - 例如：开关灯或重置设备
:::

## 关键参数说明

### 📍 message_id（消息标识符）
- **作用**：消息唯一标识符，确保消息不重复,长度不限
- **建议**：使用毫秒时间戳的后七位
- **要求**：在短期内保持唯一性

### 🏷️ device_number（设备编号）
- **作用**：设备在系统中的唯一标识
- **要求**：全局唯一，不可重复

### 🎭 method（方法标识）
- **定义**：用来标识特定命令或事件类型的字符串
- **命令示例**：`"SetTemperature"`、`"TurnOnLight"`、`"RebootDevice"`
- **事件示例**：`"TemperatureExceeded"`、`"MotionDetected"`、`"BatteryLow"`

### ⚙️ params（参数对象）
- **作用**：包含与method相关的详细信息或数据
- **命令场景**：提供执行命令所需的具体参数
- **事件场景**：包含描述事件的相关数据

## MQTT认证规则

:::warning 认证要求
### 🔐 唯一性要求
- **Username + Password** 组合必须全局唯一
- **ClientID** 必须全局唯一

### 🔄 一致性要求
- 设备每次连接时必须使用相同的认证信息
- 保持 ClientID、Username 和 Password 的一致性
:::

## MQTT主题规范

:::tip 灵活实现
**重要说明**：设备无需实现所有列出的MQTT主题。应根据设备的具体功能和应用场景，选择性地实现相关主题。开发者应仔细评估设备需求，只实现必要的主题，以优化设备性能和资源利用。
:::

### 设备上报主题

| 主题 | 说明 | 数据类型 | 是否必需 |
|------|------|----------|----------|
| `devices/telemetry` | 上报遥测数据 | 遥测 | 可选 |
| `devices/attributes/{message_id}` | 上报属性状态 | 属性 | 可选 |
| `devices/event/{message_id}` | 上报事件信息 | 事件 | 可选 |
| `ota/devices/progress` | 上报OTA升级进度 | OTA | 可选 |
| `devices/command/response/{message_id}` | 命令执行响应 | 响应 | 可选 |
| `devices/attributes/set/response/{message_id}` | 属性设置响应 | 响应 | 可选 |

### 设备订阅主题

:::note 主题说明
**注意：** `+` 表示 `message_id` 占位符，`{device_number}` 为具体设备编号
:::

| 主题 | 说明 | 数据类型 | 是否必需 |
|------|------|----------|----------|
| `devices/telemetry/control/{device_number}` | 接收遥测控制指令 | 控制 | 可选 |
| `devices/attributes/set/{device_number}/+` | 接收属性设置指令 | 属性设置 | 可选 |
| `devices/attributes/get/{device_number}` | 接收属性查询请求 | 属性查询 | 可选 |
| `devices/command/{device_number}/+` | 接收命令执行请求 | 命令 | 可选 |
| `ota/devices/inform/{device_number}` | 接收OTA升级任务 | OTA | 可选 |
| `devices/attributes/response/{device_number}/+` | 接收属性响应确认 | 响应确认 | 可选 |
| `devices/event/response/{device_number}/+` | 接收事件响应确认 | 响应确认 | 可选 |

## 数据交互格式

### 🔄 遥测数据上报

**主题：** `devices/telemetry`

```json title="遥测数据格式示例"
{
  "temperature": 28.5,
  "switch": true
}
```

### 📋 属性数据上报

**主题：** `devices/attributes/{message_id}`

```json title="属性数据格式示例"
{
  "ip": "127.0.0.1",
  "mac": "xxxxxxxxxx",
  "port": 1883
}
```

### 🎯 事件数据上报

**主题：** `devices/event/{message_id}`

```json title="事件数据格式示例"
{
  "method": "FindAnimal",
  "params": {
    "count": 2,
    "animalType": "cat"
  }
}
```

### 📦 OTA升级进度上报

**主题：** `ota/devices/progress`

**成功进度：**
```json title="升级进度上报"
{
  "step": "100",
  "desc": "升级进度100%",
  "module": "MCU"
}
```

**失败示例：**
```json title="升级失败上报"
{
  "step": "-1",
  "desc": "OTA升级失败，请求不到升级包信息。",
  "module": "MCU"
}
```

#### 升级步骤说明

| 步骤值 | 说明 |
|--------|------|
| `1-100` | 升级进度百分比 |
| `-1` | 升级失败 |
| `-2` | 下载失败 |
| `-3` | 校验失败 |
| `-4` | 烧写失败 |

### ⚡ 接收控制指令

**主题：** `devices/telemetry/control/{device_number}`

```json title="控制指令格式示例"
{
  "temperature": 28.5,
  "light": 2000,
  "switch": true
}
```

### 📋 接收属性设置

**主题：** `devices/attributes/set/{device_number}/+`

```json title="属性设置格式示例"
{
  "ip": "127.0.0.1",
  "mac": "xxxxxxxxxx",
  "port": 1883
}
```

### 🔍 接收属性查询请求

**主题：** `devices/attributes/get/{device_number}`

**查询所有属性：**
```json title="查询所有属性"
{
  "keys": []
}
```

**查询指定属性：**
```json title="查询指定属性"
{
  "keys": ["temp", "hum"]
}
```

### ⚡ 接收命令执行请求

**主题：** `devices/command/{device_number}/+`

```json title="命令执行格式示例"
{
  "method": "ReSet",
  "params": {
    "switch": 1,
    "light": "close"
  }
}
```

### 📦 接收OTA升级任务

**主题：** `ota/devices/inform/{device_number}`

#### OTA任务参数说明

| 参数 | 类型 | 说明 |
|------|------|------|
| `id` | Long | 消息ID号，在当前设备中具有唯一性 |
| `code` | String | 状态码 |
| `version` | String | 设备升级包的版本信息 |
| `size` | Long | 升级包文件大小，单位：字节 |
| `url` | String | 升级包存储地址 |
| `sign` | String | OTA升级包文件的签名 |
| `signMethod` | String | 签名方法：SHA256、MD5 |
| `module` | String | 升级包所属的模块名 |
| `extData` | Object | 升级批次标签列表和自定义信息 |

```json title="OTA升级任务示例"
{
  "id": "123",
  "code": 200,
  "params": {
    "version": "1.1",
    "size": 432945,
    "url": "http://dev.thingspane.cn/files/ota/s121jg3245gg.zip",
    "signMethod": "Md5",
    "sign": "a243fgh4b9v",
    "module": "MCU",
    "extData": {
      "key1": "value1",
      "key2": "value2"
    }
  }
}
```

## 响应格式规范

### 响应参数说明

| 参数 | 是否必输 | 类型 | 说明 |
|------|----------|------|------|
| `result` | ✅ | number | 执行结果：`0`-成功，`1`-失败 |
| `errcode` | ❌ | string | 错误码（失败时提供） |
| `message` | ✅ | string | 响应消息内容 |
| `ts` | ❌ | number | 时间戳（秒） |
| `method` | ❌ | string | 事件和命令的方法名 |

### 响应格式示例

**成功响应：**
```json title="操作成功"
{
  "result": 0,
  "message": "success",
  "ts": 1609143039
}
```

**失败响应：**
```json title="操作失败"
{
  "result": 1,
  "errcode": "INVALID_PARAM",
  "message": "Parameter validation failed",
  "ts": 1609143039,
  "method": "ReSet"
}
```

**带方法的成功响应：**
```json title="命令执行成功"
{
  "result": 0,
  "message": "Command executed successfully",
  "ts": 1609143039,
  "method": "ReSet"
}
```

## 最佳实践

:::tip 开发建议
1. **消息ID管理** - 建议使用时间戳后7位，确保短期内消息ID不重复
2. **选择性实现** - 根据设备功能需求选择实现的主题，避免不必要的资源消耗
3. **认证信息** - 确保每次连接使用相同的认证信息，保持连接稳定性
4. **错误处理** - 实现完整的错误响应机制，便于问题诊断
5. **数据验证** - 上报前验证JSON格式的正确性
6. **连接保持** - 实现MQTT心跳机制保持连接稳定
7. **重连机制** - 网络异常时自动重连
8. **OTA升级** - 实现升级进度上报，提升用户体验
:::

:::warning 注意事项
- 确保设备编号在系统中全局唯一
- 遥测数据建议定期上报，避免数据丢失
- 命令执行后建议返回响应确认
- 属性设置需要验证参数有效性
- OTA升级过程中及时上报进度和状态
- 保持认证信息的一致性，避免连接失败
- 合理选择订阅主题，减少不必要的网络流量
:::