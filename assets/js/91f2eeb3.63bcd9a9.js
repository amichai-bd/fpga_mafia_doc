"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[6544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),_=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=_(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),l=_(n),p=a,d=l["".concat(c,".").concat(p)]||l[p]||u[p]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m[l]="string"==typeof e?e:a,o[1]=m;for(var _=2;_<i;_++)o[_]=n[_];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>_});var r=n(7462),a=(n(7294),n(3905));const i={},o="mem_acs",m={unversionedId:"rvc/common/mem_acs",id:"rvc/common/mem_acs",title:"mem_acs",description:"memory access stage",source:"@site/docs/rvc/common/mem_acs.md",sourceDirName:"rvc/common",slug:"/rvc/common/mem_acs",permalink:"/fpga_mafia_wiki/docs/rvc/common/mem_acs",draft:!1,editUrl:"https://github.com/FPGA-MAFIA/fpga_mafia_wiki/tree/main/docs/rvc/common/mem_acs.md",tags:[],version:"current",frontMatter:{},sidebar:"RISCV_Cores",previous:{title:"exe",permalink:"/fpga_mafia_wiki/docs/rvc/common/exe"},next:{title:"wb",permalink:"/fpga_mafia_wiki/docs/rvc/common/wb"}},c={},_=[{value:"memory access stage",id:"memory-access-stage",level:2},{value:"instantiation of mini_core_mem_access module in mini_core.sv",id:"instantiation-of-mini_core_mem_access-module-in-mini_coresv",level:3},{value:"mini_core_mem_access.sv module",id:"mini_core_mem_accesssv-module",level:3},{value:"Signal explanation",id:"signal-explanation",level:3},{value:"mini_core_mem_acs general diagram",id:"mini_core_mem_acs-general-diagram",level:3}],s={toc:_},l="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(l,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mem_acs"},"mem_acs"),(0,a.kt)("h2",{id:"memory-access-stage"},"memory access stage"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The goal of that stage is to access memory and get or store data in it."),(0,a.kt)("li",{parentName:"ul"},"That stage is called Q103H")),(0,a.kt)("h3",{id:"instantiation-of-mini_core_mem_access-module-in-mini_coresv"},"instantiation of mini_core_mem_access module in mini_core.sv"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"//////////////////////////////////////////////////////////////////////////////////////////////////\n//   _____  __     __   _____   _        ______          ____    __    ___    ____    _    _ \n//  / ____| \\ \\   / /  / ____| | |      |  ____|        / __ \\  /_ |  / _ \\  |___ \\  | |  | |\n// | |       \\ \\_/ /  | |      | |      | |__          | |  | |  | | | | | |   __) | | |__| |\n// | |        \\   /   | |      | |      |  __|         | |  | |  | | | | | |  |__ <  |  __  |\n// | |____     | |    | |____  | |____  | |____        | |__| |  | | | |_| |  ___) | | |  | |\n//  \\_____|    |_|     \\_____| |______| |______|        \\___\\_\\  |_|  \\___/  |____/  |_|  |_|\n//\n//////////////////////////////////////////////////////////////////////////////////////////////////\n// Memory Access\n// -----------------\n// 1. Access D_MEM for Wrote (STORE) and Reads (LOAD)\n//////////////////////////////////////////////////////////////////////////////////////////////////\nmini_core_mem_acs mini_core_mem_access (\n  .Clock              (Clock),          //input \n  .Rst                (Rst),            //input  \n  // Input Control Signals\n  .Ctrl               (CtrlMem),        //input\n  .ReadyQ104H         (ReadyQ104H),     //input\n  // Input Data path\n  .PcPlus4Q103H       (PcPlus4Q103H),   //input\n  .AluOutQ103H        (AluOutQ103H),    //input\n  .DMemWrDataQ103H    (DMemWrDataQ103H),//input\n  // data path output\n  .Core2DmemReqQ103H  (Core2DmemReqQ103H),//output\n  .PcPlus4Q104H       (PcPlus4Q104H),   //input\n  .AluOutQ104H        (AluOutQ104H)     //input\n);\n\n")),(0,a.kt)("h3",{id:"mini_core_mem_accesssv-module"},"mini_core_mem_access.sv module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'`include "macros.sv"\n\nmodule mini_core_mem_acs\nimport common_pkg::*;\n( input  logic           Clock,       //input \n  input  logic           Rst,         //input  \n  // ctrl\n  input var  t_ctrl_mem      Ctrl,        //input\n  input  logic           ReadyQ104H,  //input\n  //data path input\n  input  logic [31:0]    PcPlus4Q103H,//input\n  input  logic [31:0]    AluOutQ103H, //input\n  input  logic [31:0]    DMemWrDataQ103H, //input\n  // data path output\n  output t_core2mem_req  Core2DmemReqQ103H, //output\n  output logic [31:0]    PcPlus4Q104H,//input\n  output logic [31:0]    AluOutQ104H //input\n);\n\n// Outputs to memory\nassign Core2DmemReqQ103H.WrData  = DMemWrDataQ103H;\nassign Core2DmemReqQ103H.Address = AluOutQ103H;\nassign Core2DmemReqQ103H.WrEn    = Ctrl.DMemWrEnQ103H;\nassign Core2DmemReqQ103H.RdEn    = Ctrl.DMemRdEnQ103H;\nassign Core2DmemReqQ103H.ByteEn  = Ctrl.DMemByteEnQ103H;\n\n`MAFIA_EN_DFF(PcPlus4Q104H, PcPlus4Q103H, Clock, ReadyQ104H)\n`MAFIA_EN_DFF(AluOutQ104H,  AluOutQ103H , Clock, ReadyQ104H)\n\nendmodule\n')),(0,a.kt)("h3",{id:"signal-explanation"},"Signal explanation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We communicate with the memory through the Core2DmemReqQ103H signal of ",(0,a.kt)("inlineCode",{parentName:"p"},"t_core2mem_req")," type. This signal is a structure that contains the following fields: ",(0,a.kt)("inlineCode",{parentName:"p"},"WrData, Address, WeEn, RdEn, ByteEn"),". ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ByteEn")," allows us to choose the number of active bytes. For example, to distinguish between a ",(0,a.kt)("inlineCode",{parentName:"p"},"lb")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"lh")," instruction.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The read information from the memory is returned to us through the ",(0,a.kt)("inlineCode",{parentName:"p"},"DMemRdRspQ104H")," signal threw the memory wrapper that will be discussed later."))),(0,a.kt)("h3",{id:"mini_core_mem_acs-general-diagram"},"mini_core_mem_acs general diagram"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"---------------------------------------------------------------------------------------------------------------------------------------"),"\n",(0,a.kt)("img",{alt:"mem_acs",src:n(8177).Z,width:"604",height:"509"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"---------------------------------------------------------------------------------------------------------------------------------------")))}u.isMDXComponent=!0},8177:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mem_acs-9f8c931018e2c014515417e617e19978.jpg"}}]);