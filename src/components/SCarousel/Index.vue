<template>
  <coerousel class="s-carousel" v-bind="$attrs">
    <coerousel-item v-for="(item, index) in items" :key="index">
      <slot :item="item" />
    </coerousel-item>
  </coerousel>
</template>

<script>
import 'vue-coerousel/dist/vue-coerousel.css'
import { Carousel, Slide } from 'vue-coerousel'

export default {
  name: 'SCarousel',

  components: {
    'coerousel': Carousel,
    'coerousel-item': Slide
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
  & > .wrapper {
    background: transparent;
  }
}
</style>
