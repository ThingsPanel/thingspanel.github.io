---
sidebar_position: 7
---

# 性能优化

性能优化调整。

## 数据库调优

:::tip

可参考以下方式，具体情况还需根据测试来调整。

:::

根据[**`在线工具`**](https://pgtune.leopard.in.ua/)填写自己的硬件参数生成参考配置。
![推送参数](image/optimization-1.jpeg)

## 应用调优

* 提高系统日志级别，在后端`./conf/app.conf`，重启系统
