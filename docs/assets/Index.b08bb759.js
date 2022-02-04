import{a as d,S as i}from"./Index.5a41ca1f.js";import{n as l,S as r,a as n,P as c}from"./index.1af000d2.js";import"./vendor.0f0055ec.js";var u=function(){var a=this,o=a.$createElement,e=a._self._c||o;return e("div",{staticClass:"s-radiobox-example"},[e("s-title",{attrs:{size:"title-1"}},[a._v("Radiobox")]),e("p",{staticClass:"subtitle"},[a._v(" Input Radio Button tem como objetivo possibilitar que a pessoa usu\xE1ria escolha uma op\xE7\xE3o dentro da interface. ")]),e("p",{staticClass:"subtitle"},[a._v(" Deve ser usado quando \xE9 permitido selecionar apenas uma \xFAnica op\xE7\xE3o em uma lista, principalmente em cen\xE1rios onde est\xE3o expostos todas as op\xE7\xF5es dispon\xEDveis. ")]),e("p",{staticClass:"subtitle"},[a._v(" Podem ser utilizados em alguns componentes como: Listas, Formul\xE1rios e Tabelas. ")]),e("p",{staticClass:"subtitle"},[a._v(" N\xE3o deve ser usado se mais de uma op\xE7\xE3o puder ser selecionada, nesse cen\xE1rio devemos utilizar o checkbox. ")]),e("source-code",{attrs:{file:"SRadioboxExample",comp:"SRadiobox"}}),e("s-title",{attrs:{size:"title-2"}},[a._v("Default")]),e("s-box",[e("s-radiobox",{attrs:{id:"sim",label:"Default Radiobox",name:"dafault",value:"sim"},model:{value:a.data0,callback:function(t){a.data0=t},expression:"data0"}}),e("s-radiobox",{attrs:{id:"nao",label:"Default Radiobox",name:"dafault",value:"n\xE3o"},model:{value:a.data0,callback:function(t){a.data0=t},expression:"data0"}}),e("br"),e("s-radiobox",{attrs:{label:"Checked Radiobox"},model:{value:a.data2,callback:function(t){a.data2=t},expression:"data2"}})],1),e("pre-code",{attrs:{code:a.code1}}),e("s-title",{attrs:{size:"title-2"}},[a._v("Stats")]),e("s-box",[e("s-radiobox",{attrs:{label:"Positive"},model:{value:a.data3,callback:function(t){a.data3=t},expression:"data3"}}),e("br"),e("s-radiobox",{attrs:{label:"Negative",negative:""},model:{value:a.data4,callback:function(t){a.data4=t},expression:"data4"}})],1),e("pre-code",{attrs:{code:a.code2}}),e("s-title",{attrs:{size:"title-2"}},[a._v("Disabled")]),e("s-box",[e("s-radiobox",{attrs:{label:"disabled",disabled:""},model:{value:a.data5,callback:function(t){a.data5=t},expression:"data5"}})],1),e("pre-code",{attrs:{code:a.code3}})],1)},b=[];const m={components:{SRadiobox:d,SBox:r,STitle:n,SourceCode:i,PreCode:c},data(){return{data0:!1,data1:!0,data2:!0,data3:!0,data4:!0,data5:!0,code1:`<s-radiobox id="sim" label="Default Radiobox" name="dafault" value="sim" v-model="data0" />
      <s-radiobox id="nao" label="Default Radiobox" name="dafault" value="n\xE3o" v-model="data0" />
      <s-radiobox label="Checked Radiobox" v-model="data2" />`,code2:`<s-radiobox label="Positive" v-model="data3" />
      <s-radiobox label="Negative" negative v-model="data4" />`,code3:'<s-radiobox label="disabled" disabled v-model="data5" />'}}},s={};var v=l(m,u,b,!1,x,null,null,null);function x(a){for(let o in s)this[o]=s[o]}var R=function(){return v.exports}();export{R as default};
