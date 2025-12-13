---
sidebar_position: 9
---

# Release Notes


## ThingsPanel-Ver1.1.11 Release Notes
Release Date: 2025-11-24

We officially released ThingsPanel v1.1.11! This update focuses on **Device Diagnostics**, **Topic Mapping**, **Modbus Gateway Capabilities**, and **GMQTT Performance**, bringing significant improvements to multi-protocol device access, troubleshooting, and system stability.

### New Features

- **Modbus Gateway Access Service**: Added support for BADC and CDAB byte order formats.
- **GMQTT Web Management**: Added GMQTT management Web interface, supporting login auth, client/subscription management, and dashboard metrics.
- **Topic Mapping**: Added Topic Mapping configuration page (Frontend) and API (Backend) to centrally maintain upstream/downstream Topic relationships.
- **Device Diagnosis**: Added "Device Diagnosis" service and "Diagnosis" page to view upstream/downstream failure records and error tracking.
- **Device Activity Record**: Added "Status History Tracking" and frontend display for device online/offline history.
- **Frontend Tools**: Added text copy tool for one-click copying of key info like Device ID.
- **Attribute Downlink**: Supported both "Select Defined Attribute" and "Custom Attribute" modes.
- **Extended Info**: Refactored extended info cards to Key-Value style lightweight JSON editing and saving.

### Optimizations and Fixes

**Optimizations**
- **Modbus**: Optimized Modbus exception response flow (support draining and retrying) and byte/word swap logic. Added authentication failure rate limiting.
- **GMQTT**: Fully refactored topic mapping logic; Enabled **Retained Message**; Optimized message publishing (QoS 1 and async timeout); Increased concurrency queues and Inflight message limits.
- **System Stability**: Unified logs to structured format; Enhanced log configuration and component caching; Improved cache invalidation logic.
- **Device Management**: Enhanced robustness of device deletion; Optimized device group retrieval and device list pagination.
- **Frontend**: Optimized multiple language texts ("New", "Device Template", "Thing Model").

**Fixes**
- **Modbus**: Fixed data misalignment in RTU mode; Fixed loop exit logic on connection error.
- **Data Export**: Fixed error when exporting boolean type telemetry data.
- **Error Handling**: Optimized exception returns for startup scripts, device activation, and HTTP services.
- **Sub-devices**: Fixed sub-device address assignment logic.
- **UX Fixes**: Removed redundant prompts on device connection page; Optimized login error handling and loading states; Fixed Device Map height issues; Fixed button display issue when adding sub-devices.
- **Cleanup**: Removed debug logs and invalid logic from hotfix branches; Removed outdated documentation.

## ThingsPanel-Ver1.1.10 Release Notes
Release Date: 2025-10-27

### New Features

- **Multi-layer Gateway Device Support**:
  - Supports "Gateway → Sub-gateway → Terminal Device" multi-layer structure communication.
  - Supports upstream/downstream data forwarding and command penetration.
  - Bindings, events, attributes, and telemetry are fully transmittable.
- **User System Enhancements**:
  - Phone numbers support international area code format queries.
  - Added address management (CRUD) and profile completion (avatar + address).

### Optimizations and Fixes

**Optimizations**
- **MQTT Message Architecture Refactoring**:
  - Unified telemetry, events, commands, and status updates into a single message stream.
  - Optimized message distribution logic to reduce duplicate subscriptions and blocking.
  - Refactored MQTT adapter for better extensibility.
  - Auto-reconnect restores subscriptions to solve message loss issues.
- **WebSocket Optimization**: Used Redis Pub/Sub to replace MQTT for real-time device status push, enabling "second-level" response.
- **Alerts & Notifications**: Richer Webhook push content; Optimized message structure; Unified standard UUIDs.
- **Architecture**: Integrated Flow and MQTT modules; Optimized storage layer buffering; Unified log formats.

**Fixes**
- Fixed error when device template is empty.
- Fixed bug where manual reconnection was required after modifying device number.
- Fixed automation task startup failure and lock contention.
- Fixed inability to login after modifying phone number.
- Fixed conflicts in batch insertion of telemetry data and dashboard type issues.
- Optimized SSE interface to prevent premature connection closure by Nginx.

## ThingsPanel-Ver1.1.9 Release Notes

### New Features
**Device Management**
- Added interface to get device list by service identifier.
- Added "Last Offline Time" field to device table to monitor status.
- Added search function to device selector.
- Added delete function to device details page.
- Added auto-registration switch and password copy function to device configuration.
- Added interface for batch querying telemetry statistics of multiple devices.

