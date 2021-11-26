<template>
  <div class="s-checkbox-example">
    <h1 class="h1">Checkbox</h1>

    <h2 class="h2">Default</h2>
    <s-box>
      <s-checkbox v-model="data0" label="Default Checkbox" />
      <br>
      <s-checkbox v-model="data2" label="Checked Checkbox"/>
    </s-box>

    <h2 class="h2">Stats</h2>
    <s-box>
      <s-checkbox label="Positive" v-model="data1" />
      <br>
      <s-checkbox label="Negative" negative v-model="data2" />
    </s-box>

    <h2 class="h2">Disabled</h2>
    <s-box>
      <s-checkbox label="disabled" disabled v-model="data1" />
    </s-box>
  </div>
</template>

<script>
import SCheckbox from '../../../src/components/SCheckbox/Index.vue'
import SBox from '../../commons/box.vue'

export default {
  components: { SCheckbox, SBox },

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
