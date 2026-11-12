---
sidebar_position: 13
---

# Zigbee2MQTT

The Zigbee2MQTT connector lets ThingsPanel discover, bind, monitor and control Zigbee devices that are managed by [Zigbee2MQTT](https://www.zigbee2mqtt.io/) (Z2M). It talks to Z2M directly over MQTT, so no Z2M plugin and no Home Assistant integration is needed.

## 1. Overview

- **Discover**: the connector reads Z2M's retained `bridge/devices` list and shows the paired devices in ThingsPanel for bulk binding.
- **Report**: device state (temperature, humidity, on/off, brightness, …) becomes telemetry; Z2M availability becomes online/offline.
- **Control**: switch and brightness commands, and any writable property the device exposes, are sent to Z2M and confirmed by reading the device state back.
- Devices are identified by their IEEE address, so renaming a device in Z2M does not break its binding.

## 2. Prerequisites

- A ThingsPanel platform that supports plugin installation with a managed runtime identity.
- A Zigbee coordinator (USB dongle) connected to the machine that runs Z2M.
- An MQTT broker reachable by both Z2M and the connector.
- Z2M's Home Assistant integration should stay **off**.

## 3. Deploy Zigbee2MQTT

The following `docker-compose.yml` runs Mosquitto and Zigbee2MQTT. Adjust the device path of your coordinator (`/dev/ttyUSB0` is only an example).

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
      - "8080:8080"          # Z2M web UI
    volumes:
      - ./z2m-data:/app/data
    devices:
      - /dev/ttyUSB0:/dev/ttyUSB0
```

`mosquitto/config/mosquitto.conf`:

```conf
persistence true
persistence_location /mosquitto/data/
listener 1883
allow_anonymous false
password_file /mosquitto/config/passwords
```

Create the password file with `mosquitto_passwd -c mosquitto/config/passwords <user>` (run it inside the container or with a local Mosquitto install).

`z2m-data/configuration.yaml`:

```yaml
homeassistant: false
permit_join: false
mqtt:
  base_topic: zigbee2mqtt
  server: mqtt://mosquitto:1883
  user: <mqtt user>
  password: <mqtt password>
serial:
  port: /dev/ttyUSB0
frontend:
  port: 8080
availability: true
```

:::caution
Do not add or copy a `network_key` or `pan_id` by hand: Z2M generates them on first start. Never publish or share your `configuration.yaml`, it contains your Zigbee network key.
:::

Notes:

- `availability: true` lets Z2M report when a device goes offline. Without it ThingsPanel only learns that a device is online when it sends data, and never marks it offline.
- Only expose the broker to a network you trust, and keep authentication on. The connector must be able to reach the broker address you enter in the access point.

Start the stack with `docker compose up -d` and open the Z2M web UI to check that the coordinator is running.

## 4. Install and configure the connector

1. In ThingsPanel, open the plugin installation page and install **Zigbee2MQTT** (provided by your administrator through the plugin catalog). After installation the plugin is listed under service plugins with the identifier `zigbee2mqtt` and a healthy status.
2. Open **Service Access** (device access) and create a new access point for the Zigbee2MQTT plugin.

### Access point form

| Field | Description |
|---|---|
| Z2M MQTT Broker (required) | Address of the broker Z2M publishes to, e.g. `tcp://192.0.2.10:1883` |
| Username / Password | Broker credentials, if the broker requires them |
| Base Topic | Z2M `base_topic`, default `zigbee2mqtt` |

Each access point opens its own connection to its Z2M broker. If you have several Z2M instances, create one access point for each.

## 5. Discover and bind devices

1. Open the access point's device list. The connector returns the devices Z2M has paired and fully interviewed (the coordinator, unsupported and disabled devices are not listed).
2. Select the devices and bind them in bulk. Choose a device template whose telemetry keys match the property names of the device (for example `temperature`, `humidity`, `state`, `brightness`).
3. Within about 30 seconds the connector picks up the new bindings and starts reporting.

:::note
If the list is empty or shows an error, check the broker address, credentials and base topic, and that Z2M is running: the connector waits up to 3 seconds for Z2M's `bridge/devices` message.
:::

## 6. Pair a new device (Permit join)

Pairing is done in Zigbee2MQTT, not in ThingsPanel:

1. Open the Z2M web UI and click **Permit join (All)**, or set `permit_join: true` temporarily.
2. Put the device in pairing mode (usually by pressing its reset button for several seconds).
3. Wait until Z2M shows the device as interviewed, then turn permit join off again.
4. Refresh the device list of the access point in ThingsPanel and bind the new device.

## 7. Telemetry and control

**Telemetry.** The keys are Z2M's own property names. Nested objects are flattened one level (`color.x` becomes `color_x`); `update`, `update_available` and `last_seen` are dropped; `ON`/`OFF` stay strings.

**Control.** Send commands from the device's control page or through the command API. Supported methods:

| Method | Value | Sent to Z2M |
|---|---|---|
| `switch` | `on`/`off`/`true`/`false`/`1`/`0` | `{"state":"ON"}` or `{"state":"OFF"}` (for devices with several switches use the property name, e.g. `state_l2`) |
| `brightness` | 1–100 (%) | `{"brightness": <0–254>}` |
| any writable property the device exposes | value | `{"<property>": value}` |

A command is reported as successful only when the device's next state matches what was sent (the connector waits up to 5 seconds). Commands for properties the device does not expose, or that are read-only, are rejected with a clear message.

## 8. FAQ

**Devices receive data but show offline.** Turn `availability: true` on in Z2M so offline devices are reported, and make sure you use a connector build that sends status messages as non-retained (the current version does).

**The device list is empty.** Z2M must be running and publishing `bridge/devices` (it is retained by Z2M). Check the broker address, credentials and base topic of the access point.

**A device I renamed in Z2M still works.** Yes: bindings use the IEEE address, not the friendly name.

**A newly bound device does not report.** Wait up to 30 seconds. Check that the device has sent data since binding, and that its template contains the telemetry keys you expect.

**Commands fail with "sent but not confirmed".** The device did not report the new value within 5 seconds (battery devices sleep). Try again when the device is awake.

**A command is rejected before sending.** The property is not exposed by the device or is read-only; check the device's page in the Z2M web UI.

**Many devices.** Each bound device uses one MQTT connection to the ThingsPanel broker. Hundreds of devices means hundreds of connections.
