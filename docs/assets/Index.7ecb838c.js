import{n as a,b as c,P as d,_ as n}from"./index.c4d66450.js";import l from"./Index.31a51fe2.js";import m from"./Index.0aa49698.js";import"./vendor.0f0055ec.js";import"./clickOutside.84c04b54.js";var p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"source-code-container"},[e.title?r("h1",[e._v(e._s(e.title))]):e._e(),e.subtitle?r("h2",{staticClass:"subtitle"},[e._v(e._s(e.subtitle))]):e._e(),r("div",{staticClass:"header"},[r("p",[e._v("Preview")]),e._t("header")],2),r("div",{staticClass:"body"},[e._t("content")],2)])},v=[];const E={name:"SourceCodeContainer",props:{title:String,subtitle:String}},u={};var I=a(E,p,v,!1,x,null,null,null);function x(e){for(let t in u)this[t]=u[t]}var S=function(){return I.exports}(),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"source-code"},[r("source-code-container",{attrs:{title:e.structure.title,subtitle:e.structure.subtitle},scopedSlots:e._u([{key:"header",fn:function(){return[e.structure?r(e.currentComponent,e._b({tag:"component"},"component",e.getObject,!1),[e._t("default")],2):e._e()]},proxy:!0},{key:"content",fn:function(){return[r("button",{staticClass:"tab",class:e.tab=="prop"?"active":null,on:{click:function(s){e.tab="prop"}}},[e._v("Props")]),r("button",{staticClass:"tab",class:e.tab=="api"?"active":null,on:{click:function(s){e.tab="api"}}},[e._v("API")]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.tab=="prop",expression:"tab=='prop'"}],staticClass:"tabprop"},e._l(e.structure.props,function(s){return r("div",{key:s.name,staticClass:"item"},[s.values.length<=1?r("div",[r("s-input",{attrs:{small:"",label:s.name,value:s.value,placeholder:s.placeholder},on:{input:function(o){return s.value=o}}})],1):e._e(),s.type=="boolean"?r("div",[r("label",[e._v(e._s(s.name))]),r("s-radiobox",{attrs:{name:s.name,label:"Sim",value:"true"},on:{change:function(o){return s.value=o}}}),r("s-radiobox",{attrs:{name:s.name,label:"N\xE3o",value:"false"},on:{change:function(o){return s.value=o}}})],1):e._e(),s.values.length>1&&s.type!="boolean"?r("div",[r("s-select",{attrs:{label:s.name,display:"slug","display-by":"name",placeholder:"Selecione uma op\xE7\xE3o",small:"",items:s.values.map(function(o){return{name:o||"none",slug:o}})},scopedSlots:e._u([{key:"option",fn:function(o){var i=o.option;return r("div",{},[e._v(" "+e._s(i.name)+" ")])}}],null,!0),model:{value:s.value,callback:function(o){e.$set(s,"value",o)},expression:"prop.value"}})],1):e._e()])}),0),r("div",{directives:[{name:"show",rawName:"v-show",value:e.tab=="api",expression:"tab=='api'"}],staticClass:"tabapi"},[r("table",{staticClass:"table-api"},[r("thead",[r("tr",[r("th",[e._v("Name")]),r("th",[e._v("Default")]),r("th",[e._v("Type")]),r("th",[e._v("Description")])])]),r("tbody",e._l(e.structure.props,function(s){return r("tr",{key:s.name},[r("td",[r("code",{staticClass:"codespan"},[e._v(e._s(s.name))])]),r("td",[e._v(e._s(s.default))]),r("td",[e._v(e._s(s.type))]),r("td",[e._v(e._s(s.description))])])}),0)])])]},proxy:!0}],null,!0)}),r("pre-code",{attrs:{code:e.code}})],1)},b=[];function j(e){switch(e){case"./assets/SAlertExample.json":return n(()=>import("./SAlertExample.45daad01.js"),[]);case"./assets/SButtonExample.json":return n(()=>import("./SButtonExample.c53cd8ff.js"),[]);case"./assets/SCardExample.json":return n(()=>import("./SCardExample.8163a941.js"),[]);case"./assets/SCheckboxExample.json":return n(()=>import("./SCheckboxExample.44bf5aae.js"),[]);case"./assets/SCollapsibleExample.json":return n(()=>import("./SCollapsibleExample.dc2c7078.js"),[]);case"./assets/SInputExample.json":return n(()=>import("./SInputExample.94cf81ac.js"),[]);case"./assets/SLinkExample.json":return n(()=>import("./SLinkExample.2630739c.js"),[]);case"./assets/SLoaderExample.json":return n(()=>import("./SLoaderExample.bc8f0a29.js"),[]);case"./assets/SModalExample.json":return n(()=>import("./SModalExample.b368b307.js"),[]);case"./assets/SPasswordExample.json":return n(()=>import("./SPasswordExample.d0403a83.js"),[]);case"./assets/SPopoverExample.json":return n(()=>import("./SPopoverExample.a25afaf8.js"),[]);case"./assets/SRadioboxExample.json":return n(()=>import("./SRadioboxExample.d5fe7e3f.js"),[]);case"./assets/SSearchExample.json":return n(()=>import("./SSearchExample.d9aa0b20.js"),[]);case"./assets/SSelectExample.json":return n(()=>import("./SSelectExample.9e9d3f50.js"),[]);case"./assets/SSwitchExample.json":return n(()=>import("./SSwitchExample.6e94b183.js"),[]);case"./assets/STextareaExample.json":return n(()=>import("./STextareaExample.03efc6ce.js"),[]);default:return new Promise(function(t,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function P(e){switch(e){case"../../../src/components/SAlert/Index.vue":return n(()=>import("./Index.4d5eca70.js"),["assets/Index.4d5eca70.js","assets/Index.c3a359b7.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SAvatar/Index.vue":return n(()=>import("./Index.5e0631a4.js"),["assets/Index.5e0631a4.js","assets/Index.2b074534.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SBadge/Index.vue":return n(()=>import("./Index.704d2690.js"),["assets/Index.704d2690.js","assets/Index.e8ae9939.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SBreadcrumb/Index.vue":return n(()=>import("./Index.10ce7a53.js"),["assets/Index.10ce7a53.js","assets/Index.4d72a263.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SButton/Index.vue":return n(()=>import("./index.c4d66450.js").then(function(t){return t.I}),["assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SCard/Index.vue":return n(()=>import("./Index.b9702654.js"),["assets/Index.b9702654.js","assets/Index.547ffa47.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SCarousel/Index.vue":return n(()=>import("./Index.e967169c.js"),["assets/Index.e967169c.js","assets/Index.3a3867f8.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SCheckbox/Index.vue":return n(()=>import("./Index.65ff02d9.js"),["assets/Index.65ff02d9.js","assets/Index.4b8d15a4.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SCollapsible/Index.vue":return n(()=>import("./index.c4d66450.js").then(function(t){return t.i}),["assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SDrawer/Index.vue":return n(()=>import("./Index.82a1f5a7.js"),["assets/Index.82a1f5a7.js","assets/Index.56c22f93.css","assets/Index.de1b2b33.js","assets/Index.6eda2915.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SFeedbacks/Index.vue":return n(()=>import("./Index.7136e90d.js"),["assets/Index.7136e90d.js","assets/Index.a6c1868c.css","assets/Index.b9702654.js","assets/Index.547ffa47.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SFormBuilder/Index.vue":return n(()=>import("./Index.9cc5bedd.js").then(function(t){return t.I}),["assets/Index.9cc5bedd.js","assets/Index.3140d5ed.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SGrid/Index.vue":return n(()=>import("./Index.79624f2d.js"),["assets/Index.79624f2d.js","assets/Index.02961953.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SHeader/Index.vue":return n(()=>import("./index.c4d66450.js").then(function(t){return t.m}),["assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SIcon/Index.vue":return n(()=>import("./index.c4d66450.js").then(function(t){return t.h}),["assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SImage/Index.vue":return n(()=>import("./Index.b4f87485.js"),["assets/Index.b4f87485.js","assets/Index.ffdffc00.css","assets/vendor.0f0055ec.js","assets/index.c4d66450.js","assets/index.84f2c6d1.css"]);case"../../../src/components/SInput/Index.vue":return n(()=>import("./index.c4d66450.js").then(function(t){return t.l}),["assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SInputContainer/Index.vue":return n(()=>import("./index.c4d66450.js").then(function(t){return t.k}),["assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SLink/Index.vue":return n(()=>import("./Index.0dd310fc.js"),["assets/Index.0dd310fc.js","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SLoader/Index.vue":return n(()=>import("./Index.1178fb05.js"),["assets/Index.1178fb05.js","assets/Index.faa0736c.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SModal/Index.vue":return n(()=>import("./Index.0312982a.js"),["assets/Index.0312982a.js","assets/Index.f57a583c.css","assets/Index.de1b2b33.js","assets/Index.6eda2915.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SOverlay/Index.vue":return n(()=>import("./Index.de1b2b33.js"),["assets/Index.de1b2b33.js","assets/Index.6eda2915.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SPagination/Index.vue":return n(()=>import("./Index.4bae7c10.js"),["assets/Index.4bae7c10.js","assets/Index.94c8909a.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SPin/Index.vue":return n(()=>import("./Index.d92f77c4.js"),["assets/Index.d92f77c4.js","assets/Index.5b99fa2d.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SPopover/Index.vue":return n(()=>import("./Index.a6a4b33f.js"),["assets/Index.a6a4b33f.js","assets/Index.8ddd653c.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SProgressbar/Index.vue":return n(()=>import("./Index.50086cd6.js"),["assets/Index.50086cd6.js","assets/Index.3be85172.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SRadiobox/Index.vue":return n(()=>import("./Index.0aa49698.js"),["assets/Index.0aa49698.js","assets/Index.dd2309ce.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SSearch/Index.vue":return n(()=>import("./Index.25871fd0.js"),["assets/Index.25871fd0.js","assets/Index.0ff344e3.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js","assets/Index.a6a4b33f.js","assets/Index.8ddd653c.css","assets/clickOutside.84c04b54.js"]);case"../../../src/components/SSelect/Index.vue":return n(()=>import("./Index.31a51fe2.js"),["assets/Index.31a51fe2.js","assets/Index.1bd2f6ab.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js","assets/clickOutside.84c04b54.js"]);case"../../../src/components/SShadowed/Index.vue":return n(()=>import("./Index.37645664.js"),["assets/Index.37645664.js","assets/Index.b8eccc17.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SSidebar/Index.vue":return n(()=>import("./index.c4d66450.js").then(function(t){return t.j}),["assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SSkeleton/Index.vue":return n(()=>import("./Index.85a3a062.js"),["assets/Index.85a3a062.js","assets/Index.5fc41b01.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SStepper/Index.vue":return n(()=>import("./Index.a96bcc72.js"),["assets/Index.a96bcc72.js","assets/Index.1a7b8c59.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/SSwitch/Index.vue":return n(()=>import("./Index.9c255eb6.js"),["assets/Index.9c255eb6.js","assets/Index.105b4551.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/STabber/Index.vue":return n(()=>import("./Index.8c78a32f.js"),["assets/Index.8c78a32f.js","assets/Index.9c191dac.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js"]);case"../../../src/components/STable/Index.vue":return n(()=>import("./Index.5aaad2e8.js"),["assets/Index.5aaad2e8.js","assets/Index.46669add.css","assets/index.c4d66450.js","assets/index.84f2c6d1.css","assets/vendor.0f0055ec.js","assets/Index.a6a4b33f.js","assets/Index.8ddd653c.css"]);default:return new Promise(function(t,r){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}const h={name:"SourceCode",components:{SourceCodeContainer:S,SInput:c,SRadiobox:m,SSelect:l,PreCode:d},props:{file:{type:String,required:!0},comp:{type:String,required:!0}},data(){return{structure:{title:"",subtitle:"",props:[],imports:[]},tab:"prop"}},created(){this.loader().then(e=>{this.structure=JSON.parse(JSON.stringify(e))})},computed:{code(){let e="";return e+=`<template>
	<${this.renderName(!0)}
`,this.structure.props.map(t=>{if(t.value=t.value||t.default,t.value){let r=this.renderValueProp(t.type,t.value);t.type=="prop"?e+=`		${r}
`:r!="false"&&(e+=`		${t.name}=${r}
`)}}),e+=`	/>
</template>`,e+=this.getScripts(),e},currentComponent(){return this.comp?()=>P("../../../src/components/"+this.comp+"/Index.vue"):""},loader(){return this.file?()=>j(`./assets/${this.file}.json`):""},getObject(){let e={items:[]};return this.structure.props.map(t=>{if(t.value=t.value||t.default,!t.value)return e;if(t.type!="prop"){if(t.type!="boolean")return e[t.name]=t.type=="array"?JSON.parse(t.value):t.value;if(t.value=="true")return e[t.name]=!0}let s=typeof t.value!="string"?t.value.slug:t.value;s&&(e[s]=!0)}),e}},methods:{getScripts(){var t;let e=`

<script>
`;return this.structure.imports.map(r=>{e+=`	import ${r.as||r.name} from '${r.name}';
`}),e+=`	import ${this.renderName()} from '${(t=this.structure.component)==null?void 0:t.name}';
`,e+=`
	export default {
		name: 'Example',
		components: {
      			${this.renderName(!0)}
      		}
	}
<\/script>`,e},renderValueProp(e,t){return e=="string"||e=="array"?`"${t}"`:e=="object"?`{${t}}`:String(t)},renderName(e){return this.structure.component?this.structure.component.as?e?this.structure.component.as.replace(/[^a-zA-Z]/g,"").trim():this.structure.component.as:this.structure.component.name:""}}},_={};var R=a(h,f,b,!1,O,null,null,null);function O(e){for(let t in _)this[t]=_[t]}var y=function(){return R.exports}();export{y as default};