---
sidebar_position: 7
---

# OPC-UA接入

## 什么是OPC UA

OPC UA的全名是OPC Unified Architecture（OPC统一架构）。是OPC基金会应用在自动化技术的机器对机器网络传输协议。

OPC UA支援两种通讯协定，这两种通讯协定的差异只有URL的不同，二进制通讯协定是opc.tcp://Server，而Web服务的通讯协定是http://Server，其他情形下，OPC UA对应用程序接口的作业完全透明，其他作业不受OPC UA的影响。

二进制通讯协定的效率最高，其overhead也最少，让需要的资源最小化（不需要XML解析器、SOAP及HTTP，对嵌入式系统格外重要），提供最佳的互操控性（在实现时，二进制通讯协定提供较少的自由度），使用任意选取的TCP通道，可以较容易的进行隧道协议，也可以从透过防火墙开启。

Web服务（SOAP）通讯协定可以支援许多不同的工具（包括Java环境或是.NET环境的工具），使用标准HTTP(S)埠，可以和防火墙共同使用。

所有的实现方式都支援二进制通讯协定，但只有用.NET实现的设备才支援SOAP。

## 通过规则引擎的方式

ThingsPanel对接opc-ua设备【通过规则引擎】  
https://www.bilibili.com/video/BV1G14y1a7iN/?spm_id_from=333.999.0.0

## 通过OPC-UA协议插件

此插件为企业版功能，如有需求，请联系我们。