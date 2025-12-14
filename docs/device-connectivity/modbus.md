---
sidebar_position: 4
---

# Modbus RTU

## Prerequisites

Install Modbus Device Connectivity Service and register the service as System Admin.

[ThingsPanel 1.0.0 Modbus Service Installation Guide](https://github.com/ThingsPanel/modbus-protocol-plugin)

## Operation Flowchart

```mermaid
graph TD
    A["Create Sub-device Model (Optional)"] --> B["Create Gateway Template"]
    A --> C["Create Sub-device Template"]
    B --> D["Create Gateway Device"]
    C --> E["Create Sub-device"]
    D --> F["Add Sub-device to Gateway & Set Slave Addr"]
    E --> F
    F --> G["Configure Device Side"]
    G --> H["View Data on Platform"]
```


## Onboarding Steps

### Create Modbus Gateway Device on Platform

1. Create Gateway Device Template
   1. Create Device Template. ![Create Template](modbus_image/image.png)
   2. In Protocol Configuration, select Modbus_RTU or Modbus_TCP. ![Protocol Config](modbus_image/image-1.png)
2. Create Device, bind the Gateway Template created above.
   1. Go to `Device Connectivity` -> `Device Management`, click `Add Device` to create gateway device. ![Add Device](modbus_image/image-2.png)
   2. Fill in Registration Packet info (Ensure consistency with Gateway or DTU config, and disable device heartbeat packet). ![Reg Packet](modbus_image/image-3.png)
   3. Power on the device, you should see it online.

### Create Sub-device for Modbus Gateway

1. Create Sub-device Template
   1. Create Device Template. ![Create Template](modbus_image/image-4.png)
   2. In Protocol Configuration, select Modbus_RTU or Modbus_TCP. A config form will appear. Fill in config info as prompted. ![Protocol Config](modbus_image/image-5.png)
2. Create Device, bind the Sub-device Template.
   1. Go to `Device Connectivity` -> `Device Management`, click `Add Device` to create sub-device. ![Add Sub-device](modbus_image/image-6.png)
   2. Set Heartbeat Time. ![Heartbeat](modbus_image/image-9.png)
3. Bind Sub-device to Gateway
   1. Go to `Device Connectivity` -> `Device Management`, select the corresponding Gateway Device, choose Sub-device tab, click Add Sub-device, select the sub-device to add. ![Bind Sub-device](modbus_image/image-7.png)
   2. Modify Sub-device Address (Slave Address). ![Modify Slave Address](modbus_image/image-8.png)
   3. View Sub-device details. If configured correctly, the sub-device should report data normally.


## Onboarding Result

![ThingsPanel Data](image/modbus_device-detials.png)

## References

[Connecting Smart Meter via USR-DR154 Gateway to ThingsPanel](http://thingspanel.cn/posts/54)
