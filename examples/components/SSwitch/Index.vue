<template>
  <div class="s-switch-example">
    <h1 class="h1">Switch</h1>
    <s-title class="h1" title="Switch" />

    <p class="subtitle">
      Switch tem como objetivo possibilitar a pessoa usuária habilitar ou desabilitar algo como um alternador binário de "on/off".
    </p>

    <s-title class="h2" title="Regras de aplicação" />

    <p class="subtitle">
      Podem ser utilizados para habilitar ou desabilitar configurações como "receber ou não" push notifications;
    </p>
    <p class="subtitle">
      Não deve ser usado em cenários onde é interessante a pessoa usuária conseguir confirmar as opções selecionadas antes das ações serem aplicadas. Nesses casos deve-se utilizar o checkbox.
    </p>

    <source-code file="SSwitchExample" comp="SSwitch" />

    <s-title class="h2" title="Default" />
    <s-box>
      <s-switch label="Default Switch" v-model="data0" />
      <br>
      <s-switch label="Checked Switch" v-model="data2" />
    </s-box>

    <s-title class="h2" title="Disabled" />
    <s-box>
      <s-switch label="disabled" disabled />
    </s-box>
  </div>
</template>

<script>
import SSwitch from '../../../src/components/SSwitch/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SourceCode from '../SourceCode/Index.vue'

export default {
  components: { SSwitch, SBox, STitle, SourceCode },

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
