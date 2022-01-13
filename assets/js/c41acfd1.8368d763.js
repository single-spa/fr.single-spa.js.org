"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[428],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2301:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),l=["components"],i={id:"ecosystem-html-web-components",title:"single-spa-html",sidebar_label:"HTML / Web Components"},s=void 0,p={unversionedId:"ecosystem-html-web-components",id:"version-4.x/ecosystem-html-web-components",title:"single-spa-html",description:"single-spa-html is a helper library for mounting raw HTML and web components as",source:"@site/versioned_docs/version-4.x/ecosystem-html-web-components.md",sourceDirName:".",slug:"/ecosystem-html-web-components",permalink:"/docs/4.x/ecosystem-html-web-components",editUrl:"https://github.com/single-spa/fr.single-spa.js.org/blob/master/website/versioned_docs/version-4.x/ecosystem-html-web-components.md",tags:[],version:"4.x",frontMatter:{id:"ecosystem-html-web-components",title:"single-spa-html",sidebar_label:"HTML / Web Components"},sidebar:"version-4.x/docs",previous:{title:"Backbone",permalink:"/docs/4.x/ecosystem-backbone"},next:{title:"Leaked globals",permalink:"/docs/4.x/ecosystem-leaked-globals"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Via npm",id:"via-npm",children:[],level:3},{value:"Via cdn",id:"via-cdn",children:[],level:3}],level:2},{value:"API / Options",id:"api--options",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa-html"},"single-spa-html")," is a helper library for mounting raw HTML and web components as\nsingle-spa applications or parcels."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save single-spa-html\n\n# or\nyarn add single-spa-html\n")),(0,a.kt)("p",null,"Alternatively, you can use single-spa-html from a CDN as a global variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/npm/single-spa-html"><\/script>\n')),(0,a.kt)("p",null,"Note that you might want to lock down the package to a specific version. See ",(0,a.kt)("a",{parentName:"p",href:"https://cdn.jsdelivr.net/npm/single-spa-html"},"here")," for\nhow to do that."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"via-npm"},"Via npm"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import singleSpaHtml from 'single-spa-html';\n\nconst htmlLifecycles = singleSpaHtml({\n  template: '<x-my-web-component></x-my-web-component>',\n})\n\nexport const bootstrap = htmlLifecycles.bootstrap;\nexport const mount = htmlLifecycles.mount;\nexport const unmount = htmlLifecycles.unmount;\n")),(0,a.kt)("h3",{id:"via-cdn"},"Via cdn"),(0,a.kt)("p",null,"Example usage when installed via CDN:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const webComponentApp = window.singleSpaHtml.default({\n  template: props => `<x-my-web-component attr=\"${props.attr}\"></x-my-web-component>`,\n})\n\nsingleSpa.registerApplication('name', webComponentApp, () => true)\n")),(0,a.kt)("h2",{id:"api--options"},"API / Options"),(0,a.kt)("p",null,"single-spa-html is called with an object that has the following properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"template")," (required): An HTML string or a function that returns a string. The function will be called with the single-spa custom props. The returned string is injected into the DOM during the single-spa mount lifecycle."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"domElementGetter")," (optional): A function that returns the dom element container into which the HTML will be injected. If omitted,\na default implementation is provided that wraps the template in a ",(0,a.kt)("inlineCode",{parentName:"li"},"<div>")," that is appended to ",(0,a.kt)("inlineCode",{parentName:"li"},"document.body"),".")))}u.isMDXComponent=!0}}]);