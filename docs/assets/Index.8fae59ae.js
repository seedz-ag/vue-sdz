import{n as i,j as s}from"./index.87a58ed9.js";var c=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"s-sidebar-example"},[n("s-sidebar",{attrs:{items:e.items},on:{redirect:e.onRedirect}})],1)},a=[];const d={components:{SSidebar:s},data(){return{items:[{name:"s-button",icon:"xxx",redirect:"/components/sbutton"},{name:"s-card",redirect:"/components/scard",disabled:!0},{name:"Teste",icon:"yyy",child:[{name:"Filho teste",redirect:"/filho-teste"},{name:"Filho teste-2",redirect:"/filho-teste-2"}]},{name:"Coe",icon:"zzz",child:[{name:"Filho coe",redirect:"/filho-coe",disabled:!0},{name:"Filho coe-2",redirect:"/filho-coe-2"},{name:"Filho coe-3",child:[{name:"Mane",redirect:"/mane-coe"},{name:"Mane-3",redirect:"/mane-coe-3"}]}]}]}},methods:{onRedirect(t){!t||t===this.$route.path||this.$router.push(t)}}},r={};var l=i(d,c,a,!1,m,null,null,null);function m(t){for(let e in r)this[e]=r[e]}const _=function(){return l.exports}();export{_ as default};