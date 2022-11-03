"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:6},a="UDP\u63a5\u5165",c={unversionedId:"equipment-access/udp",id:"equipment-access/udp",title:"UDP\u63a5\u5165",description:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f",source:"@site/docs/equipment-access/udp.md",sourceDirName:"equipment-access",slug:"/equipment-access/udp",permalink:"/docs/equipment-access/udp",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/equipment-access/udp.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"CoAP\u63a5\u5165",permalink:"/docs/equipment-access/coap"},next:{title:"OPC-UA\u63a5\u5165",permalink:"/docs/equipment-access/opc-ua"}},p={},u=[{value:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f",id:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f",level:2},{value:"\u4f7f\u7528\u534f\u8bae\u63d2\u4ef6\u63a5\u5165",id:"\u4f7f\u7528\u534f\u8bae\u63d2\u4ef6\u63a5\u5165",level:2}],s={toc:u};function l(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"udp\u63a5\u5165"},"UDP\u63a5\u5165"),(0,o.kt)("h2",{id:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f"},"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f"),(0,o.kt)("p",null,"\u4f7f\u7528udp in\u8282\u70b9\u548cudp out\u8282\u70b9",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"udp\u63a5\u5165",src:n(3853).Z,width:"2560",height:"1297"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u670d\u52a1\u5668\u9700\u8981\u5f00\u653e",(0,o.kt)("inlineCode",{parentName:"p"},"udp\u7aef\u53e3"),"(\u4e00\u822c\u5f00\u53d1\u7aef\u53e3\u9ed8\u8ba4\u7684tcp)\uff1b",(0,o.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u662fdocker\u5b89\u88c5\uff0c\u89c4\u5219\u5f15\u64ce\u7684\u5bb9\u5668\u4e5f\u8981\u6620\u5c04udp\u7aef\u53e3")),(0,o.kt)("h2",{id:"\u4f7f\u7528\u534f\u8bae\u63d2\u4ef6\u63a5\u5165"},"\u4f7f\u7528\u534f\u8bae\u63d2\u4ef6\u63a5\u5165"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u534f\u8bae\u5f00\u53d1ThingsPanel\u534f\u8bae\u63d2\u4ef6\uff0c\u901a\u8fc7\u534f\u8bae\u63d2\u4ef6\u63a5\u5165\u3002")))}l.isMDXComponent=!0},3853:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/udp-16fe73fa73d47ebfe577fb1116223913.png"}}]);