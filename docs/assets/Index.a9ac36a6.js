import a from"./Index.97517157.js";import{S as n}from"./box.25b4751f.js";import{n as c,S as i}from"./index.259ac129.js";import p from"./Index.8d457bda.js";import"./vendor.edd272bb.js";var u=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"s-carousel-example"},[o("s-title",{staticClass:"h1",attrs:{title:"Carousel"}}),o("s-box",[o("s-carousel",{attrs:{controllers:"",items:e.items,"per-page":2,"is-loopable":!1,breakpoints:e.breakpoints},scopedSlots:e._u([{key:"default",fn:function(l){var s=l.item;return o("div",{staticClass:"ball",style:{backgroundColor:s.color}})}}])})],1),o("pre-code",{attrs:{code:e.code}})],1)},d=[];const m={name:"SCarouselExample",components:{SCarousel:a,SBox:n,STitle:i,PreCode:p},data(){return{code:`<s-carousel
        controllers
        :items="items"
        :per-page="2"
        :is-loopable="false"
        :breakpoints="breakpoints"
      >
        <div slot-scope="{ item }" class="ball" :style="{ backgroundColor: item.color }">
          <!-- {{ item }} -->
        </div>
      </s-carousel>`,items:[{color:"blue"},{color:"yellow"},{color:"red"},{color:"black"},{color:"pink"},{color:"turquoise"},{color:"magenta"},{color:"white"},{color:"orange"},{color:"green"},{color:"purple"},{color:"cyan"},{color:"lime"},{color:"lightblue"}],breakpoints:{1024:{perPage:4},768:{perPage:3},640:{perPage:2},320:{perPage:1}}}}},t={};var _=c(m,u,d,!1,b,null,null,null);function b(e){for(let r in t)this[r]=t[r]}var C=function(){return _.exports}();export{C as default};
