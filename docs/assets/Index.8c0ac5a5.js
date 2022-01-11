import s from"./Index.4e496bbf.js";import{S as l}from"./box.25b4751f.js";import{n,S as i}from"./index.259ac129.js";import o from"./Index.8d457bda.js";import"./vendor.edd272bb.js";var u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"s-breadcrumb-example flex-line"},[e("s-title",{staticClass:"h1",attrs:{title:"Breadcrumbs"}}),e("p",{staticClass:"subtitle"},[t._v(" Breadcrumbs s\xE3o os indicadores que representam o caminho percorrido pelo visitante dentro de uma navega\xE7\xE3o. ")]),e("s-title",{staticClass:"h2",attrs:{title:"Regras de aplica\xE7\xE3o"}}),e("p",{staticClass:"subtitle"},[t._v(" N\xE3o utilizar link para a p\xE1gina atual em que o usu\xE1rio est\xE1; ")]),e("p",{staticClass:"subtitle"},[t._v(" Utilizar links somente para as p\xE1ginas parent e sub-parent; ")]),e("p",{staticClass:"subtitle"},[t._v(" Na vers\xE3o On Color, deve-se utilizar os links com sublinhado. ")]),e("s-box",{staticClass:"flex-inline flex-center"},[e("s-breadcrumb",{attrs:{color:"light",items:t.items}})],1),e("s-box",{staticClass:"flex-inline flex-center color-dark"},[e("s-breadcrumb",{attrs:{color:"dark",items:t.items}})],1),e("pre-code",{attrs:{code:t.code}})],1)},c=[];const d={components:{SBreadcrumb:s,SBox:l,STitle:i,PreCode:o},data(){return{code:`
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
        }]" />`,items:[{disabled:!0,current:!1,text:"Parent Page",to:"#",external:!1},{disabled:!0,current:!1,text:"Sub-Parent Page",to:"#",external:!1},{disabled:!0,current:!1,text:"Sub-Parent Page",to:"#",external:!1},{disabled:!0,current:!0,text:"Parent Page",to:"",external:!1}]}}},r={};var b=n(d,u,c,!1,m,null,null,null);function m(t){for(let a in r)this[a]=r[a]}var P=function(){return b.exports}();export{P as default};
