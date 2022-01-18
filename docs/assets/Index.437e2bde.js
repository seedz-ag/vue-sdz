import{n as l,c as r,S as i}from"./index.259ac129.js";import{S as o}from"./box.25b4751f.js";import{S as u}from"./Index.3c574d56.js";import p from"./Index.8d457bda.js";import"./vendor.edd272bb.js";var d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"s-input-example"},[t("s-title",{staticClass:"h1",attrs:{title:"Inputs"}}),t("p",{staticClass:"subtitle"},[e._v(" Input Text permite a pessoa usu\xE1ria interagir e inserir conte\xFAdo e dados. Pode ser usado para entradas de formul\xE1rios longos e curtos. ")]),t("p",{staticClass:"subtitle"},[e._v(" Use em formul\xE1rios para permitir as pessoas inserirem informa\xE7\xF5es; ")]),t("p",{staticClass:"subtitle"},[e._v(" Podem fazer parte de componentes como modais no caso de um modal de login, por exemplo; ")]),t("p",{staticClass:"subtitle"},[e._v(" Os tipos de entrada de texto comuns incluem: nomes de pessoas usu\xE1rias, descri\xE7\xF5es, URLs, e-mails, endere\xE7os e qualquer outra forma de inser\xE7\xE3o de informa\xE7\xE3o. ")]),t("p",{staticClass:"subtitle"},[e._v(" Considerar Input Text sem label em casos espec\xEDficos, mas com a utiliza\xE7\xE3o obrigat\xF3rio do placehold como texto orientador. ")]),t("source-code",{attrs:{file:"SInputExample",comp:"SInput"}}),t("s-title",{staticClass:"h2",attrs:{title:"Stats"}}),t("s-box",[t("s-input",{attrs:{label:"Default"}}),t("s-input",{attrs:{placeholder:"Disabled input",disabled:"disabled"}}),t("s-input",{attrs:{placeholder:"Disabled readonly input",readonly:"readonly"}}),t("s-input",{attrs:{label:"error",validation:e.inputDataError?"":"error msg",value:e.inputDataError},on:{input:function(a){return e.inputDataError=a}}}),t("s-input",{attrs:{label:"is float label","float-label":"",value:e.inputFloatLabel},on:{input:function(a){return e.inputFloatLabel=a}}})],1),t("pre-code",{attrs:{code:e.code1}}),t("s-title",{staticClass:"h2",attrs:{title:"Sizing"}}),t("s-box",{staticClass:"sizing flex-inline"},[t("s-input",{attrs:{label:"Small",small:""}}),t("s-input",{attrs:{label:"Default"}}),t("s-input",{attrs:{label:"Larger",larger:""}})],1),t("pre-code",{attrs:{code:e.code2}}),t("s-title",{staticClass:"h2",attrs:{title:"Rounded"}}),t("s-box",[t("s-input",{attrs:{label:"rounded",round:"",value:e.inputRounded},on:{input:function(a){return e.inputRounded=a}}})],1),t("pre-code",{attrs:{code:e.code3}}),t("s-title",{staticClass:"h2",attrs:{title:"Masked Input"}}),e._m(0),t("s-box",[t("s-input",{attrs:{raw:"",label:"CPF",mask:["###.###.###-##"],value:e.inputMask},on:{input:function(a){return e.inputMask=a}}}),t("s-input",{attrs:{raw:"",label:"Phone",mask:["(##) ####-####"],value:e.inputMask},on:{input:function(a){return e.inputMask=a}}}),t("s-input",{attrs:{label:"money","is-money":"",value:e.inputMoney},on:{input:e.onInputMoney}})],1),t("pre-code",{attrs:{code:e.code4}}),t("s-title",{staticClass:"h2",attrs:{title:"Enhancers"}}),t("s-box",[t("s-input",{attrs:{round:"",icon:"sdz-search",value:e.inputSearch,placeholder:"Search"},on:{input:function(a){return e.inputSearch=a}}})],1),t("pre-code",{attrs:{code:e.code5}})],1)},c=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",{staticClass:"subtitle"},[e._v(" CPF: 000.000.000-00"),t("br"),e._v(" CNPJ: 00.000.000/0000-00"),t("br"),e._v(" Telefone: (00) 00000-0000"),t("br")])}];const m={components:{SInput:r,SBox:o,STitle:i,SourceCode:u,PreCode:p},data(){return{inputMask:"",inputMoney:"",inputRounded:"",inputSearch:"",inputDataError:"",inputTeste:"",inputFloatLabel:"",code1:`<s-input label="Default" />

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
      />`,code3:`<s-input
        label="rounded"
        round
        :value="inputRounded"
        @input="value => inputRounded = value"
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
        icon="sdz-search"
        :value="inputSearch"
        :placeholder="'Search'"
        @input="value => inputSearch = value"
      />`}},methods:{onInputMoney(e){this.inputMoney=e}}},s={};var b=l(m,d,c,!1,v,null,null,null);function v(e){for(let n in s)this[n]=s[n]}var S=function(){return b.exports}();export{S as default};
