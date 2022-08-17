import{n as c,_ as m,S as v,a as x,P as p}from"./index.e50009ab.js";var b=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"s-breadcrumb"},[t("ul",{class:["list",e.color]},e._l(e.items,function(s,n){var l=s.text,u=s.current,_=s.to,d=s.external;return t("li",{key:n,staticClass:"item"},[u?t("span",[e._v(e._s(l))]):t("a",{staticClass:"parent",attrs:{href:_,target:d?"_blank":"_self"}},[e._v(" "+e._s(l)+" ")]),e.isLast(n)?e._e():t("s-icon",{attrs:{icon:"chevron-right",size:"14"}})],1)}),0)])},f=[];const g={name:"SBreadcrumb",components:{SIcon:()=>m(()=>import("./index.e50009ab.js").then(r=>r.j),["assets/index.e50009ab.js","assets/index.d7015dd6.css"]).then(r=>r.default)},props:{color:{type:String,validator:function(r){return["light","dark"].indexOf(r)!==-1}},items:{type:Array,required:!0}},methods:{isLast(r){return this.items.length-1===r}}},i={};var P=c(g,b,f,!1,h,null,null,null);function h(r){for(let e in i)this[e]=i[e]}const C=function(){return P.exports}();var S=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"s-breadcrumb-example flex-line"},[t("s-title",{attrs:{size:"title-1"}},[e._v("Breadcrumbs")]),t("p",{staticClass:"subtitle"},[e._v(" Breadcrumbs s\xE3o os indicadores que representam o caminho percorrido pelo visitante dentro de uma navega\xE7\xE3o. ")]),t("s-title",{attrs:{size:"title-2"}},[e._v("Regras de aplica\xE7\xE3o")]),t("p",{staticClass:"subtitle"},[e._v(" N\xE3o utilizar link para a p\xE1gina atual em que o usu\xE1rio est\xE1; ")]),t("p",{staticClass:"subtitle"},[e._v(" Utilizar links somente para as p\xE1ginas parent e sub-parent; ")]),t("p",{staticClass:"subtitle"},[e._v(" Na vers\xE3o On Color, deve-se utilizar os links com sublinhado. ")]),t("s-box",{staticClass:"flex-inline flex-center"},[t("s-breadcrumb",{attrs:{color:"light",items:e.items}})],1),t("s-box",{staticClass:"flex-inline flex-center color-dark"},[t("s-breadcrumb",{attrs:{color:"dark",items:e.items}})],1),t("pre-code",{attrs:{code:e.code}})],1)},y=[];const k={components:{SBreadcrumb:C,SBox:v,STitle:x,PreCode:p},data(){return{code:`
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
        }]" />`,items:[{disabled:!0,current:!1,text:"Parent Page",to:"#",external:!1},{disabled:!0,current:!1,text:"Sub-Parent Page",to:"#",external:!1},{disabled:!0,current:!1,text:"Sub-Parent Page",to:"#",external:!1},{disabled:!0,current:!0,text:"Parent Page",to:"",external:!1}]}}},o={};var $=c(k,S,y,!1,z,null,null,null);function z(r){for(let e in o)this[e]=o[e]}const I=function(){return $.exports}();export{I as default};
