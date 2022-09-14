"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1486],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(c,".").concat(h)]||u[h]||l[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4273:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:4},o="Push data",s={unversionedId:"operation-manual/getting-started-with-example/pushdata",id:"operation-manual/getting-started-with-example/pushdata",title:"Push data",description:"Connect the device",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/operation-manual/getting-started-with-example/pushdata.md",sourceDirName:"operation-manual/getting-started-with-example",slug:"/operation-manual/getting-started-with-example/pushdata",permalink:"/en/docs/operation-manual/getting-started-with-example/pushdata",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/operation-manual/getting-started-with-example/pushdata.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create a device",permalink:"/en/docs/operation-manual/getting-started-with-example/create-device"},next:{title:"View the data",permalink:"/en/docs/operation-manual/getting-started-with-example/view-data"}},c={},d=[{value:"Connect the device",id:"connect-the-device",level:2},{value:"Configuration on the device side",id:"configuration-on-the-device-side",level:2},{value:"View the data pushed by the gateway device via MQTTBox",id:"view-the-data-pushed-by-the-gateway-device-via-mqttbox",level:2}],p={toc:d};function l(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"push-data"},"Push data"),(0,r.kt)("h2",{id:"connect-the-device"},"Connect the device"),(0,r.kt)("p",null,"Connecting the purchased device takes about 10 minutes (check with the gateway provider for the connection method)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Gateway, temperature and humidity collector, sound and light alarm",src:a(1221).Z,width:"2275",height:"1279"})),(0,r.kt)("h2",{id:"configuration-on-the-device-side"},"Configuration on the device side"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8342).Z,width:"1575",height:"900"})," Important items to configure are\uff1a",(0,r.kt)("strong",{parentName:"p"},"IP address, port, subject,"),".If there is authentication, do not fill in the wrong",(0,r.kt)("strong",{parentName:"p"},"username password"),". In the above example, the gateway is configured with push topics separately.The server side parses the gateway (Golden Pigeon) separately."),(0,r.kt)("h2",{id:"view-the-data-pushed-by-the-gateway-device-via-mqttbox"},"View the data pushed by the gateway device via MQTTBox"),(0,r.kt)("p",null,"You can see that the data has been received.The temperature of 282\xb0 as shown below (the raw data sent directly from the device) ",(0,r.kt)("img",{alt:"View the data received by the gateway",src:a(9561).Z,width:"913",height:"1385"})))}l.isMDXComponent=!0},8342:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gateway-config-0d614742d941b4a7fe5fb580d483b868.png"},9561:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mqttbox-view-data-5325c8da1fd43939ce8556c0f8563d02.png"},1221:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rs485-gateway-15796d41c16d966430e930920fcb0236.jpg"}}]);