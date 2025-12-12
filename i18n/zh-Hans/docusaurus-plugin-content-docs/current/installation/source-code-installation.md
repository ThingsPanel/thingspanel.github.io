---
sidebar_position: 3
---
# 源码安装
## 安装流程图

```mermaid
flowchart LR
    classDef default fill:#f0f4f8,stroke:#d0d7de,stroke-width:2px,color:#24292f,rx:8,ry:8
    classDef primary fill:#e8f0fe,stroke:#4a8af4,stroke-width:2px,color:#1a73e8,rx:8,ry:8
    classDef optional fill:#fef1f1,stroke:#d73a49,stroke-width:2px,color:#cb2431,rx:8,ry:8

    A[先决条件] --> B[Docker]
    A --> C[Go 1.22.x]
    A --> D[Redis 6]
    A --> E[TimescaleDB 14]
    
    B & C & D & E --> F[GMQTT 安装]
    F --> G[ThingsPanel 后台]
    G --> H[ThingsPanel 前台]
    
    H --> I[Nginx 配置]
    I --> J[安装完成]
    
    K[可选组件 ]
    K --> L[Modbus 设备接入服务]
    K --> N[大屏]
    
    style A fill:#e8f0fe,stroke:#4a8af4,color:#1a73e8
    style J fill:#e8f0fe,stroke:#4a8af4,color:#1a73e8
    style K fill:#fef1f1,stroke:#d73a49,color:#cb2431
    style L fill:#fef1f1,stroke:#d73a49,color:#cb2431
    style N fill:#fef1f1,stroke:#d73a49,color:#cb2431

```

## 1. 系统环境安装

启动ThingsPanel之前，请先确定已经安装好以下环境:

