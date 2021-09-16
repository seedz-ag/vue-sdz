<template>
  <div class="s-input-example">
    <s-input
      label="mask"
      :mask="['####-####']"
      :value="inputMask"
      @input="value => inputMask = value"
    />

    <s-input
      label="money"
      is-money
      :value="inputMoney"
      @input="onInputMoney"
    />

    <s-input
      label="rounded"
      round
      :value="inputRounded"
      @input="value => inputRounded = value"
    />

    <!-- <s-input
      label="textarea"
      text-area
      :value="inputTextArea"
      @input="value => inputTextArea = value"
    /> -->

    <s-input
      label="disabled"
      disabled
    />

    <s-input
      label="error"
      :validation="inputDataError ? '' : 'error msg'"
      :value="inputDataError"
      @input="value => inputDataError = value"
    />

    <s-input
      label="teste"
      :value="inputTeste"
      @input="value => inputTeste = value"
    />
  </div>
</template>

<script>
import SInput from '../../../src/components/SInput/Index.vue'

export default {
  components: { SInput },

  data () {
    return {
      inputMask: '',
      inputMoney: '',
      inputRounded: '',
      // inputTextArea: '',
      inputDataError: '',
      inputTeste: ''
    }
  },

  methods: {
    onInputMoney (value) {
      this.inputMoney = value
    }
  }
}
</script>

<style lang="scss">
.s-input-container { margin-bottom: 30px; }
</style>
