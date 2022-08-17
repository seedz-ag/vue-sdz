import{S as n}from"./Index.8c61c4c0.js";import{n as c,S as i,a as u,P as p}from"./index.e50009ab.js";var _=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"s-carousel-example"},[o("s-title",{attrs:{size:"title-1"}},[e._v("Carousel")]),o("s-box",[o("s-carousel",{attrs:{"has-shadow":"",controllers:"",items:e.items,"per-page":2,"is-loopable":!1,breakpoints:e.breakpoints},scopedSlots:e._u([{key:"default",fn:function(s){var a=s.item;return o("div",{staticClass:"ball",style:{backgroundColor:a.color}})}}])})],1),o("pre-code",{attrs:{code:e.code}})],1)},m=[];const d={name:"SCarouselExample",components:{SCarousel:n,SBox:i,STitle:u,PreCode:p},data(){return{code:`<s-carousel
        controllers
        :items="items"
        :per-page="2"
        :is-loopable="false"
        :breakpoints="breakpoints"
      >
        <div slot-scope="{ item }" class="ball" :style="{ backgroundColor: item.color }">
          <!-- {{ item }} -->
        </div>
      </s-carousel>`,items:[{color:"blue"},{color:"yellow"},{color:"red"},{color:"black"},{color:"pink"},{color:"turquoise"},{color:"magenta"},{color:"white"},{color:"orange"},{color:"green"},{color:"purple"},{color:"cyan"},{color:"lime"},{color:"lightblue"}],breakpoints:{1024:{perPage:4},768:{perPage:3},640:{perPage:2},320:{perPage:1}}}}},r={};var v=c(d,_,m,!1,b,null,null,null);function b(l){for(let e in r)this[e]=r[e]}const x=function(){return v.exports}();export{x as default};
