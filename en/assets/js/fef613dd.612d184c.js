"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4},s="ModBus access",i={unversionedId:"equipment-access/modbus",id:"equipment-access/modbus",title:"ModBus access",description:"\u4ec0\u4e48\u662fmodbus\u534f\u8bae",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/equipment-access/modbus.md",sourceDirName:"equipment-access",slug:"/equipment-access/modbus",permalink:"/en/docs/equipment-access/modbus",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/equipment-access/modbus.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"HTTP access",permalink:"/en/docs/equipment-access/http"},next:{title:"TCP access",permalink:"/en/docs/equipment-access/tcp"}},l={},c=[{value:"\u4ec0\u4e48\u662fmodbus\u534f\u8bae",id:"\u4ec0\u4e48\u662fmodbus\u534f\u8bae",level:2},{value:"\u7b2c\u4e00\u79cd \u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165",id:"\u7b2c\u4e00\u79cd-\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165",level:2},{value:"\u7b2c\u4e8c\u79cd \u4f7f\u7528\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165",id:"\u7b2c\u4e8c\u79cd-\u4f7f\u7528\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165",level:2},{value:"\u4f7f\u7528\u5b98\u65b9Modbus\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165",id:"\u4f7f\u7528\u5b98\u65b9modbus\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165",level:3},{value:"\u534f\u8bae\u5206\u7c7b",id:"\u534f\u8bae\u5206\u7c7b",level:4},{value:"\u63a5\u5165\u6b65\u9aa4",id:"\u63a5\u5165\u6b65\u9aa4",level:4}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modbus-access"},"ModBus access"),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662fmodbus\u534f\u8bae"},"\u4ec0\u4e48\u662fmodbus\u534f\u8bae"),(0,a.kt)("p",null,"Modbus\u662f\u4e00\u79cd\u4e32\u884c\u901a\u4fe1\u534f\u8bae\uff0c\u662fModicon\u516c\u53f8\uff08\u73b0\u5728\u7684\u65bd\u8010\u5fb7\u7535\u6c14 Schneider Electric\uff09\u4e8e1979\u5e74\u4e3a\u4f7f\u7528\u53ef\u7f16\u7a0b\u903b\u8f91\u63a7\u5236\u5668\uff08PLC\uff09\u901a\u4fe1\u800c\u53d1\u8868\u3002Modbus\u5df2\u7ecf\u6210\u4e3a\u5de5\u4e1a\u9886\u57df\u901a\u4fe1\u534f\u8bae\u4e8b\u5b9e\u4e0a\u7684\u4e1a\u754c\u6807\u51c6\uff0c\u5e76\u4e14\u73b0\u5728\u662f\u5de5\u4e1a\u7535\u5b50\u8bbe\u5907\u4e4b\u95f4\u5e38\u7528\u7684\u8fde\u63a5\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"Modbus\u5141\u8bb8\u591a\u4e2a (\u5927\u7ea6240\u4e2a) \u8bbe\u5907\u8fde\u63a5\u5728\u540c\u4e00\u4e2a\u7f51\u7edc\u4e0a\u8fdb\u884c\u901a\u4fe1\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u4e00\u4e2a\u7531\u6d4b\u91cf\u6e29\u5ea6\u548c\u6e7f\u5ea6\u7684\u8bbe\u5907\uff0c\u5e76\u4e14\u5c06\u7ed3\u679c\u53d1\u9001\u7ed9\u8ba1\u7b97\u673a\u3002\u5728\u6570\u636e\u91c7\u96c6\u4e0e\u76d1\u89c6\u63a7\u5236\u7cfb\u7edf\uff08SCADA\uff09\u4e2d\uff0cModbus\u901a\u5e38\u7528\u6765\u8fde\u63a5\u76d1\u63a7\u8ba1\u7b97\u673a\u548c\u8fdc\u7a0b\u7ec8\u7aef\u63a7\u5236\u7cfb\u7edf\uff08RTU\uff09"),(0,a.kt)("p",null,"ThingsPanel\u7684Modbus\u534f\u8bae\u8bbe\u5907\u63a5\u5165\u65b9\u5f0f\u6709\u4ee5\u4e0b\u4e24\u79cd"),(0,a.kt)("h2",{id:"\u7b2c\u4e00\u79cd-\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165"},"\u7b2c\u4e00\u79cd \u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165"),(0,a.kt)("p",null,"\u3010ThingsPanel\u5bf9\u63a5ModBus\u8bbe\u5907(\u901a\u8fc7\u89c4\u5219\u5f15\u64ce)\u3011",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.bilibili.com/video/BV1s14y1h7YQ?share_source=copy_web&vd_source=ffdc396f72a54b325037ada71bc99b05"},"https://www.bilibili.com/video/BV1s14y1h7YQ?share_source=copy_web&vd_source=ffdc396f72a54b325037ada71bc99b05")),(0,a.kt)("p",null,"\u5982\u79c1\u6709\u5316\u90e8\u7f72\u9700\u8981\u81ea\u884c\u5b89\u88c5modbus\u8282\u70b9\uff0c\u4e00\u822c\u9700\u8981\u8fdb\u5165\u5bb9\u5668\u6267\u884c\u547d\u4ee4\u5b89\u88c5\u8fd0\u884c\u73af\u5883"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it containerID /bin/sh\napk add gcc g++ make cmake gfortran libffi-dev openssl-dev libtool\n")),(0,a.kt)("h2",{id:"\u7b2c\u4e8c\u79cd-\u4f7f\u7528\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165"},"\u7b2c\u4e8c\u79cd \u4f7f\u7528\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165"),(0,a.kt)("p",null,"\u534f\u8bae\u63d2\u4ef6\u53ef\u81ea\u884c\u5f00\u53d1\uff0c\u4e5f\u53ef\u76f4\u63a5\u4f7f\u7528\u5b98\u65b9\u63d0\u4f9b\u7684\u534f\u8bae\u63d2\u4ef6",(0,a.kt)("br",{parentName:"p"}),"\n","\u5b98\u65b9\u63d2\u4ef6\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ThingsPanel/modbus-protocol-plugin.git"},"https://github.com/ThingsPanel/modbus-protocol-plugin.git")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u5b98\u65b9modbus\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165"},"\u4f7f\u7528\u5b98\u65b9Modbus\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165"),(0,a.kt)("p",null,"\u5b98\u65b9\u63d0\u4f9b\u7684Modbus\u534f\u8bae\u63d2\u4ef6\u662f\u5355\u72ec\u8fd0\u884c\u7684\u670d\u52a1\uff0c\u901a\u8fc7Modbus\u534f\u8bae\u63d2\u4ef6\uff0c\u8bbe\u5907\u5c31\u53ef\u4ee5\u8ddf\u5e73\u53f0\u4ea4\u4e92\u6570\u636e\u3002\u534f\u8bae\u63d2\u4ef6\u53ef\u4ee5\u4e0eThingsPanel\u5728\u540c\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u53e6\u4e00\u53f0\u53ef\u901a\u8fc7\u7f51\u7edc\u8bbf\u95eeThingsPanel\u5b9e\u4f8b\u7684\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u53e6\u5916\uff0c\u6839\u636e\u9700\u8981\u4e5f\u53ef\u81ea\u884c\u5f00\u53d1\u7684\u534f\u8bae\u63d2\u4ef6\u3002"),(0,a.kt)("h4",{id:"\u534f\u8bae\u5206\u7c7b"},"\u534f\u8bae\u5206\u7c7b"),(0,a.kt)("p",null,"Modbus\u534f\u8bae\u63d2\u4ef6\u652f\u6301\u4e24\u79cd\u6a21\u5f0f\u63a5\u5165\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Modbus TCP\u6a21\u5f0f"),(0,a.kt)("li",{parentName:"ol"},"Modbus RUT\u6a21\u5f0f")),(0,a.kt)("h4",{id:"\u63a5\u5165\u6b65\u9aa4"},"\u63a5\u5165\u6b65\u9aa4"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u8bbe\u5907->\u9009\u62e9\u7f51\u5173->\u7f16\u8f91\u53c2\u6570->\u9009\u62e9",(0,a.kt)("inlineCode",{parentName:"li"},"Modbus TCP\u534f\u8bae"),"\u6216",(0,a.kt)("inlineCode",{parentName:"li"},"Modbus RUT\u534f\u8bae"),"\uff1b\u8ba4\u8bc1\u65b9\u5f0f\u4e3a\u9ed8\u8ba4\u7684AccessToken\u63a5\u5165\uff0c\u8fd9\u91cc\u4f1a\u751f\u6210AccessToken\uff0c\u8bbe\u5907\u4e0e\u534f\u8bae\u63d2\u4ef6\u670d\u52a1\u5efa\u7acb\u8fde\u63a5\u540e\u9700\u8981\u63a8\u9001AccessToken\u5b8c\u6210\u8ba4\u8bc1\u3002 ",(0,a.kt)("img",{alt:"\u7f16\u8f91\u53c2\u6570",src:n(470).Z,width:"2560",height:"1297"})),(0,a.kt)("li",{parentName:"ol"},"\u589e\u52a0\u5b50\u8bbe\u5907\uff0c\u70b9\u5b50\u8bbe\u5907\u7684\u8bbe\u5907\u914d\u7f6e\u6309\u94ae\uff0c\u5728\u89e3\u6790\u6570\u636e\u680f\u51fa\u73b0\u914d\u7f6e\u8868\u5355\u3002\uff08\u9ed8\u8ba4\u5927\u7aef\u6a21\u5f0f\uff09 ",(0,a.kt)("img",{alt:"\u8bbe\u5907\u914d\u7f6e",src:n(9033).Z,width:"2560",height:"1297"})),(0,a.kt)("li",{parentName:"ol"},"\u53c2\u6570\u8bf4\u660e\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u529f\u80fd\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u7b56\u7565\uff08\u79d2\uff09\uff1a\u83b7\u53d6\u8bbe\u5907\u5c5e\u6027\u7684\u65f6\u95f4\u95f4\u9694"),(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u5907\u5730\u5740\uff1a\u5bf9\u5e94RTU\u6a21\u5f0f\u7684\u5730\u5740\u7801\u6216TCP\u6a21\u5f0f\u7684\u5355\u5143\u6807\u8bc6\u7b26"),(0,a.kt)("li",{parentName:"ul"},"\u8d77\u59cb\u5730\u5740\uff1a\u8bfb\u53d6\u4fe1\u606f\u7684\u5176\u5b9e\u5730\u5740\uff08\u5341\u8fdb\u5236\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5730\u5740\u6570\u91cf/\u7ebf\u5708\u6570\u91cf\uff1a\u4e00\u6b21\u8bfb\u53d6\u7684\u5bc4\u5b58\u5668\u5730\u5740\u6570\u91cf\u6216\u7ebf\u5708\u4e2a\u6570\uff0c\u5fc5\u987b\u662f\u6570\u636e\u7c7b\u578b\u540e\u5730\u5740\u6570\u91cf\u7684\u6574\u6570\u500d"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u7c7b\u578b\uff1a\u540c\u4e00\u4e2a\u5b50\u8bbe\u5907\u53ea\u80fd\u8bfb\u53d6\u540c\u4e00\u79cd\u6570\u636e\u7c7b\u578b\u7684\u6570\u636e\uff0c\u5fc5\u987b"),(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u522b\u540d\uff08\u591a\u522b\u540d\u7528\u82f1\u6587,\u9694\u5f00\uff09\uff1a\u522b\u540d\u7684\u6570\u91cf\u662f\u5730\u5740\u6570\u91cf\u6216\u7ebf\u5708\u6570\u91cf\u9664\u6570\u636e\u7c7b\u578b\u540e\u7684\u5730\u5740\u6570"))),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u63a5\u8bbe\u5907\uff08\u53ef\u4f7f\u7528MThing\u4e0a\u4f4d\u673a\u6a21\u62df\u8bbe\u5907\u5bf9\u63a5\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u67e5\u770b\u6570\u636e\u7ba1\u7406\u662f\u5426\u6536\u5230\u6570\u636e"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5408\u9002\u7684\u8bbe\u5907\u63d2\u4ef6\u7ed1\u5b9a\u5230\u5b50\u8bbe\u5907\uff0c\u7136\u540e\u53ef\u67e5\u770b\u6570\u636e\u53ef\u89c6\u5316")))}p.isMDXComponent=!0},470:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/modbus1-08432d753ce994e20a1f648a4ed1a7b0.png"},9033:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/modbus2-587de3025f1ad970a43f7bde5366cd99.png"}}]);