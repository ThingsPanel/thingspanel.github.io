"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8430],{25470:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(85893),c=t(11151);const o={sidebar_position:7},r="OPC-UA\u63a5\u5165",s={id:"device-connect/opc-ua",title:"OPC-UA\u63a5\u5165",description:"\u4ec0\u4e48\u662fOPC UA",source:"@site/docs/device-connect/opc-ua.md",sourceDirName:"device-connect",slug:"/device-connect/opc-ua",permalink:"/zh-Hans/docs/device-connect/opc-ua",draft:!1,unlisted:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/device-connect/opc-ua.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"UDP\u63a5\u5165",permalink:"/zh-Hans/docs/device-connect/udp"},next:{title:"RTSP\u6444\u50cf\u5934\u63a5\u5165",permalink:"/zh-Hans/docs/device-connect/rtsp"}},a={},d=[{value:"\u4ec0\u4e48\u662fOPC UA",id:"\u4ec0\u4e48\u662fopc-ua",level:2},{value:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f",id:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f",level:2},{value:"\u901a\u8fc7OPC-UA\u534f\u8bae\u63d2\u4ef6",id:"\u901a\u8fc7opc-ua\u534f\u8bae\u63d2\u4ef6",level:2}];function p(e){const n={a:"a",br:"br",h1:"h1",h2:"h2",p:"p",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"opc-ua\u63a5\u5165",children:"OPC-UA\u63a5\u5165"}),"\n",(0,i.jsx)(n.h2,{id:"\u4ec0\u4e48\u662fopc-ua",children:"\u4ec0\u4e48\u662fOPC UA"}),"\n",(0,i.jsx)(n.p,{children:"OPC UA\u7684\u5168\u540d\u662fOPC Unified Architecture\uff08OPC\u7edf\u4e00\u67b6\u6784\uff09\u3002\u662fOPC\u57fa\u91d1\u4f1a\u5e94\u7528\u5728\u81ea\u52a8\u5316\u6280\u672f\u7684\u673a\u5668\u5bf9\u673a\u5668\u7f51\u7edc\u4f20\u8f93\u534f\u8bae\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["OPC UA\u652f\u63f4\u4e24\u79cd\u901a\u8baf\u534f\u5b9a\uff0c\u8fd9\u4e24\u79cd\u901a\u8baf\u534f\u5b9a\u7684\u5dee\u5f02\u53ea\u6709URL\u7684\u4e0d\u540c\uff0c\u4e8c\u8fdb\u5236\u901a\u8baf\u534f\u5b9a\u662fopc.tcp://Server\uff0c\u800cWeb\u670d\u52a1\u7684\u901a\u8baf\u534f\u5b9a\u662f",(0,i.jsx)(n.a,{href:"http://Server%EF%BC%8C%E5%85%B6%E4%BB%96%E6%83%85%E5%BD%A2%E4%B8%8B%EF%BC%8COPC",children:"http://Server\uff0c\u5176\u4ed6\u60c5\u5f62\u4e0b\uff0cOPC"})," UA\u5bf9\u5e94\u7528\u7a0b\u5e8f\u63a5\u53e3\u7684\u4f5c\u4e1a\u5b8c\u5168\u900f\u660e\uff0c\u5176\u4ed6\u4f5c\u4e1a\u4e0d\u53d7OPC UA\u7684\u5f71\u54cd\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e8c\u8fdb\u5236\u901a\u8baf\u534f\u5b9a\u7684\u6548\u7387\u6700\u9ad8\uff0c\u5176overhead\u4e5f\u6700\u5c11\uff0c\u8ba9\u9700\u8981\u7684\u8d44\u6e90\u6700\u5c0f\u5316\uff08\u4e0d\u9700\u8981XML\u89e3\u6790\u5668\u3001SOAP\u53caHTTP\uff0c\u5bf9\u5d4c\u5165\u5f0f\u7cfb\u7edf\u683c\u5916\u91cd\u8981\uff09\uff0c\u63d0\u4f9b\u6700\u4f73\u7684\u4e92\u64cd\u63a7\u6027\uff08\u5728\u5b9e\u73b0\u65f6\uff0c\u4e8c\u8fdb\u5236\u901a\u8baf\u534f\u5b9a\u63d0\u4f9b\u8f83\u5c11\u7684\u81ea\u7531\u5ea6\uff09\uff0c\u4f7f\u7528\u4efb\u610f\u9009\u53d6\u7684TCP\u901a\u9053\uff0c\u53ef\u4ee5\u8f83\u5bb9\u6613\u7684\u8fdb\u884c\u96a7\u9053\u534f\u8bae\uff0c\u4e5f\u53ef\u4ee5\u4ece\u900f\u8fc7\u9632\u706b\u5899\u5f00\u542f\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Web\u670d\u52a1\uff08SOAP\uff09\u901a\u8baf\u534f\u5b9a\u53ef\u4ee5\u652f\u63f4\u8bb8\u591a\u4e0d\u540c\u7684\u5de5\u5177\uff08\u5305\u62ecJava\u73af\u5883\u6216\u662f.NET\u73af\u5883\u7684\u5de5\u5177\uff09\uff0c\u4f7f\u7528\u6807\u51c6HTTP(S)\u57e0\uff0c\u53ef\u4ee5\u548c\u9632\u706b\u5899\u5171\u540c\u4f7f\u7528\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6240\u6709\u7684\u5b9e\u73b0\u65b9\u5f0f\u90fd\u652f\u63f4\u4e8c\u8fdb\u5236\u901a\u8baf\u534f\u5b9a\uff0c\u4f46\u53ea\u6709\u7528.NET\u5b9e\u73b0\u7684\u8bbe\u5907\u624d\u652f\u63f4SOAP\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f",children:"\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f"}),"\n",(0,i.jsxs)(n.p,{children:["ThingsPanel\u5bf9\u63a5opc-ua\u8bbe\u5907\u3010\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u3011",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://www.bilibili.com/video/BV1G14y1a7iN/?spm_id_from=333.999.0.0",children:"https://www.bilibili.com/video/BV1G14y1a7iN/?spm_id_from=333.999.0.0"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u901a\u8fc7opc-ua\u534f\u8bae\u63d2\u4ef6",children:"\u901a\u8fc7OPC-UA\u534f\u8bae\u63d2\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:"\u6b64\u63d2\u4ef6\u4e3a\u4f01\u4e1a\u7248\u529f\u80fd\uff0c\u5982\u6709\u9700\u6c42\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u3002"})]})}function l(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(67294);const c={},o=i.createContext(c);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);