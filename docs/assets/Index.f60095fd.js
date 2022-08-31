import{n as c,d as u,S as _,a as b}from"./index.87a58ed9.js";import{S as v}from"./Index.eb9346a7.js";var d=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("s-carousel",e._g(e._b({staticClass:"s-tabber",attrs:{items:e.tabs,controllers:!0,pagination:!1,"is-loopable":!1},scopedSlots:e._u([{key:"default",fn:function(i){var n=i.item;return t("div",{class:e.classes(n),on:{click:function(q){return e.changeTab(n)}}},[n.icon?t("s-icon",{staticClass:"icon",attrs:{icon:n.icon,size:"20"}}):e._e(),t("span",{staticClass:"text"},[e._v(e._s(n.name))])],1)}}])},"s-carousel",e.$attrs,!1),e.$listeners))},m=[];const h={name:"STabber",components:{SCarousel:v,SIcon:u},props:{tabs:{type:Array,required:!0},activeTab:String},methods:{classes(a){return["tab",{"--is-disabled":a.disabled,"--is-active":a.value===this.activeTab}]},changeTab(a){a.disabled||this.$emit("change-tab",a.value)}}},o={};var f=c(h,d,m,!1,p,null,null,null);function p(a){for(let e in o)this[e]=o[e]}const g=function(){return f.exports}();var T=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"s-tabber-example"},[t("s-title",{attrs:{size:"title-1"}},[e._v("Tabber")]),t("s-box",[t("s-tabber",{attrs:{"has-shadow":"",tabs:e.tabs,"per-page":4,"active-tab":e.activeTab},on:{"change-tab":function(i){return e.activeTab=i}}})],1)],1)},x=[];const S={components:{STabber:g,SBox:_,STitle:b},data(){return{code:`
      <s-tabber
        :tabs="tabs"
        :active-tab="activeTab"
        @change-tab="tab => activeTab = tab"
      />

      <s-tabber
        alternative
        :tabs="tabs"
        :active-tab="activeTab"
        @change-tab="tab => activeTab = tab"
      />`,activeTab:"seumadruga",tabs:[{name:"Chaves",value:"chaves",icon:"ant-design:tool-outlined"},{name:"Seu Madruga",value:"seumadruga",icon:"ant-design:tool-outlined"},{name:"Nhonho",value:"nhonho",icon:"ant-design:tool-outlined",disabled:!0},{name:"Quico",value:"quico",icon:"ant-design:tool-outlined"},{name:"Dona florindaaaa",value:"donaflorinda",icon:"ant-design:tool-outlined"},{name:"Chiquinha",value:"Chiquinha",icon:"ant-design:tool-outlined"}]}}},r={};var $=c(S,T,x,!1,y,null,null,null);function y(a){for(let e in r)this[e]=r[e]}const z=function(){return $.exports}();export{z as default};
