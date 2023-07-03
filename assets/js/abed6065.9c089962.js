"use strict";(self.webpackChunkottodocs_docs=self.webpackChunkottodocs_docs||[]).push([[134],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(o),f=n,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return o?r.createElement(g,s(s({ref:t},u),{},{components:o})):r.createElement(g,s({ref:t},u))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},6511:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={title:"Ask",description:"Uses full text search to find relevant code and ask questions about a git repo."},s=void 0,i={unversionedId:"usage/otto_ask",id:"usage/otto_ask",title:"Ask",description:"Uses full text search to find relevant code and ask questions about a git repo.",source:"@site/docs/usage/otto_ask.md",sourceDirName:"usage",slug:"/usage/otto_ask",permalink:"/docs/usage/otto_ask",draft:!1,editUrl:"https://github.com/TimeSurgeLabs/ottodocs/tree/docs/packages/create-docusaurus/templates/shared/docs/usage/otto_ask.md",tags:[],version:"current",frontMatter:{title:"Ask",description:"Uses full text search to find relevant code and ask questions about a git repo."},sidebar:"docs",previous:{title:"Config",permalink:"/docs/usage/otto_config"},next:{title:"Chat",permalink:"/docs/usage/otto_chat"}},l={},c=[{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 23-Apr-2023",id:"auto-generated-by-spf13cobra-on-23-apr-2023",level:6}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Ask a question about a file or repo"),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Uses full text search to find relevant code and ask questions about said code.\nRequires a path to a repository or file as a positional argument."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"otto ask [flags]\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -h, --help               help for ask\n  -n, --ignore string      path to .gptignore file\n  -g, --ignore-gitignore   ignore .gitignore file\n  -q, --question string    The question to ask\n  -v, --verbose            verbose output\n")),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/usage/otto"},"otto"),"\t - Document your code with ease")),(0,n.kt)("h6",{id:"auto-generated-by-spf13cobra-on-23-apr-2023"},"Auto generated by spf13/cobra on 23-Apr-2023"))}d.isMDXComponent=!0}}]);