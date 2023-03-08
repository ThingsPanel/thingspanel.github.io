"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Temperature and humidity collection and alarm",l={unversionedId:"operation-manual/getting-started-with-example/example",id:"operation-manual/getting-started-with-example/example",title:"Temperature and humidity collection and alarm",description:"In this example we will implement the following points\uff1a",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/operation-manual/getting-started-with-example/example.md",sourceDirName:"operation-manual/getting-started-with-example",slug:"/operation-manual/getting-started-with-example/example",permalink:"/docs/operation-manual/getting-started-with-example/example",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/operation-manual/getting-started-with-example/example.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u5feb\u901f\u4e0a\u624b(\u65e7)",permalink:"/docs/category/\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u5feb\u901f\u4e0a\u624b\u65e7"},next:{title:"Preparations",permalink:"/docs/operation-manual/getting-started-with-example/perequisites"}},p={},u=[],c={toc:u},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"temperature-and-humidity-collection-and-alarm"},"Temperature and humidity collection and alarm"),(0,a.kt)("p",null,"In this example we will implement the following points\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Configure the industrial gateway to collect Modbus temperature and humidity data via RS485 and connect an audible and visual alarm."),(0,a.kt)("li",{parentName:"ul"},"Push data to ThingsPanel's MQTT gateway."),(0,a.kt)("li",{parentName:"ul"},"Add devices and get data"),(0,a.kt)("li",{parentName:"ul"},"Add a configuration visualization"),(0,a.kt)("li",{parentName:"ul"},"Manually control the sound and light alarm alarm."),(0,a.kt)("li",{parentName:"ul"},"Configure temperature alarms over 30\xb0.")))}s.isMDXComponent=!0}}]);