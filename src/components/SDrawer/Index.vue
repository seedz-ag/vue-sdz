<template>
  <div class="s-drawer">
    <div :class="classes" :style="{ '--width': width + 'px' }">
      <slot />
    </div>

    <s-overlay v-if="isOpened && !noOverlay" show v-on="$listeners" />
  </div>
</template>

<script>
import SOverlay from '../SOverlay/Index.vue'

export default {
  name: 'SDrawer',

  components: { SOverlay },

  props: {
    noOverlay: Boolean,
    direction: {
      type: String,
      default: 'left',
      validator: direction => ['top', 'bottom', 'left', 'right'].includes(direction)
    },
    isOpened: { type: Boolean, required: true },
    width: { type: [Number, String], default: 240 }
  },

  computed: {
    classes () {
      return ['wrapper', {
        '--opened': this.isOpened,
        '--left': this.direction === 'left',
        '--right': this.direction === 'right'
      }]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-drawer {


  & > .wrapper {
    z-index: $z-index-1;
    background: color(neutral, base);

    position: fixed;
    top: 0;

    opacity: 0;
    height: 100%;
    width: var(--width);
    transition: .3s ease-in-out;

    &.--left {
      left: 0;
      transform: translateX(-100%);
    }

    &.--right {
      right: 0;
      transform: translateX(100%);
    }

    &.--opened {
      opacity: 1;
      transform: translateX(0);
    }
  }

}
</style>
