---
sidebar_position: 2
---

# 设备插件编辑器

## 一、概述
设备接入时需要映射每个设备的属性，这是一项极其繁琐的工作，我们通过绑定设备插件可以实现一次映射该设备的所有属性，
同时,在设备插件中还提供了绑定图表的功能，用户无需再重复添加图表，绑定数据源的操作。

## 二、开发步骤
### 1、目录结构
- packages/editor/index.vue    主页面
- packages/editor/TSL.vue      物模型页面
- packages/editor/Chart.vue    绑定图表页面
  - packages/charts/panel/dashboard   仪表盘
  - packages/charts/panel/history    历史数据
  - packages/charts/panel/control    控制组件
  - packages/charts/panel/report     报表
  - packages/charts/panel/video/     视频

- packages/editor/Publish.vue  发布页面  

### 2、代码地址
https://github.com/chaoxiaoshu-mx/tp-iot.git

### 3、发布组件
- 登录
```aidl
npm login
```
输入npm账号、密码和邮箱
邮箱会收到一个一次性密码，打开邮箱复制这个one-time password，返回控制台输入这个一次性密码就登录成功了.  

- 发布组件
```aidl
npm publish
```

- 更新
```aidl
npm version patch
npm publish
```