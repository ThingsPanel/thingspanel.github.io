---
sidebar_position: 1
---

# China Mobile OneNet Integration

This article introduces how to quickly connect devices from the OneNet platform to the ThingsPanel platform.

## Device Connectivity Service Introduction

OneNet platform provides multiple access methods.

- **service_plugin_onenet** Device Connectivity Service:
  - This service accesses data via the HTTP push service of the OneNet platform.

## Integration Process

### Prerequisites

1. Register a OneNet account.
2. Register or deploy ThingsPanel platform, and deploy OneNet Device Connectivity Service.
3. OneNet Device Connectivity Service is registered to the platform.
   ![Device Connectivity Service Management](./img/image-11.png)

### Steps

- **OneNet Platform Configuration**
  - Login to OneNet platform, enter Developer Center.
      ![Login](./img/image.png)
  - Create Product.
      ![Create Product](./img/image-1.png)
  - Add Device.
      ![Add Device](./img/image-2.png)
  - Set Data Forwarding (Stream).
    - ![Set Forwarding](./img/image-3.png)
    - `c.thingspanel.cn:8280` is the service address and port of the device connectivity service.
  - Simulate Device Pushing Data.
      ![Simulate Data](./img/image-4.png)
  - Get Product ID and ACCESS_KEY.
      ![Get ID and Key](./img/image-7.png)

- **ThingsPanel Platform Configuration**
  - If no device template for this service exists, create one.
      ![Device Template](./img/image-8.png)
  - Enter Service Access page.
      ![Service Access](./img/image-5.png)
  - Add Service Access Point.
      ![Add Service Access Point](./img/image-6.png)
  - Select Devices to Access.
    - Note: This list only displays devices that have pushed data.
      ![Select Devices](./img/image-9.png)
  - After data push, view data in device details.
      ![View Data](./img/image-10.png)

## Others

ThingsPanel provides a Device Connectivity Service development template. Other integration methods can be developed by yourself referring to the Device Connectivity Service development process.
