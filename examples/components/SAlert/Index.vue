<template>
  <div class="s-alert-example">
    <h1 class="h1">Alerts</h1>

    <h2 class="h2">Default</h2>
    <div class="box">
      <s-alert positive>
        <div slot="header">Titulo do Alerta Positivo</div>
        <div slot="msg">Mensagem do alerta positivo</div>
      </s-alert>
      <br>
      <s-alert
        negative
        header="Titulo do Alerta Negativo"
        msg="Mensagem do alerta negativo"
      />
    </div>

    <h2 class="h2">Examples</h2>
    <div class="box">
      <s-alert
        positive
        header="Cadastro realizado com sucesso"
        msg="Você completou mais uma etapa e agora pode dar continuidade ao processo."
      />
      <br>
      <s-alert
        negative
        header="CPF/CNPJ ou senha inválidos"
        msg="Fique atento! Caso erre novamente, sua conta será bloqueada e será necessário redefinir a senha."
      />
    </div>
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
