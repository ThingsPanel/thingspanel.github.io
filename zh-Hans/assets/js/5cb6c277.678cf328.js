"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=o(n),u=r,m=c["".concat(p,".").concat(u)]||c[u]||g[u]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4},l="\u6811\u8393\u6d3e\u6e90\u7801\u5b89\u88c5",s={unversionedId:"system-installation/raspberry_installation",id:"system-installation/raspberry_installation",title:"\u6811\u8393\u6d3e\u6e90\u7801\u5b89\u88c5",description:"\u672c\u6587\u6863\u7684\u76ee\u7684\u5728\u4e8e\u8bf4\u660e\u5982\u4f55\u5728\u6811\u8393\u6d3e 4 \u4e0a\u901a\u8fc7\u6e90\u7801\u5b89\u88c5 ThingsPanel\u3002\u5b89\u88c5\u8fc7\u7a0b\u57fa\u672c\u4e0e\u5728 x86 \u670d\u52a1\u5668\u5b89\u88c5\u8fc7\u7a0b\u4e00\u6837\u3002\u57fa\u672c\u53c2\u8003\u6e90\u7801\u5b89\u88c5\u8fdb\u884c\u5b89\u88c5\u3002",source:"@site/docs/system-installation/raspberry_installation.md",sourceDirName:"system-installation",slug:"/system-installation/raspberry_installation",permalink:"/zh-Hans/docs/system-installation/raspberry_installation",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-installation/raspberry_installation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u6e90\u7801\u5b89\u88c5",permalink:"/zh-Hans/docs/system-installation/source_code.installation"},next:{title:"\u5305\u5b89\u88c5",permalink:"/zh-Hans/docs/system-installation/package_installation"}},p={},o=[{value:"\u5b89\u88c5\u540e\u6253\u5f00\u7684\u754c\u9762",id:"\u5b89\u88c5\u540e\u6253\u5f00\u7684\u754c\u9762",level:2},{value:"ThingsPanel \u5728\u6811\u8393\u6d3e 4 \u4e0a\u7684\u5185\u5b58\u5360\u7528",id:"thingspanel-\u5728\u6811\u8393\u6d3e-4-\u4e0a\u7684\u5185\u5b58\u5360\u7528",level:2},{value:"\u6574\u4f53\u5b89\u88c5\u6d41\u7a0b\u6b65\u9aa4\u6982\u89c8",id:"\u6574\u4f53\u5b89\u88c5\u6d41\u7a0b\u6b65\u9aa4\u6982\u89c8",level:2},{value:"\u524d\u7f6e\u6a21\u5757",id:"\u524d\u7f6e\u6a21\u5757",level:3},{value:"TimescaleDB 12 \u5b89\u88c5",id:"timescaledb-12-\u5b89\u88c5",level:2},{value:"gmqtt \u5b89\u88c5",id:"gmqtt-\u5b89\u88c5",level:2},{value:"redis \u5b89\u88c5",id:"redis-\u5b89\u88c5",level:2},{value:"ThingsPanel-Go \u5b89\u88c5",id:"thingspanel-go-\u5b89\u88c5",level:2},{value:"ThingsPanel-Backend-Vue \u5b89\u88c5",id:"thingspanel-backend-vue-\u5b89\u88c5",level:2}],d={toc:o},c="wrapper";function g(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6811\u8393\u6d3e\u6e90\u7801\u5b89\u88c5"},"\u6811\u8393\u6d3e\u6e90\u7801\u5b89\u88c5"),(0,r.kt)("p",null,"\u672c\u6587\u6863\u7684\u76ee\u7684\u5728\u4e8e\u8bf4\u660e\u5982\u4f55\u5728\u6811\u8393\u6d3e 4 \u4e0a\u901a\u8fc7\u6e90\u7801\u5b89\u88c5 ThingsPanel\u3002\u5b89\u88c5\u8fc7\u7a0b\u57fa\u672c\u4e0e\u5728 x86 \u670d\u52a1\u5668\u5b89\u88c5\u8fc7\u7a0b\u4e00\u6837\u3002\u57fa\u672c\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"http://thingspanel.io/zh-Hans/docs/system-installation/source_code.installation"},"\u6e90\u7801\u5b89\u88c5"),"\u8fdb\u884c\u5b89\u88c5\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u540e\u6253\u5f00\u7684\u754c\u9762"},"\u5b89\u88c5\u540e\u6253\u5f00\u7684\u754c\u9762"),(0,r.kt)("p",null,"\u4e0e\u5728\u4e91\u670d\u52a1\u5668\u4e0a\u7684\u5b89\u88c5\u7cfb\u7edf\u5b8c\u5168\u4e00\u6837\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3643).Z,width:"1600",height:"765"})),(0,r.kt)("h2",{id:"thingspanel-\u5728\u6811\u8393\u6d3e-4-\u4e0a\u7684\u5185\u5b58\u5360\u7528"},"ThingsPanel \u5728\u6811\u8393\u6d3e 4 \u4e0a\u7684\u5185\u5b58\u5360\u7528"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7561).Z,width:"885",height:"410"})),(0,r.kt)("p",null,"\u603b\u8ba1\uff1a386MB\uff0c\u5176\u4e2d PostgreSQL \u5c31\u5360\u4e86 222MB"),(0,r.kt)("p",null,"\u5176\u4e2d PostgreSQL \u5360\u7528\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pi@raspberrypi:~ $ ps aux | grep postgres | awk 'BEGIN {sum=0} {sum += $6} END {print sum/1024 \" MB\"}'\n221.664 MB\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2343).Z,width:"721",height:"30"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Vue.js\uff08\u6216\u4efb\u4f55\u524d\u7aef\u6846\u67b6\uff09\u5f00\u53d1\u7684\u524d\u7aef\u9879\u76ee\u7684\u5185\u5b58\u5360\u7528\u4e0d\u540c\u4e8e\u7edf\u8ba1\u540e\u7aef\u8fdb\u7a0b\u6216\u670d\u52a1\u7684\u5185\u5b58\u5360\u7528\u3002\u524d\u7aef\u9879\u76ee\u8fd0\u884c\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u56e0\u6b64\u5b83\u7684\u8d44\u6e90\u6d88\u8017\u5e94\u5728\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u8fdb\u884c\u8bc4\u4f30\u3002\u6811\u8393\u6d3e\u4e0a\u7684\u5185\u5b58\u5360\u7528\u5b9e\u9645\u4e0a\u4f1a\u6d89\u53ca\u5230\u60a8\u7528\u6765\u6258\u7ba1\u548c\u63d0\u4f9b\u524d\u7aef\u8d44\u6e90\u7684\u670d\u52a1\u5668\uff08\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Nginx \u6216 Apache\uff09\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ThingsPanel \u6838\u5fc3\u7cfb\u7edf\u5360\u7528 30MB")),(0,r.kt)("h2",{id:"\u6574\u4f53\u5b89\u88c5\u6d41\u7a0b\u6b65\u9aa4\u6982\u89c8"},"\u6574\u4f53\u5b89\u88c5\u6d41\u7a0b\u6b65\u9aa4\u6982\u89c8"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9439).Z,width:"793",height:"509"})),(0,r.kt)("h3",{id:"\u524d\u7f6e\u6a21\u5757"},"\u524d\u7f6e\u6a21\u5757"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"docker\uff1a \u90e8\u7f72\u4f9d\u8d56\u6570\u636e\u5e93\uff0c\u51cf\u5c11\u5b89\u88c5\u6d41\u7a0b\uff0c\u63d0\u9ad8\u6548\u7387\uff1b\uff08",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"\u5b89\u88c5 docker \u793e\u533a\u7248"),"\uff09"),(0,r.kt)("li",{parentName:"ul"},"go\uff1a \u542f\u52a8\u540e\u7aef\u7a0b\u5e8f\u548c gmqtt\uff08",(0,r.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"\u5b89\u88c5 Go"),"\uff09"),(0,r.kt)("li",{parentName:"ul"},"node.js + npm\uff1a \u7f16\u8bd1\u3001\u90e8\u7f72\u524d\u7aef\u7a0b\u5e8f\uff08",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/zh-cn/download/"},"\u5b89\u88c5 node.js"),"\uff09"),(0,r.kt)("li",{parentName:"ul"},"nginx\uff1a \u542f\u52a8 http \u670d\u52a1\uff0c\u8f6c\u53d1\u524d\u7aef\u9759\u6001\u6587\u4ef6\uff08\u6267\u884c sudo apt install nginx\uff09")),(0,r.kt)("h2",{id:"timescaledb-12-\u5b89\u88c5"},"TimescaleDB 12 \u5b89\u88c5"),(0,r.kt)("p",null,"1.\u62c9\u53d6 docker \u955c\u50cf"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker pull timescale/timescaledb:latest-pg12")),(0,r.kt)("p",null,"2.\u542f\u52a8 docker \u955c\u50cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --name timescaledb -p 5432:5432 \\\n-e TZ=Asia/Shanghai \\\n-e POSTGRES_DB=ThingsPanel \\\n-e POSTGRES_USER=postgres \\\n-e POSTGRES_PASSWORD=postgresThingsPanel2022 \\\n-v /home/tp/data/dir:/var/lib/postgresql/data \\\ntimescale/timescaledb:latest-pg12\n")),(0,r.kt)("p",null,"3.\u542f\u52a8\u6210\u529f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1374).Z,width:"1100",height:"1121"})),(0,r.kt)("h2",{id:"gmqtt-\u5b89\u88c5"},"gmqtt \u5b89\u88c5"),(0,r.kt)("p",null,"1.github \u4e0b\u8f7d\u6e90\u7801\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/gmqtt"},"https://github.com/ThingsPanel/gmqtt")),(0,r.kt)("p",null,"2.\u8fdb\u5165\u670d\u52a1\u76ee\u5f55\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cd gmqtt/cmd/gmqttd")),(0,r.kt)("p",null,"3.go \u547d\u4ee4\u542f\u52a8\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go run . start -c default_config.yml")),(0,r.kt)("p",null,"4.\u542f\u52a8\u6210\u529f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2550).Z,width:"803",height:"121"})),(0,r.kt)("h2",{id:"redis-\u5b89\u88c5"},"redis \u5b89\u88c5"),(0,r.kt)("p",null,"1.\u6307\u5b9a\u76ee\u5f55\u62c9\u53d6\u5e76\u542f\u52a8 docker \u955c\u50cf\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --name tp-redis \\\n-v /home/tp/backend/redis/data:/data \\\n-v /home/tp/backend/redis/conf/redis.conf:/usr/local/etc/redis/redis.conf \\\n-v /home/tp/backend/redis/logs:/logs \\\n-d -p 6379:6379 redis redis-server --requirepass redis2022\n")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(3555).Z,width:"1130",height:"83"})),(0,r.kt)("h2",{id:"thingspanel-go-\u5b89\u88c5"},"ThingsPanel-Go \u5b89\u88c5"),(0,r.kt)("p",null,"1.github \u4e0b\u8f7d\u6e90\u7801\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/ThingsPanel-Go"},"https://github.com/ThingsPanel/ThingsPanel-Go")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/ThingsPanel/ThingsPanel-Go.git")),(0,r.kt)("p",null,"2.\u8fdb\u5165\u9879\u76ee\u6839\u76ee\u5f55"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cd ThingsPanel-Go")),(0,r.kt)("p",null,"3.\u542f\u52a8\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"go run . start")),(0,r.kt)("p",null,"4.\u8fd0\u884c\u6210\u529f\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(36).Z,width:"640",height:"428"})),(0,r.kt)("h2",{id:"thingspanel-backend-vue-\u5b89\u88c5"},"ThingsPanel-Backend-Vue \u5b89\u88c5"),(0,r.kt)("p",null,"1.\u4e0b\u8f7d\u6e90\u7801"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/ThingsPanel/ThingsPanel-Backend-Vue.git")),(0,r.kt)("p",null,"2.\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm install")),(0,r.kt)("p",null,"3.\u6253\u5305\u751f\u6210 dist \u6587\u4ef6(\u6253\u5305\u524d\u5220\u9664.env.dev \u548c.env.production \u6587\u4ef6)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rm .env.dev&&rm .env.production")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"npm run build")),(0,r.kt)("p",null,"4.\u914d\u7f6e nginx \u8def\u7531\u6587\u4ef6\uff1a thingspanel.conf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server {\n    listen 8080;\n    #listen 9999;\n    # \u4fee\u6539\u8fd9\u91cc\u7684server_name\u4e3a\u4f60\u672c\u5730\u7684\u670d\u52a1\u540d\n    server_name dev.thingspanel.cn 39.98.176.26 ;\n    charset utf-8;\n\n    client_max_body_size 10m;\n\n    underscores_in_headers on;\n\n    root /home/dev/dist;\n\n    location /api{\n        proxy_pass  http://127.0.0.1:9999;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection \"upgrade\";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n    }\n\n    location /files{\n    add_header 'Access-Control-Allow-Origin' '*';\n        add_header 'Access-Control-Allow-Credentials' 'true';\n        add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';\n        add_header 'Access-Control-Allow-Headers' 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';\n        add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';\n\n        if ($request_method = 'OPTIONS') {\n            return 204;\n        }\n        proxy_pass  http://127.0.0.1:9999;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection \"upgrade\";\n        proxy_set_header X-real-ip $remote_addr;\n        proxy_set_header X-Forwarded-For $remote_addr;\n    }\n\n    location /visual {\n        alias /home/visual-editor/dist;\n        index index.html index.htm;\n        try_files $uri $uri/ /visual/index.html;\n    }\n\n\n    location / {\n        index       index.html index.htm;\n    }\n\n      gzip on;\n      gzip_min_length 1k;\n      gzip_comp_level 4;\n      gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;\n      gzip_vary on;\n      gzip_disable \"MSIE [1-6]\\.\";\n\n}\n")),(0,r.kt)("p",null,"5.\u5c06\u521a\u624d\u7684\u6587\u4ef6 thingspanel.conf \u653e\u5165 nginx \u914d\u7f6e\u76ee\u5f55\u4e2d\uff0c\u4e00\u822c\u662f/etc/nignx/conf.d/ ;"),(0,r.kt)("p",null,"6.\u91cd\u65b0\u542f\u52a8 nginx"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sudo systemctl restart nginx")),(0,r.kt)("p",null,"7.\u6d4f\u89c8\u5668\u8bbf\u95ee\u524d\u7aef\u9875\u9762\uff1a x.x.x.x:8080"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2649).Z,width:"1600",height:"765"})),(0,r.kt)("p",null,"8.\u8f93\u5165:"),(0,r.kt)("p",null,"\u8d26\u53f7\uff1a",(0,r.kt)("a",{parentName:"p",href:"mailto:super@super.cn"},"super@super.cn")),(0,r.kt)("p",null,"\u5bc6\u7801\uff1a123456"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1991).Z,width:"1600",height:"742"})))}g.isMDXComponent=!0},36:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raspberry_backend_start-eacf6f8e4cd584e97aa4f45aa4403132.png"},1374:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raspberry_db_start-fd640780d904cd6abc38b9987f2394b5.png"},2550:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raspberry_gmqtt_start-e56cd453de2789a41e8bf518cd75f706.png"},1991:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raspberry_home_page-82c82d0c064e6669b758be4003949f2f.png"},2649:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raspberry_login-957b1d3c5e6fee20648fd3f1fa881d71.png"},3643:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raspberry_login_page-957b1d3c5e6fee20648fd3f1fa881d71.png"},2343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raspberry_memory_caclulate-ca73478304ced9f62407a996fa9f50c2.png"},7561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raspberry_memory_uasge-3cd664c1aa408cb341e0d4b627f0ef4a.png"},9439:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raspberry_overview-9f4eb453c529759724273d9bd153f02c.png"},3555:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/raspberry_redis_start-e974cc6f6260b9c564101fc1c11564c8.png"}}]);