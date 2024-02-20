"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[2091],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=o,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,l={unversionedId:"TFM/projectTool/hw_elab",id:"TFM/projectTool/hw_elab",title:"hw_elab",description:"Elaboration",source:"@site/docs/TFM/projectTool/hw_elab.md",sourceDirName:"TFM/projectTool",slug:"/TFM/projectTool/hw_elab",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/hw_elab",draft:!1,editUrl:"https://github.com/FPGA-MAFIA/fpga_mafia_wiki/tree/main/docs/TFM/projectTool/hw_elab.md",tags:[],version:"current",frontMatter:{},sidebar:"TFM",previous:{title:"hw_compile",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/hw_compile"},next:{title:"hw_sim",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/hw_sim"}},c={},p=[{value:"Elaboration",id:"elaboration",level:3}],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"elaboration"},"Elaboration"),(0,o.kt)("p",null,"It creates a hierarchical representation of the design by connecting modules and resolving dependencies between them."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Common elaboration errors:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"System Verilog elaboration error involving an undeclared signal while instantiating a module"),(0,o.kt)("li",{parentName:"ol"},"Suppose you have two Verilog modules, ModuleA and ModuleB, and you want to instantiate ModuleB within ModuleA. However, you accidentally misspell the module name when instantiating it")),(0,o.kt)("p",null,"and many more..."))}m.isMDXComponent=!0}}]);