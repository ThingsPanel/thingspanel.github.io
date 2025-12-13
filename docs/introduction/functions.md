---
sidebar_position: 3
---

# Features

## I. System Architecture & Deployment Environment

1. Supports deployment on major operating systems including Windows, Linux, NeoKylin, UOS, Deepin, Kylin, NewStart, etc.
2. Supports various CPU architectures: x86, AMD64, ARMv7, ARMv8, ARM64.
3. B/S Architecture: Supports browser-based access for login, information viewing, device control, and data management.
4. Multiple installation methods: Windows Installer, One-click Script, Docker, K8s, Source Code.
5. Supports virtualization software.
6. Mobile App support for Android and iOS; can also be published as WeChat Mini Programs.
7. Supports Single-node and Cluster deployment (Cluster supports High Availability & High Concurrency).
8. Compatible with open-source and domestic databases: PostgreSQL, TimescaleDB, TDengine, Tencent TDSQL, Alibaba PolarDB, KingBase, Dameng Database, etc.
9. High-performance Middleware: MQTT Brokers (EMQ, VerneMQ, GMQTT), Redis/NoSQL for caching.
10. Hardware agnostic: Deploys on everything from Set-top Boxes (1 Core 1G) and Raspberry Pis to large servers.
11. **Security**: Compliant with **MLPS Level 3**.
12. Performance: Supports millisecond-level high-frequency and million-point high-concurrency data writes.
13. Supports AI Algorithm Center, integrating various algorithms, large models, and Agents for predictive maintenance, equipment failure prediction, energy optimization, etc.

## II. Admin Management Functions

1. **Global Dashboard**:
   - Real-time monitoring of system resources (CPU, Memory, Disk).
   - Display comprehensive data: Tenant config, Total devices, Online/Offline devices, Alerts.

2. **Device Connectivity Service Management**:
   - Manages **Device Connectivity Services** and **Third-party Integration Services**.
   - Supports adding new custom services for protocol extension.
   - Custom MQTT service addresses and subscription topic prefixes.
   - Custom service identifiers and version numbers.
   - Service status monitoring (Running/Paused).

3. **Visualization Management**:
   - Set default dashboard for Super Admin.
   - Set custom dashboard as homepage.

4. **System Management**:
   - **Tenant Config**: Multi-level tenant management.
     - Resource limits (Device count, Daily messages, Data retention days).
   - **Tenant Management**: Edit tenant info, impersonate tenant account.
     - Tenant password reset.
     - Tenant Freeze/Unfreeze.
     - Tenant Search (Email, Name, Status).
   - **System Settings**: Edit System Title, Logo, Background.
     - Data Cleanup Policies.
     - Tenant Registration Control, Captcha Login, Frontend Encryption.
   - **Menu Management**: Set global menu order, routing, names.
     - Show/Hide menus.
     - Menu permissions (System Admin / Tenant).
   - **Notification Service**: Email and SMS configuration.
     - Push message management.

## III. Tenant Management Functions

### 1. Functional Structure
Includes: Dashboard Overview, Device Connectivity, Visualization, Automation, Alerts, Product Management, Data Services, System Management.

### 2. Registration & Login
1. **Login Methods**: Phone, Email, etc.
2. Password Recovery.

### 3. Device Management

1. **Search & Filter**:
   - Filter by Group, Device Template, Online Status, Alert Status.
   - Filter by Device Type (Direct, Gateway, Sub-device).
   - Filter by Access Method (Protocol/Service).
   - Search by Name, Tag.
   - **Device Map** view.

2. **Protocol Support**:
   - MQTT, Modbus RTU, Modbus TCP.
   - China Mobile OneNET, China Telecom CTWing.
   - GB28181 (National Standard Video Security).
   - Hikvision Integrated Security Platform.
   - OPC UA.
   - Beidou Satellite 2/3.
   - Hydrology protocols, Water Resource protocols, IEC104.
   - GB26875.3-2011 Alarm Transmission Protocol.

3. **Device Onboarding**:
   - Manual, Protocol-based, Code-based, Service-based addition.
   - Third-party platform device addition.
   - **Unified Entry**: Global devices added via a single method, covering direct protocol, third-party integration, gateways, sub-devices. Supports cameras, sensors, GPS, etc.
   - **New Protocols**: Add new protocols by developing a new Device Connectivity Service without changing the core platform.
   - Supports Sequential Onboarding and Pre-configuration mental models.

