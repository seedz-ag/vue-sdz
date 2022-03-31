var Rt=Object.defineProperty;var ne=Object.getOwnPropertySymbols;var Ie=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var Ce=(e,t,n)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pe=(e,t)=>{for(var n in t||(t={}))Ie.call(t,n)&&Ce(e,n,t[n]);if(ne)for(var n of ne(t))Pe.call(t,n)&&Ce(e,n,t[n]);return e};var je=(e,t)=>{var n={};for(var r in e)Ie.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ne)for(var r of ne(e))t.indexOf(r)<0&&Pe.call(e,r)&&(n[r]=e[r]);return n};import{n as Ge,_ as H,f as St}from"./index.7ad9d17d.js";import{V as ge}from"./vendor.0f0055ec.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ye=function(e,t){return ye=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},ye(e,t)};function wt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");ye(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var me=function(){return me=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},me.apply(this,arguments)};function qe(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Je(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],a;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(u){a={error:u}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return o}function Xe(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ue,re=[],Ye=function(){function e(t){this.active=!0,this.effects=[],this.cleanups=[],this.vm=t}return e.prototype.run=function(t){if(this.active)try{return this.on(),t()}finally{this.off()}},e.prototype.on=function(){this.active&&(re.push(this),ue=this)},e.prototype.off=function(){this.active&&(re.pop(),ue=re[re.length-1])},e.prototype.stop=function(){this.active&&(this.vm.$destroy(),this.effects.forEach(function(t){return t.stop()}),this.cleanups.forEach(function(t){return t()}),this.active=!1)},e}();(function(e){wt(t,e);function t(n){n===void 0&&(n=!1);var r=this,i=void 0;return jt(function(){i=Y(A())}),r=e.call(this,i)||this,n||Ot(r),r}return t})(Ye);function Ot(e,t){var n;if(t=t||ue,t&&t.active){t.effects.push(e);return}var r=(n=F())===null||n===void 0?void 0:n.proxy;r&&r.$on("hook:destroyed",function(){return e.stop()})}function Et(){return ue}function Ze(){var e,t;return((e=Et())===null||e===void 0?void 0:e.vm)||((t=F())===null||t===void 0?void 0:t.proxy)}function xt(e){if(!e.scope){var t=new Ye(e.proxy);e.scope=t,e.proxy.$on("hook:destroyed",function(){return t.stop()})}return e.scope}var be=void 0;try{var k=require("vue");k&&Ve(k)?be=k:k&&"default"in k&&Ve(k.default)&&(be=k.default)}catch{}var de=null,W=null,ie=!0,et="__composition_api_installed__";function Ve(e){return e&&E(e)&&e.name==="Vue"}function Ct(e){return de&&I(e,et)}function A(){return de}function It(){var e=de||be;return e}function Pt(e){de=e,Object.defineProperty(e,et,{configurable:!0,writable:!0,value:!0})}function jt(e){var t=ie;ie=!1;try{e()}finally{ie=t}}function se(e){if(!!ie){var t=W;t==null||t.scope.off(),W=e,W==null||W.scope.on()}}function F(){return W}var he=new WeakMap;function ce(e){if(he.has(e))return he.get(e);var t={proxy:e,update:e.$forceUpdate,type:e.$options,uid:e._uid,emit:e.$emit.bind(e),parent:null,root:null};xt(t);var n=["data","props","attrs","refs","vnode","slots"];return n.forEach(function(r){w(t,r,{get:function(){return e["$".concat(r)]}})}),w(t,"isMounted",{get:function(){return e._isMounted}}),w(t,"isUnmounted",{get:function(){return e._isDestroyed}}),w(t,"isDeactivated",{get:function(){return e._inactive}}),w(t,"emitted",{get:function(){return e._events}}),he.set(e,t),e.$parent&&(t.parent=ce(e.$parent)),e.$root&&(t.root=ce(e.$root)),t}var Vt=function(e){return Object.prototype.toString.call(e)};function Ae(e){return typeof e=="function"&&/native code/.test(e.toString())}var tt=typeof Symbol!="undefined"&&Ae(Symbol)&&typeof Reflect!="undefined"&&Ae(Reflect.ownKeys),C=function(e){return e};function w(e,t,n){var r=n.get,i=n.set;Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:r||C,set:i||C})}function nt(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function I(e,t){return Object.hasOwnProperty.call(e,t)}function At(e,t){if(!e)throw new Error("[vue-composition-api] ".concat(t))}function j(e){return Array.isArray(e)}var Tt=Object.prototype.toString,rt=function(e){return Tt.call(e)},Mt=function(e){return rt(e)==="[object Map]"},kt=function(e){return rt(e)==="[object Set]"},Ft=4294967295;function Lt(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)&&t<=Ft}function J(e){return e!==null&&typeof e=="object"}function V(e){return Vt(e)==="[object Object]"}function E(e){return typeof e=="function"}function Dt(e,t,n){if(typeof window!="undefined"&&typeof console!="undefined")console.error(e);else throw e}function Wt(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function it(e,t){return t=t||F(),t}function Y(e,t){t===void 0&&(t={});var n=e.config.silent;e.config.silent=!0;var r=new e(t);return e.config.silent=n,r}function Bt(e){var t=A();return t&&e instanceof t}function zt(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];if(!!e.$scopedSlots[t])return e.$scopedSlots[t].apply(e,n)}}function Nt(e,t){var n;if(!e)n={};else{if(e._normalized)return e._normalized;n={};for(var r in e)e[r]&&r[0]!=="$"&&(n[r]=!0)}for(var r in t)r in n||(n[r]=!0);return n}var _e,Kt=function(){if(!_e){var e=Y(A(),{computed:{value:function(){return 0}}}),t=e._computedWatchers.value.constructor,n=e._data.__ob__.dep.constructor;_e={Watcher:t,Dep:n},e.$destroy()}return _e};function at(e){return tt?Symbol.for(e):e}var z=at("composition-api.preFlushQueue"),G=at("composition-api.postFlushQueue"),q="composition-api.refKey",Te=new WeakMap,Ut=new WeakMap,ot=new WeakMap;function Qt(e,t,n){var r=A(),i=r.util;i.warn;var o=i.defineReactive,a=e.__ob__;function u(){a&&J(n)&&!I(n,"__ob__")&&Oe(n)}if(j(e)){if(Lt(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),u(),n;if(t==="length"&&n!==e.length)return e.length=n,a==null||a.dep.notify(),n}return t in e&&!(t in Object.prototype)?(e[t]=n,u(),n):e._isVue||a&&a.vmCount?n:a?(o(a.value,t,n),st(e,t,n),u(),a.dep.notify(),n):(e[t]=n,n)}var ut=function(){function e(t){var n=t.get,r=t.set;w(this,"value",{get:n,set:r})}return e}();function we(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=new ut(e);n&&(r.effect=!0);var i=Object.seal(r);return t&&ot.set(i,!0),i}function O(e){var t;if(b(e))return e;var n=Z((t={},t[q]=e,t));return we({get:function(){return n[q]},set:function(r){return n[q]=r}})}function b(e){return e instanceof ut}function g(e){return b(e)?e.value:e}function Ht(e){if(!V(e))return e;var t={};for(var n in e)t[n]=Gt(e,n);return t}function Gt(e,t){t in e||Qt(e,t,void 0);var n=e[t];return b(n)?n:we({get:function(){return e[t]},set:function(r){return e[t]=r}})}function N(e){var t;return Boolean(e&&I(e,"__ob__")&&typeof e.__ob__=="object"&&((t=e.__ob__)===null||t===void 0?void 0:t.__raw__))}function P(e){var t;return Boolean(e&&I(e,"__ob__")&&typeof e.__ob__=="object"&&!(!((t=e.__ob__)===null||t===void 0)&&t.__raw__))}function Re(e){if(!(!V(e)||N(e)||j(e)||b(e)||Bt(e)||Te.has(e))){Te.set(e,!0);for(var t=Object.keys(e),n=0;n<t.length;n++)st(e,t[n])}}function st(e,t,n){if(t!=="__ob__"&&!N(e[t])){var r,i,o=Object.getOwnPropertyDescriptor(e,t);if(o){if(o.configurable===!1)return;r=o.get,i=o.set,(!r||i)&&arguments.length===2&&(n=e[t])}Re(n),w(e,t,{get:function(){var u=r?r.call(e):n;return t!==q&&b(u)?u.value:u},set:function(u){r&&!i||(t!==q&&b(n)&&!b(u)?n.value=u:(i&&i.call(e,u),n=u),Re(u))}})}}function ct(e){var t=It(),n;if(t.observable)n=t.observable(e);else{var r=Y(t,{data:{$$state:e}});n=r._data.$$state}return I(n,"__ob__")||Oe(n),n}function Oe(e,t){var n,r;if(t===void 0&&(t=new Set),!(t.has(e)||I(e,"__ob__")||!Object.isExtensible(e))){nt(e,"__ob__",qt(e)),t.add(e);try{for(var i=qe(Object.keys(e)),o=i.next();!o.done;o=i.next()){var a=o.value,u=e[a];!(V(u)||j(u))||N(u)||!Object.isExtensible(u)||Oe(u,t)}}catch(d){n={error:d}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}}function qt(e){return e===void 0&&(e={}),{value:e,dep:{notify:C,depend:C,addSub:C,removeSub:C}}}function Jt(){return ct({}).__ob__}function Z(e){if(!J(e)||!(V(e)||j(e))||N(e)||!Object.isExtensible(e))return e;var t=ct(e);return Re(t),t}function Xt(e){return ot.has(e)}var Yt=function(e){return"on".concat(e[0].toUpperCase()+e.slice(1))};function ft(e){return function(t,n){var r=it(Yt(e),n);return r&&Zt(A(),r,e,t)}}function Zt(e,t,n,r){var i=t.proxy.$options,o=e.config.optionMergeStrategies[n],a=en(t,r);return i[n]=o(i[n],a),a}function en(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var i=F();se(e);try{return t.apply(void 0,Xe([],Je(n),!1))}finally{se(i)}}}var tn=ft("beforeMount"),nn=ft("beforeDestroy"),ae;function rn(){fe(this,z)}function an(){fe(this,G)}function on(e){return e[z]!==void 0}function un(e){e[z]=[],e[G]=[],e.$on("hook:beforeUpdate",rn),e.$on("hook:updated",an)}function sn(e){return me({immediate:!1,deep:!1,flush:"pre"},e)}function cn(){var e=Ze();return e?on(e)||un(e):(ae||(ae=Y(A())),e=ae),e}function fe(e,t){for(var n=e[t],r=0;r<n.length;r++)n[r]();n.length=0}function fn(e,t,n){var r=function(){e.$nextTick(function(){e[z].length&&fe(e,z),e[G].length&&fe(e,G)})};switch(n){case"pre":r(),e[z].push(t);break;case"post":r(),e[G].push(t);break;default:At(!1,'flush must be one of ["post", "pre", "sync"], but got '.concat(n));break}}function ln(e,t,n,r){var i=e._watchers.length;return e.$watch(t,n,{immediate:r.immediateInvokeCallback,deep:r.deep,lazy:r.noRun,sync:r.sync,before:r.before}),e._watchers[i]}function Me(e,t){var n=e.teardown;e.teardown=function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];n.apply(e,r),t()}}function dn(e,t,n,r){var i,o=r.flush,a=o==="sync",u,d=function(m){u=function(){try{m()}catch(S){Dt(S)}}},v=function(){u&&(u(),u=null)},l=function(m){return a||e===ae?m:function(){for(var S=[],x=0;x<arguments.length;x++)S[x]=arguments[x];return fn(e,function(){m.apply(void 0,Xe([],Je(S),!1))},o)}};if(n===null){var f=!1,_=function(){if(!f)try{f=!0,t(d)}finally{f=!1}},p=ln(e,_,C,{deep:r.deep||!1,sync:a,before:v});Me(p,v),p.lazy=!1;var s=p.get.bind(p);return p.get=l(s),function(){p.teardown()}}var c=r.deep,h=!1,$;if(b(t)?$=function(){return t.value}:P(t)?($=function(){return t},c=!0):j(t)?(h=!0,$=function(){return t.map(function(m){return b(m)?m.value:P(m)?B(m):E(m)?m():C})}):E(t)?$=t:$=C,c){var ee=$;$=function(){return B(ee())}}var K=function(m,S){if(!(!c&&h&&m.every(function(x,ve){return Wt(x,S[ve])})))return v(),n(m,S,d)},L=l(K);if(r.immediate){var D=L,te=function(m,S){return te=D,K(m,j(m)?[]:S)};L=function(m,S){return te(m,S)}}var U=e.$watch($,L,{immediate:r.immediate,deep:c,sync:a}),M=e._watchers[e._watchers.length-1];return P(M.value)&&((i=M.value.__ob__)===null||i===void 0?void 0:i.dep)&&c&&M.value.__ob__.dep.addSub({update:function(){M.run()}}),Me(M,v),function(){U()}}function X(e,t,n){var r=null;E(t)?r=t:(n=t,r=null);var i=sn(n),o=cn();return dn(o,e,r,i)}function B(e,t){if(t===void 0&&(t=new Set),!J(e)||t.has(e)||Ut.has(e))return e;if(t.add(e),b(e))B(e.value,t);else if(j(e))for(var n=0;n<e.length;n++)B(e[n],t);else if(kt(e)||Mt(e))e.forEach(function(i){B(i,t)});else if(V(e))for(var r in e)B(e[r],t);return e}function y(e){var t=Ze(),n,r;E(e)?n=e:(n=e.get,r=e.set);var i,o;if(t&&!t.$isServer){var a=Kt(),u=a.Watcher,d=a.Dep,v;o=function(){return v||(v=new u(t,n,C,{lazy:!0})),v.dirty&&v.evaluate(),d.target&&v.depend(),v.value},i=function(f){r&&r(f)}}else{var l=Y(A(),{computed:{$$state:{get:n,set:r}}});t&&t.$on("hook:destroyed",function(){return l.$destroy()}),o=function(){return l.$$state},i=function(f){l.$$state=f}}return we({get:o,set:i},!r,!0)}var lt={};function vn(e,t){for(var n=t;n;){if(n._provided&&I(n._provided,e))return n._provided[e];n=n.$parent}return lt}function ke(e,t){var n,r=(n=it())===null||n===void 0?void 0:n.proxy;if(!!r){if(!r._provided){var i={};w(r,"_provided",{get:function(){return i},set:function(o){return Object.assign(i,o)}})}r._provided[e]=t}}function Fe(e,t,n){var r;n===void 0&&(n=!1);var i=(r=F())===null||r===void 0?void 0:r.proxy;if(!!i){if(!e)return t;var o=vn(e,i);return o!==lt?o:n&&E(t)?t():t}}var Le=function(){for(var t,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return(t=A())===null||t===void 0?void 0:t.nextTick.apply(this,n)};function pn(e,t,n){var r=e.__composition_api_state__=e.__composition_api_state__||{};r[t]=n}function hn(e,t){return(e.__composition_api_state__||{})[t]}var T={set:pn,get:hn};function _n(e,t,n){var r=e.$options.props;!(t in e)&&!(r&&I(r,t))&&(b(n)?w(e,t,{get:function(){return n.value},set:function(i){n.value=i}}):w(e,t,{get:function(){return P(n)&&n.__ob__.dep.depend(),n},set:function(i){n=i}}))}function $n(e){var t=T.get(e,"rawBindings")||{};if(!(!t||!Object.keys(t).length)){for(var n=e.$refs,r=T.get(e,"refs")||[],i=0;i<r.length;i++){var o=r[i],a=t[o];!n[o]&&a&&b(a)&&(a.value=null)}for(var u=Object.keys(n),d=[],i=0;i<u.length;i++){var o=u[i],a=t[o];n[o]&&a&&b(a)&&(a.value=n[o],d.push(o))}T.set(e,"refs",d)}}function De(e){for(var t=[e._vnode];t.length;){var n=t.pop();if(n.context&&$n(n.context),n.children)for(var r=0;r<n.children.length;++r)t.push(n.children[r])}}function We(e,t){var n,r;if(!!e){var i=T.get(e,"attrBindings");if(!(!i&&!t)){if(!i){var o=Z({});i={ctx:t,data:o},T.set(e,"attrBindings",i),w(t,"attrs",{get:function(){return i==null?void 0:i.data},set:function(){}})}var a=e.$attrs,u=function(f){I(i.data,f)||w(i.data,f,{get:function(){return e.$attrs[f]}})};try{for(var d=qe(Object.keys(a)),v=d.next();!v.done;v=d.next()){var l=v.value;u(l)}}catch(f){n={error:f}}finally{try{v&&!v.done&&(r=d.return)&&r.call(d)}finally{if(n)throw n.error}}}}}function Be(e,t){var n=e.$options._parentVnode;if(!!n){for(var r=T.get(e,"slots")||[],i=Nt(n.data.scopedSlots,e.$slots),o=0;o<r.length;o++){var a=r[o];i[a]||delete t[a]}for(var u=Object.keys(i),o=0;o<u.length;o++){var a=u[o];t[a]||(t[a]=zt(e,a))}T.set(e,"slots",u)}}function $e(e,t,n){var r=F();se(e);try{return t(e)}catch(i){if(n)n(i);else throw i}finally{se(r)}}function gn(e){e.mixin({beforeCreate:t,mounted:function(){De(this)},beforeUpdate:function(){We(this)},updated:function(){De(this)}});function t(){var a=this,u=a.$options,d=u.setup,v=u.render;if(v&&(u.render=function(){for(var f=this,_=[],p=0;p<arguments.length;p++)_[p]=arguments[p];return $e(ce(a),function(){return v.apply(f,_)})}),!!d&&!!E(d)){var l=u.data;u.data=function(){return n(a,a.$props),E(l)?l.call(a,a):l||{}}}}function n(a,u){u===void 0&&(u={});var d=a.$options.setup,v=o(a),l=ce(a);l.setupContext=v,nt(u,"__ob__",Jt()),Be(a,v.slots);var f;if($e(l,function(){f=d(u,v)}),!!f){if(E(f)){var _=f;a.$options.render=function(){return Be(a,v.slots),$e(l,function(){return _()})};return}else if(J(f)){P(f)&&(f=Ht(f)),T.set(a,"rawBindings",f);var p=f;Object.keys(p).forEach(function(s){var c=p[s];if(!b(c))if(P(c))j(c)&&(c=O(c));else if(E(c)){var h=c;c=c.bind(a),Object.keys(h).forEach(function($){c[$]=h[$]})}else J(c)?i(c)&&r(c):c=O(c);_n(a,s,c)});return}}}function r(a,u){if(u===void 0&&(u=new Set),!u.has(a)&&!(!V(a)||b(a)||P(a)||N(a))){var d=A(),v=d.util.defineReactive;Object.keys(a).forEach(function(l){var f=a[l];v(a,l,f),f&&(u.add(f),r(f,u))})}}function i(a,u){return u===void 0&&(u=new Map),u.has(a)?u.get(a):(u.set(a,!1),j(a)&&P(a)?(u.set(a,!0),!0):!V(a)||N(a)||b(a)?!1:Object.keys(a).some(function(d){return i(a[d],u)}))}function o(a){var u={slots:{}},d=["root","parent","refs","listeners","isServer","ssrContext"],v=["emit"];return d.forEach(function(l){var f="$".concat(l);w(u,l,{get:function(){return a[f]},set:function(){}})}),We(a,u),v.forEach(function(l){var f="$".concat(l);w(u,l,{get:function(){return function(){for(var _=[],p=0;p<arguments.length;p++)_[p]=arguments[p];var s=a[f];s.apply(a,_)}}})}),u}}function dt(e,t){if(!e)return t;if(!t)return e;for(var n,r,i,o=tt?Reflect.ownKeys(e):Object.keys(e),a=0;a<o.length;a++)n=o[a],n!=="__ob__"&&(r=t[n],i=e[n],I(t,n)?r!==i&&V(r)&&!b(r)&&V(i)&&!b(i)&&dt(i,r):t[n]=i);return t}function yn(e){Ct(e)||(e.config.optionMergeStrategies.setup=function(t,n){return function(i,o){return dt(E(t)?t(i,o)||{}:void 0,E(n)?n(i,o)||{}:void 0)}},Pt(e),gn(e))}var vt={install:function(e){return yn(e)}};typeof window!="undefined"&&window.Vue&&window.Vue.use(vt);function mn(e){e=e||ge,e&&!e.__composition_api_installed__&&ge.use(vt)}mn(ge);var bn=["alpha","alphaNum","and","between","createI18nMessage","decimal","email","helpers","integer","ipAddress","macAddress","maxLength","maxValue","minLength","minValue","not","numeric","or","required","requiredIf","requiredUnless","sameAs","url"],Rn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.field.component,e._g(e._b({tag:"component",attrs:{validation:e.getValidation(e.field.name),items:e.field.items}},"component",e.bindings(e.field),!1),e.$listeners))},Sn=[];const wn={name:"SFormBuilderField",components:{SInput:()=>H(()=>import("./index.7ad9d17d.js").then(function(e){return e.l}),["assets/index.7ad9d17d.js","assets/index.db8840d1.css","assets/vendor.0f0055ec.js"]),SSelect:()=>H(()=>import("./Index.f59477e4.js"),["assets/Index.f59477e4.js","assets/Index.0c66c48e.css","assets/index.7ad9d17d.js","assets/index.db8840d1.css","assets/vendor.0f0055ec.js","assets/clickOutside.84c04b54.js"]),SSwitch:()=>H(()=>import("./Index.829478db.js"),["assets/Index.829478db.js","assets/Index.68a34eae.css","assets/index.7ad9d17d.js","assets/index.db8840d1.css","assets/vendor.0f0055ec.js"]),SCheckbox:()=>H(()=>import("./Index.733d26c2.js"),["assets/Index.733d26c2.js","assets/Index.bec34840.css","assets/index.7ad9d17d.js","assets/index.db8840d1.css","assets/vendor.0f0055ec.js"]),SRadiobox:()=>H(()=>import("./Index.c80a6b28.js"),["assets/Index.c80a6b28.js","assets/Index.69d581d5.css","assets/index.7ad9d17d.js","assets/index.db8840d1.css","assets/vendor.0f0055ec.js"])},props:{$v:Object,field:[Array,Object]},methods:{bindings(e){const r=e,{value:t}=r,n=je(r,["value"]);return pe(pe({},this.$attrs),n)},getValidation(e){var i;const t=(i=this.$v.form)==null?void 0:i[e],n=o=>t==null?void 0:t[o],r=o=>{var a,u;return((a=n(o))==null?void 0:a.$invalid)&&((u=n(o))==null?void 0:u.$message)};return bn.map(r).filter(Boolean)}}},ze={};var On=Ge(wn,Rn,Sn,!1,En,null,null,null);function En(e){for(let t in ze)this[t]=ze[t]}var xn=function(){return On.exports}();function Ne(e,t,n){return e.reduce((r,i)=>(Array.isArray(i)?i.forEach(o=>!n||o[t]?r[o.name]=o[t]:{}):(!n||i[t])&&(r[i.name]=i[t]),r),{})}function Ke(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((n,r)=>(t.includes(r)||(n[r]=g(e[r])),n),{})}function le(e){return typeof e=="function"}function Cn(e){return P(e)||Xt(e)}function pt(e,t,n,r){return e.call(r,g(t),g(n),r)}function ht(e){return e.$valid!==void 0?!e.$valid:!e}function In(e,t,n,r,i,o,a){let{$lazy:u,$rewardEarly:d}=i,v=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],l=arguments.length>8?arguments[8]:void 0,f=arguments.length>9?arguments[9]:void 0,_=arguments.length>10?arguments[10]:void 0;const p=O(!!r.value),s=O(0);n.value=!1;const c=X([t,r].concat(v,_),()=>{if(u&&!r.value||d&&!f.value&&!n.value)return;let h;try{h=pt(e,t,l,a)}catch($){h=Promise.reject($)}s.value++,n.value=!!s.value,p.value=!1,Promise.resolve(h).then($=>{s.value--,n.value=!!s.value,o.value=$,p.value=ht($)}).catch($=>{s.value--,n.value=!!s.value,o.value=$,p.value=!0})},{immediate:!0,deep:typeof t=="object"});return{$invalid:p,$unwatch:c}}function Pn(e,t,n,r,i,o,a,u){let{$lazy:d,$rewardEarly:v}=r;const l=()=>({}),f=y(()=>{if(d&&!n.value||v&&!u.value)return!1;let _=!0;try{const p=pt(e,t,a,o);i.value=p,_=ht(p)}catch(p){i.value=p}return _});return{$unwatch:l,$invalid:f}}function jn(e,t,n,r,i,o,a,u,d,v,l){const f=O(!1),_=e.$params||{},p=O(null);let s,c;e.$async?{$invalid:s,$unwatch:c}=In(e.$validator,t,f,n,r,p,i,e.$watchTargets,d,v,l):{$invalid:s,$unwatch:c}=Pn(e.$validator,t,n,r,p,i,d,v);const h=e.$message;return{$message:le(h)?y(()=>h(Ke({$pending:f,$invalid:s,$params:Ke(_),$model:t,$response:p,$validator:o,$propertyPath:u,$property:a}))):h||"",$params:_,$pending:f,$invalid:s,$response:p,$unwatch:c}}function Vn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=g(e),n=Object.keys(t),r={},i={},o={};return n.forEach(a=>{const u=t[a];switch(!0){case le(u.$validator):r[a]=u;break;case le(u):r[a]={$validator:u};break;case a.startsWith("$"):o[a]=u;break;default:i[a]=u}}),{rules:r,nestedValidators:i,config:o}}function An(){}const Tn="__root";function _t(e,t,n){if(n)return t?t(e()):e();try{var r=Promise.resolve(e());return t?r.then(t):r}catch(i){return Promise.reject(i)}}function Mn(e,t){return _t(e,An,t)}function kn(e,t){var n=e();return n&&n.then?n.then(t):t(n)}function Fn(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(r){return Promise.reject(r)}}}function Ln(e,t,n,r,i,o,a,u,d){const v=Object.keys(e),l=r.get(i,e),f=O(!1),_=O(!1),p=O(0);if(l){if(!l.$partial)return l;l.$unwatch(),f.value=l.$dirty.value}const s={$dirty:f,$path:i,$touch:()=>{f.value||(f.value=!0)},$reset:()=>{f.value&&(f.value=!1)},$commit:()=>{}};return v.length?(v.forEach(c=>{s[c]=jn(e[c],t,s.$dirty,o,a,c,n,i,d,_,p)}),s.$externalResults=y(()=>u.value?[].concat(u.value).map((c,h)=>({$propertyPath:i,$property:n,$validator:"$externalResults",$uid:`${i}-externalResult-${h}`,$message:c,$params:{},$response:null,$pending:!1})):[]),s.$invalid=y(()=>{const c=v.some(h=>g(s[h].$invalid));return _.value=c,!!s.$externalResults.value.length||c}),s.$pending=y(()=>v.some(c=>g(s[c].$pending))),s.$error=y(()=>s.$dirty.value?s.$pending.value||s.$invalid.value:!1),s.$silentErrors=y(()=>v.filter(c=>g(s[c].$invalid)).map(c=>{const h=s[c];return Z({$propertyPath:i,$property:n,$validator:c,$uid:`${i}-${c}`,$message:h.$message,$params:h.$params,$response:h.$response,$pending:h.$pending})}).concat(s.$externalResults.value)),s.$errors=y(()=>s.$dirty.value?s.$silentErrors.value:[]),s.$unwatch=()=>v.forEach(c=>{s[c].$unwatch()}),s.$commit=()=>{_.value=!0,p.value=Date.now()},r.set(i,e,s),s):(l&&r.set(i,e,s),s)}function Dn(e,t,n,r,i,o,a){const u=Object.keys(e);return u.length?u.reduce((d,v)=>(d[v]=Se({validations:e[v],state:t,key:v,parentKey:n,resultsCache:r,globalConfig:i,instance:o,externalResults:a}),d),{}):{}}function Wn(e,t,n){const r=y(()=>[t,n].filter(s=>s).reduce((s,c)=>s.concat(Object.values(g(c))),[])),i=y({get(){return e.$dirty.value||(r.value.length?r.value.every(s=>s.$dirty):!1)},set(s){e.$dirty.value=s}}),o=y(()=>{const s=g(e.$silentErrors)||[],c=r.value.filter(h=>(g(h).$silentErrors||[]).length).reduce((h,$)=>h.concat(...$.$silentErrors),[]);return s.concat(c)}),a=y(()=>{const s=g(e.$errors)||[],c=r.value.filter(h=>(g(h).$errors||[]).length).reduce((h,$)=>h.concat(...$.$errors),[]);return s.concat(c)}),u=y(()=>r.value.some(s=>s.$invalid)||g(e.$invalid)||!1),d=y(()=>r.value.some(s=>g(s.$pending))||g(e.$pending)||!1),v=y(()=>r.value.some(s=>s.$dirty)||r.value.some(s=>s.$anyDirty)||i.value),l=y(()=>i.value?d.value||u.value:!1),f=()=>{e.$touch(),r.value.forEach(s=>{s.$touch()})},_=()=>{e.$commit(),r.value.forEach(s=>{s.$commit()})},p=()=>{e.$reset(),r.value.forEach(s=>{s.$reset()})};return r.value.length&&r.value.every(s=>s.$dirty)&&f(),{$dirty:i,$errors:a,$invalid:u,$anyDirty:v,$error:l,$pending:d,$touch:f,$reset:p,$silentErrors:o,$commit:_}}function Se(e){const t=Fn(function(){return D.value||x(),kn(function(){if(c.$rewardEarly)return Ee(),Mn(Le)},function(){return _t(Le,function(){return new Promise(R=>{if(!S.value)return R(!U.value);const Q=X(S,()=>{R(!U.value),Q()})})})})});let{validations:n,state:r,key:i,parentKey:o,childResults:a,resultsCache:u,globalConfig:d={},instance:v,externalResults:l}=e;const f=o?`${o}.${i}`:i,{rules:_,nestedValidators:p,config:s}=Vn(n),c=Object.assign({},d,s),h=i?y(()=>{const R=g(r);return R?g(R[i]):void 0}):r,$=Object.assign({},g(l)||{}),ee=y(()=>{const R=g(l);return i?R?g(R[i]):void 0:R}),K=Ln(_,h,i,u,f,c,v,ee,r),L=Dn(p,h,f,u,c,v,ee),{$dirty:D,$errors:te,$invalid:U,$anyDirty:M,$error:m,$pending:S,$touch:x,$reset:ve,$silentErrors:gt,$commit:Ee}=Wn(K,L,a),yt=i?y({get:()=>g(h),set:R=>{D.value=!0;const Q=g(r),xe=g(l);xe&&(xe[i]=$[i]),b(Q[i])?Q[i].value=R:Q[i]=R}}):null;i&&c.$autoDirty&&X(h,()=>{D.value||x();const R=g(l);R&&(R[i]=$[i])},{flush:"sync"});function mt(R){return(a.value||{})[R]}function bt(){b(l)?l.value=$:Object.keys($).length===0?Object.keys(l).forEach(R=>{delete l[R]}):Object.assign(l,$)}return Z(Object.assign({},K,{$model:yt,$dirty:D,$error:m,$errors:te,$invalid:U,$anyDirty:M,$pending:S,$touch:x,$reset:ve,$path:f||Tn,$silentErrors:gt,$validate:t,$commit:Ee},a&&{$getResultsForChild:mt,$clearExternalResults:bt},L))}class Bn{constructor(){this.storage=new Map}set(t,n,r){this.storage.set(t,{rules:n,result:r})}checkRulesValidity(t,n,r){const i=Object.keys(r),o=Object.keys(n);return o.length!==i.length||!o.every(u=>i.includes(u))?!1:o.every(u=>n[u].$params?Object.keys(n[u].$params).every(d=>g(r[u].$params[d])===g(n[u].$params[d])):!0)}get(t,n){const r=this.storage.get(t);if(!r)return;const{rules:i,result:o}=r,a=this.checkRulesValidity(t,n,i),u=o.$unwatch?o.$unwatch:()=>({});return a?o:{$dirty:o.$dirty,$partial:!0,$unwatch:u}}}const oe={COLLECT_ALL:!0,COLLECT_NONE:!1},Ue=Symbol("vuelidate#injectChiildResults"),Qe=Symbol("vuelidate#removeChiildResults");function zn(e){let{$scope:t,instance:n}=e;const r={},i=O([]),o=y(()=>i.value.reduce((l,f)=>(l[f]=g(r[f]),l),{}));function a(l,f){let{$registerAs:_,$scope:p,$stopPropagation:s}=f;s||t===oe.COLLECT_NONE||p===oe.COLLECT_NONE||t!==oe.COLLECT_ALL&&t!==p||(r[_]=l,i.value.push(_))}n.__vuelidateInjectInstances=[].concat(n.__vuelidateInjectInstances||[],a);function u(l){i.value=i.value.filter(f=>f!==l),delete r[l]}n.__vuelidateRemoveInstances=[].concat(n.__vuelidateRemoveInstances||[],u);const d=Fe(Ue,[]);ke(Ue,n.__vuelidateInjectInstances);const v=Fe(Qe,[]);return ke(Qe,n.__vuelidateRemoveInstances),{childResults:o,sendValidationResultsToParent:d,removeValidationResultsFromParent:v}}function $t(e){return new Proxy(e,{get(t,n){return typeof t[n]=="object"?$t(t[n]):y(()=>t[n])}})}function Nn(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(n=e,e=void 0,t=void 0);let{$registerAs:r,$scope:i=oe.COLLECT_ALL,$stopPropagation:o,$externalResults:a,currentVueInstance:u}=n;const d=u||F(),v=d?d.proxy.$options:{};!r&&d&&(r=`_vuelidate_${d.uid||d._uid}`);const l=O({}),f=new Bn,{childResults:_,sendValidationResultsToParent:p,removeValidationResultsFromParent:s}=d?zn({$scope:i,instance:d}):{childResults:O({})};if(!e&&v.validations){const c=v.validations;t=O({}),tn(()=>{t.value=d.proxy,X(()=>le(c)?c.call(t.value,new $t(t.value)):c,h=>{l.value=Se({validations:h,state:t,childResults:_,resultsCache:f,globalConfig:n,instance:d.proxy,externalResults:a||d.proxy.vuelidateExternalResults})},{immediate:!0})}),n=v.validationsConfig||n}else{const c=b(e)||Cn(e)?e:Z(e||{});X(c,h=>{l.value=Se({validations:h,state:t,childResults:_,resultsCache:f,globalConfig:n,instance:d?d.proxy:{},externalResults:a})},{immediate:!0})}return d&&(p.forEach(c=>c(l,{$registerAs:r,$scope:i,$stopPropagation:o})),nn(()=>s.forEach(c=>c(r)))),y(()=>Object.assign({},g(l.value),_.value))}var Kn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"s-form-builder",attrs:{autocomplete:"off",role:"presentation"},on:{click:function(r){r.preventDefault()}}},[e._l(e.fields,function(r,i){return n("div",{key:i,staticClass:"row"},[Array.isArray(r)?[e._l(r,function(o,a){return[n("field",{key:a,attrs:{$v:e.$v,field:o,value:e.form[o.name]},on:{input:function(u){return e.emit(o.name,u)}}})]})]:[n("field",{attrs:{$v:e.$v,field:r,value:e.form[r.name]},on:{input:function(o){return e.emit(r.name,o)}}})]],2)}),e._t("actions",function(){return[n("div",{staticClass:"actions"},[n("s-button",[e._v("Cancelar")]),n("s-button",{on:{click:e.submit}},[e._v("Salvar")])],1)]})],2)},Un=[];const Qn={name:"SFormBuilder",components:{SButton:St,Field:xn},props:{fields:{type:Array,required:!0}},setup:()=>({$v:Nn({$lazy:!0,$autoDirty:!0})}),data(){return{form:{}}},created(){this.form=Ne(this.fields,"value",!1)},validations(){return{form:Ne(this.fields,"validate",!0)}},methods:{emit(e,t){this.form[e]=t,this.$emit("synchronize",{field:e,value:t})},async submit(){if(this.$v.$touch(),this.$v.$error)return this.$emit("errors",this.form);this.$emit("submit",this.form)}}},He={};var Hn=Ge(Qn,Kn,Un,!1,Gn,null,null,null);function Gn(e){for(let t in He)this[t]=He[t]}var qn=function(){return Hn.exports}(),Zn=Object.freeze(Object.defineProperty({__proto__:null,default:qn},Symbol.toStringTag,{value:"Module"}));export{Zn as I,qn as S,g as u};