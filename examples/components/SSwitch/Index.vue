<template>
  <div class="s-switch-example">
    <s-title size="title-1">Switch</s-title>

    <p class="subtitle">
      Switch tem como objetivo possibilitar a pessoa usuária habilitar ou desabilitar algo como um alternador binário de "on/off".
    </p>

    <s-title size="title-2">Regras de aplicação</s-title>

    <p class="subtitle">
      Podem ser utilizados para habilitar ou desabilitar configurações como "receber ou não" push notifications;
    </p>
    <p class="subtitle">
      Não deve ser usado em cenários onde é interessante a pessoa usuária conseguir confirmar as opções selecionadas antes das ações serem aplicadas. Nesses casos deve-se utilizar o checkbox.
    </p>

    <source-code file="SSwitchExample" comp="SSwitch" />

    <s-title size="title-2">Default</s-title>
    <s-box>
      <s-switch label="Default Switch" v-model="data0" />
      <br>
      <s-switch label="Checked Switch" v-model="data2" />
    </s-box>

    <pre-code :code="code1" />

    <s-title size="title-2">Disabled</s-title>
    <s-box>
      <s-switch label="disabled" disabled />
    </s-box>

    <pre-code :code="code2" />
  </div>
</template>

<script>
import SSwitch from '../../../src/components/SSwitch/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SourceCode from '../SourceCode/Index.vue'
import PreCode from '../PreCode/Index.vue'


export default {
  components: { SSwitch, SBox, STitle, SourceCode, PreCode },

  data () {
    return {
      data0: false,
      data1: true,
      data2: true,
      data3: true,
      code1:`<s-switch label="Default Switch" v-model="data0" />
<s-switch label="Checked Switch" v-model="data2" />`,
      code2:'<s-switch label="disabled" disabled />'
    }
  }
}
</script>

<style lang="scss">
.s-switch-example > .s-switch > .check { margin-bottom: 60px; }
</style>
