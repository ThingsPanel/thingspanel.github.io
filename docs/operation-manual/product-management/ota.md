---
sidebar_position: 11
---

# 固件升级（OTA）

OTA全称"Over-The-Airtechnology"，即空中下载技术，通过移动通信的接口实现对软件进行远程管理，简单来说就是对固件的远程升级。

## OTA升级流程
MQTT协议下OTA升级流程如下图所示。
## OTA升级说明
- 若设备需要在首次升级前上报版本号，建议只在系统启动过程中上报一次，不需要周期循环上报。设备升级成功后，需要第一时间上报版本。
- 设备端接收到物联网平台推送的升级通知后，可立即下载升级包进行升级，也可在业务空闲后，主动获取升级信息进行升级。
- 物联网平台根据设备端上报的进度是否是100%来判断设备端OTA升级是否成功。
- 设备离线时，不能接收服务端推送的升级消息，并按升级失败处理（可重新升级）。
## 数据格式说明
OTA升级流程及使用的Topic和数据格式如下：
1. （可选）设备连接OTA服务，上报版本号。  
    设备端通过MQTT协议推送当前设备OTA模块版本号到Topic： /ota/device/inform/${AccessToken}。消息格式如下：
    ```
    {
        "id": "147258369",
        "params": {
            "version": "v1.0.1",
            "module": "default"
        }
    }
    ```
    | 参数 | 类型 | 说明 |
    | ---- | ---- | ---- |
    | id | String | 消息ID号。String类型的数字，长度10，且每个消息ID在当前设备中具有唯一性。 |
    | version | String | OTA模块版本。 |
    | module | String | OTA模块名。设备的默认（default）模块的版本号代表整个设备的固件版本号。 |
2. 您在控制台触发升级操作之后，设备会收到物联网平台OTA服务推送的升级包的URL地址。
    设备端订阅Topic：/ota/device/upgrade/${AccessToken}。物联网平台对设备发起OTA升级请求后，设备端会通过该Topic收到升级包的存储地址URL。
    消息格式如下：
    ```
    {
        "id":"147258369",
        "code": 200,
        "params":{
            "version":"v1.1",
            "size":432945,
            "url":"http://dev.thingspane.cn/files/ota/s121jg3245gg.zip",
            "signMethod":"Md5",
            "sign":"a243fgh4b9v",
            "module":"MCU",
            "extData":{
                    "key1":"value1",
                    "key2":"value2"
             }
        }
    }
    ```
    | 参数 | 类型 | 说明 |
    | ---- | ---- | ---- |
    | id | Long | 消息ID号。每个消息ID在当前设备中具有唯一性。 |
    | code | String | 状态码。 |
    | version | String | 设备升级包的版本信息。 |
    | size | Long | 升级包文件大小，单位：字节。 OTA升级包中仅有一个升级包文件时，包含该参数。 |
    | url | String | 升级包在对象存储（OSS）上的存储地址。 OTA升级包中仅有一个升级包文件，且下载协议为HTTPS时，包含该参数。 |
    | sign | String | OTA升级包文件的签名。 OTA升级包中仅有一个升级包文件时，包含该参数。 |
    | signMethod | String | 签名方法。取值：SHA256、MD5。对于Android差分升级包类型，仅支持MD5签名方法。 |
    | module | String | 升级包所属的模块名。模块名为default时，物联网平台不下发module参数。 |
    | extData | Object | 升级批次标签列表和推送给设备的自定义信息。_package_udi表示自定义信息的字段。单个标签格式："key":"value"。 |
3. 升级过程中，设备端向服务端推送升级进度到Topic：/ota/device/progress/${AccessToken}。
    消息格式如下：
    ```
    {
        "step":"100",
        "desc":"升级进度100%",
        "module": "MCU"
    }
    ```
    | 参数 | 类型 | 说明 |
    | ---- | ---- | ---- |
    | step | String | OTA升级进度。取值范围：1~100的整数字符串：升级进度百分比。-1：升级失败。-2：下载失败。-3：校验失败。-4：烧写失败。 |
    | desc | String | 当前步骤的描述信息，长度不超过128个字符。如果发生异常，此字段可承载错误信息。 |
    | module | String | 升级包所属的模块名。可选 |

## 操作步骤
1. `产品管理`->`固件升级`->`添加升级包`，如下表单。
2. 点击`查看`按钮进入升级任务列表页面
3. 点击`添加升级任务`按钮，填写表单。
4. 点击`查看`按钮，进入设备升级详情页面，可以在这里查看设备升级进度；对于升级失败的设备可进行重新升级操作，也可进行取消升级操作
