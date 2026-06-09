---
sidebar_position: 4
---

# Data Configuration

## Binding modes

| Mode | Use for |
|------|---------|
| Static | Fixed text, colors |
| Field | Bind to a data source field |
| Expression | `{{ ds.<id>.data.<path> }}` |

## Platform device data

Switch a property to **Field** mode in the right panel. The field picker (data binding UI) expands below. Device selection and data transform open secondary dialogs.

### System data

Scope: tenant-level statistics. Fields include `device_total`, `device_online`, `device_offline`, `alarm_device_total`.

### Device data

1. Select **Device data** scope.
2. Pick a device from the device selector.
3. Choose data type: current value, status, history, or alarm.
4. Select a thing-model field.

Devices must be connected and have thing-model fields defined under **Device Access → Thing Model**.

## Custom data sources

Add via **Data Sources** menu:

- **STATIC** — JSON for demos
- **REST** — HTTP polling
- **WS** — WebSocket streaming
