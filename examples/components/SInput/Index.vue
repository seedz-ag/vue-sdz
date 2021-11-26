<template>
  <div class="s-input-example">
    <h1 class="h1">Inputs</h1>

    <h2 class="h2">States</h2>
    <s-box>
      <s-input
        label="Default"
      />
      <s-input
        placeholder="Disabled input"
        disabled
      />
      <s-input
        placeholder="Disabled readonly input"
        disabled
      />
      <!-- <s-button @click="inputDataError = ''">reset</s-button> -->
      <s-input
        label="error"
        :validation="inputDataError ? '' : 'error msg'"
        :value="inputDataError"
        @input="value => inputDataError = value"
      />
      <s-input
        label="is float label"
        float-label
        :value="inputFloatLabel"
        @input="value => inputFloatLabel = value"
      />
      <s-input
        label="textarea"
        text-area
        :value="inputTextArea"
        @input="value => inputTextArea = value"
      />
    </s-box>

    <h2 class="h2">Sizing</h2>
    <s-box>
      <s-input
        label="small"
        small
      />
      <s-input
        label="Default"
      />
    </s-box>

    <h2 class="h2">Rounded</h2>
    <s-box>
      <s-input
        label="rounded"
        round
        :value="inputRounded"
        @input="value => inputRounded = value"
      />
    </s-box>

    <h2 class="h2">Masked Input</h2>
    <s-box>
      <s-input
        raw
        label="Phone"
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
    </s-box> 

    <h2 class="h2">Enhancers</h2>
    <s-box>
      <s-input
        round
        icon="sdz-eye-off"
        :value="inputSearch"
        :placeholder="'Search'"
        @input="value => inputSearch = value"
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
    </s-box>
  </div>
</template>

<script>
import SInput from '../../../src/components/SInput/Index.vue'
import SButton from '../../../src/components/SButton/Index.vue'
import SBox from '../../commons/box.vue'

export default {
  components: { SInput, SButton, SBox },

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
