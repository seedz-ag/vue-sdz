<template>
  <div class="s-collapsible">
    <div v-if="!noHeader" class="header" @click.stop="$emit('toggle', !isOpened)">
      <slot name="header">X</slot>
    </div>

    <div :ref="randomRef" class="wrapper" :style="{
      opacity: +isOpened,
      height: isOpened ? (height || contentHeight) + 'px' : 0
    }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SCollapsible',

  props: {
    height: Number,
    noHeader: Boolean,
    outsideClosable: Boolean,
    isOpened: { type: Boolean, required: true }
  },

  data: () => ({ observer: null, contentHeight: 0 }),

  mounted () {
    const target = this.$refs?.[this.randomRef]

    const config = { childList: true, subtree: true, attributes: true }
    const callback = elements => elements.forEach(({ target }) => {
      this.$emit('target', target)
      this.contentHeight = target.scrollHeight
    })

    this.observer = new MutationObserver(callback)
    this.observer.observe(target, config)

    this.contentHeight = target.scrollHeight

    document.addEventListener('click', this.clickOutside)
  },

  computed: {
    randomRef () {
      return Math.floor(Math.random() * 1000)
    }
  },

  methods: {
    contains (e) {
      return this.$refs[this.randomRef]?.contains(e?.target)
    },

    clickOutside (e) {
      if (!this.contains(e) && this.outsideClosable) this.$emit('toggle', false)
    }
  },

  beforeDestroy () {
    if (this.observer) this.observer.disconnect()
    document.removeEventListener('click', this.clickOutside)
  }
}
</script>

<style lang="scss">
.s-collapsible {
  & > .wrapper {
    overflow: hidden;
    transition: opacity .3s ease-in, height .3s ease-in-out !important;
  }
}
</style>
