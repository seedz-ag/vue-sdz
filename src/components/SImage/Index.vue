<template>
  <vue-coe-image class="s-image" :duration="duration" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
import VueCoeImage from 'vue-coe-image'
import 'vue-coe-image/dist/vue-coe-image.css'

export default {
  name: 'SImage',

  components: { VueCoeImage },

  props: {
    duration: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-image {

}
</style>
