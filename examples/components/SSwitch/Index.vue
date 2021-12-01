<template>
  <div class="s-switch-example">
    <h1 class="h1">Switch</h1>

    <p class="subtitle">
      Switch tem como objetivo possibilitar a pessoa usuária habilitar ou desabilitar algo como um alternador binário de "on/off".
    </p>

    <h2 class="h2">Regras de aplicação</h2> 

    <p class="subtitle">
      Podem ser utilizados para habilitar ou desabilitar configurações como "receber ou não" push notifications;
      <br><br>
      Não deve ser usado em cenários onde é interessante a pessoa usuária conseguir confirmar as opções selecionadas antes das ações serem aplicadas. Nesses casos deve-se utilizar o checkbox.
    </p>

    <h2 class="h2">Default</h2>
    <s-box>
      <s-switch v-model="data0" label="Default Switch" />
      <br>
      <s-switch v-model="data2" label="Checked Switch"/>
    </s-box>

    <h2 class="h2">Disabled</h2>
    <s-box>
      <s-switch label="disabled" disabled />
    </s-box>
  </div>
</template>

<script>
import SSwitch from '../../../src/components/SSwitch/Index.vue'
import SBox from '../../commons/box.vue'

export default {
  components: { SSwitch, SBox },

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
.s-switch-example > .s-switch > .check { margin-bottom: 60px; }
</style>
