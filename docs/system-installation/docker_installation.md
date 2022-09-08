---
sidebar_position: 2
---

# Docker安装

## linux环境准备

:::tip

windows环境下请安装`Docker Desktop`和`git`。

:::

- **安装docker**

    ```bash showLineNumbers
    dnf config-manager --add-repo <https://download.docker.com/linux/centos/docker-ce.repo>
    dnf install docker-ce docker-ce-cli containerd.io
    systemctl start docker.service
    systemctl enable docker.service
    ```

- **安装docker-compose**

    ```bash showLineNumbers
    curl -L "<https://github.com/docker/compose/releases/download/v2.9.0/docker-compose>-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    chmod +x /usr/local/bin/docker-compose
    ```

- **如没有安装git**

    ```bash
    dnf install git -y
    ```

## 开始安装

- **拉取项目**

    ```bash showLineNumbers
    # 拉取docker配置
    git clone https://github.com/ThingsPanel/thingsPanel-go-docker.git
    cd thingsPanel-go-docker
    ```

- **运行项目**

    > 在`thingsPanel-go-docker`目录下(win需要打开`cmd` 窗口)

    ```bash showLineNumbers
    # 以日志显示前台方式启动项目(默认账户和密码 super@super.cn 123456)(默认端口8080)
    docker-compose -f docker-compose.yml up
    # 或者以隐藏日志显示的方式启动项目
    docker-compose -f docker-compose.yml up -d
    # 停止服务
    docker-compose -f docker-compose.yml down
    ```

## 挂载说明

- **查看挂载的卷(后面非./开头的目录为卷)**

    ```bash
    docker volume ls
    docker volume inspect xxx
    thingspanel-go #后端
    thingspanel-html #前端
    thingspanel-postgres #数据库
    ```

- **系统日志**

    ```bash
    ./init_files/backend/logs/
    ```

- **插件目录**
    > 无需重启容器

    ```bash
    thingspanel-go/extensions/
    ```

- **后端代码目录**
    > 可在此处更新和编译代码，编译后重启后端容器

    ```bash
    thingspanel-go
    ```

- **前端代码目录**
    > 可将vue打包好的文件放在此处，重启前端容器

    ```bash
    thingspanel-html
    ```

## 查看容器运行日志

```bash showLineNumbers
docker logs -f containerID
或
./init_files/files/log/
```

## 注意事项

端口：

```bash showLineNumbers
8080（前端服务端口）
9998（tcp端口）
9999（API端口）
1883（mqtt端口）
5432（postogresql端口）
6379（redis端口）
```

mqtt订阅主题：thingspanel.telemetry  
mqtt默认账号：guest  
mqtt默认密码：guest  

:::tip 测试案例

温湿度数据推送：{"token":"123456","type":"ep","values":{"temp":23.0,"hum":13}}  
`注意数字和字符串的区分`

:::
