<template>
  <div class="s-input-example">
    <h1 class="h1">Inputs</h1>
    <s-input
      raw
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

    <s-input
      round
      icon="sdz-eye-off"
      :value="inputSearch"
      :placeholder="'Search'"
      @input="value => inputSearch = value"
    />

    <!-- <s-input
      label="textarea"
      text-area
      :value="inputTextArea"
      @input="value => inputTextArea = value"
    /> -->

    <s-input
      label="small"
      small
    />

    <s-input
      label="disabled"
      disabled
    />

    <s-button @click="inputDataError = ''">reset</s-button>
    <s-input
      label="error"
      :validation="inputDataError ? '' : 'error msg'"
      :value="inputDataError"
      @input="value => inputDataError = value"
    />

    <s-button @click="inputTeste = ''">reset</s-button>
    <s-input
      label="teste"
      :value="inputTeste"
      placeholder="ex: Teste"
      @input="value => inputTeste = value"
    />

    <input
      label="teste"
      :value="inputTeste"
      placeholder="ex: Teste"
      @input="value => e = value.target.value"
    >

    <s-input
      label="is float label"
      float-label
      :value="inputFloatLabel"
      @input="value => inputFloatLabel = value"
    />
  </div>
</template>

<script>
import SInput from '../../../src/components/SInput/Index.vue'
import SButton from '../../../src/components/SButton/Index.vue'

export default {
  components: { SInput, SButton },

  data () {
    return {
      inputMask: '',
      inputMoney: '',
      inputRounded: '',
      inputSearch: '',
      // inputTextArea: '',
      inputDataError: '',
      inputTeste: '',
      inputFloatLabel: ''
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
.s-input-container { margin-bottom: 60px; }
</style>
