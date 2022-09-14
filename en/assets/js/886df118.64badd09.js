"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5083],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),l=d(r),s=a,g=l["".concat(u,".").concat(s)]||l[s]||c[s]||o;return r?n.createElement(g,i(i({ref:t},m),{},{components:r})):n.createElement(g,i({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4211:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:11},i="Firmware Upgrade (OTA)",p={unversionedId:"operation-manual/product-management/ota",id:"operation-manual/product-management/ota",title:"Firmware Upgrade (OTA)",description:"1. Description",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/operation-manual/product-management/ota.md",sourceDirName:"operation-manual/product-management",slug:"/operation-manual/product-management/ota",permalink:"/en/docs/operation-manual/product-management/ota",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/operation-manual/product-management/ota.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u4ea7\u54c1\u7ba1\u7406",permalink:"/en/docs/category/\u4ea7\u54c1\u7ba1\u7406"},next:{title:"\u89c4\u5219\u5f15\u64ce",permalink:"/en/docs/category/\u89c4\u5219\u5f15\u64ce"}},u={},d=[{value:"1. Description",id:"1-description",level:2},{value:"2. Procedure",id:"2-procedure",level:2},{value:"1). List",id:"1-list",level:3},{value:"2). Added firmware",id:"2-added-firmware",level:3},{value:"3). Configuration",id:"3-configuration",level:3},{value:"4). Delete",id:"4-delete",level:3}],m={toc:d};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"firmware-upgrade-ota"},"Firmware Upgrade (OTA)"),(0,a.kt)("h2",{id:"1-description"},"1. Description"),(0,a.kt)("p",null,'The full name of OTA "Over-The-Airtechnology", that is, over-the-air download technology, through the interface of mobile communication to achieve remote management of software, simply put, is the remote upgrade of firmware.'),(0,a.kt)("h2",{id:"2-procedure"},"2. Procedure"),(0,a.kt)("h3",{id:"1-list"},"1). List"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Product Management")," -> ",(0,a.kt)("strong",{parentName:"p"},"Firmware Upgrade"),(0,a.kt)("br",{parentName:"p"}),"\n","On the list page you can view information about the firmware that has been currently upgraded, including the firmware name, attribution product, version number, and upgrade time."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:r(7538).Z,width:"1575",height:"277"})),(0,a.kt)("h3",{id:"2-added-firmware"},"2). Added firmware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Product Management")," -> ",(0,a.kt)("strong",{parentName:"p"},"Firmware Upgrade")," -> ",(0,a.kt)("strong",{parentName:"p"},"New Firmware"),(0,a.kt)("br",{parentName:"p"}),"\n","Attributed Product\uff1aSelect the product category to which you want to upgrade the firmware in the drop-down box.",(0,a.kt)("br",{parentName:"p"}),"\n","Firmware Name\uff1ais a user-defined name that identifies the firmware.",(0,a.kt)("br",{parentName:"p"}),"\n","Version Number\uff1auser-defined to distinguish between different versions of the same firmware that have been upgraded multiple times, example\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"V1.0.1"),(0,a.kt)("br",{parentName:"p"}),"\n","Signature Method\uff1aEncryption mode for MD5 and SHA256",(0,a.kt)("br",{parentName:"p"}),"\n","Upload Firmware\uff1aDrag the upgrade package of the firmware you want to upgrade here, or click Upload."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:r(6526).Z,width:"569",height:"718"})),(0,a.kt)("h3",{id:"3-configuration"},"3). Configuration"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Product Management")," -> ",(0,a.kt)("strong",{parentName:"p"},"Firmware Upgrade")," -> ",(0,a.kt)("strong",{parentName:"p"},"Configuration")),(0,a.kt)("h3",{id:"4-delete"},"4). Delete"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Product Management")," -> ",(0,a.kt)("strong",{parentName:"p"},"Firmware Upgrade")," -> ",(0,a.kt)("strong",{parentName:"p"},"Remove")))}c.isMDXComponent=!0},7538:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ota_01-8f5cdbc617528d334c6600351329cd36.png"},6526:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ota_02-36215b9f62bf4a50bb9af68d12d3eb3e.png"}}]);