**Data & Scripts**
- Upgraded data parsing editor to ``monaco-editor`` and added toolbar.
- Enhanced data forwarding script debugging and error handling.
- Added username display to attribute setting list and command logs.

**Security & Authentication**
- All WebSocket interfaces support ``x-api-key`` authentication.
- Added multi-language support for auto-login.

**User Interface**
- Added dynamic background and card styles to login page.
- Added language packages for theme configuration.
- Added multiple card components:
  ➢ Recent Visit Card
  ➢ CPU/Memory/Disk Monitoring Card
  ➢ Alert Info & Report Card
  ➢ Operation Wizard Card
  ➢ App Download Card
- Added view memory function to device configuration.
- Optimized device name click navigation.

**Multi-language Support**
- Implemented Internationalization (i18n) 2.0 system.
- Updated translations and UI optimization.
- Added English language pack (Cards/Dashboards/Device Templates, etc.).
- Added multi-language status support for linkage conditions.

**System Configuration**
- Support specifying custom config file path at startup.
- Optimized scene linkage function.

### Optimizations and Fixes
**Device Issues**
- Fixed gateway telemetry script not taking effect.
- Fixed form validation when changing device types.
- Fixed form display exception when device type is 3.
- Fixed operation column title display in device analysis.

**Interfaces & Authentication**
- Fixed missing ``device_number`` field in SDK device query interface.
- Fixed issues related to error response code 200068.
- Fixed ``auth_type`` not echoing in service modal.
- Added ``auth_type`` field to vouchers on service submission.

**User Experience**
- Fixed system title wrapping and unified style.
- Fixed routing navigation and click event bubbling issues.
- Fixed page number not resetting when querying user management.
- Fixed incorrect display conditions for authentication types.
- Optimized version detection logic and added error handling.

**System Stability**
- Fixed alert flow exception issues.
- Resolved runtime exceptions when email service does not exist.
- Unified use of discrete messaging components.
- Fixed inconsistent form indentation.

**Technical Improvements**
- Memory Management: Reduced build memory usage and manual chunking.
- Code Quality: Updated ESLint/Prettier configuration.
- Routing Optimization: Improved route configuration and permission guards.

**Documentation**
- Added AI Internationalization Guide.
- Updated README and config file instructions.
- Removed built-in card components and related resource files.

## ThingsPanel-Ver1.1.8 Release Notes

### New Features

**Device Management**
- Added **One Product One Secret** authentication to enhance device onboarding security and convenience.
- Device configuration supports image upload to enrich device info display.
- Added device deletion function.
- Added search field to sub-device selector to improve user experience.
- Extended dynamic registration interface to support gateway sub-device registration.
- Added auto-registration switch and password copy function (Device Config Details Page).

**System Management**
- Added system version detection and GitHub link entry.
- Added i18n support for user role type fields.
- Added Clipboard.js password copy function (supports failure prompt and manual popup).

**Scene Linkage**
- Added multi-language support for linkage condition status.

**Interface Navigation**
- Added quick jump links to Device Management/Visualization Dashboard in Operation Guide Card.
- Terminology Optimization: Updated "Service Access" → "Third-Party Access".

### Optimizations and Fixes

**Device Management Optimization**
- Optimized performance of interface for getting latest active device telemetry data.
- Unified platform response format for Gateway and Direct devices.
- Unified status dot display logic for Device Cards and Lists.
- Optimized card hover effect / shadow style / click event processing.
- Added mobile layout adaptation and content area scrollbar style.
- Fixed internationalization key error for device analysis operation column title.

**Device Management Fixes**
- Fixed issue where inactive devices appeared when adding sub-devices under gateway.
- Fixed defect where unbound sub-device list query interface showed inactive devices.
- Solved configuration issue where gateways could not receive commands.

**Visualization Dashboard**
- Refactored dashboard list layout using ``DevCardItem`` component.
- Removed card hover effect, optimized bottom icon and text display.
- Added card loading status indicator.

**System Stability**
- Fixed timezone calculation error in tenant statistics.
- Added database connection retry mechanism to improve system reliability.
- Fixed Token authentication issue for WebSocket interface.

