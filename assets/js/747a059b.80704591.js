"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5337],{7654:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=s(5893),i=s(1151);const r={slug:"script",title:"ThingsPanel \u975e\u5b98\u65b9\u6807\u51c6MQTT\u534f\u8bae\u8bbe\u5907\u63a5\u5165",authors:{name:"hezhuo",title:"\u6781\u76ca\u79d1\u6280",url:"https://github.com/hezhuozhuo",image_url:"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"},tags:["ThingsPanel","MQTT"]},c="\u975e\u5b98\u65b9\u6807\u51c6MQTT\u534f\u8bae\u8bbe\u5907\u63a5\u5165",l={permalink:"/blog/script",editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/blog/2023-01-31-script.md",source:"@site/i18n/en/docusaurus-plugin-content-blog/2023-01-31-script.md",title:"ThingsPanel \u975e\u5b98\u65b9\u6807\u51c6MQTT\u534f\u8bae\u8bbe\u5907\u63a5\u5165",description:"\u95ee\u9898",date:"2023-01-31T00:00:00.000Z",formattedDate:"January 31, 2023",tags:[{label:"ThingsPanel",permalink:"/blog/tags/things-panel"},{label:"MQTT",permalink:"/blog/tags/mqtt"}],readingTime:3.94,hasTruncateMarker:!1,authors:[{name:"hezhuo",title:"\u6781\u76ca\u79d1\u6280",url:"https://github.com/hezhuozhuo",image_url:"https://avatars.githubusercontent.com/u/61645647?s=64&v=4",imageURL:"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"}],frontMatter:{slug:"script",title:"ThingsPanel \u975e\u5b98\u65b9\u6807\u51c6MQTT\u534f\u8bae\u8bbe\u5907\u63a5\u5165",authors:{name:"hezhuo",title:"\u6781\u76ca\u79d1\u6280",url:"https://github.com/hezhuozhuo",image_url:"https://avatars.githubusercontent.com/u/61645647?s=64&v=4",imageURL:"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"},tags:["ThingsPanel","MQTT"]},unlisted:!1,nextItem:{title:"ThingsPanel-0.3.0 was released, adding a rule engine, a permission system, and optimizing device access",permalink:"/blog/thingspanel-ver0.3.0-release"}},a={authorsImageUrls:[void 0]},o=[{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"\u4f7f\u7528\u89c4\u5219\u5f15\u64ce\u8f6c\u53d1\u8bbe\u5907\u6570\u636e",id:"\u4f7f\u7528\u89c4\u5219\u5f15\u64ce\u8f6c\u53d1\u8bbe\u5907\u6570\u636e",level:2},{value:"\u4f7f\u7528\u7f16\u8f91\u53c2\u6570\u9875\u9762\u7684<code>\u6570\u636e\u5904\u7406\u811a\u672c</code>\u529f\u80fd",id:"\u4f7f\u7528\u7f16\u8f91\u53c2\u6570\u9875\u9762\u7684\u6570\u636e\u5904\u7406\u811a\u672c\u529f\u80fd",level:2},{value:"\u6848\u4f8b",id:"\u6848\u4f8b",level:2}];function h(n){const e={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["mqtt\u8bbe\u5907/\u7f51\u5173",(0,t.jsx)(e.code,{children:"\u53d1\u9001\u548c\u8ba2\u9605\u4e3b\u9898"}),"\u4e0e\u5e73\u53f0\u4e0d\u4e00\u81f4\u5e76\u65e0\u6cd5\u4fee\u6539\uff0c\u600e\u4e48\u63a5\u5165ThingsPanel\u5e73\u53f0?"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["mqtt\u8bbe\u5907/\u7f51\u5173",(0,t.jsx)(e.code,{children:"json\u62a5\u6587\u89c4\u8303"}),"\u4e0e\u5e73\u53f0\u89c4\u8303\u4e0d\u4e00\u81f4\uff0c\u600e\u4e48\u63a5\u5165ThingsPanel\u5e73\u53f0?"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u4f7f\u7528\u89c4\u5219\u5f15\u64ce\u8f6c\u53d1\u8bbe\u5907\u6570\u636e",children:"\u4f7f\u7528\u89c4\u5219\u5f15\u64ce\u8f6c\u53d1\u8bbe\u5907\u6570\u636e"}),"\n",(0,t.jsx)(e.p,{children:"\u4f7f\u7528\u89c4\u5219\u5f15\u64ce\u8f6c\u53d1\u8bbe\u5907\u6570\u636e\u7684\u65b9\u5f0f\u5e38\u7528\u6765\u89e3\u51b3\u7b2c\u4e00\u79cd\u95ee\u9898\u3002"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u5728\u89c4\u5219\u5f15\u64ce\u4e2d\u65b0\u5efa\u4e00\u6761\u63a5\u5165\u89c4\u5219"}),"\n",(0,t.jsxs)(e.li,{children:["\u62d6\u62fd\u4e00\u4e2a",(0,t.jsx)(e.code,{children:"mqtt in"}),"\u8282\u70b9\uff0c\u586b\u5199\u8bbe\u5907\u4e3b\u9898\u63a5\u5165\u6570\u636e"]}),"\n",(0,t.jsxs)(e.li,{children:["\u518d\u62d6\u62fd\u4e00\u4e2a",(0,t.jsx)(e.code,{children:"mqtt out"}),"\u8282\u70b9\uff0c\u4e0e",(0,t.jsx)(e.code,{children:"mqtt in"}),"\u8282\u70b9\u8fde\u7ebf"]}),"\n",(0,t.jsxs)(e.li,{children:["\u5728",(0,t.jsx)(e.code,{children:"mqtt out"}),"\u914d\u7f6e\u4e2d\u9700\u8981\u6dfb\u52a0\u65b0\u7684mqtt-broker\u8282\u70b9\uff0c\u6839\u636e\u5e73\u53f0mqtt\u7f51\u5173/\u8bbe\u5907\u63a5\u5165\u89c4\u5219\u586b\u5199\u4e3b\u9898\u548c\u8ba4\u8bc1\u65b9\u5f0f\uff08AccessToken\u63a5\u5165\u586b\u5199\u7528\u6237\u540d,MQTTBasic\u8ba4\u8bc1\u586b\u5199\u7528\u6237\u540d\u548c\u5bc6\u7801\uff09"]}),"\n",(0,t.jsx)(e.li,{children:"\u5e73\u53f0\u5230\u8bbe\u5907\u7684\u901a\u4fe1\u53c2\u8003\u4ee5\u4e0a\u6b65\u9aa4"}),"\n",(0,t.jsx)(e.li,{children:"\u9664\u4e86\u4ee5\u4e0a\u8282\u70b9\uff0c\u5408\u7406\u4f7f\u7528\u5176\u4ed6\u529f\u80fd\u8282\u70b9\uff0c\u4e5f\u53ef\u4ee5\u8f6c\u6362\u62a5\u6587\u89c4\u8303\u5e76\u5bf9\u8bbe\u5907\u4f20\u8f93\u7684\u503c\u52a0\u5de5\u548c\u5904\u7406"}),"\n"]}),"\n",(0,t.jsxs)(e.h2,{id:"\u4f7f\u7528\u7f16\u8f91\u53c2\u6570\u9875\u9762\u7684\u6570\u636e\u5904\u7406\u811a\u672c\u529f\u80fd",children:["\u4f7f\u7528\u7f16\u8f91\u53c2\u6570\u9875\u9762\u7684",(0,t.jsx)(e.code,{children:"\u6570\u636e\u5904\u7406\u811a\u672c"}),"\u529f\u80fd"]}),"\n",(0,t.jsx)(e.p,{children:"\u6570\u636e\u5904\u7406\u811a\u672c\u529f\u80fd\u53ef\u89e3\u51b3\u7b2c\u4e8c\u79cd\u95ee\u9898\uff0c\u5b83\u7684\u539f\u7406\u76f8\u5f53\u4e8e\u4e2d\u95f4\u4ef6\u3002"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u521b\u5efa\u8bbe\u5907\u540e\uff0c\u70b9\u51fb\u7f16\u8f91\u53c2\u6570\uff0c\u5728\u6570\u636e\u5904\u7406\u4e0b\u62c9\u6846\u9009\u62e9",(0,t.jsx)(e.code,{children:"\u81ea\u5b9a\u4e49\u534f\u8bae"})]}),"\n",(0,t.jsxs)(e.li,{children:["\u5728\u5f39\u51fa\u7684",(0,t.jsx)(e.code,{children:"\u81ea\u5b9a\u4e49\u6570\u636e\u89e3\u6790\u811a\u672c"}),"\u5bf9\u8bdd\u6846\u4e2d\u8f93\u5165",(0,t.jsx)(e.code,{children:"\u4e0a\u884c\u89e3\u6790\u811a\u672c"}),"\u548c",(0,t.jsx)(e.code,{children:"\u4e0b\u884c\u89e3\u6790\u811a\u672c"})]}),"\n",(0,t.jsx)(e.li,{children:"\u4fdd\u5b58\u540e\u521b\u5efa\u5176\u4ed6\u540c\u7c7b\u8bbe\u5907\u7684\u65f6\u5019\u53ef\u4ee5\u76f4\u63a5\u9009\u62e9\u89e3\u6790\u811a\u672c"}),"\n",(0,t.jsx)(e.li,{children:"\u6570\u636e\u5904\u7406\u811a\u672c\u901a\u5e38\u8fd8\u53ef\u5bf9\u8bbe\u5907\u4f20\u8f93\u7684\u503c\u505a\u52a0\u5de5\u5904\u7406"}),"\n",(0,t.jsx)(e.li,{children:"\u5177\u4f53\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u63d0\u4f9b\u7ed9\u7684\u89e3\u6790\u6848\u4f8b"}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u6848\u4f8b",children:"\u6848\u4f8b"}),"\n",(0,t.jsx)(e.p,{children:"\u7f51\u5173\u8bbe\u5907\u5e73\u53f0\u89c4\u8303\u62a5\u6587\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n    "TH180001": {\n        "temp": 26.5,\n        "hum": 45.5\n    },\n    "TH180002": {\n        "temp": 26.5,\n        "hum": 45.5\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u975e\u89c4\u8303\u8bbe\u5907\u62a5\u6587\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n    "sensorDatas": {\n        "TH180001": {\n            "temp": 265,\n            "hum": 455\n        },\n        "TH180002": {\n            "temp": 265,\n            "hum": 455\n        }\n    },\n    "type": 2\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u4ee5\u4e0a\u884c\u89e3\u6790\u811a\u672c\u4e3a\u4f8b\uff1a"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u5206\u6790\u53d1\u73b0\u8bbe\u5907\u53d1\u6765\u7684\u62a5\u6587\u591a\u4e86\u4e00\u5c42\u5d4c\u5957\uff0c\u5e76\u4e14\u6570\u503c\u90fd\u672a\u505a\u5904\u7406"}),"\n",(0,t.jsxs)(e.li,{children:["\u521b\u5efa\u7f51\u5173\u8bbe\u5907\uff0c\u6dfb\u52a0\u4e24\u4e2a\u5b50\u8bbe\u5907\u3002\uff08\u6ce8\u610f\u5b50\u8bbe\u5907\u5730\u5740\u5728\u7f16\u8f91\u53c2\u6570\u4e2d\u586b\u5199\uff0c\u540c\u4e00\u7f51\u5173\u4e2d\u4e0d\u53ef\u91cd\u590d\uff0c\u5982\u4e0b\u56fe\uff09 ",(0,t.jsx)(e.img,{src:s(3400).Z+"",width:"2560",height:"1297"})]}),"\n",(0,t.jsxs)(e.li,{children:["\u9996\u5148\u7f16\u5199\u4ee3\u7801","\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'var device_msg = \'{"sensorDatas":{"TH180001":{"temp":265,"hum":455},"TH180002":{"temp":26.5,"hum":45.5}},"type":2}\'\nvar public_topic = "gateway/attributes"\nvar msg = encodeInp(device_msg,public_topic)\nconsole.log(msg)\nfunction encodeInp(msg, topic){\n    // \u5c06\u8bbe\u5907\u81ea\u5b9a\u4e49msg\uff08\u81ea\u5b9a\u4e49\u5f62\u5f0f\uff09\u6570\u636e\u8f6c\u6362\u4e3ajson\u5f62\u5f0f\u6570\u636e, \u8bbe\u5907\u4e0a\u62a5\u6570\u636e\u5230\u7269\u8054\u7f51\u5e73\u53f0\u65f6\u8c03\u7528\n// \u5165\u53c2\uff1atopic string \u8bbe\u5907\u4e0a\u62a5\u6d88\u606f\u7684 topic\n// \u5165\u53c2\uff1amsg byte[] \u6570\u7ec4 \u4e0d\u80fd\u4e3a\u7a7a\n// \u51fa\u53c2\uff1astring\n// \u5904\u7406\u5b8c\u540e\u5c06\u5bf9\u8c61\u8f6c\u56de\u5b57\u7b26\u4e32\u5f62\u5f0f\n// \u4f8b\uff0cbyte[]\u8f6cstring\uff1avar msgString = String.fromCharCode.apply(null, msg);\n// \u4f8b\uff0cstring\u8f6cjsonObj\uff1amsgJson = JSON.parse(msgString);\n// \u4f8b\uff0cjsonObj\u8f6cstring\uff1amsgString = JSON.stringify(msgJson);\nvar msgString = String.fromCharCode.apply(null, msg)\n    if (topic === "gateway/attributes"){\n        var jsonObj = JSON.parse(msgString);\n        newObj = jsonObj.sensorDatas\n        for(var key in newObj){\n            for(var k in newObj[key]){\n                newObj[key][k] = newObj[key][k]/10\n            }\n        }\n        msg = JSON.stringify(newObj);\n    }\n    return msg;\n}\n'})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\u4f7f\u7528\u5728\u7ebfjs\u8c03\u8bd5\u5de5\u5177,\u8fd9\u91cc\u7528\u7684\u662f\uff1a",(0,t.jsx)(e.a,{href:"https://www.lddgo.net/code/runcode/javascript",children:"https://www.lddgo.net/code/runcode/javascript"})," ",(0,t.jsx)(e.img,{src:s(2541).Z+"",width:"2560",height:"1297"})]}),"\n",(0,t.jsxs)(e.li,{children:["\u8c03\u8bd5\u597d\u4ee5\u540e\uff0c\u5c06\u51fd\u6570\u7c98\u8d34\u8fdb\u811a\u672c\u4fdd\u5b58\uff08\u811a\u672c\u5728\u7f51\u5173\u7684\u7f16\u8f91\u53c2\u6570\u4e2d\uff0c\u5982\u56fe\uff09 ",(0,t.jsx)(e.img,{src:s(2591).Z+"",width:"2560",height:"1297"})," ",(0,t.jsx)(e.img,{src:s(741).Z+"",width:"2560",height:"1297"})]}),"\n",(0,t.jsx)(e.li,{children:"\u4e0b\u884c\u811a\u672c\u7684\u7f16\u5199\u4e5f\u540c\u4e0a"}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},2541:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/compatible_device_01-54a5cf338fe8323e4aebea0d87cf7683.png"},3400:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/compatible_device_02-f21109405ff9dd991408ea29f9ad7609.png"},2591:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/compatible_device_03-5d15e42e6967fca2e781c2b8c57f2c93.png"},741:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/compatible_device_04-4124f23bf20e07e0fd8641d71dfd6f5c.png"},1151:(n,e,s)=>{s.d(e,{Z:()=>l,a:()=>c});var t=s(7294);const i={},r=t.createContext(i);function c(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);