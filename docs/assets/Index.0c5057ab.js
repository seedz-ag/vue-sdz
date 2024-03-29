import{n as i,b as l,S as d,a as n,P as p}from"./index.c61da6d1.js";import u from"./Index.9549a0a2.js";import"./Index.af15647c.js";import"./clickOutside.84c04b54.js";import"./Index.01ca4dea.js";var c=function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("div",{staticClass:"s-input-example"},[e("s-title",{attrs:{size:"title-1"}},[s._v("Password")]),e("p",{staticClass:"subtitle"},[s._v(" Input Password tem como objetivo permitir que a pessoa usu\xE1ria coloque e/ou cadastre uma senha dentro do sistema. Possui uma m\xE1scara que por default fica habilitada, mas a pessoa usu\xE1ria pode desabilitar para consegui ver os caracteres. ")]),e("p",{staticClass:"subtitle"},[s._v(" Utilizar o Input Password em fluxos de login ou de cadastro de senha e perfil. ")]),e("p",{staticClass:"subtitle"},[s._v(" Utilizar mensagens de erro que ajudam a pessoa usu\xE1rio a solucionar o problema. ")]),e("p",{staticClass:"subtitle"},[s._v(" Considerar Input Password sem label em casos espec\xEDficos, mas com a utiliza\xE7\xE3o obrigat\xF3rio do placehold como texto orientador. ")]),e("source-code",{attrs:{file:"SPasswordExample",comp:"SInput"}}),e("s-title",{attrs:{size:"title-2"}},[s._v("Default")]),e("s-box",[e("s-input",{attrs:{label:"Password",type:"password"}})],1),e("pre-code",{attrs:{code:s.code1}}),e("s-title",{attrs:{size:"title-2"}},[s._v("Error")]),e("s-box",[e("s-input",{attrs:{label:"Password Error",validation:s.inputDataError?"":"error msg",value:s.inputDataError,type:"password"},on:{input:function(o){return s.inputDataError=o}}})],1),e("pre-code",{attrs:{code:s.code2}}),e("s-title",{attrs:{size:"title-2"}},[s._v("Disabled")]),e("s-box",[e("s-input",{attrs:{placeholder:"Disabled input",disabled:"disabled",type:"password",value:"1234",label:"Password Disabled"}}),e("s-input",{attrs:{placeholder:"Password disabled readonly",readonly:"readonly",type:"password"}})],1),e("pre-code",{attrs:{code:s.code3}})],1)},m=[];const _={components:{SInput:l,SBox:d,STitle:n,SourceCode:u,PreCode:p},data(){return{inputDataError:"",inputTeste:"",code1:`<s-input
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
      />`}},methods:{onInputMoney(a){this.inputMoney=a}}},t={};var b=i(_,c,m,!1,v,null,null,null);function v(a){for(let s in t)this[s]=t[s]}const D=function(){return b.exports}();export{D as default};
