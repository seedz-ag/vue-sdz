import{n as a,e as n,b as i}from"./index.b6025da3.js";import c from"./Index.f4fa96de.js";import{c as l}from"./clickOutside.84c04b54.js";var _=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"s-search"},[t("div",{ref:"toggleActions",staticClass:"options",attrs:{tabindex:"0"},on:{click:function(o){e.showCategories=!e.showCategories}}},[t("span",{staticClass:"category"},[e._v(e._s(e.selectedCategory||e.categories[0]))]),t("s-icon",{class:{"--is-opened":e.showCategories},attrs:{size:"15",icon:"chevron-down"}})],1),t("s-input",e._g(e._b({attrs:{icon:"search"}},"s-input",e.$attrs,!1),e.$listeners)),e.showCategories?t("s-popover",e._g(e._b({staticClass:"popover",attrs:{target:e.$refs.toggleActions}},"s-popover",e.$listeners,!1),e.$listeners),[t("div",{staticClass:"categories"},e._l(e.categories,function(o){return t("div",{key:o,staticClass:"category",on:{click:function(d){return e.setCategory(o)}}},[e._v(" "+e._s(o)+" ")])}),0)]):e._e()],1)},v=[];const p={name:"SSearch",components:{SIcon:n,SInput:i,SPopover:c},directives:{clickOutside:l},props:{categories:Array},data(){return{selectedCategory:null,showCategories:!1}},methods:{setCategory(e){this.selectedCategory=e,this.showCategories=!1,this.$emit("category",e)}}},r={};var u=a(p,_,v,!1,g,null,null,null);function g(e){for(let s in r)this[s]=r[s]}var m=function(){return u.exports}();export{m as default};