**UI Optimization**
- Fixed system title wrapping on login page, unified title style.
- Refactored background animation and card style.
- Adjusted avatar size in Personal Center, added system description field.
- Fixed template syntax errors, adjusted modal/date picker width.
- Optimized success prompt logic and form state reset for device config page.

**Code Quality**
- Removed redundant semicolons, unified formatting standards.
- Updated Prettier config to support TypeScript parsing.
- cleaned up test routes/view files, simplified route configuration.

## ThingsPanel-Ver1.1.7 Release Notes

### New Features
- Added Get System Version Interface.
- Added Tenant Latest Reported Data Query Interface.
- Added CPU, Memory, Disk Monitoring Interfaces.
- Added Device Alert Count Statistics Interface.
- **Home Page**
  - Added Default Home Page.
- **Card Components**
  - Added App Download & Version Info Card.
  - Added System Metrics History / Tenant Stats / Tenant Chart Card.
  - Added Recent Visit Record Card (supports page list display).
- **Charting**
  - Supported telemetry data historical filtering.
  - Added CPU/Memory/Disk Usage Card (gradient background).
- **Security**
  - Added API Key mask display logic.
- **Device Templates**
  - Added hover tooltips for access methods on creation page.
  - Added Enum Control Chart configuration function.

### Optimizations and Fixes
#### System Level
- Handled issue where downlink control scripts did not take effect.
- Fixed event reporting script errors.
- Fixed list display failure caused by attribute reporting type changes.
- Optimized backend log output.
- Optimized app initialization process, implemented modularity and dependency injection.
- Fixed issue where expired Token returned multiple errors.
- Fixed exception in log query with time conditions.

#### Scene Linkage
- Modified validation logic for scene linkage attribute reporting.
- Handled defect where scene linkage events did not trigger.
- Changed Device ID to Device Name in scene linkage and scene logs.
- Fixed exception when setting custom control downlink in scenes.
- Fixed "identifier not found" error for custom control execution in scene activation.
- Added scene name to scene activation logs.
- Fixed issue where multiple device conditions showed same device name in logs.
- Sorted scene management list by creation time descending.

#### Alert Module
- Supplemented failure reasons for alerts.
- Fixed defect in alert recovery.
- Added failure reasons to alert logs.
- Handled defect where alert email push failed.

#### Data Processing
- Optimized automation trigger log recording.
- Fixed logic defect in data script caching.
- Fixed "Unsupported Type" defect for custom attribute downlink.

#### Notification System
- Fixed incorrect data in notification group list query interface.
- Handled defect where email test interface did not validate email format.

#### Login & Account
- Fixed "Remember Me" function state retention exception.
- Auto-redirect to login page after registration (removed token auto-login).
- Fixed redundant password validation prompt (optimized 6-digit pure number validation).
- Synchronized password prompt update on language switch.
- Optimized incorrect email format prompt.
- Added internationalization support for phone number format validation.

#### Device Management
- Added auto-refresh logic after filtering device list.
- Service Access jump defaults to checking corresponding service device.
- Unified device number display as "Device Number (Device ID)".
- Automatically encapsulated ``gateway_data`` field for gateway device messages.
- Real-time refresh after deleting device extended info.
- Added name completion display to device command downlink page.
- Fixed telemetry log pagination count exception.

#### Dashboard & Visualization
- Upgraded chart components to latest ``vue-echarts``.
- Added name search function to device selector.
- Added secondary confirmation popup for dashboard deletion.
- Added operation feedback prompt after saving dashboard.
- Defaulted device selection list to reverse chronological order.
- Modified tenant default dashboard template.

#### Data Display
- Auto-truncated overly long telemetry attribute text (...).
- Fixed empty display for bool type logs.
- Fixed check exception for bar charts with "-" fields.
- Optimized table data rendering logic (enhanced null handling).

#### Internationalization
- Unified terminology in device pages (Model -> Template).
- Synchronized captcha button text updates.
- Added internationalization terms like "Operation Failed".
- Fixed translation error for notification record column titles.

#### Interaction Optimization
- Completed validation logic for registration agreement checkbox.
- Extended support for input box clear function.
- Adapted browser tab title to page function.
- Extended system log time filter range to 23:59:59.
- Fixed alert time filter end time exception.
- Fixed 404 issue for super admin login.
- Fixed captcha login request not sent issue.
- Fixed command misfire due to missing JSON format validation.
- Optimized device template association exception prompt.
- Fixed automation group input box locking issue.

## ThingsPanel-Ver1.1.6 Release Notes

