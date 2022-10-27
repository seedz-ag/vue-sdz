<template>
  <div class="s-collapsible">
    <div v-if="!noHeader" class="header" @click.stop="$emit('toggle', !isOpened)">
      <slot name="header">X</slot>
    </div>

    <transition
      name="collapsible"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div v-show="isOpened" :ref="randomRef" class="wrapper">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SCollapsible',

  props: {
    noHeader: Boolean,
    outsideClosable: Boolean,
    isOpened: { type: Boolean, required: true }
  },

  mounted () {
    document.addEventListener('click', this.clickOutside)
  },

  computed: {
    randomRef () {
      return Math.floor(Math.random() * 1000)
    }
  },

  methods: {
    start (el) {
      el.style.height = el.scrollHeight + 'px'
    },

    end (el) {
      el.style.height = ''
    },

    contains (e) {
      return this.$refs[this.randomRef]?.contains(e?.target)
    },

    clickOutside (e) {
      console.log(this.contains(e))
      if (!this.contains(e) && this.outsideClosable) this.$emit('toggle', false)
    }
  },

  beforeDestroy () {
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

.collapsible-enter-active,
.collapsible-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.collapsible-enter,
.collapsible-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
