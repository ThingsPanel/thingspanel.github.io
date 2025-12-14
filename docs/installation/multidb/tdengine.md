---
sidebar_position: 1
---
# TDengine

TDengine is a big data platform designed and optimized for scenarios such as the Internet of Things (IoT) and Industrial Internet. Its core module is a high-performance, cluster open-source, cloud-native, and minimalist time-series database. It can safely and efficiently aggregate, store, analyze, and distribute up to TB or even PB-level data generated daily by massive devices and data collectors, providing real-time monitoring and early warning of business operating status, and offering real-time business insights.

ThingsPanel has achieved integration with TDengine. The specific tutorial is as follows.

# Docker Deployment of TDengine
## Startup Command
```bash
    docker run -tid --name tdengine -v ./taos/dnode/data:/var/lib/taos -v ./taos/dnode/log:/var/log/taos -v ./taos/tmp:/tmp -p 6030:6030 -p 6041-6049:6041-6049 -p 6041-6049:6041-6049/udp tdengine/tdengine:3.3.0.3
```
## Default Username and Password
```
root taosdata
```

## TDengine Database Management Tool
DBeaver

# Compile Binary Service
  ```bash
  CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build .
  ```
# Start Service
    ./thingspanel-TDengine

# Build Image
```bash
    docker build -t thingspanel-tdengine:1.0.0 . 
    ```
    Note: If you need to modify the configuration file content, please rebuild the image after modification. Please fill in the accessible address for the database address in the configuration file.
# Start Image
```bash
    docker run -it --name td -p 50052:50052 thingspanel-tdengine:1.0.0
```

# Repository Address

This device access service is a paid feature of the Enterprise Edition.
```

https://github.com/ThingsPanel/thingspanel-TDengine
```