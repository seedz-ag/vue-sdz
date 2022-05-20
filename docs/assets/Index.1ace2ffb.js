import{n as y,e as $}from"./index.7254144d.js";import"./vendor.0f0055ec.js";var _={name:"Pagination",inject:["items","data"],props:{totalPages:Number},computed:{containerWidth:function(){var t=this.totalPages-1;return{"--width":t*10+t*5+35+"px"}}},methods:{setClasses:function(t){return["option",{"-active":Math.ceil(this.data.position/-100)===t-1}]},goToPage:function(t){if(t===1)return this.data.position=0;if(this.data.totalPages===t)return this.data.position=this.data.endPosition;this.data.position=-(t-1)*100}},render:function(t){var i=this,n=Array.from({length:this.totalPages},function(o,a){return a+1}).map(function(o){return t("div",{key:o,class:i.setClasses(o),on:{click:function(){return i.goToPage(o)}}})});return t("div",{style:this.containerWidth,staticClass:"pagination"},[n])}};function h(e,t,i,n,o,a,l,d,f,b){typeof l=="function"&&(f=d,d=l,l=!1);const r=typeof i=="function"?i.options:i;e&&e.render&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns,r._compiled=!0,o&&(r.functional=!0)),n&&(r._scopeId=n);let u;if(a?(u=function(s){s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!s&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(s=__VUE_SSR_CONTEXT__),t&&t.call(this,f(s)),s&&s._registeredComponents&&s._registeredComponents.add(a)},r._ssrRegister=u):t&&(u=l?function(){t.call(this,b(this.$root.$options.shadowRoot))}:function(s){t.call(this,d(s))}),u)if(r.functional){const s=r.render;r.render=function(C,p){return u.call(p),s(C,p)}}else{const s=r.beforeCreate;r.beforeCreate=s?[].concat(s,u):[u]}return i}var w=_;_.__file="Pagination.vue";var W=void 0,k=void 0,x=void 0,D=void 0,v=h({},W,w,k,D,x,void 0,void 0),c=function(){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp2|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)},m={name:"Carousel",components:{Pagination:v},props:{pagination:{type:Boolean,default:!0},controllers:{type:Boolean,default:!1},perPage:{type:[String,Number],default:1},isDraggable:{type:Boolean,default:!0},isLoopable:Boolean,loopDelay:{type:[String,Number],default:1e3},breakpoints:{type:Object,default:function(){return{}}},friction:{type:Number,default:.97},centerAfterDragging:Boolean},data:function(){return{initPosition:0,position:0,currentWidth:0,isDragging:!1,events:{}}},provide:function(){var t=this,i={},n=function(o,a){return Object.defineProperty(i,o,{get:a,enumerable:!0})};return n("data",function(){return t}),n("items",function(){return t.itemQtd}),i},mounted:function(){this.events={start:c()?"touchstart":"mousedown",move:c()?"touchmove":"mousemove",end:c()?"touchend":"mouseup"},this.isLoopable&&this.initLoop(),this.hasBreakpoints&&this.setCurrentWidth({target:{innerWidth:document.body.clientWidth}}),window.addEventListener("resize",this.setCurrentWidth)},computed:{itemSize:function(){return 100/this.internalPerPage},itemQtd:function(){return this.$slots.default.filter(function(t){var i=t.componentOptions;return i&&i.tag==="coerousel-item"}).length},totalPages:function(){return Math.ceil(this.itemQtd/this.internalPerPage)||0},endPosition:function(){var t=this.$slots.default.filter(function(i){var n=i.componentOptions;return n&&n.tag==="coerousel-item"}).length+1;return-(this.itemSize*t)+(100+this.itemSize)},hasBreakpoints:function(){return!!Object.keys(this.breakpoints).length},internalPerPage:function(){var t=this.breakpoints,i=this.currentWidth;return this.hasBreakpoints&&t[i]?t[i].perPage:this.perPage},currentPage:function(){var t=~~this.position*-1;return Math.ceil(t/100)+1},containerWidth:function(){return this.$refs.inner?~~(this.$refs.inner.clientWidth/100):0},carouselClasses:function(){var t=this.itemQtd>this.internalPerPage;return["vue-coerousel",{"--has-controllers":this.controllers,"--has-previous":t&&this.position<0,"--has-next":t&&this.position>this.endPosition}]},style:function(){return{transform:"translateX("+this.position+"%)",cursor:this.isDragging?"pointer":"initial"}}},methods:{fixPosition:function(){var t=this.position/this.itemSize,i=!String(t).split("").includes(".");!i&&this.position>=this.endPosition&&(this.position=Math.round(this.position/this.itemSize)*100/this.internalPerPage)},startLoop:function(){return~~this.position<=0&&this.position>this.endPosition?this.position-=this.itemSize:this.position=0},initLoop:function(){window.setInterval(this.startLoop,this.loopDelay)},setCurrentWidth:function(t){var i=t.target.innerWidth;i>=1024&&(this.currentWidth=1024),i<=1024&&i>=769&&(this.currentWidth=768),i<=768&&i>=641&&(this.currentWidth=640),i<=640&&i>=320&&(this.currentWidth=320)},getX:function(t){return t.changedTouches&&t.changedTouches[0]&&t.changedTouches[0].clientX||t.clientX},next:function(){if(this.position<this.endPosition+100)return this.position=this.endPosition;this.position-=100},previous:function(){if(this.position>-100)return this.position=0;this.position+=100},mousemove:function(t){this.isDragging=!0;var i=this.getX(t),n=~~(i/this.containerWidth-this.initPosition);this.position=n,this.position>0&&(this.position=0),this.position<this.endPosition&&(this.position=this.endPosition)},mousedown:function(t){if(!this.isDraggable)return!1;this.isDragging=!0;var i=this.getX(t);this.initPosition=~~(i/this.containerWidth)-this.position,window.addEventListener(this.events.move,this.mousemove),window.addEventListener(this.events.end,this.mouseup)},mouseup:function(t){if(!this.isDraggable)return!1;this.centerAfterDragging&&this.fixPosition(),this.isDragging=!1,window.removeEventListener(this.events.move,this.mousemove)}},render:function(t){var i,n=t("div",{staticClass:"inner",ref:"inner",style:this.style,on:(i={},i[this.events.start]=this.mousedown,i)},this.$slots.default),o=t("div",{staticClass:"controller next",on:{click:this.next}},this.$slots.next),a=t("div",{staticClass:"controller previous",on:{click:this.previous}},this.$slots.previous),l=t("div",{staticClass:"wrapper",ref:"wrapper"},[n]),d=this.pagination&&t(v,{props:{totalPages:this.totalPages}});return t("div",{class:this.carouselClasses},[this.controllers?a:!1,l,this.controllers?o:!1,d])},beforeDestroy:function(){window.removeEventListener("resize",this.setCurrentWidth)}},z=m;m.__file="Carousel.vue";var L=void 0,S=void 0,B=void 0,O=void 0,X=h({},L,z,S,O,B,void 0,void 0),g={name:"Item",inject:["data"],computed:{flex:function(){return{flex:"1 0 "+100/this.data.internalPerPage+"%"}},isDraggable:function(){return this.data.isDraggable&&!this.data.isLoopable}},render:function(t){return t("div",{style:this.flex,staticClass:"carousel-item"},this.$slots.default)}},E=g;g.__file="CarouselItem.vue";var N=void 0,R=void 0,T=void 0,j=void 0,A=h({},N,E,R,j,T,void 0,void 0),Q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("coerousel",e._b({staticClass:"s-carousel"},"coerousel",e.$attrs,!1),[i("s-icon",{staticClass:"previous",attrs:{slot:"previous",icon:"sdz-chevron-left",size:"15"},slot:"previous"}),e._l(e.items,function(n,o){return i("coerousel-item",{key:o},[e._t("default",null,{item:n})],2)}),i("s-icon",{staticClass:"next",attrs:{slot:"next",icon:"sdz-chevron-right",size:"15"},slot:"next"})],2)},F=[];const I={name:"SCarousel",components:{SIcon:$,coerousel:X,"coerousel-item":A},props:{items:{type:Array,required:!0}}},P={};var M=y(I,Q,F,!1,U,null,null,null);function U(e){for(let t in P)this[t]=P[t]}var H=function(){return M.exports}();export{H as default};