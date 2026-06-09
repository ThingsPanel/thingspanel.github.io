---
sidebar_position: 5
---

# New SDK Plugin Development Guide

This guide explains how to build ThingsPanel device connector plugins using the
**ThingsPanel Device Connector SDK (Go)**. The new SDK is a Go module — no
template cloning required. You implement one interface, and the SDK handles the
rest.

> **Compared to the legacy approach**: The old `customProtocol` guide required
> cloning a template repository and editing many config files. The new SDK is
> imported as a Go module; only business logic needs to be written.

---

## Core Concepts

### Two Connector Patterns

| Pattern | When to use | Examples |
|---------|-------------|---------|
| **Direct-device** | Devices connect directly to the connector | Modbus TCP/RTU, custom TCP protocols |
| **Service-access (cloud-to-cloud)** | Devices are hosted on a third-party cloud platform | Ezviz, Xiaomi, HomeAssistant |

### Data Flow

```
Device / Third-party cloud
         ↓  (push or poll)
     Connector process
         ↓  MQTT  "devices/telemetry"
   ThingsPanel MQTT Broker
         ↓
   ThingsPanel Backend → UI
```

For downlink commands the direction reverses: ThingsPanel → MQTT → connector → device/cloud.

---

## Quick Start

### 1. Create the project

```bash
mkdir my-connector && cd my-connector
go mod init github.com/yourorg/my-connector
go get github.com/thingspanel/device-connector-sdk-go@latest
```

### 2. Implement the Handler interface

Create `handler.go`:

```go
package main

import (
    "context"
    sdk "github.com/thingspanel/device-connector-sdk-go"
)

type myHandler struct {
    devices map[string]sdk.DeviceAddRequest
}

func newMyHandler() *myHandler {
    return &myHandler{devices: make(map[string]sdk.DeviceAddRequest)}
}

// FormConfig returns the JSON Schema rendered by the ThingsPanel frontend
// as the access-point configuration form.
func (h *myHandler) FormConfig(ctx context.Context) (sdk.FormConfig, error) {
    return sdk.FormConfig{
        Schema: map[string]any{
            "type": "object",
            "properties": map[string]any{
                "host": map[string]any{
                    "type":  "string",
                    "title": "Device Host",
                },
                "port": map[string]any{
                    "type":    "integer",
                    "title":   "Port",
                    "default": 502,
                },
            },
            "required": []string{"host"},
        },
    }, nil
}

// OnDeviceAdd is called when a device is bound to this connector.
// req.DeviceID     — ThingsPanel internal UUID
// req.DeviceNumber — human-readable identifier (e.g. "modbus-192.168.1.10-1")
// req.DeviceConfig — merged map from all form fields
// req.AccessToken  — MQTT credential for publishing telemetry
func (h *myHandler) OnDeviceAdd(ctx context.Context, req sdk.DeviceAddRequest) error {
    h.devices[req.DeviceID] = req  // idempotent: overwrite on restart
    return nil
}

func (h *myHandler) OnDeviceDelete(ctx context.Context, req sdk.DeviceDeleteRequest) error {
    delete(h.devices, req.DeviceID)
    return nil
}

func (h *myHandler) OnCommand(ctx context.Context, req sdk.CommandRequest) (sdk.CommandResponse, error) {
    // req.Command is map[string]any — dispatch on req.Command["method"] or similar
    return sdk.CommandResponse{OK: true}, nil
}

func (h *myHandler) OnConfigUpdate(ctx context.Context, req sdk.ConfigUpdateRequest) error { return nil }
func (h *myHandler) OnDisconnect(ctx context.Context, req sdk.DisconnectRequest) error     { return nil }
func (h *myHandler) OnEvent(ctx context.Context, ev sdk.EventNotification) error           { return nil }
```

### 3. Write main.go

```go
package main

import (
    "context"
    "os/signal"
    "syscall"

    sdk "github.com/thingspanel/device-connector-sdk-go"
)

func main() {
    info := sdk.FromEnv()      // reads identity and MQTT broker from env vars
    handler := newMyHandler()
    server := sdk.NewServer(info, handler)

    ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
    defer stop()

    if err := server.Run(ctx); err != nil {
        panic(err)
    }
}
```

### 4. Run locally