### New Features
- Added **Alert Details Query Interface** within Alert Module for more detailed info.
- Added **Get Tenant ID Interface** in User Authentication to improve convenience in multi-tenant scenarios.
- Added **Device Single Metric Chart Data Query Interface** in Device Module for flexible data analysis.

### Optimizations and Fixes
#### User Authentication
- Fixed incomplete return of Get User Info interface.
- Optimized tenant registration business flow and fixed related defects.

#### System Logs
- Fixed empty response in log details for interface calls.

#### Internationalization
- Fixed exception handling for "-" character in multi-language.
- Added translation support for string keys.

#### Device Module
- Optimized aggregation query parameter validation with friendlier error messages.
- Improved device activation exception prompts.
- Optimized device type metric query selector (supports Attributes & Events).
- Fixed failure when exporting historical telemetry data.
- Made device name search case-insensitive.
- Fixed exception where telemetry JSON data was stored as Map.
- Fixed security issue where old credentials worked after modification.
- Fixed issue where downlink control was ineffective for MQTT Gateway devices.
- Fixed issue where alert device filtering did not work.

## ThingsPanel-Ver1.1.5 Release Notes

### New Features
- **Open Platform API**: Implemented OpenAPI support for third-party integration.
- **API Keys Management**: Manage credentials for API access.
- **Tenant Device Monitoring**: Added tenant-level device online trend query and analysis.

### Optimizations and Fixes
- Fixed data cleanup function failure.
- Optimized device attribute/telemetry query interfaces (added R/W flags).
- Optimized device deletion exception handling.
- Fixed occasional loss of expected messages on device online.
- System: Fixed UI exception when plugin list is empty.
- Fixed super admin inability to view system logs.
- Fixed exception return of service plugin form getter.
- Fixed Forgot Password function.

## ThingsPanel-Ver1.1.4 Release Notes

### New Features
- **Prometheus Integration**: Added system monitoring dashboard.
- **DeepSource Integration**: Fixed severe defects found by static analysis.
- Added "Last Visit Time" field.
- Standardized API response format framework, improved API i18n framework.
- Supported Phone Number Login.
- Added Tenant Deregistration Interface.
- App added Email Registration and Deregistration.

### Optimizations and Fixes
- Renamed "Device Template" to "Device Template" (Term unification), "Device Model" to "Device Model".
- Optimized device heartbeat monitoring performance.
- Fixed MQTT reconnection issues for better stability.
- Fixed time limit issue for non-aggregated telemetry history query.
- Optimized time range validation for aggregation queries.
- Upgraded Redis to v9.
- Fixed bug in device ID filtering.
- Optimized device model deletion logic (added template association check).
- Fixed email sending security vulnerabilities.
- Fixed file operation security vulnerabilities.
- Extended supported secure file upload types.
- Fixed error when telemetry statistics value exceeded 4 digits.
- Fixed tenant deregistration exceptions.
- Fixed scene linkage deletion exceptions.
- Fixed issue where sub-device address change did not notify connectivity service.
- Adjusted cron task scan interval to 5 seconds.
- Added pagination to telemetry history query interface.
- Fixed boolean display issue in device details history.
- Optimized English translations.
- Improved list display issues.

## ThingsPanel-Ver1.1.3 Release Notes

### Optimizations and Fixes
- Auto-range Y-axis for telemetry curves.
- System logs now record Client IP instead of Server IP.
- Modbus Service: Proactively read status once after platform control.
- Fixed telemetry preprocessing not taking effect after refresh.
- Fixed left tree auto-collapse when selecting a service.
- Fixed time display error in attribute list.
- Fixed Tenant showing as Super Admin.
- Added Service Health Check Interface.
- Fixed incomplete data cleanup.
- Standardized project directory structure.
- Fixed MQTT devices not receiving platform downlink control.
- Fixed proxy IP issue in logs.
- Fixed missing user in control command history.
- Optimized device deletion transaction.

## ThingsPanel-Ver1.1.2 Release Notes

### New Features
- **Dashboard Themes**:
  - Minimal White
  - Tech Blue
  - Apple Purple
  - Microsoft Style
  - Cool Black
- **New Cards**:
  - Bar Chart
  - Numeric Control (Slider)
  - Data Downlink
  - Enum Control
  - Status Card
  - Table
  - Text Info
  - Video Player
