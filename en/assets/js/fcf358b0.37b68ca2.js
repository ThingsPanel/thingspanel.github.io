"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:15},a="\u589e\u52a0\u975e\u7269\u8054\u7f51\u7684\u529f\u80fd",s={unversionedId:"system-development/integrateOtherSystem",id:"system-development/integrateOtherSystem",title:"\u589e\u52a0\u975e\u7269\u8054\u7f51\u7684\u529f\u80fd",description:"\u4f8b\u5982\u5728ThingsPanel\u7684\u57fa\u7840\u4e0a\u589e\u52a0OA\u3001\u7f51\u7ad9\u3001\u751f\u4ea7\u7ba1\u7406\u3001\u7535\u5546\u5e73\u53f0\u3001\u8d22\u52a1\u7ba1\u7406\u7b49\u5176\u5b83\u975e\u7269\u8054\u7f51\u7684\u529f\u80fd\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/system-development/integrateOtherSystem.md",sourceDirName:"system-development",slug:"/system-development/integrateOtherSystem",permalink:"/en/docs/system-development/integrateOtherSystem",draft:!1,editUrl:"https://github.com/ThingsPanel/thingspanel.github.io/tree/source/docs/system-development/integrateOtherSystem.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"\u5f00\u53d1\u79fb\u52a8\u5e94\u7528",permalink:"/en/docs/system-development/appDev"},next:{title:"\u540e\u7aef\u63a5\u53e3",permalink:"/en/docs/system-development/backend_api"}},l={},c=[{value:"\u589e\u52a0\u8fd9\u4e9b\u529f\u80fd\u7684\u524d\u63d0",id:"\u589e\u52a0\u8fd9\u4e9b\u529f\u80fd\u7684\u524d\u63d0",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u589e\u52a0\u975e\u7269\u8054\u7f51\u7684\u529f\u80fd"},"\u589e\u52a0\u975e\u7269\u8054\u7f51\u7684\u529f\u80fd"),(0,o.kt)("p",null,"\u4f8b\u5982\u5728ThingsPanel\u7684\u57fa\u7840\u4e0a\u589e\u52a0OA\u3001\u7f51\u7ad9\u3001\u751f\u4ea7\u7ba1\u7406\u3001\u7535\u5546\u5e73\u53f0\u3001\u8d22\u52a1\u7ba1\u7406\u7b49\u5176\u5b83\u975e\u7269\u8054\u7f51\u7684\u529f\u80fd\u3002"),(0,o.kt)("h2",{id:"\u589e\u52a0\u8fd9\u4e9b\u529f\u80fd\u7684\u524d\u63d0"},"\u589e\u52a0\u8fd9\u4e9b\u529f\u80fd\u7684\u524d\u63d0"),(0,o.kt)("p",null,"\u719f\u7ec3\u4f7f\u7528ThingsPanel\u6280\u672f\u6808 \u719f\u6089ThingsPanel\u7cfb\u7edf\u7684\u8bbe\u8ba1\u673a\u5236"))}u.isMDXComponent=!0}}]);