4. **Device Details Management** (10 Tabs):
   - **Telemetry**:
     - Command downlink.
     - Operation logs.
     - Data simulation.
     - List/Curve display.
     - Time ranges (5 mins to 1 year).
     - JSON/Binary data reporting.
     - Aggregation (1 min to 1 month): Max, Min, Avg, Diff, Count.
     - Data Export.
     - Line, Bar, Scatter charts.
   - **Charts**: Render charts based on Device Model configuration.
     - Supports Device SCADA/Topology.
   - **Connection**: View parameters (Server, Port, Auth, Topics).
   - **Info**: Manage device location, maintenance info, custom fields.
   - **Properties**: View reported properties, set writable properties.
   - **Events**: Alerts, Battery levels, special events.
   - **Commands**: Remote control.
     - Create common commands.
     - Quick command execution.
   - **Shadow/Desired Messages**: Telemetry, Property, Command types.
     - Offline message caching.
     - Expiration settings.
     - Message status tracking.
   - **Automation**: Create per-device rules (Alerts, Schedules, Scenes).
   - **Users**: Add/Remove associated users.
   - **Settings**: Change Device Template.
     - Manually adjust online status.
     - View firmware info.
   - **Diagnosis**: Visualized device communication health monitoring.
     - Statistical Indicators (Uplink/Downlink/Storage success rates).
     - Failure Record Tracking.

5. **Device Groups**:
   - One device can belong to multiple groups.
   - Create, Search, View, Delete groups.
   - Sub-groups.
   - Multi-industry hierarchy adaptation (Agriculture, Environmental, Industrial, etc.).

### 4. Device Template Management

1. **Create Template**:
   - Custom Name.
   - Select Device Model.
   - Support Direct/Gateway/Sub-device.
   - Support all protocols and third-party integrations.

2. **Template Functions** (8 Tabs):
   - **Associated Devices**: Batch add/remove.
   - **Attributes & Functions**: Operate directly on bound Device Model.
   - **Protocol Config**: Protocol selection.
   - **Data Processing**: Telemetry Uplink/Downlink preprocessing.
     - Lua Script support.
     - Real-time processing (e.g., Rounding, Fault Prediction via Voltage, Power Calculation via V*I).
   - **Automation**: Batch automation for devices using the template.
   - **Alerts**: Batch alert rules.
   - **Extensions**: Define custom fields (String/Bool/Number) with default values and auto-generated forms.
   - **Device Settings**:
     - **One Device One Secret** / Certificate fetching.
     - Online Strategy (Timeout, Heartbeat).
     - Auto-create device config.
     - Copy Password.
     - Delete Template.

### 5. Device Model Management

1. **Basic Info**: Name, Tags, Author, Version.

2. **Field Definitions**:
   - **Telemetry**: String, Number, Bool, Enum. R/W permissions, Units.
   - **Properties**: String, Number, Bool, Enum. R/W permissions, Units.
   - **Events**: Add parameters (String, Number, Bool). Multiple events.
   - **Commands**: String, Number, Bool, Enum. Common commands.

3. **Chart Configuration**:
   - Add charts (Line, Digital Indicator, Value Downlink, Enum, Gauge, Card, Table, Text, Video).
   - Configure Mobile App Device Details.

4. **Export**: Export to JSON.

### 6. Service Access
- Connect third-party platforms.
- Integrate external device data.

## IV. Visualization Functions

### 1. Visualization Screen (Big Screen) Management

1. **Basic Functions**: New, Edit, Preview, Search, Grouping.
2. **Editor**: Layer Management, Z-Index.
3. **Components**:
   - **Basic**: Text, Number, Marquee, Time, Countdown, Link, Flipper, Input, Button, Switch, Decorators.
   - **Charts**: Line, Bar, Pie, Radar, Scatter, Funnel, Sankey, K-Line, Water Wave, Gauge.
   - **3D**: 3D Bar, 3D Curve.
   - **Visuals**: Video, Image, Icons (Industrial, Chemical, Agricultural, etc.).
   - **Custom Components**: Business/System components.
