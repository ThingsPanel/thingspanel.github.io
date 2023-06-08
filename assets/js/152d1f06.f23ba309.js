"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,c[1]=a;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:3},c="HTTP\u63a5\u5165",a={unversionedId:"device-connect/http",id:"device-connect/http",title:"HTTP\u63a5\u5165",description:"\u76ee\u524d\u4ee3\u7801\u5e93\u6709http\u534f\u8bae\u63d2\u4ef6\uff0c\u90e8\u7f72\u540e\u6ce8\u518c\u534f\u8bae\u63d2\u4ef6\u4fbf\u53ef\u63a5\u5165http\u534f\u8bae\u8bbe\u5907",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/device-connect/http.md",sourceDirName:"device-connect",slug:"/device-connect/http",permalink:"/docs/device-connect/http",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/device-connect/http.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MQTT\u7f51\u5173\u8bbe\u5907\u63a5\u5165",permalink:"/docs/device-connect/gateway"},next:{title:"ModBus\u63a5\u5165",permalink:"/docs/device-connect/modbus"}},l={},p=[{value:"\u5bf9\u63a5\u8bbe\u5907\u6b65\u9aa4",id:"\u5bf9\u63a5\u8bbe\u5907\u6b65\u9aa4",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"http\u63a5\u5165"},"HTTP\u63a5\u5165"),(0,i.kt)("p",null,"\u76ee\u524d\u4ee3\u7801\u5e93\u6709http\u534f\u8bae\u63d2\u4ef6\uff0c\u90e8\u7f72\u540e\u6ce8\u518c\u534f\u8bae\u63d2\u4ef6\u4fbf\u53ef\u63a5\u5165http\u534f\u8bae\u8bbe\u5907"),(0,i.kt)("h2",{id:"\u5bf9\u63a5\u8bbe\u5907\u6b65\u9aa4"},"\u5bf9\u63a5\u8bbe\u5907\u6b65\u9aa4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u521b\u5efa\u8bbe\u5907")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:n(8930).Z,width:"1443",height:"857"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,i.kt)("inlineCode",{parentName:"li"},"\u7f16\u8f91\u53c2\u6570"),"\u5e76\u9009\u62e9",(0,i.kt)("inlineCode",{parentName:"li"},"http\u534f\u8bae"),"\u540e\u4fdd\u5b58")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:n(9368).Z,width:"1443",height:"862"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u70b9\u51fb",(0,i.kt)("inlineCode",{parentName:"li"},"\u8bbe\u5907\u8be6\u60c5"),"\u6309\u94ae\uff0c\u5728\u6570\u636e\u89e3\u6790\u680f\u586b\u5165\u76f8\u5173\u4fe1\u606f\uff08webhook\u5730\u5740\u8bbe\u8bbe\u5907\u63a5\u6536\u5e73\u53f0\u4e0b\u53d1\u7ed9\u8bbe\u5907\u6d88\u606f\u7684\u5730\u5740\uff09")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:n(9667).Z,width:"1439",height:"810"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5177\u4f53\u7ec6\u8282\u8bf7\u67e5\u770bhttp\u534f\u8bae\u63d2\u4ef6\u4ee3\u7801\u5e93\u7684README\u6587\u4ef6")))}d.isMDXComponent=!0},8930:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/http01-b37b0325c85d619c467577317a32a4a8.png"},9368:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/http02-53b24386b0ef6f82e3d0cfd2ea1385a7.png"},9667:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/http03-61e6911cd36aea79a55c7be6ded2438f.png"}}]);