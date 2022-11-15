---
sidebar_position: 3
---

# 使用源码安装启动ThingsPanel

## 系统环境

启动ThingsPanel之前，请先确定已经安装好以下环境:
1. go 1.17.x [下载](https://go.dev/dl/) [安装](https://go.dev/doc/install)
2. redis 6 [安装](https://redis.io/docs/getting-started/installation/install-redis-from-source/)
3. TimescaleDB [安装](https://docs.timescale.com/install/latest/installation-docker/)

## GMQTT安装启动

1. 进入[GMQTT仓库](https://github.com/ThingsPanel/gmqtt)
2. Star仓库
3. 下载源代码,建议使用git clone下载源代码,注意代码分支,master为最新的开发分支.Tags列对应其他版本.

### 配置文件

```text
./gmqtt/cmd/gmqttd/default_config.yml        --系统配置 
```

./gmqtt/cmd/gmqttd/default_config.yml说明：
```yml
listeners:
  - address: ":1883"   # 接入端口
api:
  http:
    - address: "tcp://0.0.0.0:8083"  # http服务配置（ThingsPanel-GO调用，主要用来管理接入的权限）
log:
  level: info # 日志级别 debug | info | warn | error
```

### 直接运行服务

```sh
$ git clone https://github.com/ThingsPanel/gmqtt.git
$ cd gmqtt/cmd/gmqttd
$ go run . start -c default_config.yml
```

### docker方式运行服务

```sh
$ git clone https://github.com/ThingsPanel/gmqtt.git
$ cd gmqtt
$ docker build -t gmqtt .
$ docker run -p 1883:1883 -p 8883:8883 -p 8082:8082 -p 8083:8083  -p 8084:8084  gmqtt
```

## ThingsPanel-Go安装启动

1. 进入[ThingsPanel-Go仓库](https://github.com/ThingsPanel/ThingsPanel-Go)
2. Star仓库
3. 下载源代码,建议使用git clone下载源代码,注意代码分支,main为最新的开发分支.Tags列对应其他版本.

### 相关目录文件说明

```text
./conf/app.conf                  --系统配置 
./modules/dataService/config.yml --mqtt客户端等
./files/logs/                    --系统日志存放目录
./TP.sql                         --数据库初始化脚本
```

1. ./conf/app.conf配置说明
```yml
```
2. ./modules/dataService/config.yml配置说明
```yml
```

### 运行

GMQTT、redis、TimescaleDB首先启动，更新ThingsPanel-Go相关配置

```sh
$ git clone https://github.com/ThingsPanel/ThingsPanel-Go.git
$ cd ThingsPanel-Go
$ go run . start
```

## ThingsPanel-Backend-Vue安装启动

## modbus-protocol-plugin安装启动（可选）

1. 进入[modbus-protocol-plugin仓库](https://github.com/ThingsPanel/modbus-protocol-plugin)
2. Star仓库
3. 下载源代码,建议使用git clone下载源代码,注意代码分支,main为最新的开发分支.Tags列对应其他版本.

### 配置文件

```text
./config.yaml        --配置文件
```

### 运行

```sh
$ git clone https://github.com/ThingsPanel/modbus-protocol-plugin.git
$ cd modbus-protocol-plugin
$ go run . start
```

## rule-engine安装启动（可选）


:::info

安装手册若有没帮助到您的地方，请联系我们。`qq群：260150504`

:::

:::info

其他信息请查阅[`代码库`](../system-introduction/code_repository)的README安装步骤。

:::
