import{S as t}from"./Index.d473942c.js";import{S as e}from"./Index.e5ed1883.js";import{S as a}from"./box.293e80ab.js";import{n}from"./index.1f769140.js";import"./vendor.5affd582.js";import"./Index.c188d3e9.js";const s={};var r=n({components:{SInput:t,SButton:e,SBox:a},data:()=>({inputMask:"",inputMoney:"",inputRounded:"",inputSearch:"",inputDataError:"",inputTeste:"",inputFloatLabel:""}),methods:{onInputMoney(t){this.inputMoney=t}}},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"s-input-example"},[a("h1",{staticClass:"h1"},[t._v("Inputs")]),t._m(0),a("h2",{staticClass:"h2"},[t._v("States")]),a("s-box",[a("s-input",{attrs:{label:"Default"}}),a("s-input",{attrs:{placeholder:"Disabled input",disabled:"disabled"}}),a("s-input",{attrs:{placeholder:"Disabled readonly input",readonly:"readonly"}}),a("s-input",{attrs:{label:"error",validation:t.inputDataError?"":"error msg",value:t.inputDataError},on:{input:function(e){return t.inputDataError=e}}}),a("s-input",{attrs:{label:"is float label","float-label":"",value:t.inputFloatLabel},on:{input:function(e){return t.inputFloatLabel=e}}})],1),a("h2",{staticClass:"h2"},[t._v("Sizing")]),a("s-box",{staticClass:"sizing flex-inline"},[a("s-input",{attrs:{label:"Small",small:""}}),a("s-input",{attrs:{label:"Default"}}),a("s-input",{attrs:{label:"Larger",larger:""}})],1),a("h2",{staticClass:"h2"},[t._v("Rounded")]),a("s-box",[a("s-input",{attrs:{label:"rounded",round:"",value:t.inputRounded},on:{input:function(e){return t.inputRounded=e}}})],1),a("h2",{staticClass:"h2"},[t._v("Masked Input")]),t._m(1),a("s-box",[a("s-input",{attrs:{raw:"",label:"CPF",mask:["###.###.###-##"],value:t.inputMask},on:{input:function(e){return t.inputMask=e}}}),a("s-input",{attrs:{raw:"",label:"Phone",mask:["(##) ####-####"],value:t.inputMask},on:{input:function(e){return t.inputMask=e}}}),a("s-input",{attrs:{label:"money","is-money":"",value:t.inputMoney},on:{input:t.onInputMoney}})],1),a("h2",{staticClass:"h2"},[t._v("Enhancers")]),a("s-box",[a("s-input",{attrs:{round:"",icon:"sdz-search",value:t.inputSearch,placeholder:"Search"},on:{input:function(e){return t.inputSearch=e}}})],1)],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"subtitle"},[t._v(" Input Text permite a pessoa usuária interagir e inserir conteúdo e dados. Pode ser usado para entradas de formulários longos e curtos. "),a("br"),a("br"),t._v(" Use em formulários para permitir as pessoas inserirem informações; "),a("br"),a("br"),t._v(" Podem fazer parte de componentes como modais no caso de um modal de login, por exemplo; "),a("br"),a("br"),t._v(" Os tipos de entrada de texto comuns incluem: nomes de pessoas usuárias, descrições, URLs, e-mails, endereços e qualquer outra forma de inserção de informação. "),a("br"),a("br"),t._v(" Considerar Input Text sem label em casos específicos, mas com a utilização obrigatório do placehold como texto orientador. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"subtitle"},[t._v(" CPF: 000.000.000-00"),a("br"),t._v(" CNPJ: 00.000.000/0000-00"),a("br"),t._v(" Telefone: (00) 00000-0000"),a("br")])}],!1,o,null,null,null);function o(t){for(let e in s)this[e]=s[e]}var i=function(){return r.exports}();export{i as default};
