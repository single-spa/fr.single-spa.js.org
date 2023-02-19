"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6266],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8985:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],l={id:"ecosystem-react",title:"single-spa-react",sidebar_label:"React"},p=void 0,s={unversionedId:"ecosystem-react",id:"version-4.x/ecosystem-react",title:"single-spa-react",description:"Build Status",source:"@site/versioned_docs/version-4.x/ecosystem-react.md",sourceDirName:".",slug:"/ecosystem-react",permalink:"/docs/4.x/ecosystem-react",editUrl:"https://github.com/single-spa/fr.single-spa.js.org/blob/master/website/versioned_docs/version-4.x/ecosystem-react.md",tags:[],version:"4.x",frontMatter:{id:"ecosystem-react",title:"single-spa-react",sidebar_label:"React"},sidebar:"version-4.x/docs",previous:{title:"Overview",permalink:"/docs/4.x/ecosystem"},next:{title:"Vue",permalink:"/docs/4.x/ecosystem-vue"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Quickstart",id:"quickstart",children:[],level:2},{value:"Options",id:"options",children:[],level:2},{value:"Notes",id:"notes",children:[],level:2},{value:"SingleSpaContext",id:"singlespacontext",children:[],level:2},{value:"Parcels",id:"parcels",children:[{value:"Parcel props",id:"parcel-props",children:[],level:4},{value:"Examples",id:"examples",children:[],level:4}],level:2},{value:"Create React App",id:"create-react-app",children:[],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://travis-ci.com/single-spa/single-spa-react"},(0,r.kt)("img",{parentName:"a",src:"https://travis-ci.com/single-spa/single-spa-react.svg?branch=master",alt:"Build Status"}))),(0,r.kt)("p",null,"single-spa-react is a helper library that helps implement ",(0,r.kt)("a",{parentName:"p",href:"configuration#registering-applications"},"single-spa registered application")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.x/building-applications#registered-application-lifecycle"},"lifecycle functions")," (bootstrap, mount and unmount) for use with ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React"),". Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/single-spa/single-spa-react"},"single-spa-react github"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save single-spa-react\n\n# or\nyarn add single-spa-react\n")),(0,r.kt)("p",null,"Alternatively, you can use single-spa-react by adding ",(0,r.kt)("inlineCode",{parentName:"p"},'<script src="https://unpkg.com/single-spa-react"><\/script>')," and accessing the singleSpaReact global variable."),(0,r.kt)("h2",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,'Your bundler\'s "entry file" should look like this, which allows your application to be downloaded as an in-browser ES module.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport rootComponent from './path-to-root-component.js';\n// Note that SingleSpaContext is a react@16.3 (if available) context that provides the singleSpa props\nimport singleSpaReact, {SingleSpaContext} from 'single-spa-react';\n\nconst reactLifecycles = singleSpaReact({\n  React,\n  ReactDOM,\n  rootComponent,\n});\n\nexport const bootstrap = reactLifecycles.bootstrap;\nexport const mount = reactLifecycles.mount;\nexport const unmount = reactLifecycles.unmount;\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"All options are passed to single-spa-react via the ",(0,r.kt)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",(0,r.kt)("inlineCode",{parentName:"p"},"singleSpaReact(opts)"),". The following options are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"React"),": (required) The main React object, which is generally either exposed onto the window or is available via ",(0,r.kt)("inlineCode",{parentName:"li"},"require('react')")," ",(0,r.kt)("inlineCode",{parentName:"li"},"import React from 'react'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ReactDOM"),": (required) The main ReactDOMbject, which is available via ",(0,r.kt)("inlineCode",{parentName:"li"},"require('react-dom')")," ",(0,r.kt)("inlineCode",{parentName:"li"},"import ReactDOM from 'react-dom'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rootComponent"),": (required) The top level React component which will be rendered. Can be omitted only if ",(0,r.kt)("inlineCode",{parentName:"li"},"loadRootComponent")," is provided."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loadRootComponent"),": (optional) A loading function that returns a promise that resolves with the parcel. This takes the place of the ",(0,r.kt)("inlineCode",{parentName:"li"},"rootComponent")," opt, when provided. It is intended to help people\nwho want to lazy load the source code for their root component. The source code will be lazy loaded during the bootstrap lifecycle."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"suppressComponentDidCatchWarning"),": (optional) A boolean that indicates if single-spa-react should warn when the rootComponent does not implement componentDidCatch. Defaults to false."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domElementGetter"),": (optional) A function that takes in no arguments and returns a DOMElement. This dom element is where the\nReact application will be bootstrapped, mounted, and unmounted. Note that this opt can be omitted. When omitted, the ",(0,r.kt)("inlineCode",{parentName:"li"},"domElementGetter")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"domElement"),(0,r.kt)("a",{parentName:"li",href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#custom-props"},"custom single-spa props")," are used.\nTo use those, do ",(0,r.kt)("inlineCode",{parentName:"li"},"singleSpa.registerApplication(name, app, activityFn, {domElementGetter: function() {...}})")," or\n",(0,r.kt)("inlineCode",{parentName:"li"},"singleSpa.registerApplication(name, app, activityFn, {domElement: document.getElementById(...)})"),". If no dom element can be found through any\nof those methods, then a container div will be created and appended to document.body, by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parcelCanUpdate"),": (optional) A boolean that controls whether an update lifecycle will be created for the returned parcel. Note that option does not impact single-spa applications, but only parcels.\nIt is true by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"renderType"),": (optional) ENUM of one of the following: ","[ 'render', 'hydrate', 'createRoot', 'createBlockingRoot' ]",". Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"'render'"),". Allows you to choose which ReactDOM render method you want to use for your application.")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("p",null,"For react@>=16, it is best practice to have each single-spa application's root application implement componentDidCatch in order to avoid\nthe entire application unmounting unexpectedly when an error occurs. single-spa-react will warn to the console if componentDidCatch is not\nimplemented. See ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html"},"https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html")," for more details."),(0,r.kt)("h2",{id:"singlespacontext"},"SingleSpaContext"),(0,r.kt)("h2",{id:"parcels"},"Parcels"),(0,r.kt)("p",null,"single-spa-react can also be used to create a single-spa parcel (instead of a single-spa application). To do so, simply call singleSpaReact() the same as for an application, except without a\ndomElementGetter (since those are provided by the code that will mount the parcel)."),(0,r.kt)("p",null,"Additionally, single-spa-react provides a ",(0,r.kt)("inlineCode",{parentName:"p"},"<Parcel>")," component to make using framework agnostic single-spa parcels easier. This allows you to put the parcel into your render method's jsx, instead of having to implement componentDidMount and componentWillUnmount.\nYou can use the Parcel component either by npm installing the library and importing ",(0,r.kt)("inlineCode",{parentName:"p"},"single-spa-react/parcel")," or by adding ",(0,r.kt)("inlineCode",{parentName:"p"},'<script src="https://unpkg.com/single-spa-react/parcel"><\/script>')," and then accessing the Parcel component with ",(0,r.kt)("inlineCode",{parentName:"p"},"window.Parcel.default"),"."),(0,r.kt)("h4",{id:"parcel-props"},"Parcel props"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"config"),' (required): Either a single-spa parcel config object, or a "loading function" that returns a Promise that resolves with the parcel config.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wrapWith")," (optional): A string ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/tagName"},"tagName"),".",(0,r.kt)("inlineCode",{parentName:"li"},"<Parcel>")," will create a dom node of that type for the parcel to be mounted into. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"div")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appendTo")," (optional): A dom element to append the parcel to. By default, this is not needed because the parcel will be mounted in the DOM that the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Parcel>")," component was rendered into. Useful for appending parcels to document.body or other separate parts of the dom."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mountParcel")," (sometimes required, sometimes not): The ",(0,r.kt)("inlineCode",{parentName:"li"},"mountParcel")," function provided by single-spa. In general, it is preferred to use an application's mountParcel function instead of the\nsingle-spa's root mountParcel function, so that single-spa can keep track of the parent-child relationship and automatically unmount the application's parcels when the application unmounts.\nNote that if the ",(0,r.kt)("inlineCode",{parentName:"li"},"<Parcel>")," component is being rendered by a single-spa application that uses single-spa-react, it is ",(0,r.kt)("strong",{parentName:"li"},"unnecessary")," to pass in the prop, since ",(0,r.kt)("inlineCode",{parentName:"li"},"<Parcel>")," can get the prop\nfrom ",(0,r.kt)("a",{parentName:"li",href:"#singlespacontext"},"SingleSpaContext")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"handleError")," (optional): A function that will be called with errors thrown by the parcel. If not provided, errors will be thrown on the window, by default."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parcelDidMount")," (optional): A function that will be called when the parcel finishes loading and mounting.")),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import Parcel from \'single-spa-react/parcel\'\nimport * as parcelConfig from \'./my-parcel.js\'\n\n// config is required. The parcel will be mounted inside of the\n// of a div inside of the react component tree\n<Parcel\n  config={parcelConfig}\n\n  wrapWith="div"\n  handleError={err => console.error(err)}\n\n  customProp1="customPropValue2"\n  customProp2="customPropValue2"\n/>\n\n// If you pass in an appendTo prop, the parcel will be mounted there instead of\n// to a dom node inside of the current react component tree\n<Parcel>\n  config={parcelConfig}\n  wrapWith="div"\n  appendTo={document.body}\n/>\n\n// You can also pass in a "loading function" as the config.\n// The loading function must return a promise that resolves with the parcel config.\n// The parcel will be mounted once the promise resolves.\n<Parcel\n  config={() => import(\'./my-parcel.js\')}\n  wrapWith="div"\n/>\n\n// If you are rendering the Parcel component from a single-spa application, you do not need to pass a mountParcel prop.\n// But if you have a separate react component tree that is not rendered by single-spa-react, you **must** pass in a mountParcel prop\n// In general, it is preferred to use an application\'s mountParcel function instead of the single-spa\'s root mountParcel function,\n// so that single-spa can keep track of the parent-child relationship and automatically unmount the application\'s parcels when the application\n// unmounts\n<Parcel\n  mountParcel={singleSpa.mountParcel}\n  config={parcelConfig}\n  wrapWith="div"\n/>\n')),(0,r.kt)("h2",{id:"create-react-app"},"Create React App"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://single-spa.js.org/docs/faq.html#create-react-app"},"FAQ for CRA")))}m.isMDXComponent=!0}}]);