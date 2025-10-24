---
sidebar_position: 1
---

# 安装对接设备

## 简介

本章节旨在提供最简单、最快速的方式帮助您部署 ThingsPanel，无论您使用的是 Windows、macOS 还是任何 Linux 版本。

## 部署方法概览

ThingsPanel 提供了两种简单快速的部署方法（部署用时大约需要10分钟），以满足不同用户的需求：

1. **Docker Compose 部署（推荐）**：适用于所有操作系统，提供最一致、最简单的部署体验
2. **Windows 独立安装包**：为 Windows 用户提供的一键式安装体验

## 方法 1: 使用 Docker Compose 进行部署（推荐）

Docker Compose 是部署 ThingsPanel 最快速、最便捷的方式，能够确保在各种操作系统上拥有一致的运行环境。

### 先决条件

在开始部署之前，请确保您的系统已安装以下软件：

- **Docker**: https://docs.docker.com/engine/installation/
- **Docker Compose**: https://docs.docker.com/compose/install/

:::info

提示：Windows 用户如遇到 Docker Desktop 下载困难，可通过我们的技术支持渠道获取安装包。请参考文档末尾的"技术支持"章节获取官方 QQ 技术支持群号，加入后可在群文件中下载所需安装程序。

:::

### 部署步骤

#### 第一步：创建部署目录

```bash
mkdir thingspanel
cd thingspanel
```

#### 第二步：创建 docker-compose.yml 文件

创建一个名为 docker-compose.yml 的文件，并将以下内容粘贴到文件中：

```yaml
version: "3.9"

services:
  frontend:
    image: registry.cn-hangzhou.aliyuncs.com/thingspanel/thingspanel-vue:v1.1.10
    ports:
      - "8080:8080"
    environment:
      - "TZ=Asia/Shanghai"
      - "BACKEND_HOST=http://backend:9999"
    depends_on:
      backend:
        condition: service_started
    volumes:
      - nginx:/etc/nginx
    restart: unless-stopped
    networks:
      - thingspanel_network

  postgres:
    image: registry.cn-hangzhou.aliyuncs.com/thingspanel/timescaledb:14
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5555:5432"
    environment:
      - "TZ=Asia/Shanghai"
      - "LC_ALL=C.UTF-8"
      - "POSTGRES_DB=ThingsPanel"
      - "POSTGRES_USER=postgres"
      - "POSTGRES_PASSWORD=postgresThingsPanel"
      - "POSTGRES_HOST_AUTH_METHOD=md5"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres -d ThingsPanel"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 40s
    restart: unless-stopped
    networks:
      - thingspanel_network

  gmqtt:
    image: registry.cn-hangzhou.aliyuncs.com/thingspanel/thingspanel-gmqtt:v1.1.2
    volumes:
      - gmqtt:/gmqttd
    ports:
      - "1883:1883"
    environment:
      - "TZ=Asia/Shanghai"
      - "GMQTT_DB_REDIS_CONN=redis:6379"
      - "GMQTT_DB_REDIS_PASSWORD=redis"
      - "GMQTT_DB_PSQL_PSQLADDR=postgres"
      - "GMQTT_DB_PSQL_PSQLPORT=5432"
      - "GMQTT_DB_PSQL_PSQLDB=ThingsPanel"
      - "GMQTT_DB_PSQL_PSQLUSER=postgres"
      - "GMQTT_DB_PSQL_PSQLPASS=postgresThingsPanel"
    hostname: gmqtt
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    restart: unless-stopped
    networks:
      - thingspanel_network

  redis:
    image: registry.cn-hangzhou.aliyuncs.com/thingspanel/redis:6.2.7
    command: redis-server --requirepass redis
    volumes:
      - redis_data:/data
    ports:
      - "6379:6379"
    environment:
      - "TZ=Asia/Shanghai"
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5
    restart: unless-stopped
    networks:
      - thingspanel_network

  backend:
    image: registry.cn-hangzhou.aliyuncs.com/thingspanel/thingspanel-go:v1.1.10
    ports:
      - "9999:9999"
    environment:
      - "TZ=Asia/Shanghai"
      - "GOTP_DB_PSQL_HOST=postgres"
      - "GOTP_DB_PSQL_PORT=5432"
      - "GOTP_DB_PSQL_USERNAME=postgres"
      - "GOTP_DB_PSQL_PASSWORD=postgresThingsPanel"
      - "GOTP_DB_PSQL_DBNAME=ThingsPanel"
      - "GOTP_DB_PSQL_LOG_LEVEL=3"
      - "GOTP_DB_REDIS_ADDR=redis:6379"
      - "GOTP_DB_REDIS_PASSWORD=redis"
      - "GOTP_MQTT_SERVER=gmqtt"
      - "GOTP_MQTT_ACCESS_ADDRESS=gmqtt:1883"
      - "GOTP_MQTT_BROKER=gmqtt:1883"
      - "GOTP_LOG_LEVEL=error"
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
      gmqtt:
        condition: service_started
    volumes:
      - go_files:/go/src/app/files
      - go_configs:/go/src/app/configs
    restart: unless-stopped
    networks:
      - thingspanel_network

  modbus_service:
    image: registry.cn-hangzhou.aliyuncs.com/thingspanel/modbus-protocol-plugin:v1.0.1
    ports:
      - "502:502"
      - "503:503"
    environment:
      - "MODBUS_THINGSPANEL_ADDRESS=http://backend:9999"
      - "MODBUS_MQTT_BROKER=gmqtt:1883"
      - "MODBUS_MQTT_QOS=0"
    networks:
      thingspanel_network:
        ipv4_address: 172.20.0.10  # 指定固定IP地址
    depends_on:
      - backend
      - gmqtt
    restart: unless-stopped

volumes:
  go_files:
  go_configs:
  gmqtt:
  nginx:
  postgres_data:
  redis_data:

networks:
  thingspanel_network:
    driver: bridge
    ipam:
      driver: default
      config:
        - subnet: 172.20.0.0/16  # 定义网络的子网范围
          gateway: 172.20.0.1    # 定义网关地址
```

