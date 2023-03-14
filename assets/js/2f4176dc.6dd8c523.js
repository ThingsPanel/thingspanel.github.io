"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8031:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="\u7ec4\u6001\u529f\u80fd",c={unversionedId:"operation-manual/scada",id:"operation-manual/scada",title:"\u7ec4\u6001\u529f\u80fd",description:"1. \u8bf4\u660e",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/operation-manual/scada.md",sourceDirName:"operation-manual",slug:"/operation-manual/scada",permalink:"/docs/operation-manual/scada",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/operation-manual/scada.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Automated alerting and control",permalink:"/docs/operation-manual/getting-started-with-example/automation-alert"},next:{title:"Device management",permalink:"/docs/operation-manual/deviceMgt"}},l={},s=[{value:"1. \u8bf4\u660e",id:"1-\u8bf4\u660e",level:2},{value:"2. \u7ec4\u6001\u6548\u679c",id:"2-\u7ec4\u6001\u6548\u679c",level:2},{value:"3. \u7ec4\u6001\u7f16\u8f91\u5668",id:"3-\u7ec4\u6001\u7f16\u8f91\u5668",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ec4\u6001\u529f\u80fd"},"\u7ec4\u6001\u529f\u80fd"),(0,a.kt)("h2",{id:"1-\u8bf4\u660e"},"1. \u8bf4\u660e"),(0,a.kt)("p",null,"\u5728ThingsPanel\u7684\u53ef\u89c6\u5316\u6a21\u5757\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u5b9e\u73b0\u7ec4\u6001\u529f\u80fd\uff0c\u901a\u8fc7\u56fe\u5143\u7684\u62d6\u62fd\u3001\u6570\u636e\u7ed1\u5b9a\uff0c\u5b9e\u73b0\u7279\u5b9a\u7684\u4e1a\u52a1\u6d41\u7a0b\u6548\u679c\u5c55\u793a\u3002"),(0,a.kt)("h2",{id:"2-\u7ec4\u6001\u6548\u679c"},"2. \u7ec4\u6001\u6548\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4e00\u4e2a\u7b80\u5355\u91c7\u6696\u7cfb\u7edf\u7684\u6f14\u793a\u6548\u679c\u56fe",src:r(4482).Z,width:"1704",height:"951"})),(0,a.kt)("h2",{id:"3-\u7ec4\u6001\u7f16\u8f91\u5668"},"3. \u7ec4\u6001\u7f16\u8f91\u5668"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4e00\u4e2a\u7b80\u5355\u91c7\u6696\u7cfb\u7edf\u7684\u6f14\u793a\u6548\u679c\u56fe",src:r(374).Z,width:"1917",height:"1134"})))}d.isMDXComponent=!0},374:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/scada-editor-2ad540e53a703669e840e0b3873931b9.jpeg"},4482:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/scada-view-50c739fcf0ff1c710f80037a58d88cc9.jpeg"}}]);