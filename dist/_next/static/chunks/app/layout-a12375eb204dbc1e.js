(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{526:function(e,t,n){Promise.resolve().then(n.bind(n,5829)),Promise.resolve().then(n.bind(n,8741)),Promise.resolve().then(n.t.bind(n,3994,23)),Promise.resolve().then(n.t.bind(n,5528,23))},5829:function(e,t,n){"use strict";n.r(t),n.d(t,{GlobalStyle:function(){return o}});var r=n(230),l=n(802);function _templateObject(){let e=(0,r._)(["\n* {\n    scroll-behavior: smooth;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    text-decoration: none;\n    border: none;\n    list-style: none;\n}\n\n:root {\n    --color-purple: #491023;\n    --color-gold: #A1793C;\n    --color-text: #4F4A4A;\n}\n"]);return _templateObject=function(){return e},e}let o=(0,l.vJ)(_templateObject())},8741:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return StyledComponentsRegistry}});var r=n(7437),l=n(2265),o=n(4033),a=n(802);function StyledComponentsRegistry(e){let{children:t}=e,[n]=(0,l.useState)(()=>new a.qH);return(0,o.useServerInsertedHTML)(()=>{let e=n.getStyleElement();return n.instance.clearTag(),(0,r.jsx)(r.Fragment,{children:e})}),(0,r.jsx)(r.Fragment,{children:t})}},863:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return isEqualNode},default:function(){return initHeadManager}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function reactElementToDOM(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?l[o]=!!n[e]:l.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:a}=n;return a?l.innerHTML=a.__html||"":o&&(l.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),l}function isEqualNode(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function initHeadManager(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),o=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var a;(null==n?void 0:null==(a=n.tagName)?void 0:a.toLowerCase())===e&&o.push(n)}let i=t.map(reactElementToDOM).filter(e=>{for(let t=0,n=o.length;t<n;t++){let n=o[t];if(isEqualNode(n,e))return o.splice(t,1),!1}return!0});o.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),i.forEach(e=>n.insertBefore(e,r)),r.content=(l-o.length+i.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2389:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return handleClientScriptLoad},initScriptLoader:function(){return initScriptLoader},default:function(){return p}});let r=n(1024),l=n(8533),o=r._(n(4887)),a=l._(n(2265)),i=n(1852),u=n(863),c=n(2389),d=new Map,s=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],insertStylesheets=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},loadScript=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:o,children:a="",strategy:i="afterInteractive",onError:c,stylesheets:p}=e,y=n||t;if(y&&s.has(y))return;if(d.has(t)){s.add(y),d.get(t).then(r,c);return}let afterLoad=()=>{l&&l(),s.add(y)},m=document.createElement("script"),b=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),afterLoad()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(o?(m.innerHTML=o.__html||"",afterLoad()):a?(m.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",afterLoad()):t&&(m.src=t,d.set(t,b)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===i&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",i),p&&insertStylesheets(p),document.body.appendChild(m)};function handleClientScriptLoad(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>loadScript(e))}):loadScript(e)}function initScriptLoader(e){e.forEach(handleClientScriptLoad),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");s.add(t)})}()}function Script(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:u="afterInteractive",onError:d,stylesheets:f,...p}=e,{updateScripts:y,scripts:m,getIsSsr:b,appDir:h,nonce:_}=(0,a.useContext)(i.HeadManagerContext),g=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;g.current||(l&&e&&s.has(e)&&l(),g.current=!0)},[l,t,n]);let v=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!v.current&&("afterInteractive"===u?loadScript(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>loadScript(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>loadScript(e))})),v.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(y?(m[u]=(m[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:d,...p}]),y(m)):b&&b()?s.add(t||n):b&&!b()&&loadScript(e)),h){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),a.default.createElement("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===u&&n&&o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(Script,"__nextScript",{value:!0});let p=Script;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5528:function(e){e.exports={style:{fontFamily:"'__Montserrat_b47211', '__Montserrat_Fallback_b47211'",fontStyle:"normal"},className:"__className_b47211"}},4033:function(e,t,n){e.exports=n(94)}},function(e){e.O(0,[576,971,472,744],function(){return e(e.s=526)}),_N_E=e.O()}]);