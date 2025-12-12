---
sidebar_position: 11
---

# Direct Device MQTT Interaction Spec

## Overview

This specification describes the technical requirements for connecting direct devices to the ThingsPanel platform via the MQTT protocol, defining the data interaction format and communication protocol between the device and the platform.

## Core Concepts

:::info Four Core Data Types
Before starting, understanding these four core concepts is crucial:

- **🔄 Telemetry** - Real-time data reported by devices, usually measurements changing over time.
  - Example: Temperature readings reported periodically.
- **📋 Attributes** - Static or less frequently changing characteristics of devices.
  - Example: Device IP, MAC address, or firmware version.
- **🎯 Events** - Specific events or state changes occurring in devices.
  - Example: Motion detected or device boot completed.
- **⚡ Commands** - Control instructions sent from the platform to devices.
  - Example: Turn on light or reboot device.
:::

## Key Parameters

### 📍 message_id
- **Function**: Unique message identifier to ensure no duplication. No length limit.
- **Suggestion**: Use the last 7 digits of the timestamp (ms).
- **Requirement**: Unique within a short period.

### 🏷️ device_number (Device ID)
- **Function**: Unique identifier of the device in the system.
- **Requirement**: Globally unique, no duplicates.

### 🎭 method
- **Definition**: String identifying a specific command or event type.
- **Command Examples**: `"SetTemperature"`, `"TurnOnLight"`, `"RebootDevice"`
- **Event Examples**: `"TemperatureExceeded"`, `"MotionDetected"`, `"BatteryLow"`

### ⚙️ params
- **Function**: Contains detailed info or data related to the method.
- **Command Scenario**: Provides specific parameters needed for command execution.
- **Event Scenario**: Contains data describing the event.

## MQTT Authentication Rules

:::warning Auth Requirements
### 🔐 Uniqueness
- **Username + Password** combination must be globally unique.
- **ClientID** must be globally unique.

### 🔄 Consistency
- Devices must use the same auth info for every connection.
- Keep ClientID, Username, and Password consistent.
:::

## MQTT Topic Specification

:::tip Flexible Implementation
**Important**: Devices do not need to implement all listed MQTT topics. Selectively implement relevant topics based on specific device functions and scenarios.
:::

### Device Publish Topics

| Topic | Description | Data Type | Required |
|------|------|----------|----------|
| `devices/telemetry` | Report telemetry data | Telemetry | Optional |
| `devices/attributes/{message_id}` | Report attributes | Attributes | Optional |
| `devices/event/{message_id}` | Report events | Events | Optional |
| `ota/devices/progress` | Report OTA progress | OTA | Optional |
| `devices/command/response/{message_id}` | Command response | Response | Optional |
| `devices/attributes/set/response/{message_id}` | Attribute set response | Response | Optional |

### Device Subscribe Topics

:::note Topic Note
**Note:** `+` is a wildcard for `message_id`, `{device_number}` is the specific device ID.
:::

| Topic | Description | Data Type | Required |
|------|------|----------|----------|
| `devices/telemetry/control/{device_number}` | Receive control commands | Control | Optional |
| `devices/attributes/set/{device_number}/+` | Receive attribute set commands | Attribute Set | Optional |
| `devices/attributes/get/{device_number}` | Receive attribute get requests | Attribute Get | Optional |
| `devices/command/{device_number}/+` | Receive command execution requests | Command | Optional |
| `ota/devices/inform/{device_number}` | Receive OTA tasks | OTA | Optional |
| `devices/attributes/response/{device_number}/+` | Receive attribute response ack | Response Ack | Optional |
| `devices/event/response/{device_number}/+` | Receive event response ack | Response Ack | Optional |

## Data Interaction Format

### 🔄 Telemetry Reporting

**Topic:** `devices/telemetry`

#### Real-time Mode

Direct key-value pairs. System uses server reception time as timestamp.

```json title="Real-time Telemetry Example"
{
  "temperature": 25.5,
  "humidity": 65.0,
  "switch": true
}
```

#### Historical Mode

Time-series array format. Each record contains timestamp and values.

```json title="Historical Telemetry Example"
[
  {"ts": 1609459200, "values": {"temperature": 22.5, "humidity": 60.0}},
  {"ts": 1609462800, "values": {"temperature": 23.0, "humidity": 61.5}}
]
```

:::info Format Recognition
- **Real-time**: Root level is key-value object.
- **Historical**: Root level is array, elements contain `ts` and `values`.

**Field Description:**
- `ts`: Unix timestamp (seconds).
- `values`: Telemetry key-value pairs at that time.
:::

### 📋 Attribute Reporting

**Topic:** `devices/attributes/{message_id}`

