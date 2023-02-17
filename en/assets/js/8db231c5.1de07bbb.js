"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o="The basics",s={unversionedId:"operation-manual/rule-instance/rule_based",id:"operation-manual/rule-instance/rule_based",title:"The basics",description:"1. Overview",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/operation-manual/rule-instance/rule_based.md",sourceDirName:"operation-manual/rule-instance",slug:"/operation-manual/rule-instance/rule_based",permalink:"/en/docs/operation-manual/rule-instance/rule_based",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/operation-manual/rule-instance/rule_based.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u89c4\u5219\u5f15\u64ce",permalink:"/en/docs/category/\u89c4\u5219\u5f15\u64ce"},next:{title:"Rule engine",permalink:"/en/docs/operation-manual/rule-instance/rule_instance"}},l={},c=[{value:"1. Overview",id:"1-overview",level:2},{value:"What is the rules engine?",id:"what-is-the-rules-engine",level:4},{value:"2. Application scenarios",id:"2-application-scenarios",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-basics"},"The basics"),(0,a.kt)("h2",{id:"1-overview"},"1. Overview"),(0,a.kt)("h4",{id:"what-is-the-rules-engine"},"What is the rules engine?"),(0,a.kt)("p",null,"The rules engine is an extremely important functional module of the IoT platform, which is the engine that handles complex logic, which processes and passes messages between the device and the IoT platform according to the conditions set by the user."),(0,a.kt)("h2",{id:"2-application-scenarios"},"2. Application scenarios"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The original message reported on the device is processed and transformed, and the data required by the server is generated and stored in the database."),(0,a.kt)("li",{parentName:"ul"},"Forward the properties reported on the device to a third-party server."),(0,a.kt)("li",{parentName:"ul"},"When a device reports a property that meets a certain condition, issue a command to another device.")))}d.isMDXComponent=!0}}]);