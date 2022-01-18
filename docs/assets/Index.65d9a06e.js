import{n as o,c as i,S as l}from"./index.259ac129.js";import{S as d}from"./box.25b4751f.js";import{S as n}from"./Index.3c574d56.js";import p from"./Index.8d457bda.js";import"./vendor.edd272bb.js";var u=function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"s-input-example"},[e("s-title",{attrs:{"class-title":"h1",title:"Password"}}),e("p",{staticClass:"subtitle"},[s._v(" Input Password tem como objetivo permitir que a pessoa usu\xE1ria coloque e/ou cadastre uma senha dentro do sistema. Possui uma m\xE1scara que por default fica habilitada, mas a pessoa usu\xE1ria pode desabilitar para consegui ver os caracteres. ")]),e("p",{staticClass:"subtitle"},[s._v(" Utilizar o Input Password em fluxos de login ou de cadastro de senha e perfil. ")]),e("p",{staticClass:"subtitle"},[s._v(" Utilizar mensagens de erro que ajudam a pessoa usu\xE1rio a solucionar o problema. ")]),e("p",{staticClass:"subtitle"},[s._v(" Considerar Input Password sem label em casos espec\xEDficos, mas com a utiliza\xE7\xE3o obrigat\xF3rio do placehold como texto orientador. ")]),e("source-code",{attrs:{file:"SPasswordExample",comp:"SInput"}}),e("s-title",{attrs:{"class-title":"h2",title:"Default"}}),e("s-box",[e("s-input",{attrs:{label:"Password",type:"password"}})],1),e("pre-code",{attrs:{code:s.code1}}),e("s-title",{attrs:{"class-title":"h2",title:"Error"}}),e("s-box",[e("s-input",{attrs:{label:"Password Error",validation:s.inputDataError?"":"error msg",value:s.inputDataError,type:"password"},on:{input:function(r){return s.inputDataError=r}}})],1),e("pre-code",{attrs:{code:s.code2}}),e("s-title",{attrs:{"class-title":"h2",title:"Disabled"}}),e("s-box",[e("s-input",{attrs:{placeholder:"Disabled input",disabled:"disabled",type:"password",value:"1234",label:"Password Disabled"}}),e("s-input",{attrs:{placeholder:"Password disabled readonly",readonly:"readonly",type:"password"}})],1),e("pre-code",{attrs:{code:s.code3}})],1)},c=[];const m={components:{SInput:i,SBox:d,STitle:l,SourceCode:n,PreCode:p},data(){return{inputDataError:"",inputTeste:"",code1:`<s-input
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
      />`}},methods:{onInputMoney(s){this.inputMoney=s}}},t={};var b=o(m,u,c,!1,v,null,null,null);function v(s){for(let a in t)this[a]=t[a]}var h=function(){return b.exports}();export{h as default};
