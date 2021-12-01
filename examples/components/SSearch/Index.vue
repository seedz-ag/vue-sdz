<template>
  <div class="s-input-example">
    <h1 class="h1">Search</h1>

    <p class="subtitle">
      Input Search é um campo de busca e permite que a pessoa usuária encontre um conteúdo de forma rápida. Hoje é um componente de input simples, no futuro a ideia é que contemple também comportamentos como autocomplete.
    </p>
    <h2 class="h2">Quando usar</h2>
    <p class="subtitle">
      É utilizado quando a pessoa usuária deseja encontrar um conteúdo disponível;
      <br><br>
      Pode ser adicionado a outros componentes, como por exemplo o Header.
    </p>

    <h2 class="h2">Default</h2>
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
.sizing.flex-inline .s-input-container{margin-right: 30px;}
</style>
