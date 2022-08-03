import{n as s,b as o,S as n,a as u,P as l}from"./index.b6025da3.js";import p from"./Index.351005cc.js";import"./Index.4bc3257e.js";import"./clickOutside.84c04b54.js";import"./Index.634c21a0.js";var d=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"s-input-example"},[t("s-title",{attrs:{size:"title-1"}},[e._v("Text Area")]),t("p",{staticClass:"subtitle"},[e._v(" Input Text Area permite que a pessoa usu\xE1ria insira textos longos em um campo. ")]),t("s-title",{attrs:{size:"title-2"}},[e._v("Quando usar")]),t("p",{staticClass:"subtitle"},[e._v(" Representa um controle de edi\xE7\xE3o de texto simples de v\xE1rias linhas, \xFAtil quando voc\xEA deseja permitir que as pessoas usu\xE1rias insiram uma quantidade consider\xE1vel de texto de formato livre, por exemplo, um coment\xE1rio em um formul\xE1rio de revis\xE3o ou feedback; ")]),t("source-code",{attrs:{file:"STextareaExample",comp:"SInput"}}),t("s-title",{attrs:{size:"title-2"}},[e._v("Default")]),t("s-box",[t("s-input",{attrs:{label:"textarea",rows:"20",cols:"5","text-area":"",value:e.inputTextArea},on:{input:function(a){return e.inputTextArea=a}}})],1),t("pre-code",{attrs:{code:e.code1}}),t("s-title",{attrs:{size:"title-2"}},[e._v("Negative")]),t("s-box",[t("s-input",{attrs:{label:"textarea","text-area":"",value:e.inputDataError,validation:e.inputDataError?"":"error msg"},on:{input:function(a){return e.inputDataError=a}}})],1),t("pre-code",{attrs:{code:e.code2}}),t("s-title",{attrs:{size:"title-2"}},[e._v("Disabled")]),t("s-box",[t("s-input",{attrs:{label:"Disabled",disabled:"","text-area":"",value:e.inputTextArea},on:{input:function(a){return e.inputTextArea=a}}})],1),t("pre-code",{attrs:{code:e.code3}})],1)},c=[];const v={components:{SInput:o,SBox:n,STitle:u,SourceCode:p,PreCode:l},data(){return{inputTextArea:"",inputDataError:"",inputFloatLabel:"",code1:`<s-input
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
      />`}},methods:{onInputMoney(e){this.inputMoney=e}}},i={};var x=s(v,d,c,!1,m,null,null,null);function m(e){for(let r in i)this[r]=i[r]}var D=function(){return x.exports}();export{D as default};
