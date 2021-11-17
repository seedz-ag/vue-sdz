import{n as t,S as e}from"./index.6664426a.js";import"./vendor.5affd582.js";var i={name:"Pagination",inject:["children","data"],computed:{totalPages:function(){return Math.ceil(this.children/this.data.internalPerPage)},containerWidth:function(){var t=this.totalPages-1;return{"--width":10*t+5*t+35+"px"}}},methods:{setClasses:function(t){return["option",{"-active":Math.round(this.data.position/-100)===t-1}]},goToPage:function(t){var e=this.children%this.data.internalPerPage,i=this.totalPages===t&&e&&(this.data.internalPerPage-e)*this.data.itemSize||0;this.data.position=-(100*(t-1)-i)}},render:function(t){var e=this,i=Array.from({length:this.totalPages},(function(t,e){return e+1})).map((function(i){return t("div",{key:i,class:e.setClasses(i),on:{click:function(){return e.goToPage(i)}}})}));return t("div",{style:this.containerWidth,staticClass:"pagination"},[i])}};function n(t,e,i,n,o,s,r,a,l,u){"function"==typeof r&&(l=a,a=r,r=!1);const c="function"==typeof i?i.options:i;let h;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),n&&(c._scopeId=n),s?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=h):e&&(h=r?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),h)if(c.functional){const t=c.render;c.render=function(e,i){return h.call(i),t(e,i)}}else{const t=c.beforeCreate;c.beforeCreate=t?[].concat(t,h):[h]}return i}var o=i;i.__file="Pagination.vue";var s=n({},void 0,o,void 0,void 0,void 0,void 0,void 0),r=function(){return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp2|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)},a={name:"Carousel",components:{Pagination:s},props:{pagination:{type:Boolean,default:!0},controllers:{type:Boolean,default:!1},perPage:{type:[String,Number],default:1},isDraggable:{type:Boolean,default:!0},isLoopable:Boolean,loopDelay:{type:[String,Number],default:1e3},breakpoints:{type:Object,default:function(){return{}}},friction:{type:Number,default:.97},centerAfterDragging:Boolean},data:function(){return{initPosition:0,position:0,currentWidth:0,events:{}}},provide:function(){var t=this,e={},i=function(t,i){return Object.defineProperty(e,t,{get:i,enumerable:!0})};return i("children",(function(){return t.$children.length-1})),i("data",(function(){return t})),e},mounted:function(){this.events={start:r()?"touchstart":"mousedown",move:r()?"touchmove":"mousemove",end:r()?"touchend":"mouseup"},this.isLoopable&&this.initLoop(),this.hasBreakpoints&&this.setCurrentWidth({target:{innerWidth:document.body.clientWidth}}),window.addEventListener("resize",this.setCurrentWidth)},computed:{itemSize:function(){return 100/this.internalPerPage},endPosition:function(){var t=this.$children.length;return-this.itemSize*t+(100+this.itemSize)},hasBreakpoints:function(){return!!Object.keys(this.breakpoints).length},internalPerPage:function(){var t=this.breakpoints,e=this.currentWidth;return this.hasBreakpoints&&t[e]?t[e].perPage:this.perPage},currentPage:function(){var t=-1*~~this.position;return Math.ceil(t/100)+1},containerWidth:function(){return this.$refs.inner?~~(this.$refs.inner.clientWidth/100):0},style:function(){return{transform:"translateX("+this.position+"%)"}}},methods:{fixPosition:function(){var t=this.position/this.itemSize;!!String(t).split("").includes(".")&&this.position>=this.endPosition&&(this.position=100*Math.round(this.position/this.itemSize)/this.internalPerPage)},startLoop:function(){return~~this.position<=0&&this.position>this.endPosition?this.position-=this.itemSize:this.position=0},initLoop:function(){window.setInterval(this.startLoop,this.loopDelay)},setCurrentWidth:function(t){var e=t.target.innerWidth;e>=1024&&(this.currentWidth=1024),e<=1024&&e>=769&&(this.currentWidth=768),e<=768&&e>=641&&(this.currentWidth=640),e<=640&&e>=320&&(this.currentWidth=320)},getX:function(t){return t.changedTouches&&t.changedTouches[0]&&t.changedTouches[0].clientX||t.clientX},next:function(){if(this.position<this.endPosition+100)return this.position=this.endPosition;this.position-=100},previous:function(){if(this.position>-100)return this.position=0;this.position+=100},mousemove:function(t){var e=~~(this.getX(t)/this.containerWidth-this.initPosition);this.position=e,this.position>0&&(this.position=0),this.position<this.endPosition&&(this.position=this.endPosition)},mousedown:function(t){if(!this.isDraggable)return!1;var e=this.getX(t);this.initPosition=~~(e/this.containerWidth)-this.position,window.addEventListener(this.events.move,this.mousemove),window.addEventListener(this.events.end,this.mouseup)},mouseup:function(t){if(!this.isDraggable)return!1;this.centerAfterDragging&&this.fixPosition(),window.removeEventListener(this.events.move,this.mousemove)}},render:function(t){var e,i=t("div",{staticClass:"inner",ref:"inner",style:this.style,on:(e={},e[this.events.start]=this.mousedown,e)},this.$slots.default),n=t("div",{staticClass:"controller next",on:{click:this.next}},this.$slots.next),o=t("div",{staticClass:"controller previous",on:{click:this.previous}},this.$slots.previous),r=t("div",{staticClass:"wrapper",ref:"wrapper"},[i]),a=this.pagination&&t(s);return t("div",{staticClass:"vue-coerousel"},[!!this.controllers&&o,r,!!this.controllers&&n,a])},beforeDestroy:function(){window.removeEventListener("resize",this.setCurrentWidth)}},l=a;a.__file="Carousel.vue";var u=n({},void 0,l,void 0,void 0,void 0,void 0,void 0),c={name:"Item",inject:["data"],computed:{flex:function(){return{flex:"1 0 "+100/this.data.internalPerPage+"%"}},isDraggable:function(){return this.data.isDraggable&&!this.data.isLoopable}},render:function(t){return t("div",{style:this.flex,staticClass:"carousel-item"},this.$slots.default)}},h=c;c.__file="CarouselItem.vue";var d=n({},void 0,h,void 0,void 0,void 0,void 0,void 0);const p={};var f=t({name:"SCarousel",components:{SIcon:e,coerousel:u,"coerousel-item":d},props:{items:{type:Array,required:!0}}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("coerousel",t._b({staticClass:"s-carousel"},"coerousel",t.$attrs,!1),[i("s-icon",{staticClass:"previous",attrs:{slot:"previous",icon:"chevron-left",size:"15"},slot:"previous"}),t._l(t.items,(function(e,n){return i("coerousel-item",{key:n},[t._t("default",null,{item:e})],2)})),i("s-icon",{staticClass:"next",attrs:{slot:"next",icon:"chevron-right",size:"15"},slot:"next"})],2)}),[],!1,v,null,null,null);function v(t){for(let e in p)this[e]=p[e]}const m={};var g=t({name:"SCarouselExample",components:{SCarousel:function(){return f.exports}()},data:()=>({items:[{color:"blue"},{color:"yellow"},{color:"red"},{color:"black"},{color:"pink"},{color:"turquoise"},{color:"magenta"},{color:"white"},{color:"orange"},{color:"green"},{color:"purple"},{color:"cyan"},{color:"lime"},{color:"lightblue"}],breakpoints:{1024:{perPage:4},768:{perPage:3},640:{perPage:2},320:{perPage:1}}})},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"s-carousel-example"},[i("s-carousel",{attrs:{controllers:"",items:t.items,"per-page":2,"is-loopable":!1,breakpoints:t.breakpoints},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.item;return i("div",{staticClass:"ball",style:{backgroundColor:e.color}})}}])})],1)}),[],!1,P,null,null,null);function P(t){for(let e in m)this[e]=m[e]}var b=function(){return g.exports}();export{b as default};
