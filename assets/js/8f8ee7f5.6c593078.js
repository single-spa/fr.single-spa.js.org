"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1582],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?s.createElement(h,i(i({ref:t},p),{},{components:n})):s.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var c=2;c<a;c++)i[c]=n[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4784:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var s=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],r={id:"ecosystem-css",title:"CSS",sidebar_label:"CSS"},l=void 0,c={unversionedId:"ecosystem-css",id:"version-5.x/ecosystem-css",title:"CSS",description:"In a microfrontends architecture, it's important to have both shared CSS and microfrontend-specific CSS. There should only be one copy of all shared CSS, and CSS specific to a microfrontend should be scoped so that class names do not collide between microfrontends.",source:"@site/versioned_docs/version-5.x/ecosystem-css.md",sourceDirName:".",slug:"/ecosystem-css",permalink:"/docs/ecosystem-css",editUrl:"https://github.com/single-spa/fr.single-spa.js.org/blob/master/website/versioned_docs/version-5.x/ecosystem-css.md",tags:[],version:"5.x",frontMatter:{id:"ecosystem-css",title:"CSS",sidebar_label:"CSS"},sidebar:"version-5.x/docs",previous:{title:"Overview",permalink:"/docs/ecosystem"},next:{title:"React",permalink:"/docs/ecosystem-react"}},p=[{value:"Shared CSS",id:"shared-css",children:[{value:"In-House Design System",id:"in-house-design-system",children:[],level:3},{value:"Third Party Design System",id:"third-party-design-system",children:[],level:3},{value:"Global CSS versus shared Javascript components",id:"global-css-versus-shared-javascript-components",children:[],level:3},{value:"CSS Custom Properties",id:"css-custom-properties",children:[],level:3}],level:2},{value:"Scoped CSS",id:"scoped-css",children:[{value:"UI Frameworks",id:"ui-frameworks",children:[{value:"React",id:"react",children:[],level:4},{value:"Angular",id:"angular",children:[],level:4},{value:"Vue",id:"vue",children:[],level:4},{value:"Svelte",id:"svelte",children:[],level:4}],level:3},{value:"PostCSS Prefix Selector",id:"postcss-prefix-selector",children:[],level:3},{value:"Shadow DOM",id:"shadow-dom",children:[],level:3}],level:2},{value:"Lazy Loading",id:"lazy-loading",children:[],level:2},{value:"Unmounting CSS",id:"unmounting-css",children:[],level:2},{value:"SASS, PostCSS, Less, Stylus, etc",id:"sass-postcss-less-stylus-etc",children:[],level:2},{value:"Webpack CSS resources",id:"webpack-css-resources",children:[],level:2},{value:"single-spa-css",id:"single-spa-css",children:[{value:"Installation",id:"installation",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"Webpack Plugin",id:"webpack-plugin",children:[{value:"Usage",id:"usage-1",children:[],level:4}],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In a microfrontends architecture, it's important to have both shared CSS and microfrontend-specific CSS. There should only be one copy of all shared CSS, and CSS specific to a microfrontend should be scoped so that class names do not collide between microfrontends."),(0,a.kt)("h2",{id:"shared-css"},"Shared CSS"),(0,a.kt)("p",null,'It is best for both performance and developer experience to have some shared CSS. Often, the shared CSS is part of a "styleguide" or "design system."'),(0,a.kt)("p",null,"Sometimes the design system is created in-house by a company, and other times it's an open source design system that is available on npm (Material UI, Bootstrap, Semantic UI, etc). For both cases, it's important that there is only a single copy of the CSS on the page at any time. When using ",(0,a.kt)("a",{parentName:"p",href:"/docs/recommended-setup"},"the recommended setup"),", this is accomplished by following ",(0,a.kt)("a",{parentName:"p",href:"/docs/recommended-setup#sharing-with-import-maps"},"the techniques in this documentation"),"."),(0,a.kt)("p",null,"Besides sharing component styles, the styleguide or design system also usually includes CSS resets and utility classes."),(0,a.kt)("h3",{id:"in-house-design-system"},"In-House Design System"),(0,a.kt)("p",null,"Our recommendation for in-house design systems is to create a ",(0,a.kt)("a",{parentName:"p",href:"/docs/module-types#utilities"},"utility microfrontend")," (often named ",(0,a.kt)("inlineCode",{parentName:"p"},"@your-org-name/styleguide"),"). Contained within the utility microfrontend are shared CSS and Javascript components that are available for all other microfrontends to use."),(0,a.kt)("p",null,"Other microfrontends can access shared Javascript components via ",(0,a.kt)("a",{parentName:"p",href:"/docs/recommended-setup#cross-microfrontend-imports"},"cross-microfrontend imports"),", and apply shared, global CSS classes to their components in the normal way (",(0,a.kt)("inlineCode",{parentName:"p"},'<div class="bold">'),")."),(0,a.kt)("p",null,"Here are some examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/react-microfrontends/styleguide"},"https://github.com/react-microfrontends/styleguide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/vue-microfrontends/styleguide"},"https://github.com/vue-microfrontends/styleguide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/polyglot-microfrontends/styleguide"},"https://github.com/polyglot-microfrontends/styleguide"))),(0,a.kt)("p",null,"The alternative to creating a utility microfrontend for your styleguide is to publish it to npm. The drawback to this approach is that it makes it easier to have duplicate copies of the styleguide, and also easier to have different versions of the styleguide. Npm packages are not independently deployable, nor are they singletons, but for a styleguide it's often desirable to have it centrally managed and can be deployed separately from the microfrontends that use them."),(0,a.kt)("h3",{id:"third-party-design-system"},"Third Party Design System"),(0,a.kt)("p",null,"When using a third-party design system, such as Material UI, Bootstrap, Semantic, etc, it is important that only one copy and version of the design system is loaded on the page. To accomplish this, here are two implementation options."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the design system libraries to your SystemJS import map, then mark them as external (",(0,a.kt)("a",{parentName:"li",href:"/docs/recommended-setup#sharing-with-import-maps"},"full documentation"),"). Alternatively, do the equivalent with ",(0,a.kt)("a",{parentName:"li",href:"/docs/recommended-setup#sharing-with-module-federation"},"module federation"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a utility microfrontend (often called ",(0,a.kt)("inlineCode",{parentName:"li"},"@your-org-name/styleguide"),") that contains all shared CSS and Javascript components. Re-export the components from the design system so that all other microfrontends can access them via ",(0,a.kt)("a",{parentName:"li",href:"/docs/recommended-setup#cross-microfrontend-imports"},"cross microfrontend imports")," (",(0,a.kt)("inlineCode",{parentName:"li"},"import { Button } from '@your-org-name/styleguide';"),").")),(0,a.kt)("p",null,"Once the design system is properly shared, all its CSS and Javascript components will only be included one time on the web page. The code using the design system's components remains unchanged."),(0,a.kt)("h3",{id:"global-css-versus-shared-javascript-components"},"Global CSS versus shared Javascript components"),(0,a.kt)("p",null,"It's possible to share CSS via global CSS classes, Javascript components, or both. No method is clearly superior than others in every way, and you should choose an approach that fits your situation."),(0,a.kt)("p",null,"Some organizations scope the CSS for their shared Javascript components as a way of ensuring that the look and feel requires that you use the Javascript components. However, other organizations choose to publish global CSS in addition to their Javascript components, to allow for additional flexibility in their look and feel and make it easier to support multiple frameworks."),(0,a.kt)("p",null,"To share Javascript components, use ",(0,a.kt)("a",{parentName:"p",href:"/docs/recommended-setup#cross-microfrontend-imports"},"cross microfrontend imports"),"."),(0,a.kt)("h3",{id:"css-custom-properties"},"CSS Custom Properties"),(0,a.kt)("p",null,"Browsers support ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"},"CSS custom properties")," (sometimes called CSS Variables), which facilitate sharing CSS between microfrontends in an easy way. Any CSS variable applied to the ",(0,a.kt)("inlineCode",{parentName:"p"},":root")," pseudoelement is accessible to any other microfrontend."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* In your styleguide / design system */\n:root {\n  --blue: #0000FF;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* In an individual microfrontend */\n.settings {\n  color: var(--blue);\n}\n")),(0,a.kt)("p",null,"No extra configuration is needed for this to work, as this is built into the browser."),(0,a.kt)("h2",{id:"scoped-css"},"Scoped CSS"),(0,a.kt)("p",null,'For all CSS specific to a particular microfrontend or component, it is preferred to scope the CSS. In general, CSS classes are global by default, but "scoping" refers to encapsulating the CSS such that it only applies to one component or microfrontend. The code snippets below demonstrate some ways that this is possible:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'/*\n  GLOBAL: this css class is not scoped\n  NOT RECOMMENDED\n\n  <div class="settings"></div>\n*/\n.settings {\n  color: blue;\n}\n\n/*\n  Scoped by suffixing all css classes with a unique hash. This is often done by build tools,\n  particularly CSS Modules via Webpack\'s css-loader (https://webpack.js.org/loaders/css-loader/).\n\n  <div class="settings-67f89dd87sf89ds"></div>\n*/\n.settings-67f89dd87sf89ds {\n  color: blue;\n}\n\n/*\n  Scoped by suffixing all CSS classes with a unique hash, and also adding a unique prefix\n  (such as the microfrontend name) to classes. This is a variant of the above, except it\n  ensures no collision of generated hashes. See the localIdentName option to css-loader\n  https://webpack.js.org/loaders/css-loader/#localidentname\n\n  <div class="app1__settings-67f89dd87sf89ds"></div>\n*/\n.app1__settings-67f89dd87sf89ds {\n  color: blue;\n}\n\n/*\n  Scoped via data attribute. This can often be done automatically by build tools (including Vue CLI, Angular, Svelte).\n  Only one component or microfrontend adds this specific data attribute, effectively\n  making the settings class "scoped" to that microfrontend\n\n  <div data-df65s76dfs class="settings"></div>\n*/\n.settings[data-df65s76dfs] {\n  color: blue;\n}\n\n/*\n  Scoped via container selector. Single-spa applications are generally wrapped in a\n  div that looks like this: <div id="single-spa-application:@org-name/project-name"></div>\n\n  We can make our CSS class only apply to one microfrontend by prefixing it with that id.\n\n  Run CSS.escape("single-spa-application:@org-name/project-name"); in the browser console\n  to escape any special characters in the ID, to ensure that the container selector works.\n\n  <div id="single-spa-application:@org-name/project-name">\n    <div class="settings"></div>\n  </div>\n*/\n#single-spa-application\\:\\@org-name\\/project-name .settings {\n  color: blue;\n}\n')),(0,a.kt)("h3",{id:"ui-frameworks"},"UI Frameworks"),(0,a.kt)("p",null,"Many popular UI frameworks have scoping built-in, or large ecosystems of open source libraries that help with scoping:"),(0,a.kt)("h4",{id:"react"},"React"),(0,a.kt)("p",null,"React CSS is quite diverse, with hundreds of options. Here are a few popular options that each result in component-scoped CSS:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/css-modules/css-modules"},"CSS Modules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://styled-components.com/"},"Styled Components")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://emotion.sh/docs/introduction"},"Emotion"))),(0,a.kt)("p",null,"Also, in the single-spa community created Kremling, which scopes CSS while also unmounting it from the DOM when the React component unmounts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/CanopyTax/kremling"},"Kremling"))),(0,a.kt)("h4",{id:"angular"},"Angular"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://angular.io/guide/component-styles"},"Angular Component Styles")," are built into Angular and facilitate scoping CSS to a component (and therefore, to its containing microfrontend)."),(0,a.kt)("h4",{id:"vue"},"Vue"),(0,a.kt)("p",null,"Vue ",(0,a.kt)("a",{parentName:"p",href:"https://vue-loader.vuejs.org/spec.html"},"Single File Components (SFC)")," have built-in support for ",(0,a.kt)("a",{parentName:"p",href:"https://vue-loader.vuejs.org/guide/scoped-css.html"},"Scoped CSS"),"."),(0,a.kt)("h4",{id:"svelte"},"Svelte"),(0,a.kt)("p",null,"Svelte scopes CSS classes by default (",(0,a.kt)("a",{parentName:"p",href:"https://svelte.dev/tutorial/styling"},"Docs"),")."),(0,a.kt)("h3",{id:"postcss-prefix-selector"},"PostCSS Prefix Selector"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://postcss.org/"},"PostCSS")," is a build tool that processes your CSS. It's often used via Webpack with ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/postcss-loader"},"postcss-loader"),"."),(0,a.kt)("p",null,"A particular PostCSS plugin called ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RadValentin/postcss-prefix-selector"},"postcss-prefix-selector")," can be very helpful to scope CSS to a microfrontend.\nWith single-spa, each application is wrapped in a ",(0,a.kt)("inlineCode",{parentName:"p"},'<div id="single-spa-application:@org-name/project-name"></div>'),", which can be used as a prefix to all CSS classes and selectors.\nRun ",(0,a.kt)("inlineCode",{parentName:"p"},'CSS.escape("single-spa-application:@org-name/project-name")')," in the browser console to make sure the HTML id is escaped, then prefix it with ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," so that it matches the id. The resulting string is what you pass into postcss-prefix-selector."),(0,a.kt)("p",null,"The example code above in the ",(0,a.kt)("a",{parentName:"p",href:"#scoped-css"},"Scoped CSS")," section shows the mechanics of how selector prefixing can accomplish scoping, and postcss-prefix-selector can do this automatically to\nall of your CSS. Below is an example PostCSS configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// postcss.config.js\nconst prefixer = require('postcss-prefix-selector');\n\nmodule.exports = {\n  plugins: [\n    prefixer({\n      prefix: \"#single-spa-application\\\\:\\\\@org-name\\\\/project-name\"\n    })\n  ]\n}\n")),(0,a.kt)("h3",{id:"shadow-dom"},"Shadow DOM"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"},"Shadow DOM")," is a browser API for scoping CSS. It is designed to be used by ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components"},"Web Components"),", and is mentioned here as another viable option for scoping CSS."),(0,a.kt)("p",null,"Below are some notes about Shadow DOM that may be relevant to microfrontends:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shadow DOM prevents any global CSS from cascading into the Shadow Root, which means you can't easily have global, shared CSS."),(0,a.kt)("li",{parentName:"ul"},"CSS custom properties from outside the Shadow Root can be used within the Shadow Root."),(0,a.kt)("li",{parentName:"ul"},"The HTML elements within the Shadow DOM are not reachable by CSS selectors outside of the Shadow Root."),(0,a.kt)("li",{parentName:"ul"},"Events that propagate from a Shadow Root are retargeted at each shadow boundary.")),(0,a.kt)("h2",{id:"lazy-loading"},"Lazy Loading"),(0,a.kt)("p",null,'"Loading" CSS refers to downloading the CSS by inserting a ',(0,a.kt)("inlineCode",{parentName:"p"},'<link rel="stylesheet" href="/my-file.css">')," element into the DOM, or by downloading a Javascript file that inserts a ",(0,a.kt)("inlineCode",{parentName:"p"},"<style></style>")," element into the DOM."),(0,a.kt)("p",null,'"Lazy Loading" refers to only inserting the ',(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"<style>")," elements into the DOM once they are needed, instead of all at once. In single-spa, this is during the ",(0,a.kt)("a",{parentName:"p",href:"/docs/building-applications#load"},(0,a.kt)("inlineCode",{parentName:"a"},"load"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/building-applications#mount"},(0,a.kt)("inlineCode",{parentName:"a"},"mount"))," lifecycle functions."),(0,a.kt)("p",null,"Each microfrontend should only load its CSS into the DOM after its Javascript is downloaded. Single-spa lazy loads the Javascript for each microfrontend, by default; therefore, the CSS for the microfrontends will only be loaded as needed."),(0,a.kt)("h2",{id:"unmounting-css"},"Unmounting CSS"),(0,a.kt)("p",null,"In large systems with dozens of microfrontends, it can become important for performance to unmount CSS as you navigate between pages. This is accomplished by removing ",(0,a.kt)("inlineCode",{parentName:"p"},"<style>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," elements from the DOM."),(0,a.kt)("p",null,"By default, most tooling will load and mount the CSS one time and leave it there indefinitely (it never unmounts!). However, some resources exist for unmounting CSS that is no longer being used, and remounting it once it's needed again."),(0,a.kt)("p",null,"To accomplish this, single-spa applications and parcels should remove ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"<style>")," elements inside of their ",(0,a.kt)("a",{parentName:"p",href:"/docs/building-applications#unmount"},"unmount lifecycle function"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// This code is an example of the mechanics of mounting + unmounting + remounting CSS.\n// In practice, this is often done via tools like css-loader, style-loader, or\n// single-spa-css (rather than manually).\nconst style = document.createElement('style');\nstyle.textContent = `.settings {color: blue;}`;\n\nexport const mount = [\n  async () => {\n    document.head.appendChild(styleElement);\n  },\n  reactLifecycles.mount,\n]\n\nexport const unmount = [\n  reactLifecycles.unmount,\n  async () => {\n    styleElement.remove();\n  }\n]\n")),(0,a.kt)("p",null,"To help you accomplish this, this ",(0,a.kt)("a",{parentName:"p",href:"/docs/ecosystem-css#single-spa-css"},"single-spa-css")," library implements mount and unmount functions for you."),(0,a.kt)("h2",{id:"sass-postcss-less-stylus-etc"},"SASS, PostCSS, Less, Stylus, etc"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://sass-lang.com/"},"SASS"),", ",(0,a.kt)("a",{parentName:"p",href:"https://postcss.org/"},"PostCSS"),", ",(0,a.kt)("a",{parentName:"p",href:"https://lesscss.org/"},"Less"),", ",(0,a.kt)("a",{parentName:"p",href:"https://stylus-lang.com/"},"Stylus"),", and other CSS build tools are all compatible with single-spa and microfrontends."),(0,a.kt)("p",null,"These tools run at build-time to produce vanilla CSS files. All of the documentation on this page applies to the output CSS files created by SASS and other CSS preprocessors."),(0,a.kt)("p",null,"Since each microfrontend has its own build, this means that there are multiple SASS (or other preprocessor) builds occurring - one per microfrontend. As a result, SASS variables are not shareable via ",(0,a.kt)("a",{parentName:"p",href:"/docs/recommended-setup#cross-microfrontend-imports"},"cross microfrontend imports"),", since cross microfrontend imports occur at runtime. Instead, to share SASS variables, you'll need to publish them to an NPM registry and install them individually into each microfrontend. Since npm packages are not independently deployable (separately from the packages that use them), changes to the variables will need to be updated and deployed in each microfrontend individually. One thing to note is that ",(0,a.kt)("a",{parentName:"p",href:"#css-custom-properties"},"the browser's implementation of CSS custom properties")," occurs at runtime and so native CSS custom properties are inherently shareable between microfrontends."),(0,a.kt)("p",null,"SASS and other build tools often produce global CSS rather than ",(0,a.kt)("a",{parentName:"p",href:"#scoped-css"},"scoped CSS"),". This behavior can be undesirable in a microfrontends architecture because it can result in CSS class name collisions between your microfrontends. To avoid this, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://blog.bitsrc.io/how-to-use-sass-and-css-modules-with-create-react-app-83fa8b805e5e"},"SASS modules")," (or similar) to scope the CSS."),(0,a.kt)("h2",{id:"webpack-css-resources"},"Webpack CSS resources"),(0,a.kt)("p",null,"Below is a list of commonly used Webpack loaders and plugins that can help with loading CSS:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/loaders/css-loader/#root"},"css-loader")," facilitates using CSS Modules and properly handling ",(0,a.kt)("inlineCode",{parentName:"li"},"@import()")," within CSS files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/loaders/style-loader/#root"},"style-loader")," facilitates mounting CSS via ",(0,a.kt)("inlineCode",{parentName:"li"},"<style>")," elements. This is often used in development mode, but not production."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/loaders/postcss-loader/#root"},"postcss-loader")," is similar to CSS modules, but for more advanced use cases that require PostCSS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webpack.js.org/loaders/sass-loader/#root"},"sass-loader")," can be used to compile SASS to CSS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#single-spa-css"},"single-spa-css")," can be used to automatically detect which CSS files to load during the ",(0,a.kt)("inlineCode",{parentName:"li"},"mount")," lifecycle function of your single-spa application or parcel.")),(0,a.kt)("h2",{id:"single-spa-css"},"single-spa-css"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"single-spa-css")," npm package implements helper functions for loading, mounting, and unmounting CSS. It does this by adding ",(0,a.kt)("inlineCode",{parentName:"p"},'<link rel="stylesheet">')," elements to the DOM to mount the CSS, and removing the ",(0,a.kt)("inlineCode",{parentName:"p"},"<link>")," from the DOM when it's time to unmount the CSS."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install single-spa-css\n\npnpm install single-spa-css\n\nyarn add single-spa-css\n")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import singleSpaCss from 'single-spa-css';\n\nconst cssLifecycles = singleSpaCss({\n  // required: a list of CSS URLs to load\n  // can be omitted if webpackExtractedCss is set to true, do not specify Webpack extracted css files here\n  cssUrls: ['https://example.com/main.css'],\n\n  // optional: defaults to false. This controls whether extracted CSS files from Webpack\n  // will automatically be loaded. This requires using the ExposeRuntimeCssAssetsPlugin,\n  // which is documented below.\n  webpackExtractedCss: false,\n\n  // optional: defaults to true. Indicates whether the <link> element for the CSS will be\n  // unmounted when the single-spa microfrontend is unmounted.\n  shouldUnmount: true,\n\n  // optional: defaults to 5000. The number of milliseconds to wait on the <link> to load\n  // before failing the mount lifecycle.\n  timeout: 5000,\n\n  // optional: defaults to a standard <link rel=\"stylesheet\" href=\"/main.css\"> element\n  // Customize the creation of the link element that is used by single-spa-css by providing a\n  // function. For example, for setting the cross-origin or other HTML attributes on the <link>\n  createLink(url) {\n    const linkEl = document.createElement('link');\n    linkEl.rel = 'stylesheet';\n    linkEl.href = url;\n    return linkEl;\n  },\n});\n\nconst reactLifecycles = singleSpaReact({...})\n\n// Export an array of lifecycles to integrate with a framework's\n// single-spa lifecycles. The order matters.\nexport const bootstrap = [\n  cssLifecycles.bootstrap,\n  reactLifecycles.bootstrap\n]\n\nexport const mount = [\n  // The CSS lifecycles should be before your framework's mount lifecycle,\n  // to avoid a Flash of Unstyled Content (FOUC)\n  cssLifecycles.mount,\n  reactLifecycles.mount\n]\n\nexport const unmount = [\n  // The CSS lifecycles should be after your framework's unmount lifecycle,\n  // to avoid a Flash of Unstyled Content (FOUC)\n  reactLifecycles.unmount,\n  cssLifecycles.unmount\n]\n")),(0,a.kt)("p",null,"If you want some CSS files to unmount, but others to stay mounted, use the following syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const cssLifecycles = singleSpaCss({\n  cssUrls: [\n    {\n      href: "https://example.com/main.css",\n      shouldUnmount: true,\n    },\n    {\n      href: "https://example.com/other.css",\n      shouldUnmount: false,\n    },\n  ],\n});\n')),(0,a.kt)("h3",{id:"webpack-plugin"},"Webpack Plugin"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This plugin currently only supports webpack 5. See ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/single-spa/single-spa-css/issues/7"},"issue 7")," to track webpack 4 support.")),(0,a.kt)("p",null,"single-spa-css includes a Webpack plugin that integrates with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/mini-css-extract-plugin"},"mini-css-extract-plugin"),", which allows you to load CSS files that are extracted and otherwise would not be loaded. The Webpack plugin exposes the names of the extracted CSS files to your bundle under the ",(0,a.kt)("inlineCode",{parentName:"p"},"__webpack_require__.cssAssets")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"__webpack_require__.cssAssetFileName")," variables. The ",(0,a.kt)("inlineCode",{parentName:"p"},"cssAssets")," variable contains the name of the Webpack chunk, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"cssAssetFileName")," function converts the chunk name into the extracted CSS asset's file name. These can be used manually, or you can specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"webpackExtractedCss")," option in single-spa-css to have it automatically mount and unmount those CSS files."),(0,a.kt)("h4",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,"In your Webpack config, add the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const MiniCssExtractPlugin = require("mini-css-extract-plugin");\nconst ExposeRuntimeCssAssetsPlugin = require("single-spa-css/ExposeRuntimeCssAssetsPlugin.cjs");\n\nmodule.exports = {\n  plugins: [\n    new MiniCssExtractPlugin({\n      filename: "[name].css",\n    }),\n    new ExposeRuntimeCssAssetsPlugin({\n      // The filename here must match the filename for the MiniCssExtractPlugin\n      filename: "[name].css",\n    }),\n  ],\n};\n')))}u.isMDXComponent=!0}}]);