### 1. Go 1.22.x 
[下载](https://go.dev/dl/) [安装](https://go.dev/doc/install)

:::tip
安装成功后，国内往往要配置代理
:::

```bash
go env -w GO111MODULE=on;go env -w GOPROXY=https://goproxy.cn
```

### 2. Docker

数据库使用docker简化安装步骤，需要安装Docker
[安装docker社区版](https://docs.docker.com/engine/install/)

### 3. Redis 6

支持高版本，支持传统部署 [安装](https://redis.io/docs/getting-started/installation/install-redis-from-source/)

以下为docker部署方式：

**选择1：使用官方镜像（国际网络环境）**
```bash
mkdir -p /home/tp/backend/redis/{data,conf,logs}
docker run --name tp-redis -d \
  --restart always \
  -p 6379:6379 \
  -v /home/tp/backend/redis/data:/data \
  -v /home/tp/backend/redis/conf:/usr/local/etc/redis \
  -v /home/tp/backend/redis/logs:/logs \
  redis redis-server --requirepass redis
```

**选择2：使用国内镜像（推荐国内网络环境使用）**
```bash
mkdir -p /home/tp/backend/redis/{data,conf,logs}
docker run --name tp-redis -d \
  --restart always \
  -p 6379:6379 \
  -v /home/tp/backend/redis/data:/data \
  -v /home/tp/backend/redis/conf:/usr/local/etc/redis \
  -v /home/tp/backend/redis/logs:/logs \
  registry.cn-hangzhou.aliyuncs.com/thingspanel/redis:6.2.7 redis-server --requirepass redis
```

根据您的网络环境选择其中一个命令执行即可完成部署。

### 4. TimescaleDB 14

支持高版本，支持传统部署 [安装](https://docs.timescale.com/install/latest/installation-docker/)

**选择1：使用官方镜像（国际网络环境）**
```bash
mkdir -p /home/tp/data/dir
docker run --name timescaledb -d \
  --restart always \
  -p 5432:5432 \
  -e TZ=Asia/Shanghai \
  -e POSTGRES_DB=ThingsPanel \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgresThingsPanel \
  -v /home/tp/data/dir:/var/lib/postgresql/data \
  timescale/timescaledb:latest-pg14
```

**选择2：使用国内镜像（推荐国内网络环境使用）**
```bash
mkdir -p /home/tp/data/dir
docker run --name timescaledb -d \
  --restart always \
  -p 5432:5432 \
  -e TZ=Asia/Shanghai \
  -e POSTGRES_DB=ThingsPanel \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgresThingsPanel \
  -v /home/tp/data/dir:/var/lib/postgresql/data \
  registry.cn-hangzhou.aliyuncs.com/thingspanel/timescaledb:14
```

根据您的网络环境选择其中一个命令执行即可完成部署。

#### 配置说明

- **数据库名**: ThingsPanel
- **用户名**: postgres
- **密码**: postgresThingsPanel
- **端口**: 5432

> **注意**: 如修改了数据库配置，请相应修改后端配置文件(./configs/conf.yml)

## 2. GMQTT安装

GMQTT是平台接入设备消息的服务，设备消息通过GMQTT进入到平台，平台通过GMQTT发送消息给设备。

1. 进入[GMQTT仓库](https://github.com/ThingsPanel/thingspanel-gmqtt)
2. Star仓库
3. 下载源代码,建议使用git clone下载源代码(未安装git，可直接下载仓库的zip包),注意代码分支,main为最新的开发分支.Tags列对应其他版本.

### 配置文件

```text
./thingspanel-gmqtt/cmd/gmqttd/default_config.yml        --系统配置 
./thingspanel-gmqtt/cmd/gmqttd/thingspanel.yml        --ThingsPanel插件配置
```

./thingspanel-gmqtt/cmd/gmqttd/default_config.yml说明：
```yml
log:
  level: info # 日志级别 debug | info | warn | error
```
./thingspanel-gmqtt/cmd/gmqttd/thingspanel.yml说明：
```yml
db:
  redis:
    # redis 连接字符串
    conn: 127.0.0.1:6379
    # redis 数据库号
    db_num: 1
    # redis 密码
    password: "redis"
  psql:
    psqladdr: "127.0.0.1"
    psqlport: 5432
    psqldb: ThingsPanel
    psqluser: postgres
    psqlpass: postgresThingsPanel
mqtt:
  # root用户的密码
  broker: localhost:1883
  password: "root"
  plugin_password: "plugin"
```

### 直接运行服务（推荐）

这里有三种方式可根据实际需要选择其中一种

#### 直接运行

```sh
$ git clone https://github.com/ThingsPanel/thingspanel-gmqtt.git
$ cd thingspanel-gmqtt/cmd/gmqttd
$ go run . start -c default_config.yml
```

#### pm2托管（推荐）

这里建议使用pm2托管（pm2的安装需要node.js环境，安装pm2的步骤非常简单，可百度自行查找）

1. git clone https://github.com/ThingsPanel/thingspanel-gmqtt.git
2. cd thingspanel-gmqtt/cmd/gmqttd，在这个目录下创建gmqtt.sh
3. 将go run . start -c default_config.yml写入gmqtt.sh
4. chmod 777 gmqtt.sh
5. pm2 start gmqtt.sh即可启动gmqtt（pm2 save后会保存进程状态（运行或停止），在系统重启后会自动恢复到保存状态）

#### Docker方式运行服务

```sh
$ git clone https://github.com/ThingsPanel/thingspanel-gmqtt.git
$ cd thingspanel-gmqtt
$ docker build -t gmqtt .
$ docker run -p 1883:1883 -p 8883:8883 -p 8082:8082 -p 8083:8083  -p 8084:8084  gmqtt
```

## 3. ThingsPanel-Backend-Community安装启动

平台是前后端分离的架构，ThingsPanel-Backend-Community是平台的后端，给前端提供API服务（同时给设备接入服务提供API服务），需要连接GMQTT和数据库（注意修改./configs/conf.yml，与安装数据库时候设置的用户名密码保持一致）。

1. 进入[ThingsPanel-Backend-Community仓库](https://github.com/ThingsPanel/thingspanel-backend-community)
2. Star仓库(以下图片为示例，请进入ThingsPanel-Backend-Community仓库操作)
   ![star](./image/git1.png)
3. 下载源代码,建议使用git clone下载源代码,注意代码分支(未安装git，可直接下载仓库的zip包),main为最新的开发分支.Tags列对应其他版本.(以下图片为示例，请进入ThingsPanel-Backend-Community仓库操作)
   ![下载](./image/git2.png)

### 相关目录文件说明

```text
./configs/conf.yml                  --系统配置 
./files/logs/                    --系统日志存放目录
./sql/                         --数据库初始化脚本目录(系统启动时会自动检查脚本进行初始化)
```

1. ./configs/conf.yml配置说明

```yml
# 如需在系统变量中设置配置项，可使用GOTP_开头的变量名，如：GOTP_DB_PSQL_DBTYPE为db.psql.dbType

service:
  http: 
    host: 0.0.0.0 # 默认localhost
    port: # 默认9999

log:
  # 0-控制台输出 1-文件输出 2-文件和控制台输出
  adapter_type: 0
  # 文件最多保存多少天
  maxdays: 7
  # 日志级别 (panic fatal error warn info debug trace)
  level: debug # 默认info
  # 每个文件保存的最大行数
  maxlines: 10000

jwt:
  key: 1hj5b0sp9



db:
  psql:
    host: 127.0.0.1 # 默认localhost
    port: 5432 # 默认5432
    dbname: ThingsPanel #数据库名
    username: postgres #数据库用户名
    password: postgresThingsPanel #数据库密码
    time_zone: Asia/Shanghai # 默认Asia/Shanghai

    idle_conns: 5 # 空闲连接池中的最大连接数，建议为open_conns的百分之5-20之间
    open_conns: 50 # 最大打开连接数,timescaledb默认为100,考虑到其他服务也会使用数据库，建议这里设置为50
    # SQL日志级别 (1-静音 2-错误 3-警告 4-信息)
    log_level: 4 # 默认1
    # 慢SQL阈值（毫秒）。慢SQL会在sqlloglevel大于等于3时输出。
    slow_threshold: 200 # 默认200毫秒

  redis:
    addr: 127.0.0.1:6379 # 默认localhost:6379
    db: 1 # 默认0
    password: "redis"

grpc:
  tptodb_server: 127.0.0.1:50052
  tptodb_type: NONE

# mqtt服务：gmqtt、vernemq
mqtt_server: gmqtt

mqtt:
  access_address: 47.92.253.145:1883
  broker: 127.0.0.1:1883 # 默认localhost:1883
  user: root # 默认root
  pass: root # 默认root
  channel_buffer_size: 10000 # 默认10000
  write_workers: 1 # 消息队列入库线程数，默认10
  #消息服务质量 0：消息最多传递一次，如果当时客户端不可用，则会丢失该消息。1：消息传递至少 1 次。2：消息仅传送一次。
  # 以下主题都为默认主题
  telemetry: #遥测相关
    # devices/telemetry/control/{device_number}
    # 如果发给设备接入服务，则是devices/telemetry/control/{device_id}
    publish_topic: devices/telemetry/control/  #平台发布遥测主题
    subscribe_topic: devices/telemetry   #平台订阅遥测主题
    gateway_subscribe_topic: gateway/telemetry #平台订阅网关遥测主题
    #gateway/telemetry/{device_number}/+
    gateway_publish_topic: gateway/telemetry/control/%s  #平台发布网关遥测主题
    pool_size: 10 # 消息处理线程池，默认100
    batch_size: 100 # 默认100 最大一次批量写入数据库的数据量
    qos: 0
  attributes: #属性相关
    # 订阅属性：+位置是{message_id} 
    subscribe_topic: devices/attributes/+
    # 发布接收属性响应：devices/attributes/response/{device_number}/{message_id}
    publish_response_topic: devices/attributes/response/
    # 发布设置属性请求：devices/attributes/set/{device_number}/{message_id}
    publish_topic: devices/attributes/set/
    # 订阅设置属性响应：+位置是{message_id} 
    subscribe_response_topic: devices/attributes/set/response/+
    # 发布获取属性请求：devices/attributes/get/{device_number}
    publish_get_topic: devices/attributes/get/
  
    # 设备属性上报 gateway/attributes/{message_id}
    gateway_subscribe_topic: gateway/attributes/+
    # 订阅平台收到属性的响应  gateway/attributes/response/{device_number}/+
    gateway_publish_response_topic: gateway/attributes/response/%s/%s
    # 平台设置设备属性 gateway/attributes/set/{device_number}/+
    gateway_publish_topic: gateway/attributes/set/%s/%s
    # 平台设置属性 设备响应 gateway/attributes/set/response/{message_id}
    gateway_subscribe_response_topic: gateway/attributes/set/response/+
    # 平台下发请求获取属性 gateway/attributes/get/{device_number}
    gateway_publish_get_topic: gateway/attributes/get/%s

    qos: 1
  commands: #命令相关
    # devices/command/{device_number}/{message_id}
    publish_topic: devices/command/
    subscribe_topic: devices/command/response/+
    # 设备接受命令回应 gateway/command/response/{message_id}
    gateway_subscribe_topic: gateway/command/response/+
    # 下发命令 gateway/command/{device_number}/+
    gateway_publish_topic: gateway/command/%s/%s
    # 测试
    # gateway_publish_topic: devices/command/%s/%s
    qos: 1
  events: #事件相关
    # 订阅事件：+位置是message_id
    subscribe_topic: devices/event/+
    # 发布事件响应：devices/event/response/{device_number}/{message_id}
    publish_topic: devices/event/response/

    # 设备上报事件 gateway/event/{message_id}
    gateway_subscribe_topic: gateway/event/+
    # 平台接受到事件响应 gateway/event/response/{device_number}/+
    gateway_publish_topic: gateway/event/response/%s/%s

    qos: 1
  ota: #OTA升级相关
    # ota升级包消息推送：ota/devices/infrom/{device_number}
    publish_topic: ota/devices/infrom/
    subscribe_topic: ota/devices/progress
    qos: 1



mqtts:
  broker: 127.0.0.1:8883
  user: root
  pass: root
  caPath : ./conf/certificate/ca.crt
  crtPath: ./conf/certificate/client.crt
  keyPath : ./conf/certificate/client.key

automation_task_confg:
  once_task_limit: 100
  periodic_task_limit: 100

ota:
 # 推送到设备端的ota升级包下载地址，
  download_address: http://demo.thingspanel.cn 

```

### 运行

GMQTT、redis、TimescaleDB首先启动，再启动thingspanel-backend-community：

```sh
$ git clone https://github.com/ThingsPanel/thingspanel-backend-community.git
$ cd thingspanel-backend-community
$ go run . 
```

## 4. ThingsPanel-Frontend-Community安装打包

### 直接下载最新Dist压缩包

打开前端仓库https://github.com/ThingsPanel/thingspanel-frontend-community页面，进入release页面，下载标签为latest的dist压缩包

### 安装Node.js 20.11.0（如果要在服务器打包前端需要安装node.js）

[安装node.js](https://nodejs.org/download/release/)

1. 点击上面链接进入下载页
2. 往下翻找到 `以往的版本`
3. 例如找到20.11.0点下载然后选node-v20.11.0-linux-x64.tar.xz,执行命令下载

```
  wget https://nodejs.org/download/release/v20.11.0/node-v20.11.0-linux-x64.tar.xz
```

4. 获取到压缩包后，[node.js二进制安装](https://github.com/nodejs/help/wiki/Installation)

### 前端源码打包

1. 下载源码(未安装git，可直接下载仓库的zip包)

```bash
  git clone https://github.com/ThingsPanel/thingspanel-frontend-community.git
```

2. 安装依赖

```bash
  npm install -g pnpm
  pnpm install
```
**注意：** 如果遇到错误 `npm ERR! Unsupported URL Type "workspace:": workspace:*`，可能是因为你使用了 `npm install` 来安装依赖，npm不支持 workspace 特性故而报错，请安装 pnpm 并使用 pnpm 来安装包。

3. 打包生成dist文件

```bash
  pnpm build
```
## 5. 可选：安装Modbus-protocol-plugin

Modbus-protocol-plugin是平台的设备接入服务，MODBUS协议的设备对接设备接入服务，设备接入服务将数据转发到GMQTT进入平台。

1. 进入[modbus-protocol-plugin仓库](https://github.com/ThingsPanel/modbus-protocol-plugin)
2. Star仓库
3. 下载源代码,建议使用git clone下载源代码(未安装git，可直接下载仓库的zip包),注意代码分支,main为最新的开发分支.Tags列对应其他版本.

### 配置文件

```text
./config.yaml        --配置文件
```

./config.yaml说明

```yaml
server:
  address: 0.0.0.0:502 # 设备接入地址
mqtt:
  broker: 127.0.0.1:1883 # gmqtt服务端地址
  username: root
  password: root
  topic_to_publish: device/attributes # 发送主题
  topic_to_subscribe: plugin/modbus/# # 订阅主题
  subscribe_pool: 100 # 客户端订阅处理并发数量
http_server:
  address: 0.0.0.0:503 # 设备接入服务http服务地址
thingspanel:
  address: 127.0.0.1:9999 # ThingsPanel平台地址
```

### 运行

```sh
$ git clone https://github.com/ThingsPanel/modbus-protocol-plugin.git
$ cd modbus-protocol-plugin
$ go run . start
```

## 6. 可选：Visual-editor可视化安装打包(社区版不支持)

### 安装Pnpm

1. 在以上node.js安装好的前提下，执行命令安装pnpm

```
npm i -g pnpm
```

### 可视化源码打包

1. 下载源码(未安装git，可直接下载仓库的zip包)

```bash
https://github.com/ThingsPanel/visual-editor.git
```

2. 安装依赖

```bash
npm install
```

3. 打包生成dist

```bash
pnpm run build
```



## 7. 可选：安装Rule-engine规则引擎

请参考https://github.com/ThingsPanel/rule-engine 的readme安装



## 8. 安装Nginx

```sh
yum install nginx
```

### Nginx配置

安装完成后，进入/etc/nginx/conf.d目录下新建文件tp.conf，将下面内容复制进去,然后将前端**打包好的dist内的文件**复制到/usr/share/nginx/html，(推荐把/usr/share/nginx/html换成dist路径)；将打包好的可视化dist文件放到/usr/share/nginx/visual-editor/dist与一下配置一致；

**注意如果访问有权限问题，修改nginx.conf配置**

**注意修改成自己的配置**

```conf
server {
    listen 8080;
    server_name 192.168.1.1 ; # 公网ip(局域网ip限于局域网内访问)或域名
    charset utf-8;
    client_max_body_size 10m;
    root /home/dev/dist;
  
    gzip on;
    # 设置最小的文件大小为1KB，小于1KB的文件不会被压缩。
    gzip_min_length 1k;
    # 设置Gzip压缩级别为4。压缩级别从1到9，1是最低的压缩级别但是最快的压缩速度，9是最高的压缩级别但是最慢的压缩速度，压缩会消耗cpu资源。
    gzip_comp_level 6;
    # 可以被压缩的类型
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    # 在HTTP响应头部中添加Vary: Accept-Encoding头部字段。
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";

    location /api {
        # 设置HTTP头部字段，默认是1.0，ws必须设置http版本为1.1.
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        # 设置字段为客户端的IP地址
        proxy_set_header X-real-ip $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # 反向代理到
        proxy_pass  http://127.0.0.1:9999;
    }
    location /ws {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header X-real-ip $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass  http://127.0.0.1:9999;
    }
    location /files {
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header X-real-ip $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass  http://127.0.0.1:9999;
        # 设置CORS头部字段
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
    }
  
    # 可视化部分
    location /visual {
        alias /home/visual-editor/dist;
        index index.html index.htm;
        try_files $uri $uri/ /visual/index.html;
    }
  
    location / {
        index index.html index.htm;
	try_files $uri $uri/ /index.html;
    }
}

```

### 重启Nginx

```sh
nginx -t
nginx -s reload
```

:::info

## 9. 完成安装

- **登录**

  - 打开浏览器，输入**服务器ip:8080**
  - 系统管理员 super@super.cn / 123456
  - 租户管理员 tenant@tenant.cn / 123456
  
安装手册若有没帮助到您的地方，请联系我们。`QQ群1：260150504（满） QQ群2:371794256`

:::

:::info

其他信息请查阅[`代码库`](../introduction/code_repository)的README安装步骤。

:::