- MQTT Gateway control/command/attribute downlink bug fixes.
- Added Account Sharing/Ban Sharing switch.
- Fixed Casbin table failure on first deploy.
- Added System Log Details.
- Added Password Modification Cycle.
- Added Session Timeout.
- Added Service Access Points.
- Product Management: Added Delete Device in Pre-registration.
- Device Model: Added Custom Control ``device_model_custom_control``.
- Added Device Online/Offline Reminders.
- Upgraded Protocol Access Plugin Management to Service Access & Protocol Access.
- Added "min", "sum", "diff" aggregation interfaces.

### Optimizations and Fixes
- Fixed triggers in Scene Linkage/Management.
- Fixed JSON copy issue in Device Model.
- Fixed access method selector error in Device List.
- Fixed boolean display in Device Details.
- Fixed dashboard data update issue after reopening.
- Fixed menu collapse issue.
- Fixed tab opening behavior.

## ThingsPanel 1.0.0 Release Notes

ThingsPanel 1.0.0 is a brand new version with improved usability and major updates:

### Overall Updates
- Refactored with **Gin, Vue.js 3.0, TypeScript**.
- Changed interface style, supporting multiple styles and menu layouts.
- Simplified concepts: Renamed Device Plugin to Device Model, added Device Template, etc.
- Upgraded **Device Connectivity Framework**: Compatible with Service Access alongside Protocol Access.
- Expanded Dashboard functions for personalized pages.
- Upgraded Device Plugin Generator (App chart binding).
- Supported Regular Onboarding (No learning curve) and Pre-configured Onboarding (High efficiency).
- Simplified Product Management and Firmware Upgrades.

### Device Connectivity
- Upgraded architecture for fast onboarding via Direct Protocol, Service, Import, ID, QR Code.
- Batch addition of complete device sets.
- Fast access for single device with thousands of telemetry metrics.
- Pre-registration & Batch Activation, supporting **One Product One Secret** and **One Device One Secret**.
- Batch settings for devices using the same template.

### Product Management
- Remote device maintenance design pattern.

### Dashboard
- Covers Super Admin, Tenant, User roles. Custom component development.
- Parallel development support for personalized dashboards.
- Card-based development accelerates progress by 5-10x.

### Tech Stack
- **Soybean Admin Framework**.
- **Gin, Vue.js 3.0, TypeScript**.

### Automation & Scene Linkage
- Added **Service Triggers** to trigger device operations via services.
- Decoupled Automation and Alerting.
- Fast batch setting of automation/alert rules for a class of devices.

### User Frontend
- Easy operation for non-tech users.
- Independent repo for easy secondary development.

## ThingsPanel-Ver0.5.4 Release Notes

### New Features
- Device Online/Offline Statistics Interface.
- Alert Count Interface.
- Interface to get Group ID and Project ID by Device ID.
- Dashboard CRUD Interfaces.
- Drag & Drop Dashboard features.
- Tenant Home: Added Online/Offline Rate, Alert List, Alert Stats.
- Visualization Sharing (Link sharing).

### Optimizations and Fixes
- Fixed UI layout shift after entering Device Map.
- Fixed Device History sorting.
- Fixed Visualization text push error.
- Fixed Device History pagination error.
- Fixed WebSocket data update time error in Device Details.
- Optimized time display, added loading effect.
- Fixed default chart display.
- Revised translations.

## ThingsPanel-Ver0.5.3

### New Features
- Phone Number Registration.
- Added Events and Commands to Automation.
- Switched HTTP to WebSocket for device data/control.
- Added Attribute/Command Downlink components, Text components.
- Added Online status to monitoring components.
- Switched Curves to WebSocket with aggregation.
- Device Details: Overview, Attributes, Plugins, Logs.
- SMS Verification Config for Super Admin.

### Optimizations and Fixes
- Fixed Menu Permission assignment failure.
- Fixed Switch component status update.
- Added Modbus Protocol.

## ThingsPanel-Ver0.5.2

### New Features
- **Tenant Data Gateway**: Data forwarding to other systems via multiple interfaces.
- **Global DB Interface Service (SQL-to-HTTP)**: Data service via SQL query.

### Optimizations and Fixes
- Optimized Password Modification.
- Fixed plugin issue in Product Management.
- Fixed Gateway Push Time update issue.
- Added table/field comments.

## ThingsPanel-Ver0.5.0

