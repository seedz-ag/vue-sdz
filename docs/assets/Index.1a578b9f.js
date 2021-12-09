import{n as a}from"./index.1f769140.js";import{S as s}from"./box.293e80ab.js";import"./vendor.5affd582.js";const e={name:"SSwitch",props:{value:{type:Boolean,required:!0},label:String,negative:Boolean,disabled:Boolean},computed:{classes(){return["s-switch",{"--is-checked":this.value,"--is-negative":this.negative,"--is-disabled":this.disabled}]}}},t={};var i=a(e,(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("label",{class:a.classes},[e("input",{staticClass:"input",attrs:{type:"checkbox",disabled:a.disabled},domProps:{checked:a.value},on:{input:function(s){return a.$emit("input",s.target.checked)}}}),e("span",{staticClass:"switch"}),e("span",{staticClass:"text"},[a._v(a._s(a.label))])])}),[],!1,l,null,null,null);function l(a){for(let s in t)this[s]=t[s]}const o={};var n=a({components:{SSwitch:function(){return i.exports}(),SBox:s},data:()=>({data0:!1,data1:!0,data2:!0,data3:!0})},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("div",{staticClass:"s-switch-example"},[e("h1",{staticClass:"h1"},[a._v("Switch")]),e("p",{staticClass:"subtitle"},[a._v(' Switch tem como objetivo possibilitar a pessoa usuária habilitar ou desabilitar algo como um alternador binário de "on/off". ')]),e("h2",{staticClass:"h2"},[a._v("Regras de aplicação")]),a._m(0),e("h2",{staticClass:"h2"},[a._v("Default")]),e("s-box",[e("s-switch",{attrs:{label:"Default Switch"},model:{value:a.data0,callback:function(s){a.data0=s},expression:"data0"}}),e("br"),e("s-switch",{attrs:{label:"Checked Switch"},model:{value:a.data2,callback:function(s){a.data2=s},expression:"data2"}})],1),e("h2",{staticClass:"h2"},[a._v("Disabled")]),e("s-box",[e("s-switch",{attrs:{label:"disabled",disabled:""}})],1)],1)}),[function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("p",{staticClass:"subtitle"},[a._v(' Podem ser utilizados para habilitar ou desabilitar configurações como "receber ou não" push notifications; '),e("br"),e("br"),a._v(" Não deve ser usado em cenários onde é interessante a pessoa usuária conseguir confirmar as opções selecionadas antes das ações serem aplicadas. Nesses casos deve-se utilizar o checkbox. ")])}],!1,c,null,null,null);function c(a){for(let s in o)this[s]=o[s]}var r=function(){return n.exports}();export{r as default};
