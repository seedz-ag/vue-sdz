import{n as s,S as e}from"./index.63304bd7.js";import{S as r}from"./box.1fbabcb4.js";import"./vendor.ebec5519.js";const t={};var a=s({name:"SProgressbar",props:{value:{type:Number,required:!0,validator:s=>s>=0&&s<=100}}},(function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{staticClass:"s-progress-bar"},[r("div",{staticClass:"progress",style:{width:s.value+"%"}})])}),[],!1,o,null,null,null);function o(s){for(let e in t)this[e]=t[e]}const i={};var l=s({components:{SProgressbar:function(){return a.exports}(),SBox:r,STitle:e},data:()=>({progress1:0,progress2:0,progress3:0}),created(){setTimeout((()=>this.progress1=5),300),setTimeout((()=>this.progress2=50),600),setTimeout((()=>this.progress3=100),900)}},(function(){var s=this,e=s.$createElement,r=s._self._c||e;return r("div",{staticClass:"s-progressbar-example flex-line"},[r("s-title",{staticClass:"h1",attrs:{title:"Progress Bar"}}),r("p",{staticClass:"subtitle"},[s._v(" Progrees Bar Indica um tempo de espera por ações - dentro de um fluxo de experiência ou dados de carregamento. ")]),r("s-box",{staticClass:"flex-inline flex-center"},[r("s-progressbar",{attrs:{value:s.progress1}}),r("s-progressbar",{attrs:{value:s.progress2}}),r("s-progressbar",{attrs:{value:s.progress3}})],1)],1)}),[],!1,n,null,null,null);function n(s){for(let e in i)this[e]=i[e]}var u=function(){return l.exports}();export{u as default};