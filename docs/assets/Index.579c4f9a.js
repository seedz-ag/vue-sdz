import{S as o}from"./box.25b4751f.js";import i from"./Index.13bec08a.js";import{n as r,S as l}from"./index.259ac129.js";import c from"./Index.8d457bda.js";import"./vendor.edd272bb.js";var p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"s-pagination-example"},[a("s-title",{staticClass:"h1",attrs:{title:"Pagination"}}),e._m(0),a("s-title",{staticClass:"h2",attrs:{title:"Como e onde utilizar"}}),e._m(1),a("s-box",[a("s-pagination",{attrs:{"total-page":"10",page:e.page},on:{page:function(n){return e.page=n}}})],1),a("pre-code",{attrs:{code:e.code}})],1)},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"subtitle"},[e._v(" \xC9 uma numera\xE7\xE3o ordinal das p\xE1ginas, que geralmente est\xE1 localizada na parte superior ou inferior das p\xE1ginas de um site."),a("br"),e._v(" Use um elemento <nav> de encapsulamento para identific\xE1-lo como uma se\xE7\xE3o de navega\xE7\xE3o para leitores de tela e outras tecnologias de assist\xEAncia. ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"subtitle"},[e._v(" Utilizamos a pagina\xE7\xE3o no formato tradicional principalmente em nossas p\xE1ginas do Marketplace."),a("br"),e._v(" Para tabelas na \xE1rea de gest\xE3o, utilizamos um formato que possibilite digitar o n\xFAmero da p\xE1gina em que deseja acessar. ")])}];const d={components:{SPagination:i,SBox:o,STitle:l,PreCode:c},data(){return{code:`
      <s-pagination
        total-page="10"
        :page="page"
        @page="value => page = value"
      />`,page:1}},methods:{setPage(e){this.page=e}}},s={};var u=r(d,p,m,!1,_,null,null,null);function _(e){for(let t in s)this[t]=s[t]}var h=function(){return u.exports}();export{h as default};
