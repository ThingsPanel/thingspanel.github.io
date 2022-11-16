"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="\u7ec4\u6001\u529f\u80fd",c={unversionedId:"operation-manual/scada",id:"operation-manual/scada",title:"\u7ec4\u6001\u529f\u80fd",description:"1. \u8bf4\u660e",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/operation-manual/scada.md",sourceDirName:"operation-manual",slug:"/operation-manual/scada",permalink:"/en/docs/operation-manual/scada",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/operation-manual/scada.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Automated alerting and control",permalink:"/en/docs/operation-manual/getting-started-with-example/automation-alert"},next:{title:"Device management",permalink:"/en/docs/operation-manual/deviceMgt"}},l={},s=[{value:"1. \u8bf4\u660e",id:"1-\u8bf4\u660e",level:2},{value:"2. \u7ec4\u6001\u6548\u679c",id:"2-\u7ec4\u6001\u6548\u679c",level:2},{value:"3. \u7ec4\u6001\u7f16\u8f91\u5668",id:"3-\u7ec4\u6001\u7f16\u8f91\u5668",level:2}],p={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ec4\u6001\u529f\u80fd"},"\u7ec4\u6001\u529f\u80fd"),(0,a.kt)("h2",{id:"1-\u8bf4\u660e"},"1. \u8bf4\u660e"),(0,a.kt)("p",null,"\u5728ThingsPanel\u7684\u53ef\u89c6\u5316\u6a21\u5757\u4e2d\uff0c\u7528\u6237\u53ef\u4ee5\u5b9e\u73b0\u7ec4\u6001\u529f\u80fd\uff0c\u901a\u8fc7\u56fe\u5143\u7684\u62d6\u62fd\u3001\u6570\u636e\u7ed1\u5b9a\uff0c\u5b9e\u73b0\u7279\u5b9a\u7684\u4e1a\u52a1\u6d41\u7a0b\u6548\u679c\u5c55\u793a\u3002"),(0,a.kt)("h2",{id:"2-\u7ec4\u6001\u6548\u679c"},"2. \u7ec4\u6001\u6548\u679c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4e00\u4e2a\u7b80\u5355\u91c7\u6696\u7cfb\u7edf\u7684\u6f14\u793a\u6548\u679c\u56fe",src:n(4482).Z,width:"1704",height:"951"})),(0,a.kt)("h2",{id:"3-\u7ec4\u6001\u7f16\u8f91\u5668"},"3. \u7ec4\u6001\u7f16\u8f91\u5668"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u4e00\u4e2a\u7b80\u5355\u91c7\u6696\u7cfb\u7edf\u7684\u6f14\u793a\u6548\u679c\u56fe",src:n(374).Z,width:"1917",height:"1134"})))}u.isMDXComponent=!0},374:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scada-editor-2ad540e53a703669e840e0b3873931b9.jpeg"},4482:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scada-view-50c739fcf0ff1c710f80037a58d88cc9.jpeg"}}]);