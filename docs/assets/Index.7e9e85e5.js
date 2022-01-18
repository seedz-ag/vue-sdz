import{n as i,c as o,S as n}from"./index.259ac129.js";import{S as u}from"./box.25b4751f.js";import{S as l}from"./Index.3c574d56.js";import p from"./Index.8d457bda.js";import"./vendor.edd272bb.js";var d=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"s-input-example"},[t("s-title",{staticClass:"h1",attrs:{title:"Input Text Area"}}),t("p",{staticClass:"subtitle"},[e._v(" Input Text Area permite que a pessoa usu\xE1ria insira textos longos em um campo. ")]),t("s-title",{staticClass:"h2",attrs:{title:"Quanto usar"}}),t("p",{staticClass:"subtitle"},[e._v(" Representa um controle de edi\xE7\xE3o de texto simples de v\xE1rias linhas, \xFAtil quando voc\xEA deseja permitir que as pessoas usu\xE1rias insiram uma quantidade consider\xE1vel de texto de formato livre, por exemplo, um coment\xE1rio em um formul\xE1rio de revis\xE3o ou feedback; ")]),t("source-code",{attrs:{file:"STextareaExample",comp:"SInput"}}),t("s-title",{staticClass:"h2",attrs:{title:"Default"}}),t("s-box",[t("s-input",{attrs:{label:"textarea",rows:"20",cols:"5","text-area":"",value:e.inputTextArea},on:{input:function(a){return e.inputTextArea=a}}})],1),t("pre-code",{attrs:{code:e.code1}}),t("s-title",{staticClass:"h2",attrs:{title:"Negative"}}),t("s-box",[t("s-input",{attrs:{label:"textarea","text-area":"",value:e.inputDataError,validation:e.inputDataError?"":"error msg"},on:{input:function(a){return e.inputDataError=a}}})],1),t("pre-code",{attrs:{code:e.code2}}),t("s-title",{staticClass:"h2",attrs:{title:"Disabled"}}),t("s-box",[t("s-input",{attrs:{label:"Disabled",disabled:"","text-area":"",value:e.inputTextArea},on:{input:function(a){return e.inputTextArea=a}}})],1),t("pre-code",{attrs:{code:e.code3}})],1)},c=[];const x={components:{SInput:o,SBox:u,STitle:n,SourceCode:l,PreCode:p},data(){return{inputTextArea:"",inputDataError:"",inputFloatLabel:"",code1:`<s-input
        label="textarea"
        rows="20"
        cols="5"
        text-area
        :value="inputTextArea"
        @input="value => inputTextArea = value"
      />`,code2:`<s-input
        label="textarea"
        text-area
        :value="inputDataError"
        :validation="inputDataError ? '' : 'error msg'"
        @input="value => inputDataError = value"
      />`,code3:`<s-input
        label="Disabled"
        disabled
        text-area
        :value="inputTextArea"
        @input="value => inputTextArea = value"
      />`}},methods:{onInputMoney(e){this.inputMoney=e}}},s={};var m=i(x,d,c,!1,v,null,null,null);function v(e){for(let r in s)this[r]=s[r]}var A=function(){return m.exports}();export{A as default};
