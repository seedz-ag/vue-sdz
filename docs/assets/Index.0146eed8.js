import{n as e,S as t}from"./index.3689a1fc.js";import"./vendor.86f0ea26.js";const i={};var n=e({components:{SSidebar:t},data:()=>({items:[{name:"s-button",icon:"xxx",redirect:"/components/sbutton"},{name:"s-card",redirect:"/components/scard",disabled:!0},{name:"Teste",icon:"yyy",child:[{name:"Filho teste",redirect:"/filho-teste"},{name:"Filho teste-2",redirect:"/filho-teste-2"}]},{name:"Coe",icon:"zzz",child:[{name:"Filho coe",redirect:"/filho-coe",disabled:!0},{name:"Filho coe-2",redirect:"/filho-coe-2"},{name:"Filho coe-3",child:[{name:"Mane",redirect:"/mane-coe"},{name:"Mane-3",redirect:"/mane-coe-3"}]}]}]}),methods:{onRedirect(e){e&&e!==this.$route.path&&this.$router.push(e)}}},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"s-sidebar-example"},[i("s-sidebar",{attrs:{items:e.items},on:{redirect:e.onRedirect}})],1)}),[],!1,o,null,null,null);function o(e){for(let t in i)this[t]=i[t]}var r=function(){return n.exports}();export{r as default};
