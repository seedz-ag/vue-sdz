import r from"./Index.3bcfadf1.js";import{n as c,S as b,a as i,P as o}from"./index.077a4272.js";import"./vendor.0f0055ec.js";var v=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"s-tabber-example"},[e("s-title",{attrs:{size:"title-1"}},[a._v("Tabber")]),e("s-box",[e("s-tabber",{attrs:{tabs:a.tabs,"active-tab":a.activeTab},on:{"change-tab":function(n){return a.activeTab=n}}}),e("s-tabber",{attrs:{alternative:"",tabs:a.tabs,"active-tab":a.activeTab},on:{"change-tab":function(n){return a.activeTab=n}}})],1),e("pre-code",{attrs:{code:a.code}})],1)},u=[];const d={components:{STabber:r,SBox:b,STitle:i,PreCode:o},data(){return{code:`
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
      />`,activeTab:"seumadruga",tabs:[{name:"Chaves",value:"chaves",icon:"sdz-share"},{name:"Seu Madruga",value:"seumadruga",icon:"sdz-divide"},{name:"Nhonho",value:"nhonho",icon:"sdz-key",disabled:!0},{name:"Quico",value:"quico",icon:"sdz-key"}]}}},s={};var l=c(d,v,u,!1,_,null,null,null);function _(a){for(let t in s)this[t]=s[t]}var p=function(){return l.exports}();export{p as default};
