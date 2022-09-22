import{g as d,n as f}from"./index.87a58ed9.js";var u={exports:{}};/*!
 * vue-coe-image v0.2.4
 * (c) 2018-present Vinicius Azevedo <viniazvd@gmail.com>
 * Released under the MIT License.
 */(function(o,r){(function(i,t){o.exports=t()})(d,function(){var i={name:"vue-coe-image",props:{loaderImage:{type:String,default:"https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"},src:{type:[String,File],required:!0},srcset:String,fallback:{type:String},animation:{type:Boolean,default:!0},delay:{type:[String,Number],default:0},blurLevel:{type:Number,default:30},duration:{type:Number,default:500},intersectionOptions:{type:Object,default:function(){return{}}}},data:function(){return{rate:1,observer:{},image:null,imageHandler:null,hasError:!1,intersected:!1}},watch:{src:"setSource",hasError:"setFallback"},created:function(){var e=this;this.image=this.loaderImage,this.$once("hook:mounted",function(){setTimeout(function(){e.observer=new IntersectionObserver(function(a){var n=a[0];n.isIntersecting&&(e.intersected=!0,e.setImage(),e.observer.disconnect(),e.$emit("intersect"))},e.intersectionOptions),e.observer.observe(e.$el)},e.delay)}),this.$once("hook:beforeDestroy",function(){setTimeout(function(){e.observer.unobserve(e.$el)},e.delay)})},computed:{deviation:function(){return this.blurLevel*this.rate}},methods:{setSource:function(e,a){e!==a&&(this.hasError=!1,this.setImage())},setFallback:function(e){e&&(this.image=this.fallback)},handleLoad:function(){this.image=this.imageHandler.src,this.animation&&this.animate()},handleError:function(){this.fallback||console.warn("an error occured during the image loading"),this.hasError=!0,this.$emit("error")},setImage:function(){this.imageHandler=new Image,this.imageHandler.src=this.src||this.placeholder,this.imageHandler.onload=this.handleLoad,this.imageHandler.onerror=this.handleError},animate:function(){var e=this,a=Date.now()+this.duration,n=function(){var s=a-Date.now();s<0?e.rate=0:(e.rate=s/e.duration,requestAnimationFrame(n))};requestAnimationFrame(n)}},render:function(e){var a=e("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:this.deviation}}),n=e("filter",{attrs:{id:"blur"}},[a]),s=e("defs",null,[n]),c=e("svg",{class:["filter-defs-svg hidden"],attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[s]),m=e("img",{ref:"img",class:"lazy-load-image",style:"url("+this.image+")",attrs:{src:this.image}});return e("div",{class:"vue-coe-image"},[!this.hasError&&this.intersected&&c,m])},install:function(e){e.component("VueCoeImage",i)}};return i})})(u);const g=u.exports;var h=function(){var r=this,i=r.$createElement,t=r._self._c||i;return t("vue-coe-image",r._g(r._b({staticClass:"s-image",attrs:{duration:r.duration}},"vue-coe-image",r.$attrs,!1),r.$listeners))},v=[];const p={name:"SImage",components:{VueCoeImage:g},props:{duration:{type:Number,default:0}}},l={};var _=f(p,h,v,!1,b,null,null,null);function b(o){for(let r in l)this[r]=l[r]}const I=function(){return _.exports}();export{I as S};