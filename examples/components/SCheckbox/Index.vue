<template>
  <div class="s-checkbox-example">
    <s-checkbox label="positive check" v-model="data1" />

    <!-- <s-checkbox negative v-model="data2" />

    <s-checkbox disabled v-model="data3" /> -->
  </div>
</template>

<script>
import SCheckbox from '../../../src/components/SCheckbox/Index.vue'

export default {
  components: { SCheckbox },

  data () {
    return {
      data1: true,
      data2: true,
      data3: true
    }
  }
}
</script>

<style lang="scss">
// .s-checkbox-example > .s-checkbox > .check { margin-bottom: 60px; }
</style>
