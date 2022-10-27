"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>s});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),s=r,f=m["".concat(p,".").concat(s)]||m[s]||d[s]||l;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},o="\u5f00\u53d1\u534f\u8bae\u63d2\u4ef6",i={unversionedId:"system-development/customProtocol",id:"system-development/customProtocol",title:"\u5f00\u53d1\u534f\u8bae\u63d2\u4ef6",description:"\u53ef\u4ee5\u53c2\u8003modbus\u534f\u8bae\u63d2\u4ef6\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/system-development/customProtocol.md",sourceDirName:"system-development",slug:"/system-development/customProtocol",permalink:"/en/docs/system-development/customProtocol",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-development/customProtocol.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u73af\u5883",permalink:"/en/docs/system-development/devEnv"},next:{title:"\u5f00\u53d1\u63d2\u4ef6",permalink:"/en/docs/category/\u5f00\u53d1\u63d2\u4ef6"}},p={},c=[{value:"\u4ea4\u6362\u6570\u636e\u76f8\u5173",id:"\u4ea4\u6362\u6570\u636e\u76f8\u5173",level:2},{value:"\u63d2\u4ef6\u63a8\u9001\u6570\u636e\u5230\u5e73\u53f0",id:"\u63d2\u4ef6\u63a8\u9001\u6570\u636e\u5230\u5e73\u53f0",level:3},{value:"\u5e73\u53f0\u63a8\u9001\u6570\u636e\u7ed9\u63d2\u4ef6",id:"\u5e73\u53f0\u63a8\u9001\u6570\u636e\u7ed9\u63d2\u4ef6",level:3},{value:"\u63d2\u4ef6\u8868\u5355",id:"\u63d2\u4ef6\u8868\u5355",level:2},{value:"plugin\u63d0\u4f9b\u7684\u63a5\u53e3",id:"plugin\u63d0\u4f9b\u7684\u63a5\u53e3",level:2},{value:"thingspanel\u63d0\u4f9b\u7ed9\u63d2\u4ef6\u7684\u63a5\u53e3",id:"thingspanel\u63d0\u4f9b\u7ed9\u63d2\u4ef6\u7684\u63a5\u53e3",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5f00\u53d1\u534f\u8bae\u63d2\u4ef6"},"\u5f00\u53d1\u534f\u8bae\u63d2\u4ef6"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/modbus-protocol-plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"modbus\u534f\u8bae\u63d2\u4ef6")),"\u3002")),(0,r.kt)("h2",{id:"\u4ea4\u6362\u6570\u636e\u76f8\u5173"},"\u4ea4\u6362\u6570\u636e\u76f8\u5173"),(0,r.kt)("h3",{id:"\u63d2\u4ef6\u63a8\u9001\u6570\u636e\u5230\u5e73\u53f0"},"\u63d2\u4ef6\u63a8\u9001\u6570\u636e\u5230\u5e73\u53f0"),(0,r.kt)("p",null,"\u8bbe\u5907\u5bf9\u63a5\u5230\u534f\u8bae\u63d2\u4ef6\uff0c\u534f\u8bae\u63d2\u4ef6\u5904\u7406\u8bbe\u5907\u7aef\u7684\u6d88\u606f\u540e\uff0c\u5c06\u6d88\u606f\u901a\u8fc7mqtt\u53d1\u7ed9thingspanel\u5e73\u53f0"),(0,r.kt)("p",null,"\u534f\u8bae\u63d2\u4ef6\u53d1\u9001\u4e3b\u9898\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'mqtt\u7528\u6237\uff1aroot  \n\u53d1\u5e03\u4e3b\u9898\uff1adevice/attributes\n\u62a5\u6587\u89c4\u8303\uff1a{"token":sub_device_token,"values":{key:value...}}\n')),(0,r.kt)("h3",{id:"\u5e73\u53f0\u63a8\u9001\u6570\u636e\u7ed9\u63d2\u4ef6"},"\u5e73\u53f0\u63a8\u9001\u6570\u636e\u7ed9\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5e73\u53f0\u5411\u8bbe\u5907\u53d1\u9001\u6d88\u606f\u9700\u8981\u901a\u8fc7\u534f\u8bae\u63d2\u4ef6\uff0c\u5e73\u53f0\u5c06\u6d88\u606f\u901a\u8fc7mqtt\u53d1\u7ed9\u534f\u8bae\u63d2\u4ef6"),(0,r.kt)("p",null,"\u534f\u8bae\u63d2\u4ef6\u8ba2\u9605\u4e3b\u9898\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'mqtt\u7528\u6237\uff1aroot  \n\u8ba2\u9605\u4e3b\u9898\uff1aplugin/modbus (\u8bf4\u660e\uff1amodbus\u4e3a\u6ce8\u518c\u63d2\u4ef6\u65f6\u586b\u5199\u7684\u63d2\u4ef6\u8ba2\u9605\u4e3b\u9898\u540d\u79f0)  \n\u62a5\u6587\u89c4\u8303\uff1a{"token":sub_device_token,"values":{key:value...}}\n')),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u8868\u5355"},"\u63d2\u4ef6\u8868\u5355"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./form_config.json"),(0,r.kt)("br",{parentName:"p"}),"\n","thingspanel\u524d\u7aef\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"/api/form/config"),"\u63a5\u53e3\u83b7\u53d6\u8868\u5355\u914d\u7f6e\uff0c\u751f\u6210\u5b50\u8bbe\u5907\u7684\u8868\u5355\uff0c\u7528\u6237\u586b\u5199\u7684\u8868\u5355\u6570\u636e\u4f1a\u5728thingspanel\u63d0\u4f9b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"/api/gateway/config"),'\u63a5\u53e3\u7684"SubDevice"\u5c5e\u6027\u4e2d\u8fd4\u56de'),(0,r.kt)("h2",{id:"plugin\u63d0\u4f9b\u7684\u63a5\u53e3"},"plugin\u63d0\u4f9b\u7684\u63a5\u53e3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u94fe\u63a5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/form/config"),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u63d2\u4ef6\u8868\u5355\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.apifox.cn/apidoc/shared-34b48097-8c3a-4ffe-907e-12ff3c669936/api-43746721"},"\u4f20\u9001"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/device/config/update"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u5b50\u8bbe\u5907\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.apifox.cn/apidoc/shared-34b48097-8c3a-4ffe-907e-12ff3c669936/api-43903019"},"\u4f20\u9001"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/device/config/add"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u589e\u5b50\u8bbe\u5907\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.apifox.cn/apidoc/shared-34b48097-8c3a-4ffe-907e-12ff3c669936/api-43925736"},"\u4f20\u9001"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/device/config/add"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u5b50\u8bbe\u5907\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.apifox.cn/apidoc/shared-34b48097-8c3a-4ffe-907e-12ff3c669936/api-43965145"},"\u4f20\u9001"))))),(0,r.kt)("h2",{id:"thingspanel\u63d0\u4f9b\u7ed9\u63d2\u4ef6\u7684\u63a5\u53e3"},"thingspanel\u63d0\u4f9b\u7ed9\u63d2\u4ef6\u7684\u63a5\u53e3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u63cf\u8ff0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63a5\u53e3\u94fe\u63a5"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/gateway/config"),(0,r.kt)("td",{parentName:"tr",align:null},'\u8bbe\u5907\u8fde\u63a5\u65f6\u9001\u6765\u5bc6\u94a5\uff0c\u6839\u636e\u5bc6\u94a5\u83b7\u53d6\u63d2\u4ef6\u76f8\u5173\u8bbe\u5907\u7684\u4fe1\u606f\uff0c"SubDevice"\u7684\u5c5e\u6027\u65f6\u63d2\u4ef6\u8868\u5355\u4e2d\u5b9a\u4e49\u7684\u5c5e\u6027'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.apifox.cn/apidoc/shared-34b48097-8c3a-4ffe-907e-12ff3c669936/api-43535958"},"\u4f20\u9001"))))))}d.isMDXComponent=!0}}]);