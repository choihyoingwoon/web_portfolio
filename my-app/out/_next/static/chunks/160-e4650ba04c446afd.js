(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[160],{8530:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return u}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}}let o=globalThis.AsyncLocalStorage;function u(){return o?new o:new n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5182:function(e,t,r){"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return n}}),r(8754),r(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1414:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return p},useSearchParams:function(){return b},usePathname:function(){return y},ServerInsertedHTMLContext:function(){return a.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return a.useServerInsertedHTML},useRouter:function(){return _},useParams:function(){return v},useSelectedLayoutSegments:function(){return g},useSelectedLayoutSegment:function(){return h},redirect:function(){return c.redirect},notFound:function(){return f.notFound}});let n=r(7294),o=r(4224),u=r(8463),l=r(5182),i=r(2526),a=r(3014),c=r(8781),f=r(8147),s=Symbol("internal for urlsearchparams readonly");function d(){return Error("ReadonlyURLSearchParams cannot be modified")}class p{[Symbol.iterator](){return this[s][Symbol.iterator]()}append(){throw d()}delete(){throw d()}set(){throw d()}sort(){throw d()}constructor(e){this[s]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e)}}function b(){(0,l.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(u.SearchParamsContext),t=(0,n.useMemo)(()=>e?new p(e):null,[e]);return t}function y(){return(0,l.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(u.PathnameContext)}function _(){(0,l.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function v(){(0,l.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext);return e?function e(t,r){void 0===r&&(r={});let n=t[1];for(let t of Object.values(n)){let n=t[0],o=Array.isArray(n),u=o?n[1]:n;if(!u||u.startsWith("__PAGE__"))continue;let l=o&&("c"===n[2]||"oc"===n[2]);l?r[n[0]]=n[1].split("/"):o&&(r[n[0]]=n[1]),r=e(t,r)}return r}(e.tree):null}function g(e){void 0===e&&(e="children"),(0,l.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function e(t,r,n,o){let u;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)u=t[1][r];else{var l;let e=t[1];u=null!=(l=e.children)?l:Object.values(e)[0]}if(!u)return o;let a=u[0],c=(0,i.getSegmentValue)(a);return!c||c.startsWith("__PAGE__")?o:(o.push(c),e(u,r,!1,o))}(t,e)}function h(e){void 0===e&&(e="children"),(0,l.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=g(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8147:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return n},isNotFoundError:function(){return o}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return(null==e?void 0:e.digest)===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8781:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return i},redirect:function(){return a},isRedirectError:function(){return c},getURLFromRedirectError:function(){return f},getRedirectTypeFromError:function(){return s}});let u=r(4505),l="NEXT_REDIRECT";function i(e,t){let r=Error(l);r.digest=l+";"+t+";"+e;let n=u.requestAsyncStorage.getStore();return n&&(r.mutableCookies=n.mutableCookies),r}function a(e,t){throw void 0===t&&(t="replace"),i(e,t)}function c(e){if("string"!=typeof(null==e?void 0:e.digest))return!1;let[t,r,n]=e.digest.split(";",3);return t===l&&("replace"===r||"push"===r)&&"string"==typeof n}function f(e){return c(e)?e.digest.split(";",3)[2]:null}function s(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",3)[1]}(o=n||(n={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4505:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return o}});let n=r(8530),o=(0,n.createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2526:function(e,t){"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3014:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return u},useServerInsertedHTML:function(){return l}});let n=r(1757),o=n._(r(7294)),u=o.default.createContext(null);function l(e){let t=(0,o.useContext)(u);t&&t(e)}},9332:function(e,t,r){e.exports=r(1414)},4305:function(e,t,r){"use strict";r.d(t,{n:function(){return u}});var n=r(7294);let o=(e,t,r)=>{let n=t-e;return((r-e)%n+n)%n+e};function u(...e){let t=(0,n.useRef)(0),[r,l]=(0,n.useState)(e[t.current]),i=(0,n.useCallback)(r=>{t.current="number"!=typeof r?o(0,e.length,t.current+1):r,l(e[t.current])},[e.length,...e]);return[r,i]}}}]);