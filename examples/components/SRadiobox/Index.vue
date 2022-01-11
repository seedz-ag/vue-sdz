<template>
  <div class="s-radiobox-example">
    <s-title class="h1" title="Radiobox" />

    <p class="subtitle">
      Input Radio Button tem como objetivo possibilitar que a pessoa usuária escolha uma opção dentro da interface.
    </p>
    <p class="subtitle">
      Deve ser usado quando é permitido selecionar apenas uma única opção em uma lista, principalmente em cenários onde estão expostos todas as opções disponíveis.
    </p>
    <p class="subtitle">
      Podem ser utilizados em alguns componentes como: Listas, Formulários e Tabelas.
    </p>
    <p class="subtitle">
      Não deve ser usado se mais de uma opção puder ser selecionada, nesse cenário devemos utilizar o checkbox.
    </p>

    <source-code file="SRadioboxExample" comp="SRadiobox" />

    <s-title class="h2" title="Default" />
    <s-box>
      <s-radiobox id="sim" label="Default Radiobox" name="dafault" value="sim" v-model="data0" />
      <s-radiobox id="nao" label="Default Radiobox" name="dafault" value="não" v-model="data0" />
      <br>
      <s-radiobox label="Checked Radiobox" v-model="data2" />
    </s-box>

    <pre-code :code="code1" />

    <s-title class="h2" title="Stats" />
    <s-box>
      <s-radiobox label="Positive" v-model="data3" />
      <br>
      <s-radiobox label="Negative" negative v-model="data4" />
    </s-box>

    <pre-code :code="code2" />

    <s-title class="h2" title="Disabled" />
    <s-box>
      <s-radiobox label="disabled" disabled v-model="data5" />
    </s-box>

    <pre-code :code="code3" />
  </div>
</template>

<script>
import SRadiobox from '../../../src/components/SRadiobox/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SourceCode from '../SourceCode/Index.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SRadiobox, SBox, STitle, SourceCode, PreCode },

  data () {
    return {
      data0: false,
      data1: true,
      data2: true,
      data3: true,
      data4: true,
      data5: true,
      code1:`<s-radiobox id="sim" label="Default Radiobox" name="dafault" value="sim" v-model="data0" />
      <s-radiobox id="nao" label="Default Radiobox" name="dafault" value="não" v-model="data0" />
      <s-radiobox label="Checked Radiobox" v-model="data2" />`,
      code2:`<s-radiobox label="Positive" v-model="data3" />
      <s-radiobox label="Negative" negative v-model="data4" />`,
      code3:'<s-radiobox label="disabled" disabled v-model="data5" />'
    }
  }
}
</script>

<style lang="scss">
.s-radiobox-example > .s-radiobox > .radio { margin-bottom: 60px; }
</style>
