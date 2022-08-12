import i from"./Index.b2ab09d0.js";import{n as l,S as d,a as n,P as p}from"./index.88ccfa18.js";import u from"./Index.2ff795a4.js";import"./Index.05a6b9d7.js";import"./Index.f23f84c0.js";import"./Index.ace444db.js";import"./clickOutside.84c04b54.js";import"./Index.87d626b8.js";var c=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"s-input-example"},[e("s-title",{attrs:{size:"title-1"}},[t._v("Password")]),e("p",{staticClass:"subtitle"},[t._v(" Input Password tem como objetivo permitir que a pessoa usu\xE1ria coloque e/ou cadastre uma senha dentro do sistema. Possui uma m\xE1scara que por default fica habilitada, mas a pessoa usu\xE1ria pode desabilitar para consegui ver os caracteres. ")]),e("p",{staticClass:"subtitle"},[t._v(" Utilizar o Input Password em fluxos de login ou de cadastro de senha e perfil. ")]),e("p",{staticClass:"subtitle"},[t._v(" Utilizar mensagens de erro que ajudam a pessoa usu\xE1rio a solucionar o problema. ")]),e("p",{staticClass:"subtitle"},[t._v(" Considerar Input Password sem label em casos espec\xEDficos, mas com a utiliza\xE7\xE3o obrigat\xF3rio do placehold como texto orientador. ")]),e("source-code",{attrs:{file:"SPasswordExample",comp:"SInput"}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Default")]),e("s-box",[e("s-input",{attrs:{label:"Password",type:"password"}})],1),e("pre-code",{attrs:{code:t.code1}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Error")]),e("s-box",[e("s-input",{attrs:{label:"Password Error",validation:t.inputDataError?"":"error msg",value:t.inputDataError,type:"password"},on:{input:function(o){return t.inputDataError=o}}})],1),e("pre-code",{attrs:{code:t.code2}}),e("s-title",{attrs:{size:"title-2"}},[t._v("Disabled")]),e("s-box",[e("s-input",{attrs:{placeholder:"Disabled input",disabled:"disabled",type:"password",value:"1234",label:"Password Disabled"}}),e("s-input",{attrs:{placeholder:"Password disabled readonly",readonly:"readonly",type:"password"}})],1),e("pre-code",{attrs:{code:t.code3}})],1)},m=[];const _={components:{SInput:i,SBox:d,STitle:n,SourceCode:u,PreCode:p},data(){return{inputDataError:"",inputTeste:"",code1:`<s-input
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
      />`}},methods:{onInputMoney(s){this.inputMoney=s}}},a={};var b=l(_,c,m,!1,v,null,null,null);function v(s){for(let t in a)this[t]=a[t]}const z=function(){return b.exports}();export{z as default};
