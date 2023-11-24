"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7674],{14680:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var s=i(85893),c=i(11151);const l={sidebar_position:5},t="TCP\u63a5\u5165",d={id:"device-connect/tcp",title:"TCP\u63a5\u5165",description:"TCP\u534f\u8bae\u8bbe\u5907\u63a5\u5165\u6709\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f",source:"@site/docs/device-connect/tcp.md",sourceDirName:"device-connect",slug:"/device-connect/tcp",permalink:"/zh-Hans/docs/device-connect/tcp",draft:!1,unlisted:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/device-connect/tcp.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"ModBus\u63a5\u5165",permalink:"/zh-Hans/docs/device-connect/modbus"},next:{title:"CoAP\u63a5\u5165",permalink:"/zh-Hans/docs/device-connect/coap"}},r={},h=[{value:"\u7b2c\u4e00\u79cd\uff1a\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f",id:"\u7b2c\u4e00\u79cd\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f",level:2},{value:"\u7b2c\u4e8c\u79cd\uff1a\u4f7f\u7528TCP\u534f\u8bae\u63d2\u4ef6\u65b9\u5f0f\u63a5\u5165",id:"\u7b2c\u4e8c\u79cd\u4f7f\u7528tcp\u534f\u8bae\u63d2\u4ef6\u65b9\u5f0f\u63a5\u5165",level:2},{value:"\u534f\u8bae\u5206\u7c7b",id:"\u534f\u8bae\u5206\u7c7b",level:3},{value:"\u81ea\u5b9a\u4e49TCP\u534f\u8bae",id:"\u81ea\u5b9a\u4e49tcp\u534f\u8bae",level:3},{value:"\u5bf9\u63a5\u6b65\u9aa4\uff1a",id:"\u5bf9\u63a5\u6b65\u9aa4",level:4},{value:"\u5b98\u65b9TCP\u534f\u8bae",id:"\u5b98\u65b9tcp\u534f\u8bae",level:3},{value:"\u89c4\u8303",id:"\u89c4\u8303",level:4},{value:"\u5bf9\u63a5\u6b65\u9aa4",id:"\u5bf9\u63a5\u6b65\u9aa4-1",level:4},{value:"TCP\u534f\u8bae\u63d2\u4ef6github\u5e93",id:"tcp\u534f\u8bae\u63d2\u4ef6github\u5e93",level:3}];function o(n){const e={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"tcp\u63a5\u5165",children:"TCP\u63a5\u5165"}),"\n",(0,s.jsx)(e.p,{children:"TCP\u534f\u8bae\u8bbe\u5907\u63a5\u5165\u6709\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f"}),"\n",(0,s.jsx)(e.h2,{id:"\u7b2c\u4e00\u79cd\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f",children:"\u7b2c\u4e00\u79cd\uff1a\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u7684\u65b9\u5f0f"}),"\n",(0,s.jsxs)(e.p,{children:["ThingsPanel\u5bf9\u63a5\u81ea\u5b9a\u4e49TCP\u8bbe\u5907\u3010\u901a\u8fc7\u89c4\u5219\u5f15\u64ce\u3011",(0,s.jsx)(e.br,{}),"\n",(0,s.jsx)(e.a,{href:"https://www.bilibili.com/video/BV1Xe411K7Lk/?spm_id_from=333.999.0.0",children:"https://www.bilibili.com/video/BV1Xe411K7Lk/?spm_id_from=333.999.0.0"})]}),"\n",(0,s.jsx)(e.h2,{id:"\u7b2c\u4e8c\u79cd\u4f7f\u7528tcp\u534f\u8bae\u63d2\u4ef6\u65b9\u5f0f\u63a5\u5165",children:"\u7b2c\u4e8c\u79cd\uff1a\u4f7f\u7528TCP\u534f\u8bae\u63d2\u4ef6\u65b9\u5f0f\u63a5\u5165"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"TCP\u534f\u8bae\u63d2\u4ef6"}),"\u662f\u5355\u72ec\u8fd0\u884c\u7684\u670d\u52a1\uff0c\u901a\u8fc7TCP\u534f\u8bae\u63d2\u4ef6\uff0c\u8bbe\u5907\u5c31\u53ef\u4ee5\u8ddf\u5e73\u53f0\u4ea4\u4e92\u6570\u636e\u3002\u534f\u8bae\u63d2\u4ef6\u53ef\u4ee5\u4e0eThingsPanel\u5728\u540c\u4e00\u53f0\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5\u5728\u53e6\u4e00\u53f0\u53ef\u901a\u8fc7\u7f51\u7edc\u8bbf\u95eeThingsPanel\u5b9e\u4f8b\u7684\u8ba1\u7b97\u673a\u4e0a\u8fd0\u884c\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"\u534f\u8bae\u5206\u7c7b",children:"\u534f\u8bae\u5206\u7c7b"}),"\n",(0,s.jsx)(e.p,{children:"TCP\u534f\u8bae\u63d2\u4ef6\u652f\u6301\u4e24\u79cdTCP\u7c7b\u578b\u7684\u62a5\u6587\u63a5\u5165\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u81ea\u5b9a\u4e49TCP\u534f\u8bae"}),"\n",(0,s.jsx)(e.li,{children:"\u5b98\u65b9TCP\u534f\u8bae"}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["\u4e24\u79cdTCP\u7c7b\u578b\u7684\u63a5\u5165\u90fd\u652f\u6301",(0,s.jsx)(e.strong,{children:"\u6807\u51c6\u8bbe\u5907"}),"\u548c",(0,s.jsx)(e.strong,{children:"\u7f51\u5173\u8bbe\u5907"})]})}),"\n",(0,s.jsx)(e.h3,{id:"\u81ea\u5b9a\u4e49tcp\u534f\u8bae",children:"\u81ea\u5b9a\u4e49TCP\u534f\u8bae"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u900f\u4f20\u7684\u65b9\u5f0f\u4eceTCP\u534f\u8bae\u63d2\u4ef6\u53d1\u9001\u6d88\u606f\u5230\u5e73\u53f0\u6216\u4ece\u534f\u8bae\u63d2\u4ef6\u63a5\u6536\u5e73\u53f0\u53d1\u6765\u7684\u6d88\u606f\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u5bf9\u63a5\u6b65\u9aa4",children:"\u5bf9\u63a5\u6b65\u9aa4\uff1a"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728\u5e73\u53f0\u521b\u5efa\u8bbe\u5907\uff0c\u9009\u62e9\u8bbe\u5907\u6216\u7f51\u5173\uff0c\u70b9\u51fb\u7f16\u8f91\u53c2\u6570\uff0c\u9009\u62e9",(0,s.jsx)(e.code,{children:"\u81ea\u5b9a\u4e49TCP\u534f\u8bae"}),",\u83b7\u53d6\u8ba4\u8bc1\u4ee4\u724cAccessToken\uff0c\u67e5\u770b\u8bbf\u95ee\u5730\u5740\u3002\n",(0,s.jsx)(e.img,{alt:"\u7f16\u8f91\u53c2\u6570",src:i(12702).Z+"",width:"874",height:"522"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u70b9\u51fb\u8bbe\u5907\u914d\u7f6e\uff0c\u5728\u6570\u636e\u89e3\u6790\u680f\u586b\u5199\u7f13\u51b2\u533a\u5927\u5c0f\uff08\u9ed8\u8ba41KB\uff09\u3002\n",(0,s.jsx)(e.img,{alt:"\u8bbe\u5907\u914d\u7f6e",src:i(67164).Z+"",width:"1016",height:"402"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6839\u636e\u81ea\u5b9a\u4e49\u6d88\u606f\u7f16\u5199\u6570\u636e\u5904\u7406\u811a\u672c\uff08\u8bbe\u5907\u5217\u8868->\u7f16\u8f91\u53c2\u6570->\u6570\u636e\u5904\u7406\u811a\u672c\uff09\u3002"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4e0a\u884c\u89e3\u6790\u811a\u672c\n\u9700\u8981\u5c06\u81ea\u5b9a\u4e49\u7684tcp\u6d88\u606f\u683c\u5f0f\u5904\u7406\u6210\u5e73\u53f0\u53ef\u4f7f\u7528\u7684\u683c\u5f0f\uff0c\u4f8b\u5982\uff08\u5e73\u53f0\u53ef\u4f7f\u7528\u7684\u683c\u5f0f\uff09\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8bbe\u5907\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{"temperature":36.5,"humidity":52}\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:'\u7f51\u5173\uff1a\n"3c20c6206"\u4e3a\u5b50\u8bbe\u5907\u5730\u5740\uff08\u8bbe\u5907\u5217\u8868->\u7f16\u8f91\u53c2\u6570\uff08\u5b50\u8bbe\u5907\uff09\uff09\u3002'}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{"3c20c6206":{"temperature":36.5,"humidity":52}}\n'})}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u4e0b\u884c\u89e3\u6790\u811a\u672c\n\u4e0b\u884c\u811a\u672c\u4e0e\u4e0a\u884c\u811a\u672c\u76f8\u53cd\uff0c\u9700\u8981\u5c06\u5e73\u53f0\u683c\u5f0f\u8f6c\u6362\u4e3a\u81ea\u5b9a\u4e49\u7684tcp\u6d88\u606f\u683c\u5f0f"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u8bbe\u5907\u4e0e\u534f\u8bae\u63d2\u4ef6\u5efa\u7acb\u8fde\u63a5\u540e\uff0c\u9996\u5148\u9700\u8981\u63a8\u9001\u8ba4\u8bc1\u4fe1\u606f\uff08AccessToken\uff09,\u901a\u8fc7\u8ba4\u8bc1\u540e\u5c31\u53ef\u4ee5\u4e0a\u62a5\u6570\u636e\u5230\u5e73\u53f0\u6216\u63a5\u6536\u5e73\u53f0\u7684\u6570\u636e\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u5b98\u65b9tcp\u534f\u8bae",children:"\u5b98\u65b9TCP\u534f\u8bae"}),"\n",(0,s.jsx)(e.p,{children:"\u5b98\u65b9TCP\u534f\u8bae\u662f\u534f\u8bae\u63d2\u4ef6\u5b9a\u4e49\u7684\u89c4\u8303\uff0c\u6309\u7167\u6b64\u89c4\u8303\u4fbf\u53ef\u4ee5\u5bf9\u63a5\u5230\u5e73\u53f0\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u89c4\u8303",children:"\u89c4\u8303"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u670d\u52a1\u5668\u4e4b\u524d\uff0c\u5fc5\u987b\u5728 thingsPanel \u4e2d\u521b\u5efa IoT \u8bbe\u5907\u5e76\u83b7\u53d6\u8bbf\u95ee\u4ee4\u724c\u3002 \u7136\u540e\u5ba2\u6237\u7aef\u53d1\u9001\u4ee5\u4e0b\u7ed3\u6784\uff1a"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"IDENT"}),(0,s.jsx)(e.th,{children:"IDENT"}),(0,s.jsx)(e.th,{children:"TYPE"}),(0,s.jsx)(e.th,{children:"CMD"}),(0,s.jsx)(e.th,{children:"LENGTH"}),(0,s.jsx)(e.th,{children:"PAYLOAD"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"'T'"}),(0,s.jsx)(e.td,{children:"'P'"}),(0,s.jsx)(e.td,{children:"1 byte"}),(0,s.jsx)(e.td,{children:"1 byte"}),(0,s.jsx)(e.td,{children:"4 byte"}),(0,s.jsx)(e.td,{children:"Variable"})]})})]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["TYPE\uff1a",(0,s.jsx)(e.br,{}),"\n","0x0\uff1a\u6570\u636e\u5305",(0,s.jsx)(e.br,{}),"\n","0x1\uff1a\u5fc3\u8df3\u6570\u636e\u5305"]}),"\n",(0,s.jsxs)(e.li,{children:["CMD\uff1a",(0,s.jsx)(e.br,{}),"\n","0x0\uff1a\u8bbe\u5907\u8eab\u4efd\u9a8c\u8bc1",(0,s.jsx)(e.br,{}),"\n","0x1\uff1a\u53d1\u5e03\u5c5e\u6027",(0,s.jsx)(e.br,{}),"\n","0x2\uff1a\u63a8\u9001\u4e8b\u4ef6"]}),"\n",(0,s.jsx)(e.li,{children:"LENGTH\uff1aPAYLOAD\u7684\u957f\u5ea6"}),"\n",(0,s.jsxs)(e.li,{children:["PAYLOAD\uff1a\u6709\u6548\u8f7d\u8377\u6570\u636e\n\u5982\u679c CMD 0x0\uff0c\u5219PAYLOAD\u662f\u8bbf\u95ee\u4ee4\u724c",(0,s.jsx)(e.br,{}),"\n","\u5982\u679c CMD 0x1\uff0c\u5219PAYLOAD\u662f\u5c5e\u6027",(0,s.jsx)(e.br,{}),"\n","\u5982\u679c CMD 0x2\uff0c\u5219PAYLOAD\u662f\u4e8b\u4ef6"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"\u5bf9\u63a5\u6b65\u9aa4-1",children:"\u5bf9\u63a5\u6b65\u9aa4"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\u5728\u5e73\u53f0\u521b\u5efa\u8bbe\u5907\uff0c\u9009\u62e9\u8bbe\u5907\u6216\u7f51\u5173\uff0c\u70b9\u51fb\u7f16\u8f91\u53c2\u6570\uff0c\u9009\u62e9",(0,s.jsx)(e.code,{children:"\u5b98\u7f51TCP\u534f\u8bae"}),",\u83b7\u53d6\u8ba4\u8bc1\u4ee4\u724cAccessToken\uff0c\u67e5\u770b\u8bbf\u95ee\u5730\u5740\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:["\uff08\u53ef\u9009\uff0c\u5982\u679cPAYLOAD\u5df2\u662f\u5e73\u53f0\u53ef\u4f7f\u7528\u683c\u5f0f\u5c31\u4e0d\u7528\u518d\u7f16\u5199\u5904\u7406\u811a\u672c\uff09\u6839\u636ePAYLOAD\u7f16\u5199\u6570\u636e\u5904\u7406\u811a\u672c\uff08\u8bbe\u5907\u5217\u8868->\u7f16\u8f91\u53c2\u6570->\u6570\u636e\u5904\u7406\u811a\u672c\uff09\u3002","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4e0a\u884c\u89e3\u6790\u811a\u672c\n\u9700\u8981\u5c06PAYLOAD\u6d88\u606f\u683c\u5f0f\u5904\u7406\u6210\u5e73\u53f0\u53ef\u4f7f\u7528\u7684\u683c\u5f0f\uff0c\u4f8b\u5982\uff08\u5e73\u53f0\u53ef\u4f7f\u7528\u7684\u683c\u5f0f\uff09\uff1a","\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u8bbe\u5907\uff1a"}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{"temperature":36.5,"humidity":52}\n'})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:'\u7f51\u5173\uff1a\n"3c20c6206"\u4e3a\u5b50\u8bbe\u5907\u5730\u5740\uff08\u8bbe\u5907\u5217\u8868->\u7f16\u8f91\u53c2\u6570\uff08\u5b50\u8bbe\u5907\uff09\uff09\u3002'}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{"3c20c6206":{"temperature":36.5,"humidity":52}}\n'})}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u4e0b\u884c\u89e3\u6790\u811a\u672c\n\u4e0b\u884c\u811a\u672c\u4e0e\u4e0a\u884c\u811a\u672c\u76f8\u53cd\uff0c\u9700\u8981\u5c06\u5e73\u53f0\u683c\u5f0f\u8f6c\u6362\u4e3aPAYLOAD\u6d88\u606f\u683c\u5f0f"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.li,{children:"\u8bbe\u5907\u4e0e\u534f\u8bae\u63d2\u4ef6\u5efa\u7acb\u8fde\u63a5\u540e\uff0c\u9996\u5148\u9700\u8981\u63a8\u9001\u8ba4\u8bc1\u4fe1\u606f\uff08AccessToken\uff09,\u53d1\u9001CMD(0X0)\u7684\u6570\u636e\u5305\uff0c\u8ba4\u8bc1\u6210\u529f\u4fbf\u53ef\u63a8\u9001\u5c5e\u6027\u6216\u4e8b\u4ef6\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"tcp\u534f\u8bae\u63d2\u4ef6github\u5e93",children:"TCP\u534f\u8bae\u63d2\u4ef6github\u5e93"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/ThingsPanel/tcp-protocol-plugin",children:"https://github.com/ThingsPanel/tcp-protocol-plugin"})})]})}function x(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},67164:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/tcp1-096b6e5e6af6c583ed84b65bdffeb087.png"},12702:(n,e,i)=>{i.d(e,{Z:()=>s});const s=i.p+"assets/images/tcp2-a8da1820148000727e68a52537cf8c13.png"},11151:(n,e,i)=>{i.d(e,{Z:()=>d,a:()=>t});var s=i(67294);const c={},l=s.createContext(c);function t(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:t(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);