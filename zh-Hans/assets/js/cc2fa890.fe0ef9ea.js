"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1040],{37043:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>r,contentTitle:()=>h,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var n=s(85893),l=s(11151);const t={sidebar_position:7},h="\u53ef\u89c6\u5316\u63d2\u4ef6\u53d1\u5e03",d={id:"system-development/eveloping-plug-in/visualPublishPlugin",title:"\u53ef\u89c6\u5316\u63d2\u4ef6\u53d1\u5e03",description:"ThingsPanel\u7684\u53ef\u89c6\u5316\u7f16\u8f91\u5668\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u7528\u6237\u5728\u672c\u5730\u5f00\u53d1\u5b8c\u63d2\u4ef6\u540e\uff0c\u53ef\u53d1\u5e03\u5230\u5b98\u65b9\u63d2\u4ef6\u5e02\u573a\u4f9b\u6240\u6709\u4eba\u4f7f\u7528\u3002\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u53d1\u5e03\u81ea\u5b9a\u4e49\u63d2\u4ef6\u5230\u63d2\u4ef6\u5e02\u573a\u3002",source:"@site/docs/system-development/eveloping-plug-in/visualPublishPlugin.md",sourceDirName:"system-development/eveloping-plug-in",slug:"/system-development/eveloping-plug-in/visualPublishPlugin",permalink:"/zh-Hans/docs/system-development/eveloping-plug-in/visualPublishPlugin",draft:!1,unlisted:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-development/eveloping-plug-in/visualPublishPlugin.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u53ef\u89c6\u53163D\u63d2\u4ef6\u5f00\u53d1",permalink:"/zh-Hans/docs/system-development/eveloping-plug-in/visual3DPlugin"},next:{title:"\u62d3\u5c55\u7528\u6237\u7cfb\u7edf",permalink:"/zh-Hans/docs/system-development/extendUserMgt"}},r={},c=[{value:"\u4ec0\u4e48\u662f\u53ef\u89c6\u5316\u63d2\u4ef6",id:"\u4ec0\u4e48\u662f\u53ef\u89c6\u5316\u63d2\u4ef6",level:4},{value:"\u4e00\u3001\u63d2\u4ef6\u5f00\u53d1",id:"\u4e00\u63d2\u4ef6\u5f00\u53d1",level:2},{value:"\u4e8c\u3001\u63d2\u4ef6\u53d1\u5e03",id:"\u4e8c\u63d2\u4ef6\u53d1\u5e03",level:2},{value:"1\u3001\u5168\u5c40\u5b89\u88c5cli",id:"1\u5168\u5c40\u5b89\u88c5cli",level:3},{value:"2\u3001\u672c\u5730\u542f\u52a8visual-editor\u9879\u76ee",id:"2\u672c\u5730\u542f\u52a8visual-editor\u9879\u76ee",level:3},{value:"3\u3001\u767b\u5f55\u63d2\u4ef6\u5e02\u573a",id:"3\u767b\u5f55\u63d2\u4ef6\u5e02\u573a",level:3},{value:"4\u3001\u521b\u5efa\u63d2\u4ef6",id:"4\u521b\u5efa\u63d2\u4ef6",level:3},{value:"5\u3001\u914d\u7f6econfig.json",id:"5\u914d\u7f6econfigjson",level:3},{value:"6\u3001\u6784\u5efa\u5e76\u4e0a\u4f20\u63d2\u4ef6",id:"6\u6784\u5efa\u5e76\u4e0a\u4f20\u63d2\u4ef6",level:3},{value:"7\u3001\u63d0\u4ea4\u5ba1\u6838",id:"7\u63d0\u4ea4\u5ba1\u6838",level:3}];function a(e){const i={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"\u53ef\u89c6\u5316\u63d2\u4ef6\u53d1\u5e03",children:"\u53ef\u89c6\u5316\u63d2\u4ef6\u53d1\u5e03"}),"\n",(0,n.jsx)(i.p,{children:"ThingsPanel\u7684\u53ef\u89c6\u5316\u7f16\u8f91\u5668\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u7528\u6237\u5728\u672c\u5730\u5f00\u53d1\u5b8c\u63d2\u4ef6\u540e\uff0c\u53ef\u53d1\u5e03\u5230\u5b98\u65b9\u63d2\u4ef6\u5e02\u573a\u4f9b\u6240\u6709\u4eba\u4f7f\u7528\u3002\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u53d1\u5e03\u81ea\u5b9a\u4e49\u63d2\u4ef6\u5230\u63d2\u4ef6\u5e02\u573a\u3002"}),"\n",(0,n.jsx)(i.h4,{id:"\u4ec0\u4e48\u662f\u53ef\u89c6\u5316\u63d2\u4ef6",children:"\u4ec0\u4e48\u662f\u53ef\u89c6\u5316\u63d2\u4ef6"}),"\n",(0,n.jsx)(i.p,{children:"\u53ef\u89c6\u5316\u63d2\u4ef6\u7531\u591a\u4e2avue\u7ec4\u4ef6\u7ec4\u6210\uff0c\u6700\u7ec8\u53d1\u5e03\u65f6\u4f1a\u81ea\u52a8\u6253\u5305\u6210\u4e00\u4e2ajs\u6587\u4ef6\u5b58\u50a8\u5230ThingsPanel\u63d2\u4ef6\u5e02\u573a\u4e2d\uff0c\u6b64\u65f6\u6240\u6709\u767b\u5f55\u63d2\u4ef6\u5e02\u573a\u7684\u53ef\u89c6\u5316\u7528\u6237\u90fd\u53ef\u4ee5\u4e00\u952e\u5b89\u88c5\u60a8\u53d1\u5e03\u7684\u63d2\u4ef6\u5230\u672c\u5730\u670d\u52a1\u5668\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"\u4e00\u63d2\u4ef6\u5f00\u53d1",children:"\u4e00\u3001\u63d2\u4ef6\u5f00\u53d1"}),"\n",(0,n.jsxs)(i.p,{children:["\u4e0b\u8f7dvisual-editor\u9879\u76ee: ",(0,n.jsx)(i.a,{href:"https://github.com/ThingsPanel/visual-editor",children:"https://github.com/ThingsPanel/visual-editor"})]}),"\n",(0,n.jsxs)(i.p,{children:["\u70b9\u8fd9\u91cc",(0,n.jsx)(i.a,{href:"/zh-Hans/docs/system-development/eveloping-plug-in/visualPlugin",children:"\u5f00\u53d1\u81ea\u5df1\u7684\u7b2c\u4e00\u4e2a\u63d2\u4ef6"})]}),"\n",(0,n.jsx)(i.h2,{id:"\u4e8c\u63d2\u4ef6\u53d1\u5e03",children:"\u4e8c\u3001\u63d2\u4ef6\u53d1\u5e03"}),"\n",(0,n.jsx)(i.p,{children:"\u63d2\u4ef6\u5f00\u53d1\u5b8c\u6210\u540e\uff0c\u5c31\u53ef\u4ee5\u8fdb\u884c\u53d1\u5e03\u4e86\u3002"}),"\n",(0,n.jsx)(i.h3,{id:"1\u5168\u5c40\u5b89\u88c5cli",children:"1\u3001\u5168\u5c40\u5b89\u88c5cli"}),"\n",(0,n.jsx)(i.p,{children:"\u6253\u5f00cmd\uff0c\u8f93\u5165\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5@thingspanel/cli"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"npm install @thingspanel/cli -g\n"})}),"\n",(0,n.jsx)(i.h3,{id:"2\u672c\u5730\u542f\u52a8visual-editor\u9879\u76ee",children:"2\u3001\u672c\u5730\u542f\u52a8visual-editor\u9879\u76ee"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"pnpm run dev\n"})}),"\n",(0,n.jsx)(i.h3,{id:"3\u767b\u5f55\u63d2\u4ef6\u5e02\u573a",children:"3\u3001\u767b\u5f55\u63d2\u4ef6\u5e02\u573a"}),"\n",(0,n.jsxs)(i.p,{children:["\u5728\u53ef\u89c6\u5316\u7f16\u8f91\u5668\u7684\u53f3\u4e0a\u89d2\u70b9\u51fb\u63d2\u4ef6\u5e02\u573a\uff0c\u5728\u5f39\u51fa\u7684\u767b\u5f55\u754c\u9762\u586b\u5165\u63d2\u4ef6\u5e02\u573a\u7684\u8d26\u53f7\u5bc6\u7801",(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.img,{src:s(49182).Z+"",width:"1494",height:"90"})]}),"\n",(0,n.jsxs)(i.p,{children:["\u5982\u679c\u6ca1\u6709\u8d26\u53f7\uff0c\u5728\u8fd9\u91cc",(0,n.jsx)(i.a,{href:"http://r.thingspanel.cn/login?register=true",children:"\u6ce8\u518c"})]}),"\n",(0,n.jsx)(i.h3,{id:"4\u521b\u5efa\u63d2\u4ef6",children:"4\u3001\u521b\u5efa\u63d2\u4ef6"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["\u767b\u5f55\u6210\u529f\u540e\uff0c\u70b9\u51fb\u53d1\u5e03\u63d2\u4ef6 -> \u521b\u5efa\u63d2\u4ef6\uff0c\u586b\u5199\u63d2\u4ef6\u4fe1\u606f\uff0c\u5f97\u5230Secret\n",(0,n.jsx)(i.img,{alt:"Alt text",src:s(22605).Z+"",width:"931",height:"226"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["\u7136\u540e\u70b9\u51fb\u521b\u5efa\u63d2\u4ef6\n",(0,n.jsx)(i.img,{alt:"Alt text",src:s(63851).Z+"",width:"937",height:"225"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["\u5728\u521b\u5efa\u63d2\u4ef6\u7684\u754c\u9762\u586b\u5165\u63d2\u4ef6\u7684\u4fe1\u606f\u3002",(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.img,{alt:"Alt text",src:s(92367).Z+"",width:"806",height:"756"})]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["\u70b9\u51fb\u786e\u5b9a\u540e\uff0c\u63d2\u4ef6\u5217\u8868\u5c31\u4f1a\u65b0\u589e\u4e00\u6761\u63d2\u4ef6\u4fe1\u606f\u3002\n",(0,n.jsx)(i.img,{alt:"Alt text",src:s(9525).Z+"",width:"929",height:"214"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"5\u914d\u7f6econfigjson",children:"5\u3001\u914d\u7f6econfig.json"}),"\n",(0,n.jsxs)(i.p,{children:["\u70b9\u51fb\u67e5\u770bSecret\uff0c\u590d\u5236Secret\u3002\n",(0,n.jsx)(i.img,{alt:"Alt text",src:s(92827).Z+"",width:"1191",height:"245"})]}),"\n",(0,n.jsx)(i.p,{children:"\u56de\u5230\u4ee3\u7801\u7f16\u8f91\u5668\u4e2d\uff0c\u5728\u81ea\u5b9a\u4e49\u63d2\u4ef6\u76ee\u5f55test-plugin\u4e0b\u65b0\u5efaconfig.json\u6587\u4ef6\uff0c\u914d\u7f6e\u63d2\u4ef6\u7684\u540d\u79f0\u3001\u7248\u672c\u3001\u5bc6\u94a5\u3002"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:'{\n    "name": "myplugin",\n    "version": "0.1.1",\n    "secret": "3e8dba83bee8b8680e943ff86afe8b82"\n}\n'})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\u8fd9\u91cc\u7684\u540d\u79f0myplugin\u5c31\u662f\u7b2c4\u6b65\u521b\u5efa\u63d2\u4ef6\u65f6\u586b\u5199\u7684\u63d2\u4ef6\u540d\u79f0\n",(0,n.jsx)(i.img,{alt:"Alt text",src:s(54395).Z+"",width:"721",height:"212"})]}),"\n",(0,n.jsx)(i.li,{children:"\u7248\u672c\u7531\u5f00\u53d1\u8005\u81ea\u5df1\u5b9a\u4e49"}),"\n",(0,n.jsx)(i.li,{children:"\u5bc6\u94a5\u5c31\u662f\u521a\u624d\u83b7\u53d6\u7684secret"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"6\u6784\u5efa\u5e76\u4e0a\u4f20\u63d2\u4ef6",children:"6\u3001\u6784\u5efa\u5e76\u4e0a\u4f20\u63d2\u4ef6"}),"\n",(0,n.jsx)(i.p,{children:"\u5728\u547d\u4ee4\u884c\u6a21\u5f0f\u4e0b\u8fdb\u5165\u53ef\u89c6\u5316\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u8f93\u5165\u5982\u4e0b\u547d\u4ee4"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"tp-pack -r ./ -i ./src/plugins/test-plugin\n"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Alt text",src:s(12712).Z+"",width:"562",height:"76"})}),"\n",(0,n.jsx)(i.p,{children:"\u82e5\u63d0\u793a\u5982\u4e0b\u4fe1\u606f\uff0c\u5219\u4e0a\u4f20\u6210\u529f\u3002"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Alt text",src:s(50938).Z+"",width:"352",height:"39"})}),"\n",(0,n.jsx)(i.h3,{id:"7\u63d0\u4ea4\u5ba1\u6838",children:"7\u3001\u63d0\u4ea4\u5ba1\u6838"}),"\n",(0,n.jsxs)(i.p,{children:["\u672c\u5730\u542f\u52a8\u53ef\u89c6\u5316",(0,n.jsx)(i.code,{children:"pnpm run dev"}),(0,n.jsx)(i.br,{}),"\n","\u518d\u6b21\u6253\u5f00\u63d2\u4ef6\u5e02\u573a\uff0c\u70b9\u51fb\u53d1\u5e03\u63d2\u4ef6\uff0c\u70b9\u5f00\u63d2\u4ef6\u5217\u8868\uff0c\u53ef\u4ee5\u770b\u5230\u6211\u4eec\u521a\u4e0a\u4f20\u7684\u63d2\u4ef6\u3002\n",(0,n.jsx)(i.img,{alt:"Alt text",src:s(55347).Z+"",width:"1198",height:"327"})]}),"\n",(0,n.jsxs)(i.p,{children:["\u70b9\u51fb",(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"\u63d0\u4ea4\u5ba1\u6838"})}),"\uff0c\u7b49\u5f85\u7ba1\u7406\u5458\u5ba1\u6838\u3002",(0,n.jsx)(i.br,{}),"\n","\u5ba1\u6838\u901a\u8fc7\u540e\uff0c\u60a8\u7684\u63d2\u4ef6\u5c31\u53ef\u4ee5\u4f9b\u6240\u6709\u4eba\u4e0b\u8f7d\u4f7f\u7528\u4e86\u3002"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Alt text",src:s(30806).Z+"",width:"1191",height:"269"})})]})}function u(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},49182:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/visual_publish_plugin_2_3_1-25f94c2f0f49342499943f4ebea7f873.png"},22605:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/visual_publish_plugin_2_4_1-51d8c202a89b94de8e7d02493233f2b4.png"},63851:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/visual_publish_plugin_2_4_2-90fabfdf9c8c0e8d4fd563c2411125ee.png"},92367:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/visual_publish_plugin_2_4_3-0a41b6ffb855171288356a7120d74c17.png"},9525:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/visual_publish_plugin_2_4_4-1d280abc73561195ef72e9154dbe1c87.png"},92827:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/visual_publish_plugin_2_4_5-f36a9b6c9e304f998bd14e33222949e0.png"},54395:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/visual_publish_plugin_2_5_1-738c945eb014012b65c7e75ad121d101.png"},12712:(e,i,s)=>{s.d(i,{Z:()=>n});const n="data:image/png;base64,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"},50938:(e,i,s)=>{s.d(i,{Z:()=>n});const n="data:image/png;base64,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"},55347:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/visual_publish_plugin_2_7_1-521fdba903683feff73bf27b8c830852.png"},30806:(e,i,s)=>{s.d(i,{Z:()=>n});const n=s.p+"assets/images/visual_publish_plugin_2_7_2-138811dd77558b88cd89e7edc25a8668.png"},11151:(e,i,s)=>{s.d(i,{Z:()=>d,a:()=>h});var n=s(67294);const l={},t=n.createContext(l);function h(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:h(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);