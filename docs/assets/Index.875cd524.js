import{n as t,a as e,S as i}from"./index.63304bd7.js";import{S as s}from"./box.1fbabcb4.js";import"./vendor.ebec5519.js";const a={name:"STabber",components:{SIcon:e},props:{tabs:{type:Array,required:!0},activeTab:String,resizable:Boolean,iconOnly:Boolean,noSwipe:Boolean,fullWidth:Boolean,alternative:Boolean,borderColor:{type:[String,Array],validator:t=>t.length}},data:()=>({activeStyle:{},scrollLeftOffset:0,previousPosition:0,lastClickPosition:0,lastScrollPosition:0}),watch:{activeTab:{immediate:!0,handler:"getActiveStyle"}},mounted(){addEventListener("resize",this.getActiveStyle)},computed:{borderStyle(){return{background:Array.isArray(this.borderColor)?"linear-gradient(90deg, "+this.borderColor.join(", ")+")":this.borderColor}}},methods:{getClasses(t){return["tab",{"-active":this.getActiveTab(t),"-icon-only":t.iconOnly||this.iconOnly,"-alternative":this.alternative,"-disabled":t.disabled,"-has-icon":t.icon}]},getActiveTab(t){return t.subTabs?t.subTabs.find((t=>t===this.activeTab)):t.value===this.activeTab},getActiveStyle(){this.$nextTick((()=>{const t=this.tabs.some((t=>t.subTabs)),e=(this.tabs.find((t=>t.subTabs&&t.subTabs.includes(this.activeTab)))||{}).value,i=t?e:this.activeTab,s=this.$refs.wrapperEl.getBoundingClientRect().left||0,a=this.$refs[i]&&this.$refs[i][0],n=a?a.getBoundingClientRect().left-s+"px":0,r=a?a.offsetWidth+"px":0,l={left:n,width:r};this.activeStyle=l,this.scrollLeftOffset=this.centralizeActiveTab(parseInt(n),parseInt(r))}))},centralizeActiveTab(t,e){const i=this.$refs.tabberEl.getBoundingClientRect().width,s=this.$refs.wrapperEl.getBoundingClientRect().width,a=this.$refs.wrapperEl.scrollWidth,n=i/2-t-e/2;return i>=a||n>0?0:a+n<=i?t+e>=i?s-(t+e):i-a:n},changeTab(t){t.disabled||this.$emit("change-tab",t.value)},bindScroll({clientX:t}){this.lastClickPosition=t,this.lastScrollPosition=this.scrollLeftOffset,window.addEventListener("mousemove",this.updateScrollPosition),window.addEventListener("mouseup",this.unbindScroll)},unbindScroll(){window.removeEventListener("mousemove",this.updateScrollPosition),window.removeEventListener("mouseup",this.unbindScroll)},updateScrollPosition({clientX:t}){const e=this.$refs.tabberEl.getBoundingClientRect().width,i=this.$refs.wrapperEl.getBoundingClientRect().width,s=this.$refs.wrapperEl.scrollWidth,a=t-this.lastClickPosition,n=this.lastScrollPosition+a,{left:r,width:l}=this.activeStyle;return e>=s||n>=0?this.scrollLeftOffset=0:s+n<=e?this.scrollLeftOffset=parseInt(r)+parseInt(l)>=e?i-(parseInt(r)+parseInt(l)):e-s:(this.scrollLeftOffset=n,void(this.previousPosition=n))}},beforeDestroy(){removeEventListener("resize",this.getActiveStyle)}},n={};var r=t(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"tabberEl",class:["s-tabber",{"-full-width":t.fullWidth,"-alternative":t.alternative}],on:{mousedown:function(e){!t.noSwipe&&t.bindScroll(e)}}},[i("div",{ref:"wrapperEl",class:["wrapper",{"-resizable":t.resizable}],style:{transform:"translateX("+t.scrollLeftOffset+"px)"}},[t._l(t.tabs,(function(e){return i("div",{key:e.value,ref:e.value,refInFor:!0,class:t.getClasses(e),on:{click:function(i){return t.changeTab(e)}}},[i("span",{staticClass:"content"},[e.icon?i("s-icon",{staticClass:"icon",attrs:{icon:e.icon,size:"20"}}):t._e(),i("span",{staticClass:"text"},[t._v(t._s(e.name))])],1)])})),i("div",{class:["border",{"-alternative":t.alternative}],style:[t.activeStyle,t.borderStyle]})],2)])}),[],!1,l,null,null,null);function l(t){for(let e in n)this[e]=n[e]}const o={};var c=t({components:{STabber:function(){return r.exports}(),SBox:s,STitle:i},data:()=>({activeTab:"seumadruga",tabs:[{name:"Chaves",value:"chaves",icon:"sdz-share"},{name:"Seu Madruga",value:"seumadruga",icon:"sdz-divide"},{name:"Nhonho",value:"nhonho",icon:"sdz-key",disabled:!0},{name:"Quico",value:"quico",icon:"sdz-key"}]})},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"s-tabber-example"},[i("s-title",{staticClass:"h1",attrs:{title:"Tabber"}}),i("s-box",[i("s-tabber",{attrs:{tabs:t.tabs,"active-tab":t.activeTab},on:{"change-tab":function(e){return t.activeTab=e}}}),i("s-tabber",{attrs:{alternative:"",tabs:t.tabs,"active-tab":t.activeTab},on:{"change-tab":function(e){return t.activeTab=e}}})],1)],1)}),[],!1,b,null,null,null);function b(t){for(let e in o)this[e]=o[e]}var d=function(){return c.exports}();export{d as default};
