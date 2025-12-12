---
sidebar_position: 8
---

# 系统升级指南

## 版本兼容性说明

:::caution 重要提示
ThingsPanel 从 0.5.4 版本升级到 1.0.0 版本是不支持直接升级的，需要重新部署。
:::

## Docker 部署版本升级指南

### 升级前准备

1. **数据备份**
   - 备份数据库
   - 备份配置文件
   - 备份自定义插件和扩展

2. **环境检查**
   - 确认系统资源充足
   - 验证存储空间
   - 检查现有服务状态

### 升级方式选择

您可以选择以下两种升级方式之一：

- 部分容器升级（只更新特定服务）
- 全系统升级（更新所有组件）

### 部分容器升级流程

#### 1. 容器与卷的对应关系

```bash
前端服务: thingspanel-vue:nginx
MQTT服务: thingspanel-gmqtt:gmqtt
后端服务: thingspanel-go:go
```

#### 2. 升级步骤

1. 更新源码

```bash
cd thingspanel-docker
git pull
```

2. 停止并清理目标容器

```bash
# 停止容器
docker stop <ContainerID>

# 删除容器
docker rm <ContainerID>

# 删除镜像
docker rmi <ImageID>
```

3. 清理卷

```bash
# 清理未使用的卷
docker volume prune

# 查看现有卷
docker volume ls

# 删除特定卷（如需要）
docker volume rm thingspanel-docker_nginx
docker volume rm thingspanel-docker_gmqtt
docker volume rm thingspanel-docker_go
```

4. 重新部署服务

```bash
docker-compose -f docker-compose.yml up
```

:::tip 提示
如果新版本使用相同的镜像标签，请确保删除本地镜像并重新拉取，以获取最新版本。
:::

### 全系统升级流程

1. **准备工作**
   - 比对新旧版本的 docker-compose.yml 文件，确认需要更新的服务
   - 更新源码到目标版本

   ```bash
   git pull
   ```

2. **停止现有服务**

   ```bash
   docker-compose down
   ```

3. **启动新版本**

   ```bash
   docker-compose -f docker-compose.yml up -d
   ```

### 配置更新

如需修改卷中的配置：

1. 查找卷位置

```bash
# 列出所有卷
docker volume ls

# 查看特定卷的详细信息
docker volume inspect <卷名>
```

2. 修改配置
   - 直接编辑卷目录下的配置文件
   - 注意：应用程序会优先使用环境变量中的配置

:::info 注意事项

1. 升级前务必备份所有重要数据
2. 建议在测试环境先进行升级测试
3. 升级过程中注意保留自定义配置
4. 如遇问题，可回退到备份版本
:::

## 源码部署版本升级

对于源码部署的环境：

1. 更新源码

```bash
git pull origin <target-version>
```

2. 重新编译

3. 重启服务
