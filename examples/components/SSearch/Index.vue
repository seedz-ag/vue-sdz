<template>
  <div class="s-search-example">
    <s-title size="title-1">Search</s-title>

    <p class="subtitle">
      Input Search é um campo de busca e permite que a pessoa usuária encontre um conteúdo de forma rápida. Hoje é um componente de input simples, no futuro a ideia é que contemple também comportamentos como autocomplete.
    </p>

    <s-title size="title-2">Quando usar</s-title>

    <p class="subtitle">
      É utilizado quando a pessoa usuária deseja encontrar um conteúdo disponível;
    </p>
    <p class="subtitle">
      Pode ser adicionado a outros componentes, como por exemplo o Header.
    </p>

    <s-title size="title-2">Default</s-title>

    <s-box>
      <s-search
        :categories="['Resgate', 'Acumule']"
        v-model="data"
      />
    </s-box>
  </div>
</template>

<script>
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SSearch from '../../../src/components/SSearch/Index.vue'

export default {
  components: { SSearch, SBox, STitle },

  data () {
    return {
      data: ''
    }
  }
}
</script>

<style lang="scss">
.s-search-example {
}
</style>
