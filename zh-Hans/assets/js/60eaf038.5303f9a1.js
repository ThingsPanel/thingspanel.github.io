"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),u=l,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:3},i="\u6e90\u7801\u5b89\u88c5",o={unversionedId:"system-installation/source_code.installation",id:"system-installation/source_code.installation",title:"\u6e90\u7801\u5b89\u88c5",description:"\u7cfb\u7edf\u73af\u5883",source:"@site/docs/system-installation/source_code.installation.md",sourceDirName:"system-installation",slug:"/system-installation/source_code.installation",permalink:"/zh-Hans/docs/system-installation/source_code.installation",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-installation/source_code.installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Docker\u5b89\u88c5",permalink:"/zh-Hans/docs/system-installation/docker_installation"},next:{title:"\u6811\u8393\u6d3e\u6e90\u7801\u5b89\u88c5",permalink:"/zh-Hans/docs/system-installation/raspberry_installation"}},s={},p=[{value:"\u7cfb\u7edf\u73af\u5883",id:"\u7cfb\u7edf\u73af\u5883",level:2},{value:"(\u53ef\u53c2\u8003)timescaledb\u6570\u636e\u5e93\u642d\u5efa",id:"\u53ef\u53c2\u8003timescaledb\u6570\u636e\u5e93\u642d\u5efa",level:3},{value:"GMQTT\u5b89\u88c5\u542f\u52a8",id:"gmqtt\u5b89\u88c5\u542f\u52a8",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u76f4\u63a5\u8fd0\u884c\u670d\u52a1",id:"\u76f4\u63a5\u8fd0\u884c\u670d\u52a1",level:3},{value:"docker\u65b9\u5f0f\u8fd0\u884c\u670d\u52a1",id:"docker\u65b9\u5f0f\u8fd0\u884c\u670d\u52a1",level:3},{value:"ThingsPanel-Go\u5b89\u88c5\u542f\u52a8",id:"thingspanel-go\u5b89\u88c5\u542f\u52a8",level:2},{value:"\u76f8\u5173\u76ee\u5f55\u6587\u4ef6\u8bf4\u660e",id:"\u76f8\u5173\u76ee\u5f55\u6587\u4ef6\u8bf4\u660e",level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c",level:3},{value:"ThingsPanel-Backend-Vue\u5b89\u88c5\u6253\u5305",id:"thingspanel-backend-vue\u5b89\u88c5\u6253\u5305",level:2},{value:"\u5b89\u88c5node.js 16.13\uff08\u5982\u679c\u8981\u5728\u670d\u52a1\u5668\u6253\u5305\u524d\u7aef\u9700\u8981\u5b89\u88c5node.js\uff09",id:"\u5b89\u88c5nodejs-1613\u5982\u679c\u8981\u5728\u670d\u52a1\u5668\u6253\u5305\u524d\u7aef\u9700\u8981\u5b89\u88c5nodejs",level:3},{value:"\u524d\u7aef\u6e90\u7801\u6253\u5305",id:"\u524d\u7aef\u6e90\u7801\u6253\u5305",level:3},{value:"visual-editor\u5b89\u88c5\u6253\u5305\uff08\u53ef\u89c6\u5316\uff09",id:"visual-editor\u5b89\u88c5\u6253\u5305\u53ef\u89c6\u5316",level:2},{value:"\u5b89\u88c5pnpm",id:"\u5b89\u88c5pnpm",level:3},{value:"\u53ef\u89c6\u5316\u6e90\u7801\u6253\u5305",id:"\u53ef\u89c6\u5316\u6e90\u7801\u6253\u5305",level:3},{value:"modbus-protocol-plugin\u5b89\u88c5\u542f\u52a8\uff08\u53ef\u9009-MODBUS\u534f\u8bae\u63d2\u4ef6\uff09",id:"modbus-protocol-plugin\u5b89\u88c5\u542f\u52a8\u53ef\u9009-modbus\u534f\u8bae\u63d2\u4ef6",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6-1",level:3},{value:"\u8fd0\u884c",id:"\u8fd0\u884c-1",level:3},{value:"rule-engine\u5b89\u88c5\u542f\u52a8\uff08\u53ef\u9009-\u89c4\u5219\u5f15\u64ce\uff09",id:"rule-engine\u5b89\u88c5\u542f\u52a8\u53ef\u9009-\u89c4\u5219\u5f15\u64ce",level:2},{value:"\u524d\u7aef\u90e8\u7f72",id:"\u524d\u7aef\u90e8\u7f72",level:2},{value:"\u5b89\u88c5nginx",id:"\u5b89\u88c5nginx",level:3},{value:"nginx\u914d\u7f6e",id:"nginx\u914d\u7f6e",level:3},{value:"\u91cd\u542fnginx",id:"\u91cd\u542fnginx",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6e90\u7801\u5b89\u88c5"},"\u6e90\u7801\u5b89\u88c5"),(0,l.kt)("h2",{id:"\u7cfb\u7edf\u73af\u5883"},"\u7cfb\u7edf\u73af\u5883"),(0,l.kt)("p",null,"\u542f\u52a8ThingsPanel\u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u5b9a\u5df2\u7ecf\u5b89\u88c5\u597d\u4ee5\u4e0b\u73af\u5883:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"go 1.18.x ",(0,l.kt)("a",{parentName:"li",href:"https://go.dev/dl/"},"\u4e0b\u8f7d")," ",(0,l.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"\u5b89\u88c5")),(0,l.kt)("li",{parentName:"ol"},"\uff08\u6570\u636e\u5e93\u4f7f\u7528docker\u7b80\u5316\u5b89\u88c5\u6b65\u9aa4\uff09\u5b89\u88c5Docker\uff08",(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"\u5b89\u88c5docker\u793e\u533a\u7248"),"\uff09"),(0,l.kt)("li",{parentName:"ol"},"redis 6 ",(0,l.kt)("a",{parentName:"li",href:"https://redis.io/docs/getting-started/installation/install-redis-from-source/"},"\u5b89\u88c5"),"\n\u53ef\u53c2\u8003docker\u5b89\u88c5(\u5982\u679c\u6ca1\u6709/home/tp/backend/redis/\u76ee\u5f55\u4f1a\u81ea\u52a8\u521b\u5efa)\uff1a",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --name tp-redis \\\n-v /home/tp/backend/redis/data:/data \\\n-v /home/tp/backend/redis/conf/redis.conf:/usr/local/etc/redis/redis.conf \\\n-v /home/tp/backend/redis/logs:/logs \\\n-d -p 6379:6379 redis redis-server --requirepass redis2022\n"))),(0,l.kt)("li",{parentName:"ol"},"TimescaleDB 12 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.timescale.com/install/latest/installation-docker/"},"\u5b89\u88c5"))),(0,l.kt)("h3",{id:"\u53ef\u53c2\u8003timescaledb\u6570\u636e\u5e93\u642d\u5efa"},"(\u53ef\u53c2\u8003)timescaledb\u6570\u636e\u5e93\u642d\u5efa"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u6570\u636e\u5e93\u955c\u50cf")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull timescale/timescaledb:latest-pg12\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5e76\u8fd0\u884c\u5bb9\u5668",(0,l.kt)("br",{parentName:"li"}),"POSTGRES_DB \u6570\u636e\u5e93\u540d",(0,l.kt)("br",{parentName:"li"}),"POSTGRES_USER \u7528\u6237\u540d",(0,l.kt)("br",{parentName:"li"}),"POSTGRES_PASSWORD \u5bc6\u7801  ")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u6b64\u5904\u5982\u679c\u4fee\u6539\u4e86\u6570\u636e\u5e93\u540d\u3001\u7528\u6237\u540d\u6216\u5bc6\u7801\u8bf7\u5bf9\u5e94\u4fee\u6539\u540e\u7aef\u914d\u7f6e\u6587\u4ef6\uff08./conf/app.conf\uff09")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker run --name timescaledb -p 5432:5432 \\\n-e TZ=Asia/Shanghai \\\n-e POSTGRES_DB=ThingsPanel \\\n-e POSTGRES_USER=postgres \\\n-e POSTGRES_PASSWORD=postgresThingsPanel2022 \\\n-v /home/tp/data/dir:/var/lib/postgresql/data \\\ntimescale/timescaledb:latest-pg12\n")),(0,l.kt)("h2",{id:"gmqtt\u5b89\u88c5\u542f\u52a8"},"GMQTT\u5b89\u88c5\u542f\u52a8"),(0,l.kt)("p",null,"GMQTT\u662f\u5e73\u53f0\u63a5\u5165\u8bbe\u5907\u6d88\u606f\u7684\u670d\u52a1\uff0c\u8bbe\u5907\u6d88\u606f\u901a\u8fc7GMQTT\u8fdb\u5165\u5230\u5e73\u53f0\uff0c\u5e73\u53f0\u901a\u8fc7GMQTT\u53d1\u9001\u6d88\u606f\u7ed9\u8bbe\u5907\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ThingsPanel/gmqtt"},"GMQTT\u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ol"},"Star\u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6e90\u4ee3\u7801,\u5efa\u8bae\u4f7f\u7528git clone\u4e0b\u8f7d\u6e90\u4ee3\u7801,\u6ce8\u610f\u4ee3\u7801\u5206\u652f,master\u4e3a\u6700\u65b0\u7684\u5f00\u53d1\u5206\u652f.Tags\u5217\u5bf9\u5e94\u5176\u4ed6\u7248\u672c.")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"./gmqtt/cmd/gmqttd/default_config.yml        --\u7cfb\u7edf\u914d\u7f6e \n")),(0,l.kt)("p",null,"./gmqtt/cmd/gmqttd/default_config.yml\u8bf4\u660e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'listeners:\n  - address: ":1883"   # \u63a5\u5165\u7aef\u53e3\n  - address: ":8883"  # mqtts\u63a5\u5165\n    tls:\n      cacert: "./certs/ca.crt"\n      cert: "./certs/server.crt"\n      key: "./certs/server.key"\napi:\n  http:\n    - address: "tcp://0.0.0.0:8083"  # http\u670d\u52a1\u914d\u7f6e\uff08ThingsPanel-GO\u8c03\u7528\uff0c\u4e3b\u8981\u7528\u6765\u7ba1\u7406\u63a5\u5165\u7684\u6743\u9650\uff09\nlog:\n  level: info # \u65e5\u5fd7\u7ea7\u522b debug | info | warn | error\n')),(0,l.kt)("h3",{id:"\u76f4\u63a5\u8fd0\u884c\u670d\u52a1"},"\u76f4\u63a5\u8fd0\u884c\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/ThingsPanel/gmqtt.git\n$ cd gmqtt/cmd/gmqttd\n$ go run . start -c default_config.yml\n")),(0,l.kt)("h3",{id:"docker\u65b9\u5f0f\u8fd0\u884c\u670d\u52a1"},"docker\u65b9\u5f0f\u8fd0\u884c\u670d\u52a1"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/ThingsPanel/gmqtt.git\n$ cd gmqtt\n$ docker build -t gmqtt .\n$ docker run -p 1883:1883 -p 8883:8883 -p 8082:8082 -p 8083:8083  -p 8084:8084  gmqtt\n")),(0,l.kt)("h2",{id:"thingspanel-go\u5b89\u88c5\u542f\u52a8"},"ThingsPanel-Go\u5b89\u88c5\u542f\u52a8"),(0,l.kt)("p",null,"\u5e73\u53f0\u662f\u524d\u540e\u7aef\u5206\u79bb\u7684\u67b6\u6784\uff0cThingsPanel-Go\u662f\u5e73\u53f0\u7684\u540e\u7aef\uff0c\u7ed9\u524d\u7aef\u63d0\u4f9bAPI\u670d\u52a1\uff08\u540c\u65f6\u7ed9\u534f\u8bae\u63d2\u4ef6\u63d0\u4f9bAPI\u670d\u52a1\uff09\uff0c\u9700\u8981\u8fde\u63a5GMQTT\u548c\u6570\u636e\u5e93\uff08\u6ce8\u610f\u4fee\u6539./conf/app.conf\uff0c\u4e0e\u5b89\u88c5\u6570\u636e\u5e93\u65f6\u5019\u8bbe\u7f6e\u7684\u7528\u6237\u540d\u5bc6\u7801\u4fdd\u6301\u4e00\u81f4\uff09\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ThingsPanel/ThingsPanel-Go"},"ThingsPanel-Go\u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ol"},"Star\u4ed3\u5e93\n",(0,l.kt)("img",{alt:"star",src:n(9114).Z,width:"2162",height:"624"})),(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6e90\u4ee3\u7801,\u5efa\u8bae\u4f7f\u7528git clone\u4e0b\u8f7d\u6e90\u4ee3\u7801,\u6ce8\u610f\u4ee3\u7801\u5206\u652f,main\u4e3a\u6700\u65b0\u7684\u5f00\u53d1\u5206\u652f.Tags\u5217\u5bf9\u5e94\u5176\u4ed6\u7248\u672c.\n",(0,l.kt)("img",{alt:"\u4e0b\u8f7d",src:n(9736).Z,width:"2161",height:"715"}))),(0,l.kt)("h3",{id:"\u76f8\u5173\u76ee\u5f55\u6587\u4ef6\u8bf4\u660e"},"\u76f8\u5173\u76ee\u5f55\u6587\u4ef6\u8bf4\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"./conf/app.conf                  --\u7cfb\u7edf\u914d\u7f6e \n./modules/dataService/config.yml --mqtt\u5ba2\u6237\u7aef\u7b49\n./files/logs/                    --\u7cfb\u7edf\u65e5\u5fd7\u5b58\u653e\u76ee\u5f55\n./TP.sql                         --\u6570\u636e\u5e93\u521d\u59cb\u5316\u811a\u672c\n")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"./conf/app.conf\u914d\u7f6e\u8bf4\u660e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'httpport = 9999 # api\u670d\u52a1\u7aef\u53e3\n# redis\u914d\u7f6e\nredis.conn=127.0.0.1:6379\nredis.dbNum=0\nredis.password="redis2022"\n# \u6570\u636e\u5e93\u914d\u7f6e\npsqladdr = "127.0.0.1"\npsqlport = 5432\npsqldb = ThingsPanel # \u5e93\u540d\npsqluser = postgres # \u7528\u6237\u540d\npsqlpass = postgresThingsPanel2022 # \u7528\u6237\u5bc6\u7801\npsqlMaxConns = 5 # \u7a7a\u95f2\u8fde\u63a5\u6c60\u4e2d\u8fde\u63a5\u7684\u6700\u5927\u6570\u91cf\npsqlMaxOpen = 500 # \u6253\u5f00\u6570\u636e\u5e93\u8fde\u63a5\u7684\u6700\u5927\u6570\u91cf\n# \u65e5\u5fd7\nmaxdays = 60 # \u6587\u4ef6\u6700\u591a\u4fdd\u5b58\u591a\u5c11\u5929\n# 1-\u7d27\u6025\u7ea7\u522bLevelEmergency 2-\u62a5\u8b66\u7ea7\u522bLevelAlert 3-\u4e25\u91cd\u9519\u8bef\u7ea7\u522bLevelCritical 4-\u9519\u8bef\u7ea7\u522bLevelError\n# 5-\u8b66\u544a\u7ea7\u522bLevelWarning 6-\u6ce8\u610f\u7ea7\u522bLevelWarning 7-\u62a5\u544a\u7ea7\u522bLevelInformational 8-\u9664\u9519\u7ea7\u522bLevelDebug\nlevel = 8 # \u7cfb\u7edf\u65e5\u5fd7\u7ea7\u522b\nsqlloglevel = 3 # sql\u7684\u65e5\u5fd7\u7ea7\u522b 1-Silent 2-Error 3-Warn 4-Info\nmaxlines = 10000 # \u6bcf\u4e2a\u6587\u4ef6\u4fdd\u5b58\u7684\u6700\u5927\u884c\u6570\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"./modules/dataService/config.yml\u914d\u7f6e\u8bf4\u660e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"mqtt:\n  broker: 127.0.0.1:1883 #mqtt\u63a5\u5165\u5730\u5740\u548c\u7aef\u53e3\n  user: root # \u5e73\u53f0\u7684mqtt\u7528\u6237\u540d\n  pass: root # \u5e73\u53f0\u7684mqtt\u7528\u6237\u5bc6\u7801\n  topicToSubscribe: device/attributes # \u5e73\u53f0\u8ba2\u9605\u8bbe\u5907\u5c5e\u6027\u4e3b\u9898\n  topicToPublish: device/attributes # \u5e73\u53f0\u53d1\u5e03\u8bbe\u5907\u5c5e\u6027\u4e3b\u9898\u524d\u7f6e\n  topicToStatus: device/status # \u5e73\u53f0\u8ba2\u9605\u8bbe\u5907\u72b6\u6001\u4e3b\u9898\n  gateway_topic: gateway/attributes # \u5e73\u53f0\u8ba2\u9605\u7f51\u5173\u8bbe\u5907\u5c5e\u6027\u4e3b\u9898\n  topicToCommand: device/command # \u5e73\u53f0\u53d1\u5e03\u547d\u4ee4\u4e3b\u9898\n  topicToEvent: device/event # \u8bbe\u5907\u4e0a\u62a5\u4e8b\u4ef6\u4e3b\u9898\n  topicToInform: ota/device/inform # \u8bbe\u5907\u8ba2\u9605\u5347\u7ea7\u4fe1\u606f\u4e3b\u9898\napi:\n  http_host: 127.0.0.1:8083 # gmqttAPI\u670d\u52a1\u5730\u5740\uff08\u4e3b\u8981\u7528\u6765\u7ba1\u7406\u63a5\u5165\u7684\u6743\u9650\uff09\nplugin:\n  http_host: 127.0.0.1:503 # MODEBUS\u534f\u8bae\u63d2\u4ef6API\u670d\u52a1\u5730\u5740\n")),(0,l.kt)("h3",{id:"\u8fd0\u884c"},"\u8fd0\u884c"),(0,l.kt)("p",null,"GMQTT\u3001redis\u3001TimescaleDB\u9996\u5148\u542f\u52a8\uff0c\u66f4\u65b0ThingsPanel-Go\u76f8\u5173\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/ThingsPanel/ThingsPanel-Go.git\n$ cd ThingsPanel-Go\n$ go run . start\n")),(0,l.kt)("h2",{id:"thingspanel-backend-vue\u5b89\u88c5\u6253\u5305"},"ThingsPanel-Backend-Vue\u5b89\u88c5\u6253\u5305"),(0,l.kt)("h3",{id:"\u5b89\u88c5nodejs-1613\u5982\u679c\u8981\u5728\u670d\u52a1\u5668\u6253\u5305\u524d\u7aef\u9700\u8981\u5b89\u88c5nodejs"},"\u5b89\u88c5node.js 16.13\uff08\u5982\u679c\u8981\u5728\u670d\u52a1\u5668\u6253\u5305\u524d\u7aef\u9700\u8981\u5b89\u88c5node.js\uff09"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/zh-cn/download/"},"\u5b89\u88c5node.js")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u4e0a\u9762\u94fe\u63a5\u8fdb\u5165\u4e0b\u8f7d\u9875"),(0,l.kt)("li",{parentName:"ol"},"\u5f80\u4e0b\u7ffb\u627e\u5230",(0,l.kt)("inlineCode",{parentName:"li"},"\u4ee5\u5f80\u7684\u7248\u672c")),(0,l.kt)("li",{parentName:"ol"},"\u4f8b\u5982\u627e\u523016.13\u70b9\u4e0b\u8f7d\u7136\u540e\u9009node-v16.13.2-linux-x64.tar.xz,\u6267\u884c\u547d\u4ee4\u4e0b\u8f7d",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"wget https://nodejs.org/download/release/v16.13.2/node-v16.13.2-linux-x64.tar.xz\n"))),(0,l.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u5230\u538b\u7f29\u5305\u540e\uff0c",(0,l.kt)("a",{parentName:"li",href:"https://github.com/nodejs/help/wiki/Installation"},"node.js\u4e8c\u8fdb\u5236\u5b89\u88c5"))),(0,l.kt)("h3",{id:"\u524d\u7aef\u6e90\u7801\u6253\u5305"},"\u524d\u7aef\u6e90\u7801\u6253\u5305"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6e90\u7801",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/ThingsPanel/ThingsPanel-Backend-Vue.git\n"))),(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u4f9d\u8d56",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,l.kt)("li",{parentName:"ol"},"\u6253\u5305\u751f\u6210dist\u6587\u4ef6(\u6253\u5305\u524d\u5220\u9664.env.dev\u548c.env.production\u6587\u4ef6)",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"rm .env.dev&&rm .env.production\nnpm run build\n")))),(0,l.kt)("h2",{id:"visual-editor\u5b89\u88c5\u6253\u5305\u53ef\u89c6\u5316"},"visual-editor\u5b89\u88c5\u6253\u5305\uff08\u53ef\u89c6\u5316\uff09"),(0,l.kt)("h3",{id:"\u5b89\u88c5pnpm"},"\u5b89\u88c5pnpm"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u4ee5\u4e0anode.js\u5b89\u88c5\u597d\u7684\u524d\u63d0\u4e0b\uff0c\u6267\u884c\u547d\u4ee4\u5b89\u88c5pnpm")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm i -g pnpm\n")),(0,l.kt)("h3",{id:"\u53ef\u89c6\u5316\u6e90\u7801\u6253\u5305"},"\u53ef\u89c6\u5316\u6e90\u7801\u6253\u5305"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6e90\u7801")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"https://github.com/ThingsPanel/visual-editor.git\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u4f9d\u8d56")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u6253\u5305\u751f\u6210dist")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run build\n")),(0,l.kt)("h2",{id:"modbus-protocol-plugin\u5b89\u88c5\u542f\u52a8\u53ef\u9009-modbus\u534f\u8bae\u63d2\u4ef6"},"modbus-protocol-plugin\u5b89\u88c5\u542f\u52a8\uff08\u53ef\u9009-MODBUS\u534f\u8bae\u63d2\u4ef6\uff09"),(0,l.kt)("p",null,"modbus-protocol-plugin\u662f\u5e73\u53f0\u7684\u534f\u8bae\u63d2\u4ef6\uff0cMODBUS\u534f\u8bae\u7684\u8bbe\u5907\u5bf9\u63a5\u534f\u8bae\u63d2\u4ef6\uff0c\u534f\u8bae\u63d2\u4ef6\u5c06\u6570\u636e\u8f6c\u53d1\u5230GMQTT\u8fdb\u5165\u5e73\u53f0\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ThingsPanel/modbus-protocol-plugin"},"modbus-protocol-plugin\u4ed3\u5e93")),(0,l.kt)("li",{parentName:"ol"},"Star\u4ed3\u5e93"),(0,l.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6e90\u4ee3\u7801,\u5efa\u8bae\u4f7f\u7528git clone\u4e0b\u8f7d\u6e90\u4ee3\u7801,\u6ce8\u610f\u4ee3\u7801\u5206\u652f,main\u4e3a\u6700\u65b0\u7684\u5f00\u53d1\u5206\u652f.Tags\u5217\u5bf9\u5e94\u5176\u4ed6\u7248\u672c.")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6-1"},"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"./config.yaml        --\u914d\u7f6e\u6587\u4ef6\n")),(0,l.kt)("p",null,"./config.yaml\u8bf4\u660e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"server:\n  address: 0.0.0.0:502 # \u8bbe\u5907\u63a5\u5165\u5730\u5740\nmqtt:\n  broker: 127.0.0.1:1883 # gmqtt\u670d\u52a1\u7aef\u5730\u5740\n  username: root\n  password: root\n  topic_to_publish: device/attributes # \u53d1\u9001\u4e3b\u9898\n  topic_to_subscribe: plugin/modbus/# # \u8ba2\u9605\u4e3b\u9898\n  subscribe_pool: 100 # \u5ba2\u6237\u7aef\u8ba2\u9605\u5904\u7406\u5e76\u53d1\u6570\u91cf\nhttp_server:\n  address: 0.0.0.0:503 # \u63d2\u4ef6http\u670d\u52a1\u5730\u5740\nthingspanel:\n  address: 127.0.0.1:9999 # ThingsPanel\u5e73\u53f0\u5730\u5740\n")),(0,l.kt)("h3",{id:"\u8fd0\u884c-1"},"\u8fd0\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/ThingsPanel/modbus-protocol-plugin.git\n$ cd modbus-protocol-plugin\n$ go run . start\n")),(0,l.kt)("h2",{id:"rule-engine\u5b89\u88c5\u542f\u52a8\u53ef\u9009-\u89c4\u5219\u5f15\u64ce"},"rule-engine\u5b89\u88c5\u542f\u52a8\uff08\u53ef\u9009-\u89c4\u5219\u5f15\u64ce\uff09"),(0,l.kt)("p",null,"\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/rule-engine"},"https://github.com/ThingsPanel/rule-engine")," \u7684readme\u5b89\u88c5"),(0,l.kt)("h2",{id:"\u524d\u7aef\u90e8\u7f72"},"\u524d\u7aef\u90e8\u7f72"),(0,l.kt)("h3",{id:"\u5b89\u88c5nginx"},"\u5b89\u88c5nginx"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yum install nginx\n")),(0,l.kt)("h3",{id:"nginx\u914d\u7f6e"},"nginx\u914d\u7f6e"),(0,l.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u8fdb\u5165/etc/nginx/conf.d\u76ee\u5f55\u4e0b\u65b0\u5efa\u6587\u4ef6tp.conf\uff0c\u5c06\u4e0b\u9762\u5185\u5bb9\u590d\u5236\u8fdb\u53bb,\u7136\u540e\u5c06\u524d\u7aef\u6253\u5305\u597d\u7684dist\u5185\u7684\u6587\u4ef6\u590d\u5236\u5230/usr/share/nginx/html\uff0c(\u63a8\u8350\u628a/usr/share/nginx/html\u6362\u6210dist\u8def\u5f84)\uff1b\u5c06\u6253\u5305\u597d\u7684\u53ef\u89c6\u5316dist\u6587\u4ef6\u653e\u5230/usr/share/nginx/visual-editor/dist\u4e0e\u4e00\u4e0b\u914d\u7f6e\u4e00\u81f4\uff1b\n",(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u5982\u679c\u8bbf\u95ee\u6709\u6743\u9650\u95ee\u9898\uff0c\u4fee\u6539nginx.conf\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},'server {\n    listen       8080;\n    server_name _;\n    root         /usr/share/nginx/html;\n\n    # Load configuration files for the default server block.\n    #include /etc/nginx/default.d/*.conf;\n    location /api{\n        proxy_pass  http://127.0.0.1:9999;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n    }\n    location /files{\n        proxy_pass  http://127.0.0.1:9999;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n    }\n    location ^~ /visual {\n        alias /usr/share/nginx/visual-editor/dist;\n        index index.html index.htm;\n        try_files $uri $uri/ /visual/index.html;\n    }\n    location / {\n        index       index.html index.htm;\n    }\n  \n    error_page 404 /404.html;\n        location = /40x.html {\n    }\n\n    error_page 500 502 503 504 /50x.html;\n        location = /50x.html {\n    }\n}\n')),(0,l.kt)("h3",{id:"\u91cd\u542fnginx"},"\u91cd\u542fnginx"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"nginx -t\nnginx -s reload\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5b89\u88c5\u624b\u518c\u82e5\u6709\u6ca1\u5e2e\u52a9\u5230\u60a8\u7684\u5730\u65b9\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"QQ\u7fa41\uff1a260150504\uff08\u6ee1\uff09 QQ\u7fa42:371794256"))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5176\u4ed6\u4fe1\u606f\u8bf7\u67e5\u9605",(0,l.kt)("a",{parentName:"p",href:"../system-introduction/code_repository"},(0,l.kt)("inlineCode",{parentName:"a"},"\u4ee3\u7801\u5e93")),"\u7684README\u5b89\u88c5\u6b65\u9aa4\u3002")))}m.isMDXComponent=!0},9114:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git1-99977924d3dd1e9c26811a101269ca48.png"},9736:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/git2-c186cc64facfea476f35ddcb46f8298b.png"}}]);