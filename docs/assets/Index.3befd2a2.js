import{n,S as i,a as l}from"./index.88ccfa18.js";import _ from"./Index.2ff795a4.js";import"./Index.b2ab09d0.js";import"./Index.05a6b9d7.js";import"./Index.f23f84c0.js";import"./Index.ace444db.js";import"./clickOutside.84c04b54.js";import"./Index.87d626b8.js";var c=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{class:e.classes},[t("div",{staticClass:"header"},[e._t("header",function(){return[e._v(e._s(e.header))]})],2),t("div",{staticClass:"msg"},[e._t("msg",function(){return[e._v(e._s(e.msg))]})],2)])},v=[];const u={name:"SAlert",props:{msg:String,header:String,positive:Boolean,negative:Boolean},computed:{classes(){return["s-alert",{"--is-positive":this.positive,"--is-negative":this.negative}]}}},a={};var d=n(u,c,v,!1,m,null,null,null);function m(s){for(let e in a)this[e]=a[e]}const p=function(){return d.exports}();var g=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"s-alert-example"},[t("s-title",{attrs:{size:"title-1"}},[e._v("Alerts")]),t("source-code",{attrs:{file:"SAlertExample",comp:"SAlert"}}),t("s-title",{attrs:{size:"title-2"}},[e._v("Default")]),t("s-box",[t("s-alert",{attrs:{positive:""}},[t("div",{attrs:{slot:"header"},slot:"header"},[e._v("Titulo do Alerta Positivo")]),t("div",{attrs:{slot:"msg"},slot:"msg"},[e._v("Mensagem do alerta positivo")])]),t("br"),t("s-alert",{attrs:{negative:"",header:"Titulo do Alerta Negativo",msg:"Mensagem do alerta negativo"}})],1),t("s-title",{attrs:{size:"title-2"}},[e._v("Examples")]),t("s-box",[t("s-alert",{attrs:{positive:"",header:"Cadastro realizado com sucesso",msg:"Voc\xEA completou mais uma etapa e agora pode dar continuidade ao processo."}}),t("br"),t("s-alert",{attrs:{negative:"",header:"CPF/CNPJ ou senha inv\xE1lidos",msg:"Fique atento! Caso erre novamente, sua conta ser\xE1 bloqueada e ser\xE1 necess\xE1rio redefinir a senha."}})],1)],1)},f=[];const h={components:{SAlert:p,SBox:i,STitle:l,SourceCode:_}},o={};var x=n(h,g,f,!1,S,null,null,null);function S(s){for(let e in o)this[e]=o[e]}const M=function(){return x.exports}();export{M as default};