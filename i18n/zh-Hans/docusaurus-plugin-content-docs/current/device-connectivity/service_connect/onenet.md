---
sidebar_position: 1
---

# 移动OneNET对接

本文主要介绍OneNet平台的设备快速接入ThingsPanel平台。

## 设备接入服务介绍

OneNET平台提供了多种接入方式

- service_plugin_onenet设备接入服务
  - 该设备接入服务是通过OneNet平台的http推送服务进行数据接入

## 对接流程

### 前提条件

1. 注册OneNET账号
2. 注册或者部署ThingsPanel平台，并部署OneNet设备接入服务
3. OneNet设备接入服务已经注册到平台
   ![设备接入服务管理](./img/image-11.png)

### 操作步骤

- OneNet平台配置
  - 登录OneNET平台，进入开发者中心
      ![登录](./img/image.png)
  - 创建产品
      ![创建产品](./img/image-1.png)
  - 添加设备
      ![添加设备](./img/image-2.png)
  - 设置流转
    - ![设置流转](./img/image-3.png)
    - c.thingspanel.cn:8280是设备接入服务的地址和服务端口
  - 模拟设备推送数据
      ![模拟设备推送数据](./img/image-4.png)
  - 获取产品ID和ACCESS_KEY
      ![获取产品ID和ACCESS_KEY](./img/image-7.png)
- ThingsPanel平台配置
  - 如果没有该服务的设备模板，需要创建
      ![设备模板](./img/image-8.png)
  - 进入服务接入页面
      ![服务接入](./img/image-5.png)
  - 新增服务接入点
      ![新增服务接入点](./img/image-6.png)
  - 选择要接入的设备
    - 注意：该设备列表只会显示有推送过数据的设备
      ![选择要接入的设备](./img/image-9.png)
  - 推送数据后，在设备详情页查看数据
      ![查看数据](./img/image-10.png)

## 其他

ThingsPanel提供设备接入服务开发模板，其余接入方式可参考设备接入服务开发流程自行开发接入。
