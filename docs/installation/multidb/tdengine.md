---
sidebar_position: 1
---
# TDengine

TDengine 是一款专为物联网、工业互联网等场景设计并优化的大数据平台，其核心模块是高性能、集群开源、云原生、极简的时序数据库。它能安全高效地将大量设备、数据采集器每天产生的高达 TB 甚至 PB 级的数据进行汇聚、存储、分析和分发，对业务运行状态进行实时监测、预警，提供实时的商业洞察。

ThingsPanel已经实现了与TDengine的整合，如下为具体教程。

# Docker部署TDengine
## 启动命令
```
    docker run -tid --name tdengine -v ./taos/dnode/data:/var/lib/taos -v ./taos/dnode/log:/var/log/taos -v ./taos/tmp:/tmp -p 6030:6030 -p 6041-6049:6041-6049 -p 6041-6049:6041-6049/udp tdengine/tdengine:3.3.0.3
```
## 默认用户名密码
```
root taosdata
```

## TDengine数据库管理工具
DBevaer

# 编译二进制服务
  ```  
  CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build .
  ```
# 启动服务
    ./thingspanel-TDengine

# Build镜像
```
    docker build -t thingspanel-tdengine:1.0.0 . 
    ```
    注意：如果需要修改配置文件内容，请修改后重新build镜像，配置文件中的数据库地址请填写能访问的地址
# 启动镜像
```
    docker run -it --name td -p 50052:50052 thingspanel-tdengine:1.0.0
```

# 仓库地址

该设备接入服务为企业版收费功能。
```

https://github.com/ThingsPanel/thingspanel-TDengine
```