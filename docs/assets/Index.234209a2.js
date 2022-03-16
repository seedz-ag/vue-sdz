import s from"./Index.64af6e13.js";import{n as l,S as n,a as i,P as o}from"./index.a3b3d7ba.js";import"./vendor.0f0055ec.js";var u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"s-breadcrumb-example flex-line"},[t("s-title",{attrs:{size:"title-1"}},[e._v("Breadcrumbs")]),t("p",{staticClass:"subtitle"},[e._v(" Breadcrumbs s\xE3o os indicadores que representam o caminho percorrido pelo visitante dentro de uma navega\xE7\xE3o. ")]),t("s-title",{attrs:{size:"title-2"}},[e._v("Regras de aplica\xE7\xE3o")]),t("p",{staticClass:"subtitle"},[e._v(" N\xE3o utilizar link para a p\xE1gina atual em que o usu\xE1rio est\xE1; ")]),t("p",{staticClass:"subtitle"},[e._v(" Utilizar links somente para as p\xE1ginas parent e sub-parent; ")]),t("p",{staticClass:"subtitle"},[e._v(" Na vers\xE3o On Color, deve-se utilizar os links com sublinhado. ")]),t("s-box",{staticClass:"flex-inline flex-center"},[t("s-breadcrumb",{attrs:{color:"light",items:e.items}})],1),t("s-box",{staticClass:"flex-inline flex-center color-dark"},[t("s-breadcrumb",{attrs:{color:"dark",items:e.items}})],1),t("pre-code",{attrs:{code:e.code}})],1)},c=[];const d={components:{SBreadcrumb:s,SBox:n,STitle:i,PreCode:o},data(){return{code:`
      <s-breadcrumb color="light" :items="[
        {
          disabled: true,
          current: false,
          text: 'Parent Page',
          to: '#',
          external: false
        },
        {
          disabled: true,
          current: false,
          text: 'Sub-Parent Page',
          to: '#',
          external: false
        }]" />

      <s-breadcrumb color="dark" :items="[
        {
          disabled: true,
          current: false,
          text: 'Parent Page',
          to: '#',
          external: false
        },
        {
          disabled: true,
          current: false,
          text: 'Sub-Parent Page',
          to: '#',
          external: false
        }]" />`,items:[{disabled:!0,current:!1,text:"Parent Page",to:"#",external:!1},{disabled:!0,current:!1,text:"Sub-Parent Page",to:"#",external:!1},{disabled:!0,current:!1,text:"Sub-Parent Page",to:"#",external:!1},{disabled:!0,current:!0,text:"Parent Page",to:"",external:!1}]}}},r={};var b=l(d,u,c,!1,m,null,null,null);function m(e){for(let a in r)this[a]=r[a]}var p=function(){return b.exports}();export{p as default};
