"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7418],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=s(n),g=i,m=u["".concat(p,".").concat(g)]||u[g]||h[g]||o;return n?r.createElement(m,a(a({ref:e},c),{},{components:n})):r.createElement(m,a({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},329:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:8},a="\u4ee3\u7801\u5e93\u5730\u5740",l={unversionedId:"system-introduction/code_repository",id:"system-introduction/code_repository",title:"\u4ee3\u7801\u5e93\u5730\u5740",description:"https://github.com/ThingsPanel/",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/system-introduction/code_repository.md",sourceDirName:"system-introduction",slug:"/system-introduction/code_repository",permalink:"/docs/system-introduction/code_repository",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-introduction/code_repository.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"ThingsPanel\u7cfb\u7edf\u67b6\u6784",permalink:"/docs/system-introduction/architecture"},next:{title:"\u66f4\u65b0\u8bb0\u5f55",permalink:"/docs/system-introduction/releases"}},p={},s=[{value:"\u540e\u7aef\u4ee3\u7801\u5e93",id:"\u540e\u7aef\u4ee3\u7801\u5e93",level:2},{value:"\u524d\u7aef\u4ee3\u7801\u5e93",id:"\u524d\u7aef\u4ee3\u7801\u5e93",level:2},{value:"\u53ef\u89c6\u5316\u7f16\u8f91\u5668\u4ee3\u7801\u5e93",id:"\u53ef\u89c6\u5316\u7f16\u8f91\u5668\u4ee3\u7801\u5e93",level:2},{value:"GMQTT\u4ee3\u7801\u5e93",id:"gmqtt\u4ee3\u7801\u5e93",level:2},{value:"HTTP\u534f\u8bae\u63d2\u4ef6\u5e93",id:"http\u534f\u8bae\u63d2\u4ef6\u5e93",level:2},{value:"Modbus\u534f\u8bae\u63d2\u4ef6\u5e93",id:"modbus\u534f\u8bae\u63d2\u4ef6\u5e93",level:2},{value:"TCP\u534f\u8bae\u63d2\u4ef6\u5e93",id:"tcp\u534f\u8bae\u63d2\u4ef6\u5e93",level:2},{value:"\u624b\u673a\u7aef\u4ee3\u7801\u5e93",id:"\u624b\u673a\u7aef\u4ee3\u7801\u5e93",level:2},{value:"\u5bb9\u5668\u4ee3\u7801\u5e93",id:"\u5bb9\u5668\u4ee3\u7801\u5e93",level:2}],c={toc:s},u="wrapper";function h(t){let{components:e,...n}=t;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4ee3\u7801\u5e93\u5730\u5740"},"\u4ee3\u7801\u5e93\u5730\u5740"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/"},"https://github.com/ThingsPanel/")),(0,i.kt)("h2",{id:"\u540e\u7aef\u4ee3\u7801\u5e93"},"\u540e\u7aef\u4ee3\u7801\u5e93"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/ThingsPanel-Go"},"https://github.com/ThingsPanel/ThingsPanel-Go")),(0,i.kt)("h2",{id:"\u524d\u7aef\u4ee3\u7801\u5e93"},"\u524d\u7aef\u4ee3\u7801\u5e93"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/ThingsPanel-Backend-Vue"},"https://github.com/ThingsPanel/ThingsPanel-Backend-Vue")),(0,i.kt)("h2",{id:"\u53ef\u89c6\u5316\u7f16\u8f91\u5668\u4ee3\u7801\u5e93"},"\u53ef\u89c6\u5316\u7f16\u8f91\u5668\u4ee3\u7801\u5e93"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/visual-editor"},"https://github.com/ThingsPanel/visual-editor")),(0,i.kt)("h2",{id:"gmqtt\u4ee3\u7801\u5e93"},"GMQTT\u4ee3\u7801\u5e93"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/gmqtt.git"},"https://github.com/ThingsPanel/gmqtt.git")),(0,i.kt)("h2",{id:"http\u534f\u8bae\u63d2\u4ef6\u5e93"},"HTTP\u534f\u8bae\u63d2\u4ef6\u5e93"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/http-protocol-plugin.git"},"https://github.com/ThingsPanel/http-protocol-plugin.git")),(0,i.kt)("h2",{id:"modbus\u534f\u8bae\u63d2\u4ef6\u5e93"},"Modbus\u534f\u8bae\u63d2\u4ef6\u5e93"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/modbus-protocol-plugin"},"https://github.com/ThingsPanel/modbus-protocol-plugin")),(0,i.kt)("h2",{id:"tcp\u534f\u8bae\u63d2\u4ef6\u5e93"},"TCP\u534f\u8bae\u63d2\u4ef6\u5e93"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/tcp-protocol-plugin"},"https://github.com/ThingsPanel/tcp-protocol-plugin")),(0,i.kt)("h2",{id:"\u624b\u673a\u7aef\u4ee3\u7801\u5e93"},"\u624b\u673a\u7aef\u4ee3\u7801\u5e93"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/app"},"https://github.com/ThingsPanel/app")),(0,i.kt)("h2",{id:"\u5bb9\u5668\u4ee3\u7801\u5e93"},"\u5bb9\u5668\u4ee3\u7801\u5e93"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/thingspanel-docker.git"},"https://github.com/ThingsPanel/thingspanel-docker.git")))}h.isMDXComponent=!0}}]);