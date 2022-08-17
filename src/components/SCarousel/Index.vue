<template>
  <coerousel class="s-carousel" v-bind="$attrs">
    <s-icon slot="previous" class="previous" icon="mdi:chevron-left" size="20" />

    <coerousel-item v-for="(item, index) in items" :key="index">
      <slot :item="item" />
    </coerousel-item>

    <s-icon slot="next" class="next" icon="mdi:chevron-right" size="20" />
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
@import "./src/styles/_index.scss";

.s-carousel {
  & > .wrapper {
    &::before {
      background: linear-gradient(to left,rgba(243,244,246,0) 0,#FFFFFF 70%) !important;
    }

    &::after {
      background: linear-gradient(to right,rgba(243,244,246,0) 0,#FFFFFF 70%) !important;
    }
  }

  & > .controller {
    cursor: pointer;
    border-color: color(primary, base);
    background-color: color(neutral, base);

    // & > .s-icon { color: color(primary, base); }

    & > .previous {
      position: absolute;
      top: 49%;
      left: 13px;
      transform: translateY(-50%);
    }

    & > .next {
      position: absolute;
      top: 49%;
      right: 13px;
      transform: translateY(-50%);
    }
  }

  & > .pagination > .-active { background: color(primary, base); }
}
</style>
