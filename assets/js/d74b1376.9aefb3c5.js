"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[4881],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6969:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},s="Assumption & Assertions",i={unversionedId:"cache/Assumption_Assertions",id:"cache/Assumption_Assertions",title:"Assumption & Assertions",description:"Core Interface Assumption:",source:"@site/docs/cache/Assumption_Assertions.md",sourceDirName:"cache",slug:"/cache/Assumption_Assertions",permalink:"/fpga_mafia_wiki/docs/cache/Assumption_Assertions",draft:!1,editUrl:"https://github.com/FPGA-MAFIA/fpga_mafia_wiki/tree/main/docs/cache/Assumption_Assertions.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Core Interface Assumption:",id:"core-interface-assumption",level:2},{value:"Far Memory Interface Assumption:",id:"far-memory-interface-assumption",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"assumption--assertions"},"Assumption & Assertions"),(0,a.kt)("h2",{id:"core-interface-assumption"},"Core Interface Assumption:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core will not send Read/Write requests when Cache asserts the Stall signals"),(0,a.kt)("li",{parentName:"ul"},"All Reads & Writes are Word aligned"),(0,a.kt)("li",{parentName:"ul"},"Writes can be sb sh or sw"),(0,a.kt)("li",{parentName:"ul"},"Reads can be lb, lh or lw"),(0,a.kt)("li",{parentName:"ul"},"Core cannot Reject or Stall Read Responses")),(0,a.kt)("h2",{id:"far-memory-interface-assumption"},"Far Memory Interface Assumption:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The FM Read response latency is not deterministic "),(0,a.kt)("li",{parentName:"ul"},'FM Cannot reject/Stall\n1) \u201cDirty Evict\u201d (Write modified Data to FM)\n2) Read miss. (Read Request from Cache to FM)\nThis means there is no need for an "ack.accept" interface between cache <-> FM')))}m.isMDXComponent=!0}}]);