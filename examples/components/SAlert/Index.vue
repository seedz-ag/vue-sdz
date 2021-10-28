<template>
  <div class="s-alert-example">
    <s-alert positive>
      <div slot="header">slot header</div>
      <div slot="msg">slot msg</div>
    </s-alert>

    <s-alert
      positive
      header="Cadastro realizado com sucesso"
      msg="Você completou mais uma etapa e agora pode dar continuidade ao processo."
    />

    <s-alert
      negative
      header="CPF/CNPJ ou senha inválidos"
      msg="Fique atento! Caso erre novamente, sua conta será bloqueada e será necessário redefinir a senha."
    />
  </div>
</template>

<script>
import SAlert from '../../../src/components/SAlert/Index.vue'

export default {
  components: { SAlert }
}
</script>

<style lang="scss">
.s-alert-example > .s-alert { margin-bottom: 60px; }
</style>