### New Features
- **Multi-tenancy**: System Admin permissions.
- **Tenant Management**.
- **Data Forwarding**: MQTT & HTTP forwarding.
- Defined Events/Commands in Device Plugins.
- Command Downlink in Device Details.
- View Commands/Events in Device Details.
- Edit Device Connectivity Services.
- **HTTP Device Connectivity Service**.
- Alert Notification Groups.

### Optimizations and Fixes
- Refactored Visual Editor with **AntV**.
- Optimized Plugin selection in Product Management.
- Import Template Download.
- Activate device directly in Pre-registration list.
- Firmware Upgrade: Resume from breakpoint, Passive Upgrade (Push).
- Data structure optimization.

## ThingsPanel-Ver0.4.8

### New Features
- Create Product: Plugin, Protocol, Auth selection.
- Batch Management: Export/Import, One Device One Secret.
- QR Code Export.
- Manual Activation.
- Pre-registration Management.
- Firmware Upgrade Management & Stats.
- **App Market**: Publish/Install plugins.
- Video Player Component.

### Optimizations and Fixes
- Optimized Gauge display.
- Fixed SQL Injection/Log Injection vulnerabilities.
- Fixed MQTT Online display bug.
- Fixed Gmqtt memory leak.
- Fixed Data Export issues (large quantity/zero values).
- Fixed Modbus Service packet disorder.
- Optimized Docker deploy.
- Optimized GB28181 component.

## ThingsPanel-Ver0.4.7

### New Features
- Scene List, Scene Logs.
- Add/Delete Scenes.
- Scene Linkage (Automation).
- Cron support.

### Optimizations and Fixes
- Device Online Status.
- GMQTT Memory Leak.
- Security fixes.

## ThingsPanel-Ver0.4.6

### New Features
- Login Page Background.
- GB28181 Video (WVP).
- Device Map.
- Charts in Editor (Curve, Pie, Bar, Text).
- Range selection in Device Monitoring.
- App v0.4.5: Write operations.

### Optimizations and Fixes
- Log Level config.
- Msg Count Query optimization.
- Login Failure returns.
- Alert Log deletion block fix.
- MQTT Gateway Attribute reporting fix.

## ThingsPanel-Ver0.4.5

### New Features
- Device Location Config.
- Real-time Connectivity Display.
- Device Monitoring Menu.
- Script support for passthrough/binary/string.
- Script `msg` parameter changed to `[]byte`.
- MQTT Client Reconnect/QoS.
- Data Alias (Field Mapping).
- `device_type` field.
- Attribute Unit entry.
- TCP Protocol / Official TCP Service.
- Service Auto/Manual Registration.
- Sub-device query by Gateway Token.
- Device Map Interfaces.
- System Time Interface.
- Docker Volume Mapping for Data/Code separation.
- Built-in Switch/Temp-Humidity Plugins.
- Upgraded Go to 1.18.

### Optimizations and Fixes
- Multiple Visualizations support.
- Copy connection info in Device Edit.
- Modbus Service fixes.
- Device List sorting.
- Gateway Type change safeguard.
- Service Interface updates.

## ThingsPanel-Ver0.4.0 (2022-10-20)

- Sub-device support.
- MQTT Gateway support.
- Modbus Gateway (TCP/RTU) support.
- Script Parser for device data.
- Device Plugin Generator.
- Device Connectivity Service (Multi-protocol).
- Dashboard Editor (Charts, SCADA, 3D).
- Device Model (Thing Model) support.
- Device Security Authentication.
- RBAC Fixes.

## ThingsPanel-Ver0.3.0

### New Features
- **Redis** Caching.
- **RBAC** (Casbin).
- Role/Permission Management.
- Docker Env Var support.
- Huawei/Alibaba Cloud adaptation.
- Data Forwarding.
- Infinite Device Grouping.
- Operation Logs.

### Optimizations
- Login Speed.
- UI Polish.
- DB Indexing.
- Stress Testing.
- User Add rewrite.

## ThingsPanel-Ver0.2.0

### New Features
- System Settings (Logo/Name).
- Device Location Attribute.
- Device Reset API (TCP).
- External API: History Data.
- External API: Input Data/Image.
- Image Preview.
- External API: Business Device Query.
- Excel Export.
- Log Module (Configurable levels).
- Alert Retrieval by ID.
- Dynamic Logo Loading.

### Optimizations
- Automation "OR" logic crash fix.
- Asset Switching in Vis fix.
- Login Load Time.
- Chart Layout fix.
- Vis Plugin fix.
- Docker Deployment optimization.
