---
sidebar_position: 3
---

# 源码安装

根据情况可选择源码方式安装。

## timescaledb数据库搭建

### TP.sql脚本

修改后端TP.sql文件的权限

```bash
chmod 777 TP.sql
```

### 获取数据库镜像

```bash
docker pull timescale/timescaledb:latest-pg12
```

### 创建并运行容器

```
docker run --name timescaledb -p 5432:5432 \
-v /home/tp/backend/TP.sql:/docker-entrypoint-initdb.d/TP.sql \
-e TZ=Asia/Shanghai \
-e POSTGRES_DB=tp \
-e POSTGRES_USER=postgres \
-e POSTGRES_PASSWORD=postgres2022 \
-v /home/tp/data/dir:/var/lib/postgresql/data \
timescale/timescaledb:latest-pg12
```

## GMQTT部署

### 获取源码

```
git clone https://github.com/ThingsPanel/gmqtt.git
```

### 运行服务

```
cd gmqtt/cmd/gmqttd&&go run . start -c default_config.yml
```

## redis部署

###下载安装包和编译

```
wget http://download.redis.io/releases/redis-6.0.8.tar.gz
tar xzf redis-6.0.8.tar.gz
cd redis-6.0.8&&make
```

###启动

```
cd src&&./redis-server
```

## 后端部署

### 环境版本及linux安装示例

Golang-v1.17.6（下载地址：<https://golang.google.cn/dl/>）

```bash
wget https://golang.google.cn/dl/go1.17.6.linux-arm64.tar.gz
tar -C /usr/local -zxvf go1.17.6.linux-amd64.tar.gz
vim /etc/profile #将"export PATH=$PATH:/usr/local/go/bin"添加到文件底部
source /etc/profile #（让配置生效）
go version #(查看版本)
```

### 后端相关配置文件

```text
./conf/app.conf                  --系统配置 
./modules/dataService/config.yml --mqtt客户端等
```

### 日志存放目录

```text
./files/logs/
```

### 编译和运行

main.go文件的目录下对go代码进行编译和运行

```bash
go build #编译
./ThingsPanel-Go #或者以守护方式运行
```

### 数据库脚本

```text
./TP.sql
```

## 源码安装指导

:::info

请查阅[`代码库`](../system-introduction/code_repository)的README安装步骤。

:::
