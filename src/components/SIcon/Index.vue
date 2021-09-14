<template>
  <img
    class="s-icon"
    v-bind="$attrs"
    :width="'' + size"
    :height="'' + size"
    :src="require(`../../assets/icons/${image}.svg`)"
  >
</template>

<script>
export default {
  name: 'SIcon',

  props: {
    image: {
      type: String,
      required: true
    },

    size: {
      type: [String, Number],
      default: 20
    },

    backgroundColor: String
  }
}
</script>

<style lang="scss">
.s-icon {
  display: inline-block;
}
</style>
