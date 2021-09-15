<template>
  <div class="s-input-example">
    <s-input
      :mask="['####-####']"
      :value="inputData"
      @input="value => inputData = value"
    />

    <s-input
      is-money
      :value="inputData"
      @input="value => inputData = value"
    />

    <s-input
      round
      :value="inputData"
      @input="value => inputData = value"
    />

    <s-input
      text-area
      :value="inputData"
      @input="value => inputData = value"
    />

    <s-input
      disabled
      :value="inputData"
      @input="value => inputData = value"
    />

    <s-input
      :validation="'error'"
      :value="inputData"
      @input="value => inputData = value"
    />

    <s-input
      label="teste 1"
      :value="inputData"
      @input="value => inputData = value"
    />
  </div>
</template>

<script>
import SInput from '../../../src/components/SInput/Index.vue'

export default {
  components: { SInput },

  data () {
    return {
      inputData: ''
    }
  }
}
</script>

<style lang="scss">
.c-input {
  width: 300px;
  margin-bottom: 40px;
}
</style>
