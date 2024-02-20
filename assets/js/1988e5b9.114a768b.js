"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[5064],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var i=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),p=n,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||a;return o?i.createElement(h,r(r({ref:t},u),{},{components:o})):i.createElement(h,r({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,r[1]=l;for(var c=2;c<a;c++)r[c]=o[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7187:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=o(7462),n=(o(7294),o(3905));const a={},r="Git and GitHub",l={unversionedId:"TFM/projectTool/git_and_github",id:"TFM/projectTool/git_and_github",title:"Git and GitHub",description:"Motivation for using git",source:"@site/docs/TFM/projectTool/git_and_github.md",sourceDirName:"TFM/projectTool",slug:"/TFM/projectTool/git_and_github",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/git_and_github",draft:!1,editUrl:"https://github.com/FPGA-MAFIA/fpga_mafia_wiki/tree/main/docs/TFM/projectTool/git_and_github.md",tags:[],version:"current",frontMatter:{},sidebar:"TFM",previous:{title:"version_control",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/version_control"},next:{title:"git_cheat_sheet",permalink:"/fpga_mafia_wiki/docs/TFM/projectTool/git_cheat_sheet"}},s={},c=[{value:"Motivation for using git",id:"motivation-for-using-git",level:2},{value:"GitHub Features:",id:"github-features",level:2},{value:"Issues",id:"issues",level:3},{value:"Milestones",id:"milestones",level:3},{value:"Pull Requests",id:"pull-requests",level:3},{value:"Discussions",id:"discussions",level:3},{value:"Simple Guide - Minimal Flow to Contribute to the Project",id:"simple-guide---minimal-flow-to-contribute-to-the-project",level:2},{value:"Clone from Repository",id:"clone-from-repository",level:3},{value:"Create a New Branch",id:"create-a-new-branch",level:3},{value:"Modify, Stage, and Commit",id:"modify-stage-and-commit",level:3},{value:"Pull from origin/main (to ensure no conflicts)",id:"pull-from-originmain-to-ensure-no-conflicts",level:3},{value:"Push to Origin",id:"push-to-origin",level:3},{value:"Add a Pull Request",id:"add-a-pull-request",level:3},{value:"Advanced Flows",id:"advanced-flows",level:2},{value:"Merge Conflict",id:"merge-conflict",level:3},{value:"Amend Commits",id:"amend-commits",level:3},{value:"Revert Commit",id:"revert-commit",level:3}],u={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"git-and-github"},"Git and GitHub"),(0,n.kt)("h2",{id:"motivation-for-using-git"},"Motivation for using git"),(0,n.kt)("p",null,"Git is a version control system allowing developers to track and manage changes to their codebase over time. Using Git offers several benefits:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Collaboration"),": Git streamlines collaboration, enabling multiple developers to work on the same codebase. It provides a central repository for tracking and merging code changes."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"History"),": Git maintains a comprehensive history of all changes to the codebase, enabling easy access to previous versions and visibility into who made specific changes."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Branching"),": Git allows developers to create separate branches of the codebase, providing a safe environment to experiment with new features or fix bugs without affecting the main codebase."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Reuse"),": Git facilitates code sharing or reuse across different projects, leveraging features such as branching and merging.")),(0,n.kt)("p",null,"Using Git ultimately aids developers in working more efficiently, effectively tracking and managing code changes, and improving collaboration."),(0,n.kt)("h1",{id:"git-vs-github"},"Git vs GitHub"),(0,n.kt)("p",null,"While Git and GitHub are closely related, they serve distinct purposes in software development."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Git")," is a version control system that helps developers track and manage changes to their codebase over time. Git enables developers to create a local repository on their computer to track and manage code changes. It also offers tools for merging and sharing code with other developers."),(0,n.kt)("p",null,"On the other hand, ",(0,n.kt)("strong",{parentName:"p"},"GitHub")," is a web-based platform that hosts Git repositories and provides tools for collaboration and code project management. GitHub offers a central repository for storing and sharing code, in addition to tools for tracking issues, reviewing code changes, and managing project workflows."),(0,n.kt)("p",null,"In summary, Git is a local version control system, while GitHub is a web-based platform providing hosting and collaboration tools for Git repositories. Developers often use both Git and GitHub together to manage and collaborate on code projects."),(0,n.kt)("h2",{id:"github-features"},"GitHub Features:"),(0,n.kt)("h3",{id:"issues"},"Issues"),(0,n.kt)("p",null,"Issues in GitHub serve to track and manage tasks, bugs, and other concerns related to a code project. They can be created, assigned to team members, and used to track progress and facilitate communication. Here's how to use issues:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the Issues tab in your repository on GitHub."),(0,n.kt)("li",{parentName:"ol"},'Click the "New issue" button.'),(0,n.kt)("li",{parentName:"ol"},"Enter a descriptive title and a detailed description of the issue. You can also assign the issue to a team member or add a label."),(0,n.kt)("li",{parentName:"ol"},'Click the "Submit new issue" button.')),(0,n.kt)("p",null,"Once created, issues can be assigned, commented on, labeled, or closed upon resolution."),(0,n.kt)("h3",{id:"milestones"},"Milestones"),(0,n.kt)("p",null,"Milestones enable tracking and managing the progress of a code project. They group related issues and help set deadlines. To use milestones:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the Issues tab in your repository on GitHub."),(0,n.kt)("li",{parentName:"ol"},'Click on "Milestones".'),(0,n.kt)("li",{parentName:"ol"},'Click the "New Milestone" button.'),(0,n.kt)("li",{parentName:"ol"},"Enter a title, due date (optional), and description for the milestone."),(0,n.kt)("li",{parentName:"ol"},'Click "Create Milestone".')),(0,n.kt)("p",null,"You can add issues to a milestone, track its progress, and view the number of open and closed issues within it."),(0,n.kt)("h3",{id:"pull-requests"},"Pull Requests"),(0,n.kt)("p",null,"Pull requests allow developers to propose and collaborate on code changes. They are used to suggest code alterations, review modifications made by others, and merge changes into the main branch of a repository. Here's how to create a pull request:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new branch in your repository for your code changes."),(0,n.kt)("li",{parentName:"ol"},"Make your modifications and commit them to the branch."),(0,n.kt)("li",{parentName:"ol"},"Go to the Pull requests tab in your repository on GitHub."),(0,n.kt)("li",{parentName:"ol"},'Click the "New pull request" button.'),(0,n.kt)("li",{parentName:"ol"},'Select the branch with your code changes as the "compare" branch and the repository\'s main branch as the "base" branch.'),(0,n.kt)("li",{parentName:"ol"},"Review the changes and add a descriptive title and detailed description."),(0,n.kt)("li",{parentName:"ol"},'Click the "Create pull request" button.')),(0,n.kt)("p",null,"Once created, pull requests can be reviewed, discussed, and if approved, merged into the main branch."),(0,n.kt)("h3",{id:"discussions"},"Discussions"),(0,n.kt)("p",null,"Discussions in GitHub provide a dedicated space for collaboration. They allow for open-ended conversations and are ideal for questions, open-ended conversations, and sharing information. To use discussions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the Discussions tab in your repository on GitHub."),(0,n.kt)("li",{parentName:"ol"},'Click the "New discussion" button.'),(0,n.kt)("li",{parentName:"ol"},"Select the category for your discussion."),(0,n.kt)("li",{parentName:"ol"},"Write your discussion's title and details."),(0,n.kt)("li",{parentName:"ol"},'Click "Start discussion".')),(0,n.kt)("h2",{id:"simple-guide---minimal-flow-to-contribute-to-the-project"},"Simple Guide - Minimal Flow to Contribute to the Project"),(0,n.kt)("h3",{id:"clone-from-repository"},"Clone from Repository"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/FPGA-MAFIA/fpga_mafia.git")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cd fpga_mafia"),"  ")),(0,n.kt)("h3",{id:"create-a-new-branch"},"Create a New Branch"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'git checkout -b "branch_name"'),"  ")),(0,n.kt)("h3",{id:"modify-stage-and-commit"},"Modify, Stage, and Commit"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make your changes  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git add ."),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git commit -m 'your commit'"),"  ")),(0,n.kt)("h3",{id:"pull-from-originmain-to-ensure-no-conflicts"},"Pull from origin/main (to ensure no conflicts)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"git pull origin main"),"  "),(0,n.kt)("li",{parentName:"ul"},"Resolve any conflicts, if necessary")),(0,n.kt)("h3",{id:"push-to-origin"},"Push to Origin"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'git push origin "branch_name"'),"  ")),(0,n.kt)("h3",{id:"add-a-pull-request"},"Add a Pull Request"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Visit your repository on "',(0,n.kt)("a",{parentName:"li",href:"https://github.com/%22"},'https://github.com/"'),' and create a pull request via "Pull requests->New pull request"')),(0,n.kt)("h2",{id:"advanced-flows"},"Advanced Flows"),(0,n.kt)("h3",{id:"merge-conflict"},"Merge Conflict"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Merge conflicts happen when changes are made to the same part of a file on two different branches. Git doesn't know which changes to incorporate into the final merge. Therefore, you need to manually decide and resolve these conflicts.")),(0,n.kt)("h3",{id:"amend-commits"},"Amend Commits"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you need to modify the most recent commit (for instance, if you forgot to add a file or need to change the commit message), you can use ",(0,n.kt)("inlineCode",{parentName:"li"},"git commit --amend"),". However, be cautious when amending commits that have already been pushed to a public branch, as it can cause problems for other developers.")),(0,n.kt)("h3",{id:"revert-commit"},"Revert Commit"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you need to undo changes introduced by a specific commit, use ",(0,n.kt)("inlineCode",{parentName:"li"},"git revert <commit_id>"),". This creates a new commit that undoes all the changes made in the specified commit. It's a safe operation to use in a public branch.")),(0,n.kt)("p",null,"Remember to consult the ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/doc"},"official Git documentation")," for detailed explanations and advanced usage examples. It's a valuable resource for learning more about Git's powerful features."))}m.isMDXComponent=!0}}]);