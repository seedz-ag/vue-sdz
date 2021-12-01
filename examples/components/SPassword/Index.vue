<template>
  <div class="s-input-example">
    <h1 class="h1">Password</h1>

    <p class="subtitle">
      Input Password tem como objetivo permitir que a pessoa usuária coloque e/ou cadastre uma senha dentro do sistema. Possui uma máscara que por default fica habilitada, mas a pessoa usuária pode desabilitar para consegui ver os caracteres. 
      <br><br>
      Utilizar o Input Password em fluxos de login ou de cadastro de senha e perfil.
      <br><br>
      Utilizar mensagens de erro que ajudam a pessoa usuário a solucionar o problema.
      <br><br>
      Considerar Input Password sem label em casos específicos, mas com a utilização obrigatório do placehold como texto orientador.
    </p>

    <h2 class="h2">Default</h2>
    <s-box>
      <s-input
        label="Password"
        type="password"
      />
    </s-box>

    <h2 class="h2">Error</h2>
    <s-box>
      <s-input
        label="Password Error"
        :validation="inputDataError ? '' : 'error msg'"
        :value="inputDataError"
        @input="value => inputDataError = value"
        type="password"
      />
    </s-box>

    <h2 class="h2">Disabled</h2>
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
  </div>
</template>

<script>
import SInput from '../../../src/components/SInput/Index.vue'
import SBox from '../../commons/box.vue'

export default {
  components: { SInput, SBox },

  data () {
    return {
      inputDataError: '',
      inputTeste: ''
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
</style>