```json title="Attribute Example"
{
  "ip": "192.168.1.100",
  "mac": "00:11:22:33:44:55",
  "version": "1.0.0"
}
```

### 🎯 Event Reporting

**Topic:** `devices/event/{message_id}`

#### Real-time Mode

```json title="Real-time Event Example"
{
  "method": "AlarmTriggered",
  "params": {
    "level": "high",
    "sensor": "temperature"
  }
}
```

#### Historical Mode

```json title="Historical Event Example"
[
  {
    "ts": 1609459200000,
    "method": "AlarmTriggered",
    "params": {
      "level": "high",
      "sensor": "temperature"
    }
  },
  {
    "ts": 1609462800000,
    "method": "DeviceStarted",
    "params": {
      "version": "1.0.0",
      "mode": "normal"
    }
  }
]
```

:::info Format Recognition
- **Real-time**: Root contains `method` and no `ts`.
- **Historical**: Root is array, elements contain `ts` and `method`.

**Field Description:**
- `ts`: Unix timestamp (milliseconds).
- `method`: Event name, required.
- `params`: Event parameters, optional.
:::

### 📦 OTA Progress Reporting

**Topic:** `ota/devices/progress`

**Success:**
```json
{
  "step": "100",
  "desc": "Upgrade 100%",
  "module": "MCU"
}
```

**Failure:**
```json
{
  "step": "-1",
  "desc": "OTA Failed, download failed",
  "module": "MCU"
}
```

#### Step Description

| Step | Description |
|--------|------|
| `1-100` | Progress percentage |
| `-1` | Upgrade failed |
| `-2` | Download failed |
| `-3` | Verification failed |
| `-4` | Flash failed |

### ⚡ Receive Control Commands

**Topic:** `devices/telemetry/control/{device_number}`

```json
{
  "temperature": 25.0,
  "brightness": 80,
  "switch": true
}
```

### 📋 Receive Attribute Set

**Topic:** `devices/attributes/set/{device_number}/+`

```json
{
  "ip": "192.168.1.100",
  "heartbeat": 30,
  "report_interval": 60
}
```

### 🔍 Receive Attribute Get

**Topic:** `devices/attributes/get/{device_number}`

**Get All:**
```json
{
  "keys": []
}
```

**Get Specific:**
```json
{
  "keys": ["temperature", "humidity"]
}
```

### ⚡ Receive Command Execution

**Topic:** `devices/command/{device_number}/+`

```json
{
  "method": "Restart",
  "params": {
    "delay": 5,
    "mode": "safe"
  }
}
```

### 📦 Receive OTA Task

**Topic:** `ota/devices/inform/{device_number}`

#### OTA Task Params

| Param | Type | Description |
|------|------|------|
| `id` | Long | Message ID |
| `code` | String | Status code |
| `version` | String | Version info |
| `size` | Long | Size in bytes |
| `url` | String | Download URL |
| `sign` | String | Signature |
| `signMethod` | String | SHA256, MD5 |
| `module` | String | Module name |
| `extData` | Object | Extra info |

```json
{
  "id": "1001",
  "code": 200,
  "params": {
    "version": "2.0.1",
    "size": 1024000,
    "url": "https://example.com/firmware/device_v2.0.1.bin",
    "signMethod": "MD5",
    "sign": "d41d8cd98f00b204e9800998ecf8427e",
    "module": "MCU",
    "extData": {
      "description": "Fix temperature sensor bug",
      "mandatory": true
    }
  }
}
```

## Response Format

### Response Params

| Param | Required | Type | Description |
|------|----------|------|------|
| `result` | ✅ | number | Result: `0`-Success, `1`-Fail |
| `errcode` | ❌ | string | Error code (if fail) |
| `message` | ✅ | string | Message content |
| `ts` | ❌ | number | Timestamp (s) |
| `method` | ❌ | string | Method name |

### Examples

**Success:**
```json
{
  "result": 0,
  "message": "success",
  "ts": 1609459200
}
```

**Failure:**
```json
{
  "result": 1,
  "errcode": "INVALID_PARAM",
  "message": "Parameter validation failed",
  "ts": 1609459200,
  "method": "Restart"
}
```

## Best Practices

:::tip Development Tips
1. **Message ID**: Suggest last 7 digits of timestamp.
2. **Selective Implementation**: Only implement necessary topics.
3. **Auth Info**: Keep consistent.
4. **Error Handling**: Implement full error response.
5. **Data Validation**: Validate JSON.
6. **Keep Alive**: Implement MQTT heartbeat.
7. **Reconnection**: Auto reconnect on network error.
8. **OTA**: Report progress.
:::