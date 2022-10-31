"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2382],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),u=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},o=function(t){var e=u(t.components);return a.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),d=u(n),c=r,k=d["".concat(m,".").concat(c)]||d[c]||s[c]||l;return n?a.createElement(k,i(i({ref:e},o),{},{components:n})):a.createElement(k,i({ref:e},o))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5822:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},i="\u8bbe\u5907MQTT\u63a5\u5165",p={unversionedId:"equipment-access/mqtt",id:"equipment-access/mqtt",title:"\u8bbe\u5907MQTT\u63a5\u5165",description:"\u4ec0\u4e48\u662fMQTT",source:"@site/docs/equipment-access/mqtt.md",sourceDirName:"equipment-access",slug:"/equipment-access/mqtt",permalink:"/docs/equipment-access/mqtt",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/equipment-access/mqtt.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u5907\u63a5\u5165",permalink:"/docs/category/\u8bbe\u5907\u63a5\u5165"},next:{title:"MQTT\u7f51\u5173\u8bbe\u5907\u63a5\u5165",permalink:"/docs/equipment-access/gateway"}},m={},u=[{value:"\u4ec0\u4e48\u662fMQTT",id:"\u4ec0\u4e48\u662fmqtt",level:2},{value:"ThingsPanel\u652f\u6301\u7684\u63a5\u5165",id:"thingspanel\u652f\u6301\u7684\u63a5\u5165",level:2},{value:"\u8bbe\u5907MQTT\u63a5\u5165\u65b9\u5f0f",id:"\u8bbe\u5907mqtt\u63a5\u5165\u65b9\u5f0f",level:2},{value:"MQTT\u8eab\u4efd\u8ba4\u8bc1",id:"mqtt\u8eab\u4efd\u8ba4\u8bc1",level:2},{value:"MQTT\u4e3b\u9898",id:"mqtt\u4e3b\u9898",level:2},{value:"\u8bbe\u5907\u53d1\u5e03\u4e3b\u9898",id:"\u8bbe\u5907\u53d1\u5e03\u4e3b\u9898",level:3},{value:"\u4e0a\u62a5\u5c5e\u6027\u6d88\u606f\u89c4\u8303",id:"\u4e0a\u62a5\u5c5e\u6027\u6d88\u606f\u89c4\u8303",level:4},{value:"\u8bbe\u5907\u8ba2\u9605\u4e3b\u9898",id:"\u8bbe\u5907\u8ba2\u9605\u4e3b\u9898",level:3}],o={toc:u};function s(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u8bbe\u5907mqtt\u63a5\u5165"},"\u8bbe\u5907MQTT\u63a5\u5165"),(0,r.kt)("h2",{id:"\u4ec0\u4e48\u662fmqtt"},"\u4ec0\u4e48\u662fMQTT"),(0,r.kt)("p",null,"\u6d88\u606f\u961f\u5217\u9065\u6d4b\u4f20\u8f93\uff08\u82f1\u8bed\uff1aMessage Queuing Telemetry Transport\uff0cMQTT\uff09\u662fISO \u6807\u51c6\uff08ISO/IEC PRF 20922\uff09\u4e0b\u57fa\u4e8e\u53d1\u5e03 (Publish)/\u8ba2\u9605 (Subscribe)\u8303\u5f0f\u7684\u6d88\u606f\u534f\u8bae\uff0c\u53ef\u89c6\u4e3a\u201c\u8d44\u6599\u4f20\u9012\u7684\u6865\u6881\u201d\uff0c\u5b83\u5de5\u4f5c\u5728 TCP/IP\u534f\u8bae\u65cf\u4e0a\uff0c\u662f\u4e3a\u786c\u4ef6\u6027\u80fd\u4f4e\u4e0b\u7684\u8fdc\u7a0b\u8bbe\u5907\u4ee5\u53ca\u7f51\u7edc\u72b6\u51b5\u7cdf\u7cd5\u7684\u60c5\u51b5\u4e0b\u800c\u8bbe\u8ba1\u7684\u53d1\u5e03/\u8ba2\u9605\u578b\u6d88\u606f\u534f\u8bae\uff0c\u4e3a\u6b64\uff0c\u5b83\u9700\u8981\u4e00\u4e2a\u6d88\u606f\u4e2d\u95f4\u4ef6\uff0c\u4ee5\u89e3\u51b3\u5f53\u524d\u7e41\u91cd\u7684\u8d44\u6599\u4f20\u8f93\u534f\u8bae\uff0c\u5982\uff1aHTTP\u3002\nMQTT \u662f\u4e00\u79cd\u7b80\u5355\u7684\u6d88\u606f\u4f20\u9012\u534f\u8bae\uff0c\u8bbe\u8ba1\u7528\u4e8e\u5177\u6709\u4f4e\u5e26\u5bbd\u7684\u53d7\u9650\u8bbe\u5907\u3002\u56e0\u6b64\uff0c\u5b83\u662f\u7269\u8054\u7f51\u8bbe\u5907\u63a5\u5165\u7684\u5b8c\u7f8e\u89e3\u51b3\u65b9\u6848\u3002"),(0,r.kt)("h2",{id:"thingspanel\u652f\u6301\u7684\u63a5\u5165"},"ThingsPanel\u652f\u6301\u7684\u63a5\u5165"),(0,r.kt)("p",null,"ThingsPanel\u5e73\u53f0\u63d0\u4f9b\u4e86\u6807\u51c6\u7684 MQTT \u63a5\u5165\u534f\u8bae\uff0c\u652f\u6301 MQTT v3.1/v.5\uff0c\u4efb\u4f55\u652f\u6301 MQTT \u534f\u8bae\u7684\u8bbe\u5907\u90fd\u53ef\u4ee5\u901a\u8fc7\u76f8\u5e94\u7684 MQTT \u5ba2\u6237\u7aef\u4ee3\u7801\u63a5\u5165\u5e73\u53f0\u3002"),(0,r.kt)("h2",{id:"\u8bbe\u5907mqtt\u63a5\u5165\u65b9\u5f0f"},"\u8bbe\u5907MQTT\u63a5\u5165\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MQTT\u8bbe\u5907\u53ef\u4ee5\u76f4\u63a5\u63a5\u5165\u5230\u7cfb\u7edf\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"MQTT\u8bbe\u5907\u5982\u679c\u662f\u7f51\u5173\uff0c\u4e00\u79cd\u65b9\u5f0f\u662f\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u8f6c\u5316\u4e3a\u6807\u51c6\u8bbe\u5907\u518d\u63a5\u5165\u5230\u7cfb\u7edf\u4e2d\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u5165\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8ba4\u8bc1"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u5165\u5730\u5740"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MQTT"),(0,r.kt)("td",{parentName:"tr",align:null},"username/password\u666e\u901a\u8ba4\u8bc1\u65b9\u5f0f"),(0,r.kt)("td",{parentName:"tr",align:null},"mqtt://{\u670d\u52a1IP}:1883")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u63a5\u5165\u914d\u7f6e",src:n(6011).Z,width:"1165",height:"616"})),(0,r.kt)("h2",{id:"mqtt\u8eab\u4efd\u8ba4\u8bc1"},"MQTT\u8eab\u4efd\u8ba4\u8bc1"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"MQTT"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8fde\u63a5\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"AccessToken"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u521b\u5efa\u540e\u81ea\u52a8\u751f\u6210\uff08\u7528\u6237\u4e5f\u53ef\u81ea\u5df1\u4fee\u6539\uff09\uff0c\u6bcf\u4e2a\u8bbe\u5907\u552f\u4e00\u3002"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u8bbe\u5907\u540e\u53ef\u9009\u8f93\u5165\u9879"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientId"),(0,r.kt)("td",{parentName:"tr",align:null},"\u968f\u673a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e3a\u4fdd\u8bc1\u8bbe\u5907\u5b89\u5168\uff0c\u5ba2\u6237\u7aefid\u8bf7\u4f7f\u7528\u5927\u4e8e6\u4f4d\u7684\u968f\u673a\u5b57\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"ThingsPanel \u5bf9\u540c\u4e00\u4e2a\u8bbe\u5907\u8eab\u4efd\u4fe1\u606f\u53ea\u652f\u6301\u4e00\u4e2a MQTT \u8fde\u63a5\uff0c\u5982\u679c\u5728\u4e24\u4e2a\u6216\u591a\u4e2a\u7269\u7406\u8bbe\u5907\u4e2d\uff0c\u4f7f\u7528\u540c\u6837\u7684 username/password \u8eab\u4efd\u4fe1\u606f\u8fde\u63a5\uff0c\u5e73\u53f0\u4ecd\u7136\u5c06\u8fd9\u4e9b\u8fde\u63a5\u89c6\u4e3a\u540c\u4e00\u4e2a\u8bbe\u5907\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u540e\u4e00\u4e2a\u8bbe\u5907\u8fde\u63a5\u6210\u529f\u540e\u4f1a\u9876\u6389\u4e4b\u524d\u7684\u8bbe\u5907\u8fde\u63a5\u3002")),(0,r.kt)("h2",{id:"mqtt\u4e3b\u9898"},"MQTT\u4e3b\u9898"),(0,r.kt)("h3",{id:"\u8bbe\u5907\u53d1\u5e03\u4e3b\u9898"},"\u8bbe\u5907\u53d1\u5e03\u4e3b\u9898"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6d88\u606f\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u9898"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u4e0a\u62a5\u5c5e\u6027\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"device/attributes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u5173\u8bbe\u5907\u4e0a\u62a5\u5c5e\u6027\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"gateway/attributes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u4e0a\u62a5\u4e8b\u4ef6\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"device/event")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u5907\u670d\u52a1\u6307\u4ee4\u54cd\u5e94\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"device/command/reply")))),(0,r.kt)("h4",{id:"\u4e0a\u62a5\u5c5e\u6027\u6d88\u606f\u89c4\u8303"},"\u4e0a\u62a5\u5c5e\u6027\u6d88\u606f\u89c4\u8303"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-showLineNumbers"},"{key1:value1, key2:value2 ...}\n")),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{"temp":18.5, "hum":40}\n')),(0,r.kt)("h3",{id:"\u8bbe\u5907\u8ba2\u9605\u4e3b\u9898"},"\u8bbe\u5907\u8ba2\u9605\u4e3b\u9898"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6d88\u606f\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3b\u9898"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba2\u9605\u5c5e\u6027\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"device/attributes/{AccessToken}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7f51\u5173\u8bbe\u5907\u8ba2\u9605\u5c5e\u6027\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"gateway/attributes/{AccessToken}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e8b\u4ef6\u4e0a\u62a5\u7684\u54cd\u5e94\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"event/response/{accesstoken}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u6307\u4ee4\u4e3b\u9898"),(0,r.kt)("td",{parentName:"tr",align:null},"command/send/{accesstoken}")))))}s.isMDXComponent=!0},6011:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/1-d620f2d23a230d31935a122e7152ac75.png"}}]);