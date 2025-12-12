---
sidebar_position: 8
---

# System Upgrade Guide

## Version Compatibility

:::caution Important
Direct upgrade from ThingsPanel v0.5.4 to v1.0.0 is **NOT** supported. A fresh deployment is required.
:::

## Docker Deployment Upgrade Guide

### Pre-upgrade Preparation

1.  **Data Backup**
    *   Backup Database
    *   Backup Configuration Files
    *   Backup Custom Plugins and Extensions

2.  **Environment Check**
    *   Confirm sufficient system resources
    *   Verify storage space
    *   Check status of existing services

### Upgrade Methods

You can choose one of the following two upgrade methods:

*   **Partial Container Upgrade** (Update specific services only)
*   **Full System Upgrade** (Update all components)

### Partial Container Upgrade Process

#### 1. Container and Volume Mapping

```bash
Frontend Service: thingspanel-vue:nginx
MQTT Service: thingspanel-gmqtt:gmqtt
Backend Service: thingspanel-go:go
```

#### 2. Upgrade Steps

1.  Update Source Code

    ```bash
    cd thingspanel-docker
    git pull
    ```

2.  Stop and Clean Target Containers

    ```bash
    # Stop container
    docker stop <ContainerID>

    # Remove container
    docker rm <ContainerID>

    # Remove image
    docker rmi <ImageID>
    ```

3.  Clean Volumes

    ```bash
    # Prune unused volumes
    docker volume prune

    # List existing volumes
    docker volume ls

    # Remove specific volumes (if needed)
    docker volume rm thingspanel-docker_nginx
    docker volume rm thingspanel-docker_gmqtt
    docker volume rm thingspanel-docker_go
    ```

4.  Redeploy Services

    ```bash
    docker-compose -f docker-compose.yml up
    ```

:::tip
If the new version uses the same image tag, ensure you delete the local image and pull again to get the latest build.
:::

### Full System Upgrade Process

1.  **Preparation**
    *   Compare the new and old `docker-compose.yml` files to confirm services needing updates.
    *   Update source code to the target version.

    ```bash
    git pull
    ```

2.  **Stop Existing Services**

    ```bash
    docker-compose down
    ```

3.  **Start New Version**

    ```bash
    docker-compose -f docker-compose.yml up -d
    ```

### Configuration Updates

To modify configurations in volumes:

1.  Find Volume Location

    ```bash
    # List all volumes
    docker volume ls

    # Inspect specific volume
    docker volume inspect <VolumeName>
    ```

2.  Modify Configuration
    *   Directly edit the config files in the volume directory.
    *   Note: Applications generally prioritize configurations from Environment Variables.

:::info Precautions

1.  Always backup important data before upgrading.
2.  It is recommended to test the upgrade in a staging environment first.
3.  Preserve custom configurations during the upgrade.
4.  Rollback to the backup version if issues occur.
:::

## Source Code Deployment Upgrade

For source code deployment environments:

1.  Update Source Code

    ```bash
    git pull origin <target-version>
    ```

2.  Recompile

3.  Restart Services
