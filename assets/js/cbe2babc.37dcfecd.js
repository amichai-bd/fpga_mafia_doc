"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[2629],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(r),h=n,u=p["".concat(l,".").concat(h)]||p[h]||c[h]||o;return r?a.createElement(u,i(i({ref:t},d),{},{components:r})):a.createElement(u,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const o={},i=void 0,s={unversionedId:"rvc/big_core/mem_wrap",id:"rvc/big_core/mem_wrap",title:"mem_wrap",description:"Introduction",source:"@site/docs/rvc/big_core/mem_wrap.md",sourceDirName:"rvc/big_core",slug:"/rvc/big_core/mem_wrap",permalink:"/fpga_mafia_wiki/docs/rvc/big_core/mem_wrap",draft:!1,editUrl:"https://github.com/FPGA-MAFIA/fpga_mafia_wiki/tree/main/docs/rvc/big_core/mem_wrap.md",tags:[],version:"current",frontMatter:{},sidebar:"RISCV_Cores",previous:{title:"big_core",permalink:"/fpga_mafia_wiki/docs/rvc/big_core/"},next:{title:"csr_registers",permalink:"/fpga_mafia_wiki/docs/rvc/big_core/csr_registers"}},l={},m=[{value:"Introduction",id:"introduction",level:2},{value:"HW/SW Memory granularity",id:"hwsw-memory-granularity",level:3}],d={toc:m},p="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Memory Wrapper wraps together all the types of memories in the system like Instruction Memory, Data Memory, VGA\nMemory and more if existed. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Memory wrapper plays a crucial role in MMIO by switching between different memory areas.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Its goal is to provide an interface between the core and the memory.",(0,n.kt)("br",{parentName:"p"}),"\n","The Figure below illustrates this interface in  HAS_RVC_ASAP project ",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":\n",(0,n.kt)("img",{alt:"memory_wrapper.png",src:r(5531).Z,width:"928",height:"694"})))),(0,n.kt)("h3",{id:"hwsw-memory-granularity"},"HW/SW Memory granularity"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On the most important issues when designing the memory wrapper is the granularity of the memory."),(0,n.kt)("li",{parentName:"ul"},"The granularity of the memory is the number of bytes that the memory can read/write in one cycle."),(0,n.kt)("li",{parentName:"ul"},"The granularity of the Instruction Memory in our cores is 1 byte. The granularity of the Data Memory is ",(0,n.kt)("strong",{parentName:"li"},"4 bytes"),"."),(0,n.kt)("li",{parentName:"ul"},"The granularity of the Instruction and Data Memory as defined by the compiler is ",(0,n.kt)("strong",{parentName:"li"},"1 bytes"),". This means that the we have to compensate for the difference between the granularity of Data Memory seen by the compiler and the core."),(0,n.kt)("li",{parentName:"ul"},"Before we start to explain how we compensate for the difference, we have to remember the following:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The compiler sees the memory as a byte array."),(0,n.kt)("li",{parentName:"ol"},"The core sees the data memory as a word array."),(0,n.kt)("li",{parentName:"ol"},"The compiler stores/loads words to addresses that only can be divided by 4. For example storing to address 0x1000 is legal, but storing to address 0x1001 is illegal."),(0,n.kt)("li",{parentName:"ol"},"The compiler stores/loads half words to addresses that can be divided by 2."),(0,n.kt)("li",{parentName:"ol"},"The compiler stores/loads bytes to any address.",(0,n.kt)("br",{parentName:"li"}),"note: when you try to run the core from your own assembly code, you also have to follow the above rules.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Lets demonstrate the difference between the compiler and the core with an example:\n",(0,n.kt)("img",{alt:"mem_view_hw_sw.png",src:r(1269).Z,width:"596",height:"559"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"As we can see from the above figure, all the addresses from 0-3 in the compiler view are mapped to address 0 in the core view. The same goes for addresses 4-7, 8-11 and so on.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Thats why the address supplied to the core do not include the 2 lsb bits of the address.",(0,n.kt)("br",{parentName:"p"}),"\n","For example: if the compiler wants to store/load something to/from ",(0,n.kt)("inlineCode",{parentName:"p"},"address[31:0]")," we supply the ",(0,n.kt)("inlineCode",{parentName:"p"},"address[31:2]")," to the core.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When we write a word to address 0-3 in the compiler view, the core will write the word to address 0. When we write a word to address 4-7 in the compiler view, the core will write the word to address 1 and so on. When we write half a byte to address 0-1 in the compiler view, the core will write the half word to address 0 at bits ","[15:0]",". When we write half a byte to address 2-3 in the compiler view, the core will still write the half word to address 0 and so on but into bits ","[31:15]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"To fix that we look at the 2 lsb of the address and decide how to handle the store/load."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Store into data memory of the core")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"always_comb begin\nShiftDMemWrDataQ103H = (DMemAddressQ103H[1:0] == 2'b01 ) ? { DMemWrDataQ103H[23:0],8'b0  } :\n                       (DMemAddressQ103H[1:0] == 2'b10 ) ? { DMemWrDataQ103H[15:0],16'b0 } :\n                       (DMemAddressQ103H[1:0] == 2'b11 ) ? { DMemWrDataQ103H[7:0] ,24'b0 } :\n                                                             DMemWrDataQ103H;\nShiftDMemByteEnQ103H = (DMemAddressQ103H[1:0] == 2'b01 ) ? { DMemByteEnQ103H[2:0],1'b0 } :\n                       (DMemAddressQ103H[1:0] == 2'b10 ) ? { DMemByteEnQ103H[1:0],2'b0 } :\n                       (DMemAddressQ103H[1:0] == 2'b11 ) ? { DMemByteEnQ103H[0]  ,3'b0 } :\n                                                             DMemByteEnQ103H;\nend  \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Read from the memory of the core")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"assign PreDMemRdDataQ104H = (DMemAddressQ104H[1:0] == 2'b01) ? { 8'b0,PreShiftDMemRdDataQ104H[31:8] } : \n                            (DMemAddressQ104H[1:0] == 2'b10) ? {16'b0,PreShiftDMemRdDataQ104H[31:16]} : \n                            (DMemAddressQ104H[1:0] == 2'b11) ? {24'b0,PreShiftDMemRdDataQ104H[31:24]} : \n                                                                      PreShiftDMemRdDataQ104H         ; \n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"for example: if the compiler wants to store byte to address 3 in the memory as seen from the compiler view, than the data will be stored in address 0 of the core in bits 31:24. When we loads the data we do the opposite."),(0,n.kt)("li",{parentName:"ul"},"Lets take another example:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"lets assume we want to store byte ",(0,n.kt)("inlineCode",{parentName:"li"},"0x10")," in address ",(0,n.kt)("inlineCode",{parentName:"li"},"8'b00000111"),", We will also assume for simplicity that the address range is 8 bits instead of 32. This scenario is shown in the above figure  as green color, meaning that we write into 4-th byte of address ",(0,n.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,n.kt)("li",{parentName:"ul"},"The address that generated in the compiler and red by the core is : ",(0,n.kt)("inlineCode",{parentName:"li"},"8'00000111")," because the compiler do not care about the granularity of the core."),(0,n.kt)("li",{parentName:"ul"},"The address that passed to the Data Memory from the wrapper is ",(0,n.kt)("inlineCode",{parentName:"li"},"6'000001"),". (We remind you the 2 removed lsb bits). "),(0,n.kt)("li",{parentName:"ul"},"The data signal ",(0,n.kt)("inlineCode",{parentName:"li"},"ShiftDMemWrDataQ103H"),"  is ",(0,n.kt)("inlineCode",{parentName:"li"},"0x10000000")," and written into address ",(0,n.kt)("inlineCode",{parentName:"li"},"6'b000001")," meaning that we write to the green rectangular as suppose to be. "))),(0,n.kt)("li",{parentName:"ul"},"The best way to understand this is to perform a short simulation on your own paper and see how the data is stored and loaded when storing and than loading bytes, half words and words.   ")),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"The figure is taken from HAS_RVC_ASAP project. You can find the original file at ",(0,n.kt)("inlineCode",{parentName:"li"},"/orig_doc/CPU_Arch/reference_rvc_asap/ HAS_RVC_ASAP.pdf"),(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0},1269:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/mem_view_hw_sw-86219030b0cb5623e0748717ce2dd699.png"},5531:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/memory_wrapper-c39129e7e096840ddadd0c3d6401b664.png"}}]);