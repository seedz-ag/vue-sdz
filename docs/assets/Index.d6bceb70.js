import{n as a}from"./index.1f769140.js";import{S as e}from"./box.293e80ab.js";import"./vendor.5affd582.js";const s={name:"SCheckbox",props:{value:{type:Boolean,required:!0},label:String,negative:Boolean,disabled:Boolean},computed:{classes(){return["s-checkbox",{"--is-checked":this.value,"--is-negative":this.negative,"--is-disabled":this.disabled}]}}},t={};var o=a(s,(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("label",{class:a.classes},[s("input",{staticClass:"input",attrs:{type:"checkbox",disabled:a.disabled},domProps:{checked:a.value},on:{input:function(e){return a.$emit("input",e.target.checked)}}}),a._m(0),s("span",{staticClass:"text"},[a._v(a._s(a.label))])])}),[function(){var a=this.$createElement,e=this._self._c||a;return e("span",{staticClass:"check"},[e("i",{staticClass:"icon sdz-check"})])}],!1,l,null,null,null);function l(a){for(let e in t)this[e]=t[e]}const c={};var i=a({components:{SCheckbox:function(){return o.exports}(),SBox:e},data:()=>({data0:!1,data1:!0,data2:!0,data3:!0,data4:!0})},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"s-checkbox-example"},[s("h1",{staticClass:"h1"},[a._v("Checkbox")]),s("p",{staticClass:"subtitle"},[a._v(" Input Checkbox é uma caixa de seleção que a pessoa usuária pode marcar ou desmarcar para aceitar alguma ação. Podendo usar um ou mais checkboxs seguidos. ")]),s("h2",{staticClass:"h2"},[a._v("Quando usar")]),a._m(0),s("h2",{staticClass:"h2"},[a._v("Default")]),s("s-box",[s("s-checkbox",{attrs:{label:"Default Checkbox"},model:{value:a.data0,callback:function(e){a.data0=e},expression:"data0"}}),s("br"),s("s-checkbox",{attrs:{label:"Checked Checkbox"},model:{value:a.data1,callback:function(e){a.data1=e},expression:"data1"}})],1),s("h2",{staticClass:"h2"},[a._v("Stats")]),s("s-box",[s("s-checkbox",{attrs:{label:"Positive"},model:{value:a.data2,callback:function(e){a.data2=e},expression:"data2"}}),s("br"),s("s-checkbox",{attrs:{label:"Negative",negative:""},model:{value:a.data3,callback:function(e){a.data3=e},expression:"data3"}})],1),s("h2",{staticClass:"h2"},[a._v("Disabled")]),s("s-box",[s("s-checkbox",{attrs:{label:"disabled",disabled:""},model:{value:a.data4,callback:function(e){a.data4=e},expression:"data4"}})],1)],1)}),[function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("p",{staticClass:"subtitle"},[a._v(" Use as caixas de seleção quando as pessoas usuárias devem selecionar uma ou mais opções de uma lista de itens relacionados; "),s("br"),s("br"),a._v(" Pode ser usado para filtrar dados em uma página, em um menu ou em um componente e em uma ação explícita na qual é necessária para aplicar as configurações; "),s("br"),s("br"),a._v(" Podem ser utilizados em alguns componentes como: Modais, Formulários, Tabelas, Termos e Condições. ")])}],!1,n,null,null,null);function n(a){for(let e in c)this[e]=c[e]}var r=function(){return i.exports}();export{r as default};
