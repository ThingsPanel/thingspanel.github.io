"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5151],{67130:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"script","metadata":{"permalink":"/zh-Hans/blog/script","editUrl":"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/blog/2023-01-31-script.md","source":"@site/blog/2023-01-31-script.md","title":"ThingsPanel \u975e\u5b98\u65b9\u6807\u51c6MQTT\u534f\u8bae\u8bbe\u5907\u63a5\u5165","description":"\u95ee\u9898","date":"2023-01-31T00:00:00.000Z","formattedDate":"2023\u5e741\u670831\u65e5","tags":[{"label":"ThingsPanel","permalink":"/zh-Hans/blog/tags/things-panel"},{"label":"MQTT","permalink":"/zh-Hans/blog/tags/mqtt"}],"readingTime":3.94,"hasTruncateMarker":false,"authors":[{"name":"hezhuo","title":"\u6781\u76ca\u79d1\u6280","url":"https://github.com/hezhuozhuo","image_url":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4","imageURL":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"}],"frontMatter":{"slug":"script","title":"ThingsPanel \u975e\u5b98\u65b9\u6807\u51c6MQTT\u534f\u8bae\u8bbe\u5907\u63a5\u5165","authors":{"name":"hezhuo","title":"\u6781\u76ca\u79d1\u6280","url":"https://github.com/hezhuozhuo","image_url":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4","imageURL":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"},"tags":["ThingsPanel","MQTT"]},"unlisted":false,"nextItem":{"title":"ThingsPanel-0.3.0 \u53d1\u5e03\uff0c\u589e\u52a0\u89c4\u5219\u5f15\u64ce\u3001\u6743\u9650\u7cfb\u7edf\u3001\u4f18\u5316\u8bbe\u5907\u63a5\u5165","permalink":"/zh-Hans/blog/thingspanel-ver0.3.0-release"}},"content":"## \u95ee\u9898\\n\\n1. mqtt\u8bbe\u5907/\u7f51\u5173`\u53d1\u9001\u548c\u8ba2\u9605\u4e3b\u9898`\u4e0e\u5e73\u53f0\u4e0d\u4e00\u81f4\u5e76\u65e0\u6cd5\u4fee\u6539\uff0c\u600e\u4e48\u63a5\u5165ThingsPanel\u5e73\u53f0?\\n   \\n2. mqtt\u8bbe\u5907/\u7f51\u5173`json\u62a5\u6587\u89c4\u8303`\u4e0e\u5e73\u53f0\u89c4\u8303\u4e0d\u4e00\u81f4\uff0c\u600e\u4e48\u63a5\u5165ThingsPanel\u5e73\u53f0?\\n\\n## \u4f7f\u7528\u89c4\u5219\u5f15\u64ce\u8f6c\u53d1\u8bbe\u5907\u6570\u636e\\n\\n\u4f7f\u7528\u89c4\u5219\u5f15\u64ce\u8f6c\u53d1\u8bbe\u5907\u6570\u636e\u7684\u65b9\u5f0f\u5e38\u7528\u6765\u89e3\u51b3\u7b2c\u4e00\u79cd\u95ee\u9898\u3002\\n\\n1. \u5728\u89c4\u5219\u5f15\u64ce\u4e2d\u65b0\u5efa\u4e00\u6761\u63a5\u5165\u89c4\u5219\\n2. \u62d6\u62fd\u4e00\u4e2a`mqtt in`\u8282\u70b9\uff0c\u586b\u5199\u8bbe\u5907\u4e3b\u9898\u63a5\u5165\u6570\u636e\\n3. \u518d\u62d6\u62fd\u4e00\u4e2a`mqtt out`\u8282\u70b9\uff0c\u4e0e`mqtt in`\u8282\u70b9\u8fde\u7ebf\\n4. \u5728`mqtt out`\u914d\u7f6e\u4e2d\u9700\u8981\u6dfb\u52a0\u65b0\u7684mqtt-broker\u8282\u70b9\uff0c\u6839\u636e\u5e73\u53f0mqtt\u7f51\u5173/\u8bbe\u5907\u63a5\u5165\u89c4\u5219\u586b\u5199\u4e3b\u9898\u548c\u8ba4\u8bc1\u65b9\u5f0f\uff08AccessToken\u63a5\u5165\u586b\u5199\u7528\u6237\u540d,MQTTBasic\u8ba4\u8bc1\u586b\u5199\u7528\u6237\u540d\u548c\u5bc6\u7801\uff09\\n5. \u5e73\u53f0\u5230\u8bbe\u5907\u7684\u901a\u4fe1\u53c2\u8003\u4ee5\u4e0a\u6b65\u9aa4\\n6. \u9664\u4e86\u4ee5\u4e0a\u8282\u70b9\uff0c\u5408\u7406\u4f7f\u7528\u5176\u4ed6\u529f\u80fd\u8282\u70b9\uff0c\u4e5f\u53ef\u4ee5\u8f6c\u6362\u62a5\u6587\u89c4\u8303\u5e76\u5bf9\u8bbe\u5907\u4f20\u8f93\u7684\u503c\u52a0\u5de5\u548c\u5904\u7406\\n   \\n## \u4f7f\u7528\u7f16\u8f91\u53c2\u6570\u9875\u9762\u7684`\u6570\u636e\u5904\u7406\u811a\u672c`\u529f\u80fd\\n\\n\u6570\u636e\u5904\u7406\u811a\u672c\u529f\u80fd\u53ef\u89e3\u51b3\u7b2c\u4e8c\u79cd\u95ee\u9898\uff0c\u5b83\u7684\u539f\u7406\u76f8\u5f53\u4e8e\u4e2d\u95f4\u4ef6\u3002\\n\\n1. \u521b\u5efa\u8bbe\u5907\u540e\uff0c\u70b9\u51fb\u7f16\u8f91\u53c2\u6570\uff0c\u5728\u6570\u636e\u5904\u7406\u4e0b\u62c9\u6846\u9009\u62e9`\u81ea\u5b9a\u4e49\u534f\u8bae`\\n2. \u5728\u5f39\u51fa\u7684`\u81ea\u5b9a\u4e49\u6570\u636e\u89e3\u6790\u811a\u672c`\u5bf9\u8bdd\u6846\u4e2d\u8f93\u5165`\u4e0a\u884c\u89e3\u6790\u811a\u672c`\u548c`\u4e0b\u884c\u89e3\u6790\u811a\u672c`\\n3. \u4fdd\u5b58\u540e\u521b\u5efa\u5176\u4ed6\u540c\u7c7b\u8bbe\u5907\u7684\u65f6\u5019\u53ef\u4ee5\u76f4\u63a5\u9009\u62e9\u89e3\u6790\u811a\u672c\\n4. \u6570\u636e\u5904\u7406\u811a\u672c\u901a\u5e38\u8fd8\u53ef\u5bf9\u8bbe\u5907\u4f20\u8f93\u7684\u503c\u505a\u52a0\u5de5\u5904\u7406\\n5. \u5177\u4f53\u7ec6\u8282\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u63d0\u4f9b\u7ed9\u7684\u89e3\u6790\u6848\u4f8b\\n\\n## \u6848\u4f8b\\n\\n\u7f51\u5173\u8bbe\u5907\u5e73\u53f0\u89c4\u8303\u62a5\u6587\uff1a\\n\\n```json\\n{\\n\\t\\"TH180001\\": {\\n\\t\\t\\"temp\\": 26.5,\\n\\t\\t\\"hum\\": 45.5\\n\\t},\\n\\t\\"TH180002\\": {\\n\\t\\t\\"temp\\": 26.5,\\n\\t\\t\\"hum\\": 45.5\\n\\t}\\n}\\n```\\n\\n\u975e\u89c4\u8303\u8bbe\u5907\u62a5\u6587\uff1a\\n```json\\n{\\n\\t\\"sensorDatas\\": {\\n\\t\\t\\"TH180001\\": {\\n\\t\\t\\t\\"temp\\": 265,\\n\\t\\t\\t\\"hum\\": 455\\n\\t\\t},\\n\\t\\t\\"TH180002\\": {\\n\\t\\t\\t\\"temp\\": 265,\\n\\t\\t\\t\\"hum\\": 455\\n\\t\\t}\\n\\t},\\n\\t\\"type\\": 2\\n}\\n```\\n\u4ee5\u4e0a\u884c\u89e3\u6790\u811a\u672c\u4e3a\u4f8b\uff1a\\n\\n1. \u5206\u6790\u53d1\u73b0\u8bbe\u5907\u53d1\u6765\u7684\u62a5\u6587\u591a\u4e86\u4e00\u5c42\u5d4c\u5957\uff0c\u5e76\u4e14\u6570\u503c\u90fd\u672a\u505a\u5904\u7406\\n2. \u521b\u5efa\u7f51\u5173\u8bbe\u5907\uff0c\u6dfb\u52a0\u4e24\u4e2a\u5b50\u8bbe\u5907\u3002\uff08\u6ce8\u610f\u5b50\u8bbe\u5907\u5730\u5740\u5728\u7f16\u8f91\u53c2\u6570\u4e2d\u586b\u5199\uff0c\u540c\u4e00\u7f51\u5173\u4e2d\u4e0d\u53ef\u91cd\u590d\uff0c\u5982\u4e0b\u56fe\uff09\\n![](./images/compatible_device_02.png)\\n3. \u9996\u5148\u7f16\u5199\u4ee3\u7801\\n    ```javascript\\n    var device_msg = \'{\\"sensorDatas\\":{\\"TH180001\\":{\\"temp\\":265,\\"hum\\":455},\\"TH180002\\":{\\"temp\\":26.5,\\"hum\\":45.5}},\\"type\\":2}\'\\n    var public_topic = \\"gateway/attributes\\"\\n    var msg = encodeInp(device_msg,public_topic)\\n    console.log(msg)\\n    function encodeInp(msg, topic){\\n        // \u5c06\u8bbe\u5907\u81ea\u5b9a\u4e49msg\uff08\u81ea\u5b9a\u4e49\u5f62\u5f0f\uff09\u6570\u636e\u8f6c\u6362\u4e3ajson\u5f62\u5f0f\u6570\u636e, \u8bbe\u5907\u4e0a\u62a5\u6570\u636e\u5230\u7269\u8054\u7f51\u5e73\u53f0\u65f6\u8c03\u7528\\n\\t// \u5165\u53c2\uff1atopic string \u8bbe\u5907\u4e0a\u62a5\u6d88\u606f\u7684 topic\\n\\t// \u5165\u53c2\uff1amsg byte[] \u6570\u7ec4 \u4e0d\u80fd\u4e3a\u7a7a\\n\\t// \u51fa\u53c2\uff1astring\\n\\t// \u5904\u7406\u5b8c\u540e\u5c06\u5bf9\u8c61\u8f6c\u56de\u5b57\u7b26\u4e32\u5f62\u5f0f\\n\\t// \u4f8b\uff0cbyte[]\u8f6cstring\uff1avar msgString = String.fromCharCode.apply(null, msg);\\n\\t// \u4f8b\uff0cstring\u8f6cjsonObj\uff1amsgJson = JSON.parse(msgString);\\n\\t// \u4f8b\uff0cjsonObj\u8f6cstring\uff1amsgString = JSON.stringify(msgJson);\\n\\tvar msgString = String.fromCharCode.apply(null, msg)\\n        if (topic === \\"gateway/attributes\\"){\\n            var jsonObj = JSON.parse(msgString);\\n            newObj = jsonObj.sensorDatas\\n            for(var key in newObj){\\n                for(var k in newObj[key]){\\n                    newObj[key][k] = newObj[key][k]/10\\n                }\\n            }\\n            msg = JSON.stringify(newObj);\\n        }\\n        return msg;\\n    }\\n    ```\\n4. \u4f7f\u7528\u5728\u7ebfjs\u8c03\u8bd5\u5de5\u5177,\u8fd9\u91cc\u7528\u7684\u662f\uff1ahttps://www.lddgo.net/code/runcode/javascript\\n![](./images/compatible_device_01.png)\\n5. \u8c03\u8bd5\u597d\u4ee5\u540e\uff0c\u5c06\u51fd\u6570\u7c98\u8d34\u8fdb\u811a\u672c\u4fdd\u5b58\uff08\u811a\u672c\u5728\u7f51\u5173\u7684\u7f16\u8f91\u53c2\u6570\u4e2d\uff0c\u5982\u56fe\uff09\\n![](./images/compatible_device_03.png)\\n![](./images/compatible_device_04.png)\\n6. \u4e0b\u884c\u811a\u672c\u7684\u7f16\u5199\u4e5f\u540c\u4e0a"},{"id":"thingspanel-ver0.3.0-release","metadata":{"permalink":"/zh-Hans/blog/thingspanel-ver0.3.0-release","editUrl":"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/blog/2022-08-15-thingspanel-0.3.md","source":"@site/blog/2022-08-15-thingspanel-0.3.md","title":"ThingsPanel-0.3.0 \u53d1\u5e03\uff0c\u589e\u52a0\u89c4\u5219\u5f15\u64ce\u3001\u6743\u9650\u7cfb\u7edf\u3001\u4f18\u5316\u8bbe\u5907\u63a5\u5165","description":"\u53d1\u5e03\u8bf4\u660e","date":"2022-08-15T00:00:00.000Z","formattedDate":"2022\u5e748\u670815\u65e5","tags":[{"label":"ThingsPanel","permalink":"/zh-Hans/blog/tags/things-panel"},{"label":"\u89c4\u5219\u5f15\u64ce","permalink":"/zh-Hans/blog/tags/\u89c4\u5219\u5f15\u64ce"},{"label":"\u6743\u9650\u7cfb\u7edf","permalink":"/zh-Hans/blog/tags/\u6743\u9650\u7cfb\u7edf"},{"label":"\u6027\u80fd\u6d4b\u8bd5","permalink":"/zh-Hans/blog/tags/\u6027\u80fd\u6d4b\u8bd5"}],"readingTime":2.825,"hasTruncateMarker":false,"authors":[{"name":"zjhong","title":"\u6781\u76ca\u79d1\u6280","url":"https://github.com/zjhong","image_url":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4","imageURL":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"}],"frontMatter":{"slug":"thingspanel-ver0.3.0-release","title":"ThingsPanel-0.3.0 \u53d1\u5e03\uff0c\u589e\u52a0\u89c4\u5219\u5f15\u64ce\u3001\u6743\u9650\u7cfb\u7edf\u3001\u4f18\u5316\u8bbe\u5907\u63a5\u5165","authors":{"name":"zjhong","title":"\u6781\u76ca\u79d1\u6280","url":"https://github.com/zjhong","image_url":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4","imageURL":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"},"tags":["ThingsPanel","\u89c4\u5219\u5f15\u64ce","\u6743\u9650\u7cfb\u7edf","\u6027\u80fd\u6d4b\u8bd5"]},"unlisted":false,"prevItem":{"title":"ThingsPanel \u975e\u5b98\u65b9\u6807\u51c6MQTT\u534f\u8bae\u8bbe\u5907\u63a5\u5165","permalink":"/zh-Hans/blog/script"},"nextItem":{"title":"ThingsPanel \u53d1\u5e03\u7269\u8054\u7f51\u624b\u673a\u5ba2\u6237\u7aef\uff08\u591a\u56fe\uff09","permalink":"/zh-Hans/blog/thingspanel-app"}},"content":"## \u53d1\u5e03\u8bf4\u660e\\n\\n\u8fd9\u6b21\u7684\u53d1\u5e03\u4fee\u6539\u4e86\u4e4b\u524d\u7528\u6237\u63d0\u51fa\u7684\u4f17\u591a\u95ee\u9898\uff0c\u5c24\u5176\u662f\u5927\u89c4\u6a21\u8bbe\u5907\u7684\u7ba1\u7406\u3001\u590d\u6742\u8bbe\u5907\u7684\u63a5\u5165\u3001\u5982\u4f55\u9ad8\u6548\u7684\u5c06\u6570\u636e\u8f6c\u53d1\u7ed9\u7b2c\u4e09\u65b9\u3002\u53e6\u5916\u8fd9\u6b21\u4e5f\u662f\u5bf9\u6027\u80fd\u8fdb\u884c\u4e86\u4e00\u4e2a\u6574\u4f53\u7684\u6d4b\u8bd5\uff0c\u6a21\u62df10000\u4e2a\u8bbe\u5907\u5bf9\u7cfb\u7edf\u8fdb\u884c\u4e86\u538b\u529b\u6d4b\u8bd5\uff0c\u5e76\u5b9e\u73b0\u4e86\u5355TimescaleDB\u8282\u70b95000\u8bbe\u5907/\u79d2\u63a5\u5165\u80fd\u529b\uff084\u6838\u5fc38G\uff09\u3002\u5728\u6743\u9650\u65b9\u9762\uff0c\u6a2a\u5411\u7cbe\u7ec6\u5230\u64cd\u4f5c\u548c\u6309\u94ae\uff0c\u5efa\u7acb\u4e86\u8f83\u4e3a\u5b8c\u6574\u7684RBAC\u6743\u9650\u652f\u6301\u3002\u5f53\u7136\u4e5f\u5305\u62ec\u5f88\u591a\u7ec6\u8282\u6539\u8fdb\u3002\\n\\n## \u7cfb\u7edf\u6f14\u793a\\n\\n\u6f14\u793a\u5730\u5740\uff1ahttp://dev.thingspanel.cn\\n\\n\u8d26\u53f7\u5bc6\u7801\\n\\n- \u7528\u6237\u540d\uff1aadmin@thingspanel.cn \\n- \u5bc6\u7801\uff1a123456\\n\\n## \u65b0\u589e\u529f\u80fd\u200b\\n- \u589e\u52a0\u4e86 Redis \u4f5c\u4e3a\u7f13\u5b58\u6a21\u5757\\n- \u589e\u52a0\u4e86 RBAC \u6743\u9650\u7ba1\u7406\u6a21\u5757\uff0c\u4f7f\u7528\u7684\u662f Casbin \u6743\u9650\u6846\u67b6\uff0c\u6743\u9650\u7c92\u5ea6\u5177\u4f53\u5230\u8bbe\u5907\u3001\u6309\u94ae\u6216\u8005\u63a5\u53e3\\n\\n![](images/2022-08-15-11-25-27.png)\\n\\n- \u589e\u52a0\u4e86\u89d2\u8272\u7ba1\u7406\u9875\u9762\uff0c\u652f\u6301\u591a\u4e2a\u89d2\u8272\u3002\\n  \\n![](images/2022-08-15-11-28-22.png)\\n\\n- \u589e\u52a0\u4e86\u6743\u9650\u7ba1\u7406\u9875\u9762\uff0c\u6743\u9650\u7cbe\u7ec6\u5230\u64cd\u4f5c\u3002\\n\\n![](images/2022-08-15-11-29-21.png)\\n\\n- \u7cfb\u7edf\u540e\u7aef\u589e\u52a0\u4e86\u5bf9 Docker \u73af\u5883\u53d8\u91cf\u7684\u652f\u6301\uff0c\u65b9\u4fbf\u914d\u7f6e\u3002\\n- \u7b80\u5316\u4e86\u90e8\u7f72\uff0c\u589e\u52a0\u4e86\u5bf9\u534e\u4e3a\u4e91 / \u963f\u91cc\u4e91\u7684\u9002\u914d\u3002\\n- \u589e\u52a0\u4e86\u63a5\u5165\u89c4\u5219\u5f15\u64ce\u548c\u6570\u636e\u8f6c\u53d1\u529f\u80fd\u3002\\n\\n![](images/2022-08-15-11-30-05.png)\\n\\n![](images/2022-08-15-11-30-15.png)\\n\\n- \u91cd\u5199\u4e86\u4e1a\u52a1 - \u8bbe\u5907\u5206\u7ec4 - \u8bbe\u5907\u6a21\u5757\uff0c\u652f\u6301\u8bbe\u5907\u65e0\u9650\u5206\u7ec4\\n\\n![](images/2022-08-15-11-30-50.png)\\n\\n![](images/2022-08-15-11-30-59.png)\\n\\n- \u589e\u52a0\u4e86\u64cd\u4f5c\u8bbe\u5907\u7684\u65e5\u5fd7\uff0c\u652f\u6301\u67e5\u8be2\u624b\u52a8\u64cd\u4f5c\u548c\u81ea\u52a8\u64cd\u4f5c\u8bb0\u5f55\\n\\n![](images/2022-08-15-11-31-15.png)\\n\\n## \u4f18\u5316\u548c\u4fee\u590d\u200b\\n- \u4f18\u5316\u4e86\u9996\u6b21\u767b\u5f55\u52a0\u8f7d\u901f\u5ea6\u3002\\n- \u4f18\u5316\u4e86\u6574\u4f53\u7684 UI\u3002\\n- \u4f18\u5316\u4e86\u90e8\u5206\u8868\u7d22\u5f15\u548c\u6392\u5e8f\uff0c\u63d0\u9ad8\u4e86\u64cd\u4f5c\u7684\u6d41\u7545\u5ea6\u3002\\n- \u63d0\u9ad8\u4e86\u538b\u529b\u6d4b\u8bd5\u6807\u51c6\uff0c\u5bf9\u5404\u65b9\u9762\u6027\u80fd\u548c\u7ed3\u6784\u8fdb\u884c\u4e86\u4f18\u5316\u3002\\n- \u4f18\u5316\u4e86\u81ea\u52a8\u5316\u7684\u544a\u8b66\u548c\u63a7\u5236\u7b56\u7565\u3002\\n- \u91cd\u5199\u4e86\u7528\u6237\u6dfb\u52a0\u529f\u80fd\u548c\u9875\u9762\u3002\\n- \u4f18\u5316\u4e86\u544a\u8b66\u4fe1\u606f\u9875\u9762\u3002\\n\\n## \u4e0b\u4e00\u4e2a\u7248\u672c\u8ba1\u5212\\n\\n\u4e0b\u4e00\u4e2a\u7248\u672c\u7f16\u53f70.4.0\uff0c\u529f\u80fd\u4e0a\u8ba1\u5212\u501f\u9274HomeAssistant\uff0c\u5b9e\u73b0\u66f4\u4e3a\u5f00\u653e\u7684\u7ed3\u6784\uff0c\u589e\u52a0\u5171\u4eab\u56fe\u8868\u7ec4\u4ef6\u7ec4\uff0c\u4f7f\u5f00\u53d1\u63d2\u4ef6\u66f4\u4e3a\u7b80\u5355\uff0c\u66f4\u9ad8\u7684\u63d2\u4ef6\u5f00\u53d1\u6548\u7387\u3002ThingsPanel\u4e4b\u524d\u5b58\u5728\u7684\u91cd\u5927\u7ed3\u6784\u6027\u95ee\u9898\u5c06\u5f97\u5230\u6539\u8fdb\uff0c\u5c24\u5176\u5728\u5927\u578b\u96c6\u6210\u9879\u76ee\u4e0a\uff0c\u6548\u7387\u5c06\u975e\u5e38\u7a81\u51fa\u3002"},{"id":"thingspanel-app","metadata":{"permalink":"/zh-Hans/blog/thingspanel-app","editUrl":"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/blog/2022-07-22-thingspanel-app.md","source":"@site/blog/2022-07-22-thingspanel-app.md","title":"ThingsPanel \u53d1\u5e03\u7269\u8054\u7f51\u624b\u673a\u5ba2\u6237\u7aef\uff08\u591a\u56fe\uff09","description":"ThingsPanel \u662f\u4e00\u6b3e\u7269\u8054\u7f51\u5e95\u5c42\u5f00\u6e90\u8f6f\u4ef6\uff0c\u4e3b\u8981\u529f\u80fd\u662f\u91c7\u96c6\u8bbe\u5907\u6570\u636e\u3001\u53ef\u89c6\u5316\u3001\u81ea\u52a8\u5316\u63a7\u5236\uff0c\u4e3a\u4f17\u591a\u96c6\u6210\u5546\u3001\u8bbe\u5907\u5546\u3001\u65b9\u6848\u5546\u63d0\u4f9b\u5feb\u901f\u7684\u4ea7\u54c1\u548c\u4ea4\u4ed8\u65b9\u6848\u3002","date":"2022-07-22T00:00:00.000Z","formattedDate":"2022\u5e747\u670822\u65e5","tags":[{"label":"ThingsPanel","permalink":"/zh-Hans/blog/tags/things-panel"},{"label":"APP","permalink":"/zh-Hans/blog/tags/app"}],"readingTime":1.315,"hasTruncateMarker":false,"authors":[{"name":"zjhong","title":"\u6781\u76ca\u79d1\u6280","url":"https://github.com/zjhong","image_url":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4","imageURL":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"}],"frontMatter":{"slug":"thingspanel-app","title":"ThingsPanel \u53d1\u5e03\u7269\u8054\u7f51\u624b\u673a\u5ba2\u6237\u7aef\uff08\u591a\u56fe\uff09","authors":{"name":"zjhong","title":"\u6781\u76ca\u79d1\u6280","url":"https://github.com/zjhong","image_url":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4","imageURL":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"},"tags":["ThingsPanel","APP"]},"unlisted":false,"prevItem":{"title":"ThingsPanel-0.3.0 \u53d1\u5e03\uff0c\u589e\u52a0\u89c4\u5219\u5f15\u64ce\u3001\u6743\u9650\u7cfb\u7edf\u3001\u4f18\u5316\u8bbe\u5907\u63a5\u5165","permalink":"/zh-Hans/blog/thingspanel-ver0.3.0-release"}},"content":"ThingsPanel \u662f\u4e00\u6b3e\u7269\u8054\u7f51\u5e95\u5c42\u5f00\u6e90\u8f6f\u4ef6\uff0c\u4e3b\u8981\u529f\u80fd\u662f\u91c7\u96c6\u8bbe\u5907\u6570\u636e\u3001\u53ef\u89c6\u5316\u3001\u81ea\u52a8\u5316\u63a7\u5236\uff0c\u4e3a\u4f17\u591a\u96c6\u6210\u5546\u3001\u8bbe\u5907\u5546\u3001\u65b9\u6848\u5546\u63d0\u4f9b\u5feb\u901f\u7684\u4ea7\u54c1\u548c\u4ea4\u4ed8\u65b9\u6848\u3002\\n\\nThingsPanel \u7684\u624b\u673a\u7aef APP \u7528\u4e8e\u5bf9 ThingsPanel \u63d0\u4f9b\u79fb\u52a8\u7ba1\u7406\u548c\u63a7\u5236\u652f\u6301\u3002\u4e3b\u8981\u5b9e\u73b0\u7684\u529f\u80fd\u5305\u62ec\u76d1\u6d4b\u3001\u63a7\u5236\u3001\u7b56\u7565\u3001\u4ee5\u53ca\u8bbe\u5907\u6dfb\u52a0\u7ba1\u7406\u7b49\u529f\u80fd\u3002\u662f ThingsPanel \u7684\u8f7b\u578b\u4f7f\u7528\u5ba2\u6237\u7aef\uff0c\u652f\u6301 SAAS \u573a\u666f\u3002\\n\\n## \u624b\u673a\u7aef\u7684\u529f\u80fd\u7279\u70b9\u5305\u62ec\uff1a\\n\\n - \u4f7f\u7528 Uniapp \u5f00\u53d1\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u7f16\u8bd1\u6210 iOS\uff0c\u5b89\u5353\uff0c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4ee5\u53ca\u5176\u4ed6\u5c0f\u7a0b\u5e8f\uff0cH5\u3002 \\n - \u53ef\u4ee5\u626b\u7801\u6dfb\u52a0\u8bbe\u5907\uff08\u8bbe\u5907\u9700\u8981\u5728\u540e\u53f0\u5148\u5bfc\u5165\uff09\u3002 \\n - \u67e5\u770b\u76d1\u6d4b\u503c\u3002     \\n - \u5207\u6362\u667a\u80fd\u5316\u9879\u76ee\u548c\u8bbe\u5907\u5206\u7ec4\u3002     \\n - \u624b\u52a8\u63a7\u5236\u3002     \\n - \u8bbe\u7f6e\u63a7\u5236\u7b56\u7565\uff0c\\n - \u5206\u4e3a\u8bbe\u5907\u89e6\u53d1\u548c\u65f6\u95f4\u6761\u4ef6\u89e6\u53d1\u4e24\u79cd\u3002   \\n - \u67e5\u770b\u64cd\u4f5c\u65e5\u5fd7\u3002  \\n - \u4e2a\u4eba\u8d26\u53f7\u7ba1\u7406\u529f\u80fd\u3002   \\n - \u624b\u673a\u9a8c\u8bc1\u7801\u767b\u5f55\u3002\\n\\nThingsPanel-APP\u624b\u673a\u5ba2\u6237\u7aef\u767b\u5f55\u9875\u9762\\n![ThingsPanel-APP\u767b\u5f55\u9875](/img/thingspanel-app-login.webp)\\n\\n\\nThingsPanel-APP\u624b\u673a\u5ba2\u6237\u7aef\u9996\u9875\\n![ThingsPanel-APP](/img/thingspanel-app-home.webp)"}]}')}}]);