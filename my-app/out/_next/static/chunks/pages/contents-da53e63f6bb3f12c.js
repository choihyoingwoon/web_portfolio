(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86],{4099:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contents",function(){return r(3574)}])},1316:function(e,t){"use strict";t.Z={src:"/_next/static/media/hero-devices.2b2817dd.png",height:3159,width:7791,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AZHM2wBN8iQ9hquFv/vwBfBkQHae1PIBkWl1OgDq6rbnAQD6fDWYuF2G147vRPcQ/QAqdRf8SSEF9g8BC+IXGBMtAYDAu4v12tpMajdl0v8P+yuuDcshLf4aCikEEZH67/PNgBcvvKatb0UAAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}},8530:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return u}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}}let o=globalThis.AsyncLocalStorage;function u(){return o?new o:new n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5182:function(e,t,r){"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return n}}),r(8754),r(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1414:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return p},useSearchParams:function(){return b},usePathname:function(){return v},ServerInsertedHTMLContext:function(){return a.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return a.useServerInsertedHTML},useRouter:function(){return h},useParams:function(){return m},useSelectedLayoutSegments:function(){return y},useSelectedLayoutSegment:function(){return g},redirect:function(){return c.redirect},notFound:function(){return s.notFound}});let n=r(7294),o=r(4224),u=r(8463),i=r(5182),l=r(2526),a=r(3014),c=r(8781),s=r(8147),d=Symbol("internal for urlsearchparams readonly");function f(){return Error("ReadonlyURLSearchParams cannot be modified")}class p{[Symbol.iterator](){return this[d][Symbol.iterator]()}append(){throw f()}delete(){throw f()}set(){throw f()}sort(){throw f()}constructor(e){this[d]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function b(){(0,i.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(u.SearchParamsContext),t=(0,n.useMemo)(()=>e?new p(e):null,[e]);return t}function v(){return(0,i.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(u.PathnameContext)}function h(){(0,i.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function m(){(0,i.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext);return e?function e(t,r){void 0===r&&(r={});let n=t[1];for(let t of Object.values(n)){let n=t[0],o=Array.isArray(n),u=o?n[1]:n;if(!u||u.startsWith("__PAGE__"))continue;let i=o&&("c"===n[2]||"oc"===n[2]);i?r[n[0]]=n[1].split("/"):o&&(r[n[0]]=n[1]),r=e(t,r)}return r}(e.tree):null}function y(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function e(t,r,n,o){let u;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)u=t[1][r];else{var i;let e=t[1];u=null!=(i=e.children)?i:Object.values(e)[0]}if(!u)return o;let a=u[0],c=(0,l.getSegmentValue)(a);return!c||c.startsWith("__PAGE__")?o:(o.push(c),e(u,r,!1,o))}(t,e)}function g(e){void 0===e&&(e="children"),(0,i.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=y(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return n},isNotFoundError:function(){return o}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return(null==e?void 0:e.digest)===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8781:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return l},redirect:function(){return a},isRedirectError:function(){return c},getURLFromRedirectError:function(){return s},getRedirectTypeFromError:function(){return d}});let u=r(4505),i="NEXT_REDIRECT";function l(e,t){let r=Error(i);r.digest=i+";"+t+";"+e;let n=u.requestAsyncStorage.getStore();return n&&(r.mutableCookies=n.mutableCookies),r}function a(e,t){throw void 0===t&&(t="replace"),l(e,t)}function c(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,r,n]=e.digest.split(";",3);return t===i&&("replace"===r||"push"===r)&&"string"==typeof n}function s(e){return c(e)?e.digest.split(";",3)[2]:null}function d(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=n||(n={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4505:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let n=r(8530),o=(0,n.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2526:function(e,t){"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3014:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return u},useServerInsertedHTML:function(){return i}});let n=r(1757),o=n._(r(7294)),u=o.default.createContext(null);function i(e){let t=(0,o.useContext)(u);t&&t(e)}},3574:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(7294);r(5929);var u=r(89),i=r(5675),l=r.n(i),a=r(9332),c=r(1316),s=r(7516);let d={initial:{opacity:0,y:50},animate:{opacity:1,y:0}};t.default=()=>{let e=(0,a.useRouter)(),[t,r]=(0,o.useState)(!1),[i,f]=(0,o.useState)(!1);return(0,n.jsxs)("div",{className:"w-full h-screen bg-[#7510F7] px-[10rem] text-[6vw] overflow-x-hidden overflow-y-hidden",children:[(0,n.jsxs)(u.E.button,{initial:"initial",animate:"animate",variants:d,transition:{duration:1},className:"absolute left-10 top-[3vh] flex items-center text-[1vw] text-white font-bold",onClick:()=>{e.back()},children:[(0,n.jsx)(s.YiX,{size:30}),(0,n.jsx)("p",{className:"ml-2",children:"back"})]}),(0,n.jsxs)("div",{className:"absolute top-[20%] font-bold text-white",children:[(0,n.jsx)(u.E.button,{whileHover:{scale:1.1,color:"blue"},initial:"initial",animate:"animate",variants:d,transition:{duration:1},className:"animate__animated ".concat(t?"animate__backOutRight":""," mb-8"),onClick:()=>{r(!0),setTimeout(()=>{e.push("/about")},500)},children:(0,n.jsx)(u.E.div,{whileHover:{scale:1.1,color:"rgb(91, 233, 185)"},children:"About"})}),(0,n.jsx)("br",{}),(0,n.jsx)(u.E.button,{initial:"initial",animate:"animate",variants:d,transition:{duration:1,delay:.6},className:"animate__animated ".concat(i?"animate__backOutRight":""),onClick:()=>{f(!0),setTimeout(()=>{e.push("/project")},500)},children:(0,n.jsx)(u.E.div,{whileHover:{scale:1.1,color:"rgb(91, 233, 185)"},children:"Project"})})]}),(0,n.jsx)("div",{className:"absolute bottom-0 right-0 w-1/2",children:(0,n.jsx)(l(),{src:c.Z,alt:"computer",layout:"responsive"})})]})}},5929:function(){},9332:function(e,t,r){e.exports=r(1414)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return a}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=n.createContext&&n.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function a(e){return function(t){return n.createElement(c,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,o=e.attr,u=e.size,a=e.title,c=l(e,["attr","size","title"]),s=u||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==u?n.createElement(u.Consumer,null,function(e){return t(e)}):t(o)}}},function(e){e.O(0,[874,675,89,923,774,888,179],function(){return e(e.s=4099)}),_N_E=e.O()}]);