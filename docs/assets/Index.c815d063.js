import{n as a,S as _,a as l,P as i}from"./index.88ccfa18.js";var c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"s-progress-bar"},[s("div",{staticClass:"progress",style:{width:e.value+"%"}})])},u=[];const p={name:"SProgressbar",props:{value:{type:Number,required:!0,validator:r=>r>=0&&r<=100}}},o={};var d=a(p,c,u,!1,v,null,null,null);function v(r){for(let e in o)this[e]=o[e]}const g=function(){return d.exports}();var m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"s-progressbar-example flex-line"},[s("s-title",{attrs:{size:"title-1"}},[e._v("Progress Bar")]),s("p",{staticClass:"subtitle"},[e._v(" Progrees Bar Indica um tempo de espera por a\xE7\xF5es - dentro de um fluxo de experi\xEAncia ou dados de carregamento. ")]),s("s-box",{staticClass:"flex-inline flex-center"},[s("s-progressbar",{attrs:{value:e.progress1}}),s("s-progressbar",{attrs:{value:e.progress2}}),s("s-progressbar",{attrs:{value:e.progress3}})],1),s("pre-code",{attrs:{code:e.code}})],1)},f=[];const x={components:{SProgressbar:g,SBox:_,STitle:l,PreCode:i},data(){return{code:'<s-progressbar :value="45" />',progress1:0,progress2:0,progress3:0}},created(){setTimeout(()=>this.progress1=5,300),setTimeout(()=>this.progress2=50,600),setTimeout(()=>this.progress3=100,900)}},n={};var b=a(x,m,f,!1,h,null,null,null);function h(r){for(let e in n)this[e]=n[e]}const y=function(){return b.exports}();export{y as default};