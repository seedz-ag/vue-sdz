import{n as o,S as i,a as r,P as l}from"./index.7254144d.js";import c from"./Index.9c9333a6.js";import"./vendor.0f0055ec.js";var p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"s-pagination-example"},[a("s-title",{attrs:{size:"title-1"}},[e._v("Pagination")]),e._m(0),a("s-title",{attrs:{size:"title-2"}},[e._v("Como e onde usar")]),e._m(1),a("s-box",[a("s-pagination",{attrs:{"total-page":"10",page:e.page},on:{page:function(s){return e.page=s}}})],1),a("pre-code",{attrs:{code:e.code}})],1)},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"subtitle"},[e._v(" \xC9 uma numera\xE7\xE3o ordinal das p\xE1ginas, que geralmente est\xE1 localizada na parte superior ou inferior das p\xE1ginas de um site."),a("br"),e._v(" Use um elemento <nav> de encapsulamento para identific\xE1-lo como uma se\xE7\xE3o de navega\xE7\xE3o para leitores de tela e outras tecnologias de assist\xEAncia. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"subtitle"},[e._v(" Utilizamos a pagina\xE7\xE3o no formato tradicional principalmente em nossas p\xE1ginas do Marketplace."),a("br"),e._v(" Para tabelas na \xE1rea de gest\xE3o, utilizamos um formato que possibilite digitar o n\xFAmero da p\xE1gina em que deseja acessar. ")])}];const u={components:{SPagination:c,SBox:i,STitle:r,PreCode:l},data(){return{code:`
      <s-pagination
        total-page="10"
        :page="page"
        @page="value => page = value"
      />`,page:1}},methods:{setPage(e){this.page=e}}},n={};var m=o(u,p,_,!1,d,null,null,null);function d(e){for(let t in n)this[t]=n[t]}var x=function(){return m.exports}();export{x as default};