---
sidebar_position: 1
---

# MQTT直连设备接入

## 什么是MQTT

消息队列遥测传输（英语：Message Queuing Telemetry Transport，MQTT）是ISO 标准（ISO/IEC PRF 20922）下基于发布 (Publish)/订阅 (Subscribe)范式的消息协议，可视为“资料传递的桥梁”，它工作在 TCP/IP协议族上，是为硬件性能低下的远程设备以及网络状况糟糕的情况下而设计的发布/订阅型消息协议，为此，它需要一个消息中间件，以解决当前繁重的资料传输协议，如：HTTP。
MQTT 是一种简单的消息传递协议，设计用于具有低带宽的受限设备。因此，它是物联网设备接入的完美解决方案。

## ThingsPanel支持的接入
ThingsPanel平台提供了标准的 MQTT 接入协议，支持 MQTT v3.1/v.5，任何支持 MQTT 协议的设备都可以通过相应的 MQTT 客户端代码接入平台。

## MQTT直连设备接入方式

| 接入类型 | 认证 | 接入地址 | MQTT安全认证 |
| ----- | --- | -------- | ---- |
| MQTT | AccessToken接入认证 | mqtt://{服务IP}:1883| 用户名：AccessToken 密码：空 |
| MQTT | MQTT Basic认证 | mqtt://{服务IP}:1883| 用户名：必填 密码：必填 |

![接入配置](image/1.png)

## MQTT主题

### 设备发布主题
| 消息类型 | 主题 |
| --- | --- |
| 设备上报属性主题 | device/attributes |
| 设备上报事件主题 | device/event |
| 设备服务指令响应主题 | device/command/reply |

**上报属性消息规范**

``` showLineNumbers
{key1:value1, key2:value2 ...}
```
例如：
```json showLineNumbers
{
	"temp": 18.5,
	"hum": 40
}
```

### 设备订阅主题
| 消息类型 | 主题 |
| --- | --- |
| 订阅属性主题 | device/attributes/{AccessToken或username} |
| 事件上报的响应主题 | event/response/{AccessToken或username} |
| 服务指令主题 | command/send/{AccessToken或username} |
