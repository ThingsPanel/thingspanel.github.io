"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9242],{34826:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var t=s(85893),i=s(11151);const c={sidebar_position:9},r="\u975e\u5b98\u65b9\u6807\u51c6MQTT\u534f\u8bae\u8bbe\u5907\u63a5\u5165",d={id:"device-connect/non_standard_access",title:"\u975e\u5b98\u65b9\u6807\u51c6MQTT\u534f\u8bae\u8bbe\u5907\u63a5\u5165",description:"\u95ee\u9898",source:"@site/docs/device-connect/non_standard_access.md",sourceDirName:"device-connect",slug:"/device-connect/non_standard_access",permalink:"/zh-Hans/docs/device-connect/non_standard_access",draft:!1,unlisted:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/device-connect/non_standard_access.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u8424\u77f3\u4e91\u89c6\u9891\u63a5\u5165",permalink:"/zh-Hans/docs/device-connect/ezviz"},next:{title:"\u7cfb\u7edf\u5f00\u53d1",permalink:"/zh-Hans/docs/category/\u7cfb\u7edf\u5f00\u53d1"}},o={},l=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u4f7f\u7528MQTT\u4e3b\u9898\u62a5\u6587\u8f6c\u6362\u5668",id:"\u4f7f\u7528mqtt\u4e3b\u9898\u62a5\u6587\u8f6c\u6362\u5668",level:2},{value:"\u4f7f\u7528\u89c4\u5219\u5f15\u64ce\u8f6c\u53d1\u8bbe\u5907\u6570\u636e",id:"\u4f7f\u7528\u89c4\u5219\u5f15\u64ce\u8f6c\u53d1\u8bbe\u5907\u6570\u636e",level:2},{value:"\u4f7f\u7528\u7f16\u8f91\u53c2\u6570\u9875\u9762\u7684<code>\u6570\u636e\u5904\u7406\u811a\u672c</code>\u529f\u80fd",id:"\u4f7f\u7528\u7f16\u8f91\u53c2\u6570\u9875\u9762\u7684\u6570\u636e\u5904\u7406\u811a\u672c\u529f\u80fd",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2}];function a(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u975e\u5b98\u65b9\u6807\u51c6mqtt\u534f\u8bae\u8bbe\u5907\u63a5\u5165",children:"\u975e\u5b98\u65b9\u6807\u51c6MQTT\u534f\u8bae\u8bbe\u5907\u63a5\u5165"}),"\n",(0,t.jsx)(e.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["mqtt\u8bbe\u5907/\u7f51\u5173",(0,t.jsx)(e.code,{children:"\u53d1\u9001\u548c\u8ba2\u9605\u4e3b\u9898"}),"\u4e0e\u5e73\u53f0\u4e0d\u4e00\u81f4\u5e76\u65e0\u6cd5\u4fee\u6539\uff0c\u600e\u4e48\u63a5\u5165ThingsPanel\u5e73\u53f0?"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["mqtt\u8bbe\u5907/\u7f51\u5173",(0,t.jsx)(e.code,{children:"json\u62a5\u6587\u89c4\u8303"}),"\u4e0e\u5e73\u53f0\u89c4\u8303\u4e0d\u4e00\u81f4\uff0c\u600e\u4e48\u63a5\u5165ThingsPanel\u5e73\u53f0?"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528mqtt\u4e3b\u9898\u62a5\u6587\u8f6c\u6362\u5668",children:"\u4f7f\u7528MQTT\u4e3b\u9898\u62a5\u6587\u8f6c\u6362\u5668"}),"\n",(0,t.jsx)(e.p,{children:"\u53ef\u4ee5\u540c\u65f6\u89e3\u51b3\u4e3b\u9898\u548c\u62a5\u6587\u8f6c\u6362\u3002\u5b83\u4e00\u4e2a\u5e73\u53f0\u5916\u90e8\u7684\u8f6c\u6362\u5668\uff0c\u5b9e\u73b0\u4e86\u7b80\u5355\u7684broker\uff0c\u5e76\u5728broker\u5185\u90e8\u505a\u4e86\u4e3b\u9898\u548c\u62a5\u6587\u8f6c\u6362\uff0c\u6570\u636e\u6d41\u8f6c\u6d41\u7a0b\uff1a\u8bbe\u5907-\u300bMQTT\u4e3b\u9898\u62a5\u6587\u8f6c\u6362\u5668-\u300bThingsPanel\u7684MQTT Broker\u670d\u52a1-\u300bThingsPanel\u5e73\u53f0,\u5177\u4f53\u529f\u80fd\u67e5\u770b\u4ee3\u7801\u7684README\u3002"}),"\n",(0,t.jsxs)(e.p,{children:["\u4ed3\u5e93\u5730\u5740\uff1a",(0,t.jsx)(e.a,{href:"https://github.com/ThingsPanel/mqtt-converter.git",children:"https://github.com/ThingsPanel/mqtt-converter.git"})]}),"\n",(0,t.jsxs)(e.p,{children:["\u89c6\u9891\u8bb2\u89e3\uff1a",(0,t.jsx)(e.a,{href:"https://www.bilibili.com/video/BV1Zh4y127Za/?spm_id_from=333.337.search-card.all.click&vd_source=3205f3f58f033fa90037cb65ee98074c",children:"https://www.bilibili.com/video/BV1Zh4y127Za/?spm_id_from=333.337.search-card.all.click&vd_source=3205f3f58f033fa90037cb65ee98074c"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528\u89c4\u5219\u5f15\u64ce\u8f6c\u53d1\u8bbe\u5907\u6570\u636e",children:"\u4f7f\u7528\u89c4\u5219\u5f15\u64ce\u8f6c\u53d1\u8bbe\u5907\u6570\u636e"}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u89c4\u5219\u5f15\u64ce\u8f6c\u53d1\u8bbe\u5907\u6570\u636e\u7684\u65b9\u5f0f\u5e38\u7528\u6765\u89e3\u51b3\u7b2c\u4e00\u79cd\u95ee\u9898\u3002"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u7136\u540e\u5728\u89c4\u5219\u5f15\u64ce\u4e2d\u65b0\u5efa\u4e00\u6761\u63a5\u5165\u89c4\u5219"}),"\n",(0,t.jsxs)(e.li,{children:["\u62d6\u62fd\u4e00\u4e2a",(0,t.jsx)(e.code,{children:"mqtt in"}),"\u8282\u70b9\uff0c\u586b\u5199\u8bbe\u5907\u4e3b\u9898\u63a5\u5165\u6570\u636e(\u8fd9\u91cc\u4e0d\u4f7f\u7528\u5e73\u53f0\u7684mqtt\u670d\u52a1\uff0c\u9700\u81ea\u5df1\u642d\u5efa\u4e00\u4e2a\u79c1\u6709\u7684mqtt\u670d\u52a1\u505a\u8f6c\u6362\u7528\uff0c\u6570\u636e\u6d41\u8f6c\u6d41\u7a0b\uff1a\u8bbe\u5907-\u300b\u79c1\u6709MQTT Broker\u670d\u52a1-\u300b\u89c4\u5219\u5f15\u64ce-\u300bThingsPanel\u7684MQTT Broker\u670d\u52a1-\u300bThingsPanel\u5e73\u53f0)"]}),"\n",(0,t.jsxs)(e.li,{children:["\u518d\u62d6\u62fd\u4e00\u4e2a",(0,t.jsx)(e.code,{children:"mqtt out"}),"\u8282\u70b9\uff0c\u4e0e",(0,t.jsx)(e.code,{children:"mqtt in"}),"\u8282\u70b9\u8fde\u7ebf"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5728",(0,t.jsx)(e.code,{children:"mqtt out"}),"\u914d\u7f6e\u4e2d\u9700\u8981\u6dfb\u52a0\u65b0\u7684mqtt-broker\u8282\u70b9\uff0c\u6839\u636e\u5e73\u53f0mqtt\u7f51\u5173/\u8bbe\u5907\u63a5\u5165\u89c4\u5219\u586b\u5199\u4e3b\u9898\u548c\u8ba4\u8bc1\u65b9\u5f0f\uff08AccessToken\u63a5\u5165\u586b\u5199\u7528\u6237\u540d,MQTTBasic\u8ba4\u8bc1\u586b\u5199\u7528\u6237\u540d\u548c\u5bc6\u7801\uff09"]}),"\n",(0,t.jsx)(e.li,{children:"\u5e73\u53f0\u5230\u8bbe\u5907\u7684\u901a\u4fe1\u53c2\u8003\u4ee5\u4e0a\u6b65\u9aa4"}),"\n",(0,t.jsx)(e.li,{children:"\u9664\u4e86\u4ee5\u4e0a\u8282\u70b9\uff0c\u5408\u7406\u4f7f\u7528\u5176\u4ed6\u529f\u80fd\u8282\u70b9\uff0c\u4e5f\u53ef\u4ee5\u8f6c\u6362\u62a5\u6587\u89c4\u8303\u5e76\u5bf9\u8bbe\u5907\u4f20\u8f93\u7684\u503c\u52a0\u5de5\u548c\u5904\u7406"}),"\n"]}),"\n",(0,t.jsxs)(e.h2,{id:"\u4f7f\u7528\u7f16\u8f91\u53c2\u6570\u9875\u9762\u7684\u6570\u636e\u5904\u7406\u811a\u672c\u529f\u80fd",children:["\u4f7f\u7528\u7f16\u8f91\u53c2\u6570\u9875\u9762\u7684",(0,t.jsx)(e.code,{children:"\u6570\u636e\u5904\u7406\u811a\u672c"}),"\u529f\u80fd"]}),"\n",(0,t.jsx)(e.p,{children:"\u6570\u636e\u5904\u7406\u811a\u672c\u529f\u80fd\u53ef\u89e3\u51b3\u7b2c\u4e8c\u79cd\u95ee\u9898\u3002"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u521b\u5efa\u8bbe\u5907\u540e\uff0c\u70b9\u51fb\u7f16\u8f91\u53c2\u6570\uff0c\u5728\u6570\u636e\u5904\u7406\u4e0b\u62c9\u6846\u9009\u62e9",(0,t.jsx)(e.code,{children:"\u81ea\u5b9a\u4e49\u534f\u8bae"})]}),"\n",(0,t.jsxs)(e.li,{children:["\u5728\u5f39\u51fa\u7684",(0,t.jsx)(e.code,{children:"\u81ea\u5b9a\u4e49\u6570\u636e\u89e3\u6790\u811a\u672c"}),"\u5bf9\u8bdd\u6846\u4e2d\u8f93\u5165",(0,t.jsx)(e.code,{children:"\u4e0a\u884c\u89e3\u6790\u811a\u672c"}),"\u548c",(0,t.jsx)(e.code,{children:"\u4e0b\u884c\u89e3\u6790\u811a\u672c"})]}),"\n",(0,t.jsx)(e.li,{children:"\u4fdd\u5b58\u540e\u521b\u5efa\u5176\u4ed6\u540c\u7c7b\u8bbe\u5907\u7684\u65f6\u5019\u53ef\u4ee5\u76f4\u63a5\u9009\u62e9\u89e3\u6790\u811a\u672c"}),"\n",(0,t.jsx)(e.li,{children:"\u6570\u636e\u5904\u7406\u811a\u672c\u901a\u5e38\u8fd8\u53ef\u5bf9\u8bbe\u5907\u4f20\u8f93\u7684\u503c\u505a\u52a0\u5de5\u5904\u7406"}),"\n",(0,t.jsx)(e.li,{children:"\u5177\u4f53\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u63d0\u4f9b\u7ed9\u7684\u89e3\u6790\u6848\u4f8b"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u6848\u4f8b",children:"\u6848\u4f8b"}),"\n",(0,t.jsx)(e.p,{children:"\u7f51\u5173\u8bbe\u5907\u5e73\u53f0\u89c4\u8303\u62a5\u6587\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n\t"TH180001": {\n\t\t"temp": 26.5,\n\t\t"hum": 45.5\n\t},\n\t"TH180002": {\n\t\t"temp": 26.5,\n\t\t"hum": 45.5\n\t}\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u975e\u89c4\u8303\u8bbe\u5907\u62a5\u6587\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n\t"sensorDatas": {\n\t\t"TH180001": {\n\t\t\t"temp": 265,\n\t\t\t"hum": 455\n\t\t},\n\t\t"TH180002": {\n\t\t\t"temp": 265,\n\t\t\t"hum": 455\n\t\t}\n\t},\n\t"type": 2\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u4ee5\u4e0a\u884c\u89e3\u6790\u811a\u672c\u4e3a\u4f8b\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5206\u6790\u53d1\u73b0\u8bbe\u5907\u53d1\u6765\u7684\u62a5\u6587\u591a\u4e86\u4e00\u5c42\u5d4c\u5957\uff0c\u5e76\u4e14\u6570\u503c\u90fd\u672a\u505a\u5904\u7406"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u521b\u5efa\u7f51\u5173\u8bbe\u5907\uff0c\u6dfb\u52a0\u4e24\u4e2a\u5b50\u8bbe\u5907\u3002\uff08\u6ce8\u610f\u5b50\u8bbe\u5907\u5730\u5740\u5728\u7f16\u8f91\u53c2\u6570\u4e2d\u586b\u5199\uff0c\u540c\u4e00\u7f51\u5173\u4e2d\u4e0d\u53ef\u91cd\u590d\uff0c\u5982\u4e0b\u56fe\uff09\n",(0,t.jsx)(e.img,{src:s(63817).Z+"",width:"2560",height:"1297"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u9996\u5148\u7f16\u5199\u4ee3\u7801"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'// \u8c03\u8bd5\u8bf4\u660e\uff1a\u6309\u7167node\u73af\u5883\u4e0b\u7684\u8c03\u8bd5\u65b9\u5f0f\uff0c\u5c06\u6b64\u6587\u4ef6\u653e\u5728\u67d0\u4e2a\u6587\u4ef6\u5939\u4e0b\uff0c\u7136\u540e\u5728\u8fd9\u4e2a\u6587\u4ef6\u5939\u4e0b\u6267\u884c node ThingsPanelScriptTestDemo.js\nfunction encodeInp(msg, topic){\n    // \u5c06\u8bbe\u5907\u81ea\u5b9a\u4e49msg\uff08\u81ea\u5b9a\u4e49\u5f62\u5f0f\uff09\u6570\u636e\u8f6c\u6362\u4e3ajson\u5f62\u5f0f\u6570\u636e, \u8bbe\u5907\u4e0a\u62a5\u6570\u636e\u5230\u7269\u8054\u7f51\u5e73\u53f0\u65f6\u8c03\u7528\n    // \u5165\u53c2\uff1atopic string \u8bbe\u5907\u4e0a\u62a5\u6d88\u606f\u7684 topic\n    // \u5165\u53c2\uff1amsg byte[] \u6570\u7ec4 \u4e0d\u80fd\u4e3a\u7a7a\n    // \u51fa\u53c2\uff1astring\n    // \u5904\u7406\u5b8c\u540e\u5c06\u5bf9\u8c61\u8f6c\u56de\u5b57\u7b26\u4e32\u5f62\u5f0f\n    // \u4f8b\uff0cbyte[]\u8f6cstring\uff1avar msgString = String.fromCharCode.apply(null, msg);\n    // \u4f8b\uff0cstring\u8f6cjsonObj\uff1amsgJson = JSON.parse(msgString);\n    // \u4f8b\uff0cjsonObj\u8f6cstring\uff1amsgString = JSON.stringify(msgJson);\n    var msgString = String.fromCharCode.apply(null, msg)\n    var jsonObj = JSON.parse(msgString);\n    newObj = jsonObj.sensorDatas\n    for(var key in newObj){\n        for(var k in newObj[key]){\n\t    newObj[key][k] = newObj[key][k]/10\n\t}\n    }\n    msg = JSON.stringify(newObj);\n    return msg;\n}\n// \u5b57\u7b26\u4e32\u8f6c\u5b57\u8282\u6570\u7ec4\nconst decodedMsg = new Uint8Array([...\'{"sensorDatas":{"TH180001":{"temp":265,"hum":455},"TH180002":{"temp":26.5,"hum":45.5}},"type":2}\'].map(c => c.charCodeAt(0)));\nconsole.log(decodedMsg);\n// \u8c03\u8bd5\u4ee3\u7801\nconst topic = "gateway/attributes";\nconst encodedMsg = encodeInp(decodedMsg, topic);\nconsole.log(encodedMsg); // {"TH180001":{"temp":26.5,"hum":45.5},"TH180002":{"temp":2.65,"hum":4.55}}\u6ce8\u610f\uff1a\u63a7\u5236\u53f0\u7684\u8f93\u51fa\u7ed3\u679c\u4e00\u5b9a\u4e0d\u5305\u542b\u8f6c\u4e49\u5b57\u7b26\uff0c\u5426\u5219\u5e73\u53f0\u65e0\u6cd5\u89e3\u6790\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u4f7f\u7528\u5728\u7ebfjs\u8c03\u8bd5\u5de5\u5177,\u8fd9\u91cc\u7528\u7684\u662f\uff1a",(0,t.jsx)(e.a,{href:"https://www.lddgo.net/code/runcode/javascript",children:"https://www.lddgo.net/code/runcode/javascript"}),"\n",(0,t.jsx)(e.img,{src:s(71053).Z+"",width:"2560",height:"1297"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u8c03\u8bd5\u597d\u4ee5\u540e\uff0c\u5c06\u51fd\u6570\u7c98\u8d34\u8fdb\u811a\u672c\u4fdd\u5b58\uff08\u811a\u672c\u5728\u7f51\u5173\u7684\u7f16\u8f91\u53c2\u6570\u4e2d\uff0c\u5982\u56fe\uff09\n",(0,t.jsx)(e.img,{src:s(36125).Z+"",width:"2560",height:"1297"}),"\n",(0,t.jsx)(e.img,{src:s(3141).Z+"",width:"2560",height:"1297"})]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u4e0b\u884c\u811a\u672c\u7684\u7f16\u5199\u4e5f\u540c\u4e0a"}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},71053:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/compatible_device_01-54a5cf338fe8323e4aebea0d87cf7683.png"},63817:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/compatible_device_02-f21109405ff9dd991408ea29f9ad7609.png"},36125:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/compatible_device_03-5d15e42e6967fca2e781c2b8c57f2c93.png"},3141:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/compatible_device_04-4124f23bf20e07e0fd8641d71dfd6f5c.png"},11151:(n,e,s)=>{s.d(e,{Z:()=>d,a:()=>r});var t=s(67294);const i={},c=t.createContext(i);function r(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);