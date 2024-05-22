"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[9909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(o,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l=void 0,s={unversionedId:"rvc/big_core/csr_registers",id:"rvc/big_core/csr_registers",title:"csr_registers",description:"Introduction",source:"@site/docs/rvc/big_core/csr_registers.md",sourceDirName:"rvc/big_core",slug:"/rvc/big_core/csr_registers",permalink:"/fpga_mafia_wiki/docs/rvc/big_core/csr_registers",draft:!1,editUrl:"https://github.com/FPGA-MAFIA/fpga_mafia_wiki/tree/main/docs/rvc/big_core/csr_registers.md",tags:[],version:"current",frontMatter:{},sidebar:"RISCV_Cores",previous:{title:"mem_wrap",permalink:"/fpga_mafia_wiki/docs/rvc/big_core/mem_wrap"},next:{title:"cr_mem",permalink:"/fpga_mafia_wiki/docs/rvc/big_core/cr_mem"}},o={},p=[{value:"Introduction",id:"introduction",level:2},{value:"CSR specifications and implementations",id:"csr-specifications-and-implementations",level:2},{value:"CSR Instruction Types",id:"csr-instruction-types",level:3},{value:"CSR Read and Write Conditions",id:"csr-read-and-write-conditions",level:3},{value:"CSR instructions examples",id:"csr-instructions-examples",level:3},{value:"CSR instructions examples (read or write only)",id:"csr-instructions-examples-read-or-write-only",level:3},{value:"Generate CSR instructions in C code",id:"generate-csr-instructions-in-c-code",level:3},{value:"CSR instructions implemented in the big core",id:"csr-instructions-implemented-in-the-big-core",level:3},{value:"PMON measurments",id:"pmon-measurments",level:3},{value:"Custom CSR&#39;s",id:"custom-csrs",level:3}],c={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RISC-V Control and Status Registers (CSRs) are an integral part of the RISC-V architecture, serving as a set of special-purpose registers that control and manage the processor's behavior, as well as store system status information. They play a crucial role in handling privilege levels, exceptions, and various system operations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The CSR registers are categorized into machine-level CSRs, supervisor-level CSRs, hypervisor-level CSRs (in systems that support virtualization), and user-level CSRs. Each privilege level has its own set of CSRs, providing control over different aspects of the processor's functionality. ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The CSRs handle a wide range of functionalities, including:"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Control of Privilege Levels: Certain CSRs manage the transition between privilege levels, facilitating the shift between user mode and higher privilege modes (supervisor or machine mode).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Exception Handling: CSRs hold information related to exceptions, interrupts, and traps, enabling the processor to handle these events effectively. They store exception causes, trap handling addresses, and interrupt enable/disable flags."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Performance Monitoring: Some CSRs are dedicated to performance monitoring and counters, offering insights into the processor's performance metrics and aiding in optimization.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"System Configuration: These registers often contain system configuration and setup details, allowing the processor to control various functionalities, such as cache behavior or memory mapping.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Machine Specific Registers: CSRs that cater to specific functionalities or extensions, which can vary based on the particular implementation or optional extensions of the RISC-V architecture."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Understanding and managing CSRs are crucial for system developers, as they directly impact how the processor operates at different privilege levels, handles exceptions, and interacts with the system. However, the specifics of these registers, including their number, functionalities, and their accessibility across different privilege levels, can vary based on the RISC-V implementation or extensions used in a particular system.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The RISC-V architecture's openness and modularity allow for flexibility in implementing CSRs, providing space for customization and adaptation to various system requirements. This adaptability also facilitates the incorporation of new extensions and features into the processor design without altering the fundamental architecture, making RISC-V CSRs a pivotal aspect of its versatility.   ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RISC-V defines a separate address space of 4096 Control and Status registers. "))),(0,r.kt)("h2",{id:"csr-specifications-and-implementations"},"CSR specifications and implementations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To implement RISC-V Control and Status Registers (CSRs), two RISC-V specifications are used: one is the ",(0,r.kt)("a",{parentName:"p",href:"https://riscv.org/wp-content/uploads/2019/12/riscv-spec-20191213.pdf"},"unprivileged spec")," and the other is the ",(0,r.kt)("a",{parentName:"p",href:"https://riscv.org/wp-content/uploads/2017/05/riscv-privileged-v1.10.pdf"},"privileged spec"),".   ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Within the CSR context, the unprivileged specification covers fundamental aspects, such as general read and write conditions and types of csr instructions. On the other hand, the privileged specification delves deeper, offering detailed insights into these registers, including their specific addresses and accessibility criteria, defining which privilege levels, such as user or supervisor, can access them."))),(0,r.kt)("h3",{id:"csr-instruction-types"},"CSR Instruction Types"),(0,r.kt)("p",null,"The following information is based on unprivileged spec, chapter 9."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"csr_instructions.png",src:n(5812).Z,width:"748",height:"228"})," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"csr")," field represents the address of the CSR. We can understand that there are 4096 possible csr registers(we wont use them all)",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rs1")," field represents the source register. This is the register from which the value is read and written to the CSR, it also represents the immediate value instructions.",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"funct3")," field represents the function of the instruction. It can be either ",(0,r.kt)("inlineCode",{parentName:"p"},"read"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"read and write"),"."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"001 - for csrrw")," - read and write",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"010 - for csrrs")," - read and set",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"011 - for csrrc")," - read and clear",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"101 - for csrrwi")," - read and write immediate",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"110 - for csrrsi")," - read and set immediate",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"111 - for csrrci")," - read and clear immediate   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"rd")," field represents the destination register. This is the register to which the value is written to from csr. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"opcode")," field represents the opcode of the instruction. It is always ",(0,r.kt)("inlineCode",{parentName:"p"},"1110011")," for csr instructions."))),(0,r.kt)("h3",{id:"csr-read-and-write-conditions"},"CSR Read and Write Conditions"),(0,r.kt)("p",null,"The following information is based on unprivileged spec, chapter 9. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Register Operand (rs1 is a register) read/write policy:               ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Instruction"),(0,r.kt)("th",{parentName:"tr",align:null},"rd"),(0,r.kt)("th",{parentName:"tr",align:null},"rs"),(0,r.kt)("th",{parentName:"tr",align:null},"read CSR?"),(0,r.kt)("th",{parentName:"tr",align:null},"write CSR?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSRRW"),(0,r.kt)("td",{parentName:"tr",align:null},"x0"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSRRW"),(0,r.kt)("td",{parentName:"tr",align:null},"!x0"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSRRS/C"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"x0"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSRRS/C"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"!x0"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Imemdiate Operand (rs1 is a ",(0,r.kt)("inlineCode",{parentName:"li"},"uimm")," field) read/write policy:               ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Instruction"),(0,r.kt)("th",{parentName:"tr",align:null},"rd"),(0,r.kt)("th",{parentName:"tr",align:null},"rs"),(0,r.kt)("th",{parentName:"tr",align:null},"read CSR?"),(0,r.kt)("th",{parentName:"tr",align:null},"write CSR?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSRRWI"),(0,r.kt)("td",{parentName:"tr",align:null},"x0"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSRRWI"),(0,r.kt)("td",{parentName:"tr",align:null},"!x0"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSRRS/CI"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSRRS/CI"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"!0"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Those tables implemented inside the control unit of the big core.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"assign CsrInstQ101H.csr_wren     = (OpcodeQ101H == SYSCAL) && !(((Funct3Q101H[1:0] == 2'b11) || (Funct3Q101H[1:0] == 2'b10)) && (CtrlQ101H.RegSrc1 =='0 ));  \nassign CsrInstQ101H.csr_rden     = (OpcodeQ101H == SYSCAL) && !((Funct3Q101H[1:0]==2'b01 ) && (CtrlQ101H.RegDst =='0 ));\n")),(0,r.kt)("h3",{id:"csr-instructions-examples"},"CSR instructions examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"csrrw   a5,vxsat, a4\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In that instruction, the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," is written to ",(0,r.kt)("inlineCode",{parentName:"li"},"a5")," and the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"a4")," is written to ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat"),". Do not spend time to understand the meaning of the ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," register, generally speaking it just a CSR register name. You can find other CSR register names in the privileged spec, chapter 2 but its not that important for now."),(0,r.kt)("li",{parentName:"ul"},"for example: suppose that ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," is equal to 0x00000100 and ",(0,r.kt)("inlineCode",{parentName:"li"},"a4")," is equal to 0x00000001, after executing the instruction, ",(0,r.kt)("inlineCode",{parentName:"li"},"a5")," will be equal to 0x00000100 and ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," will be equal to 0x00000001. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"csrrwi  a5,vxsat,27\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In that instruction, the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," is written to ",(0,r.kt)("inlineCode",{parentName:"li"},"a5")," and the value of 27 is written to ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"csrrs   a5,vxsat,a4\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In that instruction, the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," is written to ",(0,r.kt)("inlineCode",{parentName:"li"},"a5")," and the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"a4")," is used to set the bits of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," to 1 any place that ",(0,r.kt)("inlineCode",{parentName:"li"},"a4")," has 1 otherwise the bits of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," will not be changed."),(0,r.kt)("li",{parentName:"ul"},"for example: suppose that ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," is equal to 0x00000100 and ",(0,r.kt)("inlineCode",{parentName:"li"},"a4")," is equal to 0x00000001, after executing the instruction, ",(0,r.kt)("inlineCode",{parentName:"li"},"a5")," will be equal to 0x00000100 and ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," will be equal to 0x00000101. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"csrrsi  a5,vxsat,27\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In that instruction, the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," is written to ",(0,r.kt)("inlineCode",{parentName:"li"},"a5")," and the value of 27 is used to set the bits of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," to 1 any place that 27 has 1 otherwise the bits of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," will not be changed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"csrrc   a5,vxsat,a4\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In that instruction, the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," is written to ",(0,r.kt)("inlineCode",{parentName:"li"},"a5")," and the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"a4")," is used to clear the bits of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," to 0 any place that ",(0,r.kt)("inlineCode",{parentName:"li"},"a4")," has 1 otherwise the bits of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," will not be changed."),(0,r.kt)("li",{parentName:"ul"},"for example: suppose that ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," is equal to 0x00001100 and ",(0,r.kt)("inlineCode",{parentName:"li"},"a4")," is equal to 0x00000111, after executing the instruction, ",(0,r.kt)("inlineCode",{parentName:"li"},"a5")," will be equal to 0x00001100 and ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," will be equal to 0x00001000. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"csrrci  a5,vxsat,27\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In that instruction, the value of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," is written to ",(0,r.kt)("inlineCode",{parentName:"li"},"a5")," and the value of 27 is used to clear the bits of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," to 0 any place that 27 has 1 otherwise the bits of ",(0,r.kt)("inlineCode",{parentName:"li"},"vxsat")," will not be changed.")),(0,r.kt)("h3",{id:"csr-instructions-examples-read-or-write-only"},"CSR instructions examples (read or write only)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There are some CSR instructions that are read or write only. Those instructions can be done by using the above instructions for example:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Write to CSR only: "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"csrrw x0, vxsat, rs\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You may use pseudo instruction ",(0,r.kt)("inlineCode",{parentName:"li"},"csrw vxsat, rs")," instead of the above instruction.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"csrrwi x0, vxsat, imm\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You may use pseudo instruction ",(0,r.kt)("inlineCode",{parentName:"p"},"csrwi vxsat, imm")," instead of the above instruction.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read from CSR only: "))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"csrrs rd, csr, x0\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You may use pseudo instruction ",(0,r.kt)("inlineCode",{parentName:"li"},"csrr rd, csr")," instead of the above instruction.")),(0,r.kt)("p",null,"For more information about the CSR read/write only instructions, refer to the unprivileged spec, chapter 25 - RISC-V assembly Programmer's Handbook."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"csr_pseudoInstructions.png",src:n(2683).Z,width:"729",height:"135"})),(0,r.kt)("h3",{id:"generate-csr-instructions-in-c-code"},"Generate CSR instructions in C code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In order to use CSR instruction in C code and not directly in assembly, we need to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"asm volatile")," command. The following code snippet shows how to use CSR instructions in C code. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  asm volatile ("csrw 0x009, 0x7"); \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This instruction will write the value 0x7 to the CSR register 0x009 and generate the following instruction in ",(0,r.kt)("inlineCode",{parentName:"p"},"_elf.txt")," file : ",(0,r.kt)("inlineCode",{parentName:"p"},"csrwi\tvxsat,7"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In our implementation we are using the CSR register ",(0,r.kt)("inlineCode",{parentName:"p"},"scratchpad_csr")," which address is equal to 0x009. The compiler change its name to ",(0,r.kt)("inlineCode",{parentName:"p"},"vxsat")," as described in the privileged spec, chapter 2. Please do not worry about the names of the CSR registers, you may play with those addresses as you wish and examine ",(0,r.kt)("inlineCode",{parentName:"p"},"_elf.txt")," file to see the changes.\nMake sure to supply the correct address of the CSR as defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"t_csr_addr")," enumerator in the big core package file. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"For more instructions using asm volatile, please go to ",(0,r.kt)("inlineCode",{parentName:"strong"},"/verif/big_core/test/alive_csr.c"),", We suggest to compile the file and look at the ",(0,r.kt)("inlineCode",{parentName:"strong"},"_elf.txt")," file to see the generated instructions.")," "))),(0,r.kt)("h3",{id:"csr-instructions-implemented-in-the-big-core"},"CSR instructions implemented in the big core"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CSR control signals are generated in the control unit of the big core. The following code snippet shows the CSR control signals generation. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// CSR Control Signals\nassign CsrInstQ101H.csr_wren     = (OpcodeQ101H == SYSCAL) && !(((Funct3Q101H[1:0] == 2'b11) || (Funct3Q101H[1:0] == 2'b10)) && (CtrlQ101H.RegSrc1 =='0 ));  \nassign CsrInstQ101H.csr_rden     = (OpcodeQ101H == SYSCAL) && !((Funct3Q101H[1:0]==2'b01 ) && (CtrlQ101H.RegDst =='0 ));\nassign CsrInstQ101H.csr_op       = InstructionQ101H[13:12];\nassign CsrInstQ101H.csr_rs1      = CtrlQ101H.RegSrc1;\nassign CsrInstQ101H.csr_addr     = InstructionQ101H[31:20];\nassign CsrInstQ101H.csr_data_imm = {27'h0, CtrlQ101H.RegSrc1}; \nassign CsrInstQ101H.csr_imm_bit  = InstructionQ101H[14];  \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The used typedef struct is defined in the big_core package file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CSR unit located in ",(0,r.kt)("inlineCode",{parentName:"p"},"Q102H")," execution stage because we need to forward data to rd if necessary.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"CSR register defined in the core package file under ",(0,r.kt)("inlineCode",{parentName:"p"},"t_csr_addr")," enumerator which includes all the CSR addresses used in the core and the registers them self in the ",(0,r.kt)("inlineCode",{parentName:"p"},"t_csr")," struct"))),(0,r.kt)("h3",{id:"pmon-measurments"},"PMON measurments"),(0,r.kt)("p",null,"note: The following csr's defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"source/big_core")," core."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please refer to ",(0,r.kt)("a",{parentName:"li",href:"/fpga_mafia_wiki/docs/rvc/big_core/pmon"},"pmon link"),".")),(0,r.kt)("h3",{id:"custom-csrs"},"Custom CSR's"),(0,r.kt)("p",null,"note: The following csr's defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"source/big_core")," core."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"timer interrupt exception csr's:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"csr_custom_mtime")," - Used to measure time of our system. This csr is read only from software and can be updated only in HW. Each clock it decrements by one. Used only in machine mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"csr_cutome_mtimecmp")," - This csr is RW csr and used for comparison with ",(0,r.kt)("inlineCode",{parentName:"li"},"custom_mtime"),". We use it in Timer interrupt exception.\nSee ",(0,r.kt)("a",{parentName:"li",href:"/fpga_mafia_wiki/docs/rvc/big_core/exceptions"},"exceptions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"csr_custom_LFSR"),"     - Used for generating pseudo random numbers. The algorithm is based on LFSR algorithm. For biggest cycle we used  the following Polynom: ",(0,r.kt)("inlineCode",{parentName:"li"},"x^32 + x^22 + x^2 + x^1 + 1"),". That Csr is RO and can be updated by HW for seed value update.")))),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"For detailed information on the CSR addresses, refer to the privileged spec, chapter 2.   ",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"For detailed information about the instruction fields, refer to the unprivileged spec, chapter 9.",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},5812:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/csr_instructions-e501d15aced1819621e251e3d4e51959.png"},2683:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/csr_pseudoInstructions-c5d97b1dfbb1f6fa4e4fa21021d90974.png"}}]);