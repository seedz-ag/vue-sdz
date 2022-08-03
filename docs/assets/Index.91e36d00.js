import s from"./Index.0b717936.js";import{n as b,S as c,a as i,P as o}from"./index.b6025da3.js";var v=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"s-tabber-example"},[e("s-title",{attrs:{size:"title-1"}},[a._v("Tabber")]),e("s-box",[e("s-tabber",{attrs:{tabs:a.tabs,"active-tab":a.activeTab},on:{"change-tab":function(n){return a.activeTab=n}}}),e("s-tabber",{attrs:{alternative:"",tabs:a.tabs,"active-tab":a.activeTab},on:{"change-tab":function(n){return a.activeTab=n}}})],1),e("pre-code",{attrs:{code:a.code}})],1)},u=[];const l={components:{STabber:s,SBox:c,STitle:i,PreCode:o},data(){return{code:`
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
      />`,activeTab:"seumadruga",tabs:[{name:"Chaves",value:"chaves",icon:"share"},{name:"Seu Madruga",value:"seumadruga",icon:"divide"},{name:"Nhonho",value:"nhonho",icon:"key",disabled:!0},{name:"Quico",value:"quico",icon:"key"}]}}},r={};var _=b(l,v,u,!1,d,null,null,null);function d(a){for(let t in r)this[t]=r[t]}var T=function(){return _.exports}();export{T as default};
