"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(g,o(o({ref:t},s),{},{components:n})):i.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},o="Create a device",l={unversionedId:"operation-manual/getting-started-with-example/create-device",id:"operation-manual/getting-started-with-example/create-device",title:"Create a device",description:"This section shows you how to add a device from zero.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/operation-manual/getting-started-with-example/create-device.md",sourceDirName:"operation-manual/getting-started-with-example",slug:"/operation-manual/getting-started-with-example/create-device",permalink:"/en/docs/operation-manual/getting-started-with-example/create-device",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/operation-manual/getting-started-with-example/create-device.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Preparations",permalink:"/en/docs/operation-manual/getting-started-with-example/perequisites"},next:{title:"Push data",permalink:"/en/docs/operation-manual/getting-started-with-example/pushdata"}},c={},d=[{value:"New business",id:"new-business",level:2},{value:"Added device grouping",id:"added-device-grouping",level:2},{value:"Add a new device",id:"add-a-new-device",level:2},{value:"Fill in the properties of the device",id:"fill-in-the-properties-of-the-device",level:2}],s={toc:d};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-device"},"Create a device"),(0,a.kt)("p",null,"This section shows you how to add a device from zero."),(0,a.kt)("h2",{id:"new-business"},"New business"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Devices depend on device grouping, and device grouping depends on business, so you need to create business and device grouping before creating a device.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Business ->New business\uff1a"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select the",(0,a.kt)("inlineCode",{parentName:"li"},"Business"),"main menu, click the",(0,a.kt)("inlineCode",{parentName:"li"},"New Business"),"button, enter the business name point",(0,a.kt)("inlineCode",{parentName:"li"},"Save"),"button to add a new business.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"New business",src:n(2842).Z,width:"1755",height:"861"})),(0,a.kt)("h2",{id:"added-device-grouping"},"Added device grouping"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Business->Device Management ->Management Grouping ->Add\uff1a"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the",(0,a.kt)("inlineCode",{parentName:"li"},"Device Management"),"button in the business operation bar to enter the device list page of the business."),(0,a.kt)("li",{parentName:"ul"},"Device groups need to be grouped before you can create a build. Click the top of the list to",(0,a.kt)("inlineCode",{parentName:"li"},"Manage Groups"),"button to eject the dialog."),(0,a.kt)("li",{parentName:"ul"},"On the Manage Device Grouping dialog box, click the",(0,a.kt)("inlineCode",{parentName:"li"},"Add"),"button, enter the group name to close the dialog box to create a group.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can add",(0,a.kt)("inlineCode",{parentName:"p"},"subgroups to device groupings"),", and subgroups are also allowed under subgroups.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a device grouping",src:n(3990).Z,width:"1755",height:"861"})),(0,a.kt)("h2",{id:"add-a-new-device"},"Add a new device"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Business->Device Management ->Create a device\uff1a"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Back on the device management page, click the",(0,a.kt)("inlineCode",{parentName:"li"},"Create Device"),"button, fill in the device name according to the prompts, select the device group, and select the device plug-in to create the device.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create a device",src:n(4034).Z,width:"1755",height:"861"})),(0,a.kt)("h2",{id:"fill-in-the-properties-of-the-device"},"Fill in the properties of the device"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"After creating the device, we also need to fill in the basic properties of the device to dock the device.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the Device",(0,a.kt)("inlineCode",{parentName:"li"},"Push Parameters"),"Column",(0,a.kt)("inlineCode",{parentName:"li"},"edit parameters"),"tab to bring up the Edit Parameters dialog box."),(0,a.kt)("li",{parentName:"ul"},"Select the device's protocol and continue entering the rest when prompted, the device needs to push data as prompted in the default configuration box.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Push parameters",src:n(7405).Z,width:"1755",height:"861"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Then click the",(0,a.kt)("inlineCode",{parentName:"li"},"Edit Docking"),"tab in the",(0,a.kt)("inlineCode",{parentName:"li"},"Data Docking"),"column, pop up the Edit Docking dialog box, and click New to fill in the device-side field name corresponding to the preset value of the plug-in.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Data docking",src:n(3364).Z,width:"1755",height:"861"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"At this point, the device has been created, and you can use the mqtt or socket tool to simulate the push message test according to the prompts in the protocol default configuration box.")))}p.isMDXComponent=!0},2842:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-device-1-f73e77ba376b611ee8a53841075f9d8e.jpeg"},3990:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-device-2-41593b4e7f21afff7e4a9448cc577936.jpeg"},4034:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-device-3-80d851f12f28c06657099a4ead997964.jpeg"},7405:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-device-4-8cd9bb6235ed2c2154419ea28c6b5358.jpeg"},3364:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-device-5-f44722f58a871c974d7ab453fdc46d0b.jpeg"}}]);