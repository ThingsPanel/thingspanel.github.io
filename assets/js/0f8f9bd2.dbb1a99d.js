"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2850],{3087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=t(5893),s=t(1151);const a={sidebar_position:1},c="Quickly install and connect devices.",d={id:"quick_start/quick_start",title:"Quickly install and connect devices.",description:"This section guides you to quickly install ThingsPanel and implement access to devices to view device data.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/quick_start/quick_start.md",sourceDirName:"quick_start",slug:"/quick_start/",permalink:"/docs/quick_start/",draft:!1,unlisted:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/quick_start/quick_start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/category/\u5feb\u901f\u5f00\u59cb"},next:{title:"Tutorials",permalink:"/docs/quick_start/step-by-step-guide"}},r={},l=[{value:"Prequisites",id:"prequisites",level:2},{value:"Install ThingsPanel via Docker container",id:"install-thingspanel-via-docker-container",level:2},{value:"Steps",id:"steps",level:2},{value:"Connect a temperature and humidity device and view data in 30 seconds [suitable for experts]",id:"connect-a-temperature-and-humidity-device-and-view-data-in-30-seconds-suitable-for-experts",level:2},{value:"Detailed steps for newer",id:"detailed-steps-for-newer",level:2},{value:"Create Device",id:"create-device",level:3},{value:"Pushing data",id:"pushing-data",level:3},{value:"View Data",id:"view-data",level:3}];function o(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"quickly-install-and-connect-devices",children:"Quickly install and connect devices."}),"\n",(0,i.jsx)(n.p,{children:"This section guides you to quickly install ThingsPanel and implement access to devices to view device data."}),"\n",(0,i.jsx)(n.h2,{id:"prequisites",children:"Prequisites"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Docker needs to be installed first (",(0,i.jsx)(n.a,{href:"https://docs.docker.com/engine/installation/",children:"to install docker community version"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["DockerCompose(",(0,i.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Install Docker Compose"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Git"}),"\n",(0,i.jsx)(n.li,{children:"Use the MQTTT Simulator to use MQTTbox, MQTT X, MQTT.fx or use device to push data."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["More detailed",(0,i.jsx)(n.code,{children:"steps"}),"please refer to",(0,i.jsx)(n.a,{href:"./system-installation/docker_installation",children:(0,i.jsx)(n.code,{children:"Docker Install"})}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"install-thingspanel-via-docker-container",children:"Install ThingsPanel via Docker container"}),"\n",(0,i.jsx)(n.p,{children:"Deploying with containment is the fastest way to build ThingsPanels."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="\u7b2c\u4e00\u6b65\u3001\u83b7\u53d6docker-compose\u6e90\u7801:" showLineNumbers',children:"git clone https://github.com/ThingsPanel/thingspanel-docker.git\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="\u7b2c\u4e8c\u6b65\u3001\u8fdb\u5165\u76ee\u5f55\u5e76\u542f\u52a8\u670d\u52a1:" showLineNumbers',children:"cd thingspanel-docker&&docker-compose -f docker-compose.yml up\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",metastring:'title="\u7b2c\u4e09\u6b65\u3001\u767b\u5f55:" showLineNumbers',children:"\u8f93\u5165\u7f51\u5740:\u670d\u52a1\u5668IP:8080\n\u7cfb\u7edf\u7ba1\u7406\u5458\uff1asuper@super.cn / 123456\n\u79df\u6237\u7ba1\u7406\u5458\uff1atenant@tenant.cn / 123456\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["More detailed",(0,i.jsx)(n.code,{children:"steps"}),"please refer to",(0,i.jsx)(n.a,{href:"./system-installation/docker_installation",children:(0,i.jsx)(n.code,{children:"Docker Install"})}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add device\uff1ato add item, group, input device name."}),"\n",(0,i.jsx)(n.li,{children:"Pushing data\uff1auses a push parameter provided by the system."}),"\n",(0,i.jsx)(n.li,{children:"View data\uff1aat the location monitored by the device."}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"connect-a-temperature-and-humidity-device-and-view-data-in-30-seconds-suitable-for-experts",children:"Connect a temperature and humidity device and view data in 30 seconds [suitable for experts]"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"30\u79d2\u63a5\u5165\u4e00\u4e2a\u6e29\u6e7f\u5ea6\u8bbe\u5907\u5e76\u67e5\u770b\u6570\u636e",src:t(6635).Z+"",width:"1280",height:"720"})}),"\n",(0,i.jsx)(n.h2,{id:"detailed-steps-for-newer",children:"Detailed steps for newer"}),"\n",(0,i.jsx)(n.h3,{id:"create-device",children:"Create Device"}),"\n",(0,i.jsxs)(n.p,{children:["1, in the** Device Admin ** menu, click the ",(0,i.jsx)(n.strong,{children:"new project"})," button, enter ",(0,i.jsx)(n.strong,{children:"project name"}),", e. g. environmental monitoring."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"\u521b\u5efa\u5206\u7ec4",src:t(8152).Z+"",width:"1427",height:"811"})," 2, create, and enter** device name**, select** group**, set to** device**(direct device) ",(0,i.jsx)(n.img,{alt:"\u521b\u5efa\u8bbe\u5907",src:t(3850).Z+"",width:"1061",height:"409"})," 3, select ",(0,i.jsx)(n.a,{href:"/docs/overview",children:(0,i.jsx)(n.code,{children:" device plugins"})})," ",(0,i.jsx)(n.img,{alt:"\u9009\u62e9\u6e29\u6e7f\u5ea6\u63d2\u4ef6",src:t(9109).Z+"",width:"1431",height:"800"})]}),"\n",(0,i.jsxs)(n.p,{children:["4, get** push parameters** click on link ",(0,i.jsx)(n.img,{alt:"\u67e5\u770b\u63a8\u9001\u53c2\u6570\u94fe\u63a5",src:t(7486).Z+"",width:"1047",height:"373"})," view detailed push parameters,** use the following parameters to configure the device** ",(0,i.jsx)(n.img,{alt:"\u67e5\u770b\u8be6\u7ec6\u63a8\u9001\u53c2\u6570",src:t(3615).Z+"",width:"1498",height:"815"})]}),"\n",(0,i.jsx)(n.h3,{id:"pushing-data",children:"Pushing data"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Push Parameter Instructions"}),"\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Access Token\uff1aas the username for MQTT"}),"\n",(0,i.jsx)(n.li,{children:"mqtt's service Ip:1883\uff1aif the domain name is dev.thingspanel.cn, enter dev.thingspanel.cn, port 1883 (device equivalent) in the Push Model."}),"\n",(0,i.jsx)(n.li,{children:"device/attributes\uff1aTopic to push data"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Message format."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "temp": "Temperature",\n    "humidity": "humidity"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Change required"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n    "temp": "28",\n    "humidity": "66"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Referred to\uff1atemperatures of 28 degrees, 66% humidity.",(0,i.jsx)(n.strong,{children:"temp and humidity cannot be changed!"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Configure Connection"})}),"\n",(0,i.jsxs)(n.p,{children:["After configuration is complete, see the figure below. Other fields can be left blank.\uff1a MQTT X connection configuration ",(0,i.jsx)(n.img,{alt:"MQTT X\u8fde\u63a5\u914d\u7f6e",src:t(9094).Z+"",width:"1018",height:"741"})]}),"\n",(0,i.jsx)(n.p,{children:"When configured, tap to connect to the Mqtt server successfully."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Pushing data"})}),"\n",(0,i.jsx)(n.p,{children:"Fill in topics and messages."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u63a8\u9001\u6d88\u606f",src:t(1738).Z+"",width:"1020",height:"744"})}),"\n",(0,i.jsx)(n.h3,{id:"view-data",children:"View Data"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.strong,{children:"Device Monitoring"})," menu, click to view the newly created ** environmental monitoring project** ",(0,i.jsx)(n.img,{alt:"\u67e5\u770b\u65b0\u521b\u5efa\u7684\u73af\u5883\u76d1\u63a7\u9879\u76ee\u8bbe\u5907\u76d1\u63a7",src:t(3488).Z+"",width:"1498",height:"812"})]}),"\n",(0,i.jsxs)(n.p,{children:["Click to show the following graph, you can",(0,i.jsx)(n.strong,{children:"to view the device data just pushed"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u67e5\u770b\u65b0\u521b\u5efa\u7684\u73af\u5883\u76d1\u63a7\u9879\u76ee\u8bbe\u5907\u76d1\u63a7\u8be6\u60c5",src:t(6118).Z+"",width:"1504",height:"814"})}),"\n",(0,i.jsx)(n.p,{children:"You can also view it in the following two menus:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Time when the message was last pushed in the** Device Admin** menu."}),"\n",(0,i.jsx)(n.li,{children:"Detailed data just pushed up in** Data management**"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"View just pushed data separately for graph"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u67e5\u770b\u521a\u521a\u63a8\u9001\u7684\u6570\u636e",src:t(7521).Z+"",width:"1493",height:"650"})}),"\n",(0,i.jsxs)(n.p,{children:["View last push time for device ",(0,i.jsx)(n.img,{alt:"\u67e5\u770b\u8bbe\u5907\u4e0a\u6b21\u63a8\u9001\u65f6\u95f4",src:t(2178).Z+"",width:"941",height:"288"})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["mqtt client tool recommended\uff1a",(0,i.jsx)(n.a,{href:"https://file.bemfa.com/hw/zip/mqtt/mqttfx1.7.1_windows_64.exe",children:(0,i.jsx)(n.code,{children:"Download mqtt.fx tool"})}),"  ",(0,i.jsx)(n.a,{href:"https://mqttx.app/",children:(0,i.jsx)(n.code,{children:"Download mqttx"})}),(0,i.jsx)(n.br,{}),"\n","Use Recommended Reference Documentation\uff1a",(0,i.jsx)(n.a,{href:"https://cloud.tencent.com/developer/article/1662831",children:(0,i.jsx)(n.code,{children:"Click Browse"})})]})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},6635:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/30s-35ee1fb8da73312105211e2c0e634fb1.gif"},3850:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/createdevice-bbdf1b7872ca8939d7c111d21db82dd5.png"},8152:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/creategroup-d2e7b7b6d26bc7984fd2f06e758bc29d.png"},7521:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/datalog-f6913e1ea1de2aa9a7250f86467c7a5a.png"},6118:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/devicemonitor-3ad67a5e617c19afd4044dbd87ab8f2b.png"},3488:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/gomonitor-f55e87eba4e97f5c16ebdb34125f2af9.png"},7486:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/gopushparameter-ae86a91cd1e09e013f8c34d1026be984.png"},2178:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/lastpush-119f1e1710a01d9e976c2078267ae233.png"},9094:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/mqttconnect-07edd9370e77d151d8b83a37a480416d.png"},1738:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/pushmessage-ea9d2f4264762fb389e910b55c297799.png"},3615:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/pushparameter-7592995493f095a3611a13a08590de53.png"},9109:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/selectplugin-2299ec0f7607a59743bb3bb1523cf32b.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var i=t(7294);const s={},a=i.createContext(s);function c(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);