"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:7},a="Performance optimization",s={unversionedId:"system-installation/optimization",id:"system-installation/optimization",title:"Performance optimization",description:"Performance optimization tuning.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/system-installation/optimization.md",sourceDirName:"system-installation",slug:"/system-installation/optimization",permalink:"/en/docs/system-installation/optimization",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-installation/optimization.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Cluster deployment",permalink:"/en/docs/system-installation/cluster_deploy"},next:{title:"\u64cd\u4f5c\u624b\u518c",permalink:"/en/docs/category/\u64cd\u4f5c\u624b\u518c"}},l={},p=[{value:"Database tuning",id:"database-tuning",level:2},{value:"App tuning",id:"app-tuning",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(u,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"performance-optimization"},"Performance optimization"),(0,i.kt)("p",null,"Performance optimization tuning."),(0,i.kt)("h2",{id:"database-tuning"},"Database tuning"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can refer to the following methods, and the specific situation needs to be adjusted according to the test.")),(0,i.kt)("p",null,"Based on",(0,i.kt)("a",{parentName:"p",href:"https://pgtune.leopard.in.ua/"},(0,i.kt)("strong",{parentName:"a"},(0,i.kt)("inlineCode",{parentName:"strong"},"online tool"))),"fill in your hardware arguments to generate your reference configuration. ",(0,i.kt)("img",{alt:"Push parameters",src:n(9983).Z,width:"1755",height:"861"})),(0,i.kt)("h2",{id:"app-tuning"},"App tuning"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Increase the syslog level and reboot the system",(0,i.kt)("inlineCode",{parentName:"li"},"./conf/app.conf"),",on the backend")))}m.isMDXComponent=!0},9983:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/optimization-1-82953b67d8e2db0fff6940089e5dbbc7.jpeg"}}]);