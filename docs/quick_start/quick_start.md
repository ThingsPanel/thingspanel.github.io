---
sidebar_position: 1
---

# Installation & Onboarding

## Introduction

This chapter aims to provide the simplest and fastest way to help you deploy ThingsPanel, whether you are using Windows, macOS, or any Linux distribution.

## Deployment Methods Overview

ThingsPanel provides two simple and fast deployment methods (approx. 10 minutes) to meet different user needs:

1. **Docker Compose Deployment (Recommended)**: Suitable for all operating systems, providing the most consistent and simple deployment experience.
2. **Windows Standalone Installer**: A one-click installation experience for Windows users.

## Method 1: Docker Compose Deployment (Recommended)

Docker Compose is the fastest and most convenient way to deploy ThingsPanel, ensuring a consistent runtime environment across various operating systems.

### Prerequisites

Before starting deployment, please ensure your system has the following software installed:

- **Docker**: https://docs.docker.com/engine/installation/
- **Docker Compose**: https://docs.docker.com/compose/install/

:::info

Tip: Windows users encountering difficulties downloading Docker Desktop can obtain the installation package through our technical support channels. Please refer to the "Support" section at the end of this document.

:::

### Deployment Steps

#### Step 1: Create Deployment Directory

```bash
mkdir thingspanel
cd thingspanel
```

#### Step 2: Create docker-compose.yml File

Create a file named `docker-compose.yml` and paste the following content into it:

```yaml
version: "3.9"

services:
  frontend:
    image: registry.cn-hangzhou.aliyuncs.com/thingspanel/thingspanel-vue:v1.1.11
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
    image: registry.cn-hangzhou.aliyuncs.com/thingspanel/thingspanel-gmqtt:v1.1.5
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
    image: registry.cn-hangzhou.aliyuncs.com/thingspanel/thingspanel-go:v1.1.11
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
    image: registry.cn-hangzhou.aliyuncs.com/thingspanel/modbus-protocol-plugin:v1.0.5
    ports:
      - "502:502"
      - "503:503"
    environment:
      - "MODBUS_THINGSPANEL_ADDRESS=http://backend:9999"
      - "MODBUS_MQTT_BROKER=gmqtt:1883"
      - "MODBUS_MQTT_QOS=0"
    networks:
      thingspanel_network:
        ipv4_address: 172.20.0.10  # Specify fixed IP address
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
        - subnet: 172.20.0.0/16  # Define subnet range
          gateway: 172.20.0.1    # Define gateway address
```

:::info

Tip: When deploying with Docker, please note that the default value of the `GOTP_MQTT_ACCESS_ADDRESS` environment variable in the `backend` container is `127.0.0.1:1883`. If you are deploying on a Linux server, you need to change this IP address to your server's IP address or domain name, otherwise the "Simulate Data Reporting" function in the device details page will not work properly (you can also manually modify the IP address in the send box when sending).

:::

#### Step 3: Start ThingsPanel Services

Run the following command in your terminal or command prompt to start all services:

```bash
docker compose -f docker-compose.yml up -d
```

> Tip: The `-d` flag runs all services in the background. Remove `-d` to view logs.

#### Step 4: Verify Service Status

Check if all services are running correctly:

```bash
docker compose ps
```

If you need to view logs for a specific service:

```bash
docker compose logs thingspanel-backend
```

#### Step 5: Access ThingsPanel Platform

Open your browser and visit:

```
http://YOUR_SERVER_IP:8080
```

> For Docker Desktop deployment, visit http://127.0.0.1:8080

Default Credentials:
- **System Admin**: super@super.cn / 123456
- **Tenant Admin**: tenant@tenant.cn / 123456

> **Security Warning**: Please change the default passwords immediately after the first login to ensure system security.

### Configuration Tips

To better manage your configuration, you can create a `.env` file to store environment variables:

```bash
# Create .env file
touch .env
```

Example `.env` file:

```
# Database Config
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_secure_password
DB_NAME=thingspanel

# Other Config
TP_ADMIN_EMAIL=admin@yourdomain.com
```

Then reference these variables in `docker-compose.yml`:

```yaml
environment:
  TP_DB_HOST: ${DB_HOST}
  TP_DB_PORT: ${DB_PORT}
  # Other env vars...
```

### Managing Docker Compose Deployment

Common commands:

```bash
# Stop all services
docker compose stop

# Stop and remove all containers and networks
docker compose down

# Restart all services
docker compose restart
```

### Video Tutorial

[How to Quickly Deploy ThingsPanel IoT Platform - Docker Desktop](https://www.bilibili.com/video/BV1L8Ecz4E2v/?share_source=copy_web&vd_source=ffdc396f72a54b325037ada71bc99b05)

## Method 2: Windows Standalone Installer

ThingsPanel provides a one-click installer for Windows users to simplify deployment.

### Get Installer

Please join our QQ Group 371794256 and download the latest `.exe` installer from the group files.

### Installation Steps

1. Download the installer and double-click to run.
2. Follow the installation wizard prompts to complete installation.
3. After installation, the system will automatically open the browser and navigate to the ThingsPanel login page.

## Device Onboarding Guide

After successfully deploying ThingsPanel, follow these steps to quickly onboard a device and view data:

### Step 1: Add Device

1. Login to ThingsPanel.
2. Navigate to "Device Management".
3. Click "Add Device" and fill in device information.
4. Optionally bind a **Device Template**.

### Step 2: Get Connection Info

After adding a device, the system generates connection parameters, including:
- MQTT Server Address and Port
- ClientID
- Topic
- Username and Password (if applicable)

### Step 3: Push Data

Use an MQTT client tool or your physical device to push data using the parameters provided by the system.

Recommended MQTT Tools:
- https://mqttx.app/downloads
- https://mqttfx.jensd.de/index.php/download

### Step 4: View Data

In ThingsPanel, you can view device data via:
1. Real-time and Historical Data views in **Device Details**.
2. Visualization Charts in custom **Dashboards**.
3. Data Trend Analysis in Data Analysis tools.

## Onboard a Device in 15 Seconds

<video controls src="/videos/15s_add_device.mp4" title="15s Add Device" width="1000"></video>

## Troubleshooting

If you encounter issues during deployment or usage, try the following:

1. **Check Service Status**: Use `docker compose ps` to verify services are running.
2. **View Logs**: Use `docker compose logs <service_name>` to debug.
3. **Network Check**: Ensure firewalls are not blocking ports 8080 and 1883.
4. **Resource Check**: Ensure sufficient CPU, Memory, and Disk space.

## Support

- Community Support: QQ Group 371794256

## Best Practices

1. **Regular Backups**: Especially database and config in production.
2. **Security Hardening**: Change default passwords.
3. **Resource Monitoring**: Monitor CPU, Memory, Disk usage.
4. **Keep Updated**: Regularly update to the latest version for new features and security fixes.
