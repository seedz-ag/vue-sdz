import{n as d,e as u}from"./index.7ad9d17d.js";import"./vendor.0f0055ec.js";var h=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"tabberEl",class:["s-tabber",{"-full-width":t.fullWidth,"-alternative":t.alternative}],on:{mousedown:function(s){!t.noSwipe&&t.bindScroll(s)}}},[e("div",{ref:"wrapperEl",class:["wrapper",{"-resizable":t.resizable}],style:{transform:"translateX("+t.scrollLeftOffset+"px)"}},[t._l(t.tabs,function(s){return e("div",{key:s.value,ref:s.value,refInFor:!0,class:t.getClasses(s),on:{click:function(r){return t.changeTab(s)}}},[e("span",{staticClass:"content"},[s.icon?e("s-icon",{staticClass:"icon",attrs:{icon:s.icon,size:"20"}}):t._e(),e("span",{staticClass:"text"},[t._v(t._s(s.name))])],1)])}),e("div",{class:["border",{"-alternative":t.alternative}],style:[t.activeStyle,t.borderStyle]})],2)])},v=[];const f={name:"STabber",components:{SIcon:u},props:{tabs:{type:Array,required:!0},activeTab:String,resizable:Boolean,iconOnly:Boolean,noSwipe:Boolean,fullWidth:Boolean,alternative:Boolean,borderColor:{type:[String,Array],validator:t=>t.length}},data(){return{activeStyle:{},scrollLeftOffset:0,previousPosition:0,lastClickPosition:0,lastScrollPosition:0}},watch:{activeTab:{immediate:!0,handler:"getActiveStyle"}},mounted(){addEventListener("resize",this.getActiveStyle)},computed:{borderStyle(){return{background:Array.isArray(this.borderColor)?"linear-gradient(90deg, "+this.borderColor.join(", ")+")":this.borderColor}}},methods:{getClasses(t){return["tab",{"-active":this.getActiveTab(t),"-icon-only":t.iconOnly||this.iconOnly,"-alternative":this.alternative,"-disabled":t.disabled,"-has-icon":t.icon}]},getActiveTab(t){return t.subTabs?t.subTabs.find(i=>i===this.activeTab):t.value===this.activeTab},getActiveStyle(){this.$nextTick(()=>{const t=this.tabs.some(l=>l.subTabs),i=(this.tabs.find(l=>l.subTabs&&l.subTabs.includes(this.activeTab))||{}).value,e=t?i:this.activeTab,s=this.$refs.wrapperEl.getBoundingClientRect().left||0,r=this.$refs[e]&&this.$refs[e][0],n=r?r.getBoundingClientRect().left-s+"px":0,o=r?r.offsetWidth+"px":0,a={left:n,width:o};this.activeStyle=a,this.scrollLeftOffset=this.centralizeActiveTab(parseInt(n),parseInt(o))})},centralizeActiveTab(t,i){const e=this.$refs.tabberEl.getBoundingClientRect().width,s=this.$refs.wrapperEl.getBoundingClientRect().width,r=this.$refs.wrapperEl.scrollWidth,n=-t+e/2-i/2;return e>=r||n>0?0:r+n<=e?t+i>=e?s-(t+i):e-r:n},changeTab(t){t.disabled||this.$emit("change-tab",t.value)},bindScroll({clientX:t}){this.lastClickPosition=t,this.lastScrollPosition=this.scrollLeftOffset,window.addEventListener("mousemove",this.updateScrollPosition),window.addEventListener("mouseup",this.unbindScroll)},unbindScroll(){window.removeEventListener("mousemove",this.updateScrollPosition),window.removeEventListener("mouseup",this.unbindScroll)},updateScrollPosition({clientX:t}){const i=this.$refs.tabberEl.getBoundingClientRect().width,e=this.$refs.wrapperEl.getBoundingClientRect().width,s=this.$refs.wrapperEl.scrollWidth,r=t-this.lastClickPosition,n=this.lastScrollPosition+r,{left:o,width:a}=this.activeStyle;if(i>=s||n>=0)return this.scrollLeftOffset=0;if(s+n<=i)return this.scrollLeftOffset=parseInt(o)+parseInt(a)>=i?e-(parseInt(o)+parseInt(a)):i-s;this.scrollLeftOffset=n,this.previousPosition=n}},beforeDestroy(){removeEventListener("resize",this.getActiveStyle)}},c={};var b=d(f,h,v,!1,p,null,null,null);function p(t){for(let i in c)this[i]=c[i]}var m=function(){return b.exports}();export{m as default};