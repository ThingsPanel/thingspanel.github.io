"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6081],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(t),v=o,m=u["".concat(p,".").concat(v)]||u[v]||d[v]||i;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=v;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a[u]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},8810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:1},l="\u8bbe\u5907\u63d2\u4ef6\u56fe\u8868\u5f00\u53d1",a={unversionedId:"system-development/eveloping-plug-in/devicePlugin",id:"system-development/eveloping-plug-in/devicePlugin",title:"\u8bbe\u5907\u63d2\u4ef6\u56fe\u8868\u5f00\u53d1",description:"\u4e00\u3001\u6982\u8ff0",source:"@site/docs/system-development/eveloping-plug-in/devicePlugin.md",sourceDirName:"system-development/eveloping-plug-in",slug:"/system-development/eveloping-plug-in/devicePlugin",permalink:"/zh-Hans/docs/system-development/eveloping-plug-in/devicePlugin",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-development/eveloping-plug-in/devicePlugin.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u63d2\u4ef6",permalink:"/zh-Hans/docs/category/\u5f00\u53d1\u63d2\u4ef6"},next:{title:"\u8bbe\u5907\u63d2\u4ef6\u63a5\u53e3API",permalink:"/zh-Hans/docs/system-development/eveloping-plug-in/devicePluginApi"}},p={},s=[{value:"\u4e00\u3001\u6982\u8ff0",id:"\u4e00\u6982\u8ff0",level:2},{value:"\u4e8c\u3001\u5f00\u53d1\u6b65\u9aa4",id:"\u4e8c\u5f00\u53d1\u6b65\u9aa4",level:2},{value:"1. \u76ee\u5f55\u7ed3\u6784",id:"1-\u76ee\u5f55\u7ed3\u6784",level:3},{value:"2. \u5728options.json\u4e2d\u6dfb\u52a0\u56fe\u8868\u6570\u636e",id:"2-\u5728optionsjson\u4e2d\u6dfb\u52a0\u56fe\u8868\u6570\u636e",level:3},{value:"3. \u7f16\u5199\u7ec4\u4ef6",id:"3-\u7f16\u5199\u7ec4\u4ef6",level:3},{value:"4. \u5728video\u9762\u677f\u7684v-for\u4e2d\u6dfb\u52a0\u6444\u50cf\u5934\u7ec4\u4ef6",id:"4-\u5728video\u9762\u677f\u7684v-for\u4e2d\u6dfb\u52a0\u6444\u50cf\u5934\u7ec4\u4ef6",level:3},{value:"5. \u5728\u8bbe\u5907\u76d1\u63a7\u4e2d\u6dfb\u52a0\u6444\u50cf\u5934\u7ec4\u4ef6",id:"5-\u5728\u8bbe\u5907\u76d1\u63a7\u4e2d\u6dfb\u52a0\u6444\u50cf\u5934\u7ec4\u4ef6",level:3}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8bbe\u5907\u63d2\u4ef6\u56fe\u8868\u5f00\u53d1"},"\u8bbe\u5907\u63d2\u4ef6\u56fe\u8868\u5f00\u53d1"),(0,o.kt)("h2",{id:"\u4e00\u6982\u8ff0"},"\u4e00\u3001\u6982\u8ff0"),(0,o.kt)("p",null,"\u8bbe\u5907\u63d2\u4ef6\u56fe\u8868\u5f00\u53d1"),(0,o.kt)("h2",{id:"\u4e8c\u5f00\u53d1\u6b65\u9aa4"},"\u4e8c\u3001\u5f00\u53d1\u6b65\u9aa4"),(0,o.kt)("h3",{id:"1-\u76ee\u5f55\u7ed3\u6784"},"1. \u76ee\u5f55\u7ed3\u6784"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    \u251c\u2500\u2500 packages                       -- \u7ec4\u4ef6\u5305  \n    \u2502   \u251c\u2500\u2500 device_plugin              -- \u8bbe\u5907\u63d2\u4ef6  \n    \u2502   \u2502   \u251c\u2500\u2500 editor                 -- \u7f16\u8f91\u5668  \n    \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 index.vue          -- \u4e3b\u9875\u9762  \n    \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 Information.vue    -- \u63d2\u4ef6\u4fe1\u606f  \n    \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 TSL.vue            -- \u7269\u6a21\u578b  \n    \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 Chart              -- \u7ed1\u5b9a\u56fe\u8868  \n    \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 Publish            -- \u53d1\u5e03  \n    \u2502   \u2502   \u251c\u2500\u2500 charts                 -- \u56fe\u8868  \n    \u2502   \u2502   \u2502   \u251c\u2500\u2500 panel              -- \u56fe\u8868\u9762\u677f  \n    \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 control        -- \u63a7\u5236\u7ec4\u4ef6\u9762\u677f  \n    \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 dashboard      -- \u4eea\u8868\u76d8\u9762\u677f  \n    \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 history        -- \u5386\u53f2\u6570\u636e\u9762\u677f  \n    \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 other          -- \u5176\u4ed6\u7ec4\u4ef6\u9762\u677f  \n    \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 report         -- \u62a5\u8868\u7ec4\u4ef6\u9762\u677f  \n    \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 video          -- \u89c6\u9891\u7ec4\u4ef6\u9762\u677f  \n    \u2502   \u2502   \u2502   \u251c\u2500\u2500 components         -- \u7ec4\u4ef6  \n    \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 control        -- \u63a7\u5236\u7ec4\u4ef6  \n    \u2502   \u2502   \u2502   \u2502   \u251c\u2500\u2500 dashboard      -- \u4eea\u8868\u76d8  \n    \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 video          -- \u89c6\u9891\u7ec4\u4ef6  \n    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 options            --  \n                    \u2514\u2500\u2500 options.json   -- \u7ec4\u4ef6JSON\u6570\u636e\n")),(0,o.kt)("h3",{id:"2-\u5728optionsjson\u4e2d\u6dfb\u52a0\u56fe\u8868\u6570\u636e"},"2. \u5728options.json\u4e2d\u6dfb\u52a0\u56fe\u8868\u6570\u636e"),(0,o.kt)("p",null,"\u5047\u8bbe\u8981\u7f16\u5199\u4e00\u4e2a\u6444\u50cf\u5934\u8bbe\u5907\u7684\u56fe\u8868\uff0c\u6444\u50cf\u5934\u7684\u5206\u7c7b\u5728video\uff0c\u90a3\u4e48\u5c31\u5728options.json\u7684video\u5c5e\u6027\u91cc\u6dfb\u52a0\u4e00\u4e2a\u5bf9\u8c61,\u8be5\u5bf9\u8c61\u63cf\u8ff0\u4e86\u6444\u50cf\u5934\u56fe\u8868\u7684\u4fe1\u606f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},'{\n      "controlType": "video",\n      "index": 2,\n      "type": "camera",\n      "title": "\u6444\u50cf\u5934",\n      "series": [],\n      // \u5176\u4ed6\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u5982src\uff0curl\u7b49\u7b49\uff0c\u6839\u636e\u8981\u5f00\u53d1\u7684\u7ec4\u4ef6\u7684\u7279\u6027\u51b3\u5b9a\n    }\n')),(0,o.kt)("h3",{id:"3-\u7f16\u5199\u7ec4\u4ef6"},"3. \u7f16\u5199\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u5728device_plugin/charts/components/video\u76ee\u5f55\u521b\u5efa\u6444\u50cf\u5934\u7ec4\u4ef6\uff0c\u5e76\u7f16\u5199\u4ee3\u7801\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},'<template>\n\n</template>\n\n<script>\nexport default {\n  name: "CommonCamera"\n}\n<\/script>\n\n<style scoped>\n\n</style>\n')),(0,o.kt)("h3",{id:"4-\u5728video\u9762\u677f\u7684v-for\u4e2d\u6dfb\u52a0\u6444\u50cf\u5934\u7ec4\u4ef6"},"4. \u5728video\u9762\u677f\u7684v-for\u4e2d\u6dfb\u52a0\u6444\u50cf\u5934\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u5728device_plugin/charts/panel/video/index.vue\u4e2d\u7684v-for\u6dfb\u52a0\u6444\u50cf\u5934\u7ec4\u4ef6\uff0c\u5f53option\u7684type\u4e3acamera\u65f6\u663e\u793a\u7b2c3\u6b65\u521b\u5efa\u7684\u6444\u50cf\u5934\u7ec4\u4ef6\uff0c\u522b\u5fd8\u4e86\u5f15\u5165\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-aidl"},'<common-camera v-if="option.type == \'camera\'" :ref="\'video_\' + option.index" :option="option" @submit="handleSubmit"></common-camera>\n')),(0,o.kt)("h3",{id:"5-\u5728\u8bbe\u5907\u76d1\u63a7\u4e2d\u6dfb\u52a0\u6444\u50cf\u5934\u7ec4\u4ef6"},"5. \u5728\u8bbe\u5907\u76d1\u63a7\u4e2d\u6dfb\u52a0\u6444\u50cf\u5934\u7ec4\u4ef6"),(0,o.kt)("p",null,"src/view/pages/device-watch/device-detail/PluginCharts.vue"))}d.isMDXComponent=!0}}]);