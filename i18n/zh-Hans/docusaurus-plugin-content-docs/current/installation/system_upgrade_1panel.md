---
sidebar_position: 9
---


# 系统升级指南（1Panel）

与 ThingsPanel 社区版最新镜像版本比对（主要参考 [ThingsPanel 快速开始文档](https://docs.thingspanel.cn/zh-Hans/docs/quick_start) 中的 `docker-compose.yml` 文件）

## 版本兼容性说明
**主要参考查阅：** [ThingsPanel 系统升级指南](https://docs.thingspanel.cn/zh-Hans/docs/installation/system_upgrade)

:::caution 重要提示
ThingsPanel 从 **0.5.4** 版本升级到 **1.0.0** 版本是不支持直接升级的，需要**重新部署**。
:::


---

## 2. 登录 1Panel 面板

---

## 3. Docker 部署版本升级指南

:::caution 重要提示
也可选择使用云服务快照进行备份
:::

### 3.1 升级前准备（数据备份）

#### 3.1.1 备份数据库与存储卷

登录服务器终端，执行以下备份命令：

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

#### 3.1.2 备份 docker-compose.yml

1. 进入 1Panel 面板 -> **容器** -> **编排** -> 编辑 **thingspanel-docker**，复制编辑器中当前展示的完整配置。

2. 在终端内保存该文件备份：
   ```bash
   cd "$BACKUP_DIR"
   vi docker-compose.yml.bak
   # 将复制的内容粘贴并保存退出
   ```

### 3.2 升级方式选择

您可以选择以下两种升级方式之一：
- **部分容器升级**（只更新特定服务）
- **全系统升级**（更新所有组件）

### 3.3 部分容器升级流程

#### 容器与服务的对应关系

- **前端服务:** `thingspanel-vue:nginx`
- **MQTT服务:** `thingspanel-gmqtt:gmqtt`
- **后端服务:** `thingspanel-go:go`

#### 修改配置与版本

1. 登录 1Panel 面板。
2. 导航至 **容器** -> **编排** -> 编辑 **thingspanel-docker**。
3. 更改相关的镜像版本。
4. 点击 **保存** 并等待容器更新部署完成。

:::tip 提示
如果新版本使用相同的镜像标签，请确保在本地镜像管理中 **删除旧镜像并重新拉取**，以获取最新的层级文件。
:::

### 3.4 配置文件更新

前往官方仓库 `thingspanel-backend-community/configs/` 目录中，检查以下文件是否有变动：
- `configs/conf.yml`
- `messages_str.yaml`
- `messages.yaml`

如果发现官方版本配置有新增或变更，请将变更比对并同步更新到目标服务器内的 `thingspanel-docker_go_configs`卷（在 1Panel 面板的 **容器** -> **存储卷** 中编辑）。

### 3.5 重启服务

任何手动配置更新后，请重启对应的容器服务使配置生效。

---

## 4. 异常恢复与回滚

若升级过程发生异常或失败，可参照以下步骤恢复数据。

### 4.1 恢复数据库操作流程

```bash
# 第一步：停止连接数据库的服务（必须保留 postgres 以便执行后续语句）
docker stop thingspanel-docker-backend-1 tp-images-test-gmqtt-1 tp-images-test-frontend-1

# 第二步：重建数据库并初始化 TimescaleDB 扩展
docker exec -i thingspanel-docker-postgres-1 psql -U postgres << 'EOF'
DROP DATABASE IF EXISTS "ThingsPanel";
CREATE DATABASE "ThingsPanel";
\c ThingsPanel
CREATE EXTENSION IF NOT EXISTS timescaledb;
EOF

# 第三步：导入恢复数据（通过 --disable-triggers 避免产生循环外键报错）
docker exec -i thingspanel-docker-postgres-1 \
  pg_restore -U postgres -d ThingsPanel \
  --no-owner \
  --disable-triggers \
  -F c \
  < "$BACKUP_DIR/ThingsPanel.dump"
```

### 4.2 恢复后端卷数据（按需）

若配置丢失，可利用先前的备份恢复：

```bash
# 复制备份的配置与文件回容器
docker cp "$BACKUP_DIR/configs" thingspanel-docker-backend-1:/go/src/app/
docker cp "$BACKUP_DIR/files"   thingspanel-docker-backend-1:/go/src/app/
```

### 4.3 重新启动服务

完成数据恢复后，重新启动之前停止的服务：

```bash
# 启动上述过程中被停止的相关服务
docker start thingspanel-docker-backend-1 tp-images-test-gmqtt-1 tp-images-test-frontend-1
```
