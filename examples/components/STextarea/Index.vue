<template>
  <div class="s-input-example">
    <s-title class="h1" title="Input Text Area" />

    <p class="subtitle">
      Input Text Area permite que a pessoa usuária insira textos longos em um campo.
    </p>
    <s-title class="h2" title="Quanto usar" />
    <p class="subtitle">
      Representa um controle de edição de texto simples de várias linhas, útil quando você deseja permitir que as pessoas usuárias insiram uma quantidade considerável de texto de formato livre, por exemplo, um comentário em um formulário de revisão ou feedback;
    </p>

    <s-title class="h2" title="Default" />
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

    <s-title class="h2" title="Negative" />
    <s-box>
      <s-input
        label="textarea"
        text-area
        :value="inputDataError"
        :validation="inputDataError ? '' : 'error msg'"
        @input="value => inputDataError = value"
      />
    </s-box>

    <s-title class="h2" title="Disabled" />
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
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

export default {
  components: { SInput, SBox, STitle },

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
