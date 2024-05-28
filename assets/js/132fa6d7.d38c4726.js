"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[1604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,u=p["".concat(c,".").concat(f)]||p[f]||x[f]||o;return n?r.createElement(u,a(a({ref:t},m),{},{components:n})):r.createElement(u,a({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},448:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,l={unversionedId:"TFM/projectTool/crt0",id:"TFM/projectTool/crt0",title:"crt0",description:"We've come across the crt0.s file while working on creating *.elf files, but we haven't explored why this file is important.",source:"@site/docs/TFM/projectTool/crt0.md",sourceDirName:"TFM/projectTool",slug:"/TFM/projectTool/crt0",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/crt0",draft:!1,editUrl:"https://github.com/FPGA-MAFIA/fpga_mafia_wiki/tree/main/docs/TFM/projectTool/crt0.md",tags:[],version:"current",frontMatter:{},sidebar:"TFM",previous:{title:"linker",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/linker"},next:{title:"intro",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/intro"}},c={},s=[],m={toc:s},p="wrapper";function x(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We've come across the ",(0,i.kt)("inlineCode",{parentName:"p"},"crt0.s")," file while working on creating ",(0,i.kt)("inlineCode",{parentName:"p"},"*.elf")," files, but we haven't explored why this file is important."),(0,i.kt)("p",null,'The crt0.s file, commonly referred to as "C runtime initialization," is an assembly language file that serves as the entry point for C and C++ programs. Its primary role is to set up the runtime environment for a program, including initializing the stack, global variables, processing command-line arguments, and executing the main function. crt0.s is platform-specific and ensures that a program starts correctly and has the necessary resources and environment for execution. Typically, programmers do not need to modify this file, as it is provided by the toolchain and runtime libraries.   '),(0,i.kt)("p",null,"Lets take a look at our ",(0,i.kt)("inlineCode",{parentName:"p"},"crt0.s")," file and explore the main sections"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reset_handler : Before the main program starts, we initialize all 32 registers to 0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"li   x2, 0x8000")," : Initialization of stack pointer. The address (0x8000) is not an arbitrary address and we must take into consideration some definitions in the linker file. (Take a look at the memory section in the ",(0,i.kt)("a",{parentName:"li",href:"/fpga_mafia_wiki/docs/TFM/projectTool/linker"},"linker file")," )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"jal x1, main")," : After initializations of registers and stack pointer we jumps to main program   ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"_start:\n  .global _start\n  .org 0x00\n  nop                       \n  nop                       \n  nop                       \n  nop                       \n  nop                       \nreset_handler:\n  mv  x1, x0\n  mv  x2, x1\n  mv  x3, x1\n  mv  x4, x1\n  mv  x5, x1\n  mv  x6, x1\n  mv  x7, x1\n  mv  x8, x1\n  mv  x9, x1\n  mv x10, x1\n  mv x11, x1\n  mv x12, x1\n  mv x13, x1\n  mv x14, x1\n  mv x15, x1\n  mv x16, x1\n  mv x17, x1\n  mv x18, x1\n  mv x19, x1\n  mv x20, x1\n  mv x21, x1\n  mv x22, x1\n  mv x23, x1\n  mv x24, x1\n  mv x25, x1\n  mv x26, x1\n  mv x27, x1\n  mv x28, x1\n  mv x29, x1\n  mv x30, x1\n  mv x31, x1\n  /* stack initialization */\n  li   x2, 0x8000\n  jal x1, main  //jump to main\n  ebreak        //end\n  .section .text\n\n")))}x.isMDXComponent=!0}}]);