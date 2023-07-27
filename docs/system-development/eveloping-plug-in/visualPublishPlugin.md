---
sidebar_position: 7
---

# 可视化插件发布

ThingsPanel的可视化编辑器支持用户自定义插件，用户在本地开发完插件后，可发布到官方插件市场供所有人使用。本文介绍了如何发布自定义插件到插件市场。

#### 什么是可视化插件
可视化插件由多个vue组件组成，最终发布时会自动打包成一个js文件存储到ThingsPanel插件市场中，此时所有登录插件市场的可视化用户都可以一键安装您发布的插件到本地服务器。

## 一、插件开发
下载visual-editor项目: https://github.com/ThingsPanel/visual-editor  

点这里[开发自己的第一个插件](./visualPlugin.md)


## 二、插件发布
插件开发完成后，就可以进行发布了。

### 1、全局安装cli  
打开cmd，输入如下命令安装@thingspanel/cli
```
npm install @thingspanel/cli -g
```
### 2、本地启动visual-editor项目
```
pnpm run dev
```

### 3、登录插件市场
在可视化编辑器的右上角点击插件市场，在弹出的登录界面填入插件市场的账号密码  
![](images\visual_publish_plugin_2_3_1.png)

如果没有账号，在这里[注册](http://r.thingspanel.cn/login?register=true)


### 4、创建插件
- 登录成功后，点击发布插件 -> 创建插件，填写插件信息，得到Secret
![Alt text](images\visual_publish_plugin_2_4_1.png)

- 然后点击创建插件
![Alt text](images\visual_publish_plugin_2_4_2.png)

- 在创建插件的界面填入插件的信息。  
![Alt text](images\visual_publish_plugin_2_4_3.png)

- 点击确定后，插件列表就会新增一条插件信息。
![Alt text](images\visual_publish_plugin_2_4_4.png)


### 5、配置config.json
点击查看Secret，复制Secret。
![Alt text](images\visual_publish_plugin_2_4_5.png)

回到代码编辑器中，在自定义插件目录test-plugin下新建config.json文件，配置插件的名称、版本、密钥。
```
{
    "name": "myplugin",
    "version": "0.1.1",
    "secret": "3e8dba83bee8b8680e943ff86afe8b82"
}
```
- 这里的名称myplugin就是第4步创建插件时填写的插件名称
![Alt text](images\visual_publish_plugin_2_5_1.png)
- 版本由开发者自己定义
- 密钥就是刚才获取的secret


### 6、构建并上传插件
在命令行模式下进入可视化项目根目录，输入如下命令
```
tp-pack -r ./ -i ./src/plugins/test-plugin
```
![Alt text](images\visual_publish_plugin_2_6_1.png)

若提示如下信息，则上传成功。

![Alt text](images\visual_publish_plugin_2_6_2.png)

### 7、提交审核
本地启动可视化`pnpm run dev`  
再次打开插件市场，点击发布插件，点开插件列表，可以看到我们刚上传的插件。
![Alt text](images\visual_publish_plugin_2_7_1.png)

点击***提交审核***，等待管理员审核。  
审核通过后，您的插件就可以供所有人下载使用了。

![Alt text](images\visual_publish_plugin_2_7_2.png)
