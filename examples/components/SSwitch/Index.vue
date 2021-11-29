<template>
  <div class="s-switch-example">
    <h1 class="h1">Switch</h1>

    <h2 class="h2">Default</h2>
    <s-box>
      <s-switch v-model="data0" label="Default Switch" />
      <br>
      <s-switch v-model="data2" label="Checked Switch"/>
    </s-box>

    <h2 class="h2">Stats</h2>
    <s-box>
      <s-switch label="Positive" v-model="data1" />
      <br>
      <s-switch label="Negative" negative v-model="data2" />
    </s-box>

    <h2 class="h2">Disabled</h2>
    <s-box>
      <s-switch label="disabled" disabled />
    </s-box>
  </div>
</template>

<script>
import SSwitch from '../../../src/components/SSwitch/Index.vue'
import SBox from '../../commons/box.vue'

export default {
  components: { SSwitch, SBox },

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
.s-switch-example > .s-switch > .check { margin-bottom: 60px; }
</style>
