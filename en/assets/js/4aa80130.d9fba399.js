"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,k=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:2},l="Docker\u5b89\u88c5",a={unversionedId:"system-installation/docker_installation",id:"system-installation/docker_installation",title:"Docker\u5b89\u88c5",description:"Almalinux(centos)\u5b89\u88c5docker\u548cgit",source:"@site/docs/system-installation/docker_installation.md",sourceDirName:"system-installation",slug:"/system-installation/docker_installation",permalink:"/en/docs/system-installation/docker_installation",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-installation/docker_installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u73af\u5883\u8981\u6c42",permalink:"/en/docs/system-installation/environmental_requirement"},next:{title:"\u6e90\u7801\u5b89\u88c5",permalink:"/en/docs/system-installation/source_code.installation"}},c={},s=[{value:"Almalinux(centos)\u5b89\u88c5docker\u548cgit",id:"almalinuxcentos\u5b89\u88c5docker\u548cgit",level:2},{value:"\u62c9\u53d6thingsPanel-go-docker",id:"\u62c9\u53d6thingspanel-go-docker",level:2},{value:"\u8fd0\u884c\u9879\u76ee",id:"\u8fd0\u884c\u9879\u76ee",level:2},{value:"\u524d\u53f0\u8bbf\u95ee",id:"\u524d\u53f0\u8bbf\u95ee",level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker\u5b89\u88c5"},"Docker\u5b89\u88c5"),(0,o.kt)("h2",{id:"almalinuxcentos\u5b89\u88c5docker\u548cgit"},"Almalinux(centos)\u5b89\u88c5docker\u548cgit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sudo dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\nsudo dnf install docker-ce docker-ce-cli containerd.io\nsudo systemctl start docker.service\nsudo systemctl enable docker.service\nsudo docker version\nsudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\ndnf install git\n')),(0,o.kt)("h2",{id:"\u62c9\u53d6thingspanel-go-docker"},"\u62c9\u53d6thingsPanel-go-docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/ThingsPanel/thingsPanel-go-docker.git\ncd thingsPanel-go-docker\n")),(0,o.kt)("h2",{id:"\u8fd0\u884c\u9879\u76ee"},"\u8fd0\u884c\u9879\u76ee"),(0,o.kt)("p",null,"\u524d\u53f0\u542f\u52a8\u9879\u76ee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose -f docker-compose.yml up\n")),(0,o.kt)("p",null,"\u540e\u53f0\u542f\u52a8\u9879\u76ee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker-compose -f docker-compose.yml up -d\n")),(0,o.kt)("p",null,"\u505c\u6b62\u670d\u52a1"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," docker-compose -f docker-compose.yml down\n")),(0,o.kt)("h2",{id:"\u524d\u53f0\u8bbf\u95ee"},"\u524d\u53f0\u8bbf\u95ee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- \u5730\u5740\uff1a:8080\n- \u7528\u6237\u540d\uff1aadmin@thingspanel.cn\n- \u5bc6\u7801\uff1a123456\n")))}p.isMDXComponent=!0}}]);