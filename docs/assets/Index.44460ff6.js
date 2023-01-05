import{n as r,b as o,S as u,a as p,P as c}from"./index.c61da6d1.js";import d from"./Index.9549a0a2.js";import"./Index.af15647c.js";import"./clickOutside.84c04b54.js";import"./Index.01ca4dea.js";var m=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"s-input-example"},[e("s-title",{attrs:{size:"title-1"}},[t._v("Inputs")]),e("p",{staticClass:"subtitle"},[t._v(" Input Text permite a pessoa usu\xE1ria interagir e inserir conte\xFAdo e dados. Pode ser usado para entradas de formul\xE1rios longos e curtos. ")]),e("p",{staticClass:"subtitle"},[t._v(" Use em formul\xE1rios para permitir as pessoas inserirem informa\xE7\xF5es; ")]),e("p",{staticClass:"subtitle"},[t._v(" Podem fazer parte de componentes como modais no caso de um modal de login, por exemplo; ")]),e("p",{staticClass:"subtitle"},[t._v(" Os tipos de entrada de texto comuns incluem: nomes de pessoas usu\xE1rias, descri\xE7\xF5es, URLs, e-mails, endere\xE7os e qualquer outra forma de inser\xE7\xE3o de informa\xE7\xE3o. ")]),e("p",{staticClass:"subtitle"},[t._v(" Considerar Input Text sem label em casos espec\xEDficos, mas com a utiliza\xE7\xE3o obrigat\xF3rio do placehold como texto orientador. ")]),e("source-code",{attrs:{file:"SInputExample",comp:"SInput"}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Stats")]),e("s-box",{staticClass:"multiple-examples"},[e("s-input",{attrs:{label:"Default"}}),e("s-input",{attrs:{label:"With Button",button:"Alterar","button-icon":"check",outlined:""}}),e("s-input",{attrs:{placeholder:"Input without label"}}),e("s-input",{attrs:{label:"disabled",disabled:"disabled",placeholder:"Disabled input"}}),e("s-input",{attrs:{readonly:"readonly",placeholder:"Disabled readonly input"}}),e("s-input",{attrs:{label:"error",validation:t.inputDataError?"":"error msg",value:t.inputDataError},on:{input:function(a){return t.inputDataError=a}}}),e("s-input",{attrs:{label:"is float label","float-label":"",value:t.inputFloatLabel},on:{input:function(a){return t.inputFloatLabel=a}}})],1),e("pre-code",{attrs:{code:t.code1}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Sizing")]),e("s-box",{staticClass:"sizing flex-inline"},[e("s-input",{attrs:{label:"Small",small:""}}),e("s-input",{attrs:{label:"Default"}}),e("s-input",{attrs:{label:"Larger",larger:""}})],1),e("pre-code",{attrs:{code:t.code2}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Masked Input")]),t._m(0),e("s-box",{staticClass:"multiple-examples"},[e("s-input",{attrs:{raw:"",label:"CPF",mask:["###.###.###-##"],value:t.inputMask},on:{input:function(a){return t.inputMask=a}}}),e("s-input",{attrs:{raw:"",label:"Phone",mask:["(##) ####-####"],value:t.inputMask},on:{input:function(a){return t.inputMask=a}}}),e("s-input",{attrs:{label:"money","is-money":"",value:t.inputMoney},on:{input:t.onInputMoney}})],1),e("pre-code",{attrs:{code:t.code4}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Enhancers")]),e("s-box",{staticClass:"multiple-examples"},[e("s-input",{attrs:{round:"",icon:"carbon:search",value:t.inputSearch,placeholder:"Search"},on:{input:function(a){return t.inputSearch=a}}}),e("s-input",{attrs:{round:"","right-icon":"carbon:search",value:t.inputSearch,placeholder:"Search"},on:{input:function(a){return t.inputSearch=a}}})],1),e("pre-code",{attrs:{code:t.code5}})],1)},b=[function(){var n=this,t=n.$createElement,s=n._self._c||t;return s("p",{staticClass:"subtitle"},[n._v(" CPF: 000.000.000-00"),s("br"),n._v(" CNPJ: 00.000.000/0000-00"),s("br"),n._v(" Telefone: (00) 00000-0000"),s("br")])}];const v={components:{SInput:o,SBox:u,STitle:p,SourceCode:d,PreCode:c},data(){return{inputMask:"",inputMoney:0,inputRounded:"",inputSearch:"",inputDataError:"",inputTeste:"",inputFloatLabel:"",code1:`<s-input label="Default" />

    <s-input
      placeholder="Disabled input"
      disabled="disabled"
    />

    <s-input
      placeholder="Disabled readonly input"
      readonly="readonly"
    />

    <s-input
      label="error"
      :validation="inputDataError ? '' : 'error msg'"
      :value="inputDataError"
      @input="value => inputDataError = value"
    />

    <s-input
      label="is float label"
      float-label
      :value="inputFloatLabel"
      @input="value => inputFloatLabel = value"
    />`,code2:`<s-input
        label="Small"
        small
      />
      <s-input
        label="Default"
      />
      <s-input
        label="Larger"
        larger
      />`,code4:`<s-input
        raw
        label="CPF"
        :mask="['###.###.###-##']"
        :value="inputMask"
        @input="value => inputMask = value"
      />
      <s-input
        raw
        label="Phone"
        :mask="['(##) ####-####']"
        :value="inputMask"
        @input="value => inputMask = value"
      />
      <s-input
        label="money"
        is-money
        :value="inputMoney"
        @input="onInputMoney"
      />`,code5:`<s-input
        round
        icon="search"
        :value="inputSearch"
        :placeholder="'Search'"
        @input="value => inputSearch = value"
      />`}},methods:{onInputMoney(n){this.inputMoney=n}}},i={};var _=r(v,m,b,!1,h,null,null,null);function h(n){for(let t in i)this[t]=i[t]}const M=function(){return _.exports}();export{M as default};
