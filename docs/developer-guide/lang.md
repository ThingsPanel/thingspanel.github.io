---
sidebar_position: 4
---

# 国际化

## 一、概述
通过 ThingsPanel 对国际化 (i18n) 的支持，你可以 轻松地实现对 ThingsPanel 平台的翻译工作 。
目前支持两种语言，中文和英文。如果这两种语言不满足您的需求，可以定制其他语言。


## 二、开发步骤

### 1、 新建语言文件
语言文件在src\locales文件夹下

![img.png](images/locales1.1.png)

ch.js是中文语言文件，en.js是英文语言文件，其他语种请自定义。  
语言文件的格式如下：
```aidl
const local: App.I18n.Schema = {
  custom,
  default: '',
  title: 'ThingsPanel',
  system: {
    title: 'System Name: {name}',
    screen: '可视化大屏'
  }
  
  }
```
:::tip
所有的key都是大写，多个单词用下划线隔开  
长文本用TEXT1, TEXT2...  
多次复用的组件的KEY可放在COMMON里  
:::

### 2、使用语言文件
如果只翻译中文和英文，可跳过这一节.  
打开src\locales\locale.ts文件，将您定义的语言添加到languages中
```aidl
import zhCN from './langs/zh-cn'
import enUS from './langs/en-us'

const locales: Record<App.I18n.LangType, App.I18n.Schema> = {
  'zh-CN': zhCN,
  'en-US': enUS
}

export default locales

```
其中lang是文件名，name是项目中语言下拉列表的语种名称，flag是语种图标。  
然后您就可以在页面中翻译文本了。

### 3、翻译页面
- Template  
```  
格式： {{ $t(名称)}}  ```
  举例：
```aidl
// 插槽方式
<span class="font-weight-bolder text-dark">
  {{ $t("HOME.QUICK_GUIDE") }}
</span>
```

```aidl
// 传值方式
<el-table-column :label="$t('COMMON.NO')" type="index" width="260"></el-table-column>
```
  

- js  
  格式： this.$t(名称);  
  举例：
```aidl
// vue 2.0
this.$t("PLUGIN.DEVICE_INFO");

// vue 3.0
const self = getCurrentInstance().proxy;
self.$t("PLUGIN.DEVICE_INFO");
```
