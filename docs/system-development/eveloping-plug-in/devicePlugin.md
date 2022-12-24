---
sidebar_position: 1
---

# 设备插件图表开发

## 一、概述
设备插件图表开发

## 二、开发步骤
### 1. 目录结构
        ├── packages                       -- 组件包  
        │   ├── device_plugin              -- 设备插件  
        │   │   ├── editor                 -- 编辑器  
        │   │   │   │   ├── index.vue          -- 主页面  
        │   │   │   │   ├── Information.vue    -- 插件信息  
        │   │   │   │   ├── TSL.vue            -- 物模型  
        │   │   │   │   ├── Chart              -- 绑定图表  
        │   │   │   │   └── Publish            -- 发布  
        │   │   ├── charts                 -- 图表  
        │   │   │   ├── panel              -- 图表面板  
        │   │   │   │   ├── control        -- 控制组件面板  
        │   │   │   │   ├── dashboard      -- 仪表盘面板  
        │   │   │   │   ├── history        -- 历史数据面板  
        │   │   │   │   ├── other          -- 其他组件面板  
        │   │   │   │   ├── report         -- 报表组件面板  
        │   │   │   │   └── video          -- 视频组件面板  
        │   │   │   ├── components         -- 组件  
        │   │   │   │   ├── control        -- 控制组件  
        │   │   │   │   ├── dashboard      -- 仪表盘  
        │   │   │   │   └── video          -- 视频组件  
        └────────────── options            --  
                        └── options.json   -- 组件JSON数据

### 2. 在options.json中添加图表数据  
假设要编写一个摄像头设备的图表，摄像头的分类在video，那么就在options.json的video属性里添加一个对象,该对象描述了摄像头图表的信息
```aidl
{
      "controlType": "video",
      "index": 2,
      "type": "camera",
      "title": "摄像头",
      "series": [],
      // 其他自定义属性，如src，url等等，根据要开发的组件的特性决定
    }
```

### 3. 编写组件
在device_plugin/charts/components/video目录创建摄像头组件，并编写代码。
```aidl
<template>

</template>

<script>
export default {
  name: "CommonCamera"
}
</script>

<style scoped>

</style>
```
### 4. 在video面板的v-for中添加摄像头组件
在device_plugin/charts/panel/video/index.vue中的v-for添加摄像头组件，当option的type为camera时显示第3步创建的摄像头组件，别忘了引入。
```aidl
<common-camera v-if="option.type == 'camera'" :ref="'video_' + option.index" :option="option" @submit="handleSubmit"></common-camera>
```

### 5. 在设备监控中添加摄像头组件
src/view/pages/device-watch/device-detail/PluginCharts.vue

