"use strict";(self.webpackChunkottodocs_docs=self.webpackChunkottodocs_docs||[]).push([[13],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return r?o.createElement(d,p(p({ref:t},c),{},{components:r})):o.createElement(d,p({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var l=2;l<a;l++)p[l]=r[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={title:"Prompt",description:"Generates a ChatGPT prompt from a given Git repo."},p=void 0,i={unversionedId:"usage/otto_prompt",id:"usage/otto_prompt",title:"Prompt",description:"Generates a ChatGPT prompt from a given Git repo.",source:"@site/docs/usage/otto_prompt.md",sourceDirName:"usage",slug:"/usage/otto_prompt",permalink:"/docs/usage/otto_prompt",draft:!1,editUrl:"https://github.com/TimeSurgeLabs/ottodocs/tree/docs/packages/create-docusaurus/templates/shared/docs/usage/otto_prompt.md",tags:[],version:"current",frontMatter:{title:"Prompt",description:"Generates a ChatGPT prompt from a given Git repo."},sidebar:"docs",previous:{title:"Docs",permalink:"/docs/usage/otto_docs"},next:{title:"Release",permalink:"/docs/usage/otto_release"}},s={},l=[{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 23-Apr-2023",id:"auto-generated-by-spf13cobra-on-23-apr-2023",level:6}],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Generates a ChatGPT prompt from a given Git repo."),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Generates a ChatGPT prompt from a given Git repo. Specify the path to the repo as the first positional argument."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"otto prompt [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -e, --estimate           estimate the number of tokens in the output\n  -h, --help               help for prompt\n  -i, --ignore string      path to .gptignore file\n  -g, --ignore-gitignore   ignore .gitignore file\n  -j, --json               output JSON\n  -o, --output string      path to output file\n  -p, --preamble string    path to preamble text file\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/usage/otto"},"otto"),"\t - Document your code with ease")),(0,n.kt)("h6",{id:"auto-generated-by-spf13cobra-on-23-apr-2023"},"Auto generated by spf13/cobra on 23-Apr-2023"))}m.isMDXComponent=!0}}]);