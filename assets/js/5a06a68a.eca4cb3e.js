"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},A=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,u=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(r),A=a,g=c["".concat(o,".").concat(A)]||c[A]||s[A]||u;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=r.length,i=new Array(u);i[0]=A;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<u;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}A.displayName="MDXCreateElement"},632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>u,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const u={sidebar_position:4},i="\u6570\u636e\u8f6c\u53d1",p={unversionedId:"operation-manual/rule-instance/data_forwarding",id:"operation-manual/rule-instance/data_forwarding",title:"\u6570\u636e\u8f6c\u53d1",description:"\u8bbe\u5907\u4f7f\u7528device/attributes\u6216gateway/attributes\u4e3b\u9898\u5c06\u5c5e\u6027\u4e0a\u62a5\u81f3\u5e73\u53f0\uff0c\u5728\u89c4\u5219\u5f15\u64ce\u4e2d\u53ef\u4ee5\u901a\u8fc7\u8ba2\u9605attributes/relaying/\u53ef\u83b7\u53d6\u8bbe\u5907\u4e0a\u62a5\u7684\u5c5e\u6027\uff08\u9700\u8981\u4f7f\u7528\u521b\u5efa\u8bbe\u5907\u65f6\u5019\u751f\u6210\u7684\u8ba4\u8bc1\u4fe1\u606f\u767b\u5f55mqtt\u5ba2\u6237\u7aef-\u4e0e\u8bbe\u5907\u767b\u5f55\u7684\u8ba4\u8bc1\u4e00\u81f4\uff09\uff0c\u7136\u540e\u5c06\u6570\u636e\u5904\u7406\u540e\u4ee5\u5404\u79cd\u65b9\u5f0f\u8f6c\u53d1\u51fa\u53bb\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/operation-manual/rule-instance/data_forwarding.md",sourceDirName:"operation-manual/rule-instance",slug:"/operation-manual/rule-instance/data_forwarding",permalink:"/docs/operation-manual/rule-instance/data_forwarding",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/operation-manual/rule-instance/data_forwarding.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Rule engine",permalink:"/docs/operation-manual/rule-instance/rule_instance"},next:{title:"\u5e94\u7528\u7ba1\u7406",permalink:"/docs/category/\u5e94\u7528\u7ba1\u7406"}},o={},l=[{value:"1. Description",id:"1-description",level:2},{value:"2. Procedure",id:"2-procedure",level:2},{value:"1). Create a forwarding rule",id:"1-create-a-forwarding-rule",level:3},{value:"2). Edit",id:"2-edit",level:3},{value:"3). Start/pause",id:"3-startpause",level:3}],d={toc:l},c="wrapper";function s(e){let{components:t,...u}=e;return(0,a.kt)(c,(0,n.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u636e\u8f6c\u53d1"},"\u6570\u636e\u8f6c\u53d1"),(0,a.kt)("p",null,"\u8bbe\u5907\u4f7f\u7528device/attributes\u6216gateway/attributes\u4e3b\u9898\u5c06\u5c5e\u6027\u4e0a\u62a5\u81f3\u5e73\u53f0\uff0c\u5728\u89c4\u5219\u5f15\u64ce\u4e2d\u53ef\u4ee5\u901a\u8fc7\u8ba2\u9605attributes/relaying/{AccessToken}\u53ef\u83b7\u53d6\u8bbe\u5907\u4e0a\u62a5\u7684\u5c5e\u6027\uff08\u9700\u8981\u4f7f\u7528\u521b\u5efa\u8bbe\u5907\u65f6\u5019\u751f\u6210\u7684\u8ba4\u8bc1\u4fe1\u606f\u767b\u5f55mqtt\u5ba2\u6237\u7aef-\u4e0e\u8bbe\u5907\u767b\u5f55\u7684\u8ba4\u8bc1\u4e00\u81f4\uff09\uff0c\u7136\u540e\u5c06\u6570\u636e\u5904\u7406\u540e\u4ee5\u5404\u79cd\u65b9\u5f0f\u8f6c\u53d1\u51fa\u53bb\u3002"),(0,a.kt)("h2",{id:"1-description"},"1. Description"),(0,a.kt)("p",null,"Based on a visual stream programming tool, data forwarding to devices can be implemented very easily."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(6850).Z,width:"1872",height:"924"})),(0,a.kt)("h2",{id:"2-procedure"},"2. Procedure"),(0,a.kt)("h3",{id:"1-create-a-forwarding-rule"},"1). Create a forwarding rule"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rule Engine")," -> ",(0,a.kt)("strong",{parentName:"p"},"Data Forwarding")," -> ",(0,a.kt)("strong",{parentName:"p"},"Create Forwarding Rule"),(0,a.kt)("br",{parentName:"p"}),"\n","Click the",(0,a.kt)("inlineCode",{parentName:"p"},"Create Forwarding Rule"),"button and fill in the custom rule name."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:r(6743).Z,width:"574",height:"213"})),(0,a.kt)("h3",{id:"2-edit"},"2). Edit"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rule Engine")," -> ",(0,a.kt)("strong",{parentName:"p"},"Data Forwarding")," -> ",(0,a.kt)("strong",{parentName:"p"},"Edit"),(0,a.kt)("br",{parentName:"p"}),"\n","Once the rule is created, you can click the",(0,a.kt)("inlineCode",{parentName:"p"},"Edit"),"button to enter the visual flow programming tool and edit the node.",(0,a.kt)("br",{parentName:"p"}),"\n","Details of how the streaming programming tool works can be found in\uff1a ",(0,a.kt)("a",{parentName:"p",href:"./rule_instance"},(0,a.kt)("inlineCode",{parentName:"a"},"rules engine"))," like graph\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:r(8062).Z,width:"979",height:"677"})),(0,a.kt)("p",null,"Once you're done editing, don't forget to click",(0,a.kt)("inlineCode",{parentName:"p"},"Save and run the"),", otherwise the rule won't take effect."),(0,a.kt)("h3",{id:"3-startpause"},"3). Start/pause"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rule Engine")," -> ",(0,a.kt)("strong",{parentName:"p"},"Data Forwarding")," -> ",(0,a.kt)("strong",{parentName:"p"},"Launch"),"/",(0,a.kt)("strong",{parentName:"p"},"Pause"),(0,a.kt)("br",{parentName:"p"}),"\n","When we edit a rule in the stream programming tool and save it, we can do it directly in ThingsPanel",(0,a.kt)("inlineCode",{parentName:"p"},"start the"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Pause"),", you no longer need to open the streaming programming tool."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img.png",src:r(9316).Z,width:"303",height:"57"})))}s.isMDXComponent=!0},6850:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/access_engine_01_01-ea71c7ba1fb539360b22a8c9ca7e73ec.png"},6743:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"},8062:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/access_engine_02_02-f3ecd9a0bb90e5d8f61486b20a2751c1.png"},9316:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);