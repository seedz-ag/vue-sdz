import{S as e}from"./Index.e5ed1883.js";import{c as t}from"./vendor.5affd582.js";import{n as s}from"./index.1f769140.js";import{S as a}from"./box.293e80ab.js";var r,n={exports:{}};n.exports=r={name:"vue-coe-image",props:{loaderImage:{type:String,default:"https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"},src:{type:[String,File],required:!0},srcset:String,fallback:{type:String},animation:{type:Boolean,default:!0},delay:{type:[String,Number],default:0},blurLevel:{type:Number,default:30},duration:{type:Number,default:500},intersectionOptions:{type:Object,default:function(){return{}}}},data:function(){return{rate:1,observer:{},image:null,imageHandler:null,hasError:!1,intersected:!1}},watch:{src:"setSource",hasError:"setFallback"},created:function(){var e=this;this.image=this.loaderImage,this.$once("hook:mounted",(function(){setTimeout((function(){e.observer=new IntersectionObserver((function(t){t[0].isIntersecting&&(e.intersected=!0,e.setImage(),e.observer.disconnect(),e.$emit("intersect"))}),e.intersectionOptions),e.observer.observe(e.$el)}),e.delay)})),this.$once("hook:beforeDestroy",(function(){setTimeout((function(){e.observer.unobserve(e.$el)}),e.delay)}))},computed:{deviation:function(){return this.blurLevel*this.rate}},methods:{setSource:function(e,t){e!==t&&(this.hasError=!1,this.setImage())},setFallback:function(e){e&&(this.image=this.fallback)},handleLoad:function(){this.image=this.imageHandler.src,this.animation&&this.animate()},handleError:function(){this.fallback||console.warn("an error occured during the image loading"),this.hasError=!0,this.$emit("error")},setImage:function(){this.imageHandler=new Image,this.imageHandler.src=this.src||this.placeholder,this.imageHandler.onload=this.handleLoad,this.imageHandler.onerror=this.handleError},animate:function(){var e=this,t=Date.now()+this.duration,s=function(){var a=t-Date.now();a<0?e.rate=0:(e.rate=a/e.duration,requestAnimationFrame(s))};requestAnimationFrame(s)}},render:function(e){var t=e("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:this.deviation}}),s=e("filter",{attrs:{id:"blur"}},[t]),a=e("defs",null,[s]),r=e("svg",{class:["filter-defs-svg hidden"],attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[a]),n=e("img",{ref:"img",class:"lazy-load-image",style:"url("+this.image+")",attrs:{src:this.image,crossorigin:"anonymous"}});return e("div",{class:"vue-coe-image"},[!this.hasError&&this.intersected&&r,n])},install:function(e){e.component("VueCoeImage",r)}};const i={};var o=s({name:"SImage",components:{VueCoeImage:n.exports},props:{duration:{type:Number,default:0}}},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("vue-coe-image",e._g(e._b({staticClass:"s-image",attrs:{duration:e.duration}},"vue-coe-image",e.$attrs,!1),e.$listeners))}),[],!1,c,null,null,null);function c(e){for(let t in i)this[t]=i[t]}const u={};var l=s({components:{SButton:e,SImage:function(){return o.exports}(),SBox:a},data:()=>({src:""}),created(){this.changeImage("chaves")},methods:{changeImage(e){this.src=new URL({"../../../src/assets/examples/chaves.jpg":"https://seedz-ag.github.io/vue-sdz/assets/chaves.94857250.jpg","../../../src/assets/examples/nhonho.jpg":"https://seedz-ag.github.io/vue-sdz/assets/nhonho.d415688f.jpg","../../../src/assets/examples/seumadruga.jpg":"https://seedz-ag.github.io/vue-sdz/assets/seumadruga.84e54830.jpg","../../../src/assets/examples/victao.jpg":"https://seedz-ag.github.io/vue-sdz/assets/victao.21137850.jpg"}[`../../../src/assets/examples/${e}.jpg`],window.location).href}}},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"s-image-example"},[s("h1",{staticClass:"h1"},[e._v("Image")]),s("s-box",{staticClass:"flex-center"},[s("div",{staticClass:"alter-image"},[s("s-image",{attrs:{src:e.src,duration:100,fallback:"https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg"}})],1),s("div",{staticClass:"flex-inline flex-center"},[s("s-button",{attrs:{primary:""},on:{click:function(t){return e.changeImage("chaves")}}},[e._v("chaves")]),s("s-button",{attrs:{primary:""},on:{click:function(t){return e.changeImage("seumadruga")}}},[e._v("seu madruga")]),s("s-button",{attrs:{primary:""},on:{click:function(t){return e.changeImage("nhonho")}}},[e._v("nhonho")]),s("s-button",{attrs:{primary:""},on:{click:function(t){return e.changeImage("victao")}}},[e._v("victao")])],1)])],1)}),[],!1,m,null,null,null);function m(e){for(let t in u)this[t]=u[t]}var h=function(){return l.exports}();export{h as default};
