<template>
  <div class="s-checkbox-example">
    <s-title class="h1" title="Checkbox" />

    <p class="subtitle">
      Input Checkbox é uma caixa de seleção que a pessoa usuária pode marcar ou desmarcar para aceitar alguma ação. Podendo usar um ou mais checkboxs seguidos.
    </p>

    <s-title class="h2" title="Quando usar" />

    <p class="subtitle">
      Use as caixas de seleção quando as pessoas usuárias devem selecionar uma ou mais opções de uma lista de itens relacionados;
    </p>
    <p class="subtitle">
      Pode ser usado para filtrar dados em uma página, em um menu ou em um componente e em uma ação explícita na qual é necessária para aplicar as configurações;
    </p>
    <p class="subtitle">
      Podem ser utilizados em alguns componentes como: Modais, Formulários, Tabelas, Termos e Condições.
    </p>

    <source-code file="SCheckboxExample" comp="SCheckbox" />

    <s-title class="h2" title="Default" />
    <s-box>
      <s-checkbox label="Default Checkbox" v-model="data0" />
      <br>
      <s-checkbox label="Checked Checkbox" v-model="data1" />
    </s-box>

    <pre-code :code="code1" />

    <s-title class="h2" title="Stats" />
    <s-box>
      <s-checkbox label="Positive" v-model="data2" />
      <br>
      <s-checkbox label="Negative" negative v-model="data3" />
    </s-box>

    <pre-code :code="code2" />

    <s-title class="h2" title="Disabled" />
    <s-box>
      <s-checkbox label="disabled" disabled v-model="data4" />
    </s-box>

    <pre-code :code="code3" />
  </div>
</template>

<script>
import SCheckbox from '../../../src/components/SCheckbox/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SourceCode from '../SourceCode/Index.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SCheckbox, SBox, STitle, SourceCode, PreCode },

  data () {
    return {
      data0: false,
      data1: true,
      data2: true,
      data3: true,
      data4: true,
      code1:`<s-checkbox label="Default Checkbox" v-model="data0" />
      <s-checkbox label="Checked Checkbox" v-model="data1" />`,
      code2:`<s-checkbox label="Positive" v-model="data2" />
      <s-checkbox label="Negative" negative v-model="data3" />`,
      code3:'<s-checkbox label="disabled" disabled v-model="data4" />'
    }
  }
}
</script>

<style lang="scss">
.s-checkbox-example > .s-checkbox > .check { margin-bottom: 60px; }
</style>
