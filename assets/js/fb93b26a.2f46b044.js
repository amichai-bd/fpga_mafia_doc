"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[7169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={},o=void 0,l={unversionedId:"build_script/cmd_handbook",id:"build_script/cmd_handbook",title:"cmd_handbook",description:"run software compilation",source:"@site/docs/build_script/cmd_handbook.md",sourceDirName:"build_script",slug:"/build_script/cmd_handbook",permalink:"/fpga_mafia_wiki/docs/build_script/cmd_handbook",draft:!1,editUrl:"https://github.com/FPGA-MAFIA/fpga_mafia_wiki/tree/main/docs/build_script/cmd_handbook.md",tags:[],version:"current",frontMatter:{},sidebar:"MAFIA_Build",previous:{title:"Build GUI",permalink:"/fpga_mafia_wiki/docs/build_script/build_gui"},next:{title:"mafia_scripts",permalink:"/fpga_mafia_wiki/docs/build_script/mafia_scripts"}},u={},d=[{value:"run software compilation",id:"run-software-compilation",level:3},{value:"run software and hardware compilation",id:"run-software-and-hardware-compilation",level:3},{value:"run software and hardware compilation + elaboration and simulation",id:"run-software-and-hardware-compilation--elaboration-and-simulation",level:3},{value:"run software and hardware compilation + elaboration and simulation + gui",id:"run-software-and-hardware-compilation--elaboration-and-simulation--gui",level:3},{value:"run the build gui:",id:"run-the-build-gui",level:3}],p={toc:d},c="wrapper";function s(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"run-software-compilation"},"run software compilation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./build.py -dut <dut_name> -test <test_name> -app\n")),(0,a.kt)("h3",{id:"run-software-and-hardware-compilation"},"run software and hardware compilation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./build.py -dut <dut_name> -test <test_name> -app -hw\n")),(0,a.kt)("h3",{id:"run-software-and-hardware-compilation--elaboration-and-simulation"},"run software and hardware compilation + elaboration and simulation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./build.py -dut <dut_name> -test <test_name> -app -hw -sim\n")),(0,a.kt)("h3",{id:"run-software-and-hardware-compilation--elaboration-and-simulation--gui"},"run software and hardware compilation + elaboration and simulation + gui"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./build.py -dut <dut_name> -test <test_name> -app -hw -sim -gui\n")),(0,a.kt)("h3",{id:"run-the-build-gui"},"run the build gui:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./gui_build.py\n")))}s.isMDXComponent=!0}}]);