"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9912],{3748:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=s(5893),c=s(1151);const o={sidebar_position:2},r="Docker\u5b89\u88c5",l={id:"system-installation/docker_installation",title:"Docker\u5b89\u88c5",description:"linux\u73af\u5883\u51c6\u5907",source:"@site/docs/system-installation/docker_installation.md",sourceDirName:"system-installation",slug:"/system-installation/docker_installation",permalink:"/zh-Hans/docs/system-installation/docker_installation",draft:!1,unlisted:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-installation/docker_installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u73af\u5883\u8981\u6c42",permalink:"/zh-Hans/docs/system-installation/environmental_requirement"},next:{title:"\u6e90\u7801\u5b89\u88c5",permalink:"/zh-Hans/docs/system-installation/source_code.installation"}},t={},d=[{value:"linux\u73af\u5883\u51c6\u5907",id:"linux\u73af\u5883\u51c6\u5907",level:2},{value:"\u5f00\u59cb\u5b89\u88c5",id:"\u5f00\u59cb\u5b89\u88c5",level:2},{value:"\u6302\u8f7d\u8bf4\u660e",id:"\u6302\u8f7d\u8bf4\u660e",level:2},{value:"\u67e5\u770b\u5bb9\u5668\u8fd0\u884c\u65e5\u5fd7",id:"\u67e5\u770b\u5bb9\u5668\u8fd0\u884c\u65e5\u5fd7",level:2},{value:"\u7aef\u53e3\u8bf4\u660e",id:"\u7aef\u53e3\u8bf4\u660e",level:2}];function a(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"docker\u5b89\u88c5",children:"Docker\u5b89\u88c5"}),"\n",(0,i.jsx)(e.h2,{id:"linux\u73af\u5883\u51c6\u5907",children:"linux\u73af\u5883\u51c6\u5907"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["windows\u73af\u5883\u4e0b\u8bf7\u5b89\u88c5",(0,i.jsx)(e.code,{children:"Docker Desktop"}),"\u548c",(0,i.jsx)(e.code,{children:"git"}),"\u3002"]})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5b89\u88c5docker\uff08centos\uff09"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:"showLineNumbers",children:"dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\ndnf install docker-ce docker-ce-cli containerd.io\nsystemctl start docker.service\nsystemctl enable docker.service\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5b89\u88c5docker-compose"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:"showLineNumbers",children:'curl -L "https://github.com/docker/compose/releases/download/v2.9.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u4e0b\u8f7d\u592a\u6162\u53ef\u66ff\u6362"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:"showLineNumbers",children:'curl -L "https://get.daocloud.io/docker/compose/releases/download/v2.9.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u5982\u6ca1\u6709\u5b89\u88c5git"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"dnf install git -y\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5f00\u59cb\u5b89\u88c5",children:"\u5f00\u59cb\u5b89\u88c5"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u62c9\u53d6\u9879\u76ee"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:"showLineNumbers",children:"# \u62c9\u53d6docker\u914d\u7f6e\ngit clone https://github.com/ThingsPanel/thingspanel-docker.git\ncd thingspanel-docker\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u8fd0\u884c\u9879\u76ee"})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5728",(0,i.jsx)(e.code,{children:"thingspanel-docker"}),"\u76ee\u5f55\u4e0b(win\u9700\u8981\u6253\u5f00",(0,i.jsx)(e.code,{children:"cmd"})," \u7a97\u53e3)"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:"showLineNumbers",children:"# \u4ee5\u65e5\u5fd7\u663e\u793a\u524d\u53f0\u65b9\u5f0f\u542f\u52a8\u9879\u76ee(\u9ed8\u8ba4\u7aef\u53e38080)\ndocker-compose -f docker-compose.yml up\n# \u6216\u8005\u4ee5\u9690\u85cf\u65e5\u5fd7\u663e\u793a\u7684\u65b9\u5f0f\u542f\u52a8\u9879\u76ee\ndocker-compose -f docker-compose.yml up -d\n# \u505c\u6b62\u670d\u52a1\ndocker-compose -f docker-compose.yml down\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u767b\u5f55"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8f93\u5165",(0,i.jsx)(e.strong,{children:"\u670d\u52a1\u5668ip:8080"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u7cfb\u7edf\u7ba1\u7406\u5458 ",(0,i.jsx)(e.a,{href:"mailto:super@super.cn",children:"super@super.cn"})," / 123456"]}),"\n",(0,i.jsxs)(e.li,{children:["\u79df\u6237\u7ba1\u7406\u5458 ",(0,i.jsx)(e.a,{href:"mailto:tenant@tenant.cn",children:"tenant@tenant.cn"})," / 123456"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6302\u8f7d\u8bf4\u660e",children:"\u6302\u8f7d\u8bf4\u660e"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u914d\u7f6e\u6587\u4ef6\u3001\u65e5\u5fd7\u4ee5\u53ca\u5176\u4ed6\u5dee\u5206\u6587\u4ef6"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"./data\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"docker\u6570\u636e\u5377\u540d"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"go\ngmqtt\nnginx\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u67e5\u770b\u5bb9\u5668\u8fd0\u884c\u65e5\u5fd7",children:"\u67e5\u770b\u5bb9\u5668\u8fd0\u884c\u65e5\u5fd7"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:"showLineNumbers",children:"docker logs -f containerID\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u7aef\u53e3\u8bf4\u660e",children:"\u7aef\u53e3\u8bf4\u660e"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",metastring:"showLineNumbers",children:"8080\uff08\u524d\u7aef\u670d\u52a1\u7aef\u53e3\uff09\n9999\uff08\u540e\u7aefAPI\u7aef\u53e3\uff09\n1883\uff08mqtt\u7aef\u53e3\uff09\n8883\uff08mqtts\u7aef\u53e3\uff09\n5432\uff08postgresql\u7aef\u53e3\uff09\n6379\uff08redis\u7aef\u53e3\uff09\n1880\uff08\u89c4\u5219\u5f15\u64ce\u7aef\u53e3\uff09\n"})}),"\n",(0,i.jsx)(e.admonition,{title:"\u8bbe\u5907\u5bf9\u63a5",type:"tip",children:(0,i.jsxs)(e.p,{children:["\u8bbe\u5907\u63a5\u5165\u8bf7\u53c2\u8003\n",(0,i.jsx)(e.a,{href:"../device-connect/mqtt",children:(0,i.jsx)(e.code,{children:"mqtt\u5bf9\u63a5"})})]})})]})}function h(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>r});var i=s(7294);const c={},o=i.createContext(c);function r(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);