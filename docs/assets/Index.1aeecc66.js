import{n as o,b as i,S as d,a as l,P as n}from"./index.a3b3d7ba.js";import p from"./Index.3d5e2adb.js";import"./vendor.0f0055ec.js";import"./Index.53606988.js";import"./clickOutside.84c04b54.js";import"./Index.2b24b43d.js";var u=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"s-input-example"},[e("s-title",{attrs:{size:"title-1"}},[s._v("Password")]),e("p",{staticClass:"subtitle"},[s._v(" Input Password tem como objetivo permitir que a pessoa usu\xE1ria coloque e/ou cadastre uma senha dentro do sistema. Possui uma m\xE1scara que por default fica habilitada, mas a pessoa usu\xE1ria pode desabilitar para consegui ver os caracteres. ")]),e("p",{staticClass:"subtitle"},[s._v(" Utilizar o Input Password em fluxos de login ou de cadastro de senha e perfil. ")]),e("p",{staticClass:"subtitle"},[s._v(" Utilizar mensagens de erro que ajudam a pessoa usu\xE1rio a solucionar o problema. ")]),e("p",{staticClass:"subtitle"},[s._v(" Considerar Input Password sem label em casos espec\xEDficos, mas com a utiliza\xE7\xE3o obrigat\xF3rio do placehold como texto orientador. ")]),e("source-code",{attrs:{file:"SPasswordExample",comp:"SInput"}}),e("s-title",{attrs:{size:"title-2"}},[s._v("Default")]),e("s-box",[e("s-input",{attrs:{label:"Password",type:"password"}})],1),e("pre-code",{attrs:{code:s.code1}}),e("s-title",{attrs:{size:"title-2"}},[s._v("Error")]),e("s-box",[e("s-input",{attrs:{label:"Password Error",validation:s.inputDataError?"":"error msg",value:s.inputDataError,type:"password"},on:{input:function(r){return s.inputDataError=r}}})],1),e("pre-code",{attrs:{code:s.code2}}),e("s-title",{attrs:{size:"title-2"}},[s._v("Disabled")]),e("s-box",[e("s-input",{attrs:{placeholder:"Disabled input",disabled:"disabled",type:"password",value:"1234",label:"Password Disabled"}}),e("s-input",{attrs:{placeholder:"Password disabled readonly",readonly:"readonly",type:"password"}})],1),e("pre-code",{attrs:{code:s.code3}})],1)},c=[];const b={components:{SInput:i,SBox:d,STitle:l,SourceCode:p,PreCode:n},data(){return{inputDataError:"",inputTeste:"",code1:`<s-input
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
      />`}},methods:{onInputMoney(s){this.inputMoney=s}}},t={};var m=o(b,u,c,!1,v,null,null,null);function v(s){for(let a in t)this[a]=t[a]}var h=function(){return m.exports}();export{h as default};
