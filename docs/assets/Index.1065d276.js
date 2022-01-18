import{b as i,S as m}from"./Index.3c574d56.js";import{S as d}from"./box.25b4751f.js";import{n,S as c}from"./index.259ac129.js";import p from"./Index.8d457bda.js";import"./vendor.edd272bb.js";var r=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",{staticClass:"s-select-example"},[a("s-title",{staticClass:"h1",attrs:{title:"Select"}}),a("p",{staticClass:"subtitle"},[e._v(" Input Select \xE9 um dropdown onde a pessoa usu\xE1ria pode selecionar uma op\xE7\xE3o em uma lista de op\xE7\xF5es. Hoje trazemos a visualiza\xE7\xE3o dos itens de forma nativa por uma quest\xE3o de acessibilidade. ")]),a("s-title",{staticClass:"h2",attrs:{title:"Quando usar"}}),a("p",{staticClass:"subtitle"},[e._v(" Utilizar quando voc\xEA tem ao menos 3 op\xE7\xF5es de escolha. ")]),a("p",{staticClass:"subtitle"},[e._v(" Considerar Input Select sem label em casos espec\xEDficos, mas com a utiliza\xE7\xE3o obrigat\xF3rio do placehold como texto orientador. ")]),a("source-code",{attrs:{file:"SSelectExample",comp:"SSelect"}}),a("s-title",{staticClass:"h2",attrs:{title:"Default"}}),a("s-box",[a("s-select",{attrs:{label:"Simple",display:"slug","display-by":"name",placeholder:"Selecione uma op\xE7\xE3o",items:e.items},model:{value:e.data1,callback:function(t){e.data1=t},expression:"data1"}}),a("s-select",{attrs:{label:"With slots",display:"slug","display-by":"name",placeholder:"Selecione uma op\xE7\xE3o","clear-on-select":"",items:e.items},scopedSlots:e._u([{key:"option",fn:function(t){var s=t.option;return a("div",{},[e._v(" "+e._s(s.slug)+" - "+e._s(s.name)+" ")])}}]),model:{value:e.data2,callback:function(t){e.data2=t},expression:"data2"}})],1),a("pre-code",{attrs:{code:e.code1}}),a("s-title",{staticClass:"h2",attrs:{title:"Multiples"}}),a("s-box",[a("s-select",{attrs:{label:"Multiple",display:"slug","display-by":"name",placeholder:"Selecione uma op\xE7\xE3o",multiple:"","hide-selected":"",items:e.items},model:{value:e.data3,callback:function(t){e.data3=t},expression:"data3"}}),a("s-select",{attrs:{label:"Multiple with validation ( >=3 )",display:"slug","display-by":"name",placeholder:"Selecione uma op\xE7\xE3o",validation:e.data4.length>=3?"M\xE1ximo de 3 op\xE7\xF5es selecionadas":"",multiple:"",items:e.items},model:{value:e.data4,callback:function(t){e.data4=t},expression:"data4"}})],1),a("pre-code",{attrs:{code:e.code2}}),a("s-title",{staticClass:"h2",attrs:{title:"Disabled"}}),a("s-box",[a("s-select",{attrs:{label:"Disabled",display:"slug","display-by":"name",placeholder:"Selecione uma op\xE7\xE3o",disabled:"",items:e.items}})],1),a("pre-code",{attrs:{code:e.code3}})],1)},u=[];const b={components:{SSelect:i,SBox:d,STitle:c,SourceCode:m,PreCode:p},data(){return{data1:"",data2:"",data3:[{slug:"2",name:"coe2"}],data4:[],items:[{slug:"item 1",name:"name item 1"},{slug:"item 2",name:"name item 2"},{slug:"itemmmmmmmmmmmmmmmmmm 3",name:"name itemmmmmmmmmmmmmmmmmm 3"},{slug:"4",name:"name 4"},{slug:"5",name:"name 5"},{slug:"666666666666666666666666666666",name:"name 666666666666666666666666666666"}],code1:`<s-select
        label="Simple"
        display="slug"
        display-by="name"
        placeholder="Selecione uma op\xE7\xE3o"
        :items="items"
        v-model="data1"
      />

      <s-select
        label="With slots"
        display="slug"
        display-by="name"
        placeholder="Selecione uma op\xE7\xE3o"
        clear-on-select
        :items="items"
        v-model="data2"
      >
        <div slot="option" slot-scope="{ option }">
          {{ option['slug'] }} - {{ option['name'] }}
        </div>
      </s-select>`,code2:`<s-select
        label="Multiple"
        display="slug"
        display-by="name"
        placeholder="Selecione uma op\xE7\xE3o"
        multiple
        hide-selected
        :items="items"
        v-model="data3"
      />

      <s-select
        label="Multiple with validation ( >=3 )"
        display="slug"
        display-by="name"
        placeholder="Selecione uma op\xE7\xE3o"
        :validation="data4.length >= 3 ? 'M\xE1ximo de 3 op\xE7\xF5es selecionadas' : ''"
        multiple
        :items="items"
        v-model="data4"
      />`,code3:`<s-select
        label="Disabled"
        display="slug"
        display-by="name"
        placeholder="Selecione uma op\xE7\xE3o"
        disabled
        :items="items"
      />`}}},o={};var v=n(b,r,u,!1,y,null,null,null);function y(e){for(let l in o)this[l]=o[l]}var f=function(){return v.exports}();export{f as default};
