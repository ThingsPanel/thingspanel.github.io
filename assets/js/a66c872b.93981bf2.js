"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=l(n),f=o,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||c;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3957:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const c={sidebar_position:7},i="OPC-UA\u63a5\u5165",a={unversionedId:"device-connect/opc-ua",id:"device-connect/opc-ua",title:"OPC-UA\u63a5\u5165",description:"\u4ec0\u4e48\u662fOPC UA",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/device-connect/opc-ua.md",sourceDirName:"device-connect",slug:"/device-connect/opc-ua",permalink:"/docs/device-connect/opc-ua",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/device-connect/opc-ua.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"UDP\u63a5\u5165",permalink:"/docs/device-connect/udp"},next:{title:"GB28181\u5b89\u9632\u6444\u50cf\u5934\u63a5\u5165",permalink:"/docs/device-connect/gb28181"}},p={},l=[{value:"\u4ec0\u4e48\u662fOPC UA",id:"\u4ec0\u4e48\u662fopc-ua",level:2},{value:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f",id:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f",level:2},{value:"\u5176\u4ed6\u65b9\u5f0f",id:"\u5176\u4ed6\u65b9\u5f0f",level:2}],u={toc:l},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"opc-ua\u63a5\u5165"},"OPC-UA\u63a5\u5165"),(0,o.kt)("h2",{id:"\u4ec0\u4e48\u662fopc-ua"},"\u4ec0\u4e48\u662fOPC UA"),(0,o.kt)("p",null,"OPC UA\u7684\u5168\u540d\u662fOPC Unified Architecture\uff08OPC\u7edf\u4e00\u67b6\u6784\uff09\u3002\u662fOPC\u57fa\u91d1\u4f1a\u5e94\u7528\u5728\u81ea\u52a8\u5316\u6280\u672f\u7684\u673a\u5668\u5bf9\u673a\u5668\u7f51\u7edc\u4f20\u8f93\u534f\u8bae\u3002"),(0,o.kt)("p",null,"OPC UA\u652f\u63f4\u4e24\u79cd\u901a\u8baf\u534f\u5b9a\uff0c\u8fd9\u4e24\u79cd\u901a\u8baf\u534f\u5b9a\u7684\u5dee\u5f02\u53ea\u6709URL\u7684\u4e0d\u540c\uff0c\u4e8c\u8fdb\u5236\u901a\u8baf\u534f\u5b9a\u662fopc.tcp://Server\uff0c\u800cWeb\u670d\u52a1\u7684\u901a\u8baf\u534f\u5b9a\u662fhttp://Server\uff0c\u5176\u4ed6\u60c5\u5f62\u4e0b\uff0cOPC UA\u5bf9\u5e94\u7528\u7a0b\u5e8f\u63a5\u53e3\u7684\u4f5c\u4e1a\u5b8c\u5168\u900f\u660e\uff0c\u5176\u4ed6\u4f5c\u4e1a\u4e0d\u53d7OPC UA\u7684\u5f71\u54cd\u3002"),(0,o.kt)("p",null,"\u4e8c\u8fdb\u5236\u901a\u8baf\u534f\u5b9a\u7684\u6548\u7387\u6700\u9ad8\uff0c\u5176overhead\u4e5f\u6700\u5c11\uff0c\u8ba9\u9700\u8981\u7684\u8d44\u6e90\u6700\u5c0f\u5316\uff08\u4e0d\u9700\u8981XML\u89e3\u6790\u5668\u3001SOAP\u53caHTTP\uff0c\u5bf9\u5d4c\u5165\u5f0f\u7cfb\u7edf\u683c\u5916\u91cd\u8981\uff09\uff0c\u63d0\u4f9b\u6700\u4f73\u7684\u4e92\u64cd\u63a7\u6027\uff08\u5728\u5b9e\u73b0\u65f6\uff0c\u4e8c\u8fdb\u5236\u901a\u8baf\u534f\u5b9a\u63d0\u4f9b\u8f83\u5c11\u7684\u81ea\u7531\u5ea6\uff09\uff0c\u4f7f\u7528\u4efb\u610f\u9009\u53d6\u7684TCP\u901a\u9053\uff0c\u53ef\u4ee5\u8f83\u5bb9\u6613\u7684\u8fdb\u884c\u96a7\u9053\u534f\u8bae\uff0c\u4e5f\u53ef\u4ee5\u4ece\u900f\u8fc7\u9632\u706b\u5899\u5f00\u542f\u3002"),(0,o.kt)("p",null,"Web\u670d\u52a1\uff08SOAP\uff09\u901a\u8baf\u534f\u5b9a\u53ef\u4ee5\u652f\u63f4\u8bb8\u591a\u4e0d\u540c\u7684\u5de5\u5177\uff08\u5305\u62ecJava\u73af\u5883\u6216\u662f.NET\u73af\u5883\u7684\u5de5\u5177\uff09\uff0c\u4f7f\u7528\u6807\u51c6HTTP(S)\u57e0\uff0c\u53ef\u4ee5\u548c\u9632\u706b\u5899\u5171\u540c\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u6240\u6709\u7684\u5b9e\u73b0\u65b9\u5f0f\u90fd\u652f\u63f4\u4e8c\u8fdb\u5236\u901a\u8baf\u534f\u5b9a\uff0c\u4f46\u53ea\u6709\u7528.NET\u5b9e\u73b0\u7684\u8bbe\u5907\u624d\u652f\u63f4SOAP\u3002"),(0,o.kt)("h2",{id:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f"},"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f"),(0,o.kt)("p",null,"ThingsPanel\u5bf9\u63a5opc-ua\u8bbe\u5907\u3010\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u3011",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1G14y1a7iN/?spm_id_from=333.999.0.0"},"https://www.bilibili.com/video/BV1G14y1a7iN/?spm_id_from=333.999.0.0")),(0,o.kt)("h2",{id:"\u5176\u4ed6\u65b9\u5f0f"},"\u5176\u4ed6\u65b9\u5f0f"),(0,o.kt)("p",null,"\u9700\u8981\u5f00\u53d1\u63d2\u4ef6\u652f\u6301\uff0c\u6309\u7167ThingsPanel\u7684\u534f\u8bae\u63d2\u4ef6\u6807\u51c6\u8fdb\u884c\u5f00\u53d1\u3002"))}d.isMDXComponent=!0}}]);