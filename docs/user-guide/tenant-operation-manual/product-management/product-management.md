---
sidebar_position: 1
---

# Product Management

## 1. Description

Product Management mainly solves data preparation for mass production and device pre-registration. Functions include:

- **Create Product**: Select device plugin, bind protocol, select authentication method, providing basic config for device pre-registration.
- **Batch Management**: Create device batches, export data, import data. Supports One-Unique-Secret per device.
- **QR Code Data**: Export QR code data for production and user App scanning.
- **Manual Activation**: Manually activate devices.
- **Pre-registration Management**: Check device activation status.

## 2. Steps
1. Create Product
2. Create Batch
3. Generate Batch
4. Add Device in Pre-registration List
5. Add Firmware to Product
6. Online device before creating task, subscribe to `ota/device/infrom/AccessToken`
7. Add Upgrade Task, select devices
8. Check Task List after receiving upgrade info
9. Simulate upgrade progress reporting to `ota/device/progress`. Example:
    ``` {"step":"2","desc":"Progress 2%","module":"default"} ```
10. Check progress in Task List
11. Push 100% progress to complete

## 3. Operations

### 3.1 Product Management & OTA Flow
![Flow](./images/image89.png)

### 3.2 Device Auto Registration
![Auto Registration](./images/image90.png)

### 3.3 Product List
![Product List](./images/image91.png)

### 3.4 New Product
- Bind Device Config when creating product.
![New Product](./images/image92.png)

### 3.5 Pre-registration Management
![Pre-registration](./images/image93.png)

### 3.6 Create Batch
![Create Batch](./images/image94.png)
