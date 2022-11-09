"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3836],{4641:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"thingspanel-ver0.3.0-release","metadata":{"permalink":"/en/blog/thingspanel-ver0.3.0-release","editUrl":"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/blog/2022-08-15-thingspanel-0.3.md","source":"@site/i18n/en/docusaurus-plugin-content-blog/2022-08-15-thingspanel-0.3.md","title":"ThingsPanel-0.3.0 was released, adding a rule engine, a permission system, and optimizing device access","description":"Release notes","date":"2022-08-15T00:00:00.000Z","formattedDate":"August 15, 2022","tags":[{"label":"ThingsPanel","permalink":"/en/blog/tags/things-panel"},{"label":"Rule engine","permalink":"/en/blog/tags/rule-engine"},{"label":"Permission system","permalink":"/en/blog/tags/permission-system"},{"label":"Performance testing","permalink":"/en/blog/tags/performance-testing"}],"readingTime":1.8,"hasTruncateMarker":false,"authors":[{"name":"zjhong","title":"Jiyi Technology","url":"https://github.com/zjhong","image_url":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4","imageURL":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"}],"frontMatter":{"slug":"thingspanel-ver0.3.0-release","title":"ThingsPanel-0.3.0 was released, adding a rule engine, a permission system, and optimizing device access","authors":{"name":"zjhong","title":"Jiyi Technology","url":"https://github.com/zjhong","image_url":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4","imageURL":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"},"tags":["ThingsPanel","Rule engine","Permission system","Performance testing"]},"nextItem":{"title":"ThingsPanel releases IoT mobile client (multi-image)","permalink":"/en/blog/thingspanel-app"}},"content":"## Release notes\\n\\nThis release revises many of the questions raised by previous users, especially the management of large-scale devices, access to complex devices, and how to efficiently forward data to third parties.In addition, this time it is also an overall test of performance, simulating 10,000 devices to stress test the system, and achieving a single TimescaleDB node 5000 devices/s access capability (4 cores 8G).In terms of permissions, horizontal fine to the operation and button, a relatively complete RBAC permission support has been established.Of course, it also includes a lot of detail improvements.\\n\\n## System demo\\n\\nDemo address\uff1ahttp://dev.thingspanel.cn\\n\\nAccount password\\n\\n- User name\uff1aadmin@thingspanel.cn\\n- Password\uff1a123456\\n\\n## What\'s new\\n- Added Redis as a caching module\\n- Added RBAC permission management module, using the Casbin permission framework, and the granularity of permissions is specific to devices, buttons or interfaces\\n\\n![](images/2022-08-15-11-25-27.png)\\n\\n- Added a role management page to support multiple roles.\\n\\n![](images/2022-08-15-11-28-22.png)\\n\\n- Added a permission management page, permissions fine-grained to the operation.\\n\\n![](images/2022-08-15-11-29-21.png)\\n\\n- The system backend adds support for Docker environment variables for easy configuration.\\n- Simplified deployment and increased adaptation to HUAWEI CLOUD / Alibaba Cloud.\\n- Added access rule engine and data forwarding function.\\n\\n![](images/2022-08-15-11-30-05.png)\\n\\n![](images/2022-08-15-11-30-15.png)\\n\\n- Rewritten Business - Device Grouping - Device Module, supporting unlimited device grouping\\n\\n![](images/2022-08-15-11-30-50.png)\\n\\n![](images/2022-08-15-11-30-59.png)\\n\\n- Added log of operation device, support query manual operation and automatic operation records\\n\\n![](images/2022-08-15-11-31-15.png)\\n\\n## Optimization and fixing\\n- Optimized first login loading speed.\\n- Optimized the overall UI.\\n- Optimized indexing and sorting of some tables to improve the fluency of operations.\\n- The standard of stress testing has been raised and various aspects of performance and structure have been optimized.\\n- Optimized automated alerting and control strategies.\\n- User added features and pages rewritten.\\n- Optimized the alarm information page.\\n\\n## The next release is scheduled\\n\\nThe next version, number 0.4.0, is functionally planned to learn from HomeAssistant, implement a more open structure, increase the group of shared chart components, and make the development of plug-ins simpler and more efficient plug-in development.The major structural issues that existed before ThingsPanel will be improved, especially on large integration projects, and the efficiency will be very prominent."},{"id":"thingspanel-app","metadata":{"permalink":"/en/blog/thingspanel-app","editUrl":"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/blog/2022-07-22-thingspanel-app.md","source":"@site/i18n/en/docusaurus-plugin-content-blog/2022-07-22-thingspanel-app.md","title":"ThingsPanel releases IoT mobile client (multi-image)","description":"ThingsPanel is an underlying open source software of the Internet of Things, the main function is to collect device data, visualization, automation control, for many integrators, equipment vendors, solution providers to provide rapid product and delivery solutions.","date":"2022-07-22T00:00:00.000Z","formattedDate":"July 22, 2022","tags":[{"label":"ThingsPanel","permalink":"/en/blog/tags/things-panel"},{"label":"APP","permalink":"/en/blog/tags/app"}],"readingTime":0.885,"hasTruncateMarker":false,"authors":[{"name":"zjhong","title":"Jiyi Technology","url":"https://github.com/zjhong","image_url":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4","imageURL":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"}],"frontMatter":{"slug":"thingspanel-app","title":"ThingsPanel releases IoT mobile client (multi-image)","authors":{"name":"zjhong","title":"Jiyi Technology","url":"https://github.com/zjhong","image_url":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4","imageURL":"https://avatars.githubusercontent.com/u/61645647?s=64&v=4"},"tags":["ThingsPanel","APP"]},"prevItem":{"title":"ThingsPanel-0.3.0 was released, adding a rule engine, a permission system, and optimizing device access","permalink":"/en/blog/thingspanel-ver0.3.0-release"}},"content":"ThingsPanel is an underlying open source software of the Internet of Things, the main function is to collect device data, visualization, automation control, for many integrators, equipment vendors, solution providers to provide rapid product and delivery solutions.\\n\\nThingsPanel\'s mobile app is used to provide mobile management and control support to ThingsPanel.The main implemented functions include monitoring, control, policy, and device addition management.Is a lightweight client for ThingsPanel that supports SAAS scenarios.\\n\\n## Features on the mobile phone include\uff1a\\n\\n - Using Uniapp development, it can be easily compiled into iOS, Android, WeChat Mini Program and other Mini Programs, H5.\\n - You can scan the code to add a device (the device needs to be imported in the background first).\\n - View the monitoring values.\\n - Switch between intelligent service and device groupings.\\n - Manual control.\\n - set the control policy,\\n - There are two types: device trigger and time condition trigger.\\n - Review the operation log.\\n - Personal account management function.\\n - Mobile phone verification code login.\\n\\nThingsPanel-APP mobile client login page ![ThingsPanel-APP landing page](/img/thingspanel-app-login.webp)\\n\\n\\nThingsPanel-APP Home ![ThingsPanel-APP](/img/thingspanel-app-home.webp)"}]}')}}]);