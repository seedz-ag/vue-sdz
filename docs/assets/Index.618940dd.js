import{n as l,_ as c,S as _,a as p,P as d}from"./index.88ccfa18.js";var u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"s-stepper"},[t("ul",{staticClass:"stepper"},e._l(e.items,function(r,i){return t("li",{key:i,class:e.getClasses(r,i),on:{click:function(P){return e.$emit("select",r)}}},[t("div",{staticClass:"content"},[t("label",[e._v(e._s(r.label))]),r.icon?t("s-icon",e._b({attrs:{icon:r.icon}},"s-icon",e.$attrs,!1)):e._e()],1)])}),0)])},v=[];const m={name:"SStepper",components:{SIcon:()=>c(()=>import("./Index.f23f84c0.js"),["assets/Index.f23f84c0.js","assets/index.88ccfa18.js","assets/index.a37e07de.css"]).then(s=>s.default)},props:{step:Number,items:{type:Array,required:!0}},data(){return{progressiveStep:1}},watch:{step:"incrementStep",progressiveStep:{handler:"incrementStep",immediate:!0}},methods:{incrementStep(){setTimeout(()=>{this.progressiveStep<=this.step&&this.progressiveStep++},1200)},getClasses(s,e){const n=e<=this.progressiveStep-1;return["step",{"--is-active":n,"--is-disabled":s.disabled,"--is-current-step":n&&this.step===e}]}}},a={};var S=l(m,u,v,!1,f,null,null,null);function f(s){for(let e in a)this[e]=a[e]}const b=function(){return S.exports}();var h=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"s-stepper-example"},[t("s-title",{attrs:{size:"title-1"}},[e._v("Progress Stepper")]),t("p",{staticClass:"subtitle"},[e._v(" Progrees Steps no Design System s\xE3o usadas para denotar o progresso em est\xE1gios de uma a\xE7\xE3o ou atividade. Esse tipo de lista fornece ao usu\xE1rio uma no\xE7\xE3o do progresso e das etapas restantes. ")]),t("s-box",[t("s-stepper",{attrs:{step:e.activeStep,items:e.items},on:{select:function(i){return e.activeStep=i}}})],1),t("pre-code",{attrs:{code:e.code}})],1)},g=[];const $={components:{SStepper:b,SBox:_,STitle:p,PreCode:d},data(){return{code:'<s-stepper :step="activeStep" :items="items" @select="newStep => activeStep = newStep" />',activeStep:2,items:[{label:"item 1",icon:"dollar-sign",disabled:!1},{label:"item 2",icon:"link",disabled:!1},{label:"item 3",icon:"shield",disabled:!1},{label:"item 4",icon:"shield-off",disabled:!0},{label:"item 5",icon:"cart",disabled:!1}]}}},o={};var x=l($,h,g,!1,y,null,null,null);function y(s){for(let e in o)this[e]=o[e]}const k=function(){return x.exports}();export{k as default};
