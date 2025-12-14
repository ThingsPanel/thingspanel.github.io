---
sidebar_position: 4
---

# 海康综合安防平台（iSecure Center）对接

本文主要介绍海康综合安防管理平台（iSecure Center）的设备资源快速接入ThingsPanel平台。

# 海康综合安防管理平台（iSecure Center）对接

海康综合安防管理平台（iSecure Center）是海康威视研发的一款先进安防管理系统。

它能集中管理多类安防子系统，涵盖视频监控、门禁、报警等。在视频监控方面，可实时预览、存储回放和诊断视频质量。门禁管理支持授权、记录查询与权限设置。报警管理能接收处理多种报警设备信息，并实现联动。

同时，平台具备智能化应用，包括人脸识别、行为分析等智能分析功能，以及数据统计分析。而且，它可统一管理设备和用户，支持任务调度。

该平台有良好开放性与扩展性，提供接口与协议，便于和第三方系统集成，能按需增加功能和模块，此次将接入 ThingsPanel 物联网平台，实现更丰富功能融合。

## 对接流程

### 前提条件

1. 从海康综合安防管理平台（iSecure Center）运管中心获取合作方Key和合作方Secret，也就是APPkey和APPsecret。![alt text](img-isc/image.png) 
2. 部署ThingsPanel平台，并在ThingsPanel中注册iSecureCenter三方设备接入服务![alt text](img-isc/image1.png)

### 操作步骤

1. 首先需要创建一个设备模板，选择注册的iSecureCenter三方设备接入服务。![alt text](img-isc/image-0.png)
2. 在服务接入中选择注册的该服务。![alt text](img-isc/image-1.png)
3. 新增一个接入点。![alt text](img-isc/image-2.png)
4. 选择添加该接入点的设备。![alt text](img-isc/image-3.png)
5. 在看板中添加播放视频的卡片，配置设备，即可查看视频。
![alt text](img-isc/image-4.png)
## 代码地址

本设备接入服务为企业版本功能。
