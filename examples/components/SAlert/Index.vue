<template>
  <div class="s-alert-example">
    <s-typography class-title="h1" title="Alerts" />

    <source-code file="SAlertExample" comp="SAlert" />

    <s-typography class-title="h2" title="Default" />
    <s-box>
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
    </s-box>

    <s-typography class-title="h2" title="Examples" />
    <s-box>
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
    </s-box>
  </div>
</template>

<script>
import SAlert from '../../../src/components/SAlert/Index.vue'
import SBox from '../../commons/box.vue'
import STypography from '../../commons/typography.vue'
import SourceCode from '../SourceCode/Index.vue'

export default {
  components: { SAlert, SBox, STypography, SourceCode }
}
</script>

<style lang="scss">
.s-alert-example > .s-alert { margin-bottom: 60px; }
</style>
