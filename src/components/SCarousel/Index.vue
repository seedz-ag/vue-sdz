<template>
  <coerousel class="s-carousel" v-bind="$attrs">
    <s-icon slot="previous" class="previous" icon="sdz-chevron-left" size="15" />

    <coerousel-item v-for="(item, index) in items" :key="index">
      <slot :item="item" />
    </coerousel-item>

    <s-icon slot="next" class="next" icon="sdz-chevron-right" size="15" />
  </coerousel>
</template>

<script>
import 'vue-coerousel/dist/vue-coerousel.css'
import { Carousel, CarouselItem } from 'vue-coerousel'
// import { Carousel, CarouselItem } from 'vue-coerousel/dist/vue-coerousel.js'

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
@import "./src/styles/_index.scss";

.s-carousel {
  & > .controller {
    cursor: pointer;
    border-color: color(primary, base);
    background-color: color(neutral, base);

    & > .icon { color: color(primary, base); }

    & > .previous {
      position: absolute;
      top: 49%;
      left: 13px;
      transform: translateY(-50%);
      font-size: 20px !important;
    }

    & > .next {
      position: absolute;
      top: 49%;
      right: 13px;
      transform: translateY(-50%);
      font-size: 20px !important;
    }
  }

  & > .pagination > .-active { background: color(primary, base); }

  & > .previous { left: -60px; }
  & > .next { right: -60px; }

  &.--is-first-page > .previous { display: none; }
  &.--is-last-page > .next { display: none; }
}
</style>
