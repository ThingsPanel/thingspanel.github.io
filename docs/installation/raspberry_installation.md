---
sidebar_position: 4
---

# 树莓派源码安装
 # ThingsPanel 树莓派安装指南

本文档详细介绍了如何在树莓派上安装和配置 ThingsPanel 物联网平台。

## 目录

- [系统要求](#系统要求)
- [快速安装](#快速安装)
- [详细安装步骤](#详细安装步骤)
- [安装选项](#安装选项)
- [组件说明](#组件说明)
- [故障排除](#故障排除)
- [常见问题](#常见问题)
- [更多资源](#更多资源)

## 系统要求

在安装 ThingsPanel 之前，请确保您的树莓派满足以下要求：

- 树莓派 3B+ 或更高型号（推荐树莓派 4B 或更高型号）
- 至少 2GB RAM（推荐 4GB 或更高）
- 至少 16GB SD 卡（推荐 32GB 或更高）
- 树莓派 OS（基于 Debian Bullseye 或更高版本）
- 网络连接

## 快速安装

如果您想快速安装所有组件，可以使用以下命令：

```bash
# 下载安装脚本
wget -O install_thingspanel_rpi.sh https://raw.githubusercontent.com/ThingsPanel/thingspanel-rpi-docker/main/install_thingspanel_rpi.sh

# 添加执行权限
chmod +x install_thingspanel_rpi.sh

# 完全自动模式安装（所有组件）
./install_thingspanel_rpi.sh -a
```

安装完成后，通过浏览器访问树莓派的 IP 地址即可打开 ThingsPanel 平台：

```
http://树莓派IP地址
```

默认账号密码：
- 系统管理员: super@super.cn / 123456
- 租户管理员: tenant@tenant.cn / 123456

## 详细安装步骤

如果您希望了解更详细的安装过程或自定义安装选项，请按照以下步骤操作：

### 1. 准备环境

首先，确保您的树莓派系统是最新的：

```bash
sudo apt update
sudo apt upgrade -y
```

### 2. 下载安装脚本

下载 ThingsPanel 树莓派一键安装脚本：

```bash
wget -O install_thingspanel_rpi.sh https://raw.githubusercontent.com/ThingsPanel/thingspanel-rpi-docker/main/install_thingspanel_rpi.sh
chmod +x install_thingspanel_rpi.sh
```

### 3. 执行安装脚本

根据您的需求，选择以下任一方式运行安装脚本：

#### 交互式安装（推荐新用户）

```bash
./install_thingspanel_rpi.sh
```

此模式会在每一步都向您询问确认，适合希望了解整个安装过程的用户。

#### 自动确认安装

```bash
./install_thingspanel_rpi.sh -y
```

此模式会自动确认所有提示，但仍会显示安装进度。

#### 完全自动安装

```bash
./install_thingspanel_rpi.sh -a
```

此模式下，脚本会自动安装所有组件，无需任何交互。

#### 自定义组件安装

```bash
# 只安装指定组件
./install_thingspanel_rpi.sh -c redis,timescaledb,backend

# 安装除了指定组件外的所有组件
./install_thingspanel_rpi.sh -s frontend
```

### 4. 安装过程

安装脚本会自动执行以下操作：

1. 设置安装环境和目录
2. 更新系统
3. 安装必要工具和依赖
4. 安装 Docker
5. 检测 ARM 架构并设置环境
6. 安装 Go 环境（如果需要）
7. 安装 Redis 数据库
8. 安装 TimescaleDB 数据库
9. 安装 GMQTT 消息代理
10. 安装 ThingsPanel 后端服务
11. 安装 ThingsPanel 前端（包括 Nginx 配置）

整个安装过程根据网络状况和树莓派性能可能需要 15-30 分钟。

### 5. 验证安装

安装完成后，脚本会显示访问信息：

```
ThingsPanel安装完成!
访问地址: http://您的树莓派IP地址
默认账号密码:
- 系统管理员: super@super.cn / 123456
- 租户管理员: tenant@tenant.cn / 123456
```

使用浏览器访问该地址，并使用默认账号登录系统。

## 安装选项

安装脚本支持以下命令行选项：

| 选项 | 说明 |
| --- | --- |
| `-y, --yes` | 自动模式，所有提示默认选择 yes |
| `-a, --auto` | 完全自动模式，不显示任何提示，自动安装所有组件 |
| `-c, --components` | 指定要安装的组件，用逗号分隔 (redis,timescaledb,gmqtt,backend,frontend) |
| `-s, --skip` | 指定要跳过的组件，用逗号分隔 (redis,timescaledb,gmqtt,backend,frontend) |
| `-v, --verbose` | 详细模式，即使在自动模式下也显示所有输出 |
| `-p, --prebuilt` | 使用预编译的二进制文件（默认选项） |
| `-b, --build` | 从源码编译（不推荐在低性能设备上使用） |
| `-h, --help` | 显示帮助信息 |

## 组件说明

ThingsPanel 树莓派版包含以下核心组件：

### Redis

用于缓存和消息队列，安装在 Docker 容器中。

- 端口: 6379
- 密码: redis
- 数据目录: /home/pi/thingspanel/redis/data

### TimescaleDB

用于存储时序数据和系统配置，基于 PostgreSQL 的时序数据库，安装在 Docker 容器中。

- 端口: 5432
- 数据库名: ThingsPanel
- 用户名: postgres
- 密码: postgresThingsPanel
- 数据目录: /home/pi/thingspanel/timescaledb/data

### GMQTT

MQTT 消息代理，用于设备通信，通过 PM2 管理的服务。

- 端口: 1883
- 超级用户名: root
- 超级用户密码: root
- 设备接入服务密码: plugin
- 安装目录: /home/pi/thingspanel/thingspanel-gmqtt

### 后端服务

ThingsPanel 核心逻辑和 API 服务，通过 PM2 管理的服务。

- 端口: 9999
- 安装目录: /home/pi/thingspanel/thingspanel-backend-community
- 日志目录: /home/pi/thingspanel/thingspanel-backend-community/files/logs

### 前端服务

ThingsPanel Web 界面，通过 Nginx 提供服务。

- 端口: 80
- 网站目录: /var/www/html/thingspanel
- Nginx 配置: /etc/nginx/sites-available/thingspanel

## 故障排除

如果在安装或使用过程中遇到问题，请尝试以下解决方案：

### 1. 服务无法启动

检查各个服务的状态：

```bash
# 查看所有 Docker 容器
docker ps -a

# 查看 PM2 管理的进程
pm2 list

# 查看 Nginx 状态
sudo systemctl status nginx
```

### 2. 网页显示 502 错误

这通常意味着后端服务未正常运行，请尝试：

```bash
# 重启后端服务
pm2 restart backend

# 查看后端日志
pm2 logs backend
```

### 3. 设备无法连接 MQTT 服务

```bash
# 检查 GMQTT 服务状态
pm2 status gmqtt

# 重启 GMQTT 服务
pm2 restart gmqtt

# 查看 GMQTT 日志
pm2 logs gmqtt
```

### 4. 数据库连接问题

```bash
# 检查数据库容器状态
docker ps | grep timescaledb

# 查看数据库日志
docker logs $(docker ps | grep timescaledb | awk '{print $1}')

# 重启数据库容器
docker restart $(docker ps | grep timescaledb | awk '{print $1}')
```

### 5. 重启所有服务

如果系统功能异常，可以尝试重启所有服务：

```bash
# 重启所有 PM2 管理的服务
pm2 restart all

# 重启 Nginx
sudo systemctl restart nginx

# 重启 Docker 容器
docker restart $(docker ps -q)
```

## 常见问题

### Q: 安装过程中出现"端口已被占用"错误
A: 这意味着系统中已有服务占用了需要使用的端口。您可以使用 `sudo lsof -i:端口号` 命令查找占用端口的进程，然后终止它或使用 `-s` 参数跳过相应组件的安装。

### Q: 安装后无法访问 Web 界面
A: 请检查以下几点：
1. 确认 Nginx 服务已启动：`sudo systemctl status nginx`
2. 确认后端服务已启动：`pm2 status backend`
3. 检查防火墙配置：`sudo ufw status`（如果已启用，确保端口 80 已开放）
4. 使用正确的 IP 地址：`hostname -I`

### Q: 如何备份数据
A: ThingsPanel 的主要数据存储在 TimescaleDB 中，您可以使用 PostgreSQL 的备份工具进行备份：

```bash
# 备份数据库
docker exec $(docker ps | grep timescaledb | awk '{print $1}') pg_dump -U postgres -d ThingsPanel > thingspanel_backup.sql

# 还原数据库
cat thingspanel_backup.sql | docker exec -i $(docker ps | grep timescaledb | awk '{print $1}') psql -U postgres -d ThingsPanel
```

### Q: 如何更新 ThingsPanel
A: 目前推荐的更新方法是重新运行安装脚本：

```bash
./install_thingspanel_rpi.sh -y
```

脚本会检测已安装的组件并提供更新选项。

## 更多资源

- [ThingsPanel 官方文档](https://thingspanel.io)
- [ThingsPanel GitHub 仓库](https://github.com/ThingsPanel)

如果您在使用过程中遇到任何问题，或有任何建议，欢迎在 GitHub 上提交 issue 或加入我们的社区讨论。