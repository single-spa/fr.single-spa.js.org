"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3897],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7614:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],p={id:"ecosystem-preact",title:"single-spa-preact",sidebar_label:"Preact"},l=void 0,c={unversionedId:"ecosystem-preact",id:"version-5.x/ecosystem-preact",title:"single-spa-preact",description:"single-spa-preact is a helper library that helps implement single-spa registered application lifecycle functions (bootstrap, mount and unmount) for for use with Preact. Check out the single-spa-preact github.",source:"@site/versioned_docs/version-5.x/ecosystem-preact.md",sourceDirName:".",slug:"/ecosystem-preact",permalink:"/docs/ecosystem-preact",editUrl:"https://github.com/single-spa/fr.single-spa.js.org/blob/master/website/versioned_docs/version-5.x/ecosystem-preact.md",tags:[],version:"5.x",frontMatter:{id:"ecosystem-preact",title:"single-spa-preact",sidebar_label:"Preact"},sidebar:"version-5.x/docs",previous:{title:"Inferno",permalink:"/docs/ecosystem-inferno"},next:{title:"Svelte",permalink:"/docs/ecosystem-svelte"}},s=[{value:"Installation",id:"installation",children:[],level:2},{value:"Quickstart",id:"quickstart",children:[],level:2},{value:"Options",id:"options",children:[],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"single-spa-preact is a helper library that helps implement ",(0,o.kt)("a",{parentName:"p",href:"configuration#registering-applications"},"single-spa registered application")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/building-applications#registered-application-lifecycle"},"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",(0,o.kt)("a",{parentName:"p",href:"https://preactjs.com/"},"Preact"),". Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa-preact"},"single-spa-preact github"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save preact\n")),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"In your project's entry file, add the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import preact from 'preact';\nimport rootComponent from './path-to-root-component.js';\nimport singleSpaPreact from 'single-spa-preact';\n\nconst preactLifecycles = singleSpaPreact({\n  preact,\n  rootComponent,\n  domElementGetter: () => document.getElementById('main-content'),\n});\n\nexport const bootstrap = preactLifecycles.bootstrap;\nexport const mount = preactLifecycles.mount;\nexport const unmount = preactLifecycles.unmount;\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,"All options are passed to single-spa-preact via the ",(0,o.kt)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",(0,o.kt)("inlineCode",{parentName:"p"},"singleSpaPreact(opts)"),". The following options are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"preact"),": (required) The main Preact object, which is generally either exposed onto the window or is available via ",(0,o.kt)("inlineCode",{parentName:"li"},"require('preact')")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"import preact from 'preact'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rootComponent"),": (required) The top level preact component which will be rendered"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"domElementGetter"),": (optional) A function that is given the single-spa props and returns a DOMElement. This dom element is where the Preact application will be bootstrapped, mounted, and unmounted. If omitted, a div will be created and appended to the body.")))}m.isMDXComponent=!0}}]);