"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2382],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),m=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=m(n),d=r,k=c["".concat(o,".").concat(d)]||c[d]||s[d]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5822:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},i="MQTT\u76f4\u8fde\u8bbe\u5907\u63a5\u5165",p={unversionedId:"equipment-access/mqtt",id:"equipment-access/mqtt",title:"MQTT\u76f4\u8fde\u8bbe\u5907\u63a5\u5165",description:"\u4ec0\u4e48\u662fMQTT",source:"@site/docs/equipment-access/mqtt.md",sourceDirName:"equipment-access",slug:"/equipment-access/mqtt",permalink:"/docs/equipment-access/mqtt",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/equipment-access/mqtt.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u5907\u63a5\u5165",permalink:"/docs/category/\u8bbe\u5907\u63a5\u5165"},next:{title:"MQTT\u7f51\u5173\u63a5\u5165",permalink:"/docs/equipment-access/gateway"}},o={},m=[{value:"\u4ec0\u4e48\u662fMQTT",id:"\u4ec0\u4e48\u662fmqtt",level:2},{value:"ThingsPanel\u652f\u6301\u7684\u63a5\u5165",id:"thingspanel\u652f\u6301\u7684\u63a5\u5165",level:2},{value:"MQTT\u76f4\u8fde\u8bbe\u5907\u63a5\u5165\u65b9\u5f0f",id:"mqtt\u76f4\u8fde\u8bbe\u5907\u63a5\u5165\u65b9\u5f0f",level:2},{value:"MQTT\u4e3b\u9898",id:"mqtt\u4e3b\u9898",level:2},{value:"\u8bbe\u5907\u53d1\u5e03\u4e3b\u9898",id:"\u8bbe\u5907\u53d1\u5e03\u4e3b\u9898",level:3},{value:"\u8bbe\u5907\u8ba2\u9605\u4e3b\u9898",id:"\u8bbe\u5907\u8ba2\u9605\u4e3b\u9898",level:3}],u={toc:m};function s(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mqtt\u76f4\u8fde\u8bbe\u5907\u63a5\u5165"},"MQTT\u76f4\u8fde\u8bbe\u5907\u63a5\u5165"),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662fmqtt"},"\u4ec0\u4e48\u662fMQTT"),(0,r.kt)("p",null,"\u6d88\u606f\u961f\u5217\u9065\u6d4b\u4f20\u8f93\uff08\u82f1\u8bed\uff1aMessage Queuing Telemetry Transport\uff0cMQTT\uff09\u662fISO \u6807\u51c6\uff08ISO/IEC PRF 20922\uff09\u4e0b\u57fa\u4e8e\u53d1\u5e03 (Publish)/\u8ba2\u9605 (Subscribe)\u8303\u5f0f\u7684\u6d88\u606f\u534f\u8bae\uff0c\u53ef\u89c6\u4e3a\u201c\u8d44\u6599\u4f20\u9012\u7684\u6865\u6881\u201d\uff0c\u5b83\u5de5\u4f5c\u5728 TCP/IP\u534f\u8bae\u65cf\u4e0a\uff0c\u662f\u4e3a\u786c\u4ef6\u6027\u80fd\u4f4e\u4e0b\u7684\u8fdc\u7a0b\u8bbe\u5907\u4ee5\u53ca\u7f51\u7edc\u72b6\u51b5\u7cdf\u7cd5\u7684\u60c5\u51b5\u4e0b\u800c\u8bbe\u8ba1\u7684\u53d1\u5e03/\u8ba2\u9605\u578b\u6d88\u606f\u534f\u8bae\uff0c\u4e3a\u6b64\uff0c\u5b83\u9700\u8981\u4e00\u4e2a\u6d88\u606f\u4e2d\u95f4\u4ef6\uff0c\u4ee5\u89e3\u51b3\u5f53\u524d\u7e41\u91cd\u7684\u8d44\u6599\u4f20\u8f93\u534f\u8bae\uff0c\u5982\uff1aHTTP\u3002\nMQTT \u662f\u4e00\u79cd\u7b80\u5355\u7684\u6d88\u606f\u4f20\u9012\u534f\u8bae\uff0c\u8bbe\u8ba1\u7528\u4e8e\u5177\u6709\u4f4e\u5e26\u5bbd\u7684\u53d7\u9650\u8bbe\u5907\u3002\u56e0\u6b64\uff0c\u5b83\u662f\u7269\u8054\u7f51\u8bbe\u5907\u63a5\u5165\u7684\u5b8c\u7f8e\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("h2",{id:"thingspanel\u652f\u6301\u7684\u63a5\u5165"},"ThingsPanel\u652f\u6301\u7684\u63a5\u5165"),(0,r.kt)("p",null,"ThingsPanel\u5e73\u53f0\u63d0\u4f9b\u4e86\u6807\u51c6\u7684 MQTT \u63a5\u5165\u534f\u8bae\uff0c\u652f\u6301 MQTT v3.1/v.5\uff0c\u4efb\u4f55\u652f\u6301 MQTT \u534f\u8bae\u7684\u8bbe\u5907\u90fd\u53ef\u4ee5\u901a\u8fc7\u76f8\u5e94\u7684 MQTT \u5ba2\u6237\u7aef\u4ee3\u7801\u63a5\u5165\u5e73\u53f0\u3002"),(0,r.kt)("h2",{id:"mqtt\u76f4\u8fde\u8bbe\u5907\u63a5\u5165\u65b9\u5f0f"},"MQTT\u76f4\u8fde\u8bbe\u5907\u63a5\u5165\u65b9\u5f0f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u5165\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8ba4\u8bc1"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u5165\u5730\u5740"),(0,r.kt)("th",{parentName:"tr",align:null},"MQTT\u5b89\u5168\u8ba4\u8bc1"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MQTT"),(0,r.kt)("td",{parentName:"tr",align:null},"AccessToken\u63a5\u5165\u8ba4\u8bc1"),(0,r.kt)("td",{parentName:"tr",align:null},"mqtt://{\u670d\u52a1IP}:1883"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\uff1aAccessToken \u5bc6\u7801\uff1a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MQTT"),(0,r.kt)("td",{parentName:"tr",align:null},"MQTT Basic\u8ba4\u8bc1"),(0,r.kt)("td",{parentName:"tr",align:null},"mqtt://{\u670d\u52a1IP}:1883"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\uff1a\u5fc5\u586b \u5bc6\u7801\uff1a\u5fc5\u586b")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u63a5\u5165\u914d\u7f6e",src:n(6011).Z,width:"1165",height:"616"})),(0,r.kt)("h2",{id:"mqtt\u4e3b\u9898"},"MQTT\u4e3b\u9898"),(0,r.kt)("h3",{id:"\u8bbe\u5907\u53d1\u5e03\u4e3b\u9898"},"\u8bbe\u5907\u53d1\u5e03\u4e3b\u9898"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6d88\u606f\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u9898"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u4e0a\u62a5\u5c5e\u6027\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"device/attributes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u4e0a\u62a5\u4e8b\u4ef6\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"device/event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u670d\u52a1\u6307\u4ee4\u54cd\u5e94\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"device/command/reply")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0a\u62a5\u5c5e\u6027\u6d88\u606f\u89c4\u8303")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-showLineNumbers"},"{key1:value1, key2:value2 ...}\n")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n    "temp": 18.5,\n    "hum": 40\n}\n')),(0,r.kt)("h3",{id:"\u8bbe\u5907\u8ba2\u9605\u4e3b\u9898"},"\u8bbe\u5907\u8ba2\u9605\u4e3b\u9898"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6d88\u606f\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u9898"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u5c5e\u6027\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"device/attributes/{AccessToken\u6216username}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u4e0a\u62a5\u7684\u54cd\u5e94\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"event/response/{AccessToken\u6216username}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u6307\u4ee4\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"command/send/{AccessToken\u6216username}")))))}s.isMDXComponent=!0},6011:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1-d620f2d23a230d31935a122e7152ac75.png"}}]);