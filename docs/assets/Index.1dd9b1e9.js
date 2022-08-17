import{n as C,d as b,e as O}from"./index.e50009ab.js";import{c as w}from"./clickOutside.84c04b54.js";const v={data(){return{pointer:-1}},methods:{pointerReset(){this.pointer=-1},pointerSet(t){this.pointer=t},pointerForward(){this.pointer<this.options.length-1&&this.pointer++},pointerBackward(){this.pointer>0&&this.pointer--},addPointerElement({key:t}="Enter"){var e;if(((e=this.options)==null?void 0:e.length)&&t==="Enter"){const n=this.pointer,s=this.options.find((r,i)=>i===n);this.selected={option:s,index:n},this.$nextTick(()=>this.outside())}}}},E={data(){return{searchQuery:""}},methods:{onSearch({target:{value:t}}){this.isOpened=!0,this.focused=!1,this.searchQuery=t}}};function p(t){return Array.isArray(t)?!!t.length:typeof t=="object"?!!Object.keys(t).length:typeof t=="string"?!!t.length:!!t}function m(t,e){if(!p(t)||!p(e))return!1;const n=r=>typeof r=="object",s=(r,i,u)=>r.hasOwnProperty(u)===i.hasOwnProperty(u);return Object.keys(t).every(r=>s(t,e,r)?n(t[r])?m(t[r],e[r]):t[r]===e[r]:!1)}function c(t){return t?t.normalize("NFKD").replace(/[\u0080-\uF8FF]/g,"").toLowerCase():""}function _(t){return t?t.toString().toLowerCase():""}function B(t){return _(t).split(" ").filter(e=>!!e)}function P(t,e){return e.filter(n=>t.some(s=>Object.keys(s).includes(n)))}function I(t,e){var s;const n=c(e);return(s=t.map(r=>c(r)).filter(r=>n.includes(c(r))))==null?void 0:s.length}function x(t,e,n){return t.map(s=>_(e[s])).reduce((s,r,i)=>(s[i]=I(n,r),s),[])}function T(t,e,n,s){return t.get(e)||t.set(e,x(n,e,s)).get(e)}function D(t=[],e="",n=[],s=!0){if(!e)return t;const r=B(e),i=P(t,n),u=new WeakMap,l=t.map(a=>{const o=T(u,a,i,r);return{...a,matchesArray:o,matches:o.reduce((k,S)=>k+S,0)}});if(s){const a=Math.max(...l.map(o=>o.matches));return l.filter(({matches:o})=>a===o)}return l}function R(t){return t.trim().split(" ")}function L(t,e){var n;return t?((n=e.toLowerCase().split(t.toLowerCase()))==null?void 0:n.length)-1:0}function A(t=[],e="",n=""){const s=R(e);return t.filter(r=>s.every(i=>L(i,r[n]||"")))}const d=(t,e)=>Object.prototype.toString.call(t)===`[object ${e}]`,F=".",H=t=>d(t,"String")?t.split(F):[],Q=(t,e)=>(d(t,"Object")||d(t,"Module"))&&t.hasOwnProperty(e)||Array.isArray(t)&&t[e]!=null?t[e]:null,M=(t,e)=>H(e).reduce(Q,t),q=["00000000000","11111111111","22222222222","33333333333","44444444444","55555555555","66666666666","77777777777","88888888888","99999999999","12345678909"],K=/[.-]/g,z=/[^\d]/g;function h(t){const e=t.split("").map(i=>parseInt(i,10)),n=e.length+1,r=e.map((i,u)=>i*(n-u)).reduce((i,u)=>i+u)%11;return r<2?0:11-r}function N(t,e){const n=e?K:z;return(t||"").replace(n,"")}function V(t,e){const n=N(t,e);if(!n||n.length!==11||q.includes(n))return!1;let s=n.substr(0,9);return s+=h(s),s+=h(s),s.substr(-2)===n.substr(-2)}function f(t){let e=2;const s=[...t].reverse().reduce((r,i)=>(r+=Number(i)*e,e=e===9?2:e+1,r),0)%11;return s<2?0:11-s}function U(t){const e=/[\\.\\/\\-]/g,n=t.toString().replace(e,"");if(!n||n.length!==14||/^(\d)\1+$/.test(n))return!1;let s=n.substr(0,12);return s+=f(s),s+=f(s),s.substr(-2)===n.substr(-2)}function W(t){if(t===""||t===null)return!1;const e=t.trim().split(" ");return e.length===1||t.length<9?!1:e.length>1?e[0].length>=3&&e[e.length-1].length>=3:!0}function G(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function X(t){if(t=t.replace(/\D/g,""),t.length!==11)return!1;let e=parseInt(t.substring(0,2)),n=parseInt(t.substring(2,3)),s=t.substring(3);return!(n!==9||[11,12,13,14,15,16,17,18,19,21,22,24,27,28,31,32,33,34,35,37,38,41,42,43,44,45,46,47,48,49,51,53,54,55,61,62,64,63,65,66,67,68,69,71,73,74,75,77,79,81,82,83,84,85,86,87,88,89,91,92,93,94,95,96,97,98,99].indexOf(e)===-1||s==="99999999"||s==="88888888"||s==="77777777"||s==="66666666"||s==="55555555"||s==="44444444"||s==="33333333"||s==="22222222"||s==="11111111"||s==="00000000")}var Y=(t,e)=>t?e.split(t).length-1:0,j=(t,e)=>[...t.reduce((s,r)=>(s.has(r[e])||s.set(r[e],r),s),new Map).values()],g={equals:m,findByExclusive:D,findByInclusive:A,get:M,isCpf:V,isCnpj:U,isName:W,isEmail:G,isPhone:X,isValid:p,matches:Y,normalize:c,removeDuplicates:j},J=function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("s-input-container",e._b({class:e.containerClasses},"s-input-container",e.$attrs,!1),[s("div",{staticClass:"select"},[s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.outside,expression:"outside"}],staticClass:"field",attrs:{tabindex:e.tabindex},on:{"!click":function(i){return e.openingHandler.apply(null,arguments)}}},[s("div",{staticClass:"selections"},[e._l(e.values,function(r,i){return s("span",{key:i,staticClass:"selected",on:{click:function(l){return l.stopPropagation(),e.removeSelected(i)}}},[e._v(" "+e._s(e.values[i])+" ")])}),s("input",{ref:"searchable",class:["input",{"--placeholder":!e.value&&!e.searchQuery&&e.placeholder}],attrs:{placeholder:e.placeholder},domProps:{value:e.searchQuery||e.value[e.displayBy]},on:{input:e.onSearch,"&keyup":function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"])?null:e.escHandler.apply(null,arguments)},keydown:[function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"tab",9,r.key,"Tab")||(r.stopPropagation(),r.target!==r.currentTarget)?null:e.escHandler.apply(null,arguments)},function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"up",38,r.key,["Up","ArrowUp"])||r.target!==r.currentTarget?null:(r.preventDefault(),e.pointerBackward.apply(null,arguments))},function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"down",40,r.key,["Down","ArrowDown"])||r.target!==r.currentTarget?null:(r.preventDefault(),e.pointerForward.apply(null,arguments))},function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")&&e._k(r.keyCode,"tab",9,r.key,"Tab")||(r.stopPropagation(),r.target!==r.currentTarget)?null:e.addPointerElement.apply(null,arguments)}]}})],2),s("i",{staticClass:"icon chevron-down"})]),s("div",{staticClass:"items"},[e._t("options",function(){return[s("s-collapsible",{attrs:{"no-header":"",height:e.contentHeight,"is-opened":!!(e.isOpened&&e.options.length)},on:{target:function(i){return e.contentHeight=i.childElementCount*50}}},e._l(e.options,function(r,i){return s("div",{key:i,class:e.itemClasses(r,i),attrs:{"aria-hidden":"true"},on:{click:function(l){l.stopPropagation(),e.selected={option:r,index:i}},mouseenter:function(l){return l.target!==l.currentTarget?null:e.pointerSet(i)}}},[e._t("option",function(){return[s("div",{staticClass:"option-container"},[s("span",{staticClass:"text"},[e._v(e._s(r[e.displayBy]))]),s("span",{staticClass:"disclaimer"},[e._v(" "+e._s(e.isSelected(r,i)?e.optionUnselectPlaceholder:e.optionSelectPlaceholder)+" ")])])]},{option:r})],2)}),0)]},{options:e.options})],2)])])},Z=[];const $={components:{SCollapsible:b,SInputContainer:O},directives:w,mixins:[v,E],props:{value:[Object,Array],items:{type:Array,required:!0},tabindex:{type:Number,default:0},trackBy:{type:String,required:!0},displayBy:{type:String,required:!0},multiple:Boolean,disabled:Boolean,placeholder:String,hideSelected:Boolean,optionSelectPlaceholder:String,optionUnselectPlaceholder:String},data(){return{isOpened:!1,contentHeight:null}},computed:{error(){return this.trackBy?this.multiple&&!Array.isArray(this.value)?"Value must be a array":this.items.some(t=>typeof t=="object")?"":"You need to set displayBy.":"You need to set trackBy."},containerClasses(){var t;return["s-select",{"--is-opened":this.isOpened,"--is-disabled":this.disabled,"--is-empty-search":this.searchQuery&&!((t=this.options)!=null&&t.length)}]},values(){var t;return!this.multiple||!((t=this.value)!=null&&t.length)?[]:this.value.map(e=>e[this.displayBy])},options(){return this.error?[]:this.searchQuery?this.items.filter(t=>{const e=t[this.displayBy];return typeof e=="string"?g.matches(this.searchQuery.toLowerCase(),e.toLowerCase()):g.matches(this.searchQuery.toString().toLowerCase(),e.toString().toLowerCase())}):this.items},selected:{get(){if(this.disabled)return[];if(this.multiple)return this.values;const t=this.items.find(e=>e===this.value[this.displayBy]);return t?t[this.displayBy]?this.value:"":"Op\xE7\xE3o inv\xE1lida"},set({option:t,index:e}){var n;if(e<0)return this.outside();if(!!((n=this.options)!=null&&n.length)){if(!this.multiple)return this.emitInput(this.isSelected(t)?{}:t);if(!this.isSelected(t))return this.emitInput([...this.value,t]);this.emitInput(this.value.filter(s=>!this.isEqual(s,t)))}}}},methods:{itemClasses(t,e){return["item",{"--active":e===this.pointer,"--selected":this.isSelected(t)}]},openingHandler(){this.isOpened=!this.isOpened,this.setFocus()},escHandler(){this.isOpened&&this.outside()},emitInput(t){this.outside(),this.$emit("input",t)},removeSelected(t){this.emitInput(this.value.filter((e,n)=>!Object.is(n,t)))},isEqual(t,e){return(t==null?void 0:t[this.trackBy])===(e==null?void 0:e[this.trackBy])},isSelected(t){return this.multiple?this.value.some(e=>this.isEqual(e,t)):this.isEqual(this.value,t)},outside(){this.isOpened=!1,this.focused=!1,this.unsetFocus(),this.searchQuery="",this.pointerReset()},setFocus(){this.$refs.searchable.focus()},unsetFocus(){this.$refs.searchable.blur()}}},y={};var ee=C($,J,Z,!1,te,null,null,null);function te(t){for(let e in y)this[e]=y[e]}const ne=function(){return ee.exports}();export{ne as default};