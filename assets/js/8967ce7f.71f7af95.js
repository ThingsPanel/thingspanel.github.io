"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=m(n),d=r,k=s["".concat(o,".").concat(d)]||s[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},i="MQTT\u7f51\u5173\u8bbe\u5907\u63a5\u5165",p={unversionedId:"equipment-access/gateway",id:"equipment-access/gateway",title:"MQTT\u7f51\u5173\u8bbe\u5907\u63a5\u5165",description:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165",source:"@site/docs/equipment-access/gateway.md",sourceDirName:"equipment-access",slug:"/equipment-access/gateway",permalink:"/docs/equipment-access/gateway",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/equipment-access/gateway.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"MQTT\u76f4\u8fde\u8bbe\u5907\u63a5\u5165",permalink:"/docs/equipment-access/mqtt"},next:{title:"HTTP\u63a5\u5165",permalink:"/docs/equipment-access/http"}},o={},m=[{value:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165",id:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165",level:2},{value:"\u76f4\u8fde\u63a5\u5165",id:"\u76f4\u8fde\u63a5\u5165",level:2},{value:"\u7f51\u5173\u8bbe\u5907MQTT\u63a5\u5165\u65b9\u5f0f",id:"\u7f51\u5173\u8bbe\u5907mqtt\u63a5\u5165\u65b9\u5f0f",level:3},{value:"MQTT\u7f51\u5173\u8bbe\u5907\u4e3b\u9898",id:"mqtt\u7f51\u5173\u8bbe\u5907\u4e3b\u9898",level:3},{value:"\u7f51\u5173\u8bbe\u5907\u53d1\u5e03\u4e3b\u9898",id:"\u7f51\u5173\u8bbe\u5907\u53d1\u5e03\u4e3b\u9898",level:4},{value:"\u7f51\u5173\u8bbe\u5907\u8ba2\u9605\u4e3b\u9898",id:"\u7f51\u5173\u8bbe\u5907\u8ba2\u9605\u4e3b\u9898",level:4}],u={toc:m},s="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mqtt\u7f51\u5173\u8bbe\u5907\u63a5\u5165"},"MQTT\u7f51\u5173\u8bbe\u5907\u63a5\u5165"),(0,r.kt)("h2",{id:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165"},"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165"),(0,r.kt)("p",null,"\u4f7f\u7528ThingsPanel\u89c4\u5219\u5f15\u64ce\u8f6c\u5316\u6210\u6807\u51c6\u8bbe\u5907\u63a5\u5165\u3002"),(0,r.kt)("h2",{id:"\u76f4\u8fde\u63a5\u5165"},"\u76f4\u8fde\u63a5\u5165"),(0,r.kt)("h3",{id:"\u7f51\u5173\u8bbe\u5907mqtt\u63a5\u5165\u65b9\u5f0f"},"\u7f51\u5173\u8bbe\u5907MQTT\u63a5\u5165\u65b9\u5f0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u5165\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8ba4\u8bc1"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u5165\u5730\u5740"),(0,r.kt)("th",{parentName:"tr",align:null},"MQTT\u5b89\u5168\u8ba4\u8bc1"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u5173 MQTT"),(0,r.kt)("td",{parentName:"tr",align:null},"AccessToken\u63a5\u5165\u8ba4\u8bc1"),(0,r.kt)("td",{parentName:"tr",align:null},"mqtt://{\u670d\u52a1IP}:1883"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\uff1aAccessToken \u5bc6\u7801\uff1a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u5173 MQTT"),(0,r.kt)("td",{parentName:"tr",align:null},"MQTT Basic\u8ba4\u8bc1"),(0,r.kt)("td",{parentName:"tr",align:null},"mqtt://{\u670d\u52a1IP}:1883"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\uff1a\u5fc5\u586b \u5bc6\u7801\uff1a\u5fc5\u586b")))),(0,r.kt)("h3",{id:"mqtt\u7f51\u5173\u8bbe\u5907\u4e3b\u9898"},"MQTT\u7f51\u5173\u8bbe\u5907\u4e3b\u9898"),(0,r.kt)("h4",{id:"\u7f51\u5173\u8bbe\u5907\u53d1\u5e03\u4e3b\u9898"},"\u7f51\u5173\u8bbe\u5907\u53d1\u5e03\u4e3b\u9898"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6d88\u606f\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u9898"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u5173\u8bbe\u5907\u4e0a\u62a5\u5c5e\u6027\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"gateway/attributes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u4e0a\u62a5\u4e8b\u4ef6\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"gateway/event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u670d\u52a1\u6307\u4ee4\u54cd\u5e94\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"gateway/command/reply")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0a\u62a5\u5c5e\u6027\u6d88\u606f\u89c4\u8303")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-showLineNumbers"},"{sub_device_addr1:{key1:value1, ...},sub_device_addr1:{key1:value1, ...}}\n")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n    "A0001": {\n        "temp": 18.5,\n        "hum": 40\n    },\n    "A0002": {\n        "temp": 19.5,\n        "hum": 44.2\n    }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"sub_device_addr\u5728\u5b50\u8bbe\u5907",(0,r.kt)("inlineCode",{parentName:"p"},"\u7f16\u8f91\u53c2\u6570"),"\u5f39\u7a97\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907\u5730\u5740"),"\u680f\u8f93\u5165\uff0c\u540c\u4e00\u4e2a\u7f51\u5173\u8bbe\u5907\u4e0b\u4e0d\u91cd\u590d")),(0,r.kt)("h4",{id:"\u7f51\u5173\u8bbe\u5907\u8ba2\u9605\u4e3b\u9898"},"\u7f51\u5173\u8bbe\u5907\u8ba2\u9605\u4e3b\u9898"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6d88\u606f\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u9898"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u5173\u8bbe\u5907\u8ba2\u9605\u5c5e\u6027\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"gateway/attributes/{AccessToken\u6216username}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u4e0a\u62a5\u7684\u54cd\u5e94\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"event/response/{accesstoken\u6216username}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u6307\u4ee4\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"command/send/{accesstoken\u6216username}")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8ba2\u9605\u4e3b\u9898\u4e2d{accesstoken\u6216username}\u6839\u636e\u9009\u62e9\u7684\u8ba4\u8bc1\u65b9\u5f0f\u586b\u5199\uff0cAccessToken\u63a5\u5165\u8ba4\u8bc1\u586b\u5199AccessToken\uff0cMQTT Basic\u8ba4\u8bc1\u586b\u5199\u7528\u6237\u540d")))}c.isMDXComponent=!0}}]);