import{n as r,e as o,S as c}from"./index.259ac129.js";import i from"./Index.0622be3d.js";import{S as l}from"./box.25b4751f.js";import"./vendor.edd272bb.js";var g="https://seedz-ag.github.io/vue-sdz/assets/chaves.94857250.jpg",u="https://seedz-ag.github.io/vue-sdz/assets/nhonho.d415688f.jpg",m="https://seedz-ag.github.io/vue-sdz/assets/seumadruga.84e54830.jpg",_="https://seedz-ag.github.io/vue-sdz/assets/victao.21137850.jpg",v=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"s-image-example"},[s("s-title",{staticClass:"h1",attrs:{title:"Image"}}),s("s-box",{staticClass:"flex-center"},[s("div",{staticClass:"alter-image"},[s("s-image",{attrs:{src:e.src,duration:100,fallback:"https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg"}})],1),s("div",{staticClass:"flex-inline flex-center"},[s("s-button",{attrs:{primary:""},on:{click:function(a){return e.changeImage("chaves")}}},[e._v("chaves")]),s("s-button",{attrs:{primary:""},on:{click:function(a){return e.changeImage("seumadruga")}}},[e._v("seu madruga")]),s("s-button",{attrs:{primary:""},on:{click:function(a){return e.changeImage("nhonho")}}},[e._v("nhonho")]),s("s-button",{attrs:{primary:""},on:{click:function(a){return e.changeImage("victao")}}},[e._v("victao")])],1)])],1)},h=[];const p={components:{SButton:o,SImage:i,SBox:l,STitle:c},data(){return{src:""}},created(){this.changeImage("chaves")},methods:{changeImage(e){this.src=new URL({"../../../src/assets/examples/chaves.jpg":g,"../../../src/assets/examples/nhonho.jpg":u,"../../../src/assets/examples/seumadruga.jpg":m,"../../../src/assets/examples/victao.jpg":_}[`../../../src/assets/examples/${e}.jpg`],self.location).href}}},n={};var d=r(p,v,h,!1,f,null,null,null);function f(e){for(let t in n)this[t]=n[t]}var z=function(){return d.exports}();export{z as default};