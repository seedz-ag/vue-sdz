import{n as t}from"./index.09a55be9.js";import"./vendor.5affd582.js";const e={name:"SLink",props:{to:{type:[String,Object],default:()=>null},link:Boolean,external:{type:Boolean,default:!1},nuxt:{type:Boolean,default:!1}},computed:{type(){return this.link?"a":this.to?this.external?"a":this.nuxt?"nuxt-link":"router-link":"button"}}},n={};var l=t(e,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.type,t._g(t._b({tag:"component",staticClass:"c-link",attrs:{to:t.to||null,href:t.external&&t.to,target:t.external&&"_blank"}},"component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,a,null,null,null);function a(t){for(let e in n)this[e]=n[e]}var o=function(){return l.exports}();export{o as default};