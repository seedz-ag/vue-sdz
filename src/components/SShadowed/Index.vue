<template>
  <div ref="shadowed" :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Shadowed',

  props: {
    hasUpperShadow: {
      type: Boolean,
      default: true
    },
    hasBottomShadow: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      observer: null,
      upperShadow: false,
      bottomShadow: false
    }
  },

  mounted () {
    this.setShadow()
    this.initObservers()
  },

  computed: {
    classes () {
      return ['shadowed', {
        '-upper-shadow': this.hasUpperShadow && this.upperShadow,
        '-bottom-shadow': this.hasBottomShadow && this.bottomShadow
      }]
    }
  },

  methods: {
    setShadow () {
      const { scrollTop, scrollHeight, clientHeight } = this.$refs.shadowed

      if (this.hasUpperShadow) this.upperShadow = !!scrollTop

      if (this.hasBottomShadow) {
        this.bottomShadow = scrollHeight > (clientHeight + scrollTop)
      }
    },

    initObservers () {
      this.observer = new MutationObserver(this.setShadow)
      this.observer.observe(this.$refs.shadowed, { childList: true })

      // window.addEventListener('resize', this.setShadow)
      this.$refs.shadowed.addEventListener('scroll', this.setShadow)
    }
  },

  beforeDestroy () {
    this.observer.disconnect()
    // window.removeEventListener('resize', this.setShadow)
    this.$refs.shadowed.removeEventListener('scroll', this.setShadow)
  }
}
</script>

<style lang="scss" scoped>
$shadow-size: 100px;
$shadow-color1: rgba(243, 244, 246, 0);
$shadow-color2: #F3F4F6;
$background: linear-gradient(0deg, $shadow-color1 0%, $shadow-color2 100%);

%shadow {
  opacity: 0;
  left: 0;
  z-index: 1;
  content: "";
  display: block;
  position: fixed;
  height: $shadow-size;
  width: calc(100% - 7px);
  pointer-events: none;
  background: $background;
  transition: opacity 0.3s;
}

.shadowed {
  position: relative;
  &::before, &::after { @extend %shadow; }

  &.-upper-shadow::before,
  &.-bottom-shadow::after { opacity: 1; }
  &.-bottom-shadow::after { bottom: 0; transform: scaleY(-1); }
}
</style>
