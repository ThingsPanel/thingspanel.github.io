---
sidebar_position: 3
---

# 设备接入

设备接入实现了对不同类型协议与报文格式的设备接入，对设备进行了统一管理。

* 从设备接入选择项目后进入设备管理页面可对设备进行管理。
* 在设备列表页面可对设备进行查看、添加、修改和删除操作。

支持的接入协议：
- MQTT
- HTTP
- TCP
- Modbus
- 视频地址
- 萤石云视频协议

:::tip

ThingsPanel新增更多的协议需要自行开发，参考协议插件开发部分文档。

:::

## 设备创建

:::info

快速接入设备可参考 [`创建设备`](../quick_start/quick_start.md)。
不同协议的接入可参考【`MQTT接入与其他协议`】(../device-connect/mqtt.md)
:::

## 设备详情

![img.png](images/Device-access01.png)

### 设备属性
- 设备位置：点此处可在地图上选择设备位置，随后可在设备地图上展示该设备的位置
![img.png](images/Device-access02.png)
### 运维信息
- 离线事件阈值：设置后，设备的在线离线状态按照上次推送事件间隔计算，超过设置的时间未推送会显示设备离线（适合有休眠功能的设备）
![img.png](images/Device-access03.png)
### 事件（上报）
- 设备上报的事件可在此处查看
![img.png](images/Device-access04.png)
### 命令（下发）
- 可以在此处给设备发送自定义命令或提前在物模型中配置好的命令
- 可以查看发送过的历史命令
![img.png](images/Device-access05.png)
