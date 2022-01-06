var t=Object.defineProperty,e=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(e,o,i)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,r=(t,r)=>{for(var s in r||(r={}))o.call(r,s)&&n(t,s,r[s]);if(e)for(var s of e(r))i.call(r,s)&&n(t,s,r[s]);return t};"undefined"!=typeof require&&require;import{S as s}from"./Index.4871a188.js";import{n as a,S as l}from"./index.c90c6057.js";import{S as p}from"./box.7e99e0b3.js";import"./vendor.8161f9ef.js";const c=({parentElement:t})=>t?[t,...c(t)]:[],h=(t,e)=>"string"==typeof e&&t.indexOf(e)>-1,d={name:"SPopover",props:{target:{type:[Object,Element]},arrowSpacing:{type:[Number,String],default:15},elementSpacing:{type:[Number,String],default:0},position:{type:String,default:"bottom",validator:t=>h(["bottom","top"],t)},align:{type:String,default:"center",validator:t=>h(["right","center","left"],t)},selector:String},data:()=>({coordinates:{},observer:{}}),watch:{target:{handler:"setPosition",immediate:!0}},mounted(){const t=this.$el;this.observer=new MutationObserver((t=>{for(const e of t)"attributes"===e.type&&this.setPosition()})),this.observer.observe(t,{attributes:!0,attributeFilter:["style"]});const e=this.selector?document.querySelector(this.selector):window;window.addEventListener("click",this.emissionHandler),window.addEventListener("resize",this.setPosition),document.addEventListener("keydown",this.clickEscape,!0),e.addEventListener("scroll",this.setPosition)},computed:{boxShadow(){return{"--box-shadow":"bottom"===this.position?"-1px -1px 6px -1.5px rgba(0, 0, 0, 0.2)":"2px 2px 2px 0.5px rgba(0, 0, 0, 0.2)"}},arrowAlignment(){return"left"===this.align?{"--right":`${this.arrowSpacing}px`}:"right"===this.align?{"--left":`${this.arrowSpacing}px`}:{"--left":`calc(50% - ${this.arrowSpacing/2}px)`}},arrowBorder(){const t="top"===this.position?"white":"transparent";return{"--border-bottom-color":t,"--border-right-color":t,"--border-left-color":t,"--border-top-color":t}},style(){return r(r(r(r(r({},this.coordinates),this.arrowAlignment),this.arrowPosition),this.arrowBorder),this.boxShadow)}},methods:{setPosition(){this.target&&this.$nextTick((()=>{const t=this.$el.getBoundingClientRect(),e=this.target.hasOwnProperty("$el")?this.target.$el.getBoundingClientRect():this.target.getBoundingClientRect();let o="top"===this.position?e.top-(8+t.height)-this.elementSpacing:e.top+(8+e.height)+this.elementSpacing,i=e.left+e.width/2;"left"===this.align&&(i=i-t.width+20),"right"===this.align&&(i-=20),"center"===this.align&&(i-=t.width/2),this.coordinates={top:o+"px",left:i+"px"};const n="bottom"===this.position?"-5":t.height-5;this.arrowPosition={"--top":n+"px"}}))},emissionHandler(t){if(!this.target)return;const e=t.target?[t.target,...c(t.target)]:[],o=e.includes(this.target.$el),i=!e.includes(this.$el);!o&&i&&this.$emit("handler")},clickEscape(t){"Escape"!==t.key&&27!==t.keyCode||this.$emit("handler")}},beforeDestroy(){const t=this.selector?document.querySelector(this.selector):window;window.removeEventListener("click",this.emissionHandler),window.removeEventListener("resize",this.setPosition),document.removeEventListener("keydown",this.clickEscape,!0),t.removeEventListener("scroll",this.getPosition),this.observer.disconnect()},render(t){return t("div",{staticClass:"s-popover",class:{"-bottom":!this.target},style:this.style},this.$slots.default)}};const g={};var u=a(d,undefined,undefined,!1,v,null,null,null);function v(t){for(let e in g)this[e]=g[e]}const f={};var m=a({components:{SPopover:function(){return u.exports}(),SButton:s,SBox:p,STitle:l},data:()=>({align:"",position:"",showPopover:!1}),methods:{openPopover({position:t,align:e}){this.align=e,this.position=t,this.showPopover=!0}}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"s-popover-example"},[o("s-title",{staticClass:"h1",attrs:{title:"Popover"}}),o("s-box",[o("div",{staticClass:"example-popover flex-line flex-center"},[t.showPopover?o("s-popover",{staticClass:"popover",attrs:{align:t.align,position:t.position,"element-spacing":5,target:t.$refs.teste},on:{handler:function(e){t.showPopover=!1}}},[o("div",[t._v("Content Popover")])]):t._e(),o("div",{ref:"teste",staticClass:"target"},[t._v("popover target")])],1),o("div",{staticClass:"buttons flex-inline"},[o("s-button",{on:{click:function(e){return e.stopPropagation(),t.openPopover({position:"top",align:"left"})}}},[t._v("top left")]),o("s-button",{on:{click:function(e){return e.stopPropagation(),t.openPopover({position:"top",align:"center"})}}},[t._v("top center")]),o("s-button",{on:{click:function(e){return e.stopPropagation(),t.openPopover({position:"top",align:"right"})}}},[t._v("top right")]),o("s-button",{on:{click:function(e){return e.stopPropagation(),t.openPopover({position:"bottom",align:"left"})}}},[t._v("bottom left")]),o("s-button",{on:{click:function(e){return e.stopPropagation(),t.openPopover({position:"bottom",align:"center"})}}},[t._v("bottom center")]),o("s-button",{on:{click:function(e){return e.stopPropagation(),t.openPopover({position:"bottom",align:"right"})}}},[t._v("bottom right")])],1)])],1)}),[],!1,b,null,null,null);function b(t){for(let e in f)this[e]=f[e]}var w=function(){return m.exports}();export{w as default};