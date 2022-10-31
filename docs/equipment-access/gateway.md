---
sidebar_position: 2
---

# MQTT网关接入

## 通过规则引擎接入

使用ThingsPanel规则引擎转化成标准设备接入。

## 直连接入

### 网关设备MQTT接入方式

| 接入类型 | 认证 | 接入地址 | MQTT安全认证 |
| ----- | --- | -------- | ---- |
|网关 MQTT | AccessToken接入认证 | mqtt://{服务IP}:1883| 用户名：AccessToken 密码：空 |
|网关 MQTT | MQTT Basic认证 | mqtt://{服务IP}:1883| 用户名：必填 密码：必填 |

### MQTT网关设备主题

#### 网关设备发布主题
| 消息类型 | 主题 |
| --- | --- |
| 网关设备上报属性主题 | gateway/attributes |
| 设备上报事件主题 | gateway/event |
| 设备服务指令响应主题 | gateway/command/reply |

**上报属性消息规范**

``` showLineNumbers
{sub_device_addr1:{key1:value1, ...},sub_device_addr1:{key1:value1, ...}}
```
例如：
```json showLineNumbers
{
	"A0001": {
		"temp": 18.5,
		"hum": 40
	},
	"A0002": {
		"temp": 19.5,
		"hum": 44.2
	}
}
```

:::tip

sub_device_addr在子设备`编辑参数`弹窗的`设备地址`栏输入，同一个网关设备下不重复

:::

#### 网关设备订阅主题
| 消息类型 | 主题 |
| --- | --- |
| 网关设备订阅属性主题 | gateway/attributes/{AccessToken或username} |
| 事件上报的响应主题 | event/response/{accesstoken或username} |
| 服务指令主题 | command/send/{accesstoken或username} |

:::info

订阅主题中{accesstoken或username}根据选择的认证方式填写，AccessToken接入认证填写AccessToken，MQTT Basic认证填写用户名

:::
