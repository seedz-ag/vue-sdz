<template>
  <div class="s-breadcrumb-example flex-line">
    <s-typography class="title-1" title="Breadcrumbs" />

    <p class="subtitle">
      Breadcrumbs são os indicadores que representam o caminho percorrido pelo visitante dentro de uma navegação.
    </p>
    <s-typography class="title-2" title="Regras de aplicação" />
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
      <s-breadcrumb color="light" :items="items" />
    </s-box>

    <s-box class="flex-inline flex-center color-dark">
      <s-breadcrumb color="dark" :items="items" />
    </s-box>
    <pre-code :code="code" />
  </div>
</template>

<script>
import SBreadcrumb from '../../../src/components/SBreadcrumb/Index.vue'
import SBox from '../../commons/box.vue'
import STypography from '../../commons/typography.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SBreadcrumb, SBox, STypography, PreCode },

  data () {
    return {
      code:`
      <s-breadcrumb color="light" :items="[
        {
          disabled: true,
          current: false,
          text: 'Parent Page',
          to: '#',
          external: false
        },
        {
          disabled: true,
          current: false,
          text: 'Sub-Parent Page',
          to: '#',
          external: false
        }]" />

      <s-breadcrumb color="dark" :items="[
        {
          disabled: true,
          current: false,
          text: 'Parent Page',
          to: '#',
          external: false
        },
        {
          disabled: true,
          current: false,
          text: 'Sub-Parent Page',
          to: '#',
          external: false
        }]" />`,
      items: [
        {
          disabled: true,
          current: false,
          text: 'Parent Page',
          to: '#',
          external: false
        },
        {
          disabled: true,
          current: false,
          text: 'Sub-Parent Page',
          to: '#',
          external: false
        },
        {
          disabled: true,
          current: false,
          text: 'Sub-Parent Page',
          to: '#',
          external: false
        },
        {
          disabled: true,
          current: true,
          text: 'Parent Page',
          to: '',
          external: false
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-breadcrumb-example {
  display: flex;
  justify-content: center;

  & > .s-box.color-dark{
    background: color(primary, base);
  }
}
</style>
