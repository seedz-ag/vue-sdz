<template>
  <div class="s-input-example">
    <s-title size="title-1">Password</s-title>

    <p class="subtitle">
      Input Password tem como objetivo permitir que a pessoa usuária coloque e/ou cadastre uma senha dentro do sistema. Possui uma máscara que por default fica habilitada, mas a pessoa usuária pode desabilitar para consegui ver os caracteres.
    </p>
    <p class="subtitle">
      Utilizar o Input Password em fluxos de login ou de cadastro de senha e perfil.
    </p>
    <p class="subtitle">
      Utilizar mensagens de erro que ajudam a pessoa usuário a solucionar o problema.
    </p>
    <p class="subtitle">
      Considerar Input Password sem label em casos específicos, mas com a utilização obrigatório do placehold como texto orientador.
    </p>

    <source-code file="SPasswordExample" comp="SInput" />

    <s-title size="title-2">Default</s-title>
    <s-box>
      <s-input
        label="Password"
        type="password"
      />
    </s-box>

    <pre-code :code="code1" />

    <s-title size="title-2">Error</s-title>
    <s-box>
      <s-input
        label="Password Error"
        :validation="inputDataError ? '' : 'error msg'"
        :value="inputDataError"
        type="password"
        @input="value => inputDataError = value"
      />
    </s-box>

    <pre-code :code="code2" />

    <s-title size="title-2">Disabled</s-title>
    <s-box>
      <s-input
        placeholder="Disabled input"
        disabled="disabled"
        type="password"
        value="1234"
        label="Password Disabled"
      />
      <s-input
        placeholder="Password disabled readonly"
        readonly="readonly"
        type="password"
      />
    </s-box>

    <pre-code :code="code3" />
  </div>
</template>

<script>
import SInput from '../../../src/components/SInput/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SourceCode from '../SourceCode/Index.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SInput, SBox, STitle, SourceCode, PreCode },

  data () {
    return {
      inputDataError: '',
      inputTeste: '',
      code1:`<s-input
        label="Password"
        type="password"
      />`,
      code2:`<s-input
        label="Password Error"
        :validation="inputDataError ? '' : 'error msg'"
        :value="inputDataError"
        type="password"
        @input="value => inputDataError = value"
      />`,
      code3:`<s-input
        placeholder="Disabled input"
        disabled="disabled"
        type="password"
        value="1234"
        label="Password Disabled"
      />
      <s-input
        placeholder="Password disabled readonly"
        readonly="readonly"
        type="password"
      />`
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
.s-input-example{
  & > .s-input-container { margin-bottom: 60px; }
}
</style>
