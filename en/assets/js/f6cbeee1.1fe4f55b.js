"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3836],{4641:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"thingspanel-app","metadata":{"permalink":"/en/blog/thingspanel-app","editUrl":"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/blog/2022-07-22-thingspanel-app.md","source":"@site/blog/2022-07-22-thingspanel-app.md","title":"ThingsPanel \u53d1\u5e03\u7269\u8054\u7f51\u624b\u673a\u5ba2\u6237\u7aef\uff08\u591a\u56fe\uff09","description":"ThingsPanel \u662f\u4e00\u6b3e\u7269\u8054\u7f51\u5e95\u5c42\u5f00\u6e90\u8f6f\u4ef6\uff0c\u4e3b\u8981\u529f\u80fd\u662f\u91c7\u96c6\u8bbe\u5907\u6570\u636e\u3001\u53ef\u89c6\u5316\u3001\u81ea\u52a8\u5316\u63a7\u5236\uff0c\u4e3a\u4f17\u591a\u96c6\u6210\u5546\u3001\u8bbe\u5907\u5546\u3001\u65b9\u6848\u5546\u63d0\u4f9b\u5feb\u901f\u7684\u4ea7\u54c1\u548c\u4ea4\u4ed8\u65b9\u6848\u3002","date":"2022-07-22T00:00:00.000Z","formattedDate":"July 22, 2022","tags":[{"label":"ThingsPanel","permalink":"/en/blog/tags/things-panel"},{"label":"APP","permalink":"/en/blog/tags/app"}],"readingTime":1.315,"hasTruncateMarker":false,"authors":[{"name":"zjhong","title":"\u6781\u76ca\u79d1\u6280","url":"https://github.com/zjhong","image_url":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4","imageURL":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"}],"frontMatter":{"slug":"thingspanel-app","title":"ThingsPanel \u53d1\u5e03\u7269\u8054\u7f51\u624b\u673a\u5ba2\u6237\u7aef\uff08\u591a\u56fe\uff09","authors":{"name":"zjhong","title":"\u6781\u76ca\u79d1\u6280","url":"https://github.com/zjhong","image_url":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4","imageURL":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"},"tags":["ThingsPanel","APP"]}},"content":"ThingsPanel \u662f\u4e00\u6b3e\u7269\u8054\u7f51\u5e95\u5c42\u5f00\u6e90\u8f6f\u4ef6\uff0c\u4e3b\u8981\u529f\u80fd\u662f\u91c7\u96c6\u8bbe\u5907\u6570\u636e\u3001\u53ef\u89c6\u5316\u3001\u81ea\u52a8\u5316\u63a7\u5236\uff0c\u4e3a\u4f17\u591a\u96c6\u6210\u5546\u3001\u8bbe\u5907\u5546\u3001\u65b9\u6848\u5546\u63d0\u4f9b\u5feb\u901f\u7684\u4ea7\u54c1\u548c\u4ea4\u4ed8\u65b9\u6848\u3002\\n\\nThingsPanel \u7684\u624b\u673a\u7aef APP \u7528\u4e8e\u5bf9 ThingsPanel \u63d0\u4f9b\u79fb\u52a8\u7ba1\u7406\u548c\u63a7\u5236\u652f\u6301\u3002\u4e3b\u8981\u5b9e\u73b0\u7684\u529f\u80fd\u5305\u62ec\u76d1\u6d4b\u3001\u63a7\u5236\u3001\u7b56\u7565\u3001\u4ee5\u53ca\u8bbe\u5907\u6dfb\u52a0\u7ba1\u7406\u7b49\u529f\u80fd\u3002\u662f ThingsPanel \u7684\u8f7b\u578b\u4f7f\u7528\u5ba2\u6237\u7aef\uff0c\u652f\u6301 SAAS \u573a\u666f\u3002\\n\\n## \u624b\u673a\u7aef\u7684\u529f\u80fd\u7279\u70b9\u5305\u62ec\uff1a\\n\\n - \u4f7f\u7528 Uniapp \u5f00\u53d1\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u7f16\u8bd1\u6210 iOS\uff0c\u5b89\u5353\uff0c\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4ee5\u53ca\u5176\u4ed6\u5c0f\u7a0b\u5e8f\uff0cH5\u3002 \\n - \u53ef\u4ee5\u626b\u7801\u6dfb\u52a0\u8bbe\u5907\uff08\u8bbe\u5907\u9700\u8981\u5728\u540e\u53f0\u5148\u5bfc\u5165\uff09\u3002 \\n - \u67e5\u770b\u76d1\u6d4b\u503c\u3002     \\n - \u5207\u6362\u667a\u80fd\u5316\u4e1a\u52a1\u548c\u8bbe\u5907\u5206\u7ec4\u3002     \\n - \u624b\u52a8\u63a7\u5236\u3002     \\n - \u8bbe\u7f6e\u63a7\u5236\u7b56\u7565\uff0c\\n - \u5206\u4e3a\u8bbe\u5907\u89e6\u53d1\u548c\u65f6\u95f4\u6761\u4ef6\u89e6\u53d1\u4e24\u79cd\u3002   \\n - \u67e5\u770b\u64cd\u4f5c\u65e5\u5fd7\u3002  \\n - \u4e2a\u4eba\u8d26\u53f7\u7ba1\u7406\u529f\u80fd\u3002   \\n - \u624b\u673a\u9a8c\u8bc1\u7801\u767b\u5f55\u3002\\n\\nThingsPanel-APP\u624b\u673a\u5ba2\u6237\u7aef\u767b\u5f55\u9875\u9762\\n![ThingsPanel-APP\u767b\u5f55\u9875](/img/thingspanel-app-login.webp)\\n\\n\\nThingsPanel-APP\u624b\u673a\u5ba2\u6237\u7aef\u9996\u9875\\n![ThingsPanel-APP](/img/thingspanel-app-home.webp)"}]}')}}]);