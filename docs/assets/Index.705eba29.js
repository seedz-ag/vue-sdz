var p=Object.defineProperty;var n=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var l=(t,e,o)=>e in t?p(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,r=(t,e)=>{for(var o in e||(e={}))g.call(e,o)&&l(t,o,e[o]);if(n)for(var o of n(e))u.call(e,o)&&l(t,o,e[o]);return t};import{n as m}from"./index.7ad9d17d.js";import"./vendor.0f0055ec.js";const h=({parentElement:t})=>t?[t,...h(t)]:[],a=(t,e)=>typeof e=="string"&&t.indexOf(e)>-1,f={name:"SPopover",props:{target:{type:[Object,Element]},arrowSpacing:{type:[Number,String],default:15},elementSpacing:{type:[Number,String],default:0},position:{type:String,default:"bottom",validator:t=>a(["bottom","top"],t)},align:{type:String,default:"center",validator:t=>a(["right","center","left"],t)},selector:String},data(){return{coordinates:{},observer:{}}},watch:{target:{handler:"setPosition",immediate:!0}},mounted(){const t=this.$el,e={attributes:!0,attributeFilter:["style"]},o=s=>{for(const d of s)d.type==="attributes"&&this.setPosition()};this.observer=new MutationObserver(o),this.observer.observe(t,e);const i=this.selector?document.querySelector(this.selector):window;window.addEventListener("click",this.emissionHandler),window.addEventListener("resize",this.setPosition),document.addEventListener("keydown",this.clickEscape,!0),i.addEventListener("scroll",this.setPosition)},computed:{boxShadow(){return{"--box-shadow":this.position==="bottom"?"-1px -1px 6px -1.5px rgba(0, 0, 0, 0.2)":"2px 2px 2px 0.5px rgba(0, 0, 0, 0.2)"}},arrowAlignment(){return this.align==="left"?{"--right":`${this.arrowSpacing}px`}:this.align==="right"?{"--left":`${this.arrowSpacing}px`}:{"--left":`calc(50% - ${this.arrowSpacing/2}px)`}},arrowBorder(){const t="white",e="transparent",i=this.position==="top"&&t||e;return{"--border-bottom-color":i,"--border-right-color":i,"--border-left-color":i,"--border-top-color":i}},style(){return r(r(r(r(r({},this.coordinates),this.arrowAlignment),this.arrowPosition),this.arrowBorder),this.boxShadow)}},methods:{setPosition(){!this.target||this.$nextTick(()=>{const t=this.$el.getBoundingClientRect(),e=this.target.hasOwnProperty("$el")?this.target.$el.getBoundingClientRect():this.target.getBoundingClientRect();let o=this.position==="top"?e.top-(8+t.height)-this.elementSpacing:e.top+(8+e.height)+this.elementSpacing,i=e.left+e.width/2;this.align==="left"&&(i=i-t.width+20),this.align==="right"&&(i=i-20),this.align==="center"&&(i=i-t.width/2),this.coordinates={top:o+"px",left:i+"px"};const s=this.position==="bottom"?"-5":t.height-5;this.arrowPosition={"--top":s+"px"}})},emissionHandler(t){if(!this.target)return;const e=t.target?[t.target,...h(t.target)]:[],o=e.includes(this.target.$el),i=!e.includes(this.$el);!o&&i&&this.$emit("handler")},clickEscape(t){(t.key==="Escape"||t.keyCode===27)&&this.$emit("handler")}},beforeDestroy(){const t=this.selector?document.querySelector(this.selector):window;window.removeEventListener("click",this.emissionHandler),window.removeEventListener("resize",this.setPosition),document.removeEventListener("keydown",this.clickEscape,!0),t.removeEventListener("scroll",this.getPosition),this.observer.disconnect()},render(t){return t("div",{staticClass:"s-popover",class:{"-bottom":!this.target},style:this.style},this.$slots.default)}};let w,v;const c={};var b=m(f,w,v,!1,x,null,null,null);function x(t){for(let e in c)this[e]=c[e]}var E=function(){return b.exports}();export{E as default};