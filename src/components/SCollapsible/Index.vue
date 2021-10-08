<template>
  <div class="s-collapsible">
    <div class="header" @click="$emit('toggle', !isOpened)">
      <slot name="header">X</slot>
    </div>

    <div ref="wrapper" class="wrapper" :style="{ height: isOpened ? contentHeight + 'px' : 0 }">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SCollapsible',

  props: {
    isOpened: { type: Boolean, required: true }
  },

  data: () => ({ observer: null, contentHeight: 0 }),

  mounted () {
    const target = this.$refs.wrapper.children[0]
    const config = { childList: true, subtree: true }
    const callback = elements => elements.forEach(({ _, target }) => this.contentHeight = target.clientHeight)

    this.observer = new MutationObserver(callback)
    this.observer.observe(target, config)

    this.contentHeight = target.clientHeight
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
    transition: height .3s ease-in-out;
  }
}
</style>
