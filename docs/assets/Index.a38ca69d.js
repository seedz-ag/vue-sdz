import{n as u,d as _,b as f,_ as v,S as y,a as b}from"./index.c61da6d1.js";import w from"./Index.cf27cf15.js";import{S as k}from"./Index.a5a9dbcb.js";var $=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{staticClass:"pagination"},[e._t("pagination",function(){return[a("div",{staticClass:"pages"},[a("s-input",{attrs:{mask:["##########"],value:e.page},on:{input:function(c){return e.$emit("change:page",c)}}}),e._v(" / "+e._s(e.totalPages)+" "),a("s-icon",{staticClass:"previous",attrs:{size:"23",icon:"charm:chevron-left",disabled:!e.canBack},nativeOn:{click:function(c){e.canBack&&e.$emit("previous")}}}),a("s-icon",{staticClass:"next",attrs:{size:"23",icon:"charm:chevron-right",disabled:!e.canGo},nativeOn:{click:function(c){e.canGo&&e.$emit("next")}}})],1)]})],2)},C=[];const P={name:"Pagination",components:{SIcon:_,SInput:f},props:{totalPages:Number,page:[Number,String],perPage:[Number,String],rows:{type:Array,required:!0}},computed:{canBack(){return+this.page!=1},canGo(){return+this.page<Math.ceil(this.totalPages)}}},h={};var x=u(P,$,C,!1,S,null,null,null);function S(t){for(let e in h)this[e]=h[e]}const A=function(){return x.exports}(),R=(t,e)=>typeof(t&&e)=="number",T=(t,e)=>(o,a)=>R(o[t],a[t])?e==="increase"?a[t]-o[t]:o[t]-a[t]:e==="increase"?o[t]>a[t]?1:o[t]<a[t]?-1:0:o[t]<a[t]?1:o[t]>a[t]?-1:0,L={created(){this.cols.forEach(t=>{typeof t!="object"&&console.error("the array of columns must contain only objects")}),this.rows.forEach(t=>{typeof t!="object"&&console.error("the array of rows must contain only objects")}),this.paginable&&!!this.maxHeight&&console.warn("pagination can not have a maxHeight property")},computed:{hasValid(){return!(this.cols||this.$scopedSlots.col)&&!(this.dataTable||this.$scopedSlots.row)?(console.error("you must set the array of columns and rows"),!1):this.cols||this.$scopedSlots.col?this.rows||this.$scopedSlots.row?!0:(console.error("you must set the array of rows"),!1):(console.error("you must set the array of columns"),!1)}}};var E=function(){var e=this,o=e.$createElement,a=e._self._c||o;return e.hasValid?a("div",{staticClass:"s-table"},[e._t("actions",function(){return[e.searchable?a("filters",e._g({attrs:{label:"Filtrar por: ",search:e.search}},e.$listeners)):e._e()]}),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",{staticClass:"thead"},[a("tr",{staticClass:"tr-col"},[e.selectable?a("th",{staticClass:"th-col-selectable"},[a("input",{attrs:{type:"checkbox"},on:{change:e.selectedAll}})]):e._e(),e._t("col",function(){return e._l(e.cols,function(s,c){var i=s.text,n=s.row,l=s.sortable,m=s.align,g=m===void 0?"left":m;return a("th",{key:c,staticClass:"th-col"},[e._t("icon-sortable",function(){return[a("div",{staticClass:"td-col-container",style:{"justify-content":e.setAlignment("col",g)}},[a("span",{staticClass:"label"},[e._v(e._s(i))]),l?a("s-icon",{attrs:{size:"16",icon:e.assortment[n]==="increase"?"charm:chevron-up":"charm:chevron-down"},nativeOn:{click:function(V){return e.sort(n)}}}):e._e()],1)]})],2)})},{cols:e.cols}),a("th",{staticClass:"actions"})],2)]),e.loading?a("tr",{staticClass:"loader"},[a("td",[e._t("loader",function(){return[a("div",{staticClass:"content"},[a("s-loader")],1)]})],2)]):e.rows.length?a("tbody",{staticClass:"tbody"},e._l(e.internalRows,function(s,c){return a("tr",{key:c,class:e.classTrRow(c),on:{mouseleave:function(n){e.hoverLine=null},mouseenter:function(n){e.hoverLine=c}}},[e.selectable?a("td",{staticClass:"td-row selectable"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkeds,expression:"checkeds"}],attrs:{type:"checkbox"},domProps:{value:s,checked:Array.isArray(e.checkeds)?e._i(e.checkeds,s)>-1:e.checkeds},on:{change:[function(i){var n=e.checkeds,l=i.target,m=!!l.checked;if(Array.isArray(n)){var g=s,r=e._i(n,g);l.checked?r<0&&(e.checkeds=n.concat([g])):r>-1&&(e.checkeds=n.slice(0,r).concat(n.slice(r+1)))}else e.checkeds=m},function(i){return e.$emit("selected",e.checkeds)}]}})]):e._e(),e._t("row",function(){return e._l(Object.keys(s),function(i,n){return a("td",e._b({key:n,staticClass:"td-row",style:{"text-align":e.setAlignment("row",s.align||"left")},attrs:{cols:e.cols}},"td",e.$attrs,!1),[i!=="align"?a("span",{staticClass:"row"},[e._v(e._s(s[i]))]):e._e()])})},{row:s}),a("td",{staticClass:"actions"},[a("s-icon",{directives:[{name:"show",rawName:"v-show",value:e.actions.length&&e.hoverLine===c,expression:"actions.length && hoverLine === index"}],ref:"action",refInFor:!0,attrs:{size:"25",icon:"akar-icons:more-horizontal"},nativeOn:{click:function(n){n.stopPropagation(),e.activeAction=c}}}),e.activeAction===c?a("s-popover",{staticClass:"popover",attrs:{align:"left",target:e.$refs.action[c]},on:{handler:function(n){e.activeAction=null}}},e._l(e.actions,function(i){return a("div",{key:i.label,staticClass:"action",on:{click:function(l){e.$emit("action",{action:i.label,row:s}),e.activeAction=null}}},[i.icon?a("s-icon",{attrs:{icon:i.icon}}):e._e(),a("span",{staticClass:"label"},[e._v(e._s(i.label))])],1)}),0):e._e()],1)],2)}),0):a("div",{staticClass:"empty"},[e._t("empty",function(){return[e._v(e._s(e.emptyLabel))]})],2)])]),e._t("tfoot",function(){return[e.paginable?a("tfoot",{class:["tfoot",{"--show-per-page":e.showPerPage}]},[e.showPerPage?a("div",{staticClass:"per-page"},[e._v(" Linhas por p\xE1gina: "+e._s(e.perPage)+" "),a("s-icon",{ref:"target",attrs:{icon:"charm:chevron-up"},nativeOn:{click:function(c){e.showPages=!0}}}),e.showPages?a("s-popover",{staticClass:"popover",attrs:{align:"center",position:"top","arrow-spacing":10,target:e.$refs.target},on:{handler:function(c){e.showPages=!1}}},e._l([100,75,50,25,10],function(s){return a("div",{key:s,on:{click:function(i){return e.changePerPage(s)}}},[e._v(" Mostrar "+e._s(s)+" ")])}),0):e._e()],1):e._e(),a("pagination",e._g(e._b({attrs:{rows:e.rows,page:e.page,"per-page":e.perPage}},"pagination",e.$attrs,!1),e.$listeners))],1):e._e()]})],2):a("div",{staticClass:"invalid"},[e._t("invalid",function(){return[e._v(" error: invalid table! ")]})],2)},j=[];const z={name:"STable",components:{SLoader:w,SPopover:k,Pagination:A,SIcon:()=>v(()=>import("./index.c61da6d1.js").then(t=>t.k),["assets/index.c61da6d1.js","assets/index.75c8ede6.css"]).then(t=>t.default)},mixins:[L],props:{cols:{type:Array,required:!0},rows:{type:Array,required:!0},actions:{type:Array,default:()=>[]},loading:Boolean,paginable:Boolean,selectable:Boolean,searchable:Boolean,showPerPage:{type:Boolean,default:!0},page:{type:[Number,String],validator:t=>!!t,default:1},perPage:{type:[Number,String],validator:t=>t>2,default:10},emptyLabel:{type:String,default:"EMPTY STATE"}},data(){return{internalRows:[],checkeds:[],allChecked:!1,assortment:{},hoverLine:null,showPages:!1,activeAction:null}},watch:{rows:{handler:"setRows",immediate:!0}},created(){this.internalRows=this.rows,this.assortment=this.cols.reduce((t,e)=>(e.sortable&&(t[e.row]="increase"),t),{})},methods:{setRows(){this.internalRows=this.rows},classTrRow(t){return["tr-row",{"--is-active-row":t===this.hoverLine}]},setAlignment(t,e){return e==="right"?t==="col"?"flex-end":"right":e==="left"?t==="col"?"flex-start":"left":"center"},changePerPage(t){this.showPages=!1,this.$emit("change:page",1),this.$emit("change:per-page",t)},selectedAll(){this.allChecked?(this.allChecked=!1,this.checkeds=[]):(this.allChecked=!0,this.checkeds=this.rows),this.$emit("selected",this.checkeds)},sort(t){this.assortment[t]=this.assortment[t]==="increase"?"decrease":"increase",this.internalRows=this.internalRows.sort(T(t,this.assortment[t]))}}},d={};var B=u(z,E,j,!1,I,null,null,null);function I(t){for(let e in d)this[e]=d[e]}const N=function(){return B.exports}(),O=[{text:"Nome",row:"name",sortable:!0},{text:"E-mail",row:"email"},{text:"Mal\xEDcia",row:"malice",sortable:!0},{text:"Sagacidade",row:"sagacity"}],M=[{name:"acoe1",email:"coe1@gmail.com",malice:2,sagacity:3},{name:"bcoe2",email:"coe2@gmail.com",malice:1,sagacity:3},{name:"ccoe3",email:"coe3@gmail.com",malice:3,sagacity:3},{name:"dcoe4",email:"coe4@gmail.com",malice:10,sagacity:3},{name:"ecoe5",email:"coe5@gmail.com",malice:10,sagacity:3},{name:"fcoe6",email:"coe6@gmail.com",malice:10,sagacity:3},{name:"gcoe7",email:"coe7@gmail.com",malice:4,sagacity:3},{name:"hcoe8",email:"coe8@gmail.com",malice:10,sagacity:3},{name:"icoe9",email:"coe9@gmail.com",malice:10,sagacity:3},{name:"jcoe10",email:"coe10@gmail.com",malice:10,sagacity:3},{name:"kcoe11",email:"coe11@gmail.com",malice:10,sagacity:3},{name:"coe12",email:"coe12@gmail.com",malice:10,sagacity:3},{name:"coe13",email:"coe13@gmail.com",malice:10,sagacity:3},{name:"coe14",email:"coe14@gmail.com",malice:10,sagacity:3},{name:"coe15",email:"coe15@gmail.com",malice:10,sagacity:3},{name:"coe16",email:"coe16@gmail.com",malice:10,sagacity:3},{name:"coe17",email:"coe17@gmail.com",malice:10,sagacity:3},{name:"coe18",email:"coe18@gmail.com",malice:10,sagacity:3},{name:"coe19",email:"coe19@gmail.com",malice:10,sagacity:3},{name:"coe20",email:"coe20@gmail.com",malice:10,sagacity:3},{name:"coe21",email:"coe21@gmail.com",malice:10,sagacity:3},{name:"coe22",email:"coe22@gmail.com",malice:10,sagacity:3},{name:"coe22",email:"coe22@gmail.com",malice:20,sagacity:3},{name:"coe23",email:"coe23@gmail.com",malice:20,sagacity:3},{name:"coe24",email:"coe24@gmail.com",malice:20,sagacity:3},{name:"coe25",email:"coe25@gmail.com",malice:20,sagacity:3},{name:"coe26",email:"coe26@gmail.com",malice:20,sagacity:3},{name:"coe27",email:"coe27@gmail.com",malice:20,sagacity:3},{name:"coe28",email:"coe28@gmail.com",malice:20,sagacity:3},{name:"coe29",email:"coe29@gmail.com",malice:10,sagacity:3},{name:"coe30",email:"coe20@gmail.com",malice:10,sagacity:3},{name:"coe31",email:"coe20@gmail.com",malice:10,sagacity:3},{name:"coe32",email:"coe20@gmail.com",malice:10,sagacity:3},{name:"coe33",email:"coe20@gmail.com",malice:10,sagacity:3},{name:"coe34",email:"coe20@gmail.com",malice:10,sagacity:3},{name:"coe34",email:"coe20@gmail.com",malice:10,sagacity:3},{name:"coe35",email:"coe20@gmail.com",malice:10,sagacity:3},{name:"coe36",email:"coe20@gmail.com",malice:10,sagacity:3},{name:"coe37",email:"coe20@gmail.com",malice:10,sagacity:3},{name:"coe38",email:"coe20@gmail.com",malice:10,sagacity:3}];var F=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("section",{staticClass:"s-table-example"},[a("s-title",{attrs:{size:"title-1"}},[e._v("Table (simple)")]),a("s-box",[a("s-table",{attrs:{paginable:"",selectable:"",cols:e.cols,rows:e.tableRows,page:e.page,"per-page":e.perPage,sortable:["name","sagacity"],actions:[{label:"Editar"},{label:"Remover"}]},on:{next:function(c){e.page++},previous:function(c){e.page--},"change:page":function(c){return e.page=c},sort:e.sort,action:e.action,"change:per-page":function(c){return e.perPage=c},selected:function(c){return e.selecteds=c}}})],1),a("s-title",{attrs:{size:"title-1"}},[e._v("Table (scoped)")]),a("s-box",[a("s-table",{attrs:{cols:e.cols,rows:e.tableRows},scopedSlots:e._u([{key:"row",fn:function(c){var i=c.row;return[a("td",{staticClass:"td-row"},[a("span",{staticClass:"row"},[e._v(e._s(i.name))])]),a("td",{staticClass:"td-row"},[a("span",{staticClass:"row"},[e._v(e._s(i.email))])]),a("td",{staticClass:"td-row"},[a("span",{staticClass:"row"},[e._v(e._s(i.malice))])]),a("td",{staticClass:"td-row"},[a("span",{staticClass:"row"},[e._v(e._s(i.sagacity))])])]}}])})],1)],1)},G=[];const q={name:"STableExample",components:{STable:N,SBox:y,STitle:b},data(){return{cols:O,rows:M,cols2:[],rows2:[],totalPages:null,page:1,perPage:10,search:"",isLoading:!1,selecteds:[]}},watch:{page:{immediate:!0,handler:"getDataTable"}},computed:{tableRows(){return this.search?this.rows:this.rows},tableRows2(){return this.search?this.rows:this.rows2}},methods:{async getDataTable(t=1){this.isLoading=!0;const e={method:"GET",headers:new Headers},a=await(await fetch(`https://mocki.io/v1/a2f5d112-cb71-4a3b-9941-089fe0e4b8f3?page=${t}`,e)).json(),s=Object.keys(a.data[0]),c=a.data;this.cols2=s.map(i=>({text:i,row:i,align:"left"})),this.rows2=c.map(i=>({...i,align:"left"})),this.totalPages=a.recordsTotal,this.isLoading=!1},synchronizeSearch(t){this.search=t},getRow(t,e){const o=this.cols.map(({row:a})=>a);return t[o[e]]||""},onSort(t){console.log(t),this.rows=t},action({action:t,row:e}){console.log(t,e)},sort({row:t,type:e}){console.log(t,e)}}},p={};var D=u(q,F,G,!1,H,null,null,null);function H(t){for(let e in p)this[e]=p[e]}const Q=function(){return D.exports}();export{Q as default};