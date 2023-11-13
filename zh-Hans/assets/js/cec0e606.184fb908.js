"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4421],{1207:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>l,toc:()=>r});var i=s(5893),d=s(1151);const c={sidebar_position:4},o="ModBus\u63a5\u5165",l={id:"device-connect/modbus",title:"ModBus\u63a5\u5165",description:"\u4ec0\u4e48\u662fmodbus\u534f\u8bae",source:"@site/docs/device-connect/modbus.md",sourceDirName:"device-connect",slug:"/device-connect/modbus",permalink:"/zh-Hans/docs/device-connect/modbus",draft:!1,unlisted:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/device-connect/modbus.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"HTTP\u63a5\u5165",permalink:"/zh-Hans/docs/device-connect/http"},next:{title:"TCP\u63a5\u5165",permalink:"/zh-Hans/docs/device-connect/tcp"}},t={},r=[{value:"\u4ec0\u4e48\u662fmodbus\u534f\u8bae",id:"\u4ec0\u4e48\u662fmodbus\u534f\u8bae",level:2},{value:"\u7b2c\u4e00\u79cd \u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165",id:"\u7b2c\u4e00\u79cd-\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165",level:2},{value:"\u7b2c\u4e8c\u79cd \u4f7f\u7528\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165",id:"\u7b2c\u4e8c\u79cd-\u4f7f\u7528\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165",level:2},{value:"\u4f7f\u7528\u5b98\u65b9Modbus\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165",id:"\u4f7f\u7528\u5b98\u65b9modbus\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165",level:3},{value:"\u534f\u8bae\u5206\u7c7b",id:"\u534f\u8bae\u5206\u7c7b",level:4},{value:"\u63a5\u5165\u6b65\u9aa4",id:"\u63a5\u5165\u6b65\u9aa4",level:4}];function h(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"modbus\u63a5\u5165",children:"ModBus\u63a5\u5165"}),"\n",(0,i.jsx)(n.h2,{id:"\u4ec0\u4e48\u662fmodbus\u534f\u8bae",children:"\u4ec0\u4e48\u662fmodbus\u534f\u8bae"}),"\n",(0,i.jsx)(n.p,{children:"Modbus\u662f\u4e00\u79cd\u4e32\u884c\u901a\u4fe1\u534f\u8bae\uff0c\u662fModicon\u516c\u53f8\uff08\u73b0\u5728\u7684\u65bd\u8010\u5fb7\u7535\u6c14 Schneider Electric\uff09\u4e8e1979\u5e74\u4e3a\u4f7f\u7528\u53ef\u7f16\u7a0b\u903b\u8f91\u63a7\u5236\u5668\uff08PLC\uff09\u901a\u4fe1\u800c\u53d1\u8868\u3002Modbus\u5df2\u7ecf\u6210\u4e3a\u5de5\u4e1a\u9886\u57df\u901a\u4fe1\u534f\u8bae\u4e8b\u5b9e\u4e0a\u7684\u4e1a\u754c\u6807\u51c6\uff0c\u5e76\u4e14\u73b0\u5728\u662f\u5de5\u4e1a\u7535\u5b50\u8bbe\u5907\u4e4b\u95f4\u5e38\u7528\u7684\u8fde\u63a5\u65b9\u5f0f\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Modbus\u5141\u8bb8\u591a\u4e2a (\u5927\u7ea6240\u4e2a) \u8bbe\u5907\u8fde\u63a5\u5728\u540c\u4e00\u4e2a\u7f51\u7edc\u4e0a\u8fdb\u884c\u901a\u4fe1\uff0c\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u4e00\u4e2a\u7531\u6d4b\u91cf\u6e29\u5ea6\u548c\u6e7f\u5ea6\u7684\u8bbe\u5907\uff0c\u5e76\u4e14\u5c06\u7ed3\u679c\u53d1\u9001\u7ed9\u8ba1\u7b97\u673a\u3002\u5728\u6570\u636e\u91c7\u96c6\u4e0e\u76d1\u89c6\u63a7\u5236\u7cfb\u7edf\uff08SCADA\uff09\u4e2d\uff0cModbus\u901a\u5e38\u7528\u6765\u8fde\u63a5\u76d1\u63a7\u8ba1\u7b97\u673a\u548c\u8fdc\u7a0b\u7ec8\u7aef\u63a7\u5236\u7cfb\u7edf\uff08RTU\uff09"}),"\n",(0,i.jsx)(n.p,{children:"ThingsPanel\u7684Modbus\u534f\u8bae\u8bbe\u5907\u63a5\u5165\u65b9\u5f0f\u6709\u4ee5\u4e0b\u4e24\u79cd"}),"\n",(0,i.jsx)(n.h2,{id:"\u7b2c\u4e00\u79cd-\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165",children:"\u7b2c\u4e00\u79cd \u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u63a5\u5165"}),"\n",(0,i.jsxs)(n.p,{children:["\u3010ThingsPanel\u5bf9\u63a5ModBus\u8bbe\u5907(\u901a\u8fc7\u89c4\u5219\u5f15\u64ce)\u3011",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1s14y1h7YQ?share_source=copy_web&vd_source=ffdc396f72a54b325037ada71bc99b05",children:"https://www.bilibili.com/video/BV1s14y1h7YQ?share_source=copy_web&vd_source=ffdc396f72a54b325037ada71bc99b05"})]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u79c1\u6709\u5316\u90e8\u7f72\u9700\u8981\u81ea\u884c\u5b89\u88c5modbus\u8282\u70b9\uff0c\u4e00\u822c\u9700\u8981\u8fdb\u5165\u5bb9\u5668\u6267\u884c\u547d\u4ee4\u5b89\u88c5\u8fd0\u884c\u73af\u5883"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker exec -it containerID /bin/sh\napk add gcc g++ make cmake gfortran libffi-dev openssl-dev libtool\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7b2c\u4e8c\u79cd-\u4f7f\u7528\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165",children:"\u7b2c\u4e8c\u79cd \u4f7f\u7528\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165"}),"\n",(0,i.jsxs)(n.p,{children:["\u534f\u8bae\u63d2\u4ef6\u53ef\u81ea\u884c\u5f00\u53d1\uff0c\u4e5f\u53ef\u76f4\u63a5\u4f7f\u7528\u5b98\u65b9\u63d0\u4f9b\u7684\u534f\u8bae\u63d2\u4ef6",(0,i.jsx)(n.br,{}),"\n","\u5b98\u65b9\u63d2\u4ef6\uff1a",(0,i.jsx)(n.a,{href:"https://github.com/ThingsPanel/modbus-protocol-plugin.git",children:"https://github.com/ThingsPanel/modbus-protocol-plugin.git"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u4f7f\u7528\u5b98\u65b9modbus\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165",children:"\u4f7f\u7528\u5b98\u65b9Modbus\u534f\u8bae\u63d2\u4ef6\u7684\u65b9\u5f0f\u63a5\u5165"}),"\n",(0,i.jsxs)(n.p,{children:["\u5b98\u65b9\u63d0\u4f9b\u7684Modbus\u534f\u8bae\u63d2\u4ef6\u662f\u5355\u72ec\u8fd0\u884c\u7684\u670d\u52a1\uff0c\u901a\u8fc7Modbus\u534f\u8bae\u63d2\u4ef6\uff0c\u8bbe\u5907\u5c31\u53ef\u4ee5\u8ddf\u5e73\u53f0\u4ea4\u4e92\u6570\u636e\u3002\u534f\u8bae\u63d2\u4ef6\u53ef\u4ee5\u4e0eThingsPanel\u5728\u540c\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u53e6\u4e00\u53f0\u53ef\u901a\u8fc7\u7f51\u7edc\u8bbf\u95eeThingsPanel\u5b9e\u4f8b\u7684\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\u3002",(0,i.jsx)(n.br,{}),"\n","\u53e6\u5916\uff0c\u6839\u636e\u9700\u8981\u4e5f\u53ef\u81ea\u884c\u5f00\u53d1\u7684\u534f\u8bae\u63d2\u4ef6\u3002"]}),"\n",(0,i.jsx)(n.h4,{id:"\u534f\u8bae\u5206\u7c7b",children:"\u534f\u8bae\u5206\u7c7b"}),"\n",(0,i.jsx)(n.p,{children:"Modbus\u534f\u8bae\u63d2\u4ef6\u652f\u6301\u4e24\u79cd\u6a21\u5f0f\u63a5\u5165\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Modbus TCP\u6a21\u5f0f"}),"\n",(0,i.jsx)(n.li,{children:"Modbus RUT\u6a21\u5f0f"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u63a5\u5165\u6b65\u9aa4",children:"\u63a5\u5165\u6b65\u9aa4"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u521b\u5efa\u8bbe\u5907->\u9009\u62e9\u7f51\u5173->\u7f16\u8f91\u53c2\u6570->\u9009\u62e9",(0,i.jsx)(n.code,{children:"Modbus TCP\u534f\u8bae"}),"\u6216",(0,i.jsx)(n.code,{children:"Modbus RUT\u534f\u8bae"}),"\uff1b\u8ba4\u8bc1\u65b9\u5f0f\u4e3a\u9ed8\u8ba4\u7684AccessToken\u63a5\u5165\uff0c\u8fd9\u91cc\u4f1a\u751f\u6210AccessToken\uff0c\u8bbe\u5907\u4e0e\u534f\u8bae\u63d2\u4ef6\u670d\u52a1\u5efa\u7acb\u8fde\u63a5\u540e\u9700\u8981\u63a8\u9001AccessToken\u5b8c\u6210\u8ba4\u8bc1\u3002\n",(0,i.jsx)(n.img,{alt:"\u7f16\u8f91\u53c2\u6570",src:s(2870).Z+"",width:"2560",height:"1297"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u589e\u52a0\u5b50\u8bbe\u5907\uff0c\u70b9\u5b50\u8bbe\u5907\u7684\u8bbe\u5907\u914d\u7f6e\u6309\u94ae\uff0c\u5728\u89e3\u6790\u6570\u636e\u680f\u51fa\u73b0\u914d\u7f6e\u8868\u5355\u3002\uff08\u9ed8\u8ba4\u5927\u7aef\u6a21\u5f0f\uff09\n",(0,i.jsx)(n.img,{alt:"\u8bbe\u5907\u914d\u7f6e",src:s(1967).Z+"",width:"2560",height:"1297"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u53c2\u6570\u8bf4\u660e\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u529f\u80fd\u7801"}),"\n",(0,i.jsx)(n.li,{children:"\u8bfb\u53d6\u7b56\u7565\uff08\u79d2\uff09\uff1a\u83b7\u53d6\u8bbe\u5907\u5c5e\u6027\u7684\u65f6\u95f4\u95f4\u9694"}),"\n",(0,i.jsx)(n.li,{children:"\u8bbe\u5907\u5730\u5740\uff1a\u5bf9\u5e94RTU\u6a21\u5f0f\u7684\u5730\u5740\u7801\u6216TCP\u6a21\u5f0f\u7684\u5355\u5143\u6807\u8bc6\u7b26"}),"\n",(0,i.jsx)(n.li,{children:"\u8d77\u59cb\u5730\u5740\uff1a\u8bfb\u53d6\u4fe1\u606f\u7684\u5176\u5b9e\u5730\u5740\uff08\u5341\u8fdb\u5236\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u5730\u5740\u6570\u91cf/\u7ebf\u5708\u6570\u91cf\uff1a\u4e00\u6b21\u8bfb\u53d6\u7684\u5bc4\u5b58\u5668\u5730\u5740\u6570\u91cf\u6216\u7ebf\u5708\u4e2a\u6570\uff0c\u5fc5\u987b\u662f\u6570\u636e\u7c7b\u578b\u540e\u5730\u5740\u6570\u91cf\u7684\u6574\u6570\u500d"}),"\n",(0,i.jsx)(n.li,{children:"\u6570\u636e\u7c7b\u578b\uff1a\u540c\u4e00\u4e2a\u5b50\u8bbe\u5907\u53ea\u80fd\u8bfb\u53d6\u540c\u4e00\u79cd\u6570\u636e\u7c7b\u578b\u7684\u6570\u636e\uff0c\u5fc5\u987b"}),"\n",(0,i.jsx)(n.li,{children:"\u5c5e\u6027\u522b\u540d\uff08\u591a\u522b\u540d\u7528\u82f1\u6587,\u9694\u5f00\uff09\uff1a\u522b\u540d\u7684\u6570\u91cf\u662f\u5730\u5740\u6570\u91cf\u6216\u7ebf\u5708\u6570\u91cf\u9664\u6570\u636e\u7c7b\u578b\u540e\u7684\u5730\u5740\u6570"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u63a5\u8bbe\u5907\uff08\u53ef\u4f7f\u7528MThing\u4e0a\u4f4d\u673a\u6a21\u62df\u8bbe\u5907\u5bf9\u63a5\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u67e5\u770b\u6570\u636e\u7ba1\u7406\u662f\u5426\u6536\u5230\u6570\u636e"}),"\n",(0,i.jsx)(n.li,{children:"\u9009\u62e9\u5408\u9002\u7684\u8bbe\u5907\u63d2\u4ef6\u7ed1\u5b9a\u5230\u5b50\u8bbe\u5907\uff0c\u7136\u540e\u53ef\u67e5\u770b\u6570\u636e\u53ef\u89c6\u5316"}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2870:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/modbus1-08432d753ce994e20a1f648a4ed1a7b0.png"},1967:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/modbus2-587de3025f1ad970a43f7bde5366cd99.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>o});var i=s(7294);const d={},c=i.createContext(d);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);