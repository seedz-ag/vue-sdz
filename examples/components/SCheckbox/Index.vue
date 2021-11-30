<template>
  <div class="s-checkbox-example">
    <h1 class="h1">Checkbox</h1>

    <p class="subtitle">
      Input Checkbox é uma caixa de seleção que a pessoa usuária pode marcar ou desmarcar para aceitar alguma ação. Podendo usar um ou mais checkboxs seguidos.
    </p>
    <h2 class="h2">Quando usar</h2>
    <p class="subtitle">
      Use as caixas de seleção quando as pessoas usuárias devem selecionar uma ou mais opções de uma lista de itens relacionados;
      <br><br>
      Pode ser usado para filtrar dados em uma página, em um menu ou em um componente e em uma ação explícita na qual é necessária para aplicar as configurações;
      <br><br>
      Podem ser utilizados em alguns componentes como: Modais, Formulários, Tabelas, Termos e Condições.
    </p>

    <h2 class="h2">Default</h2>
    <s-box>
      <s-checkbox v-model="data0" label="Default Checkbox" />
      <br>
      <s-checkbox v-model="data2" label="Checked Checkbox"/>
    </s-box>

    <h2 class="h2">Stats</h2>
    <s-box>
      <s-checkbox label="Positive" v-model="data1" />
      <br>
      <s-checkbox label="Negative" negative v-model="data2" />
    </s-box>

    <h2 class="h2">Disabled</h2>
    <s-box>
      <s-checkbox label="disabled" disabled v-model="data1" />
    </s-box>
  </div>
</template>

<script>
import SCheckbox from '../../../src/components/SCheckbox/Index.vue'
import SBox from '../../commons/box.vue'

export default {
  components: { SCheckbox, SBox },

  data () {
    return {
      data0: false,
      data1: true,
      data2: true,
      data3: true
    }
  }
}
</script>

<style lang="scss">
.s-checkbox-example > .s-checkbox > .check { margin-bottom: 60px; }
</style>