```bash
CONNECTOR_SERVICE_IDENTIFIER=my-connector \
CONNECTOR_INSTANCE_ID=local-dev \
THINGSPANEL_BACKEND_URL=http://localhost:9999 \
TP_MQTT_BROKER=tcp://localhost:1883 \
go run .
```

Verify:

```bash
curl http://localhost:9001/health
curl "http://localhost:9001/api/v1/form/config"
```

---

## Publishing Telemetry

Each device gets its own MQTT connection, using `req.AccessToken` as the username.

```go
import (
    "encoding/json"
    "time"
    mqtt "github.com/eclipse/paho.mqtt.golang"
)

func publishTelemetry(broker, deviceID, accessToken string, data map[string]any) error {
    opts := mqtt.NewClientOptions()
    opts.AddBroker(broker)                        // from info.MQTTBroker
    opts.SetClientID("connector-" + deviceID)
    opts.SetUsername(accessToken)                 // from req.AccessToken
    opts.SetAutoReconnect(true)

    client := mqtt.NewClient(opts)
    if tok := client.Connect(); !tok.WaitTimeout(5 * time.Second) {
        return errors.New("MQTT connect timeout")
    }

    payload, _ := json.Marshal(data)
    // Publish telemetry — keys must match the device template's data point identifiers
    client.Publish("devices/telemetry", 0, false, payload)

    // Report online status: "1" = online, "0" = offline
    client.Publish("devices/status/"+deviceID, 0, false, []byte("1"))
    return nil
}
```

Example telemetry payload:

```json
{
  "temperature": 23.5,
  "humidity": 60,
  "power": true
}
```

---

## Service-Access Pattern (Cloud-to-Cloud)

The Ezviz Cloud connector is a complete worked example. Here is the full pattern.

### Flow

```
User fills access-point form (AppKey + AppSecret)
      ↓
ThingsPanel calls GET /api/v1/plugin/device/list?voucher=...
      ↓
Connector calls third-party API, returns DiscoveredDevice list
      ↓
User selects devices, binds them to a device template
      ↓
ThingsPanel calls POST /api/v1/device/add (once per device)
      ↓
Connector stores config, starts polling/subscribing the cloud platform
      ↓
Connector publishes telemetry (e.g. stream URLs, alarms) via MQTT
```

### Implement DeviceLister

```go
// ListDevices is called when the user reaches the device selection step.
// req.Voucher contains the JSON string from the access-point form.
func (h *ezvizHandler) ListDevices(ctx context.Context, req sdk.DeviceListRequest) (sdk.DeviceListResponse, error) {
    var voucher struct {
        AppKey    string `json:"app_key"`
        AppSecret string `json:"app_secret"`
    }
    json.Unmarshal([]byte(req.Voucher), &voucher)

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
            // ProtocolConfig stores per-device fields (serialized to JSON string)
            ProtocolConfig: mustJSON(map[string]any{
                "device_serial": cam.Serial,
                "channel_no":    "1",
            }),
        })
    }

    return sdk.DeviceListResponse{Total: len(devices), List: devices}, nil
}
```

### Serve different forms per type

Implement `FormConfigProvider` to return different schemas for the access-point
form and the per-device config form:

```go
func (h *ezvizHandler) FormConfigFor(ctx context.Context, req sdk.FormConfigRequest) (sdk.FormConfig, error) {
    switch req.FormType {
    case "SVCR": // Access-point form: cloud platform credentials
        return sdk.FormConfig{Schema: accessPointSchema()}, nil
    case "CFG":  // Per-device form: optional parameters per camera
        return sdk.FormConfig{Schema: deviceConfigSchema()}, nil
    default:
        return sdk.FormConfig{Schema: accessPointSchema()}, nil
    }
}
```

### OnDeviceAdd receives merged config

The SDK's `syncBoundDevices` merges the access-point credentials (`app_key`,
`app_secret`) with the per-device config (`device_serial`, `channel_no`) before
calling `OnDeviceAdd`. No manual merging is needed:

```go
func (h *ezvizHandler) OnDeviceAdd(ctx context.Context, req sdk.DeviceAddRequest) error {
    // All fields available in one map
    appKey    := req.DeviceConfig["app_key"].(string)
    serial    := req.DeviceConfig["device_serial"].(string)
    channelNo := req.DeviceConfig["channel_no"].(string)

    h.mu.Lock()
    h.devices[req.DeviceID] = req  // idempotent
    h.mu.Unlock()

    // Trigger immediate telemetry so the user sees data right away
    select {
    case h.immediateTelemCh <- req:
    default:
    }
    return nil
}
```

