---
sidebar_position: 8
---

# 系统升级指南

## 版本兼容性说明

:::caution 重要提示
ThingsPanel 从 0.5.4 版本升级到 1.0.0 版本是不支持直接升级的，需要重新部署。
:::

## Docker 部署版本升级指南

:::caution 重要提示
也可选择使用云服务快照进行备份
:::

### 升级前准备

1. **数据备份**

```bash
# 1. 创建备份目录
BACKUP_DIR="/data/backups/thingspanel/20260305"
mkdir -p "$BACKUP_DIR"

# 2. 备份数据库（注意替换为实际容器名称）
docker exec thingspanel-docker-postgres-1 \
  pg_dump -U postgres -d ThingsPanel \
  -F c -Z 6 \
  --no-tablespaces \
  > "$BACKUP_DIR/ThingsPanel.dump"

# 验证备份结果：ls -lh "$BACKUP_DIR/ThingsPanel.dump" 确认文件大小非零即可

# 3. 备份后端卷（configs 和 files）
# 如果前端修改过配置文件，也需要一并备份
docker cp thingspanel-docker-backend-1:/go/src/app/configs "$BACKUP_DIR/configs"
docker cp thingspanel-docker-backend-1:/go/src/app/files   "$BACKUP_DIR/files"
```

2. **环境检查**
   - 确认系统资源充足
   - 验证存储空间
   - 检查现有服务状态

### 部分容器升级流程

#### 1. 容器与卷的对应关系

```bash
前端服务: thingspanel-vue:nginx
MQTT服务: thingspanel-gmqtt:gmqtt
后端服务: thingspanel-go:go
```

#### 2. 升级步骤

由于应用使用 Docker Compose 部署，推荐直接使用 `docker-compose` 命令对特定服务进行独立升级，无需手动查找容器 ID 或镜像 ID。

1. **修改docker-compose.yml文件**

与 ThingsPanel 社区版最新镜像版本比对（主要参考 [ThingsPanel 快速开始文档](https://docs.thingspanel.cn/zh-Hans/docs/quick_start) 中的 `docker-compose.yml` 文件）

2. **升级目标服务**（以 `backend` 后端服务为例）

```bash
# 1. 停止目标服务
docker-compose stop backend

# 2. 移除目标服务容器
docker-compose rm -f backend

# 3. 拉取该服务的最新镜像
docker-compose pull backend

# 4. 重新以守护态启动该服务
docker-compose up -d backend
```

3. **清理系统碎片**（可选）

```bash
# 清理未被任何容器使用的构建缓存、悬空镜像和数据卷
docker system prune -f
docker volume prune -f
```

:::tip 提示
将上述命令中的 `backend` 替换为您需要单独升级的服务名称（如 `nginx`, `gmqtt`，请参考 `docker-compose.yml` 中的服务名称）。
如果新版本使用相同的镜像标签（如 `:latest`），执行 `docker-compose pull <服务名>` 步即可拉取最新版本。
:::

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
