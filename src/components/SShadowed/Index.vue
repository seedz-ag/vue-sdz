<template>
  <div :class="classes" :style="containerHeight">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Shadowed',

  props: {
    target: String,
    hasUpperShadow: { type: Boolean },
    hasBottomShadow: { type: Boolean },
    hasLeftShadow: { type: Boolean },
    hasRightShadow: {  type: Boolean  }
  },

  data () {
    return {
      element: null,
      observer: null,
      upperShadow: false,
      bottomShadow: false,
      leftShadow: false,
      rightShadow: false
    }
  },

  watch: {
    element: { immediate: true, handler: 'init' }
  },

  computed: {
    classes () {
      return ['s-shadowed', {
        '--is-upper-shadow': this.hasUpperShadow && this.upperShadow,
        '--is-bottom-shadow': this.hasBottomShadow && this.bottomShadow,
        '--is-left-shadow': this.hasLeftShadow && this.leftShadow,
        '--is-right-shadow': this.hasRightShadow && this.rightShadow
      }]
    },

    containerHeight () {
      const scrollBarHeight = 17
      const clientHeight = this.element?.clientHeight || 0

      return { '--height': clientHeight + scrollBarHeight + 'px' }
    }
  },

  methods: {
    init () {
      this.setElement()
      if (!this.element) return

      this.setShadow()
      this.setObservers()
    },

    setElement () {
      this.element = this.target
        ? document.querySelector(this.target)
        : this.$slots?.default?.[0]?.elm
    },

    setShadow () {
      if (!this.element) return

      const {
        scrollTop, scrollHeight, clientHeight,
        scrollLeft, scrollWidth, clientWidth
      } = this.element

      const maxScrollLeft = scrollWidth - clientWidth

      this.leftShadow = this.hasLeftShadow && scrollLeft !== 0
      this.rightShadow = this.hasRightShadow && scrollLeft !== maxScrollLeft

      this.upperShadow = this.hasUpperShadow && !!scrollTop
      this.bottomShadow = this.hasBottomShadow && scrollHeight > (clientHeight + scrollTop)
    },

    setObservers () {
      this.observer = new MutationObserver(this.setShadow)
      this.observer.observe(this.element, { childList: true, subtree: true })

      this.element.addEventListener('scroll', this.setShadow)
    }
  },

  beforeDestroy () {
    this.observer.disconnect()
    this.element.removeEventListener('scroll', this.setShadow)
  }
}
</script>

<style lang="scss" scoped>
@import "./src/styles/_index.scss";

$shadow-color1: rgba(243, 244, 246, 0);
$shadow-color2: #F3F4F6;

%shadow {
  opacity: 0;
  content: "";
  position: absolute;
  z-index: $z-index-1;
  pointer-events: none;
  transition: opacity .5s ease-in-out;
}

.s-shadowed {
  position: relative;

  &::after { transform: scaleY(-1); }
  &::before, &::after { @extend %shadow; }

  &.--is-bottom-shadow::after { bottom: 0; }

  &.--is-upper-shadow::before,
  &.--is-bottom-shadow::after {
    background: linear-gradient(0deg, $shadow-color1 0%, $shadow-color2 100%);
  }

  &.--is-left-shadow::before {
    background: linear-gradient(to left, $shadow-color1 0%, $shadow-color2 100%);
  }

  &.--is-right-shadow::after {
    top: 0;
    right: 0;
    background: linear-gradient(to right, $shadow-color1 0%, $shadow-color2 100%);
  }

  &.--is-left-shadow::before,
  &.--is-right-shadow::after,
  &.--is-upper-shadow::before,
  &.--is-bottom-shadow::after { opacity: 1; }

  &.--is-left-shadow::before,
  &.--is-right-shadow::after {
    width: 100px;
    height: var(--height);
  }

  &.--is-upper-shadow::before,
  &.--is-bottom-shadow::after {
    width: 100%;
    height: 50px;
  }
}
</style>
