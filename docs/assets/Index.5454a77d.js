import{S as e}from"./Index.b8c4f8be.js";import{S as o}from"./Index.7daeb7b7.js";import{n as t,a as s,S as l}from"./index.63304bd7.js";import{S as n}from"./box.1fbabcb4.js";import"./vendor.ebec5519.js";const a={name:"SModal",components:{SOverlay:o,SIcon:s},props:{isOpened:{type:Boolean,required:!0},title:{type:String,default:""},disabled:Boolean,noClose:Boolean,noHeader:Boolean,fullscreen:Boolean,hasScrollShadow:Boolean,noOverlay:Boolean,scrollEl:String},data:()=>({showScrollShadow:!1}),watch:{isOpened(e,o){e!==o&&this.checkOverflow()},scrollEl(e,o){e!==o&&this.checkOverflow()}},mounted(){this.checkOverflow()},computed:{classes(){return["modal",{"-fullscreen":this.fullscreen,"-scroll-shadow":this.hasScrollShadow}]}},methods:{checkOverflow(){this.isOpened?this.open():this.close()},toggleScrollShadow(){if(!this.hasScrollShadow)return;const e=this.$refs.content,o=e.scrollTop,t=e.scrollHeight,s=e.clientHeight;this.showScrollShadow=!(t<=s)&&(o>15||o+s>=t)},open(){const e=this.scrollEl?document.getElementById(this.scrollEl):document.body;Object.assign(e.style,{overflow:"hidden"}),window.addEventListener("keydown",this.closeOnEsc)},close(){const e=this.scrollEl?document.getElementById(this.scrollEl):document.body;Object.assign(e.style,{overflow:""}),window.removeEventListener("keydown",this.closeOnEsc)},emit(){this.$emit("close"),this.close()},closeOnEsc(e){27===e.keyCode&&this.emit()},onClickOutside(){this.noOverlay&&this.emit()}},beforeDestroy(){this.close(),window.removeEventListener("keydown",this.closeOnEsc)}},i={};var c=t(a,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return e.isOpened?t("transition",{attrs:{name:"s-modal-fade",appear:""}},[t("div",{staticClass:"s-modal"},[e.isOpened&&!e.noOverlay?t("s-overlay",{attrs:{show:""},on:{close:e.emit}}):e._e(),t("div",{class:e.classes,on:{focusout:e.onClickOutside}},[e.noHeader?e._e():t("div",{staticClass:"header"},[e._t("header",(function(){return[t("div",{staticClass:"title"},[e._v(e._s(e.title))])]})),t("div",{staticClass:"actions"},[e._t("actions"),t("s-icon",{attrs:{icon:"sdz-close",disabled:e.disabled,"primary-color":""},nativeOn:{click:function(o){return e.$emit("close")}}})],2)],2),t("div",{class:["wrapper-content",{"-shadow-top":e.showScrollShadow}]},[t("div",{ref:"content",staticClass:"content",on:{scroll:e.toggleScrollShadow}},[e._t("default")],2)])])],1)]):e._e()}),[],!1,r,null,null,null);function r(e){for(let o in i)this[o]=i[o]}const d={};var h=t({components:{SButton:e,SModal:function(){return c.exports}(),SBox:n,STitle:l},data:()=>({showSimpleModal:!1,showNoHeaderModal:!1})},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"s-modal-example"},[t("s-title",{staticClass:"h1",attrs:{title:"Modal"}}),t("s-box",{staticClass:"flex-inline flex-center"},[t("s-button",{on:{click:function(o){e.showSimpleModal=!0}}},[e._v("open simple modal")]),t("s-modal",{attrs:{title:"header modal","is-opened":e.showSimpleModal},on:{close:function(o){e.showSimpleModal=!1}}},[e._v(" modal content ")]),t("s-button",{on:{click:function(o){e.showNoHeaderModal=!0}}},[e._v("open no header modal")]),t("s-modal",{attrs:{"no-header":"","is-opened":e.showNoHeaderModal},on:{close:function(o){e.showNoHeaderModal=!1}}},[e._v(" modal content ")])],1)],1)}),[],!1,m,null,null,null);function m(e){for(let o in d)this[o]=d[o]}var u=function(){return h.exports}();export{u as default};
