<template>
  <div class="s-radiobox-example">
    <h1 class="h1">Radiobox</h1>

    <h2 class="h2">Default</h2>
    <s-box>
      <s-radiobox v-model="data0" label="Default Radiobox" />
      <br>
      <s-radiobox v-model="data2" label="Checked Radiobox"/>
    </s-box>

    <h2 class="h2">Stats</h2>
    <s-box>
      <s-radiobox label="Positive" v-model="data1" />
      <br>
      <s-radiobox label="Negative" negative v-model="data2" />
    </s-box>

    <h2 class="h2">Disabled</h2>
    <s-box>
      <s-radiobox label="disabled" disabled />
    </s-box>
  </div>
</template>

<script>
import SRadiobox from '../../../src/components/SRadiobox/Index.vue'
import SBox from '../../commons/box.vue'

export default {
  components: { SRadiobox, SBox },

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
.s-radiobox-example > .s-radiobox > .radio { margin-bottom: 60px; }
</style>
