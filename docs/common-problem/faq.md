---
sidebar_position: 1
---

# FAQ

## Is ThingsPanel based on ThingsBoard?

No. ThingsPanel is not based on ThingsBoard and does not depend on ThingsBoard to run. ThingsPanel maintains its own plugin-based device connectivity architecture, platform features, connectivity services, and visualization applications.

## What server configuration does ThingsPanel require?

The minimum configuration is **1 CPU core, 1 GB RAM, and 10 GB disk**, suitable for evaluation, development, testing, and a small number of devices.

For production, **4 CPU cores, 8 GB RAM, and 100 GB disk** are recommended. Actual capacity also depends on reporting frequency, retention period, installed plugins, database workload, and disk I/O. For production projects, benchmark the target workload and leave room for growth.

Common CPU architectures are generally supported, including x86/AMD64 and ARM. The exact choice depends on the operating system and installation method.

## Does ThingsPanel support mobile apps?

Yes. ThingsPanel provides Web and mobile applications. The mobile app supports Android and iOS. If you need a Mini Program or H5 application, you can deploy and publish it based on the mobile application source code.

See the [demo and mobile application guide](../introduction/demo).

## Can the Community Edition be used commercially for free?

Yes. The ThingsPanel Community Edition can be used in commercial projects at no license cost. Its core code is released under the Apache 2.0 license. You must comply with the license requirements, including copyright and license notices; third-party components and services included in a project remain subject to their own licenses and terms.

## Which operating systems and deployment methods are supported?

ThingsPanel supports common operating systems such as Linux, Windows, and macOS. It can be deployed with Docker, the one-click installation script, or from source code. Projects that require high availability or high concurrency can use a cluster deployment.

See the [quick deployment guide](../quick_start/quick_start.md) before your first installation.

## Which devices and communication protocols are supported?

ThingsPanel supports direct devices, gateways, and sub-devices. Common protocols include MQTT, HTTP, TCP, Modbus RTU/TCP, OPC UA, GB28181, and several hydrology, power, and alarm industry protocols. Some third-party platforms can also be integrated.

If an existing device uses a private protocol, you can extend ThingsPanel with a device connectivity service or custom protocol. See the [device connectivity overview](../device-connectivity/overview).

## Is an SDK required to connect a device?

No. A device can connect directly through a supported protocol using a standard client such as MQTT or HTTP. If the protocol is not supported yet, you can develop a custom device connectivity service without changing the platform's core business logic.

## Can devices be added in batches?

Yes. ThingsPanel supports manual addition, batch import, adding by device ID, and batch access through third-party platforms. Batch import is suitable for initializing many devices, while adding by ID is useful for pre-registered devices bound through scanning or device information.

## Does ThingsPanel support remote control, alarms, and OTA updates?

Yes. The platform can display real-time and historical data, send properties or commands through the device protocol, configure alarm rules and notifications, and perform OTA updates for MQTT devices. The exact capabilities depend on the device protocol and firmware support.

## Can ThingsPanel integrate with existing business systems or third-party platforms?

Yes. ThingsPanel provides APIs and device connectivity services for device management, data queries, real-time data subscriptions, and business-system integration. It also supports synchronizing device data through third-party connectivity services. Confirm authentication, data formats, and permissions with the target system before integration.

## How should I choose a deployment configuration for my device count?

Do not estimate only by total device count. Devices with the same count can create very different loads depending on reporting frequency, message size, and data retention period.

Start with the minimum configuration for validation, then estimate production resources using device count, reporting frequency, payload size, and retention period. For higher throughput, device scale, or availability requirements, use the recommended configuration and benchmark the target workload or deploy a cluster.

## What should I do before upgrading ThingsPanel?

Back up the database, configuration files, custom plugins, and extensions before upgrading. Check version compatibility first; direct upgrades are not always supported across major versions. Read the relevant upgrade notes and validate the upgrade in a test environment before upgrading production.

See the [system upgrade guide](../installation/system_upgrade).
