import o from"./Index.0a9e5e80.js";import{S as a}from"./box.25b4751f.js";import{n,S as i}from"./index.259ac129.js";import l from"./Index.8d457bda.js";import"./vendor.edd272bb.js";var p=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"s-progressbar-example flex-line"},[s("s-title",{staticClass:"h1",attrs:{title:"Progress Bar"}}),s("p",{staticClass:"subtitle"},[e._v(" Progrees Bar Indica um tempo de espera por a\xE7\xF5es - dentro de um fluxo de experi\xEAncia ou dados de carregamento. ")]),s("s-box",{staticClass:"flex-inline flex-center"},[s("s-progressbar",{attrs:{value:e.progress1}}),s("s-progressbar",{attrs:{value:e.progress2}}),s("s-progressbar",{attrs:{value:e.progress3}})],1),s("pre-code",{attrs:{code:e.code}})],1)},d=[];const c={components:{SProgressbar:o,SBox:a,STitle:i,PreCode:l},data(){return{code:'<s-progressbar :value="45" />',progress1:0,progress2:0,progress3:0}},created(){setTimeout(()=>this.progress1=5,300),setTimeout(()=>this.progress2=50,600),setTimeout(()=>this.progress3=100,900)}},t={};var u=n(c,p,d,!1,_,null,null,null);function _(e){for(let r in t)this[r]=t[r]}var b=function(){return u.exports}();export{b as default};