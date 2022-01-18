<template>
  <div class="s-input-example">
    <s-title size="title-1">Text Area</s-title>

    <p class="subtitle">
      Input Text Area permite que a pessoa usuária insira textos longos em um campo.
    </p>

    <s-title size="title-2">Quando usar</s-title>

    <p class="subtitle">
      Representa um controle de edição de texto simples de várias linhas, útil quando você deseja permitir que as pessoas usuárias insiram uma quantidade considerável de texto de formato livre, por exemplo, um comentário em um formulário de revisão ou feedback;
    </p>

    <source-code file="STextareaExample" comp="SInput" />

    <s-title size="title-2">Default</s-title>
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

    <pre-code :code="code1" />

    <s-title size="title-2">Negative</s-title>
    <s-box>
      <s-input
        label="textarea"
        text-area
        :value="inputDataError"
        :validation="inputDataError ? '' : 'error msg'"
        @input="value => inputDataError = value"
      />
    </s-box>

    <pre-code :code="code2" />

    <s-title size="title-2">Disabled</s-title>
    <s-box>
      <s-input
        label="Disabled"
        disabled
        text-area
        :value="inputTextArea"
        @input="value => inputTextArea = value"
      />
    </s-box>

    <pre-code :code="code3" />
  </div>
</template>

<script>
import SInput from '../../../src/components/SInput/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SourceCode from '../SourceCode/Index.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SInput, SBox, STitle, SourceCode, PreCode },

  data () {
    return {
      inputTextArea: '',
      inputDataError: '',
      inputFloatLabel: '',
      code1:`<s-input
        label="textarea"
        rows="20"
        cols="5"
        text-area
        :value="inputTextArea"
        @input="value => inputTextArea = value"
      />`,
      code2:`<s-input
        label="textarea"
        text-area
        :value="inputDataError"
        :validation="inputDataError ? '' : 'error msg'"
        @input="value => inputDataError = value"
      />`,
      code3:`<s-input
        label="Disabled"
        disabled
        text-area
        :value="inputTextArea"
        @input="value => inputTextArea = value"
      />`
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
.s-input-example{
  & > .s-input-container { margin-bottom: 60px; }
  & > .sizing.flex-inline .s-input-container{margin-right: 30px;}
}
</style>
