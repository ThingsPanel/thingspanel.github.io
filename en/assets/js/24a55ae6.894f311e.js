"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=l,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:3},o="\u4f7f\u7528\u6e90\u7801\u5b89\u88c5\u542f\u52a8ThingsPanel",i={unversionedId:"system-installation/source_code.installation",id:"system-installation/source_code.installation",title:"\u4f7f\u7528\u6e90\u7801\u5b89\u88c5\u542f\u52a8ThingsPanel",description:"\u7cfb\u7edf\u73af\u5883",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/system-installation/source_code.installation.md",sourceDirName:"system-installation",slug:"/system-installation/source_code.installation",permalink:"/en/docs/system-installation/source_code.installation",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-installation/source_code.installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Docker installation",permalink:"/en/docs/system-installation/docker_installation"},next:{title:"Package installation",permalink:"/en/docs/system-installation/package_installation"}},s={},p=[{value:"\u7cfb\u7edf\u73af\u5883",id:"\u7cfb\u7edf\u73af\u5883",level:2},{value:"GMQTT\u5b89\u88c5\u542f\u52a8",id:"gmqtt\u5b89\u88c5\u542f\u52a8",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u76f4\u63a5\u8fd0\u884c\u670d\u52a1",id:"\u76f4\u63a5\u8fd0\u884c\u670d\u52a1",level:3},{value:"docker\u65b9\u5f0f\u8fd0\u884c\u670d\u52a1",id:"docker\u65b9\u5f0f\u8fd0\u884c\u670d\u52a1",level:3},{value:"ThingsPanel-Go\u5b89\u88c5\u542f\u52a8",id:"thingspanel-go\u5b89\u88c5\u542f\u52a8",level:2},{value:"\u76f8\u5173\u76ee\u5f55\u6587\u4ef6\u8bf4\u660e",id:"\u76f8\u5173\u76ee\u5f55\u6587\u4ef6\u8bf4\u660e",level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:3},{value:"ThingsPanel-Backend-Vue\u5b89\u88c5\u542f\u52a8",id:"thingspanel-backend-vue\u5b89\u88c5\u542f\u52a8",level:2},{value:"modbus-protocol-plugin\u5b89\u88c5\u542f\u52a8\uff08\u53ef\u9009-MODBUS\u534f\u8bae\u63d2\u4ef6\uff09",id:"modbus-protocol-plugin\u5b89\u88c5\u542f\u52a8\u53ef\u9009-modbus\u534f\u8bae\u63d2\u4ef6",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6-1",level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c-1",level:3},{value:"rule-engine\u5b89\u88c5\u542f\u52a8\uff08\u53ef\u9009-\u89c4\u5219\u5f15\u64ce\uff09",id:"rule-engine\u5b89\u88c5\u542f\u52a8\u53ef\u9009-\u89c4\u5219\u5f15\u64ce",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4f7f\u7528\u6e90\u7801\u5b89\u88c5\u542f\u52a8thingspanel"},"\u4f7f\u7528\u6e90\u7801\u5b89\u88c5\u542f\u52a8ThingsPanel"),(0,l.kt)("h2",{id:"\u7cfb\u7edf\u73af\u5883"},"\u7cfb\u7edf\u73af\u5883"),(0,l.kt)("p",null,"\u542f\u52a8ThingsPanel\u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u5b9a\u5df2\u7ecf\u5b89\u88c5\u597d\u4ee5\u4e0b\u73af\u5883:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"go 1.17.x ",(0,l.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"\u4e0b\u8f7d")," ",(0,l.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"\u5b89\u88c5")),(0,l.kt)("li",{parentName:"ol"},"redis 6 ",(0,l.kt)("a",{parentName:"li",href:"https://redis.io/docs/getting-started/installation/install-redis-from-source/"},"\u5b89\u88c5")),(0,l.kt)("li",{parentName:"ol"},"TimescaleDB 12 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.timescale.com/install/latest/installation-docker/"},"\u5b89\u88c5"))),(0,l.kt)("h2",{id:"gmqtt\u5b89\u88c5\u542f\u52a8"},"GMQTT\u5b89\u88c5\u542f\u52a8"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ThingsPanel/gmqtt"},"GMQTT\u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ol"},"Star\u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6e90\u4ee3\u7801,\u5efa\u8bae\u4f7f\u7528git clone\u4e0b\u8f7d\u6e90\u4ee3\u7801,\u6ce8\u610f\u4ee3\u7801\u5206\u652f,master\u4e3a\u6700\u65b0\u7684\u5f00\u53d1\u5206\u652f.Tags\u5217\u5bf9\u5e94\u5176\u4ed6\u7248\u672c.")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"./gmqtt/cmd/gmqttd/default_config.yml        --\u7cfb\u7edf\u914d\u7f6e \n")),(0,l.kt)("p",null,"./gmqtt/cmd/gmqttd/default_config.yml\u8bf4\u660e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'listeners:\n  - address: ":1883"   # \u63a5\u5165\u7aef\u53e3\napi:\n  http:\n    - address: "tcp://0.0.0.0:8083"  # http\u670d\u52a1\u914d\u7f6e\uff08ThingsPanel-GO\u8c03\u7528\uff0c\u4e3b\u8981\u7528\u6765\u7ba1\u7406\u63a5\u5165\u7684\u6743\u9650\uff09\nlog:\n  level: info # \u65e5\u5fd7\u7ea7\u522b debug | info | warn | error\n')),(0,l.kt)("h3",{id:"\u76f4\u63a5\u8fd0\u884c\u670d\u52a1"},"\u76f4\u63a5\u8fd0\u884c\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/ThingsPanel/gmqtt.git\n$ cd gmqtt/cmd/gmqttd\n$ go run . start -c default_config.yml\n")),(0,l.kt)("h3",{id:"docker\u65b9\u5f0f\u8fd0\u884c\u670d\u52a1"},"docker\u65b9\u5f0f\u8fd0\u884c\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/ThingsPanel/gmqtt.git\n$ cd gmqtt\n$ docker build -t gmqtt .\n$ docker run -p 1883:1883 -p 8883:8883 -p 8082:8082 -p 8083:8083  -p 8084:8084  gmqtt\n")),(0,l.kt)("h2",{id:"thingspanel-go\u5b89\u88c5\u542f\u52a8"},"ThingsPanel-Go\u5b89\u88c5\u542f\u52a8"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ThingsPanel/ThingsPanel-Go"},"ThingsPanel-Go\u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ol"},"Star\u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6e90\u4ee3\u7801,\u5efa\u8bae\u4f7f\u7528git clone\u4e0b\u8f7d\u6e90\u4ee3\u7801,\u6ce8\u610f\u4ee3\u7801\u5206\u652f,main\u4e3a\u6700\u65b0\u7684\u5f00\u53d1\u5206\u652f.Tags\u5217\u5bf9\u5e94\u5176\u4ed6\u7248\u672c.")),(0,l.kt)("h3",{id:"\u76f8\u5173\u76ee\u5f55\u6587\u4ef6\u8bf4\u660e"},"\u76f8\u5173\u76ee\u5f55\u6587\u4ef6\u8bf4\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"./conf/app.conf                  --\u7cfb\u7edf\u914d\u7f6e \n./modules/dataService/config.yml --mqtt\u5ba2\u6237\u7aef\u7b49\n./files/logs/                    --\u7cfb\u7edf\u65e5\u5fd7\u5b58\u653e\u76ee\u5f55\n./TP.sql                         --\u6570\u636e\u5e93\u521d\u59cb\u5316\u811a\u672c\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"./conf/app.conf\u914d\u7f6e\u8bf4\u660e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'httpport = 9999 # api\u670d\u52a1\u7aef\u53e3\n# redis\u914d\u7f6e\nredis.conn=127.0.0.1:6379\nredis.dbNum=0\nredis.password="redis2022"\n# \u6570\u636e\u5e93\u914d\u7f6e\npsqladdr = "127.0.0.1"\npsqlport = 5432\npsqldb = ThingsPanel # \u5e93\u540d\npsqluser = postgres # \u7528\u6237\u540d\npsqlpass = postgresThingsPanel2022 # \u7528\u6237\u5bc6\u7801\npsqlMaxConns = 5 # \u7a7a\u95f2\u8fde\u63a5\u6c60\u4e2d\u8fde\u63a5\u7684\u6700\u5927\u6570\u91cf\npsqlMaxOpen = 500 # \u6253\u5f00\u6570\u636e\u5e93\u8fde\u63a5\u7684\u6700\u5927\u6570\u91cf\n# \u65e5\u5fd7\nmaxdays = 60 # \u6587\u4ef6\u6700\u591a\u4fdd\u5b58\u591a\u5c11\u5929\n# 1-\u7d27\u6025\u7ea7\u522bLevelEmergency 2-\u62a5\u8b66\u7ea7\u522bLevelAlert 3-\u4e25\u91cd\u9519\u8bef\u7ea7\u522bLevelCritical 4-\u9519\u8bef\u7ea7\u522bLevelError\n# 5-\u8b66\u544a\u7ea7\u522bLevelWarning 6-\u6ce8\u610f\u7ea7\u522bLevelWarning 7-\u62a5\u544a\u7ea7\u522bLevelInformational 8-\u9664\u9519\u7ea7\u522bLevelDebug\nlevel = 8 # \u7cfb\u7edf\u65e5\u5fd7\u7ea7\u522b\nsqlloglevel = 3 # sql\u7684\u65e5\u5fd7\u7ea7\u522b 1-Silent 2-Error 3-Warn 4-Info\nmaxlines = 10000 # \u6bcf\u4e2a\u6587\u4ef6\u4fdd\u5b58\u7684\u6700\u5927\u884c\u6570\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"./modules/dataService/config.yml\u914d\u7f6e\u8bf4\u660e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"mqtt:\n  broker: 127.0.0.1:1883 #mqtt\u63a5\u5165\u5730\u5740\u548c\u7aef\u53e3\n  user: root # \u5e73\u53f0\u7684mqtt\u7528\u6237\u540d\n  pass: root # \u5e73\u53f0\u7684mqtt\u7528\u6237\u5bc6\u7801\n  topicToSubscribe: device/attributes # \u5e73\u53f0\u8ba2\u9605\u8bbe\u5907\u5c5e\u6027\u4e3b\u9898\n  topicToPublish: device/attributes # \u5e73\u53f0\u53d1\u5e03\u8bbe\u5907\u5c5e\u6027\u4e3b\u9898\u524d\u7f6e\n  topicToStatus: device/status # \u5e73\u53f0\u8ba2\u9605\u8bbe\u5907\u72b6\u6001\u4e3b\u9898\n  gateway_topic: gateway/attributes # \u5e73\u53f0\u8ba2\u9605\u7f51\u5173\u8bbe\u5907\u5c5e\u6027\u4e3b\u9898\napi:\n  http_host: 127.0.0.1:8083 # gmqttAPI\u670d\u52a1\u5730\u5740\uff08\u4e3b\u8981\u7528\u6765\u7ba1\u7406\u63a5\u5165\u7684\u6743\u9650\uff09\nplugin:\n  http_host: 127.0.0.1:503 # MODEBUS\u534f\u8bae\u63d2\u4ef6API\u670d\u52a1\u5730\u5740\n")),(0,l.kt)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,l.kt)("p",null,"GMQTT\u3001redis\u3001TimescaleDB\u9996\u5148\u542f\u52a8\uff0c\u66f4\u65b0ThingsPanel-Go\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/ThingsPanel/ThingsPanel-Go.git\n$ cd ThingsPanel-Go\n$ go run . start\n")),(0,l.kt)("h2",{id:"thingspanel-backend-vue\u5b89\u88c5\u542f\u52a8"},"ThingsPanel-Backend-Vue\u5b89\u88c5\u542f\u52a8"),(0,l.kt)("h2",{id:"modbus-protocol-plugin\u5b89\u88c5\u542f\u52a8\u53ef\u9009-modbus\u534f\u8bae\u63d2\u4ef6"},"modbus-protocol-plugin\u5b89\u88c5\u542f\u52a8\uff08\u53ef\u9009-MODBUS\u534f\u8bae\u63d2\u4ef6\uff09"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ThingsPanel/modbus-protocol-plugin"},"modbus-protocol-plugin\u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ol"},"Star\u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6e90\u4ee3\u7801,\u5efa\u8bae\u4f7f\u7528git clone\u4e0b\u8f7d\u6e90\u4ee3\u7801,\u6ce8\u610f\u4ee3\u7801\u5206\u652f,main\u4e3a\u6700\u65b0\u7684\u5f00\u53d1\u5206\u652f.Tags\u5217\u5bf9\u5e94\u5176\u4ed6\u7248\u672c.")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6-1"},"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"./config.yaml        --\u914d\u7f6e\u6587\u4ef6\n")),(0,l.kt)("p",null,"./config.yaml\u8bf4\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  address: 0.0.0.0:502 # \u8bbe\u5907\u63a5\u5165\u5730\u5740\nmqtt:\n  broker: 127.0.0.1:1883 # gmqtt\u670d\u52a1\u7aef\u5730\u5740\n  username: root\n  password: root\n  topic_to_publish: device/attributes # \u53d1\u9001\u4e3b\u9898\n  topic_to_subscribe: plugin/modbus/# # \u8ba2\u9605\u4e3b\u9898\n  subscribe_pool: 100 # \u5ba2\u6237\u7aef\u8ba2\u9605\u5904\u7406\u5e76\u53d1\u6570\u91cf\nhttp_server:\n  address: 0.0.0.0:503 # \u63d2\u4ef6http\u670d\u52a1\u5730\u5740\nthingspanel:\n  address: 127.0.0.1:9999 # ThingsPanel\u5e73\u53f0\u5730\u5740\n")),(0,l.kt)("h3",{id:"\u8fd0\u884c-1"},"\u8fd0\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/ThingsPanel/modbus-protocol-plugin.git\n$ cd modbus-protocol-plugin\n$ go run . start\n")),(0,l.kt)("h2",{id:"rule-engine\u5b89\u88c5\u542f\u52a8\u53ef\u9009-\u89c4\u5219\u5f15\u64ce"},"rule-engine\u5b89\u88c5\u542f\u52a8\uff08\u53ef\u9009-\u89c4\u5219\u5f15\u64ce\uff09"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5b89\u88c5\u624b\u518c\u82e5\u6709\u6ca1\u5e2e\u52a9\u5230\u60a8\u7684\u5730\u65b9\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"qq\u7fa4\uff1a260150504"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5176\u4ed6\u4fe1\u606f\u8bf7\u67e5\u9605",(0,l.kt)("a",{parentName:"p",href:"../system-introduction/code_repository"},(0,l.kt)("inlineCode",{parentName:"a"},"\u4ee3\u7801\u5e93")),"\u7684README\u5b89\u88c5\u6b65\u9aa4\u3002")))}u.isMDXComponent=!0}}]);