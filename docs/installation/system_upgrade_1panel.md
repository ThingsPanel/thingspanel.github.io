---
sidebar_position: 9
---


## System Upgrade Guide (1Panel)

Compare with the latest mirror version of the ThingsPanel community edition (mainly refer to the `docker-compose.yml` file in the [ThingsPanel Quick Start Guide](/docs/quick_start))

### Version Compatibility Note
**Main Reference:** [ThingsPanel System Upgrade Guide](/docs/installation/system_upgrade)

:::caution IMPORTANT
Direct upgrade from **0.5.4** to **1.0.0** is NOT supported. You need to **re-deploy**.
:::


---

## 2. Log in to the 1Panel Dashboard

---

## 3. Docker Deployment Upgrade Guide

:::caution IMPORTANT
You can also choose to use cloud service snapshots for backup.
:::

### 3.1 Pre-upgrade Preparation (Data Backup)

#### 3.1.1 Backup Database and Storage Volumes

Log in to the server terminal and execute the following backup commands:

```bash
# 1. Create backup directory
BACKUP_DIR="/data/backups/thingspanel/20260305"
mkdir -p "$BACKUP_DIR"

# 2. Backup database (Note: replace with absolute container name if different)
docker exec thingspanel-docker-postgres-1 \
  pg_dump -U postgres -d ThingsPanel \
  -F c -Z 6 \
  --no-tablespaces \
  > "$BACKUP_DIR/ThingsPanel.dump"

# Verify backup result: ls -lh "$BACKUP_DIR/ThingsPanel.dump" Ensure file size is not zero

# 3. Backup backend volumes (configs and files)
# If the frontend configuration file has been modified, it also needs to be backed up
docker cp thingspanel-docker-backend-1:/go/src/app/configs "$BACKUP_DIR/configs"
docker cp thingspanel-docker-backend-1:/go/src/app/files   "$BACKUP_DIR/files"
```

#### 3.1.2 Backup docker-compose.yml

1. Go to the 1Panel dashboard -> **Containers** -> **Compose** -> Edit **thingspanel-docker** and copy the current configuration shown in the editor.

2. Save a backup of this file from the terminal:
   ```bash
   cd "$BACKUP_DIR"
   vi docker-compose.yml.bak
   # Paste the copied content, save and exit
   ```

### 3.2 Choose Upgrade Method

You can choose one of the following two upgrade methods:
- **Partial Container Upgrade** (Update specific services only)
- **Full System Upgrade** (Update all components)

### 3.3 Partial Container Upgrade Process

#### Container and Service Mapping

- **Frontend Service:** `thingspanel-vue:nginx`
- **MQTT Service:** `thingspanel-gmqtt:gmqtt`
- **Backend Service:** `thingspanel-go:go`

#### Modify Configuration and Version

1. Log in to the 1Panel dashboard.
2. Navigate to **Containers** -> **Compose** -> Edit **thingspanel-docker**.
3. Change to the corresponding image versions.
4. Click **Save** and wait for the container update and deployment to complete.

:::tip Tip
If the new version uses the same image tag, please make sure to **delete the old image and pull again** in local image management to get the latest layers.
:::

### 3.4 Update Configuration Files

Go to the official repository `thingspanel-backend-community/configs/` directory and check if there are any changes in the following files:
- `configs/conf.yml`
- `messages_str.yaml`
- `messages.yaml`

If there are new additions or changes to the official version configuration, please compare the changes and synchronize them to the target server's `thingspanel-docker_go_configs` volume (edit in 1Panel dashboard **Containers** -> **Volumes**).

### 3.5 Restart Service

After any manual configuration updates, please restart the corresponding container service to apply the configuration.

---

## 4. Anomaly Recovery and Rollback

If an exception occurs or the upgrade fails, you can refer to the following steps to recover data.

### 4.1 Database Recovery Process

```bash
# Step 1: Stop services connecting to the database (postgres must be kept running for subsequent queries)
docker stop thingspanel-docker-backend-1 tp-images-test-gmqtt-1 tp-images-test-frontend-1

# Step 2: Rebuild database and initialize TimescaleDB extension
docker exec -i thingspanel-docker-postgres-1 psql -U postgres << 'EOF'
DROP DATABASE IF EXISTS "ThingsPanel";
CREATE DATABASE "ThingsPanel";
\c ThingsPanel
CREATE EXTENSION IF NOT EXISTS timescaledb;
EOF

# Step 3: Import recovery data (use --disable-triggers to avoid circular foreign key errors)
docker exec -i thingspanel-docker-postgres-1 \
  pg_restore -U postgres -d ThingsPanel \
  --no-owner \
  --disable-triggers \
  -F c \
  < "$BACKUP_DIR/ThingsPanel.dump"
```

### 4.2 Recover Backend Volume Data (As Needed)

If configuration is lost, you can use previous backups to recover it:

```bash
# Copy backup configuration and files back to the container
docker cp "$BACKUP_DIR/configs" thingspanel-docker-backend-1:/go/src/app/
docker cp "$BACKUP_DIR/files"   thingspanel-docker-backend-1:/go/src/app/
```

### 4.3 Restart Services

After completing data recovery, restart the previously stopped services:

```bash
# Start the related services stopped in the above process
docker start thingspanel-docker-backend-1 tp-images-test-gmqtt-1 tp-images-test-frontend-1
```
