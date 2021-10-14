<template>
  <div class="s-checkbox-example">
    <s-checkbox v-model="data0" />

    <s-checkbox label="positive" v-model="data1" />

    <s-checkbox label="negative" negative v-model="data2" />

    <s-checkbox label="disabled" disabled v-model="data3" />
  </div>
</template>

<script>
import SCheckbox from '../../../src/components/SCheckbox/Index.vue'

export default {
  components: { SCheckbox },

  data () {
    return {
      data0: false,
      data1: true,
      data2: true,
      data3: true
    }
  }
}
</script>

<style lang="scss">
.s-checkbox-example > .s-checkbox > .check { margin-bottom: 60px; }
</style>
