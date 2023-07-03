"use strict";(self.webpackChunkottodocs_docs=self.webpackChunkottodocs_docs||[]).push([[810],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>f});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||n;return o?r.createElement(f,s(s({ref:t},u),{},{components:o})):r.createElement(f,s({ref:t},u))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<n;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1111:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=o(7462),a=(o(7294),o(3905));const n={title:"Base",description:"Document your code with ease"},s=void 0,i={unversionedId:"usage/otto",id:"usage/otto",title:"Base",description:"Document your code with ease",source:"@site/docs/usage/otto.md",sourceDirName:"usage",slug:"/usage/otto",permalink:"/docs/usage/otto",draft:!1,editUrl:"https://github.com/TimeSurgeLabs/ottodocs/tree/docs/packages/create-docusaurus/templates/shared/docs/usage/otto.md",tags:[],version:"current",frontMatter:{title:"Base",description:"Document your code with ease"},sidebar:"docs",previous:{title:"What is OttoDocs?",permalink:"/docs/"},next:{title:"Config",permalink:"/docs/usage/otto_config"}},l={},c=[{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 23-Apr-2023",id:"auto-generated-by-spf13cobra-on-23-apr-2023",level:6}],u={toc:c},p="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Document your code with ease"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Code documentation made easy using GPT."),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for otto\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/usage/otto_ask"},"otto ask"),"\t - Ask a question about a file or repo"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/usage/otto_chat"},"otto chat"),"\t - Talk with Otto from the command line!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/usage/otto_cmd"},"otto cmd"),"\t - Have Otto suggest a command to run next"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/usage/otto_commit"},"otto commit"),"\t - Generates a commit message from the git diff"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/usage/otto_config"},"otto config"),"\t - Configures ottodocs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/usage/otto_docs"},"otto docs"),"\t - Document a repository of files or a single file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/usage/otto_edit"},"otto edit"),"\t - Edit a file using AI"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/usage/otto_issue"},"otto issue"),"\t - Get a prompt for or ask Otto about a GitHub Issue."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/usage/otto_pr"},"otto pr"),"\t - Generate a pull request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/usage/otto_prompt"},"otto prompt"),"\t - Generates a Otto prompt from a given Git repo"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/usage/otto_release"},"otto release"),"\t - Generate GitHub release notes from git commit logs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/usage/otto_version"},"otto version"),"\t - Prints version information.")),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-23-apr-2023"},"Auto generated by spf13/cobra on 23-Apr-2023"))}m.isMDXComponent=!0}}]);