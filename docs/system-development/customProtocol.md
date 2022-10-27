---
sidebar_position: 2
---

# 开发协议插件

:::info

可以参考[`modbus协议插件`](https://github.com/ThingsPanel/modbus-protocol-plugin)。

:::

## mqtt相关

### ProtocolPlugin——>Gmqtt

mqtt用户：root  
发布主题：`device/attributes`  
报文规范：{"token":sub_device_token,"values":{key:value...}}

### Gmqtt——>ProtocolPlugin
mqtt用户：root  
订阅主题：`plugin/modbus` (说明：modbus为注册插件时填写的插件订阅主题名称)  
报文规范：{"token":sub_device_token,"values":{key:value...}}

## 插件表单

`./form_config.json`  
thingspanel前端通过`/api/form/config`接口获取表单配置，生成子设备的表单，用户填写的表单数据会在thingspanel提供的`/api/gateway/config`接口的"SubDevice"属性中返回

## plugin提供的接口
| 接口                          | 接口描述              |接口链接|
| ----------- | ---------- | ---------- |
| /api/form/config              | 获取插件表单配置      |[传送](https://www.apifox.cn/apidoc/shared-34b48097-8c3a-4ffe-907e-12ff3c669936/api-43746721) |
| /api/device/config/update     | 修改子设备配置        |[传送](https://www.apifox.cn/apidoc/shared-34b48097-8c3a-4ffe-907e-12ff3c669936/api-43903019)|
| /api/device/config/add        | 新增子设备配置        |[传送](https://www.apifox.cn/apidoc/shared-34b48097-8c3a-4ffe-907e-12ff3c669936/api-43925736)|
| /api/device/config/add        | 删除子设备配置        |[传送](https://www.apifox.cn/apidoc/shared-34b48097-8c3a-4ffe-907e-12ff3c669936/api-43965145)|

## thingspanel提供给插件的接口
| 接口                          | 接口描述              |接口链接|
| ----------- | ---------- | ---------- |
| /api/gateway/config           | 设备连接时送来密钥，根据密钥获取插件相关设备的信息，"SubDevice"的属性时插件表单中定义的属性 | [传送](https://www.apifox.cn/apidoc/shared-34b48097-8c3a-4ffe-907e-12ff3c669936/api-43535958)      |



