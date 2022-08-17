import{n as a,f as r,h as d,S as h,a as _}from"./index.e50009ab.js";import{S as u}from"./Index.1c1833a5.js";import m from"./Index.46e8fd41.js";import"./Index.1dd9b1e9.js";import"./clickOutside.84c04b54.js";import"./Index.ed944587.js";var v=function(){var e=this,s=e.$createElement,o=e._self._c||s;return e.isOpened?o("transition",{attrs:{name:"s-modal-fade",appear:""}},[o("div",{staticClass:"s-modal"},[e.isOpened&&!e.noOverlay?o("s-overlay",{attrs:{show:""},on:{close:e.emit}}):e._e(),o("div",{class:e.classes,on:{focusout:e.onClickOutside}},[e.noHeader?e._e():o("div",{staticClass:"header"},[e._t("header",function(){return[o("div",{staticClass:"title"},[e._v(e._s(e.title))])]}),o("div",{staticClass:"actions"},[e._t("actions"),o("s-icon",{attrs:{icon:"ci:close-big",disabled:e.disabled,"primary-color":""},nativeOn:{click:function(n){return e.$emit("close")}}})],2)],2),o("div",{class:["wrapper-content",{"-shadow-top":e.showScrollShadow}]},[o("div",{ref:"content",staticClass:"content",on:{scroll:e.toggleScrollShadow}},[e._t("default")],2)])])],1)]):e._e()},f=[];const p={name:"SModal",components:{SOverlay:u,SIcon:r},props:{isOpened:{type:Boolean,required:!0},title:{type:String,default:""},disabled:Boolean,noClose:Boolean,noHeader:Boolean,fullscreen:Boolean,hasScrollShadow:Boolean,noOverlay:Boolean,scrollEl:String},data(){return{showScrollShadow:!1}},watch:{isOpened(t,e){t!==e&&this.checkOverflow()},scrollEl(t,e){t!==e&&this.checkOverflow()}},mounted(){this.checkOverflow()},computed:{classes(){return["modal",{"-fullscreen":this.fullscreen,"-scroll-shadow":this.hasScrollShadow}]}},methods:{checkOverflow(){this.isOpened?this.open():this.close()},toggleScrollShadow(){if(!this.hasScrollShadow)return;const t=this.$refs.content,e=t.scrollTop,s=t.scrollHeight,o=t.clientHeight;this.showScrollShadow=!(s<=o)&&(e>15||e+o>=s)},open(){const t={overflow:"hidden"},e=this.scrollEl?document.getElementById(this.scrollEl):document.body;Object.assign(e.style,t),window.addEventListener("keydown",this.closeOnEsc)},close(){const t={overflow:""},e=this.scrollEl?document.getElementById(this.scrollEl):document.body;Object.assign(e.style,t),window.removeEventListener("keydown",this.closeOnEsc)},emit(){this.$emit("close"),this.close()},closeOnEsc(t){t.keyCode===27&&this.emit()},onClickOutside(){this.noOverlay&&this.emit()}},beforeDestroy(){this.close(),window.removeEventListener("keydown",this.closeOnEsc)}},c={};var w=a(p,v,f,!1,S,null,null,null);function S(t){for(let e in c)this[e]=c[e]}const y=function(){return w.exports}();var O=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"s-modal-example"},[o("s-title",{attrs:{size:"title-1"}},[e._v("Modal")]),o("source-code",{attrs:{file:"SModalExample",comp:"SModal"}}),o("s-box",{staticClass:"flex-inline flex-center"},[o("s-button",{on:{click:function(n){e.showSimpleModal=!0}}},[e._v("open simple modal")]),o("s-modal",{attrs:{title:"header modal","is-opened":e.showSimpleModal},on:{close:function(n){e.showSimpleModal=!1}}},[e._v(" modal content ")]),o("s-button",{on:{click:function(n){e.showNoHeaderModal=!0}}},[e._v("open no header modal")]),o("s-modal",{attrs:{"no-header":"","is-opened":e.showNoHeaderModal},on:{close:function(n){e.showNoHeaderModal=!1}}},[e._v(" modal content ")])],1)],1)},E=[];const g={components:{SButton:d,SModal:y,SBox:h,STitle:_,SourceCode:m},data(){return{showSimpleModal:!1,showNoHeaderModal:!1}}},i={};var $=a(g,O,E,!1,k,null,null,null);function k(t){for(let e in i)this[e]=i[e]}const I=function(){return $.exports}();export{I as default};