"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[3407],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,u=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(u,i(i({ref:t},m),{},{components:r})):n.createElement(u,i({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3351:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="decode",c={unversionedId:"rvc/common/decode",id:"rvc/common/decode",title:"decode",description:"- The decode stage is the second stage in the pipeline also know as Q101H stage (in our coding style). The goal of that stage is to decode the instruction and read the register file.",source:"@site/docs/rvc/common/decode.md",sourceDirName:"rvc/common",slug:"/rvc/common/decode",permalink:"/fpga_mafia_wiki/docs/rvc/common/decode",draft:!1,editUrl:"https://github.com/FPGA-MAFIA/fpga_mafia_wiki/tree/main/docs/rvc/common/decode.md",tags:[],version:"current",frontMatter:{},sidebar:"RISCV_Cores",previous:{title:"if",permalink:"/fpga_mafia_wiki/docs/rvc/common/if"},next:{title:"rf",permalink:"/fpga_mafia_wiki/docs/rvc/common/rf"}},l={},s=[],m={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"decode"},"decode"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The decode stage is the second stage in the pipeline also know as Q101H stage (in our coding style). The goal of that stage is to decode the instruction and read the register file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"One module of the decode stage is the control module: ",(0,o.kt)("inlineCode",{parentName:"p"},"mini_core_ctrl.sv")," and second one is the register file module: ",(0,o.kt)("inlineCode",{parentName:"p"},"mini_core_rf.sv"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"1) Control module: The control module is responsible for decoding the instruction and determine the control signals. Please  ",(0,o.kt)("a",{parentName:"p",href:"/fpga_mafia_wiki/docs/rvc/common/ctrl"},"click here")," for more information about the .")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"2) Register file module: The register file has two read ports and one write port. Please  ",(0,o.kt)("a",{parentName:"p",href:"/fpga_mafia_wiki/docs/rvc/common/rf"},"click here")," for more information about the register file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Due to the fact that both the PC register and the Instruction memory have a latency of 1 clock cycle, the output of the instruction memory is directly connected to that stage. This connection eliminates the need for an additional cycle within the core."))))}p.isMDXComponent=!0}}]);