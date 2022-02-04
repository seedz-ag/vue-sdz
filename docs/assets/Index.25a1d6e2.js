import{n as o,d as i,S as l,a as d,P as n}from"./index.1af000d2.js";import{S as p}from"./Index.5a41ca1f.js";import"./vendor.0f0055ec.js";var u=function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("div",{staticClass:"s-input-example"},[e("s-title",{attrs:{size:"title-1"}},[a._v("Password")]),e("p",{staticClass:"subtitle"},[a._v(" Input Password tem como objetivo permitir que a pessoa usu\xE1ria coloque e/ou cadastre uma senha dentro do sistema. Possui uma m\xE1scara que por default fica habilitada, mas a pessoa usu\xE1ria pode desabilitar para consegui ver os caracteres. ")]),e("p",{staticClass:"subtitle"},[a._v(" Utilizar o Input Password em fluxos de login ou de cadastro de senha e perfil. ")]),e("p",{staticClass:"subtitle"},[a._v(" Utilizar mensagens de erro que ajudam a pessoa usu\xE1rio a solucionar o problema. ")]),e("p",{staticClass:"subtitle"},[a._v(" Considerar Input Password sem label em casos espec\xEDficos, mas com a utiliza\xE7\xE3o obrigat\xF3rio do placehold como texto orientador. ")]),e("source-code",{attrs:{file:"SPasswordExample",comp:"SInput"}}),e("s-title",{attrs:{size:"title-2"}},[a._v("Default")]),e("s-box",[e("s-input",{attrs:{label:"Password",type:"password"}})],1),e("pre-code",{attrs:{code:a.code1}}),e("s-title",{attrs:{size:"title-2"}},[a._v("Error")]),e("s-box",[e("s-input",{attrs:{label:"Password Error",validation:a.inputDataError?"":"error msg",value:a.inputDataError,type:"password"},on:{input:function(r){return a.inputDataError=r}}})],1),e("pre-code",{attrs:{code:a.code2}}),e("s-title",{attrs:{size:"title-2"}},[a._v("Disabled")]),e("s-box",[e("s-input",{attrs:{placeholder:"Disabled input",disabled:"disabled",type:"password",value:"1234",label:"Password Disabled"}}),e("s-input",{attrs:{placeholder:"Password disabled readonly",readonly:"readonly",type:"password"}})],1),e("pre-code",{attrs:{code:a.code3}})],1)},c=[];const m={components:{SInput:i,SBox:l,STitle:d,SourceCode:p,PreCode:n},data(){return{inputDataError:"",inputTeste:"",code1:`<s-input
        label="Password"
        type="password"
      />`,code2:`<s-input
        label="Password Error"
        :validation="inputDataError ? '' : 'error msg'"
        :value="inputDataError"
        type="password"
        @input="value => inputDataError = value"
      />`,code3:`<s-input
        placeholder="Disabled input"
        disabled="disabled"
        type="password"
        value="1234"
        label="Password Disabled"
      />
      <s-input
        placeholder="Password disabled readonly"
        readonly="readonly"
        type="password"
      />`}},methods:{onInputMoney(a){this.inputMoney=a}}},t={};var v=o(m,u,c,!1,_,null,null,null);function _(a){for(let s in t)this[s]=t[s]}var y=function(){return v.exports}();export{y as default};
