<template>
  <i :class="`s-icon icon ${icon}`" :style="{ 'font-size': size + 'px' }" />
</template>

<script>
export default {
  name: 'SIcon',

  props: {
    icon: {
      type: String,
      required: true
    },

    size: {
      type: [String, Number],
      default: 20
    }
  }

  // methods: {
  //   getImage () {
  //     return new URL(`../../assets/icons/${this.icon}.svg`, import.meta.url).href
  //   }
  // }
}
</script>

<style lang="scss">
.s-icon {
  display: inline-block;
}
</style>