---

## Optional Interfaces

### FormConfigProvider — multiple form types

```go
type FormConfigProvider interface {
    FormConfigFor(ctx context.Context, req FormConfigRequest) (FormConfig, error)
}
```

`FormConfigRequest` fields:

| Field | Values |
|-------|--------|
| `FormType` | `"SVCR"` access-point / `"CFG"` device config / `"VCRT"` voucher type |
| `DeviceType` | `"gateway"` / `"1"` direct device, etc. |
| `ProtocolType` | The connector's `service_identifier` |

### RawFormDataProvider — non-schema responses

Used to return VCRT (credential type lists) and other non-JSON-Schema data:

```go
func (h *myHandler) RawFormDataFor(ctx context.Context, req sdk.FormConfigRequest) (any, bool, error) {
    if req.FormType == "VCRT" {
        return []map[string]string{
            {"label": "Token Auth", "value": "token"},
        }, true, nil
    }
    return nil, false, nil
}
```

---

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `CONNECTOR_SERVICE_IDENTIFIER` | yes | — | Must match `service_plugins.service_identifier` |
| `CONNECTOR_INSTANCE_ID` | yes | — | Instance UUID from the control plane |
| `CONNECTOR_LISTEN_ADDR` | no | `:9001` | HTTP bind address |
| `THINGSPANEL_BACKEND_URL` | yes* | — | Backend base URL (heartbeat + startup sync) |
| `CONNECTOR_HEARTBEAT_INTERVAL` | no | `30s` | How often to POST heartbeat |
| `TP_MQTT_BROKER` | no† | — | MQTT broker address (preferred) |
| `MQTT_BROKER` | no† | — | MQTT broker address (fallback) |

*Heartbeat and startup sync are disabled (with a warning) when unset.  
†`info.MQTTBroker` is empty when neither is set; the connector should handle this gracefully.

---

## Registering the Plugin

After development, register the connector with a Super Admin account:

1. Go to **Integration Management** → **Connectivity Service Management**
2. Click **Add New Service**
3. Fill in the fields:

| Field | Example | Notes |
|-------|---------|-------|
| Service Name | Ezviz Cloud | Shown in the protocol dropdown when creating a device template |
| Service Identifier | `ezviz` | Globally unique; matches `CONNECTOR_SERVICE_IDENTIFIER` |
| HTTP Service Address | `127.0.0.1:9001` | The address the backend calls back to |
| Device Type | gateway | Use `gateway` for service-access connectors |
| MQTT Topic Prefix | `plugin/ezviz/` | Subscribe prefix for downlink commands |

---

## Startup Sync

After a process restart, ThingsPanel does not re-call `/api/v1/device/add` for
already-bound devices. The SDK handles this automatically: on the first
successful heartbeat it calls `syncBoundDevices`, which:

1. POSTs to `/api/v1/plugin/service/access/list` with the `service_identifier`
2. Iterates the returned service-access records, merging access-point voucher
   fields with per-device `protocol_config` fields
3. Calls `OnDeviceAdd` with the merged `DeviceAddRequest` (including `DeviceNumber`)

**Your `OnDeviceAdd` must be idempotent** — calling it twice for the same device
must be safe (overwrite, not append).

---

## Best Practices

1. **Idempotent `OnDeviceAdd`**: Use `deviceID` as the map key; overwrite on every call.
2. **Per-device MQTT connections**: Cache by `(deviceID, accessToken)`; reuse across telemetry cycles.
3. **Publish immediately on bind**: Don't wait for the next timer tick — send telemetry right after `OnDeviceAdd` so the UI shows data immediately.
4. **Handle empty `AccessToken` gracefully**: Skip MQTT operations and log a warning rather than panicking.
5. **Control form field order**: Add `"x-order": ["field1", "field2"]` to the JSON Schema to guarantee display order in the frontend.

---

## Full Example

The **Ezviz Cloud** connector (`examples/device-connectors/ezviz/`) is a
complete service-access connector example featuring:

- Live stream URLs in three protocols (HLS / RTMP / FLV)
- PTZ camera control commands (pan, tilt, zoom)
- Real-time alarms via webhook + 60s polling fallback with deduplication
- Startup sync and immediate telemetry on bind
