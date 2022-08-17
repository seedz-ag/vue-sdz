<template>
  <div class="s-carousel-example">
    <s-title size="title-1">Carousel</s-title>
    <s-box>
      <s-carousel
        has-shadow
        controllers
        :items="items"
        :per-page="2"
        :is-loopable="false"
        :breakpoints="breakpoints"
      >
        <div slot-scope="{ item }" class="ball" :style="{ backgroundColor: item.color }">
          <!-- {{ item }} -->
        </div>
      </s-carousel>
    </s-box>

    <pre-code :code="code" />
  </div>
</template>

<script>
import SCarousel from '../../../src/components/SCarousel/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  name: 'SCarouselExample',

  components: { SCarousel, SBox, STitle, PreCode },

  data () {
    return {
      code: `<s-carousel
        controllers
        :items="items"
        :per-page="2"
        :is-loopable="false"
        :breakpoints="breakpoints"
      >
        <div slot-scope="{ item }" class="ball" :style="{ backgroundColor: item.color }">
          <!-- {{ item }} -->
        </div>
      </s-carousel>`,
      items: [
        { color: 'blue' },
        { color: 'yellow' },
        { color: 'red' },
        { color: 'black' },
        { color: 'pink' },
        { color: 'turquoise' },
        { color: 'magenta' },
        { color: 'white' },
        { color: 'orange' },
        { color: 'green' },
        { color: 'purple' },
        { color: 'cyan' },
        { color: 'lime' },
        { color: 'lightblue' }
      ],
      breakpoints: {
        1024: { perPage: 4 },
        768: { perPage: 3 },
        640: { perPage: 2 },
        320: { perPage: 1 }
      }
    }
  }
}
</script>

<style lang="scss">
.s-carousel-example {
  & > .s-box{
    & > .s-carousel {
      width: 90%;
      margin-left: 40px;
      & > .wrapper {
        & > .inner {
          // -webkit-transition: all .4s cubic-bezier(0.47, 0, 0.745, 0.715);
          // transition:         all .4s cubic-bezier(0.47, 0, 0.745, 0.715);
          & > .carousel-item {
            & > .ball {
              width: 200px;
              height: 200px;
              margin: 0 auto;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
