import{n as r,h as o,S as _,a as l}from"./index.c61da6d1.js";import{S as g}from"./Index.1fc9bb72.js";const u="https://seedz-ag.github.io/vue-sdz/assets/chaves.94857250.jpg",m="https://seedz-ag.github.io/vue-sdz/assets/nhonho.d415688f.jpg",v="https://seedz-ag.github.io/vue-sdz/assets/seumadruga.84e54830.jpg",h="https://seedz-ag.github.io/vue-sdz/assets/victao.21137850.jpg";var p=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"s-image-example"},[t("s-title",{attrs:{size:"title-1"}},[e._v("Image")]),t("s-box",{staticClass:"flex-center"},[t("div",{staticClass:"alter-image"},[t("s-image",{attrs:{src:e.src,duration:100,fallback:"https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg"}})],1),t("div",{staticClass:"flex-inline flex-center"},[t("s-button",{attrs:{primary:""},on:{click:function(n){return e.changeImage("chaves")}}},[e._v("chaves")]),t("s-button",{attrs:{primary:""},on:{click:function(n){return e.changeImage("seumadruga")}}},[e._v("seu madruga")]),t("s-button",{attrs:{primary:""},on:{click:function(n){return e.changeImage("nhonho")}}},[e._v("nhonho")]),t("s-button",{attrs:{primary:""},on:{click:function(n){return e.changeImage("victao")}}},[e._v("victao")])],1)])],1)},d=[];const f={components:{SButton:o,SImage:g,SBox:_,STitle:l},data(){return{src:""}},created(){this.changeImage("chaves")},methods:{changeImage(s){this.src=new URL(Object.assign({"../../../src/assets/examples/chaves.jpg":u,"../../../src/assets/examples/nhonho.jpg":m,"../../../src/assets/examples/seumadruga.jpg":v,"../../../src/assets/examples/victao.jpg":h})[`../../../src/assets/examples/${s}.jpg`],self.location).href}}},c={};var x=r(f,p,d,!1,b,null,null,null);function b(s){for(let e in c)this[e]=c[e]}const I=function(){return x.exports}();export{I as default};