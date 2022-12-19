---
sidebar_position: 1
---

# 设备插件接口API

## 一、概述
设备接入时需要映射每个设备的属性，这是一项极其繁琐的工作，我们通过绑定设备插件可以实现一次映射该设备的所有属性，
同时,在设备插件中还提供了绑定图表的功能，用户无需再重复添加图表，绑定数据源的操作。

[`插件编辑器`](../../operation-manual/plugin-managment/device_plugin.md)

### 应用场景
- 设备接入
- 可视化

## 二、接口说明

### 1. 插件列表查询  
```/api/device/model/list```

- 参数：
```aidl
{
    "current_page": 1,
    "per_page": 10
}
```

:::info 参数说明
- **current_page**:  当前页页数
- **per_page**:  每页显示的数据的条数,最大值为9999
:::

- 返回值：
```aidl
{
    "code": 200,
    "message": "success",
    "data": {
        "current_page": 1,
        "per_page": 10,
        "data": [
            {
                "id": "3ae6fced-eab9-3a2a-94c0-9b6b0c8da8f1",
                "model_name": "温度测试",
                "flag": 0,
                "chart_data": "{\"info\":{\"pluginName\":\"温度测试\",\"pluginCategory\":\"1\"},\"tsl\":{\"properties\":[{\"dataType\":\"float\",\"dataRange\":\"0-999\",\"stepLength\":0.1,\"unit\":\"°C\",\"title\":\"温度\",\"name\":\"temprature\"}],\"option\":{\"classify\":\"custom\"}},\"chart\":[{\"series\":[{\"type\":\"gauge\",\"startAngle\":200,\"endAngle\":-20,\"title\":{\"color\":\"#FFFFFF\"},\"itemStyle\":{\"color\":\"#FFFFFF\"},\"progress\":{\"show\":false,\"width\":0},\"pointer\":{\"show\":false},\"splitLine\":{\"show\":false},\"axisTick\":{\"show\":false},\"axisLabel\":{\"show\":false},\"axisLine\":{\"show\":false},\"detail\":{\"show\":true,\"fontSize\":50,\"offsetCenter\":[0,\"-15%\"],\"formatter\":\"{value}\",\"color\":\"#FFFFFF\"},\"data\":[{\"value\":0,\"name\":\"温度A\"}]}],\"simulator\":{\"funcArr\":[\"return +(Math.random() * 60).toFixed(2);\"],\"interval\":5000},\"name\":\"温度\",\"mapping\":[\"temprature\"],\"controlType\":\"dashboard\",\"id\":\"ougUMfMDtSuq\"}],\"publish\":{\"isPub\":false}}",
                "model_type": "1",
                "sort": 0,
                "issued": 0,
                "created_at": 1666268095
            },
            {
                ...
            }
        ],
        "total": 29
    }
}
```

:::info 返回值说明
- **id**:  插件id  
- **model_name**:  插件名称  
- **chart_data**:  json字符串（包含插件信息，分类，物模型，绑定的图表）  
- **model_type**:  插件类型id  
:::


### 2. 通过插件id查询指定插件  
```/api/device/model/list```
- 参数：
```aidl
{
    "current_page": 1,
    "per_page": 10,
    "id": "5d85fc5c-be0b-8db9-676e-f5a01111dc63"
}
```

:::info 参数说明
- **id**: 插件id
:::

- 返回值：  
和插件列表查询接口的返回值一样

### 3. 设备绑定插件  
```/api/device/update_only```

- 参数：
```aidl
{
    "id": "3f3b4661-70ee-e875-8af7-985c437f8387",
    "type": "5d85fc5c-be0b-8db9-676e-f5a01111dc63"
}
```

:::info 参数说明
**id**： 设备id  
**type**：插件id
:::

### 4. 通过设备id获取插件id    
```/api/device/data```

- 参数：
```aidl
{
    "id": "97ca9d72-8530-6545-ac05-a66a64b29e08"
}
```
:::info 参数说明
**id**： 设备id  
:::

- 返回值
```aidl
{
    "code": 200,
    "message": "success",
    "data": {
        "id": "97ca9d72-8530-6545-ac05-a66a64b29e08",     // 设备id
        "asset_id": "d12f590d-a971-07e6-0677-7df83745e304",    // 设备分组id
        "token": "b4cab51d-e291-cac9-9c1d-1c082960974f",
        "customer_id": "",
        "type": "3ae6fced-eab9-3a2a-94c0-9b6b0c8da8f1",    // 插件id
        "name": "温度",
        "chart_option": "{}",
        "protocol": "mqtt",
        "device_type": "1",    // 设备类型  1：单设备， 2：网关， 3：子设备
        "protocol_config": "{}",
        "script_id": ""
    }
}
```
:::info 返回值说明
**id**： 设备id  
**type**： 插件id  
:::

### 插件JSON字符串分析：
通过插件列表接口```/api/device/model/list```获取到插件的JSON字符串，转换为JSON对象后的示例如下：
```aidl
{
    "info": {      // 插件信息
        "pluginName": "温湿度插件",    // 插件名称
        "pluginCategory": "1"     // 插件分类
    },
    "tsl": {      // 物模型
        "properties": [     // 属性
            {
                "dataType": "float",      // 属性类型
                "dataRange": "0 - 99",       // 取值范围
                "stepLength": "0.1",          // 步长
                "unit": "°C",                // 单位
                "title": "温度",           // 名称
                "name": "temp"          // 标识（重要 用来绑定图表）
            }
,
            // ...            
        ],
        "option": {        // 选项
            "classify": "custom"    // standard：标准物模型  custom：自定义物模性
        }
    },
    "chart": [           // 已绑定的图表列表
        {
            "series": [    // echarts图表里的series
                {
                    // ...
                },
                // ...
            ],
            "mapping": [    // 图表绑定的物模型属性的标识，单表盘绑定一个属性，双表盘绑定两个属性
                "temp"
            ],
            "name": "开关",   // 绑定的图表的名称
            "controlType": "dashboard",    // 绑定的图表的类型, dashboard: 仪表盘， history: 历史数据（折线图）， control： 开关组件
            "id": "O4G18sBwa3t1"    // 绑定的图表的id
        }
    ],
    "publish": {
        "isPub": false
    }
}
```

## 三、开发步骤
- 1、设备绑定插件
- 2、通过设备id获取插件id
- 3、通过插件id获取插件
- 4、解析插件的JSON字符串，图表就在chart数组里，通过mapping绑定了属性