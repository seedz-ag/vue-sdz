import{n as t}from"./index.f42b2f01.js";import{S as e}from"./Index.337efbf8.js";const n={name:"SLink",props:{to:{type:[String,Object],default:()=>null},external:{type:Boolean,default:!1},nuxt:{type:Boolean,default:!1}},computed:{type(){return this.to?this.external?"a":this.nuxt?"nuxt-link":"router-link":"button"}}},s={};var l=t(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.type,t._g(t._b({tag:"component",staticClass:"c-link",attrs:{to:t.to||null,href:t.external&&t.to,target:t.external&&"_blank"}},"component",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,o,null,null,null);function o(t){for(let e in s)this[e]=s[e]}const i={name:"SButton",components:{SIcon:e,SLink:function(){return l.exports}()},props:{size:{type:[String,Number],default:40,validator:t=>"number"==typeof+t&&+t>0},icon:{type:String,default:""},iconSize:{type:[String,Number],default:"20"},fullWidth:Boolean,disabled:Boolean,primary:Boolean,success:Boolean,error:Boolean,link:Boolean,outlined:Boolean,loading:Boolean},computed:{classes(){return["s-button",{"-error":this.error,"-primary":this.primary,"-success":this.success,"-loading":this.loading,"-disabled":this.disabled,"-outlined":this.outlined,"-full-width":this.fullWidth,"-icon-only":!this.$slots.default,"-has-icon":this.icon&&this.$slots.default}]}}},a={};var r=t(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("s-link",t._g(t._b({ref:"btn",class:t.classes,attrs:{disabled:t.disabled}},"s-link",t.$attrs,!1),t.$listeners),[t.icon?n("s-icon",{staticClass:"icon",attrs:{icon:t.icon,size:t.iconSize}}):t._e(),t.$slots.default?n("span",{staticClass:"text"},[t._t("default")],2):t._e(),n("transition",{attrs:{name:"loading"}},[t.loading?n("div",{staticClass:"loader",attrs:{size:"25"}}):t._e()])],1)}),[],!1,u,null,null,null);function u(t){for(let e in a)this[e]=a[e]}var c=function(){return r.exports}();export{c as S};