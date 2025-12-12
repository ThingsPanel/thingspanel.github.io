---
sidebar_position: 6
---


# UDP

## Via Rule Engine

Use UDP in node and UDP out node.
![UDP Access](./image/udp.png)

:::info

Note that the server needs to open `UDP ports` (usually default ports opened are TCP);
If installing via Docker, the rule engine container also needs to map UDP ports.

:::

## Via Device Connectivity Service

* Develop a custom ThingsPanel Device Connectivity Service (plugin) to access via the service.
