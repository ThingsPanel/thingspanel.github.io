---
sidebar_position: 1
---

# Why ThingsPanel？

**ThingsPanel** is a lightweight, easy-to-use, component-based open-source IoT application support platform. It aims to reduce development work and accelerate the construction of IoT projects through reusable components.

The main plugin categories of ThingsPanel include:

- **Device Models**: Integration of thing models and charts.
- **Device Templates**: Integration of device models and access services.
- **Protocol Components**: Enable direct device connectivity.
- **Third-Party Components**: Integrate devices via third-party platforms.
- **Dashboard Cards**: Extend dashboard display capabilities.
- **Visualization Components**: Enhance big-screen visualization.
- **Dependent Components**: Industry-specific solution building blocks.

With the **reusability** of these components, development efficiency is significantly improved.

## Product Use Cases

- Unified device management
- IoT middle platform
- Backend for equipment vendors

## Problems Solved

- **Hobbyists**: Open architecture unleashes creative potential.
- **Integrators**: One platform to deliver all intelligent projects.
- **Solution Providers**: Save time and cost to quickly meet business needs.
- **Device Manufacturers**: Focus only on making devices; no need to handle software.
- **End Customers**: One platform for device integration and IoT data operations.

## Unique Advantages

- **Ease of Use**: Simplifies IoT, making it easier to understand.
- **Compatibility**: Supports a variety of protocols, reducing expansion costs.
- **Componentization**: Open architecture, diverse components, rapid assembly.

## User Value

1. **Significantly Increased Efficiency**
   - Reusable plugin components boost development efficiency by 2–10×
   - Rapid application construction shortens delivery from months to weeks
   - Standardized templates eliminate 80% of repetitive work

2. **Substantially Lower Costs**
   - Over 50% reduction in development manpower
   - Over 70% reduction in maintenance expenses
   - Plugin reuse avoids redundancy, saving infrastructure costs

## Feature Overview

- **Multi-Tenant Management**: Super admin, tenant account management, user-level device and data access
- **Device Integration**: Project creation, grouped device management, push status monitoring, plugin access, gateway/sub-device support, Modbus RTU/TCP, TCP protocol, GB28181 cameras, custom device services
- **Monitoring Dashboards**: Device monitoring charts, configurable as menus or homepage, support multiple dashboards
- **Device Models**: Define data models, Web/App charts, export to JSON
- **Device Templates**: Bind attributes/functions, protocol configs, automation, alerts, metadata, settings, device credentials
- **Device Map**: Filter by project, group, or type
- **Visualization**: Visual editor, open architecture, prebound charts, custom graphics, loosely coupled system; supports SCADA, big screens, 3D, Three.js
- **Product Management**: Product creation, batch management, QR codes, manual activation, pre-registration
- **Firmware Upgrade**: Add firmware, create upgrade tasks, upgrade reports
- **Automation**: Scene linking, scene logs, scheduled triggers, device triggers, multiple trigger modes
- **Alarm Information**: Filter alarms by project/group and time
- **Notification System**: SMS, email, call, webhook support
- **System Logs**: IP access logs, device operation logs
- **App Management**: Plugin management, plugin generator, installation, app marketplace
- **Protocol Access**: Define custom protocol configuration and access parameters
- **Third-Party Integration**: Connect devices via third-party platforms
- **User Management**: Casbin-based RBAC, page/project permissions, multiple roles
- **Data Gateway**: OpenAPI, system integration, IP/data range restrictions, read authorization
- **System Settings**: Change logo, system title, theme styles
- **IoT App**: Built with Uniapp; scan to add devices, view metrics, switch projects/groups, manual control, control strategy, logs, account management, SMS login
- **Dependent Plugins**: Used for industry solutions; built on device plugins and other data/functions, visual invocation, iframe embedding, plugin reuse

## Tech Stack

- **Golang**: Excellent concurrency performance, cost-effective, suitable for edge devices
- **Vue.js (v3)**: Easy to learn and use
- **Node.js (v16.13)**: Free, open-source, cross-platform

### Databases

- **PostgreSQL**: Large community, low cost
- **TimescaleDB**: Time-series DB plugin for PostgreSQL
- **TDengine**: High-performance time-series DB (China-made)
- **Cassandra**: Distributed key-value storage
- **TDSQL-PostgreSQL**: Tencent's distributed PostgreSQL DB
- **PolarDB-PostgreSQL**: Alibaba Cloud's high-performance distributed DB
- **KingBase**: KingbaseES from China

### Web Server

- **Nginx**: High-performance web server

### MQTT Broker

- **GMQTT**: High-performance message queue
- **VerneMQ**: High-performance distributed MQTT broker

### Cache

- **Redis**: NoSQL cache database
