---
sidebar_position: 4
---

# 通知服务与插件管理

系统超管负责管理通知插件目录，并为各租户维护服务商账号。租户只能使用分配给自己的服务；服务商密钥由超管管理。

```mermaid
flowchart LR
  Admin[系统超管] --> Catalog[登记并核验插件]
  Catalog --> Account[选择租户并配置服务商账号]
  Account --> Tenant[把服务分配给目标租户]
  Tenant --> Strategy[租户在通知策略中选择服务]
```

## 1. 管理通知插件

1. 使用系统超管账号登录，进入**系统管理 → 通知配置**（`/management/notification`）。
2. 打开通知插件目录，核对插件 ID、版本、支持的渠道与内容模式、配置 schema、送达回执能力和健康状态。
3. 按平台变更流程登记或停用插件。服务端点健康不代表服务商账号或收件目标有效。
4. 将插件授权给指定租户。保存前核对租户范围，确保授权不会让其他租户看到该插件。

## 2. 为租户配置服务商账号

1. 在**系统管理 → 通知配置**（`/management/notification`）打开**服务账号**，并选择目标租户。
2. 为该租户创建或更新服务商账号。服务商凭据由系统超管维护。租户可以查看安全的服务信息并选择服务，不能读取或替换密钥。
3. 只填写插件 schema 要求的字段。凭据只写入，不回显；不要复制到备注、截图或日志。
4. 点击“保存”和“校验”检查配置。这两项操作都不会发送通知；校验通过也不代表未来的收件人一定会收到消息。

![系统超管选择租户并管理服务账号](/img/notification/admin-provider-account-tenant-scope.jpg)

*开发环境截图。图中的 SMTP 实例已停用；图片仅展示按租户配置账号的界面，不代表该账号当前可发送，也不显示密钥。*

通知服务部署包默认包含 SMTP。安装通知服务后，超管仍需为指定租户分配服务并配置邮件账号；系统不会自动创建授权或账号。安装方式见 [SMTP 部署说明](https://github.com/ThingsPanel/thingspanel-notification-smtp#run-the-container-locally)。

## 3. 系统邮件与告警邮件

密码重置等系统邮件在对应的账号操作中发送。告警邮件使用租户的通知策略。请分别配置并检查两种用途，避免误以为设置告警邮件就完成了所有系统邮件配置。

## 4. 正确理解发送结果

`accepted` 表示服务商接受了提交请求，不代表收件人已经收到或读过消息。只有可信的服务商回执才能标记送达；不提供回执的渠道应显示“服务商已受理，未确认送达”。结果未知时不能自动重复发送。

## 5. 确认服务配置可用

1. 登记或查看插件，刷新后确认插件清单内容一致。
2. 选择测试租户，配置服务账号并保存、校验，确认没有发送消息。
3. 确认获授权租户能看到安全的服务信息，其他租户看不到也不能调用。
4. 切换到租户会话，只有明确核对目标和内容后才发送测试；分别检查服务商受理结果与回执。
5. 通过现有账号流程测试密码重置邮件，确认账号邮件能够正常收到。

插件源码与打包方式见[插件开发指南](../../../developer-guide/notification-plugin.md)及其中公开的仓库：[SDK/模板](https://github.com/ThingsPanel/thingspanel-notification-plugin-sdk)、[SMTP](https://github.com/ThingsPanel/thingspanel-notification-smtp)、[钉钉](https://github.com/ThingsPanel/thingspanel-notification-dingtalk)、[阿里云短信](https://github.com/ThingsPanel/thingspanel-notification-aliyun-sms)和[签名 Webhook](https://github.com/ThingsPanel/thingspanel-notification-legacy-webhook)。公开仓库只是源码，不会自动将插件安装或登记到你的平台。
