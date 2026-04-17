---
sidebar_position: 1
---

# 安装对接设备

## 简介

本章节旨在提供最简单、最快速的方式帮助您部署 ThingsPanel，无论您使用的是 Windows、macOS 还是任何 Linux 版本。

## 部署方法概览

ThingsPanel 提供了一键自动化安装脚本，支持 Linux、Windows、macOS 全平台（部署用时约 10 分钟）。

**请访问 [https://install.thingspanel.io/](https://install.thingspanel.io/) 选择您的操作系统，按页面指引执行对应命令即可完成部署。**

### 快速命令一览

| 操作系统 | 安装命令 |
|---------|---------|
| **Linux** (CentOS / Ubuntu / Debian) | `curl -fsSL https://install.thingspanel.io/install.sh \| sh` |
| **Windows** | `irm https://install.thingspanel.io/install.ps1 \| iex` |
| **macOS** | `curl -fsSL https://install.thingspanel.io/install.sh \| sh` |

> **Linux / macOS** 需要通过 SSH 连接到目标服务器执行上述命令。
> **Windows** 支持直接本地安装，或下载 .exe 安装包离线安装。

安装完成后，访问 `http://您的服务器IP:8080` 即可打开 ThingsPanel 平台。

默认登录凭据：
- **系统管理员**: super@super.cn / 123456
- **租户管理员**: tenant@tenant.cn / 123456

> **安全警告**: 请务必在首次登录后更改默认密码，以提高系统安全性。

如需进一步管理部署，可使用以下命令：

```bash
# 查看服务状态
docker compose ps

# 查看后端日志
docker compose logs -f backend

# 停止所有服务
docker compose down

# 更新平台（重新执行安装脚本即可）
./install.sh
```

### 视频示例

[如何快速部署ThingsPanel物联网平台-Docker桌面版](https://www.bilibili.com/video/BV1L8Ecz4E2v/?share_source=copy_web&vd_source=ffdc396f72a54b325037ada71bc99b05)

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

