<template>
  <transition name="s-overlay-fade">
    <div
      v-if="show"
      :class="classes"
      @click="$emit('close')"
    />
  </transition>
</template>

<script>
/**
 * Overlay component, used to give focus to a fixed element that appears
 * on the screen.
 */
export default {
  name: 'SOverlay',

  props: {
    /**
     * Whether to show or not the overlay
     */
    show: {
      type: Boolean,
      default: false
    },

    /**
     * Makes the overlay completely transparent.
     */
    transparent: {
      type: Boolean,
      default: false
    },

    /**
     * Makes the background slightly darker.
     */
    dark: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      return [ 's-overlay',
        {
          '-transparent': this.transparent
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.s-overlay {
  position: fixed;
  // z-index: $z-index-3;
  left: 0;
  top: 0;

  height: 100vh;
  width: 100vw;
  opacity: 1;

  &:not(.-transparent) { background-color: rgba(0, 0, 0, .5); }

  &.-dark {
    opacity: .9;
    // background: linear-gradient(135deg,
    //   map-get($text-color, base-90),
    //   map-get($text-color, base));
  }
}

.s-overlay-fade {
  @at-root {
    #{&}-enter-active,
    #{&}-leave-active {
      transition: opacity .3s ease !important;
    }

    #{&}-enter,
    #{&}-leave-to {
      opacity: 0 !important;
    }
  }
}
</style>
