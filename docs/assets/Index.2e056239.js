import r from"./Index.2f981cb2.js";import{S as b}from"./box.25b4751f.js";import{n as o,S as c}from"./index.259ac129.js";import i from"./Index.8d457bda.js";import"./vendor.edd272bb.js";var v=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"s-tabber-example"},[e("s-title",{staticClass:"h1",attrs:{title:"Tabber"}}),e("s-box",[e("s-tabber",{attrs:{tabs:a.tabs,"active-tab":a.activeTab},on:{"change-tab":function(n){return a.activeTab=n}}}),e("s-tabber",{attrs:{alternative:"",tabs:a.tabs,"active-tab":a.activeTab},on:{"change-tab":function(n){return a.activeTab=n}}})],1),e("pre-code",{attrs:{code:a.code}})],1)},d=[];const u={components:{STabber:r,SBox:b,STitle:c,PreCode:i},data(){return{code:`
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
      />`,activeTab:"seumadruga",tabs:[{name:"Chaves",value:"chaves",icon:"sdz-share"},{name:"Seu Madruga",value:"seumadruga",icon:"sdz-divide"},{name:"Nhonho",value:"nhonho",icon:"sdz-key",disabled:!0},{name:"Quico",value:"quico",icon:"sdz-key"}]}}},s={};var l=o(u,v,d,!1,_,null,null,null);function _(a){for(let t in s)this[t]=s[t]}var T=function(){return l.exports}();export{T as default};
