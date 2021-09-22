<template>
  <img
    class="s-icon"
    v-bind="$attrs"
    :width="'' + size"
    :height="'' + size"
    :src="getImage()"
  >
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
    },

    backgroundColor: String
  },

  methods: {
    getImage () {
      return new URL(`../../assets/icons/${this.icon}.svg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss">
.s-icon {
  display: inline-block;
}
</style>
