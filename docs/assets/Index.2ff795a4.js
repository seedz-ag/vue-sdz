import{n as _,P as p,_ as n,b as v}from"./index.88ccfa18.js";import d from"./Index.b2ab09d0.js";import f from"./Index.ace444db.js";import h from"./Index.87d626b8.js";import"./Index.05a6b9d7.js";import"./Index.f23f84c0.js";import"./clickOutside.84c04b54.js";var E=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"source-code-container"},[e.title?t("h1",[e._v(e._s(e.title))]):e._e(),e.subtitle?t("h2",{staticClass:"subtitle"},[e._v(e._s(e.subtitle))]):e._e(),t("div",{staticClass:"header"},[t("p",[e._v("Preview")]),e._t("header")],2),t("div",{staticClass:"body"},[e._t("content")],2)])},b=[];const S={name:"SourceCodeContainer",props:{title:String,subtitle:String}},u={};var x=_(S,E,b,!1,y,null,null,null);function y(s){for(let e in u)this[e]=u[e]}const C=function(){return x.exports}();var P=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"source-code"},[t("source-code-container",{attrs:{title:e.structure.title,subtitle:e.structure.subtitle},scopedSlots:e._u([{key:"header",fn:function(){return[e.structure?t(e.currentComponent,e._b({tag:"component"},"component",e.getObject,!1),[e._t("default")],2):e._e()]},proxy:!0},{key:"content",fn:function(){return[t("button",{staticClass:"tab",class:e.tab=="prop"?"active":null,on:{click:function(o){e.tab="prop"}}},[e._v("Props")]),t("button",{staticClass:"tab",class:e.tab=="api"?"active":null,on:{click:function(o){e.tab="api"}}},[e._v("API")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab=="prop",expression:"tab=='prop'"}],staticClass:"tabprop"},e._l(e.structure.props,function(r){return t("div",{key:r.name,staticClass:"item"},[r.values.length<=1?t("div",[t("s-input",{attrs:{small:"",label:r.name,value:r.value,placeholder:r.placeholder},on:{input:function(i){return r.value=i}}})],1):e._e(),r.type=="boolean"?t("div",[t("label",[e._v(e._s(r.name))]),t("s-radiobox",{attrs:{name:r.name,label:"Sim",value:"true"},on:{change:function(i){return r.value=i}}}),t("s-radiobox",{attrs:{name:r.name,label:"N\xE3o",value:"false"},on:{change:function(i){return r.value=i}}})],1):e._e(),r.values.length>1&&r.type!="boolean"?t("div",[t("s-select",{attrs:{label:r.name,display:"slug","display-by":"name",placeholder:"Selecione uma op\xE7\xE3o",small:"",items:r.values.map(function(o){return{name:o||"none",slug:o}})},scopedSlots:e._u([{key:"option",fn:function(i){var m=i.option;return t("div",{},[e._v(" "+e._s(m.name)+" ")])}}],null,!0),model:{value:r.value,callback:function(i){e.$set(r,"value",i)},expression:"prop.value"}})],1):e._e()])}),0),t("div",{directives:[{name:"show",rawName:"v-show",value:e.tab=="api",expression:"tab=='api'"}],staticClass:"tabapi"},[t("table",{staticClass:"table-api"},[t("thead",[t("tr",[t("th",[e._v("Name")]),t("th",[e._v("Default")]),t("th",[e._v("Type")]),t("th",[e._v("Description")])])]),t("tbody",e._l(e.structure.props,function(r){return t("tr",{key:r.name},[t("td",[t("code",{staticClass:"codespan"},[e._v(e._s(r.name))])]),t("td",[e._v(e._s(r.default))]),t("td",[e._v(e._s(r.type))]),t("td",[e._v(e._s(r.description))])])}),0)])])]},proxy:!0}],null,!0)}),t("pre-code",{attrs:{code:e.code}})],1)},g=[];const I={name:"SourceCode",components:{SourceCodeContainer:C,SInput:d,SRadiobox:h,SSelect:f,PreCode:p},props:{file:{type:String,required:!0},comp:{type:String,required:!0}},data(){return{structure:{title:"",subtitle:"",props:[],imports:[]},tab:"prop"}},created(){this.loader().then(s=>{this.structure=JSON.parse(JSON.stringify(s))})},computed:{code(){let s="";return s+=`<template>
	<${this.renderName(!0)}
`,this.structure.props.map(e=>{if(e.value=e.value||e.default,e.value){let a=this.renderValueProp(e.type,e.value);e.type=="prop"?s+=`		${a}
`:a!="false"&&(s+=`		${e.name}=${a}
`)}}),s+=`	/>
</template>`,s+=this.getScripts(),s},currentComponent(){return this.comp?()=>n(()=>import("../../../src/components/"+this.comp+"/Index.vue"),[]):""},loader(){return this.file?()=>v(Object.assign({"./assets/SAlertExample.json":()=>n(()=>import("./SAlertExample.d346c839.js"),[]),"./assets/SButtonExample.json":()=>n(()=>import("./SButtonExample.19e35ea7.js"),[]),"./assets/SCardExample.json":()=>n(()=>import("./SCardExample.f0672141.js"),[]),"./assets/SCheckboxExample.json":()=>n(()=>import("./SCheckboxExample.11ee3c0e.js"),[]),"./assets/SCollapsibleExample.json":()=>n(()=>import("./SCollapsibleExample.61f8a7b0.js"),[]),"./assets/SInputExample.json":()=>n(()=>import("./SInputExample.51da05cb.js"),[]),"./assets/SLinkExample.json":()=>n(()=>import("./SLinkExample.de81bccf.js"),[]),"./assets/SLoaderExample.json":()=>n(()=>import("./SLoaderExample.65c5e5c2.js"),[]),"./assets/SModalExample.json":()=>n(()=>import("./SModalExample.0b184114.js"),[]),"./assets/SPasswordExample.json":()=>n(()=>import("./SPasswordExample.fd9abe97.js"),[]),"./assets/SPopoverExample.json":()=>n(()=>import("./SPopoverExample.2f542024.js"),[]),"./assets/SRadioboxExample.json":()=>n(()=>import("./SRadioboxExample.3d48bac4.js"),[]),"./assets/SSearchExample.json":()=>n(()=>import("./SSearchExample.ae0fa01e.js"),[]),"./assets/SSelectExample.json":()=>n(()=>import("./SSelectExample.ade79f67.js"),[]),"./assets/SSwitchExample.json":()=>n(()=>import("./SSwitchExample.9e29a52f.js"),[]),"./assets/STextareaExample.json":()=>n(()=>import("./STextareaExample.6dfda42a.js"),[])}),`./assets/${this.file}.json`):""},getObject(){let s={items:[]};return this.structure.props.map(e=>{if(e.value=e.value||e.default,!e.value)return s;if(e.type!="prop"){if(e.type!="boolean")return s[e.name]=e.type=="array"?JSON.parse(e.value):e.value;if(e.value=="true")return s[e.name]=!0}let t=typeof e.value!="string"?e.value.slug:e.value;t&&(s[t]=!0)}),s}},methods:{getScripts(){var e;let s=`

<script>
`;return this.structure.imports.map(a=>{s+=`	import ${a.as||a.name} from '${a.name}';
`}),s+=`	import ${this.renderName()} from '${(e=this.structure.component)==null?void 0:e.name}';
`,s+=`
	export default {
		name: 'Example',
		components: {
      			${this.renderName(!0)}
      		}
	}
<\/script>`,s},renderValueProp(s,e){return s=="string"||s=="array"?`"${e}"`:s=="object"?`{${e}}`:String(e)},renderName(s){return this.structure.component?this.structure.component.as?s?this.structure.component.as.replace(/[^a-zA-Z]/g,"").trim():this.structure.component.as:this.structure.component.name:""}}},l={};var $=_(I,P,g,!1,j,null,null,null);function j(s){for(let e in l)this[e]=l[e]}const k=function(){return $.exports}();export{k as default};