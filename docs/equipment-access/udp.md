---
sidebar_position: 6
---


# UDP接入

## 通过规则引擎的方式

使用udp in节点和udp out节点  
![udp接入](./image/udp.png)

:::info

注意服务器需要开放`udp端口`(一般开放端口默认的tcp)；  
如果是docker安装，规则引擎的容器也要映射udp端口

:::

## 使用协议插件接入

* 自定义协议开发ThingsPanel协议插件，通过协议插件接入。


