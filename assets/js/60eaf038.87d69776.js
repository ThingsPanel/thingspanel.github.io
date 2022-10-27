"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?l.createElement(g,i(i({ref:t},p),{},{components:n})):l.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},i="\u6e90\u7801\u5b89\u88c5",o={unversionedId:"system-installation/source_code.installation",id:"system-installation/source_code.installation",title:"\u6e90\u7801\u5b89\u88c5",description:"\u6839\u636e\u60c5\u51b5\u53ef\u9009\u62e9\u6e90\u7801\u65b9\u5f0f\u5b89\u88c5\u3002",source:"@site/docs/system-installation/source_code.installation.md",sourceDirName:"system-installation",slug:"/system-installation/source_code.installation",permalink:"/docs/system-installation/source_code.installation",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-installation/source_code.installation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Docker\u5b89\u88c5",permalink:"/docs/system-installation/docker_installation"},next:{title:"\u5305\u5b89\u88c5",permalink:"/docs/system-installation/package_installation"}},s={},c=[{value:"timescaledb\u6570\u636e\u5e93\u642d\u5efa",id:"timescaledb\u6570\u636e\u5e93\u642d\u5efa",level:2},{value:"TP.sql\u811a\u672c",id:"tpsql\u811a\u672c",level:3},{value:"\u83b7\u53d6\u6570\u636e\u5e93\u955c\u50cf",id:"\u83b7\u53d6\u6570\u636e\u5e93\u955c\u50cf",level:3},{value:"\u521b\u5efa\u5e76\u8fd0\u884c\u5bb9\u5668",id:"\u521b\u5efa\u5e76\u8fd0\u884c\u5bb9\u5668",level:3},{value:"GMQTT\u90e8\u7f72",id:"gmqtt\u90e8\u7f72",level:2},{value:"\u83b7\u53d6\u6e90\u7801",id:"\u83b7\u53d6\u6e90\u7801",level:3},{value:"\u8fd0\u884c\u670d\u52a1",id:"\u8fd0\u884c\u670d\u52a1",level:3},{value:"redis\u90e8\u7f72",id:"redis\u90e8\u7f72",level:2},{value:"\u540e\u7aef\u90e8\u7f72",id:"\u540e\u7aef\u90e8\u7f72",level:2},{value:"\u73af\u5883\u7248\u672c\u53calinux\u5b89\u88c5\u793a\u4f8b",id:"\u73af\u5883\u7248\u672c\u53calinux\u5b89\u88c5\u793a\u4f8b",level:3},{value:"\u540e\u7aef\u76f8\u5173\u914d\u7f6e\u6587\u4ef6",id:"\u540e\u7aef\u76f8\u5173\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u65e5\u5fd7\u5b58\u653e\u76ee\u5f55",id:"\u65e5\u5fd7\u5b58\u653e\u76ee\u5f55",level:3},{value:"\u7f16\u8bd1\u548c\u8fd0\u884c",id:"\u7f16\u8bd1\u548c\u8fd0\u884c",level:3},{value:"\u6570\u636e\u5e93\u811a\u672c",id:"\u6570\u636e\u5e93\u811a\u672c",level:3},{value:"\u6e90\u7801\u5b89\u88c5\u6307\u5bfc",id:"\u6e90\u7801\u5b89\u88c5\u6307\u5bfc",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6e90\u7801\u5b89\u88c5"},"\u6e90\u7801\u5b89\u88c5"),(0,a.kt)("p",null,"\u6839\u636e\u60c5\u51b5\u53ef\u9009\u62e9\u6e90\u7801\u65b9\u5f0f\u5b89\u88c5\u3002"),(0,a.kt)("h2",{id:"timescaledb\u6570\u636e\u5e93\u642d\u5efa"},"timescaledb\u6570\u636e\u5e93\u642d\u5efa"),(0,a.kt)("h3",{id:"tpsql\u811a\u672c"},"TP.sql\u811a\u672c"),(0,a.kt)("p",null,"\u4fee\u6539\u540e\u7aefTP.sql\u6587\u4ef6\u7684\u6743\u9650"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 777 TP.sql\n")),(0,a.kt)("h3",{id:"\u83b7\u53d6\u6570\u636e\u5e93\u955c\u50cf"},"\u83b7\u53d6\u6570\u636e\u5e93\u955c\u50cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull timescale/timescaledb:latest-pg12\n")),(0,a.kt)("h3",{id:"\u521b\u5efa\u5e76\u8fd0\u884c\u5bb9\u5668"},"\u521b\u5efa\u5e76\u8fd0\u884c\u5bb9\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run --name timescaledb -p 5432:5432 \\\n-v /home/tp/backend/TP.sql:/docker-entrypoint-initdb.d/TP.sql \\\n-e TZ=Asia/Shanghai \\\n-e POSTGRES_DB=tp \\\n-e POSTGRES_USER=postgres \\\n-e POSTGRES_PASSWORD=postgres2022 \\\n-v /home/tp/data/dir:/var/lib/postgresql/data \\\ntimescale/timescaledb:latest-pg12\n")),(0,a.kt)("h2",{id:"gmqtt\u90e8\u7f72"},"GMQTT\u90e8\u7f72"),(0,a.kt)("h3",{id:"\u83b7\u53d6\u6e90\u7801"},"\u83b7\u53d6\u6e90\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/ThingsPanel/gmqtt.git\n")),(0,a.kt)("h3",{id:"\u8fd0\u884c\u670d\u52a1"},"\u8fd0\u884c\u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd gmqtt/cmd/gmqttd&&go run . start -c default_config.yml\n")),(0,a.kt)("h2",{id:"redis\u90e8\u7f72"},"redis\u90e8\u7f72"),(0,a.kt)("p",null,"###\u4e0b\u8f7d\u5b89\u88c5\u5305\u548c\u7f16\u8bd1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"wget http://download.redis.io/releases/redis-6.0.8.tar.gz\ntar xzf redis-6.0.8.tar.gz\ncd redis-6.0.8&&make\n")),(0,a.kt)("p",null,"###\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd src&&./redis-server\n")),(0,a.kt)("h2",{id:"\u540e\u7aef\u90e8\u7f72"},"\u540e\u7aef\u90e8\u7f72"),(0,a.kt)("h3",{id:"\u73af\u5883\u7248\u672c\u53calinux\u5b89\u88c5\u793a\u4f8b"},"\u73af\u5883\u7248\u672c\u53calinux\u5b89\u88c5\u793a\u4f8b"),(0,a.kt)("p",null,"Golang-v1.17.6\uff08\u4e0b\u8f7d\u5730\u5740\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://golang.google.cn/dl/"},"https://golang.google.cn/dl/"),"\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'wget https://golang.google.cn/dl/go1.17.6.linux-arm64.tar.gz\ntar -C /usr/local -zxvf go1.17.6.linux-amd64.tar.gz\nvim /etc/profile #\u5c06"export PATH=$PATH:/usr/local/go/bin"\u6dfb\u52a0\u5230\u6587\u4ef6\u5e95\u90e8\nsource /etc/profile #\uff08\u8ba9\u914d\u7f6e\u751f\u6548\uff09\ngo version #(\u67e5\u770b\u7248\u672c)\n')),(0,a.kt)("h3",{id:"\u540e\u7aef\u76f8\u5173\u914d\u7f6e\u6587\u4ef6"},"\u540e\u7aef\u76f8\u5173\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"./conf/app.conf                  --\u7cfb\u7edf\u914d\u7f6e \n./modules/dataService/config.yml --mqtt\u5ba2\u6237\u7aef\u7b49\n")),(0,a.kt)("h3",{id:"\u65e5\u5fd7\u5b58\u653e\u76ee\u5f55"},"\u65e5\u5fd7\u5b58\u653e\u76ee\u5f55"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"./files/logs/\n")),(0,a.kt)("h3",{id:"\u7f16\u8bd1\u548c\u8fd0\u884c"},"\u7f16\u8bd1\u548c\u8fd0\u884c"),(0,a.kt)("p",null,"main.go\u6587\u4ef6\u7684\u76ee\u5f55\u4e0b\u5bf9go\u4ee3\u7801\u8fdb\u884c\u7f16\u8bd1\u548c\u8fd0\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go build #\u7f16\u8bd1\n./ThingsPanel-Go #\u6216\u8005\u4ee5\u5b88\u62a4\u65b9\u5f0f\u8fd0\u884c\n")),(0,a.kt)("h3",{id:"\u6570\u636e\u5e93\u811a\u672c"},"\u6570\u636e\u5e93\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"./TP.sql\n")),(0,a.kt)("h2",{id:"\u6e90\u7801\u5b89\u88c5\u6307\u5bfc"},"\u6e90\u7801\u5b89\u88c5\u6307\u5bfc"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u67e5\u9605",(0,a.kt)("a",{parentName:"p",href:"../system-introduction/code_repository"},(0,a.kt)("inlineCode",{parentName:"a"},"\u4ee3\u7801\u5e93")),"\u7684README\u5b89\u88c5\u6b65\u9aa4\u3002")))}d.isMDXComponent=!0}}]);