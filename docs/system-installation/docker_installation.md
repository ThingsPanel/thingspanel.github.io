---
sidebar_position: 2
---

# Docker安装

## Almalinux(centos)安装docker和git 
```
sudo dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo dnf install docker-ce docker-ce-cli containerd.io
sudo systemctl start docker.service
sudo systemctl enable docker.service
sudo docker version
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
dnf install git
```

## 拉取thingsPanel-go-docker 

```
git clone https://github.com/ThingsPanel/thingsPanel-go-docker.git
cd thingsPanel-go-docker
```


## 运行项目 

前台启动项目

 ``` 
 docker-compose -f docker-compose.yml up
 ```

后台启动项目

``` 
docker-compose -f docker-compose.yml up -d
```

停止服务

```
 docker-compose -f docker-compose.yml down
 ```

##  前台访问 
```
- 地址：:8080
- 用户名：admin@thingspanel.cn
- 密码：123456
```