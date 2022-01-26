<template>
  <div class="s-input-example">
    <s-title size="title-1">Inputs</s-title>

    <p class="subtitle">
      Input Text permite a pessoa usuária interagir e inserir conteúdo e dados. Pode ser usado para entradas de formulários longos e curtos.
    </p>
    <p class="subtitle">
      Use em formulários para permitir as pessoas inserirem informações;
    </p>
    <p class="subtitle">
      Podem fazer parte de componentes como modais no caso de um modal de login, por exemplo;
    </p>
    <p class="subtitle">
      Os tipos de entrada de texto comuns incluem: nomes de pessoas usuárias, descrições, URLs, e-mails, endereços e qualquer outra forma de inserção de informação.
    </p>
    <p class="subtitle">
      Considerar Input Text sem label em casos específicos, mas com a utilização obrigatório do placehold como texto orientador.
    </p>

    <source-code file="SInputExample" comp="SInput" />

    <s-title size="title-2">Stats</s-title>
    <s-box>
      <s-input label="Default" />

      <s-input placeholder="Input without label" />

      <s-input
        disabled="disabled"
        placeholder="Disabled input"
      />
      <s-input
        readonly="readonly"
        placeholder="Disabled readonly input"
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
    </s-box>

    <pre-code :code="code1" />

    <s-title size="title-2">Sizing</s-title>
    <s-box class="sizing flex-inline">
      <s-input
        label="Small"
        small
      />
      <s-input
        label="Default"
      />
      <s-input
        label="Larger"
        larger
      />
    </s-box>

    <pre-code :code="code2" />

    <s-title size="title-2">Rounded</s-title>
    <s-box>
      <s-input
        label="rounded"
        round
        :value="inputRounded"
        @input="value => inputRounded = value"
      />
    </s-box>

    <pre-code :code="code3" />

    <s-title size="title-2">Masked Input</s-title>
    <p class="subtitle">
      CPF: 000.000.000-00<br>
      CNPJ: 00.000.000/0000-00<br>
      Telefone: (00) 00000-0000<br>
    </p>
    <s-box>
      <s-input
        raw
        label="CPF"
        :mask="['###.###.###-##']"
        :value="inputMask"
        @input="value => inputMask = value"
      />
      <s-input
        raw
        label="Phone"
        :mask="['(##) ####-####']"
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

    <pre-code :code="code4" />

    <s-title size="title-2">Enhancers</s-title>
    <s-box>
      <s-input
        round
        icon="sdz-search"
        :value="inputSearch"
        :placeholder="'Search'"
        @input="value => inputSearch = value"
      />
    </s-box>

    <pre-code :code="code5" />
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
      inputMask: '',
      inputMoney: '',
      inputRounded: '',
      inputSearch: '',
      // inputTextArea: '',
      inputDataError: '',
      inputTeste: '',
      inputFloatLabel: '',
      code1: `<s-input label="Default" />\n
    <s-input
      placeholder="Disabled input"
      disabled="disabled"
    />\n
    <s-input
      placeholder="Disabled readonly input"
      readonly="readonly"
    />\n
    <s-input
      label="error"
      :validation="inputDataError ? '' : 'error msg'"
      :value="inputDataError"
      @input="value => inputDataError = value"
    />\n
    <s-input
      label="is float label"
      float-label
      :value="inputFloatLabel"
      @input="value => inputFloatLabel = value"
    />`,
      code2: `<s-input
        label="Small"
        small
      />
      <s-input
        label="Default"
      />
      <s-input
        label="Larger"
        larger
      />`,
      code3: `<s-input
        label="rounded"
        round
        :value="inputRounded"
        @input="value => inputRounded = value"
      />`,
      code4: `<s-input
        raw
        label="CPF"
        :mask="['###.###.###-##']"
        :value="inputMask"
        @input="value => inputMask = value"
      />
      <s-input
        raw
        label="Phone"
        :mask="['(##) ####-####']"
        :value="inputMask"
        @input="value => inputMask = value"
      />
      <s-input
        label="money"
        is-money
        :value="inputMoney"
        @input="onInputMoney"
      />`,
      code5: `<s-input
        round
        icon="sdz-search"
        :value="inputSearch"
        :placeholder="'Search'"
        @input="value => inputSearch = value"
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
  & > .s-box > div { margin-top: 45px; }
  & > .sizing.flex-inline > .box > .s-input-container { margin-right: 30px; }
}
</style>
