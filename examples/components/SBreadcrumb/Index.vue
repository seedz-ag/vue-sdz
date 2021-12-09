<template>
  <div class="s-progressbar-example flex-line">
    <s-title class="h1" title="Breadcrumbs" />

    <p class="subtitle">
      Breadcrumbs são os indicadores que representam o caminho percorrido pelo visitante dentro de uma navegação.
    </p>
    <s-title class="h2" title="Regras de aplicação" />
    <p class="subtitle">
      Não utilizar link para a página atual em que o usuário está;
    </p>
    <p class="subtitle">
      Utilizar links somente para as páginas parent e sub-parent;
    </p>
    <p class="subtitle">
      Na versão On Color, deve-se utilizar os links com sublinhado.
    </p>

    <s-box class="flex-inline flex-center">
      <s-progressbar percent="width: 1%" />
      <s-progressbar percent="width: 50%" />
      <s-progressbar percent="width: 100%" />
    </s-box>
  </div>
</template>

<script>
import SProgressbar from '../../../src/components/SProgressbar/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

export default {
  components: { SProgressbar, SBox, STitle }
}
</script>

<style lang="scss">
.s-progressbar-example {
  display: flex;
  justify-content: center;

  & > .s-box{
    & > .s-progressbar{
      margin-bottom: 15px;
    }
  }

}
</style>
