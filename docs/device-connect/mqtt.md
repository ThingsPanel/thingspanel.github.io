---
sidebar_position: 2
---

# MQTT Direct Device Onboarding

## Access Steps
1. Create Device
2. Select Device Template (Optional)
3. Get Device Configuration Parameters
4. Configure Device
5. Complete Access

## Quick Access Video

<video controls src="/videos/15s_add_device.mp4" title="15s Add Device and Push Data" width="1000"></video>

## Detailed Process

### Create Device

In the **Device Connectivity** menu, click **Add Device**. You can manually add a device.
* No Device Template: Defaults to MQTT protocol, using MQTT Basic authentication.
* Select Device Template: Use the protocol bound in the device template.

### Configure Device
![MQTT Connect Params](./image/mqtt_connect_params.png)

### Simulation via Command Line
```bash
mosquitto_pub -h 47.115.210.16 -p 1883 -t "devices/telemetry" -m "{\"test_data1\":25.5,\"test_data2\":60}" -u "5547c615-593e-6fb1-41f" -P "ced8bfd" -i "mqtt_28e7fdfd-514"
```

Explanation of the `mosquitto_pub` command:
* `mosquitto_pub`: Command line tool to publish messages.
* `-h`: Server host IP.
* `-p`: Server port (default 1883).
* `-t`: Topic (`devices/telemetry`).
* `-m`: Message payload (JSON string).
* `-u`: Username.
* `-P`: Password.
* `-i`: Client ID.

### Use Mosquitto MQTT Client
Install Mosquitto MQTT client locally. The command is the same as the simulation command.

### Result
![Data Push Result](./image/mqtt_data_push_result.png)

## MQTT Access Specification
[Direct Device MQTT Interaction Spec](./mqtt-device-rule.md)

## Common Issues

1. Note that MQTT Broker address might differ from the platform address.
2. MQTT ClientID must be unique.
3. If device is online but no messages, check the Topic.
4. If simulation works, platform is fine; check device side issues.
