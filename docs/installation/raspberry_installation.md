---
sidebar_position: 4
---

# Raspberry Pi Installation

This document details how to install and configure the ThingsPanel IoT platform on a Raspberry Pi.

## Table of Contents

- [System Requirements](#system-requirements)
- [Quick Installation](#quick-installation)
- [Detailed Installation Steps](#detailed-installation-steps)
- [Installation Options](#installation-options)
- [Component Description](#component-description)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [More Resources](#more-resources)

## System Requirements

Before installing ThingsPanel, please ensure your Raspberry Pi meets the following requirements:

- Raspberry Pi 3B+ or higher (Raspberry Pi 4B or higher recommended)
- At least 2GB RAM (4GB or higher recommended)
- At least 16GB SD Card (32GB or higher recommended)
- Raspberry Pi OS (Debian Bullseye based or higher)
- Network Connection

## Quick Installation

If you want to quickly install all components, you can use the following commands:

```bash
# Download installation script
wget -O install_thingspanel_rpi.sh https://raw.githubusercontent.com/ThingsPanel/thingspanel-on-raspberrypi/main/scripts/install/install_thingspanel_rpi.sh

# Add execution permissions
chmod +x install_thingspanel_rpi.sh

# Install in fully automatic mode (all components)
./install_thingspanel_rpi.sh -a
```

After installation is complete, access the ThingsPanel platform by visiting your Raspberry Pi's IP address in a browser:

```
http://RPi_IP_Address
```

Default Credentials:
- System Admin: super@super.cn / 123456
- Tenant Admin: tenant@tenant.cn / 123456

## Detailed Installation Steps

If you want to understand the installation process in more detail or customize installation options, follow these steps:

### 1. Prepare Environment

First, ensure your Raspberry Pi system is up to date:

```bash
sudo apt update
sudo apt upgrade -y
```

### 2. Download Installation Script

Download the ThingsPanel Raspberry Pi one-click installation script:

```bash
wget -O install_thingspanel_rpi.sh https://raw.githubusercontent.com/ThingsPanel/thingspanel-rpi-docker/main/install_thingspanel_rpi.sh
chmod +x install_thingspanel_rpi.sh
```

### 3. Execute Installation Script

Run the installation script in one of the following ways depending on your needs:

#### Interactive Installation (Recommended for New Users)

```bash
./install_thingspanel_rpi.sh
```

This mode asks for confirmation at each step, suitable for users who want to understand the installation process.

#### Auto-Confirm Installation

```bash
./install_thingspanel_rpi.sh -y
```

This mode automatically confirms all prompts but still displays installation progress.

#### Fully Automatic Installation

```bash
./install_thingspanel_rpi.sh -a
```

In this mode, the script automatically installs all components without any interaction.

#### Custom Component Installation

```bash
# Install only specific components
./install_thingspanel_rpi.sh -c redis,timescaledb,backend

# Install all components except specified ones
./install_thingspanel_rpi.sh -s frontend
```

### 4. Installation Process

The installation script automatically performs the following operations:

1.  Sets up installation environment and directories
2.  Updates the system
3.  Installs necessary tools and dependencies
4.  Installs Docker
5.  Detects ARM architecture and sets environment
6.  Installs Go environment (if needed)
7.  Installs Redis database
8.  Installs TimescaleDB database
9.  Installs GMQTT message broker
10. Installs ThingsPanel backend service
11. Installs ThingsPanel frontend (including Nginx configuration)

The entire installation process may take 15-30 minutes depending on network conditions and Raspberry Pi performance.

### 5. Verify Installation

Upon completion, the script will display access information:

```
ThingsPanel Installation Complete!
Access URL: http://YOUR_RPI_IP
Default Credentials:
- System Admin: super@super.cn / 123456
- Tenant Admin: tenant@tenant.cn / 123456
```

Use a browser to visit the address and log in with the default account.

## Installation Options

The installation script supports the following command-line options:

| Option | Description |
| :--- | :--- |
| `-y, --yes` | Auto mode, assumes "yes" to all prompts |
| `-a, --auto` | Fully auto mode, no prompts, installs all components |
| `-c, --components` | Specify components to install (comma separated: redis,timescaledb,gmqtt,backend,frontend) |
| `-s, --skip` | Specify components to skip (comma separated) |
| `-v, --verbose` | Verbose mode, shows all output even in auto mode |
| `-p, --prebuilt` | Use prebuilt binaries (Default option) |
| `-b, --build` | Build from source (Not recommended on low-performance devices) |
| `-h, --help` | Show help information |

## Component Description

ThingsPanel for Raspberry Pi includes the following core components:

### Redis

Used for caching and message queues, installed in a Docker container.

- Port: 6379
- Password: redis
- Data Directory: `/home/pi/thingspanel/redis/data`

### TimescaleDB

Used for storing time-series data and system configuration, based on PostgreSQL, installed in a Docker container.

- Port: 5432
- Database Name: ThingsPanel
- Username: postgres
- Password: postgresThingsPanel
- Data Directory: `/home/pi/thingspanel/timescaledb/data`

### GMQTT

MQTT Message Broker for device communication, managed by PM2.

- Port: 1883
- Super User: root
- Super User Password: root
- Device Onboarding Service Password: plugin
- Installation Directory: `/home/pi/thingspanel/thingspanel-gmqtt`

### Backend Service

ThingsPanel core logic and API service, managed by PM2.

- Port: 9999
- Installation Directory: `/home/pi/thingspanel/thingspanel-backend-community`
- Log Directory: `/home/pi/thingspanel/thingspanel-backend-community/files/logs`

### Frontend Service

ThingsPanel Web Interface, served via Nginx.

- Port: 80
- Web Directory: `/var/www/html/thingspanel`
- Nginx Config: `/etc/nginx/sites-available/thingspanel`

## Troubleshooting

If you encounter issues during installation or usage, try the following solutions:

### 1. Service Fails to Start

Check status of services:

```bash
# View all Docker containers
docker ps -a

# View PM2 managed processes
pm2 list

# View Nginx status
sudo systemctl status nginx
```

### 2. Web Page Shows 502 Error

This usually means the backend service is not running normally. Try:

```bash
# Restart backend service
pm2 restart backend

# View backend logs
pm2 logs backend
```

### 3. Devices Cannot Connect to MQTT Service

```bash
# Check GMQTT service status
pm2 status gmqtt

# Restart GMQTT service
pm2 restart gmqtt

# View GMQTT logs
pm2 logs gmqtt
```

### 4. Database Connection Issues

```bash
# Check database container status
docker ps | grep timescaledb

# View database logs
docker logs $(docker ps | grep timescaledb | awk '{print $1}')

# Restart database container
docker restart $(docker ps | grep timescaledb | awk '{print $1}')
```

### 5. Restart All Services

If the system functions abnormally, try restarting all services:

```bash
# Restart all PM2 services
pm2 restart all

# Restart Nginx
sudo systemctl restart nginx

# Restart Docker containers
docker restart $(docker ps -q)
```

## FAQ

### Q: "Port already in use" error during installation
A: This means a service is already using the required port. Use `sudo lsof -i:PORT` to find the process and terminate it, or use the `-s` parameter to skip the installation of that component.

### Q: Cannot access Web Interface after installation
A: Please check:
1. Nginx is running: `sudo systemctl status nginx`
2. Backend is running: `pm2 status backend`
3. Firewall config: `sudo ufw status` (ensure port 80 is open)
4. Use correct IP: `hostname -I`

### Q: How to backup data?
A: Main data is stored in TimescaleDB. Use PostgreSQL backup tools:

```bash
# Backup
docker exec $(docker ps | grep timescaledb | awk '{print $1}') pg_dump -U postgres -d ThingsPanel > thingspanel_backup.sql

# Restore
cat thingspanel_backup.sql | docker exec -i $(docker ps | grep timescaledb | awk '{print $1}') psql -U postgres -d ThingsPanel
```

### Q: How to update ThingsPanel?
A: Recommended method is to re-run the installation script:

```bash
./install_thingspanel_rpi.sh -y
```

The script will detect installed components and offer update options.

## More Resources

- [ThingsPanel Official Documentation](https://thingspanel.io)
- [ThingsPanel GitHub Repository](https://github.com/ThingsPanel)

If you have questions or suggestions, please submit an issue on GitHub or join our community discussion.