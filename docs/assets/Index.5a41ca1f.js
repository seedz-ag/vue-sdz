import{n as u,b as y,c as S,d as E,P as x,_ as n}from"./index.1af000d2.js";var b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"source-code-container"},[e.title?s("h1",[e._v(e._s(e.title))]):e._e(),e.subtitle?s("h2",{staticClass:"subtitle"},[e._v(e._s(e.subtitle))]):e._e(),s("div",{staticClass:"header"},[s("p",[e._v("Preview")]),e._t("header")],2),s("div",{staticClass:"body"},[e._t("content")],2)])},I=[];const g={name:"SourceCodeContainer",props:{title:String,subtitle:String}},l={};var P=u(g,b,I,!1,O,null,null,null);function O(e){for(let t in l)this[t]=l[t]}var j=function(){return P.exports}();const k={data(){return{pointer:-1}},methods:{pointerReset(){this.pointer=-1},pointerSet(e){this.pointer=e},pointerForward(){this.pointer<this.items.length-1&&this.pointer++},pointerBackward(){this.pointer>0&&this.pointer--},addPointerElement({key:e}="Enter"){this.items.length>0&&e==="Enter"&&(this.selected=this.pointer,this.$nextTick(()=>this.outside()))}}},C={data(){return{searchQuery:""}},computed:{searchableValue(){var e;return this.searchQuery?this.searchQuery:this.focused&&!this.searchQuery?"":(!this.value||!((e=this.value)==null?void 0:e.length))&&!this.searchQuery?[this.placeholder]:this.multiple?"":this.value}},methods:{search({target:{value:e}}){this.isOpened=!0,this.focused=!1,this.searchQuery=e}}},T={"click-outside":{bind:function(e,t){const s=r=>{!e.contains(r.target)&&e!==r.target&&t.value(r)};e.__vueClickOutside__=s,document.addEventListener("click",s)},unbind:function(e){document.removeEventListener("click",e.__vueClickOutside__),e.__vueClickOutside__=null}}};var c=(e,t)=>e?t.split(e).length-1:0,A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("s-input-container",e._b({class:e.containerClasses,attrs:{validation:e.error||e.validation}},"s-input-container",e.$attrs,!1),[s("div",{staticClass:"select"},[s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.outside,expression:"outside"}],staticClass:"field",attrs:{tabindex:e.tabindex},on:{"!click":function(r){return e.openingHandler.apply(null,arguments)}}},[s("div",{staticClass:"selections"},[e._l(e.selecteds,function(r,i){return s("span",{key:i,staticClass:"selected",on:{click:function(a){return e.removeSelected(i)}}},[e._v(" "+e._s(e.selecteds[i])+" ")])}),e.validation?e._e():s("input",{ref:"searchable",class:["input",{"-placeholder":e.selected===e.placeholder||!e.selected}],domProps:{value:e.searchableValue},on:{keydown:[function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"down",40,r.key,["Down","ArrowDown"])||r.target!==r.currentTarget?null:(r.preventDefault(),e.pointerForward.apply(null,arguments))},function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"up",38,r.key,["Up","ArrowUp"])||r.target!==r.currentTarget?null:(r.preventDefault(),e.pointerBackward.apply(null,arguments))},function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")&&e._k(r.keyCode,"tab",9,r.key,"Tab")||(r.stopPropagation(),r.target!==r.currentTarget)?null:e.addPointerElement.apply(null,arguments)},function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"tab",9,r.key,"Tab")||(r.stopPropagation(),r.target!==r.currentTarget)?null:e.escHandler.apply(null,arguments)}],"&keyup":function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"esc",27,r.key,["Esc","Escape"])?null:e.escHandler.apply(null,arguments)},focus:function(r){e.focused=e.clearOnSelect},blur:function(r){e.focused=!1},input:e.search}})],2),s("i",{staticClass:"icon sdz-chevron-down"})]),s("div",{staticClass:"items"},[e._t("options",function(){return[s("s-collapsible",{attrs:{"no-header":"",height:e.contentHeight,"is-opened":!!(e.isOpened&&e.options.length)&&!e.validation},on:{target:function(r){return e.contentHeight=r.childElementCount*50}}},e._l(e.options,function(r,i){return s("div",{key:i,class:e.itemClasses(r,i),attrs:{"aria-hidden":"true"},on:{click:function(a){a.stopPropagation(),e.selected=i},mouseenter:function(a){return a.target!==a.currentTarget?null:e.pointerSet(i)}}},[e._t("option",function(){return[s("div",{staticClass:"option-container"},[s("span",{staticClass:"text"},[e._v(e._s(e.displayBy&&r[e.displayBy]||r))]),s("span",{staticClass:"disclaimer"},[e._v(" "+e._s(e.isSelected(r,i)?e.optionUnselectPlaceholder:e.optionSelectPlaceholder)+" ")])])]},{option:r})],2)}),0)]},{options:e.options})],2)])])},R=[];const L={components:{SCollapsible:y,SInputContainer:S},directives:T,mixins:[k,C],props:{tabindex:{type:Number,default:0},value:[String,Object,Number,Array],items:{type:Array,required:!0},placeholder:{type:String,default:"Selecione uma op\xE7\xE3o"},optionSelectPlaceholder:{type:String,default:"Press enter to select"},optionUnselectPlaceholder:{type:String,default:"Press enter to unselect"},required:Boolean,display:String,displayBy:String,validation:String,multiple:Boolean,hideSelected:Boolean,clearOnSelect:{type:Boolean,default:!0},disabled:Boolean},data(){return{contentHeight:null,focused:!1,isOpened:!1}},computed:{error(){return this.items.some(e=>this.displayBy&&typeof e=="object")?this.multiple&&!Array.isArray(this.value)?"Value must be a array":"":"You need to set displayBy."},containerClasses(){return["s-select",{"--is-opened":this.isOpened,"--is-disabled":this.disabled,"--has-error":this.error||this.validation,"--is-focused":this.focused||this.searchQuery,"--is-empty-search":this.searchQuery&&!this.options.length}]},selecteds(){return!this.multiple||this.value&&!this.value.length?[]:this.value.filter(t=>!!this.items.find(s=>s!==t)).map(t=>this.display&&t[this.display]||t)},selected:{get(){if(this.disabled)return[];if(this.multiple)return this.selecteds;const e=this.items.find(t=>t===(Array.isArray(this.value)&&this.value&&this.displayBy&&this.value[this.displayBy])||this.value);return e?this.displayBy&&e[this.displayBy]?e[this.displayBy]?e[this.displayBy]:"":this.value:"Op\xE7\xE3o inv\xE1lida"},set(e){if(e<0){this.outside();return}if(typeof e!="number"){this.$emit("input",e),this.outside();return}const t=this.hideSelected&&!this.searchQuery?this.hideSelecteds:this.searchQuery?this.options:this.items;if(!t.length)return!1;const s=t&&this.display&&t[e][this.display]||t[e];if(this.multiple){const r=o=>(this.display&&o[this.display]||o).toString(),i=o=>r(o)===s.toString();if(!this.value.find(i))this.outside(),this.$emit("input",[...this.value,t[e]]);else{this.outside();const o=f=>r(f)!==s.toString(),v=this.value.filter(o);this.$emit("input",v)}}else this.outside(),this.$emit("input",s)}},hideSelecteds(){return this.multiple&&Array.isArray(this.value)&&this.display?this.items.filter(e=>!this.selecteds.includes(e[this.display])):[]},options(){if(this.error)return[];const e=this.hideSelected&&this.hideSelecteds||this.items;return this.searchQuery?e.filter(t=>{const s=this.displayBy&&t[this.displayBy]||t;return typeof s=="string"?c(this.searchQuery.toLowerCase(),s.toLowerCase()):c(this.searchQuery.toString().toLowerCase(),s.toString().toLowerCase())}):e}},methods:{itemClasses(e,t){return["item",{"-active":t===this.pointer,"-selected":this.isSelected(e,t)}]},openingHandler(){this.isOpened=!this.isOpened,this.setFocus()},escHandler(){this.isOpened&&this.outside()},removeSelected(e){const t=this.value.filter(s=>s!==this.value[e]);this.selected=t},isSelected(e){if(!this.selected)return!1;const t=this.display&&e[this.display]||e;if(this.multiple){const s=r=>(this.display&&r[this.display]||r).toString()===t.toString();return this.value.find(r=>s(r))}return t===this.value},outside(){this.isOpened=!1,this.focused=!1,this.unsetFocus(),this.searchQuery="",this.pointerReset()},setFocus(){this.$refs.searchable.focus()},unsetFocus(){this.$refs.searchable.blur()}}},d={};var D=u(L,A,R,!1,V,null,null,null);function V(e){for(let t in d)this[t]=d[t]}var _=function(){return D.exports}(),w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_}),$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{class:e.classes},[s("input",{staticClass:"input",attrs:{type:"radio",disabled:e.disabled,name:e.name},domProps:{checked:e.value},on:{change:function(r){return e.$emit("change",e.value)}}}),s("span",{staticClass:"radio"}),s("span",{staticClass:"text"},[e._v(e._s(e.label))])])},B=[];const M={name:"SRadiobox",model:{prop:"checked",event:"change"},props:{value:{type:String,required:!0},label:String,negative:Boolean,disabled:Boolean,name:String},computed:{classes(){return["s-radiobox",{"--is-checked":this.value,"--is-negative":this.negative,"--is-disabled":this.disabled}]}}},p={};var N=u(M,$,B,!1,Q,null,null,null);function Q(e){for(let t in p)this[t]=p[t]}var m=function(){return N.exports}(),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:m}),q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"source-code"},[s("source-code-container",{attrs:{title:e.structure.title,subtitle:e.structure.subtitle},scopedSlots:e._u([{key:"header",fn:function(){return[e.structure?s(e.currentComponent,e._b({tag:"component"},"component",e.getObject,!1),[e._t("default")],2):e._e()]},proxy:!0},{key:"content",fn:function(){return[s("button",{staticClass:"tab",class:e.tab=="prop"?"active":null,on:{click:function(r){e.tab="prop"}}},[e._v("Props")]),s("button",{staticClass:"tab",class:e.tab=="api"?"active":null,on:{click:function(r){e.tab="api"}}},[e._v("API")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.tab=="prop",expression:"tab=='prop'"}],staticClass:"tabprop"},e._l(e.structure.props,function(r){return s("div",{key:r.name,staticClass:"item"},[r.values.length<=1?s("div",[s("s-input",{attrs:{small:"",label:r.name,value:r.value,placeholder:r.placeholder},on:{input:function(i){return r.value=i}}})],1):e._e(),r.type=="boolean"?s("div",[s("label",[e._v(e._s(r.name))]),s("s-radiobox",{attrs:{name:r.name,label:"Sim",value:"true"},on:{change:function(i){return r.value=i}}}),s("s-radiobox",{attrs:{name:r.name,label:"N\xE3o",value:"false"},on:{change:function(i){return r.value=i}}})],1):e._e(),r.values.length>1&&r.type!="boolean"?s("div",[s("s-select",{attrs:{label:r.name,display:"slug","display-by":"name",placeholder:"Selecione uma op\xE7\xE3o",small:"",items:r.values.map(function(i){return{name:i||"none",slug:i}})},scopedSlots:e._u([{key:"option",fn:function(i){var a=i.option;return s("div",{},[e._v(" "+e._s(a.name)+" ")])}}],null,!0),model:{value:r.value,callback:function(i){e.$set(r,"value",i)},expression:"prop.value"}})],1):e._e()])}),0),s("div",{directives:[{name:"show",rawName:"v-show",value:e.tab=="api",expression:"tab=='api'"}],staticClass:"tabapi"},[s("table",{staticClass:"table-api"},[s("thead",[s("tr",[s("th",[e._v("Name")]),s("th",[e._v("Default")]),s("th",[e._v("Type")]),s("th",[e._v("Description")])])]),s("tbody",e._l(e.structure.props,function(r){return s("tr",{key:r.name},[s("td",[s("code",{staticClass:"codespan"},[e._v(e._s(r.name))])]),s("td",[e._v(e._s(r.default))]),s("td",[e._v(e._s(r.type))]),s("td",[e._v(e._s(r.description))])])}),0)])])]},proxy:!0}],null,!0)}),s("pre-code",{attrs:{code:e.code}})],1)},H=[];function z(e){switch(e){case"./assets/SAlertExample.json":return n(()=>import("./SAlertExample.45daad01.js"),[]);case"./assets/SButtonExample.json":return n(()=>import("./SButtonExample.c53cd8ff.js"),[]);case"./assets/SCardExample.json":return n(()=>import("./SCardExample.8163a941.js"),[]);case"./assets/SCheckboxExample.json":return n(()=>import("./SCheckboxExample.44bf5aae.js"),[]);case"./assets/SCollapsibleExample.json":return n(()=>import("./SCollapsibleExample.dc2c7078.js"),[]);case"./assets/SInputExample.json":return n(()=>import("./SInputExample.94cf81ac.js"),[]);case"./assets/SLinkExample.json":return n(()=>import("./SLinkExample.2630739c.js"),[]);case"./assets/SLoaderExample.json":return n(()=>import("./SLoaderExample.bc8f0a29.js"),[]);case"./assets/SModalExample.json":return n(()=>import("./SModalExample.b368b307.js"),[]);case"./assets/SPasswordExample.json":return n(()=>import("./SPasswordExample.d0403a83.js"),[]);case"./assets/SPopoverExample.json":return n(()=>import("./SPopoverExample.a25afaf8.js"),[]);case"./assets/SRadioboxExample.json":return n(()=>import("./SRadioboxExample.d5fe7e3f.js"),[]);case"./assets/SSearchExample.json":return n(()=>import("./SSearchExample.d9aa0b20.js"),[]);case"./assets/SSelectExample.json":return n(()=>import("./SSelectExample.9e9d3f50.js"),[]);case"./assets/SSwitchExample.json":return n(()=>import("./SSwitchExample.6e94b183.js"),[]);case"./assets/STextareaExample.json":return n(()=>import("./STextareaExample.03efc6ce.js"),[]);default:return new Promise(function(t,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function U(e){switch(e){case"../../../src/components/SAlert/Index.vue":return n(()=>import("./Index.bce48710.js"),["assets/Index.bce48710.js","assets/Index.c3a359b7.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SAvatar/Index.vue":return n(()=>import("./Index.8b2c7ca7.js"),["assets/Index.8b2c7ca7.js","assets/Index.2b074534.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SBadge/Index.vue":return n(()=>import("./Index.8ad2bf41.js"),["assets/Index.8ad2bf41.js","assets/Index.e8ae9939.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SBreadcrumb/Index.vue":return n(()=>import("./Index.d0dbf6f7.js"),["assets/Index.d0dbf6f7.js","assets/Index.4d72a263.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SButton/Index.vue":return n(()=>import("./index.1af000d2.js").then(function(t){return t.I}),["assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SCard/Index.vue":return n(()=>import("./Index.d82b9420.js"),["assets/Index.d82b9420.js","assets/Index.547ffa47.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SCarousel/Index.vue":return n(()=>import("./Index.ddb2a05a.js"),["assets/Index.ddb2a05a.js","assets/Index.08c64e5d.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SCheckbox/Index.vue":return n(()=>import("./Index.fa1c3ad5.js"),["assets/Index.fa1c3ad5.js","assets/Index.28a08bc0.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SCollapsible/Index.vue":return n(()=>import("./index.1af000d2.js").then(function(t){return t.i}),["assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SDrawer/Index.vue":return n(()=>import("./Index.abd492b2.js"),["assets/Index.abd492b2.js","assets/Index.56c22f93.css","assets/Index.dcd6a7a4.js","assets/Index.6eda2915.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SFeedbacks/Index.vue":return n(()=>import("./Index.f4ec7cc4.js"),["assets/Index.f4ec7cc4.js","assets/Index.8ee26e74.css","assets/Index.d82b9420.js","assets/Index.547ffa47.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SGrid/Index.vue":return n(()=>import("./Index.cefa833a.js"),["assets/Index.cefa833a.js","assets/Index.02961953.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SHeader/Index.vue":return n(()=>import("./index.1af000d2.js").then(function(t){return t.m}),["assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SIcon/Index.vue":return n(()=>import("./index.1af000d2.js").then(function(t){return t.h}),["assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SImage/Index.vue":return n(()=>import("./Index.0835a68e.js"),["assets/Index.0835a68e.js","assets/Index.ffdffc00.css","assets/vendor.0f0055ec.js","assets/index.1af000d2.js","assets/index.a1c60909.css"]);case"../../../src/components/SInput/Index.vue":return n(()=>import("./index.1af000d2.js").then(function(t){return t.l}),["assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SInputContainer/Index.vue":return n(()=>import("./index.1af000d2.js").then(function(t){return t.k}),["assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SLink/Index.vue":return n(()=>import("./Index.79a9f596.js"),["assets/Index.79a9f596.js","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SLoader/Index.vue":return n(()=>import("./Index.2378d97b.js"),["assets/Index.2378d97b.js","assets/Index.faa0736c.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SModal/Index.vue":return n(()=>import("./Index.960a772f.js"),["assets/Index.960a772f.js","assets/Index.f57a583c.css","assets/Index.dcd6a7a4.js","assets/Index.6eda2915.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SOverlay/Index.vue":return n(()=>import("./Index.dcd6a7a4.js"),["assets/Index.dcd6a7a4.js","assets/Index.6eda2915.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SPagination/Index.vue":return n(()=>import("./Index.1020f39a.js"),["assets/Index.1020f39a.js","assets/Index.94c8909a.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SPopover/Index.vue":return n(()=>import("./Index.ec299e75.js"),["assets/Index.ec299e75.js","assets/Index.37080f79.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SProgressbar/Index.vue":return n(()=>import("./Index.b47850d8.js"),["assets/Index.b47850d8.js","assets/Index.3be85172.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SRadiobox/Index.vue":return n(()=>Promise.resolve().then(function(){return F}),void 0);case"../../../src/components/SSelect/Index.vue":return n(()=>Promise.resolve().then(function(){return w}),void 0);case"../../../src/components/SShadowed/Index.vue":return n(()=>import("./Index.88d4924e.js"),["assets/Index.88d4924e.js","assets/Index.b8eccc17.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SSidebar/Index.vue":return n(()=>import("./index.1af000d2.js").then(function(t){return t.j}),["assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SSkeleton/Index.vue":return n(()=>import("./Index.5722dd3f.js"),["assets/Index.5722dd3f.js","assets/Index.5fc41b01.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SStepper/Index.vue":return n(()=>import("./Index.05dfae21.js"),["assets/Index.05dfae21.js","assets/Index.8078d097.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SSwitch/Index.vue":return n(()=>import("./Index.b23a685c.js"),["assets/Index.b23a685c.js","assets/Index.105b4551.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/STabber/Index.vue":return n(()=>import("./Index.4efe64d3.js"),["assets/Index.4efe64d3.js","assets/Index.9c191dac.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/STable/Index.vue":return n(()=>import("./Index.2576b1ca.js"),["assets/Index.2576b1ca.js","assets/Index.f74b095e.css","assets/Index.88d4924e.js","assets/Index.b8eccc17.css","assets/index.1af000d2.js","assets/index.a1c60909.css","assets/vendor.0f0055ec.js"]);default:return new Promise(function(t,s){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const J={name:"SourceCode",components:{SourceCodeContainer:j,SInput:E,SRadiobox:m,SSelect:_,PreCode:x},props:{file:{type:String,required:!0},comp:{type:String,required:!0}},data(){return{structure:{title:"",subtitle:"",props:[],imports:[]},tab:"prop"}},created(){this.loader().then(e=>{this.structure=JSON.parse(JSON.stringify(e))})},computed:{code(){let e="";return e+=`<template>
	<${this.renderName(!0)}
`,this.structure.props.map(t=>{if(t.value=t.value||t.default,t.value){let s=this.renderValueProp(t.type,t.value);t.type=="prop"?e+=`		${s}
`:s!="false"&&(e+=`		${t.name}=${s}
`)}}),e+=`	/>
</template>`,e+=this.getScripts(),e},currentComponent(){return this.comp?()=>U("../../../src/components/"+this.comp+"/Index.vue"):""},loader(){return this.file?()=>z(`./assets/${this.file}.json`):""},getObject(){let e={items:[]};return this.structure.props.map(t=>{if(t.value=t.value||t.default,!t.value)return e;if(t.type!="prop"){if(t.type!="boolean")return e[t.name]=t.type=="array"?JSON.parse(t.value):t.value;if(t.value=="true")return e[t.name]=!0}let r=typeof t.value!="string"?t.value.slug:t.value;r&&(e[r]=!0)}),e}},methods:{getScripts(){var t;let e=`

<script>
`;return this.structure.imports.map(s=>{e+=`	import ${s.as||s.name} from '${s.name}';
`}),e+=`	import ${this.renderName()} from '${(t=this.structure.component)==null?void 0:t.name}';
`,e+=`
	export default {
		name: 'Example',
		components: {
      			${this.renderName(!0)}
      		}
	}
<\/script>`,e},renderValueProp(e,t){return e=="string"||e=="array"?`"${t}"`:e=="object"?`{${t}}`:String(t)},renderName(e){return this.structure.component?this.structure.component.as?e?this.structure.component.as.replace(/[^a-zA-Z]/g,"").trim():this.structure.component.as:this.structure.component.name:""}}},h={};var G=u(J,q,H,!1,Y,null,null,null);function Y(e){for(let t in h)this[t]=h[t]}var Z=function(){return G.exports}(),W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});export{W as I,Z as S,m as a,_ as b};
