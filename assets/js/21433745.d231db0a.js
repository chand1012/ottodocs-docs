"use strict";(self.webpackChunkottodocs_docs=self.webpackChunkottodocs_docs||[]).push([[650],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),d=n,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return o?r.createElement(m,a(a({ref:t},p),{},{components:o})):r.createElement(m,a({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8707:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const i={title:"Docs",description:"Document a repository of files or a single file."},a=void 0,s={unversionedId:"usage/otto_docs",id:"usage/otto_docs",title:"Docs",description:"Document a repository of files or a single file.",source:"@site/docs/usage/otto_docs.md",sourceDirName:"usage",slug:"/usage/otto_docs",permalink:"/docs/usage/otto_docs",draft:!1,editUrl:"https://github.com/TimeSurgeLabs/ottodocs/tree/docs/packages/create-docusaurus/templates/shared/docs/usage/otto_docs.md",tags:[],version:"current",frontMatter:{title:"Docs",description:"Document a repository of files or a single file."},sidebar:"docs",previous:{title:"Pull Request",permalink:"/docs/usage/otto_pr"},next:{title:"Prompt",permalink:"/docs/usage/otto_prompt"}},l={},c=[{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 23-Apr-2023",id:"auto-generated-by-spf13cobra-on-23-apr-2023",level:6}],p={toc:c},u="wrapper";function f(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Document a repository of files or a single file."),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Document an entire repository of files. Specify the path to the repo as the first positional argument. This command will recursively\nsearch for files in the directory and document them. If a single file is specified, it will be documented."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"otto docs [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -h, --help               help for docs\n  -n, --ignore string      path to .gptignore file\n  -g, --ignore-gitignore   ignore .gitignore file\n  -i, --inline             Output in inline format\n  -m, --markdown           Output in Markdown format\n  -o, --output string      Path to the output file. For use with --markdown\n  -w, --overwrite          Overwrite the original file\n  -p, --prompt string      Prompt to use for the ChatGPT API\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/usage/otto"},"otto"),"\t - Document your code with ease")),(0,n.kt)("h6",{id:"auto-generated-by-spf13cobra-on-23-apr-2023"},"Auto generated by spf13/cobra on 23-Apr-2023"))}f.isMDXComponent=!0}}]);