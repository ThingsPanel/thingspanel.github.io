---
sidebar_position: 2
---

# China Telecom CTWing Integration

This article introduces how to quickly connect devices from the CTWing platform to the ThingsPanel platform.

## Device Connectivity Service Introduction

CTWing platform provides multiple access methods.

- **service_plugin_ctwing** Device Connectivity Service:
  - This service accesses data via the HTTP push service of the CTWing platform.

## Integration Process

### Prerequisites

1. Register a CTWing account.
2. Register or deploy ThingsPanel platform, and deploy CTWing Device Connectivity Service.
3. CTWing Device Connectivity Service is registered to the platform.
   ![Device Connectivity Service Management](./img/image-11.png)

### Steps

- **CTWing Platform Configuration**
  - Login to CTWing Platform.
  - Create Product and Device, get `Product ID` and `Master-APIkey`.
    - ![Create Product](./img-ctwing/image-1.png)
    - ![Device](./img-ctwing/image.png)
    - ![Product](./img-ctwing/image-2.png)
  - Add Subscription.
    - `c.thingspanel.cn:8380` is the service address and port of the device connectivity service.
    - ![Add Subscription](./img-ctwing/image-3.png)
  - Add Application, get `App Key` and `App Secret`.
    - ![Add Application](./img-ctwing/image-4.png)
    - ![Application](./img-ctwing/image-5.png)

- **ThingsPanel Platform Configuration**
  - If no device template for this service exists, verify or create one.
    - ![Device Template](./img-ctwing/image-6.png)
  - Enter Service Access page.
    - ![Service Access](./img/image-5.png)
  - Add Service Access Point.
    - ![Add Service Access Point](./img-ctwing/image-7.png)
  - Select Devices to Access.
    - Note: This list only displays devices that have pushed data.
    - ![Device List](./img-ctwing/image-8.png)
  - After data push, view data in device details.
    - ![View Data](./img-ctwing/image-9.png)
