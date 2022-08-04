import a from"./Index.102eba12.js";import{n,S as c,a as i,P as u}from"./index.c517d76c.js";var p=function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("div",{staticClass:"s-carousel-example"},[o("s-title",{attrs:{size:"title-1"}},[e._v("Carousel")]),o("s-box",[o("s-carousel",{attrs:{controllers:"",items:e.items,"per-page":2,"is-loopable":!1,breakpoints:e.breakpoints},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.item;return o("div",{staticClass:"ball",style:{backgroundColor:s.color}})}}])})],1),o("pre-code",{attrs:{code:e.code}})],1)},_=[];const m={name:"SCarouselExample",components:{SCarousel:a,SBox:c,STitle:i,PreCode:u},data(){return{code:`<s-carousel
        controllers
        :items="items"
        :per-page="2"
        :is-loopable="false"
        :breakpoints="breakpoints"
      >
        <div slot-scope="{ item }" class="ball" :style="{ backgroundColor: item.color }">
          <!-- {{ item }} -->
        </div>
      </s-carousel>`,items:[{color:"blue"},{color:"yellow"},{color:"red"},{color:"black"},{color:"pink"},{color:"turquoise"},{color:"magenta"},{color:"white"},{color:"orange"},{color:"green"},{color:"purple"},{color:"cyan"},{color:"lime"},{color:"lightblue"}],breakpoints:{1024:{perPage:4},768:{perPage:3},640:{perPage:2},320:{perPage:1}}}}},l={};var d=n(m,p,_,!1,v,null,null,null);function v(e){for(let r in l)this[r]=l[r]}var g=function(){return d.exports}();export{g as default};
