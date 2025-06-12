---
sidebar_position: 2
---

# 电信CTWing对接

本文主要介绍CTWing平台的设备快速接入ThingsPanel平台。

## 设备接入服务介绍

CTWing平台提供了多种接入方式

- service_plugin_ctwing设备接入服务
  - 该设备接入服务是通过CTWing平台的http推送服务进行数据接入

## 对接流程

### 前提条件

1. 注册CTWing账号
2. 注册或者部署ThingsPanel平台，并部署CTWing设备接入服务
3. CTWing设备接入服务已经注册到平台
   ![设备接入服务管理](./img/image-11.png)

### 操作步骤

- CTWing平台配置
  - 登录CTWing平台
  - 创建产品和设备，获取产品ID、Master-APIkey
    - ![创建产品](./img-ctwing/image-1.png)
    - ![设备](./img-ctwing/image.png)
    - ![产品](./img-ctwing/image-2.png)
  - 新增订阅
    - c.thingspanel.cn:8380为设备接入服务的地址和服务端口
    - ![新增订阅](./img-ctwing/image-3.png)
  - 新增应用，获取App Key、App Secret
    - ![新增应用](./img-ctwing/image-4.png)
    - ![应用](./img-ctwing/image-5.png)
- ThingsPanel平台配置
  - 如果没有该服务的设备模板，需要创建
    - ![设备模板](./img-ctwing/image-6.png)
  - 进入服务接入页面
    - ![服务接入](./img/image-5.png)
  - 新增服务接入点
    - ![新增服务接入点](./img-ctwing/image-7.png)
  - 选择要接入的设备
    - 注意：该设备列表只会显示有推送过数据的设备
    - ![设备列表](./img-ctwing/image-8.png)
  - 推送数据后，在设备详情页查看数据
    - ![查看数据](./img-ctwing/image-9.png)
