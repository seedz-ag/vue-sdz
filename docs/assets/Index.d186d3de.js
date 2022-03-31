import r from"./Index.59393fc9.js";import{n as b,S as c,a as i,P as o}from"./index.37372979.js";import"./vendor.0f0055ec.js";var v=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"s-tabber-example"},[e("s-title",{attrs:{size:"title-1"}},[a._v("Tabber")]),e("s-box",[e("s-tabber",{attrs:{tabs:a.tabs,"active-tab":a.activeTab},on:{"change-tab":function(n){return a.activeTab=n}}}),e("s-tabber",{attrs:{alternative:"",tabs:a.tabs,"active-tab":a.activeTab},on:{"change-tab":function(n){return a.activeTab=n}}})],1),e("pre-code",{attrs:{code:a.code}})],1)},u=[];const l={components:{STabber:r,SBox:c,STitle:i,PreCode:o},data(){return{code:`
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
      />`,activeTab:"seumadruga",tabs:[{name:"Chaves",value:"chaves",icon:"sdz-share"},{name:"Seu Madruga",value:"seumadruga",icon:"sdz-divide"},{name:"Nhonho",value:"nhonho",icon:"sdz-key",disabled:!0},{name:"Quico",value:"quico",icon:"sdz-key"}]}}},s={};var d=b(l,v,u,!1,_,null,null,null);function _(a){for(let t in s)this[t]=s[t]}var T=function(){return d.exports}();export{T as default};
