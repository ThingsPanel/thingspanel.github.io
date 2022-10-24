---
sidebar_position: 1
---

# 快速安装并接入设备

本章节将指导您快速安装ThingsPanel，并实现接入设备，查看设备数据。
## 先决条件
* 需要先安装好Docker、Docker Compose、Git
* 使用MQTT模拟器，可使用MQTTbox、 MQTT.fx ，或者使用设备推送数据。

## 通过Docker容器安装ThingsPanel

通过容器化部署是搭建ThingsPanel的最快方式。

```bash title="第一步、获取docker-compose源码:" showLineNumbers
git clone https://github.com/ThingsPanel/thingsPanel-go-docker.git
```

```bash title="第二步、进入目录并启动服务:" showLineNumbers
cd thingsPanel-go-docker
docker-compose -f docker-compose.yml up
```

```text title="第三步、登录:" showLineNumbers
输入网址:服务器ip:8080
输入账户:super@super.cn
输入密码:123456
```

:::info

更详细的`步骤`请参考[`Docker安装`](./system-installation/docker_installation)。

:::


## 接入一个温湿度设备并查看数据

![对接](./images/tp.gif)

```bash title="第一步、创建业务、创建设备:" showLineNumbers
创建业务
创建设备
获得连接参数：选择MQTT协议，官方标准报文（默认）
```

```bash title="第二步、推送数据（可使用MQTT工具推送模拟数据）:"
用户名为Token
key为物模型名
```

```text title="查看可视化:"
点击可视化
查看分组
查看设备：即可看到数据
```
