import{n as s,e as l,S as d}from"./index.259ac129.js";import r from"./Index.c6e06b49.js";import{S as i}from"./box.25b4751f.js";import{S as c}from"./Index.3c574d56.js";import"./vendor.edd272bb.js";import"./Index.d140d44f.js";import"./Index.8d457bda.js";var m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"s-modal-example"},[o("s-title",{staticClass:"h1",attrs:{title:"Modal"}}),o("source-code",{attrs:{file:"SModalExample",comp:"SModal"}}),o("s-box",{staticClass:"flex-inline flex-center"},[o("s-button",{on:{click:function(n){e.showSimpleModal=!0}}},[e._v("open simple modal")]),o("s-modal",{attrs:{title:"header modal","is-opened":e.showSimpleModal},on:{close:function(n){e.showSimpleModal=!1}}},[e._v(" modal content ")]),o("s-button",{on:{click:function(n){e.showNoHeaderModal=!0}}},[e._v("open no header modal")]),o("s-modal",{attrs:{"no-header":"","is-opened":e.showNoHeaderModal},on:{close:function(n){e.showNoHeaderModal=!1}}},[e._v(" modal content ")])],1)],1)},_=[];const p={components:{SButton:l,SModal:r,SBox:i,STitle:d,SourceCode:c},data(){return{showSimpleModal:!1,showNoHeaderModal:!1}}},a={};var u=s(p,m,_,!1,f,null,null,null);function f(e){for(let t in a)this[t]=a[t]}var w=function(){return u.exports}();export{w as default};