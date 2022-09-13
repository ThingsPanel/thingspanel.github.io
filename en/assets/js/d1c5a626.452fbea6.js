"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||o;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},l="Docker\u5b89\u88c5",i={unversionedId:"system-installation/docker_installation",id:"system-installation/docker_installation",title:"Docker\u5b89\u88c5",description:"linux\u73af\u5883\u51c6\u5907",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/system-installation/docker_installation.md",sourceDirName:"system-installation",slug:"/system-installation/docker_installation",permalink:"/en/docs/system-installation/docker_installation",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-installation/docker_installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u73af\u5883\u8981\u6c42",permalink:"/en/docs/system-installation/environmental_requirement"},next:{title:"\u6e90\u7801\u5b89\u88c5",permalink:"/en/docs/system-installation/source_code.installation"}},s={},p=[{value:"linux\u73af\u5883\u51c6\u5907",id:"linux\u73af\u5883\u51c6\u5907",level:2},{value:"\u5f00\u59cb\u5b89\u88c5",id:"\u5f00\u59cb\u5b89\u88c5",level:2},{value:"\u6302\u8f7d\u8bf4\u660e",id:"\u6302\u8f7d\u8bf4\u660e",level:2},{value:"\u67e5\u770b\u5bb9\u5668\u8fd0\u884c\u65e5\u5fd7",id:"\u67e5\u770b\u5bb9\u5668\u8fd0\u884c\u65e5\u5fd7",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker\u5b89\u88c5"},"Docker\u5b89\u88c5"),(0,r.kt)("h2",{id:"linux\u73af\u5883\u51c6\u5907"},"linux\u73af\u5883\u51c6\u5907"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"windows\u73af\u5883\u4e0b\u8bf7\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"Docker Desktop"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"git"),"\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b89\u88c5docker")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"dnf config-manager --add-repo <https://download.docker.com/linux/centos/docker-ce.repo>\ndnf install docker-ce docker-ce-cli containerd.io\nsystemctl start docker.service\nsystemctl enable docker.service\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b89\u88c5docker-compose")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},'curl -L "<https://github.com/docker/compose/releases/download/v2.9.0/docker-compose>-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nchmod +x /usr/local/bin/docker-compose\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5982\u6ca1\u6709\u5b89\u88c5git")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dnf install git -y\n")))),(0,r.kt)("h2",{id:"\u5f00\u59cb\u5b89\u88c5"},"\u5f00\u59cb\u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u62c9\u53d6\u9879\u76ee")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"# \u62c9\u53d6docker\u914d\u7f6e\ngit clone https://github.com/ThingsPanel/thingsPanel-go-docker.git\ncd thingsPanel-go-docker\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u8fd0\u884c\u9879\u76ee")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"thingsPanel-go-docker"),"\u76ee\u5f55\u4e0b(win\u9700\u8981\u6253\u5f00",(0,r.kt)("inlineCode",{parentName:"p"},"cmd")," \u7a97\u53e3) "),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"    # \u4ee5\u65e5\u5fd7\u663e\u793a\u524d\u53f0\u65b9\u5f0f\u542f\u52a8\u9879\u76ee(\u9ed8\u8ba4\u8d26\u6237\u548c\u5bc6\u7801 super@super.cn 123456)(\u9ed8\u8ba4\u7aef\u53e38080)\n    docker-compose -f docker-compose.yml up\n    # \u6216\u8005\u4ee5\u9690\u85cf\u65e5\u5fd7\u663e\u793a\u7684\u65b9\u5f0f\u542f\u52a8\u9879\u76ee\n    docker-compose -f docker-compose.yml up -d\n    # \u505c\u6b62\u670d\u52a1\n    docker-compose -f docker-compose.yml down\n"))))),(0,r.kt)("h2",{id:"\u6302\u8f7d\u8bf4\u660e"},"\u6302\u8f7d\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u67e5\u770b\u6302\u8f7d\u7684\u5377(\u540e\u9762\u975e./\u5f00\u5934\u7684\u76ee\u5f55\u4e3a\u5377)")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker volume ls\ndocker volume inspect xxx\nthingspanel-go #\u540e\u7aef\nthingspanel-html #\u524d\u7aef\nthingspanel-postgres #\u6570\u636e\u5e93\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u65e5\u5fd7")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./init_files/backend/logs/\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u63d2\u4ef6\u76ee\u5f55")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u65e0\u9700\u91cd\u542f\u5bb9\u5668 "),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    thingspanel-go/extensions/\n")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u540e\u7aef\u4ee3\u7801\u76ee\u5f55")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u5728\u6b64\u5904\u66f4\u65b0\u548c\u7f16\u8bd1\u4ee3\u7801\uff0c\u7f16\u8bd1\u540e\u91cd\u542f\u540e\u7aef\u5bb9\u5668 "),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    thingspanel-go\n")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u524d\u7aef\u4ee3\u7801\u76ee\u5f55")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u53ef\u5c06vue\u6253\u5305\u597d\u7684\u6587\u4ef6\u653e\u5728\u6b64\u5904\uff0c\u91cd\u542f\u524d\u7aef\u5bb9\u5668 "),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"    thingspanel-html\n"))))),(0,r.kt)("h2",{id:"\u67e5\u770b\u5bb9\u5668\u8fd0\u884c\u65e5\u5fd7"},"\u67e5\u770b\u5bb9\u5668\u8fd0\u884c\u65e5\u5fd7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"docker logs -f containerID\n\u6216\n./init_files/files/log/\n")),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("p",null,"\u7aef\u53e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"8080\uff08\u524d\u7aef\u670d\u52a1\u7aef\u53e3\uff09\n9998\uff08tcp\u7aef\u53e3\uff09\n9999\uff08API\u7aef\u53e3\uff09\n1883\uff08mqtt\u7aef\u53e3\uff09\n5432\uff08postogresql\u7aef\u53e3\uff09\n6379\uff08redis\u7aef\u53e3\uff09\n")),(0,r.kt)("p",null,"mqtt\u8ba2\u9605\u4e3b\u9898\uff1athingspanel.telemetry",(0,r.kt)("br",{parentName:"p"}),"\n","mqtt\u9ed8\u8ba4\u8d26\u53f7\uff1aguest",(0,r.kt)("br",{parentName:"p"}),"\n","mqtt\u9ed8\u8ba4\u5bc6\u7801\uff1aguest"),(0,r.kt)("admonition",{title:"\u6d4b\u8bd5\u6848\u4f8b",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'\u6e29\u6e7f\u5ea6\u6570\u636e\u63a8\u9001\uff1a{"token":"123456","type":"ep","values":{"temp":23.0,"hum":13}}',(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"\u6ce8\u610f\u6570\u5b57\u548c\u5b57\u7b26\u4e32\u7684\u533a\u5206"))))}m.isMDXComponent=!0}}]);