import{n as a,S as l,a as i,P as _}from"./index.88ccfa18.js";var c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"s-skeleton-container"},[t("div",{staticClass:"s-skeleton",style:[e.cardStyles,e.getHeight]},[t("div",{staticClass:"skeleton-background",style:[e.getHeight,e.getSkeleton]})])])},u=[];const d={name:"SSkeleton",props:{size:{type:Number,validator:s=>s&&s<=100,default:100},rows:Number,round:Boolean},computed:{cardStyles(){return{width:this.size?`${this.size}%`:"100%"}},getHeight(){return{height:this.rows?`${this.rows*20}px`:"20px"}},getSkeleton(){return{borderRadius:this.round?"100%":"$border-radius-sm"}}}},o={};var v=a(d,c,u,!1,m,null,null,null);function m(s){for(let e in o)this[e]=o[e]}const p=function(){return v.exports}();var k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"s-skeleton-example flex-line"},[t("s-title",{attrs:{size:"title-1"}},[e._v("Skeleton")]),t("p",{staticClass:"subtitle"},[e._v(" Skeleton \xE9 uma vers\xE3o em branco de um componente que ainda n\xE3o foi carregado. Ao contr\xE1rio dos Loaders, uma tela de esqueleto informa visualmente aos usu\xE1rios o que esperar e faz com que eles se concentrem no progresso, em vez do tempo de espera. ")]),t("s-box",{staticClass:"flex-inline"},[t("s-skeleton",{attrs:{size:50,rows:7}}),t("s-skeleton",{attrs:{size:45}}),t("s-skeleton",{attrs:{size:30}}),t("s-skeleton",{attrs:{size:10}}),t("s-skeleton",{attrs:{size:7.8,rows:3,round:""}})],1),t("pre-code",{attrs:{code:e.code}})],1)},f=[];const h={components:{SSkeleton:p,SBox:l,STitle:i,PreCode:_},data(){return{code:`
      <s-skeleton :size="50" :rows="7" />
      <s-skeleton :size="45" />
      <s-skeleton :size="30" />
      <s-skeleton :size="10" />

      <s-skeleton :size="7.8" :rows="3" round />`}}},r={};var x=a(h,k,f,!1,z,null,null,null);function z(s){for(let e in r)this[e]=r[e]}const g=function(){return x.exports}();export{g as default};
