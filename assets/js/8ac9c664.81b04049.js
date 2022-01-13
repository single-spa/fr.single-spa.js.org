"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9472],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7926:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),o=["components"],s={id:"getting-started-overview",title:"Getting Started with single-spa",sidebar_label:"Overview of single-spa"},l=void 0,p={unversionedId:"getting-started-overview",id:"version-5.x/getting-started-overview",title:"Getting Started with single-spa",description:"JavaScript Microfrontends",source:"@site/versioned_docs/version-5.x/getting-started-overview.md",sourceDirName:".",slug:"/getting-started-overview",permalink:"/docs/getting-started-overview",editUrl:"https://github.com/single-spa/fr.single-spa.js.org/blob/master/website/versioned_docs/version-5.x/getting-started-overview.md",tags:[],version:"5.x",frontMatter:{id:"getting-started-overview",title:"Getting Started with single-spa",sidebar_label:"Overview of single-spa"},sidebar:"version-5.x/docs",next:{title:"Resources",permalink:"/docs/examples"}},c=[{value:"JavaScript Microfrontends",id:"javascript-microfrontends",children:[],level:2},{value:"Demos and Examples",id:"demos-and-examples",children:[],level:2},{value:"Architectural Overview",id:"architectural-overview",children:[],level:2},{value:"The Recommended Setup",id:"the-recommended-setup",children:[],level:2},{value:"How hard will it be to use single-spa?",id:"how-hard-will-it-be-to-use-single-spa",children:[],level:2},{value:"Isn&#39;t single-spa sort of a redundant name?",id:"isnt-single-spa-sort-of-a-redundant-name",children:[],level:2},{value:"Documentation",id:"documentation",children:[],level:2},{value:"Quick start",id:"quick-start",children:[{value:"Create a root config",id:"create-a-root-config",children:[],level:3},{value:"Create a single-spa application",id:"create-a-single-spa-application",children:[],level:3},{value:"Add shared dependencies",id:"add-shared-dependencies",children:[],level:3},{value:"Register the application",id:"register-the-application",children:[],level:3}],level:2},{value:"API",id:"api",children:[],level:2},{value:"Contributing",id:"contributing",children:[{value:"Code of Conduct",id:"code-of-conduct",children:[],level:3},{value:"Contributing Guide",id:"contributing-guide",children:[],level:3}],level:2},{value:"Who&#39;s Using This?",id:"whos-using-this",children:[],level:2}],d={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"javascript-microfrontends"},"JavaScript Microfrontends"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/single-spa/shared_invite/zt-yxfqpl2u-PNx3uZtS3pgAXbOBWsdwOA"},"Join the chat on Slack")),(0,r.kt)("p",null,"single-spa is a framework for bringing together multiple JavaScript microfrontends in a frontend application. Architecting your frontend using single-spa enables many benefits, such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ecosystem#help-for-frameworks"},"Use multiple frameworks")," on the same page ",(0,r.kt)("a",{parentName:"li",href:"/docs/building-applications"},"without page refreshing"),"\n(",(0,r.kt)("a",{parentName:"li",href:"/docs/ecosystem-react"},"React"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/ecosystem-angularjs"},"AngularJS"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/ecosystem-angular"},"Angular"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/ecosystem-ember"},"Ember"),", or whatever you're using)"),(0,r.kt)("li",{parentName:"ul"},"Deploy your microfrontends independently"),(0,r.kt)("li",{parentName:"ul"},"Write code using a new framework, without rewriting your existing app"),(0,r.kt)("li",{parentName:"ul"},"Lazy load code for improved initial load time")),(0,r.kt)("h2",{id:"demos-and-examples"},"Demos and Examples"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples"},"our examples page"),"."),(0,r.kt)("h2",{id:"architectural-overview"},"Architectural Overview"),(0,r.kt)("p",null,'single-spa takes inspiration from modern framework component lifecycles by abstracting lifecycles for entire applications.\nBorn out of Canopy\'s desire to use React + react-router instead of being forever stuck with our AngularJS + ui-router application, single-spa is now a mature library that enables frontend microservices architecture aka "microfrontends". Microfrontends enable many benefits such as independent deployments, migration and experimentation, and resilient applications.'),(0,r.kt)("p",null,"single-spa apps consist of the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A ",(0,r.kt)("a",{parentName:"p",href:"configuration"},"single-spa root config"),", which renders the HTML page ",(0,r.kt)("em",{parentName:"p"},"and")," the JavaScript that registers applications. Each application is registered with three things:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A name"),(0,r.kt)("li",{parentName:"ul"},"A function to load the application's code"),(0,r.kt)("li",{parentName:"ul"},"A function that determines when the application is active/inactive"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/building-applications"},"Applications")," which can be thought of as single-page applications packaged up into modules. Each application must know how to bootstrap, mount, and unmount itself from the DOM. The main difference between a traditional SPA and single-spa applications is that they must be able to coexist with other applications as they do not each have their own HTML page."),(0,r.kt)("p",{parentName:"li"},"For example, your React or Angular SPAs are applications. When active, they can listen to url routing events and put content on the DOM. When inactive, they do not listen to url routing events and are totally removed from the DOM."))),(0,r.kt)("h2",{id:"the-recommended-setup"},"The Recommended Setup"),(0,r.kt)("p",null,"The single-spa core team has put together documentation, tools, and videos showing the currently encouraged best practices with single-spa. Check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/recommended-setup/"},"these docs")," for more information."),(0,r.kt)("h2",{id:"how-hard-will-it-be-to-use-single-spa"},"How hard will it be to use single-spa?"),(0,r.kt)("p",null,"single-spa works with ES5, ES6+, TypeScript, Webpack, SystemJS, Gulp, Grunt, Bower, ember-cli, or really any build system available. You can npm install it or even just use a ",(0,r.kt)("inlineCode",{parentName:"p"},"<script>")," tag if you prefer."),(0,r.kt)("p",null,"While our objective is to make using single-spa as easy as possible, we should also note that this is an ",(0,r.kt)("em",{parentName:"p"},"advanced architecture")," that is different from how front-end applications are typically done. This will require changes to existing paradigms as well as understanding of underlying tools."),(0,r.kt)("p",null,"If you're not starting your application from scratch, you'll have to ",(0,r.kt)("a",{parentName:"p",href:"/docs/migrating-existing-spas"},"migrate your SPA")," to become a single-spa application."),(0,r.kt)("p",null,"single-spa works in Chrome, Firefox, Safari, Edge, and IE11 (with polyfills)."),(0,r.kt)("h2",{id:"isnt-single-spa-sort-of-a-redundant-name"},"Isn't single-spa sort of a redundant name?"),(0,r.kt)("p",null,"Yep."),(0,r.kt)("h2",{id:"documentation"},"Documentation"),(0,r.kt)("p",null,"The documentation is divided into several sections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started-overview"},"Getting Started")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/building-applications"},"single-spa Applications")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/parcels-overview"},"single-spa Parcels")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/examples"},"Examples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ecosystem"},"Ecosystem")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/contributing-overview"},"Contributing Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://single-spa.js.org/blog/"},"Blog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://single-spa.js.org/help/"},"Where to Get Support"))),(0,r.kt)("p",null,"You can help improve the single-spa website by sending pull requests to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa.js.org"},(0,r.kt)("inlineCode",{parentName:"a"},"single-spa.js.org")," repository"),"."),(0,r.kt)("h2",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"To help beginners to single-spa get started quickly we have developed ",(0,r.kt)("a",{parentName:"p",href:"/docs/create-single-spa/"},(0,r.kt)("inlineCode",{parentName:"a"},"create-single-spa")),", a utility for generating starter code. This guide will cover creating the root-config and your first single-spa application. Let's get started."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Once you've gotten some of the basics down, refer to these other ",(0,r.kt)("a",{parentName:"p",href:"/docs/examples/"},"single-spa examples")," to see more advanced usage."))),(0,r.kt)("h3",{id:"create-a-root-config"},"Create a root config"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"create-single-spa")," to generate a root-config by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npx create-single-spa --moduleType root-config\n")),(0,r.kt)("p",{parentName:"li"},"Follow the remaining prompts with a few things in mind:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://single-spa.js.org/docs/layout-overview"},"single-spa Layout Engine")," is optional at this time but is recommended if you foresee utilizing ",(0,r.kt)("a",{parentName:"li",href:"https://single-spa.js.org/docs/ssr-overview"},"server side rendering")),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"orgName")," should be the same across all of your applications as it is used as a namespace to enable ",(0,r.kt)("a",{parentName:"li",href:"https://single-spa.js.org/docs/recommended-setup/#in-browser-versus-build-time-modules"},"in-browser module resolution")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once created, navigate into the newly created root-config folder")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," script using your preferred package manager")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to http://localhost:9000/ in your browser")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You now have a working root-config!"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Be sure to review the comments inside the generated code as well as the information in the Welcome application")," even if some of the content is duplicated in this guide."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"http://single-spa-playground.org/playground"},"single-spa-playground.org")," is an alternative guide to run an application without needing to create your own root-config."))),(0,r.kt)("h3",{id:"create-a-single-spa-application"},"Create a single-spa application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Invoke ",(0,r.kt)("inlineCode",{parentName:"p"},"create-single-spa")," to generate a single-spa application by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npx create-single-spa --moduleType app-parcel\n")),(0,r.kt)("p",{parentName:"li"},"Follow the remaining prompts to generate a single-spa application using your framework of choice")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once created, navigate into the newly created application folder")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," script using your preferred package manager"))),(0,r.kt)("h3",{id:"add-shared-dependencies"},"Add shared dependencies"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://single-spa.js.org/docs/recommended-setup/#shared-dependencies"},"Shared dependencies")," are used to improve performance by sharing a module in the browser through ",(0,r.kt)("a",{parentName:"p",href:"https://single-spa.js.org/docs/recommended-setup/#import-maps"},"import maps")," declared in the root-config. Adding these at this point is ",(0,r.kt)("em",{parentName:"p"},"conditionally optional"),", depending on if the generated application expects any shared dependencies."),(0,r.kt)("p",null,"For example, if using React the generated Webpack config already expects ",(0,r.kt)("inlineCode",{parentName:"p"},"React")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactDOM")," to be shared dependencies, so you must add these to the import map. Vue, Angular, and Svelte don't require shared dependencies at this time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"react": "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.js",\n"react-dom": "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js"\n')),(0,r.kt)("p",null,"As your architecture matures, you may add more shared dependencies in the future so don't stress about leveraging these perfectly at first."),(0,r.kt)("h3",{id:"register-the-application"},"Register the application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return to the root-config and add your application to the import map in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/index.ejs")),(0,r.kt)("small",null,"The application's package.json name field is recommended")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Register as a single-spa application"),(0,r.kt)("p",{parentName:"li"},"if ",(0,r.kt)("strong",{parentName:"p"},"not")," using single-spa Layout Engine"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"src/root-config.js")),(0,r.kt)("li",{parentName:"ul"},"Remove the code for registering ",(0,r.kt)("inlineCode",{parentName:"li"},"@single-spa/welcome")," as an application"),(0,r.kt)("li",{parentName:"ul"},"Uncomment the sample ",(0,r.kt)("inlineCode",{parentName:"li"},"registerApplication")," code and update it with the module name of your application")),(0,r.kt)("p",{parentName:"li"},"if using single-spa Layout Engine"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Remove the existing ",(0,r.kt)("inlineCode",{parentName:"li"},'<application name="@single-spa/welcome"></application>')," element"),(0,r.kt)("li",{parentName:"ul"},"Add your own ",(0,r.kt)("inlineCode",{parentName:"li"},'<application name=""></application>')," element using the ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," the module name used in the import map from the previous step")))),(0,r.kt)("p",null,"Thats it! Your first single-spa application should now be running in your root-config."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"Read more at ",(0,r.kt)("a",{parentName:"p",href:"/docs/api"},"single-spa API")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/building-applications#application-lifecycle"},"application api"),"."),(0,r.kt)("h2",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"The main purpose of this repository is to continue to evolve single-spa, making it better and easier to use. Development of single-spa, and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/ecosystem"},"single-spa ecosystem")," happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving single-spa."),(0,r.kt)("h3",{id:"code-of-conduct"},(0,r.kt)("a",{parentName:"h3",href:"/docs/code-of-conduct"},"Code of Conduct")),(0,r.kt)("p",null,"single-spa has adopted a Code of Conduct that we expect project participants to adhere to. Please read ",(0,r.kt)("a",{parentName:"p",href:"/docs/code-of-conduct"},"the full text")," so that you can understand what actions will and will not be tolerated."),(0,r.kt)("h3",{id:"contributing-guide"},(0,r.kt)("a",{parentName:"h3",href:"/docs/contributing-overview"},"Contributing Guide")),(0,r.kt)("p",null,"Read our ",(0,r.kt)("a",{parentName:"p",href:"/docs/contributing-overview/"},"contributing guide")," to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to single-spa."),(0,r.kt)("h2",{id:"whos-using-this"},"Who's Using This?"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/users"},"user showcase"),"."),(0,r.kt)("p",null,"Is your company or project using single-spa? Let us know by submitting a PR to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa.js.org/blob/master/website/src/data/users.js"},"this section"),"!"))}u.isMDXComponent=!0}}]);