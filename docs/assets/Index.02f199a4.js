import{n as a,e as r,a as l,S as i}from"./index.259ac129.js";import{S as c}from"./box.25b4751f.js";import{S as d}from"./Index.3c574d56.js";import"./vendor.edd272bb.js";import"./Index.8d457bda.js";var p=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"s-collapsible-example"},[t("s-title",{staticClass:"h1",attrs:{title:"Collapse"}}),t("source-code",{attrs:{file:"SCollapsibleExample",comp:"SCollapsible"}},[t("s-button",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e._v("header toggle")]),t("div",{domProps:{innerHTML:e._s(e.content)}})],1),t("s-box",{staticClass:"flex-inline flex-center"},[t("s-button",{attrs:{outlined:""},on:{click:function(s){return e.increased()}}},[e._v("increase content")]),t("s-collapsible",{attrs:{"is-opened":e.isOpened},on:{toggle:function(s){return e.isOpened=s}}},[t("s-button",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[e._v("header toggle")]),t("div",{domProps:{innerHTML:e._s(e.content)}})],1)],1)],1)},_=[];const u={name:"SCollapsibleExample",components:{SButton:r,SCollapsible:l,SBox:c,STitle:i,SourceCode:d},data(){return{isOpened:!0,content:"initial content!"}},methods:{increased(){this.content=this.content+"<br /> dynamic content..."}}},o={};var m=a(u,p,_,!1,v,null,null,null);function v(e){for(let n in o)this[n]=o[n]}var S=function(){return m.exports}();export{S as default};