4. **Page Editor**: Zoom, Adaptive, Align, History, Snapshot, Resolution settings, Magnetism, Theme.

### 2. Dashboard Functions

1. **Basic Management**: New, Search, Set as Home, Edit, Drag & Drop.
2. **Themes**: Minimal White, Tech Blue, Apple Purple, Microsoft Style, Cool Black.
3. **Components**: System (Device counts, trends), Devices, Plugins, Charts.
   - Data binding.
   - Property settings.

## V. Automation Functions

### 1. Scene Linkage (Automation)

1. **General**: Create, Search.
2. **Triggers**:
   - **Device**: Single Device, Device Category, Group.
   - **Time**: One-time, Recurring (Hourly/Daily/Weekly/Monthly), Cron.
3. **Actions**: Control Device, Activate Scene, Trigger Alert.

### 2. Scene Management

1. **General**: Create, Search, List.
2. **Operations**: Activate, Edit, Logs, Delete.
3. **Editing**: Batch control multiple devices.

### 3. Notification Management

1. **Logs**: View Email/SMS/Voice/External notifications. Status tracking.
2. **Notification Groups**: Create groups, select methods (Email, Voice, SMS), Enable/Disable.

## VI. Alert Functions

1. **Alert Info**: Time, Name, Status, Content, Description. Handle alerts.
2. **Alert Config**: Name, Level, Notification Group, Enable/Disable.

## VII. Product Management

1. **Product List**:
   - Add Product (Select Template).
   - Pre-registration.
   - Supports **One Product One Secret** and **One Device One Secret**.

2. **Pre-registration**: Batch creation, Export, Batch upload.

3. **OTA Upgrade**:
   - Firmware Packages (Diff/Full).
   - Version Management.
   - Tasks & Progress Monitoring.
   - Signature Algorithms.

## VIII. Data Services

1. **Data Forwarding**:
   - Create Rules (Enable/Edit/Delete).
   - Sources: Telemetry, Property, Event, Online/Offline.
   - Scripting with parameters & debugging.
   - Targets: MQTT, HTTP.
   - Multi-cast.
   - Integration with FUXA SCADA.

## IX. System Management

1. **Open API**: API Key management.
2. **System Logs**: Audit trails (User, IP, Path, Method, Time). Device Logs.
3. **Role Management**: RBAC, Page-level permissions.
4. **User Management**: Add, Edit, Reset Password, Roles, Freeze.

## X. Mobile App Functions

1. **Basic**: Device List, Groups, Details, Control, Generated UI.
2. **Scenes**: Manage Automation.
3. **Alerts**: View Alerts.
4. **Onboarding**: Scan QR Code.

## XI. Technical Characteristics

1. **Protocols**: MQTT, TCP, HTTP, Modbus, GB28181, OPC UA, Beidou, Hydrology, IEC104, GB26875.3. Custom Protocols.
2. **Integrations**: Hikvision, OneNET, CTWING, ChirpStack.
3. **Advantages**: Ease of Use, Compatibility, Componentization.
4. **Tech Stack**:
   - **Golang**: High concurrency, low footprint.
   - **Vue.js 3**.
   - **Node.js**.
   - **Databases**: PostgreSQL, TimescaleDB, TDengine, Cassandra, TDSQL, PolarDB, KingBase.
   - **Nginx**.
   - **Brokers**: GMQTT, VerneMQ.
   - **Cache**: Redis.
   - **Monitoring**: Prometheus.
   - **Security**: DeepSource.

## XII. Performance Metrics

- **Concurrent Users**: 100 - 100,000.
- **Device Scale**: Single node 5,000 pts/sec, Cluster 1M+ pts.
- **Throughput**: 500k msg/sec.
- **Daily Capacity**: > 100M messages.
- **Latency**: < 1s (Page Load & Query).
- **Availability**: > 99.99%.
- **Retention**: Automatic cleanup.

## XIII. Secondary Development

- Online Documentation.
- Open API Docs.
- Development Templates.
- **LLM/AI Integration**: Supports MCP protocol, integration with DeepSeek, Qwen, ChatGLM for "Thinking IoT".
- **AIoT**: Supports ESP32 with voice capabilities (ASR/TTS/LLM) for Human-Machine Interaction.