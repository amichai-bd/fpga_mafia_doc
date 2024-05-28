"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[8665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=i,h=d["".concat(p,".").concat(g)]||d[g]||m[g]||o;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={},r=void 0,l={unversionedId:"TFM/projectTool/basic_example",id:"TFM/projectTool/basic_example",title:"basic_example",description:"Welcome to FPGA world!",source:"@site/docs/TFM/projectTool/basic_example.md",sourceDirName:"TFM/projectTool",slug:"/TFM/projectTool/basic_example",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/basic_example",draft:!1,editUrl:"https://github.com/FPGA-MAFIA/fpga_mafia_wiki/tree/main/docs/TFM/projectTool/basic_example.md",tags:[],version:"current",frontMatter:{},sidebar:"TFM",previous:{title:"General Introduction",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/quartus_intro"},next:{title:"mod3_cnt",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/mod3_cnt"}},p={},s=[{value:"Welcome to FPGA world!",id:"welcome-to-fpga-world",level:2},{value:"Open Quartus project",id:"open-quartus-project",level:2},{value:"Adding files and compilation",id:"adding-files-and-compilation",level:2},{value:"Pin assignment",id:"pin-assignment",level:2},{value:"Connecting Fpga and generate bit stream file",id:"connecting-fpga-and-generate-bit-stream-file",level:2},{value:"Trouble shooting",id:"trouble-shooting",level:3}],c={toc:s},d="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"welcome-to-fpga-world"},"Welcome to FPGA world!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In this section we will learn how to use the FPGA board and how to program it. We assume that you have almost zero knowledge about FPGA and we will try to explain everything from scratch. We will use the DE10-LITE FPGA board from Terasic. The are tens of FPGA boards in the market with lots of different features, but we will use this one because it is cheap and it has a lot of nice things that satisfied our goals.")),(0,i.kt)("h2",{id:"open-quartus-project"},"Open Quartus project"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In that section we will make a basic design of pushing a button and lighting a LED. ")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open quartus and select a new project by clicking on ",(0,i.kt)("strong",{parentName:"p"},"New Project Wizard"),"\n",(0,i.kt)("img",{alt:"open_project1.png",src:n(1449).Z,width:"1162",height:"439"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If that window appears, click on ",(0,i.kt)("strong",{parentName:"p"},"Next"),".\n",(0,i.kt)("img",{alt:"open_project2.png",src:n(2596).Z,width:"809",height:"640"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose a name for your project and a folder click on ",(0,i.kt)("strong",{parentName:"p"},"Next"),"."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We recommend you to create a new and empty folder for your project.\n",(0,i.kt)("img",{alt:"open_project3.png",src:n(3587).Z,width:"807",height:"631"}))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If that window appears, click on ",(0,i.kt)("strong",{parentName:"p"},"Next"),".\n",(0,i.kt)("img",{alt:"open_project4.png",src:n(3577).Z,width:"802",height:"626"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"At that point we wont add any files to our project, so click on ",(0,i.kt)("strong",{parentName:"p"},"Next"),".\n",(0,i.kt)("img",{alt:"open_project5.png",src:n(8978).Z,width:"806",height:"633"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"That window is very important. You have to choose the FPGA board that you will use. In our case we will use the DE10-LITE board, Please type ",(0,i.kt)("strong",{parentName:"p"},"10M50DAF484C7G"),"  in the right field and select it. Then click on ",(0,i.kt)("strong",{parentName:"p"},"Next"),". "))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"That number represents the FPGA chip that is used in the DE10-LITE board.\n",(0,i.kt)("img",{alt:"open_project6.png",src:n(9744).Z,width:"796",height:"742"}))),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If that window appears, click on ",(0,i.kt)("strong",{parentName:"p"},"Next"),".\n",(0,i.kt)("img",{alt:"open_project7.png",src:n(6823).Z,width:"800",height:"730"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If that summary window, click on ",(0,i.kt)("strong",{parentName:"p"},"Finish"),".\n",(0,i.kt)("img",{alt:"open_project8.png",src:n(1043).Z,width:"794",height:"728"})))),(0,i.kt)("h2",{id:"adding-files-and-compilation"},"Adding files and compilation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To add file click on the left side icon and than select ",(0,i.kt)("strong",{parentName:"p"},"SystemVerilog HDL file")," and click on ",(0,i.kt)("strong",{parentName:"p"},"OK"),".\n",(0,i.kt)("img",{alt:"compilation1.png",src:n(5105).Z,width:"1154",height:"614"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the following code to the file and save it. "))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"make sure that the top module name has the same name as the file name.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"module tutorial1_leds (\n    input  logic [2:0] sw,\n    output logic [2:0] leds\n);\n\n    assign leds = sw;\n    \nendmodule\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"To compile the file double click on compilation and wait until the compilation is finished. You will see a green check mark if the compilation is successful.\nCompilation is a process that converts the code that you wrote to hardware on the fpga. It also performs place and route, which means that it decides where the hardware will be placed on the fpga and how the hardware will be connected.   ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"compilation2.png",src:n(2580).Z,width:"653",height:"777"})),(0,i.kt)("h2",{id:"pin-assignment"},"Pin assignment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In that section we will assign the pins of the fpga to the inputs and outputs of our design. For example we need to connect the leds in our design to the pins of the fpga that are connected to the leds.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"assignment")," -> ",(0,i.kt)("strong",{parentName:"li"},"pin planner"),". The following window will appear.\n",(0,i.kt)("img",{alt:"pin_assignment1.png",src:n(866).Z,width:"1236",height:"874"})," ")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At the button of the window you can see the inputs and the outputs of your design. You can press the ",(0,i.kt)("inlineCode",{parentName:"p"},"Node Name")," to switch the order of the pins.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Download de10 lite manual from ",(0,i.kt)("a",{parentName:"p",href:"https://www.terasic.com.tw/cgi-bin/page/archive.pl?Language=English&CategoryNo=165&No=1021&PartNo=4"},"here")," and open it. You can also find it on google without open the terasic official site.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"pin_assignment2.png",src:n(3542).Z,width:"691",height:"669"}),"\n",(0,i.kt)("img",{alt:"pin_assignment3.png",src:n(3858).Z,width:"656",height:"644"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Assign the pins in the following way using the manual:\n",(0,i.kt)("img",{alt:"pin_assignment4.png",src:n(7593).Z,width:"1261",height:"315"})," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The assignment are saved automatically.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Compile again to make sure that you assigned the pins correctly."))),(0,i.kt)("h2",{id:"connecting-fpga-and-generate-bit-stream-file"},"Connecting Fpga and generate bit stream file"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In that section we will connect the fpga and created the configuration file called ",(0,i.kt)("strong",{parentName:"li"},"bit file")," of our design into the fpga."),(0,i.kt)("li",{parentName:"ul"},"Please make sure that ypur fpga board is connected to your computer using the usb cable."),(0,i.kt)("li",{parentName:"ul"},"At the compilation window double click on ",(0,i.kt)("strong",{parentName:"li"},"program device"),". and click ",(0,i.kt)("strong",{parentName:"li"},"start")," on the opened new window.\n",(0,i.kt)("img",{alt:"program_device1.png",src:n(2349).Z,width:"1199",height:"758"})," ")),(0,i.kt)("h3",{id:"trouble-shooting"},"Trouble shooting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If its your first time you probably will have to install the drivers. For more details ",(0,i.kt)("a",{parentName:"p",href:"/fpga_mafia_wiki/docs/TFM/projectTool/usb_blaster_driver"},"click here"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After installing the driver, click ",(0,i.kt)("strong",{parentName:"p"},"Harward Setup")," and select ",(0,i.kt)("strong",{parentName:"p"},"USB-Blaster"),". Then click ",(0,i.kt)("strong",{parentName:"p"},"Close"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Now click ",(0,i.kt)("strong",{parentName:"p"},"Start")," again and wait until the process is finished. You will see a green check mark if the process is successful.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Play with the 3 right switches of the fpga and see that the leds are changing accordingly."))))}m.isMDXComponent=!0},5105:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/compilation1-80833eb33fe3dcd1147810e7ce035f1d.png"},2580:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/compilation2-054d1de7dda962676572fca4b4e55997.png"},1449:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open_project1-99d3821881c6efa7aad6e95dd98e4130.png"},2596:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open_project2-3bb8d3d822077dfa9b0986e2efa0adf7.png"},3587:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open_project3-21ab997b53c12601cbd7370b9d64e235.png"},3577:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open_project4-b1c873b094bae104252a2f8419421b19.png"},8978:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open_project5-c93f025e37c419fd9e2162810f6de5d1.png"},9744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open_project6-7d1cc09df6f3f48c6962e3c399831be2.png"},6823:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open_project7-d68555c19596a2da9b4d4f030e6ed1f6.png"},1043:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/open_project8-98195150c6677b3bd0f9a857c74d70c5.png"},866:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pin_assignment1-00ee14b6cf41890bb1681e661bed9531.png"},3542:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pin_assignment2-fe5940ce10eb5c0810167a9d018c9192.png"},3858:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pin_assignment3-ef295fb6d8d41b394f2768354977d188.png"},7593:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pin_assignment4-070e8c7f9fae43edfb31fae9e00030ed.png"},2349:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/program_device1-6aeaafdf71194a5e65dd66847377fb0b.png"}}]);