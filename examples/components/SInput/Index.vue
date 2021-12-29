<template>
  <div class="s-input-example">
    <s-title class="h1" title="Inputs" />

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

    <s-title class="h2" title="Stats" />
    <s-box>
      <s-input
        label="Default"
      />

      <s-input
        placeholder="Disabled input"
        disabled="disabled"
      />
      <s-input
        placeholder="Disabled readonly input"
        readonly="readonly"
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

    <s-title class="h2" title="Sizing" />
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

    <s-title class="h2" title="Rounded" />
    <s-box>
      <s-input
        label="rounded"
        round
        :value="inputRounded"
        @input="value => inputRounded = value"
      />
    </s-box>

    <s-title class="h2" title="Masked Input" />
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

    <s-title class="h2" title="Enhancers" />
    <s-box>
      <s-input
        round
        icon="sdz-search"
        :value="inputSearch"
        :placeholder="'Search'"
        @input="value => inputSearch = value"
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
.s-input-example{
  & > .s-input-container { margin-bottom: 60px; }
  & > .sizing.flex-inline .s-input-container{margin-right: 30px;}
}
</style>
