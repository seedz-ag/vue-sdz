import{n as c,S as l,a as _}from"./index.88ccfa18.js";import u from"./Index.f23f84c0.js";import p from"./Index.b2ab09d0.js";import{S as d}from"./Index.7ca8baa8.js";import{c as m}from"./clickOutside.84c04b54.js";import"./Index.05a6b9d7.js";var v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"s-search"},[t("div",{ref:"toggleActions",staticClass:"options",attrs:{tabindex:"0"},on:{click:function(a){e.showCategories=!e.showCategories}}},[t("span",{staticClass:"category"},[e._v(e._s(e.selectedCategory||e.categories[0]))]),t("s-icon",{class:{"--is-opened":e.showCategories},attrs:{size:"15",icon:"sdz-chevron-down"}})],1),t("s-input",e._g(e._b({attrs:{icon:"sdz-search"}},"s-input",e.$attrs,!1),e.$listeners)),e.showCategories?t("s-popover",e._g(e._b({staticClass:"popover",attrs:{target:e.$refs.toggleActions}},"s-popover",e.$listeners,!1),e.$listeners),[t("div",{staticClass:"categories"},e._l(e.categories,function(o){return t("div",{key:o,staticClass:"category",on:{click:function(z){return e.setCategory(o)}}},[e._v(" "+e._s(o)+" ")])}),0)]):e._e()],1)},f=[];const g={name:"SSearch",components:{SIcon:u,SInput:p,SPopover:d},directives:{clickOutside:m},props:{categories:Array},data(){return{selectedCategory:null,showCategories:!1}},methods:{setCategory(s){this.selectedCategory=s,this.showCategories=!1,this.$emit("category",s)}}},n={};var h=c(g,v,f,!1,C,null,null,null);function C(s){for(let e in n)this[e]=n[e]}const y=function(){return h.exports}();var $=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"s-search-example"},[t("s-title",{attrs:{size:"title-1"}},[e._v("Search")]),t("p",{staticClass:"subtitle"},[e._v(" Input Search \xE9 um campo de busca e permite que a pessoa usu\xE1ria encontre um conte\xFAdo de forma r\xE1pida. Hoje \xE9 um componente de input simples, no futuro a ideia \xE9 que contemple tamb\xE9m comportamentos como autocomplete. ")]),t("s-title",{attrs:{size:"title-2"}},[e._v("Quando usar")]),t("p",{staticClass:"subtitle"},[e._v(" \xC9 utilizado quando a pessoa usu\xE1ria deseja encontrar um conte\xFAdo dispon\xEDvel; ")]),t("p",{staticClass:"subtitle"},[e._v(" Pode ser adicionado a outros componentes, como por exemplo o Header. ")]),t("s-title",{attrs:{size:"title-2"}},[e._v("Default")]),t("s-box",[t("s-search",{attrs:{categories:["Resgate","Acumule"]},on:{category:function(a){return e.category=a}},model:{value:e.data,callback:function(a){e.data=a},expression:"data"}})],1)],1)},x=[];const S={components:{SSearch:y,SBox:l,STitle:_},data(){return{data:"",category:""}}},i={};var b=c(S,$,x,!1,k,null,null,null);function k(s){for(let e in i)this[e]=i[e]}const E=function(){return b.exports}();export{E as default};