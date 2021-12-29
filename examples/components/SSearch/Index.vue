<template>
  <div class="s-input-example">
    <s-title class="h1" title="Search" />

    <p class="subtitle">
      Input Search é um campo de busca e permite que a pessoa usuária encontre um conteúdo de forma rápida. Hoje é um componente de input simples, no futuro a ideia é que contemple também comportamentos como autocomplete.
    </p>
    <s-title class="h2" title="Quando usar" />
    <p class="subtitle">
      É utilizado quando a pessoa usuária deseja encontrar um conteúdo disponível;
    </p>
    <p class="subtitle">
      Pode ser adicionado a outros componentes, como por exemplo o Header.
    </p>

    <source-code file="SSearchExample" comp="SInput" />

    <s-title class="h2" title="Default" />
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
import SourceCode from '../SourceCode/Index.vue'

export default {
  components: { SInput, SBox, STitle, SourceCode },

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
.sizing.flex-inline .s-input-container{margin-right: 30px;}
</style>