:::info

提示：Docker 部署时，请注意 backend 容器中的 GOTP_MQTT_ACCESS_ADDRESS 环境变量默认值为 127.0.0.1:1883。如果您在 Linux 服务器上部署，需要将此 IP 地址改为您的服务器ip地址或域名，否则设备详情页面中的"模拟上报数据"功能将无法正常工作（也可在发送时候手动修改发送框里的IP地址）。

:::

#### 第三步：启动 ThingsPanel 服务

在终端或命令提示符中运行以下命令启动所有服务：

```bash
docker compose -f docker-compose.yml up -d
```

> 提示: -d 参数表示在后台运行所有服务，如需查看日志请去掉 -d 参数。

#### 第四步：验证服务状态

检查所有服务是否正常运行：

```bash
docker compose ps
```

如果需要查看特定服务的日志，可以使用：

```bash
docker compose logs thingspanel-backend
```

#### 第五步：访问 ThingsPanel 平台

打开浏览器，访问：

```
http://您的服务器IP:8080
```

> Docker桌面版部署访问http://127.0.0.1:8080

默认登录凭据：
- **系统管理员**: super@super.cn / 123456
- **租户管理员**: tenant@tenant.cn / 123456

> **安全警告**: 请务必在首次登录后更改默认密码，以提高系统安全性。

### 配置技巧

为了更好地管理您的配置，您可以创建一个 .env 文件来存储环境变量：

```bash
# 创建 .env 文件
touch .env
```

.env 文件示例：

```
# 数据库配置
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_secure_password
DB_NAME=thingspanel

# 其他配置
TP_ADMIN_EMAIL=admin@yourdomain.com
```

然后在 docker-compose.yml 中引用这些变量：

```yaml
environment:
  TP_DB_HOST: ${DB_HOST}
  TP_DB_PORT: ${DB_PORT}
  # 其他环境变量...
```

### 管理 Docker Compose 部署

常用命令：

```bash
# 停止所有服务
docker compose stop

# 停止并移除所有容器、网络
docker compose down

# 重新启动所有服务
docker compose restart
```

### 视频示例

[如何快速部署ThingsPanel物联网平台-Docker桌面版](https://www.bilibili.com/video/BV1L8Ecz4E2v/?share_source=copy_web&vd_source=ffdc396f72a54b325037ada71bc99b05)

## 方法 2: Windows 独立安装包

ThingsPanel 为 Windows 用户提供了一键式安装包，简化了部署过程。

### 获取安装包

请加入 QQ 群 371794256，在群文件中下载最新的 .exe 可执行安装版本。

### 安装步骤

1. 下载安装包后，双击运行安装程序
2. 按照安装向导的提示完成安装
3. 安装完成后，系统将自动打开浏览器并导航到 ThingsPanel 登录页面

## 设备接入指南

成功部署 ThingsPanel 后，您可以按照以下步骤快速接入设备并查看数据：

### 第一步：添加设备

1. 登录 ThingsPanel 平台
2. 导航至「设备管理」页面
3. 点击「添加设备」，填写设备信息
4. 可选择是否需要绑定设备模板

### 第二步：获取设备连接信息

添加设备后，系统会生成设备的连接参数，包括：
- MQTT 服务器地址和端口
- 设备标识（ClientID）
- 主题（Topic）
- 用户名和密码（如适用）

### 第三步：推送数据

使用 MQTT 客户端工具或您的设备，按照系统提供的参数推送数据。

推荐的 MQTT 客户端工具：
- https://mqttx.app/downloads
- https://mqttfx.jensd.de/index.php/download

### 第四步：查看数据

在 ThingsPanel 平台中，您可以通过以下方式查看设备数据：
1. 设备详情页面中的实时数据和历史数据视图
2. 自定义看板中的可视化图表
3. 数据分析工具中的数据趋势分析

## 15秒接入接入一个设备并查看数据

<video controls src="/videos/15s_add_device.mp4" title="15秒添加设备并推送数据" width="1000"></video>

## 故障排除

如果您在部署或使用过程中遇到问题，请尝试以下步骤：
1. 检查服务状态：使用 `docker compose ps` 命令检查所有服务是否正常运行
2. 查看日志：使用 `docker compose logs <服务名>` 查看特定服务的日志
3. 网络检查：确保防火墙未阻止必要的端口（8080, 1883）
4. 资源检查：确保系统有足够的 CPU、内存和磁盘空间

## 支持

- 社区支持：QQ群 371794256

## 最佳实践

1. 定期备份数据：特别是生产环境中的数据库和配置
2. 安全加固：更改默认密码
3. 监控系统资源：对 CPU、内存、磁盘使用进行监控
4. 保持更新：定期更新到最新版本以获取新功能和安全修复

