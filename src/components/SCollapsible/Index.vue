<template>
  <div class="s-collapsible" @click="$emit('toggle', !isOpened)">
    <div v-if="!noHeader" class="header">
      <slot name="header">X</slot>
    </div>

    <div ref="wrapper" class="wrapper" :style="{
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
    isOpened: { type: Boolean, required: true }
  },

  data: () => ({ observer: null, contentHeight: 0 }),

  mounted () {
    const target = this.$refs.wrapper
    const config = { childList: true, subtree: true, attributes: true }
    const callback = elements => elements.forEach(({ target }) => {
      this.$emit('target', target)
      this.contentHeight = target.scrollHeight
    })

    this.observer = new MutationObserver(callback)
    this.observer.observe(target, config)

    this.contentHeight = target.scrollHeight
  },

  beforeDestroy () {
    if (this.observer) this.observer.disconnect()
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
