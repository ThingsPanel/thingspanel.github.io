---
sidebar_position: 4
---

# 国际化

## 一、概述
通过 ThingsPanel 对国际化 (i18n) 的支持，你可以 轻松地实现对 ThingsPanel 平台的翻译工作 。
目前支持两种语言，中文和英文。如果这两种语言不满足您的需求，可以定制其他语言。


## 二、开发步骤

### 1、 新建语言文件
语言文件在src/core/config/i18n/文件夹下

![img.png](images/lang_2_1_1.png)

ch.js是中文语言文件，en.js是英文语言文件，其他语种请自定义。  
语言文件的格式如下：
```aidl
export const locale = {
  COMMON: {
    SYSTEMMANAGEMENT:"系统管理",
    SYSTEMSETUP: "系统设置",
    MANAGEMENT:"角色管理",
    PERMISSIONMANAGEMENT: "权限管理",
    PERMISSIONADD: "添加权限",
    
    // ...
  }
}
```
### 2、使用语言文件
打开src/core/services/i18n.service.js文件，将您定义的语言添加到languages中
```aidl
languages: [
    {
      lang: "en",
      name: "English",
      flag: process.env.BASE_URL + "media/svg/flags/226-united-states.svg"
    },
    {
      lang: "ch",
      name: "中文",
      flag: process.env.BASE_URL + "media/svg/flags/034-china.svg"
    },
    {
      // 自定义语言
    }
```
其中lang是文件名，name是项目中语言下拉列表的语种名称，flag是语种图标。

### 3、翻译页面
- Template  
  格式： {{ $t(名称)}}  
  举例：
```aidl
{{ $t("COMMON.SYSTEMMANAGEMENT")}}
```
  

- js  
  格式： this.$t(名称);  
  举例：
```aidl
// vue 2.0
this.$t("COMMON.SYSTEMMANAGEMENT");

// vue 3.0
const self = getCurrentInstance().proxy;
self.$t("COMMON.SYSTEMMANAGEMENT");
```
如果以上方式没有效果，可使用如下方法：

```aidl
import i18n from "@/core/plugins/vue-i18n"

i18n.t('PLUGIN.DEVICE_INFO')
```