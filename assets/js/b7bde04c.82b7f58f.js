"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[4258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=c,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:c,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),c=(r(7294),r(3905));const a={},o="Post Process and trackers",i={unversionedId:"cache/Verif/post_proccess",id:"cache/Verif/post_proccess",title:"Post Process and trackers",description:"Cache_pp",source:"@site/docs/cache/Verif/post_proccess.md",sourceDirName:"cache/Verif",slug:"/cache/Verif/post_proccess",permalink:"/fpga_mafia_wiki/docs/cache/Verif/post_proccess",draft:!1,editUrl:"https://github.com/FPGA-MAFIA/fpga_mafia_wiki/tree/main/docs/cache/Verif/post_proccess.md",tags:[],version:"current",frontMatter:{},sidebar:"Cache",previous:{title:"trackers",permalink:"/fpga_mafia_wiki/docs/cache/Verif/trackers"},next:{title:"Dedicated Test Intro",permalink:"/fpga_mafia_wiki/docs/cache/Verif/Dedicated_test"}},s={},p=[{value:"Cache_pp",id:"cache_pp",level:2}],l={toc:p},f="wrapper";function u(e){let{components:t,...r}=e;return(0,c.kt)(f,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"post-process-and-trackers"},"Post Process and trackers"),(0,c.kt)("h2",{id:"cache_pp"},"Cache_pp"),(0,c.kt)("p",null,"The Cache Post-Process script is designed to compare the top level tracker generated during the execution of a cache test against a reference model. It play a pivotal role in debugging and verification. The primary goal is to identify any differences between the two sets of trackers. The script will return the differences between the two files and help us fix different bugs in the code.\nWe can easily run the cache PP script by using the `-pp`` flag while running our build.py script"))}u.isMDXComponent=!0}}]);