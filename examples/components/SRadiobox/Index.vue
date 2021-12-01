<template>
  <div class="s-radiobox-example">
    <h1 class="h1">Radiobox</h1>

    <p class="subtitle">
      Input Radio Button tem como objetivo possibilitar que a pessoa usuária escolha uma opção dentro da interface.
      <br><br>
      Deve ser usado quando é permitido selecionar apenas uma única opção em uma lista, principalmente em cenários onde estão expostos todas as opções disponíveis.
      <br><br>
      Podem ser utilizados em alguns componentes como: Listas, Formulários e Tabelas.
      <br><br>
      Não deve ser usado se mais de uma opção puder ser selecionada, nesse cenário devemos utilizar o checkbox.
    </p>

    <h2 class="h2">Default</h2>
    <s-box>
      <s-radiobox id="sim" label="Default Radiobox" name="dafault" value="sim" v-model="data0" />
      <s-radiobox id="nao" label="Default Radiobox" name="dafault" value="não" v-model="data0" />
      <br>
      <s-radiobox label="Checked Radiobox" v-model="data2" />
    </s-box>

    <h2 class="h2">Stats</h2>
    <s-box>
      <s-radiobox label="Positive" v-model="data3" />
      <br>
      <s-radiobox label="Negative" negative v-model="data4" />
    </s-box>

    <h2 class="h2">Disabled</h2>
    <s-box>
      <s-radiobox label="disabled" disabled v-model="data5" />
    </s-box>
  </div>
</template>

<script>
import SRadiobox from '../../../src/components/SRadiobox/Index.vue'
import SBox from '../../commons/box.vue'

export default {
  components: { SRadiobox, SBox },

  data () {
    return {
      data0: false,
      data1: true,
      data2: true,
      data3: true,
      data4: true,
      data5: true
    }
  }
}
</script>

<style lang="scss">
.s-radiobox-example > .s-radiobox > .radio { margin-bottom: 60px; }
</style>
