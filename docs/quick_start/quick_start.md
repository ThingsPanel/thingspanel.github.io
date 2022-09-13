---
sidebar_position: 1
---

# 快速开始

本章节将指导您从下载安装开始，快速搭建ThingsPanel。

## 安装ThingsPanel

### 通过Docker容器运行

通过容器化部署是搭建ThingsPanel的最快方式。

```bash title="获取docker-compose源码:" showLineNumbers
git clone https://github.com/ThingsPanel/thingsPanel-go-docker.git
```

```bash title="进入目录并启动服务:" showLineNumbers
cd thingsPanel-go-docker
docker-compose -f docker-compose.yml up
```

```text
输入网址:服务器ip:8080
输入账户:super@super.cn
输入密码:123456
```

:::info

更详细的`步骤`请参考[`Docker安装`](./system-installation/docker_installation)。

:::
