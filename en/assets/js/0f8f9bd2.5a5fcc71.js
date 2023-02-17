"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2850],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(o,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="\u5feb\u901f\u5b89\u88c5\u5e76\u63a5\u5165\u8bbe\u5907",s={unversionedId:"quick_start/quick_start",id:"quick_start/quick_start",title:"\u5feb\u901f\u5b89\u88c5\u5e76\u63a5\u5165\u8bbe\u5907",description:"This section guides you to quickly install ThingsPanel and implement access to devices to view device data.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/quick_start/quick_start.md",sourceDirName:"quick_start",slug:"/quick_start/",permalink:"/en/docs/quick_start/",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/quick_start/quick_start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/en/docs/category/\u5feb\u901f\u5f00\u59cb"},next:{title:"\u7cfb\u7edf\u4ecb\u7ecd",permalink:"/en/docs/category/\u7cfb\u7edf\u4ecb\u7ecd"}},o={},p=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"Install ThingsPanel via Docker container",id:"install-thingspanel-via-docker-container",level:2},{value:"\u8bbe\u5907\u63a5\u5165\u4e0e\u67e5\u770b\u6570\u636e\u7684\u6b65\u9aa4",id:"\u8bbe\u5907\u63a5\u5165\u4e0e\u67e5\u770b\u6570\u636e\u7684\u6b65\u9aa4",level:2},{value:"30\u79d2\u63a5\u5165\u4e00\u4e2a\u6e29\u6e7f\u5ea6\u8bbe\u5907\u5e76\u67e5\u770b\u6570\u636e\u3010\u9002\u5408\u8001\u624b\u3011",id:"30\u79d2\u63a5\u5165\u4e00\u4e2a\u6e29\u6e7f\u5ea6\u8bbe\u5907\u5e76\u67e5\u770b\u6570\u636e\u9002\u5408\u8001\u624b",level:2},{value:"\u8be6\u7ec6\u6b65\u9aa4\u3010\u9002\u5408\u65b0\u624b\u3011",id:"\u8be6\u7ec6\u6b65\u9aa4\u9002\u5408\u65b0\u624b",level:2},{value:"\u521b\u5efa\u8bbe\u5907",id:"\u521b\u5efa\u8bbe\u5907",level:3},{value:"\u63a8\u9001\u6570\u636e",id:"\u63a8\u9001\u6570\u636e",level:3},{value:"\u67e5\u770b\u6570\u636e",id:"\u67e5\u770b\u6570\u636e",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5feb\u901f\u5b89\u88c5\u5e76\u63a5\u5165\u8bbe\u5907"},"\u5feb\u901f\u5b89\u88c5\u5e76\u63a5\u5165\u8bbe\u5907"),(0,r.kt)("p",null,"This section guides you to quickly install ThingsPanel and implement access to devices to view device data."),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u5148\u5b89\u88c5\u597dDocker\uff08",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/installation/"},"\u5b89\u88c5docker\u793e\u533a\u7248"),"\uff09"),(0,r.kt)("li",{parentName:"ul"},"DockerCompose\uff08",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"\u5b89\u88c5Docker Compose"),"\uff09"),(0,r.kt)("li",{parentName:"ul"},"Git"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528MQTT\u6a21\u62df\u5668\uff0c\u53ef\u4f7f\u7528MQTTbox\u3001MQTT X\u3001 MQTT.fx \uff0c\u6216\u8005\u4f7f\u7528\u8bbe\u5907\u63a8\u9001\u6570\u636e\u3002")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"./system-installation/docker_installation"},(0,r.kt)("inlineCode",{parentName:"a"},"Docker\u5b89\u88c5\u73af\u5883\u642d\u5efa")),"\u6848\u4f8b\u3002")),(0,r.kt)("h2",{id:"install-thingspanel-via-docker-container"},"Install ThingsPanel via Docker container"),(0,r.kt)("p",null,"Deploying with containment is the fastest way to build ThingsPanels."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="\u7b2c\u4e00\u6b65\u3001\u83b7\u53d6docker-compose\u6e90\u7801:" showLineNumbers',title:'"\u7b2c\u4e00\u6b65\u3001\u83b7\u53d6docker-compose\u6e90\u7801:"',showLineNumbers:!0},"git clone https://github.com/ThingsPanel/thingspanel-docker.git\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="\u7b2c\u4e8c\u6b65\u3001\u8fdb\u5165\u76ee\u5f55\u5e76\u542f\u52a8\u670d\u52a1:" showLineNumbers',title:'"\u7b2c\u4e8c\u6b65\u3001\u8fdb\u5165\u76ee\u5f55\u5e76\u542f\u52a8\u670d\u52a1:"',showLineNumbers:!0},"cd thingspanel-docker&&docker-compose -f docker-compose.yml up\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="\u7b2c\u4e09\u6b65\u3001\u767b\u5f55:" showLineNumbers',title:'"\u7b2c\u4e09\u6b65\u3001\u767b\u5f55:"',showLineNumbers:!0},"\u8f93\u5165\u7f51\u5740:\u670d\u52a1\u5668IP:8080\n\u8f93\u5165\u8d26\u6237:super@super.cn\n\u8f93\u5165\u5bc6\u7801:123456\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More detailed",(0,r.kt)("inlineCode",{parentName:"p"},"steps"),"please refer to",(0,r.kt)("a",{parentName:"p",href:"./system-installation/docker_installation"},(0,r.kt)("inlineCode",{parentName:"a"},"Docker Install")),".")),(0,r.kt)("h2",{id:"\u8bbe\u5907\u63a5\u5165\u4e0e\u67e5\u770b\u6570\u636e\u7684\u6b65\u9aa4"},"\u8bbe\u5907\u63a5\u5165\u4e0e\u67e5\u770b\u6570\u636e\u7684\u6b65\u9aa4"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u8bbe\u5907\uff1a\u9700\u8981\u6dfb\u52a0\u9879\u76ee\u3001\u5206\u7ec4\u3001\u8f93\u5165\u8bbe\u5907\u540d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u63a8\u9001\u6570\u636e\uff1a\u4f7f\u7528\u7cfb\u7edf\u63d0\u4f9b\u7684\u63a8\u9001\u53c2\u6570\u63a8\u9001\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6570\u636e\uff1a\u5728\u8bbe\u5907\u76d1\u63a7\u7684\u672a\u77e5\u3002"))),(0,r.kt)("h2",{id:"30\u79d2\u63a5\u5165\u4e00\u4e2a\u6e29\u6e7f\u5ea6\u8bbe\u5907\u5e76\u67e5\u770b\u6570\u636e\u9002\u5408\u8001\u624b"},"30\u79d2\u63a5\u5165\u4e00\u4e2a\u6e29\u6e7f\u5ea6\u8bbe\u5907\u5e76\u67e5\u770b\u6570\u636e\u3010\u9002\u5408\u8001\u624b\u3011"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"30\u79d2\u63a5\u5165\u4e00\u4e2a\u6e29\u6e7f\u5ea6\u8bbe\u5907\u5e76\u67e5\u770b\u6570\u636e",src:n(6635).Z,width:"1280",height:"720"})),(0,r.kt)("h2",{id:"\u8be6\u7ec6\u6b65\u9aa4\u9002\u5408\u65b0\u624b"},"\u8be6\u7ec6\u6b65\u9aa4\u3010\u9002\u5408\u65b0\u624b\u3011"),(0,r.kt)("h3",{id:"\u521b\u5efa\u8bbe\u5907"},"\u521b\u5efa\u8bbe\u5907"),(0,r.kt)("p",null,"1\u3001\u5728",(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u5907\u7ba1\u7406"),"\u83dc\u5355\u4e2d\uff0c\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u65b0\u5efa\u9879\u76ee"),"\u6309\u94ae\uff0c\u8f93\u5165",(0,r.kt)("strong",{parentName:"p"},"\u9879\u76ee\u540d\u79f0"),"\uff0c\u4f8b\u5982\u73af\u5883\u76d1\u6d4b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u521b\u5efa\u5206\u7ec4",src:n(8152).Z,width:"1427",height:"811"})," 2\u3001\u521b\u5efa\u8bbe\u5907\uff0c\u5e76\u8f93\u5165",(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u5907\u540d\u79f0"),"\u3001\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"\u5206\u7ec4"),"\u3001\u8bbe\u5b9a\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u5907"),"\uff08\u76f4\u8fde\u8bbe\u5907\uff09 ",(0,r.kt)("img",{alt:"\u521b\u5efa\u8bbe\u5907",src:n(3850).Z,width:"1061",height:"409"})," 3\u3001\u9009\u62e9",(0,r.kt)("a",{parentName:"p",href:"/en/docs/overview"},(0,r.kt)("inlineCode",{parentName:"a"},"\u8bbe\u5907\u63d2\u4ef6"))," ",(0,r.kt)("img",{alt:"\u9009\u62e9\u6e29\u6e7f\u5ea6\u63d2\u4ef6",src:n(9109).Z,width:"1431",height:"800"})),(0,r.kt)("p",null,"4\u3001\u83b7\u5f97",(0,r.kt)("strong",{parentName:"p"},"\u63a8\u9001\u53c2\u6570")," \u70b9\u51fb\u94fe\u63a5 ",(0,r.kt)("img",{alt:"\u67e5\u770b\u63a8\u9001\u53c2\u6570\u94fe\u63a5",src:n(7486).Z,width:"1047",height:"373"})," \u67e5\u770b\u8be6\u7ec6\u7684\u63a8\u9001\u53c2\u6570\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u5982\u4e0b\u53c2\u6570\u914d\u7f6e\u8bbe\u5907")," ",(0,r.kt)("img",{alt:"\u67e5\u770b\u8be6\u7ec6\u63a8\u9001\u53c2\u6570",src:n(3615).Z,width:"1498",height:"815"})),(0,r.kt)("h3",{id:"\u63a8\u9001\u6570\u636e"},"\u63a8\u9001\u6570\u636e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a8\u9001\u53c2\u6570\u8bf4\u660e"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AccessToken\uff1a\u4f5c\u4e3aMQTT\u7684\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},"mqtt\u670d\u52a1IP:1883\uff1a\u5982\u57df\u540d\u662fdev.thingspanel.cn\uff0c\u5219\u5728\u63a8\u9001\u6a21\u62df\u8f6f\u4ef6\u4e2d\u8f93\u5165dev.thingspanel.cn,\u7aef\u53e31883\uff08\u8bbe\u5907\u540c\u7406\uff09."),(0,r.kt)("li",{parentName:"ul"},"device/attributes\uff1a\u63a8\u9001\u6570\u636e\u6240\u4f7f\u7528\u7684\u4e3b\u9898")),(0,r.kt)("p",null,"\u793a\u8303\u62a5\u6587"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "temp": "\u6e29\u5ea6\u503c",\n    "humidity": "\u6e7f\u5ea6\u503c"\n}\n')),(0,r.kt)("p",null,"\u9700\u8981\u6539\u6210"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "temp": "28",\n    "humidity": "66"\n}\n')),(0,r.kt)("p",null,"\u610f\u4e3a\uff1a\u6e29\u5ea628\u5ea6\uff0c\u6e7f\u5ea666%\u3002",(0,r.kt)("strong",{parentName:"p"},"temp\u4e0ehumidity\u4e0d\u53ef\u66f4\u6539\uff01")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u8fde\u63a5")),(0,r.kt)("p",null,"\u914d\u7f6e\u597d\u7684\u754c\u9762\u5982\u56fe\uff0c\u5176\u5b83\u53ef\u4e0d\u586b\u5199\uff1a MQTT X\u8fde\u63a5\u914d\u7f6e ",(0,r.kt)("img",{alt:"MQTT X\u8fde\u63a5\u914d\u7f6e",src:n(9094).Z,width:"1018",height:"741"})),(0,r.kt)("p",null,"\u5982\u56fe\u914d\u7f6e\uff0c\u70b9\u51fb\u8fde\u63a5\u5373\u53ef\u6210\u529f\u8fde\u63a5MQTT\u670d\u52a1\u5668\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a8\u9001\u6570\u636e")),(0,r.kt)("p",null,"\u586b\u5199\u4e3b\u9898\u4e0e\u62a5\u6587\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u63a8\u9001\u6d88\u606f",src:n(1738).Z,width:"1020",height:"744"})),(0,r.kt)("h3",{id:"\u67e5\u770b\u6570\u636e"},"\u67e5\u770b\u6570\u636e"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u5907\u76d1\u63a7"),"\u83dc\u5355\u4e2d\uff0c\u70b9\u51fb\u67e5\u770b\u521a\u521a\u521b\u5efa\u7684",(0,r.kt)("strong",{parentName:"p"},"\u73af\u5883\u76d1\u6d4b"),"\u9879\u76ee ",(0,r.kt)("img",{alt:"\u67e5\u770b\u65b0\u521b\u5efa\u7684\u73af\u5883\u76d1\u63a7\u9879\u76ee\u8bbe\u5907\u76d1\u63a7",src:n(3488).Z,width:"1498",height:"812"})),(0,r.kt)("p",null,"\u70b9\u51fb\u540e\u51fa\u73b0\u4e0b\u56fe\uff0c\u53ef",(0,r.kt)("strong",{parentName:"p"},"\u67e5\u770b\u521a\u63a8\u9001\u7684\u8bbe\u5907\u6570\u636e")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u67e5\u770b\u65b0\u521b\u5efa\u7684\u73af\u5883\u76d1\u63a7\u9879\u76ee\u8bbe\u5907\u76d1\u63a7\u8be6\u60c5",src:n(6118).Z,width:"1504",height:"814"})),(0,r.kt)("p",null,"\u4e0e\u6b64\u540c\u65f6\u5728\u5982\u4e0b\u4e24\u4e2a\u83dc\u5355\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u67e5\u770b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d88\u606f\u4e0a\u6b21\u63a8\u9001\u7684\u65f6\u95f4\uff0c\u5728",(0,r.kt)("strong",{parentName:"li"},"\u8bbe\u5907\u7ba1\u7406"),"\u83dc\u5355\u4e2d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u521a\u521a\u63a8\u9001\u4e0a\u6765\u7684\u8be6\u7ec6\u6570\u636e\uff0c\u5728",(0,r.kt)("strong",{parentName:"li"},"\u6570\u636e\u7ba1\u7406"),"\u83dc\u5355\u4e2d")),(0,r.kt)("p",null,"\u5206\u522b\u5982\u56fe \u67e5\u770b\u521a\u521a\u63a8\u9001\u7684\u6570\u636e"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u67e5\u770b\u521a\u521a\u63a8\u9001\u7684\u6570\u636e",src:n(7521).Z,width:"1493",height:"650"})),(0,r.kt)("p",null,"\u67e5\u770b\u8bbe\u5907\u4e0a\u6b21\u63a8\u9001\u65f6\u95f4 ",(0,r.kt)("img",{alt:"\u67e5\u770b\u8bbe\u5907\u4e0a\u6b21\u63a8\u9001\u65f6\u95f4",src:n(2178).Z,width:"941",height:"288"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"mqtt\u5ba2\u6237\u7aef\u5de5\u5177\u63a8\u8350\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://file.bemfa.com/hw/zip/mqtt/mqttfx1.7.1_windows_64.exe"},(0,r.kt)("inlineCode",{parentName:"a"},"\u70b9\u51fb\u4e0b\u8f7dmqtt.fx\u5de5\u5177")),"  ",(0,r.kt)("a",{parentName:"p",href:"https://mqttx.app/"},(0,r.kt)("inlineCode",{parentName:"a"},"\u70b9\u51fb\u4e0b\u8f7dmqttx")),(0,r.kt)("br",{parentName:"p"}),"\n","\u5de5\u5177\u4f7f\u7528\u63a8\u8350\u53c2\u8003\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/1662831"},(0,r.kt)("inlineCode",{parentName:"a"},"\u70b9\u51fb\u6d4f\u89c8")))))}d.isMDXComponent=!0},6635:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/30s-35ee1fb8da73312105211e2c0e634fb1.gif"},3850:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/createdevice-bbdf1b7872ca8939d7c111d21db82dd5.png"},8152:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/creategroup-d2e7b7b6d26bc7984fd2f06e758bc29d.png"},7521:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/datalog-f6913e1ea1de2aa9a7250f86467c7a5a.png"},6118:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/devicemonitor-3ad67a5e617c19afd4044dbd87ab8f2b.png"},3488:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gomonitor-f55e87eba4e97f5c16ebdb34125f2af9.png"},7486:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gopushparameter-ae86a91cd1e09e013f8c34d1026be984.png"},2178:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lastpush-119f1e1710a01d9e976c2078267ae233.png"},9094:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mqttconnect-07edd9370e77d151d8b83a37a480416d.png"},1738:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pushmessage-ea9d2f4264762fb389e910b55c297799.png"},3615:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pushparameter-7592995493f095a3611a13a08590de53.png"},9109:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/selectplugin-2299ec0f7607a59743bb3bb1523cf32b.png"}}]);