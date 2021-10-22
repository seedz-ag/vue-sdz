<template>
  <coerousel class="s-carousel" v-bind="$attrs">
    <s-icon slot="previous" class="previous" icon="chevron-left" size="15" />

    <coerousel-item v-for="(item, index) in items" :key="index">
      <slot :item="item" />
    </coerousel-item>

    <s-icon slot="next" class="next" icon="chevron-right" size="15" />
  </coerousel>
</template>

<script>
import 'vue-coerousel/dist/vue-coerousel.css'
import { Carousel, CarouselItem } from 'vue-coerousel'

import SIcon from '../SIcon/Index.vue'

export default {
  name: 'SCarousel',

  components: {
    SIcon,
    'coerousel': Carousel,
    'coerousel-item': CarouselItem
  },

  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.s-carousel {
  & > .controller {
    cursor: pointer;
    background: #FFFFFF;

    & > .previous {
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
    }

    & > .next {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
    }
  }

  & > .previous { left: -60px; }
  & > .next { right: -60px; }


  & > .wrapper { background: transparent; }
}
</style>
