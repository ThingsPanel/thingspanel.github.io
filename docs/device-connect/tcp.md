---
sidebar_position: 5
---

# TCP

There are two ways for TCP device connectivity:


## 1. Via TCP Device Connectivity Service
`TCP Device Connectivity Service` runs separately. Devices interact with platform through it. It can run on the same machine or a different machine accessible via network.

### Protocol Classification
Supports two types:
1. Custom TCP Protocol
2. Official TCP Protocol

:::note

Both types support **Standard Device** and **Gateway Device**.

:::

### Custom TCP Protocol
Pass-through mode.
#### Steps:
1. Create device, select `Custom TCP Protocol` in Edit Params, get AccessToken and address.
![Edit Params](./image/tcp2.png)

2. In Device Config, set buffer size (Default 1KB).
![Device Config](./image/tcp1.png)

3. Write Data Processing Script (Device List -> Edit Params -> Script).
    - Uplink Script: Convert custom TCP msg to platform JSON.
        - Device: `{"temperature":36.5,"humidity":52}`
        - Gateway: `{"3c20c6206":{"temperature":36.5,"humidity":52}}` ("3c20c6206" is sub-device addr).
    - Downlink Script: Convert platform JSON to custom TCP msg.

4. Establish connection, push AccessToken first for authentication.

### Official TCP Protocol
Defined spec by the service.
#### Spec
Connect and send structure:

|  IDENT  |  IDENT  |     TYPE       |  CMD     |  LENGTH  |     PAYLOAD    |
| --- | --- | --- | --- | --- | --- |
|   'T'   |  'P'    |       1 byte   |  1 byte  | 4 byte   |     Variable   |

- TYPE:  
    0x0: Data Packet  
    0x1: Heartbeat  
- CMD:  
    0x0: Auth  
    0x1: Publish Attributes  
    0x2: Push Events  
- LENGTH: Payload length
- PAYLOAD: Data
    If CMD 0x0, Payload is AccessToken  
    If CMD 0x1, Payload is Attributes  
    If CMD 0x2, Payload is Events

#### Steps
1. Create device, select `Official TCP Protocol`, get AccessToken.
2. (Optional) Write script if Payload is not platform JSON.
3. Establish connection, send CMD 0x0 with AccessToken. Then send Attrs/Events.

### TCP Service GitHub
https://github.com/ThingsPanel/tcp-protocol-plugin
