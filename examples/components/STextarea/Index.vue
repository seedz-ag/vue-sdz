<template>
  <div class="s-input-example">
    <h1 class="h1">Input Text Area</h1>

    <p class="subtitle">
      Input Text Area permite que a pessoa usuária insira textos longos em um campo.
    </p>
    <h2 class="h2">Quando usar</h2>  
    <p class="subtitle">
      Representa um controle de edição de texto simples de várias linhas, útil quando você deseja permitir que as pessoas usuárias insiram uma quantidade considerável de texto de formato livre, por exemplo, um comentário em um formulário de revisão ou feedback;
    </p>

    <h2 class="h2">Default</h2>
    <s-box>
      <s-input
        label="textarea"
        rows="20"
        cols="5"
        text-area
        :value="inputTextArea"
        @input="value => inputTextArea = value"
      />
    </s-box>

    <h2 class="h2">Negative</h2>
    <s-box>
      <s-input
        label="textarea"
        text-area
        :value="inputDataError"
        @input="value => inputDataError = value"
        :validation="inputDataError ? '' : 'error msg'"
      />
    </s-box>

    <h2 class="h2">Disabled</h2>
    <s-box>
      <s-input
        label="Disabled"
        disabled
        text-area
        :value="inputTextArea"
        @input="value => inputTextArea = value"
      />
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
      inputTextArea: '',
      inputDataError: '',
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
.sizing.flex-inline .s-input-container{margin-right: 30px;}
</style>
