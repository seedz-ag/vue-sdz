var t=Object.defineProperty,e=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,n=(e,o,i)=>o in e?t(e,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[o]=i,r=(t,r)=>{for(var s in r||(r={}))o.call(r,s)&&n(t,s,r[s]);if(e)for(var s of e(r))i.call(r,s)&&n(t,s,r[s]);return t};"undefined"!=typeof require&&require;import{S as s}from"./Index.e5ed1883.js";import{n as a}from"./index.1f769140.js";import{S as l}from"./box.293e80ab.js";import"./vendor.5affd582.js";const p=({parentElement:t})=>t?[t,...p(t)]:[],c=(t,e)=>"string"==typeof e&&t.indexOf(e)>-1,h={name:"SPopover",props:{target:{type:[Object,Element]},arrowSpacing:{type:[Number,String],default:15},elementSpacing:{type:[Number,String],default:0},position:{type:String,default:"bottom",validator:t=>c(["bottom","top"],t)},align:{type:String,default:"center",validator:t=>c(["right","center","left"],t)},selector:String},data:()=>({coordinates:{},observer:{}}),watch:{target:{handler:"setPosition",immediate:!0}},mounted(){const t=this.$el;this.observer=new MutationObserver((t=>{for(const e of t)"attributes"===e.type&&this.setPosition()})),this.observer.observe(t,{attributes:!0,attributeFilter:["style"]});const e=this.selector?document.querySelector(this.selector):window;window.addEventListener("click",this.emissionHandler),window.addEventListener("resize",this.setPosition),document.addEventListener("keydown",this.clickEscape,!0),e.addEventListener("scroll",this.setPosition)},computed:{boxShadow(){return{"--box-shadow":"bottom"===this.position?"-1px -1px 6px -1.5px rgba(0, 0, 0, 0.2)":"2px 2px 2px 0.5px rgba(0, 0, 0, 0.2)"}},arrowAlignment(){return"left"===this.align?{"--right":`${this.arrowSpacing}px`}:"right"===this.align?{"--left":`${this.arrowSpacing}px`}:{"--left":`calc(50% - ${this.arrowSpacing/2}px)`}},arrowBorder(){const t="top"===this.position?"white":"transparent";return{"--border-bottom-color":t,"--border-right-color":t,"--border-left-color":t,"--border-top-color":t}},style(){return r(r(r(r(r({},this.coordinates),this.arrowAlignment),this.arrowPosition),this.arrowBorder),this.boxShadow)}},methods:{setPosition(){this.target&&this.$nextTick((()=>{const t=this.$el.getBoundingClientRect(),e=this.target.hasOwnProperty("$el")?this.target.$el.getBoundingClientRect():this.target.getBoundingClientRect();let o="top"===this.position?e.top-(8+t.height)-this.elementSpacing:e.top+(8+e.height)+this.elementSpacing,i=e.left+e.width/2;"left"===this.align&&(i=i-t.width+20),"right"===this.align&&(i-=20),"center"===this.align&&(i-=t.width/2),this.coordinates={top:o+"px",left:i+"px"};const n="bottom"===this.position?"-5":t.height-5;this.arrowPosition={"--top":n+"px"}}))},emissionHandler(t){if(!this.target)return;const e=t.target?[t.target,...p(t.target)]:[],o=e.includes(this.target.$el),i=!e.includes(this.$el);!o&&i&&this.$emit("handler")},clickEscape(t){"Escape"!==t.key&&27!==t.keyCode||this.$emit("handler")}},beforeDestroy(){const t=this.selector?document.querySelector(this.selector):window;window.removeEventListener("click",this.emissionHandler),window.removeEventListener("resize",this.setPosition),document.removeEventListener("keydown",this.clickEscape,!0),t.removeEventListener("scroll",this.getPosition),this.observer.disconnect()},render(t){return t("div",{staticClass:"s-popover",class:{"-bottom":!this.target},style:this.style},this.$slots.default)}};const d={};var g=a(h,undefined,undefined,!1,u,null,null,null);function u(t){for(let e in d)this[e]=d[e]}const v={};var f=a({components:{SPopover:function(){return g.exports}(),SButton:s,SBox:l},data:()=>({align:"",position:"",showPopover:!1}),methods:{openPopover({position:t,align:e}){this.align=e,this.position=t,this.showPopover=!0}}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"s-popover-example"},[o("h1",{staticClass:"h1"},[t._v("Popover")]),o("s-box",[o("div",{staticClass:"example-popover flex-line flex-center"},[t.showPopover?o("s-popover",{staticClass:"popover",attrs:{align:t.align,position:t.position,"element-spacing":5,target:t.$refs.teste},on:{handler:function(e){t.showPopover=!1}}},[o("div",[t._v("Content Popover")])]):t._e(),o("div",{ref:"teste",staticClass:"target"},[t._v("popover target")])],1),o("div",{staticClass:"buttons flex-inline"},[o("s-button",{on:{click:function(e){return e.stopPropagation(),t.openPopover({position:"top",align:"left"})}}},[t._v("top left")]),o("s-button",{on:{click:function(e){return e.stopPropagation(),t.openPopover({position:"top",align:"center"})}}},[t._v("top center")]),o("s-button",{on:{click:function(e){return e.stopPropagation(),t.openPopover({position:"top",align:"right"})}}},[t._v("top right")]),o("s-button",{on:{click:function(e){return e.stopPropagation(),t.openPopover({position:"bottom",align:"left"})}}},[t._v("bottom left")]),o("s-button",{on:{click:function(e){return e.stopPropagation(),t.openPopover({position:"bottom",align:"center"})}}},[t._v("bottom center")]),o("s-button",{on:{click:function(e){return e.stopPropagation(),t.openPopover({position:"bottom",align:"right"})}}},[t._v("bottom right")])],1)])],1)}),[],!1,m,null,null,null);function m(t){for(let e in v)this[e]=v[e]}var b=function(){return f.exports}();export{b as default};