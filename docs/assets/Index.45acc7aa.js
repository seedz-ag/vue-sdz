import u from"./Index.bbf09c5e.js";import{n as _,e as d}from"./index.259ac129.js";import{c as v}from"./vendor.edd272bb.js";var p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("coe-feedback",e._g({attrs:{feedbacks:e.feedbacks},scopedSlots:e._u([{key:"feedbacks",fn:function(n){var a=n.feedbacks,c=n.success,i=n.error;return e._l(a,function(r,l){return s("s-card",{key:l,class:e.getClasses(r.type)},[s("div",{staticClass:"message-container"},[s("span",{staticClass:"message"},[e._v(e._s(r.message)+" ")]),s("span",{staticClass:"highlighted",style:{color:e.getColor(r.type,c,i)}},[e._v(" "+e._s(r.highlighted)+" ")])]),e.dismissible?s("s-button",{staticClass:"button",attrs:{grey:"",icon:"plus"},on:{click:function(C){return e.$emit("close",r)}}}):e._e()],1)})}}])},e.$listeners))},m=[];const f={name:"SFeedbacks",components:{CoeFeedback:v.exports.CoeFeedback,SCard:u,SButton:d},props:{feedbacks:{type:Array,default:()=>[]},dismissible:{type:Boolean,default:!0}},methods:{getClasses(e){return["feedback",{"--is-negative":e==="error","--is-positive":e==="success"}]},getColor(e,t,s){return{success:t,error:s}[e]}}},o={};var b=_(f,p,m,!1,g,null,null,null);function g(e){for(let t in o)this[t]=o[t]}var x=function(){return b.exports}();export{x as default};