---
sidebar_position: 5
---

# TCP接入

TCP协议设备接入有以下两种方式

## 第一种：通过规则引擎的方式

ThingsPanel对接自定义TCP设备【通过规则引擎】  
https://www.bilibili.com/video/BV1Xe411K7Lk/?spm_id_from=333.999.0.0

## 第二种：使用TCP协议插件方式接入
`TCP协议插件`是单独运行的服务，通过TCP协议插件，设备就可以跟平台交互数据。协议插件可以与ThingsPanel在同一台计算机上运行，也可以在另一台可通过网络访问ThingsPanel实例的计算机上运行。

### 协议分类
TCP协议插件支持两种TCP类型的报文接入：
1. 自定义TCP协议
2. TP-TCP协议

### 自定义TCP协议
通过透传的方式从TCP协议插件发送消息到平台或从协议插件接收平台发来的消息。
#### 对接步骤：
1. 在平台创建设备，点击编辑参数，选择`自定义TCP协议`,获取认证令牌AccessToken，查看访问地址。
<img src=image/tcp2.png width=60% />

3. 点击设备配置，在数据解析栏填写缓冲区大小（默认1KB）。
<img src=image/tcp1.png width=60% />

4. 根据自定义消息编写数据处理脚本（设备列表->编辑参数->数据处理脚本）。
    - 上行解析脚本
        需要将自定义的tcp消息格式处理成平台可使用的格式，例如（平台可使用的格式）：
        - 设备：
        ```json
        {"temperature":36.5,"humidity":52}
        ```
        - 网关：
        "3c20c6206"为子设备地址（设备列表->编辑参数（子设备））。
        ```json
        {"3c20c6206":{"temperature":36.5,"humidity":52}}
        ```
    - 下行解析脚本
        下行脚本与上行脚本相反，需要将平台格式转换为自定义的tcp消息格式
4. 设备与协议插件建立连接后，首先需要推送认证信息（AccessToken）,通过认证后就可以上报数据到平台或接收平台的数据。

### TP-TCP协议
TP-TCP协议是协议插件定义的规范，按照此规范便可以对接到平台。
#### 规范
在客户端连接到服务器之前，必须在 thingsPanel 中创建 IoT 设备并获取访问令牌。 然后客户端发送以下结构：
|  IDENT  |  IDENT  |     TYPE       |  CMD     |  LENGTH  |     PAYLOAD    |
| --- | --- | --- | --- | --- | --- |
|   'T'   |  'P'    |       1 byte   |  1 byte  | 4 byte   |     Variable   |

- TYPE：
    0x0：数据包
    0x1：心跳数据包
- CMD：
    0x0：设备身份验证
    0x1：发布属性
    0x2：推送事件
- LENGTH：PAYLOAD的长度
- PAYLOAD：有效载荷数据
    如果 CMD 0x0，则PAYLOAD是访问令牌
    如果 CMD 0x1，则PAYLOAD是属性
    如果 CMD 0x2，则PAYLOAD是事件

#### 对接步骤
1. 在平台创建设备，选择`TP-TCP协议`,获取认证令牌AccessToken，查看访问地址。
2. （可选，如果PAYLOAD已是平台可使用格式就不用再编写处理脚本）根据PAYLOAD编写数据处理脚本（设备列表->编辑参数->数据处理脚本）。
    - 上行解析脚本
        需要将PAYLOAD消息格式处理成平台可使用的格式，例如（平台可使用的格式）：
        - 设备：
        ```json
        {"temperature":36.5,"humidity":52}
        ```
        - 网关：
        "3c20c6206"为子设备地址（设备列表->编辑参数（子设备））。
        ```json
        {"3c20c6206":{"temperature":36.5,"humidity":52}}
        ```
    - 下行解析脚本
        下行脚本与上行脚本相反，需要将平台格式转换为PAYLOAD消息格式
4. 设备与协议插件建立连接后，首先需要推送认证信息（AccessToken）,发送CMD(0X0)的数据包，认证成功便可推送属性或事件。

### TCP协议插件github库
https://github.com/ThingsPanel/tcp-protocol-plugin
