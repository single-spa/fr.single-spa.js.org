"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4438],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1769:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],s={id:"layout-api",title:"Layout Engine API",sidebar_label:"API"},l=void 0,p={unversionedId:"layout-api",id:"version-5.x/layout-api",title:"Layout Engine API",description:"The single-spa-layout library exposes several javascript functions as a public API.",source:"@site/versioned_docs/version-5.x/layout-api.md",sourceDirName:".",slug:"/layout-api",permalink:"/docs/layout-api",editUrl:"https://github.com/single-spa/fr.single-spa.js.org/blob/master/website/versioned_docs/version-5.x/layout-api.md",tags:[],version:"5.x",frontMatter:{id:"layout-api",title:"Layout Engine API",sidebar_label:"API"},sidebar:"version-5.x/docs",previous:{title:"Layout Definition",permalink:"/docs/layout-definition"},next:{title:"Overview",permalink:"/docs/recommended-setup"}},u=[{value:"Browser",id:"browser",children:[{value:"constructRoutes",id:"constructroutes",children:[],level:3},{value:"constructApplications",id:"constructapplications",children:[],level:3},{value:"constructLayoutEngine",id:"constructlayoutengine",children:[],level:3},{value:"matchRoute",id:"matchroute",children:[],level:3}],level:2},{value:"Server",id:"server",children:[{value:"constructServerLayout",id:"constructserverlayout",children:[],level:3},{value:"sendLayoutHTTPResponse",id:"sendlayouthttpresponse",children:[],level:3}],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The single-spa-layout library exposes several javascript functions as a public API."),(0,o.kt)("h2",{id:"browser"},"Browser"),(0,o.kt)("p",null,"In the browser, single-spa-layout exports the following functions as named exports."),(0,o.kt)("h3",{id:"constructroutes"},"constructRoutes"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"constructRoutes")," API transforms your ",(0,o.kt)("a",{parentName:"p",href:"/docs/layout-definition/"},"Layout Definition"),' into an opaque "resolved routes" object. We call it "opaque" because the shape of the object is irrelevant, as you will only use it when calling other APIs within single-spa-layout.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { constructRoutes } from 'single-spa-layout';\n\nconst htmlTemplate = document.querySelector('#single-spa-template')\nconst layoutData = {\n  props: {\n    authToken: \"78sf9d0fds89-0fysdiuf6sf8\",\n    loggedInUser: fetch('/api/user')\n  },\n  loaders: {\n    mainContent: `<img src=\"loading.gif\">`,\n    // A single-spa parcel config\n    topNav: singleSpaReact({...})\n  }\n};\n\nconst resolvedRoutes = constructRoutes(htmlTemplate, layoutData)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"routesConfig")," (required): Routes config is a ",(0,o.kt)("a",{parentName:"li",href:"/docs/layout-definition/#json-layouts"},"JSON Layout Definition"),", an ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"},"HTMLElement"),", or a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/inikulin/parse5"},"parse5 HTML element"),". If it is an HTMLElement, it must be a ",(0,o.kt)("inlineCode",{parentName:"li"},"<single-spa-router>")," element or a ",(0,o.kt)("inlineCode",{parentName:"li"},"<template>")," that contains a single-spa-router element."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"layoutData")," (optional): Layout data is an optionally provided object that defines ",(0,o.kt)("a",{parentName:"li",href:"/docs/layout-definition/#props"},"props")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/layout-definition/#props"},"loaders")," for ",(0,o.kt)("a",{parentName:"li",href:"/docs/layout-definition/#html-layouts"},"HTML Layouts"),". You can omit it if using a ",(0,o.kt)("a",{parentName:"li",href:"/docs/layout-definition/#json-layout"},"JSON Layout")," or if you do not need to define props or loaders in your HTML Layout. The layoutData object should have top level properties ",(0,o.kt)("inlineCode",{parentName:"li"},"props")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"loaders")," that are each objects. Each of those objects' keys is the name of a prop or loader and its corresponding value.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return value")),(0,o.kt)("p",null,"An opaque ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvedRoutes")," object. It is opaque because you will only use the object when calling other single-spa-layout APIs and do not need to read or modify the resolvedRoutes."),(0,o.kt)("h3",{id:"constructapplications"},"constructApplications"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"constructApplications")," API transforms your ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvedRoutes")," into ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration#registering-applications"},"single-spa application registration objects"),". These application registration objects are then used to call ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/#registerapplication"},"singleSpa.registerApplication()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { constructRoutes, constructApplications } from 'single-spa-layout';\nimport { registerApplication } from 'single-spa';\n\nconst resolvedRoutes = constructRoutes(...)\nconst applications = constructApplications({\n  routes: resolvedRoutes,\n  loadApp: (app) => System.import(app.name)\n})\napplications.forEach(registerApplication);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"constructApplications")," accepts a single object as an argument, with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"routes")," (required): The opaque ",(0,o.kt)("inlineCode",{parentName:"li"},"resolvedRoutes")," object returned from ",(0,o.kt)("inlineCode",{parentName:"li"},"constructRoutes"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"loadApp")," (required): A function that is given an application object and must return a ",(0,o.kt)("a",{parentName:"li",href:"/docs/configuration/#loading-function-or-application"},"loading function"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return value")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"constructApplications")," returns an array of ",(0,o.kt)("a",{parentName:"p",href:"/docs/configuration/#registering-applications"},"single-spa registration objects"),"."),(0,o.kt)("h3",{id:"constructlayoutengine"},"constructLayoutEngine"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"constructLayoutEngine")," API transforms your ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvedRoutes")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"applications")," into a ",(0,o.kt)("inlineCode",{parentName:"p"},"layoutEngine")," object. The layout engine is responsible for creating, destroying, and rearranging dom elements during route transitions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { constructRoutes, constructApplications, constructLayoutEngine } from 'single-spa-layout';\nimport { registerApplication, start } from 'single-spa';\n\nconst resolvedRoutes = constructRoutes(...);\nconst applications = constructApplications(...);\nconst layoutEngine = constructLayoutEngine({routes: resolvedRoutes, applications: applications});\n\nlayoutEngine.isActive(); // true\nlayoutEngine.deactivate();\nlayoutEngine.activate();\n\napplications.forEach(registerApplication);\nstart();\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"constructLayoutEngine")," accepts a single object as an argument, with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"routes")," (required): The opaque ",(0,o.kt)("inlineCode",{parentName:"li"},"resolvedRoutes")," object returned from ",(0,o.kt)("inlineCode",{parentName:"li"},"constructRoutes"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"applications")," (required): The array of ",(0,o.kt)("a",{parentName:"li",href:"/docs/configuration/#registering-applications"},"application registration objects")," returned from ",(0,o.kt)("inlineCode",{parentName:"li"},"constructApplications"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"active")," (optional): A boolean that indicates whether the layout engine should start out active or not. Defaults to true.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"layoutEngine")," object, with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"isActive"),": a function that accepts no arguments and returns a boolean indicating whether the layout engine is active or not. When active, the layout engine will change the DOM during route transitions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"activate"),": a function that accepts no arguments and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". Calling this function activates the layout engine, which includes setting up routing event listeners so that the layout engine can change the DOM during route transitions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"deactivate"),": a function that accepts no arguments and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". Calling this function deactivates the layout engine, which includes tearing down all routing event listeners so that the layout engine no longer changes the DOM during route transitions."))),(0,o.kt)("h3",{id:"matchroute"},"matchRoute"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"matchRoute")," API primarily exists for server rendering. It returns a filtered ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvedRoutes")," object that contains only the routes that match a particular string path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { constructRoutes, matchRoute } from \'single-spa-layout\';\n\nconst resolvedRoutes = constructRoutes(...);\n\nconst settingsRoutes = matchRoute(resolvedRoutes, "/settings")\nconst dashboardRoutes = matchRoute(resolvedRoutes, "/dashboard")\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"routes")," (required): The opaque ",(0,o.kt)("inlineCode",{parentName:"li"},"resolvedRoutes")," object returned from ",(0,o.kt)("inlineCode",{parentName:"li"},"constructRoutes"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," (required): A string path representing the URL fragment to match the routes with. Note that the path is not a full URL - it only is the pathname part of a browser's URL. In server rendering contexts, this is often available as ",(0,o.kt)("inlineCode",{parentName:"li"},"req.url"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,"An opaque ",(0,o.kt)("inlineCode",{parentName:"p"},"resolvedRoutes")," object. It is opaque because you will only use the object when calling other single-spa-layout APIs and do not need to read or modify the resolvedRoutes."),(0,o.kt)("h2",{id:"server"},"Server"),(0,o.kt)("p",null,"In NodeJS, single-spa-layout exports the following functions as named exports. Note that the code is published in ESM and therefore won't work in old versions of Node. Additionally, single-spa-layout uses ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v14.x/docs/api/packages.html#packages_package_entry_points"},"package entry points"),", which are only supported in newer versions of Node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Works in newer versions of NodeJS\nimport 'single-spa-layout';\n\n// Works in older versions of NodeJS\nimport 'single-spa-layout/dist/esm/single-spa-layout-server.min.js';\n")),(0,o.kt)("h3",{id:"constructserverlayout"},"constructServerLayout"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"constructServerLayout")," api parses an HTML file and prepares it for rendering. This should be done once when the NodeJS server boots up, so the same serverLayout can be reused for all incoming HTTP requests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { constructServerLayout } from \'single-spa-layout/server\';\n\nconst serverLayout = constructServerLayout({\n  // filepath is resolved relative to the cwd (current working directory)\n  // of the NodeJS process.\n  filePath: "server/views/index.html"\n})\n\n// Alternatively, provide the html as a string\nconst serverLayout = constructServerLayout({\n  html: `\n    <html>\n      <head>\n        <single-spa-router>\n          <application name="nav"></application>\n        </single-spa-router>\n      </head>\n    </html>\n  `\n})\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"constructServerLayout")," accepts a single object argument, with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"filePath")," (optional): A string file path to the HTML template file. Relative paths are resolved relative to ",(0,o.kt)("inlineCode",{parentName:"li"},"process.cwd()"),". If ",(0,o.kt)("inlineCode",{parentName:"li"},"filePath")," is omitted, ",(0,o.kt)("inlineCode",{parentName:"li"},"html")," must be provided."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"html")," (optional): An HTML string containing the HTML template. If ",(0,o.kt)("inlineCode",{parentName:"li"},"html")," is omitted, ",(0,o.kt)("inlineCode",{parentName:"li"},"filePath")," must be provided.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"constructServerLayout")," returns an opaque ServerLayout object. This object is then provided to ",(0,o.kt)("inlineCode",{parentName:"p"},"sendLayoutHTTPResponse"),"."),(0,o.kt)("h3",{id:"sendlayouthttpresponse"},"sendLayoutHTTPResponse"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sendLayoutHTTPResponse")," api sends HTTP headers and HTML content to the browser. It streams a full HTML file to the browser, so that the browser shows content as soon as it is available, instead of waiting for the entire HTML document. This is done by providing a ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_class_http_serverresponse"},"ServerResponse object"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"res")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"sendLayoutHTTPResponse")," ."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { constructServerLayout, sendLayoutHTTPResponse } from \'single-spa-layout\';\nimport http from \'http\';\n\nconst serverLayout = constructServerLayout({...})\n\nhttp.createServer((req, res) => {\n  sendLayoutHTTPResponse({\n    res,\n    serverLayout,\n    urlPath: req.path,\n    async renderApplication({ appName, propsPromise }) {\n      return {\n        assets: `<link rel="stylesheet" href="/my-styles.css">`,\n        content: `<button>${appName} app</button>`\n      }\n    },\n    async retrieveApplicationHeaders({ appName, propsPromise }) {\n      return {\n        \'x-custom-header\': \'value\'\n      }\n    },\n    async renderFragment(fragmentName) {\n      return `<script type="systemjs-importmap">{"imports": {}}<\/script>`;\n    },\n    async retrieveProp(propName) {\n      return "prop value";\n    },\n    assembleFinalHeaders(allHeaders) {\n      allHeaders.forEach(({appProps, appHeaders}) => {\n      })\n\n      return {}\n    }\n  })\n})\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sendLayoutHTTPResponse")," accepts one object argument, with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"res")," (required): A ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/http.html#http_class_http_serverresponse"},"ServerResponse")," object. Express ",(0,o.kt)("inlineCode",{parentName:"li"},"res")," objects (and likely other framework-specific objects) are supported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"serverLayout")," (required): The opaque server layout object returned from ",(0,o.kt)("inlineCode",{parentName:"li"},"constructServerLayout"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"urlPath")," (required): A string url path that will be used as the current route. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"/settings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assembleFinalHeaders")," (required): A function that is passed all application headers and returns the final HTTP headers sent to the browser. The application headers are collected from the ",(0,o.kt)("inlineCode",{parentName:"li"},"retrieveApplicationHeaders")," function into an array of AppHeaders objects. Each AppHeaders object has an ",(0,o.kt)("inlineCode",{parentName:"li"},"appName")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"appHeaders")," object, where the appName is a string and the ",(0,o.kt)("inlineCode",{parentName:"li"},"appHeaders")," is a headers object. ",(0,o.kt)("inlineCode",{parentName:"li"},"assembleFinalHeaders")," must return a headers object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"renderApplication")," (optional): A function that is given information about a single-spa application and should return the HTML content (and, optionally, the assets) for that application. This function is required if a single-spa application matches the current route. The argument passed to the renderApplication function is an object with an ",(0,o.kt)("inlineCode",{parentName:"li"},"appName")," string and a ",(0,o.kt)("inlineCode",{parentName:"li"},"propsPromise")," promise. The ",(0,o.kt)("inlineCode",{parentName:"li"},"propsPromise")," resolves with the props for the application. The function can return an object, string, ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/stream.html#stream_readable_streams"},"Readable stream"),", or a Promise. Returned objects must be of format ",(0,o.kt)("inlineCode",{parentName:"li"},"type ApplicationRenderResult = { assets: Readable | Promise<Readable> | string | Promise<string>, content: Readable | Promise<Readable> | string | Promise<string> }"),". Returned promises must resolve with an ApplicationRenderResult object, string or Readable stream. The ",(0,o.kt)("inlineCode",{parentName:"li"},"assets")," returned from renderApplication are rendered into ",(0,o.kt)("a",{parentName:"li",href:"/docs/layout-definition#assets"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"<assets>")," element")," in your layout definition."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"retrieveApplicationHeaders")," (optional): A function that is given information about a single-spa application and should return the HTTP response headers for that application. This function is required if a single-spa application matches the current route. The argument passed to the retrieveApplicationHeaders function is an object with an ",(0,o.kt)("inlineCode",{parentName:"li"},"appName")," string and a ",(0,o.kt)("inlineCode",{parentName:"li"},"propsPromise")," promise. The ",(0,o.kt)("inlineCode",{parentName:"li"},"propsPromise")," resolves with the props for the application. The function can a headers object or a Promise that resolves with a headers object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"renderFragment")," (optional): A function that is given a fragment name and returns the HTML content for that fragment. This corresponds to ",(0,o.kt)("inlineCode",{parentName:"li"},"<fragment>")," elements in the layout definition, and is required if the the layout definition contains a ",(0,o.kt)("inlineCode",{parentName:"li"},"<fragment>")," element. The ",(0,o.kt)("inlineCode",{parentName:"li"},"renderFragment")," function can return a string, ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/api/stream.html#stream_readable_streams"},"Readable stream"),", or a Promise. Returned promises must resolve with a string or Readable stream."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"retrieveProp")," (optional): A function that is given a propName and returns the prop's value. This function is required if any rendered applications have props. ",(0,o.kt)("inlineCode",{parentName:"li"},"retrieveProp")," can return a value, or a promise that resolves with a value.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Return Value")),(0,o.kt)("p",null,"A promise that resolves when headers (but not necessarily HTTP response body) are sent."))}d.isMDXComponent=!0}}]);