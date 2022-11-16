"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5123],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>d});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),p=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,c=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return n?a.createElement(h,r(r({ref:e},m),{},{components:n})):a.createElement(h,r({ref:e},m))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9725:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:7},r="Automated alerting and control",l={unversionedId:"operation-manual/getting-started-with-example/automation-alert",id:"operation-manual/getting-started-with-example/automation-alert",title:"Automated alerting and control",description:"The platform supports automated alerting and automated control policies.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/operation-manual/getting-started-with-example/automation-alert.md",sourceDirName:"operation-manual/getting-started-with-example",slug:"/operation-manual/getting-started-with-example/automation-alert",permalink:"/en/docs/operation-manual/getting-started-with-example/automation-alert",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/operation-manual/getting-started-with-example/automation-alert.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"View visualizations",permalink:"/en/docs/operation-manual/getting-started-with-example/visualization"},next:{title:"\u7ec4\u6001\u529f\u80fd",permalink:"/en/docs/operation-manual/scada"}},c={},p=[{value:"Set the alarm policy",id:"set-the-alarm-policy",level:2},{value:"Set the control policy",id:"set-the-control-policy",level:2},{value:"View the alarm log and control log",id:"view-the-alarm-log-and-control-log",level:2}],m={toc:p};function s(t){let{components:e,...i}=t;return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"automated-alerting-and-control"},"Automated alerting and control"),(0,o.kt)("p",null,"The platform supports automated alerting and automated control policies."),(0,o.kt)("h2",{id:"set-the-alarm-policy"},"Set the alarm policy"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"After you create a business, the automation list also appears with columns for the corresponding business.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click",(0,o.kt)("inlineCode",{parentName:"li"},"Automation"),"the main menu to enter the automation list, find the corresponding business, and click the",(0,o.kt)("inlineCode",{parentName:"li"},"Alarm Policy"),"button in the Actions column to enter the alarm policy list."),(0,o.kt)("li",{parentName:"ul"},"Click the",(0,o.kt)("inlineCode",{parentName:"li"},"Add Alarm Policy"),"button to configure the policy pop-up window."),(0,o.kt)("li",{parentName:"ul"},"Fill in the rules of the alarm policy and select the alarm notification method.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Community Edition currently supports email notifications, which requires you to enable and configure the email service in the backend ./initialize/send_message/message.yml.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alarm policy",src:n(7381).Z,width:"1755",height:"861"})),(0,o.kt)("h2",{id:"set-the-control-policy"},"Set the control policy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the Business Row Actions column corresponding to the automation list, click",(0,o.kt)("inlineCode",{parentName:"li"},"Control Policy"),"to enter the control policy list."),(0,o.kt)("li",{parentName:"ul"},"Click the",(0,o.kt)("inlineCode",{parentName:"li"},"New Policy"),"button, and the Policy Configuration pop-up window appears."),(0,o.kt)("li",{parentName:"ul"},"Fill in the rule saving of the alarm policy.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Control policies",src:n(5475).Z,width:"1755",height:"861"})),(0,o.kt)("h2",{id:"view-the-alarm-log-and-control-log"},"View the alarm log and control log"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Trigger the alarm, the platform will record the alarm information, you can click",(0,o.kt)("inlineCode",{parentName:"li"},"alarm information"),"the main menu to filter to view the historical alarm information.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Alarm information",src:n(7622).Z,width:"1755",height:"861"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Trigger control or manually operate the device on the platform, and the platform records the control log, which can be viewed in the",(0,o.kt)("inlineCode",{parentName:"li"},"Device Log"),"submenu under",(0,o.kt)("inlineCode",{parentName:"li"},"System Log"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Device logs",src:n(8509).Z,width:"1755",height:"861"})))}s.isMDXComponent=!0},7381:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/automation-alert-1-66455a410678c4b4120ab7da6ccdcd89.jpeg"},5475:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/automation-alert-2-11b6c0661c004a369b2a4e897169ae07.jpeg"},7622:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/automation-alert-3-ee5d3d2b488d25be95ac8382a764a1e8.jpeg"},8509:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/automation-alert-4-3a28e413aa1b1a872772aa0822594997.jpeg"}}]);