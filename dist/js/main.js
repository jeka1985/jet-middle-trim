/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={184:(e,r)=>{var t;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var i=n.apply(null,t);i&&e.push(i)}}else if("object"===a){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)o.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(r,[]))||(e.exports=t)}()},251:(e,r,t)=>{"use strict";var o=t(556),n=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var o,l={},u=null,p=null;for(o in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(p=r.ref),r)a.call(r,o)&&!s.hasOwnProperty(o)&&(l[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===l[o]&&(l[o]=r[o]);return{$$typeof:n,type:e,key:u,ref:p,props:l,_owner:i.current}}r.jsx=l,r.jsxs=l},893:(e,r,t)=>{"use strict";e.exports=t(251)},556:e=>{"use strict";e.exports=require("react")}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var a=r[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{"use strict";t.r(o),t.d(o,{Span:()=>s});var e=t(893),r=t(556),n=t(184),a=t.n(n);function i(e){const r=[],t=window.getSelection();if(e.preventDefault(),t){for(let e=0;e<t.rangeCount;e++)r.push(t.getRangeAt(e).toString());e.clipboardData?.setData("text/plain",r.join(""))}}const s=(0,r.memo)((function(t){const o=(0,r.useMemo)((()=>{return e=t.children,r=t.tailLength,[e.slice(0,e.length-r),e.slice(-r)];var e,r}),[t.children,t.tailLength]);return(0,e.jsxs)("div",{onCopy:i,className:a()("jmt_a",t.className),children:[(0,e.jsx)("span",{className:"jmt_b",children:o[0]}),o[1]]})}))})(),module.exports=o})();