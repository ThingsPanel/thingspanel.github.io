"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(g,r(r({ref:t},s),{},{components:n})):a.createElement(g,r({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const l={sidebar_position:1},r="\u8bbe\u5907\u63d2\u4ef6",o={unversionedId:"system-development/eveloping-plug-in/devicePlugin",id:"system-development/eveloping-plug-in/devicePlugin",title:"\u8bbe\u5907\u63d2\u4ef6",description:"\u4e00\u3001\u6982\u8ff0",source:"@site/docs/system-development/eveloping-plug-in/devicePlugin.md",sourceDirName:"system-development/eveloping-plug-in",slug:"/system-development/eveloping-plug-in/devicePlugin",permalink:"/docs/system-development/eveloping-plug-in/devicePlugin",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-development/eveloping-plug-in/devicePlugin.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u63d2\u4ef6",permalink:"/docs/category/\u5f00\u53d1\u63d2\u4ef6"},next:{title:"\u8bbe\u5907\u63d2\u4ef6\u7f16\u8f91\u5668",permalink:"/docs/system-development/eveloping-plug-in/devicePluginEditor"}},p={},d=[{value:"\u4e00\u3001\u6982\u8ff0",id:"\u4e00\u6982\u8ff0",level:2},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:3},{value:"\u4e8c\u3001\u63a5\u53e3\u8bf4\u660e",id:"\u4e8c\u63a5\u53e3\u8bf4\u660e",level:2},{value:"1. \u63d2\u4ef6\u5217\u8868\u67e5\u8be2",id:"1-\u63d2\u4ef6\u5217\u8868\u67e5\u8be2",level:3},{value:"2. \u901a\u8fc7\u63d2\u4ef6id\u67e5\u8be2\u6307\u5b9a\u63d2\u4ef6",id:"2-\u901a\u8fc7\u63d2\u4ef6id\u67e5\u8be2\u6307\u5b9a\u63d2\u4ef6",level:3},{value:"3. \u8bbe\u5907\u7ed1\u5b9a\u63d2\u4ef6",id:"3-\u8bbe\u5907\u7ed1\u5b9a\u63d2\u4ef6",level:3},{value:"4. \u901a\u8fc7\u8bbe\u5907id\u83b7\u53d6\u63d2\u4ef6id",id:"4-\u901a\u8fc7\u8bbe\u5907id\u83b7\u53d6\u63d2\u4ef6id",level:3},{value:"\u63d2\u4ef6JSON\u5b57\u7b26\u4e32\u5206\u6790\uff1a",id:"\u63d2\u4ef6json\u5b57\u7b26\u4e32\u5206\u6790",level:3},{value:"\u4e09\u3001\u5f00\u53d1\u6b65\u9aa4",id:"\u4e09\u5f00\u53d1\u6b65\u9aa4",level:2}],s={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8bbe\u5907\u63d2\u4ef6"},"\u8bbe\u5907\u63d2\u4ef6"),(0,i.kt)("h2",{id:"\u4e00\u6982\u8ff0"},"\u4e00\u3001\u6982\u8ff0"),(0,i.kt)("p",null,"\u8bbe\u5907\u63a5\u5165\u65f6\u9700\u8981\u6620\u5c04\u6bcf\u4e2a\u8bbe\u5907\u7684\u5c5e\u6027\uff0c\u8fd9\u662f\u4e00\u9879\u6781\u5176\u7e41\u7410\u7684\u5de5\u4f5c\uff0c\u6211\u4eec\u901a\u8fc7\u7ed1\u5b9a\u8bbe\u5907\u63d2\u4ef6\u53ef\u4ee5\u5b9e\u73b0\u4e00\u6b21\u6620\u5c04\u8be5\u8bbe\u5907\u7684\u6240\u6709\u5c5e\u6027\uff0c\n\u540c\u65f6,\u5728\u8bbe\u5907\u63d2\u4ef6\u4e2d\u8fd8\u63d0\u4f9b\u4e86\u7ed1\u5b9a\u56fe\u8868\u7684\u529f\u80fd\uff0c\u7528\u6237\u65e0\u9700\u518d\u91cd\u590d\u6dfb\u52a0\u56fe\u8868\uff0c\u7ed1\u5b9a\u6570\u636e\u6e90\u7684\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/operation-manual/plugin-managment/device_plugin"},(0,i.kt)("inlineCode",{parentName:"a"},"\u63d2\u4ef6\u7f16\u8f91\u5668"))),(0,i.kt)("h3",{id:"\u5e94\u7528\u573a\u666f"},"\u5e94\u7528\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u63a5\u5165"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u89c6\u5316")),(0,i.kt)("h2",{id:"\u4e8c\u63a5\u53e3\u8bf4\u660e"},"\u4e8c\u3001\u63a5\u53e3\u8bf4\u660e"),(0,i.kt)("h3",{id:"1-\u63d2\u4ef6\u5217\u8868\u67e5\u8be2"},"1. \u63d2\u4ef6\u5217\u8868\u67e5\u8be2"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/api/device/model/list")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-aidl"},'{\n    "current_page": 1,\n    "per_page": 10\n}\n')),(0,i.kt)("admonition",{title:"\u53c2\u6570\u8bf4\u660e",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"current_page"),":  \u5f53\u524d\u9875\u9875\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"per_page"),":  \u6bcf\u9875\u663e\u793a\u7684\u6570\u636e\u7684\u6761\u6570,\u6700\u5927\u503c\u4e3a9999"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-aidl"},'{\n    "code": 200,\n    "message": "success",\n    "data": {\n        "current_page": 1,\n        "per_page": 10,\n        "data": [\n            {\n                "id": "3ae6fced-eab9-3a2a-94c0-9b6b0c8da8f1",\n                "model_name": "\u6e29\u5ea6\u6d4b\u8bd5",\n                "flag": 0,\n                "chart_data": "{\\"info\\":{\\"pluginName\\":\\"\u6e29\u5ea6\u6d4b\u8bd5\\",\\"pluginCategory\\":\\"1\\"},\\"tsl\\":{\\"properties\\":[{\\"dataType\\":\\"float\\",\\"dataRange\\":\\"0-999\\",\\"stepLength\\":0.1,\\"unit\\":\\"\xb0C\\",\\"title\\":\\"\u6e29\u5ea6\\",\\"name\\":\\"temprature\\"}],\\"option\\":{\\"classify\\":\\"custom\\"}},\\"chart\\":[{\\"series\\":[{\\"type\\":\\"gauge\\",\\"startAngle\\":200,\\"endAngle\\":-20,\\"title\\":{\\"color\\":\\"#FFFFFF\\"},\\"itemStyle\\":{\\"color\\":\\"#FFFFFF\\"},\\"progress\\":{\\"show\\":false,\\"width\\":0},\\"pointer\\":{\\"show\\":false},\\"splitLine\\":{\\"show\\":false},\\"axisTick\\":{\\"show\\":false},\\"axisLabel\\":{\\"show\\":false},\\"axisLine\\":{\\"show\\":false},\\"detail\\":{\\"show\\":true,\\"fontSize\\":50,\\"offsetCenter\\":[0,\\"-15%\\"],\\"formatter\\":\\"{value}\\",\\"color\\":\\"#FFFFFF\\"},\\"data\\":[{\\"value\\":0,\\"name\\":\\"\u6e29\u5ea6A\\"}]}],\\"simulator\\":{\\"funcArr\\":[\\"return +(Math.random() * 60).toFixed(2);\\"],\\"interval\\":5000},\\"name\\":\\"\u6e29\u5ea6\\",\\"mapping\\":[\\"temprature\\"],\\"controlType\\":\\"dashboard\\",\\"id\\":\\"ougUMfMDtSuq\\"}],\\"publish\\":{\\"isPub\\":false}}",\n                "model_type": "1",\n                "sort": 0,\n                "issued": 0,\n                "created_at": 1666268095\n            },\n            {\n                ...\n            }\n        ],\n        "total": 29\n    }\n}\n')),(0,i.kt)("admonition",{title:"\u8fd4\u56de\u503c\u8bf4\u660e",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),":  \u63d2\u4ef6id  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"model_name"),":  \u63d2\u4ef6\u540d\u79f0  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"chart_data"),":  json\u5b57\u7b26\u4e32\uff08\u5305\u542b\u63d2\u4ef6\u4fe1\u606f\uff0c\u5206\u7c7b\uff0c\u7269\u6a21\u578b\uff0c\u7ed1\u5b9a\u7684\u56fe\u8868\uff09  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"model_type"),":  \u63d2\u4ef6\u7c7b\u578bid  "))),(0,i.kt)("h3",{id:"2-\u901a\u8fc7\u63d2\u4ef6id\u67e5\u8be2\u6307\u5b9a\u63d2\u4ef6"},"2. \u901a\u8fc7\u63d2\u4ef6id\u67e5\u8be2\u6307\u5b9a\u63d2\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/api/device/model/list")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-aidl"},'{\n    "current_page": 1,\n    "per_page": 10,\n    "id": "5d85fc5c-be0b-8db9-676e-f5a01111dc63"\n}\n')),(0,i.kt)("admonition",{title:"\u53c2\u6570\u8bf4\u660e",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id"),": \u63d2\u4ef6id"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c\uff1a",(0,i.kt)("br",{parentName:"li"}),"\u548c\u63d2\u4ef6\u5217\u8868\u67e5\u8be2\u63a5\u53e3\u7684\u8fd4\u56de\u503c\u4e00\u6837")),(0,i.kt)("h3",{id:"3-\u8bbe\u5907\u7ed1\u5b9a\u63d2\u4ef6"},"3. \u8bbe\u5907\u7ed1\u5b9a\u63d2\u4ef6"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/api/device/update_only")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-aidl"},'{\n    "id": "3f3b4661-70ee-e875-8af7-985c437f8387",\n    "type": "5d85fc5c-be0b-8db9-676e-f5a01111dc63"\n}\n')),(0,i.kt)("admonition",{title:"\u53c2\u6570\u8bf4\u660e",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"id"),"\uff1a \u8bbe\u5907id",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"type"),"\uff1a\u63d2\u4ef6id")),(0,i.kt)("h3",{id:"4-\u901a\u8fc7\u8bbe\u5907id\u83b7\u53d6\u63d2\u4ef6id"},"4. \u901a\u8fc7\u8bbe\u5907id\u83b7\u53d6\u63d2\u4ef6id"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"/api/device/data")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53c2\u6570\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-aidl"},'{\n    "id": "97ca9d72-8530-6545-ac05-a66a64b29e08"\n}\n')),(0,i.kt)("admonition",{title:"\u53c2\u6570\u8bf4\u660e",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"id"),"\uff1a \u8bbe\u5907id  ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u503c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-aidl"},'{\n    "code": 200,\n    "message": "success",\n    "data": {\n        "id": "97ca9d72-8530-6545-ac05-a66a64b29e08",     // \u8bbe\u5907id\n        "asset_id": "d12f590d-a971-07e6-0677-7df83745e304",    // \u8bbe\u5907\u5206\u7ec4id\n        "token": "b4cab51d-e291-cac9-9c1d-1c082960974f",\n        "customer_id": "",\n        "type": "3ae6fced-eab9-3a2a-94c0-9b6b0c8da8f1",    // \u63d2\u4ef6id\n        "name": "\u6e29\u5ea6",\n        "chart_option": "{}",\n        "protocol": "mqtt",\n        "device_type": "1",    // \u8bbe\u5907\u7c7b\u578b  1\uff1a\u5355\u8bbe\u5907\uff0c 2\uff1a\u7f51\u5173\uff0c 3\uff1a\u5b50\u8bbe\u5907\n        "protocol_config": "{}",\n        "script_id": ""\n    }\n}\n')),(0,i.kt)("admonition",{title:"\u8fd4\u56de\u503c\u8bf4\u660e",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"id"),"\uff1a \u8bbe\u5907id",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"type"),"\uff1a \u63d2\u4ef6id  ")),(0,i.kt)("h3",{id:"\u63d2\u4ef6json\u5b57\u7b26\u4e32\u5206\u6790"},"\u63d2\u4ef6JSON\u5b57\u7b26\u4e32\u5206\u6790\uff1a"),(0,i.kt)("p",null,"\u901a\u8fc7\u63d2\u4ef6\u5217\u8868\u63a5\u53e3",(0,i.kt)("inlineCode",{parentName:"p"},"/api/device/model/list"),"\u83b7\u53d6\u5230\u63d2\u4ef6\u7684JSON\u5b57\u7b26\u4e32\uff0c\u8f6c\u6362\u4e3aJSON\u5bf9\u8c61\u540e\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-aidl"},'{\n    "info": {      // \u63d2\u4ef6\u4fe1\u606f\n        "pluginName": "\u6e29\u6e7f\u5ea6\u63d2\u4ef6",    // \u63d2\u4ef6\u540d\u79f0\n        "pluginCategory": "1"     // \u63d2\u4ef6\u5206\u7c7b\n    },\n    "tsl": {      // \u7269\u6a21\u578b\n        "properties": [     // \u5c5e\u6027\n            {\n                "dataType": "float",      // \u5c5e\u6027\u7c7b\u578b\n                "dataRange": "0 - 99",       // \u53d6\u503c\u8303\u56f4\n                "stepLength": "0.1",          // \u6b65\u957f\n                "unit": "\xb0C",                // \u5355\u4f4d\n                "title": "\u6e29\u5ea6",           // \u540d\u79f0\n                "name": "temp"          // \u6807\u8bc6\uff08\u91cd\u8981 \u7528\u6765\u7ed1\u5b9a\u56fe\u8868\uff09\n            }\n,\n            // ...            \n        ],\n        "option": {        // \u9009\u9879\n            "classify": "custom"    // standard\uff1a\u6807\u51c6\u7269\u6a21\u578b  custom\uff1a\u81ea\u5b9a\u4e49\u7269\u6a21\u6027\n        }\n    },\n    "chart": [           // \u5df2\u7ed1\u5b9a\u7684\u56fe\u8868\u5217\u8868\n        {\n            "series": [    // echarts\u56fe\u8868\u91cc\u7684series\n                {\n                    // ...\n                },\n                // ...\n            ],\n            "mapping": [    // \u56fe\u8868\u7ed1\u5b9a\u7684\u7269\u6a21\u578b\u5c5e\u6027\u7684\u6807\u8bc6\uff0c\u5355\u8868\u76d8\u7ed1\u5b9a\u4e00\u4e2a\u5c5e\u6027\uff0c\u53cc\u8868\u76d8\u7ed1\u5b9a\u4e24\u4e2a\u5c5e\u6027\n                "temp"\n            ],\n            "name": "\u5f00\u5173",   // \u7ed1\u5b9a\u7684\u56fe\u8868\u7684\u540d\u79f0\n            "controlType": "dashboard",    // \u7ed1\u5b9a\u7684\u56fe\u8868\u7684\u7c7b\u578b, dashboard: \u4eea\u8868\u76d8\uff0c history: \u5386\u53f2\u6570\u636e\uff08\u6298\u7ebf\u56fe\uff09\uff0c control\uff1a \u5f00\u5173\u7ec4\u4ef6\n            "id": "O4G18sBwa3t1"    // \u7ed1\u5b9a\u7684\u56fe\u8868\u7684id\n        }\n    ],\n    "publish": {\n        "isPub": false\n    }\n}\n')),(0,i.kt)("h2",{id:"\u4e09\u5f00\u53d1\u6b65\u9aa4"},"\u4e09\u3001\u5f00\u53d1\u6b65\u9aa4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1\u3001\u8bbe\u5907\u7ed1\u5b9a\u63d2\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"2\u3001\u901a\u8fc7\u8bbe\u5907id\u83b7\u53d6\u63d2\u4ef6id"),(0,i.kt)("li",{parentName:"ul"},"3\u3001\u901a\u8fc7\u63d2\u4ef6id\u83b7\u53d6\u63d2\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"4\u3001\u89e3\u6790\u63d2\u4ef6\u7684JSON\u5b57\u7b26\u4e32\uff0c\u56fe\u8868\u5c31\u5728chart\u6570\u7ec4\u91cc\uff0c\u901a\u8fc7mapping\u7ed1\u5b9a\u4e86\u5c5e\u6027")))}u.isMDXComponent=!0}}]);