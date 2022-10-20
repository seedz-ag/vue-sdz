<template>
  <div class="s-button-example">
    <s-title size="title-1">Links</s-title>

    <p class="subtitle">
      Links são elementos clicáveis que destacam-se no fluxo. São usados principalmente para navegação entre elementos ou páginas.
    </p>

    <s-title size="title-2">Quando usar</s-title>

    <p class="subtitle">
      Podem aparecer no fim de um bloco de texto;
    </p>
    <p class="subtitle">
      Podem ser aplicados em contextos onde existe uma ação de menor peso;
    </p>
    <p class="subtitle">
      Aplicamos os links também em rodapés ou para indicar termos de uso;
    </p>

    <s-title size="title-2">Quando não usar</s-title>

    <p class="subtitle">
      Não devem ser usados para destacar uma ação importante como “Adicionar”, “Fechar”, “Cancelar” ou “Salvar”, nesse contexto utiliza-se o componente button;
    </p>

    <source-code file="SLinkExample" comp="SButton" />

    <s-title size="title-2">Application</s-title>
    <s-box>
      Lorem ipsum dolor sit amet, consectetur <s-button link>Link Button</s-button> elit. Ut id molestie sem. Aenean ac elementum nisl, id ullamcorper ipsum. In malesuada feugiat ante, et <s-button link>Link Button</s-button> lectus pellentesque quis. Nulla odio massa, suscipit et enim eget, cursus auctor ex. Cras quis viverra diam. Phasellus cursus tristique mattis. Ut viverra enim nec nisl efficitur posuere.
    </s-box>

    <s-title size="title-2">Default</s-title>
    <s-box class="flex-line flex-center">
      <s-button link external to="https://www.google.com">link external</s-button>
      <br>
      <s-button link to="https://www.google.com">link route</s-button>
      <br>
      <s-button link icon="ant-design:tool-outlined" secondary-icon-color to="https://www.google.com">link icon</s-button>
    </s-box>

    <pre-code :code="code1" />

    <s-title size="title-2">White Mode</s-title>
    <s-box class="flex-line flex-center box-dark">
      <s-button white link external to="https://www.google.com">link external</s-button>
      <br>
      <s-button white link to="https://www.google.com">link route</s-button>
      <br>
      <s-button white link icon="ant-design:tool-outlined" secondary-icon-color to="https://www.google.com">link icon</s-button>
    </s-box>

    <pre-code :code="code2" />
  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SourceCode from '../SourceCode/Index.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SButton, SBox, STitle, SourceCode, PreCode },
  data () {
    return {
      code1: `<s-button link external to="https://www.google.com">link external</s-button>

      <s-button link to="https://www.google.com">link route</s-button>

      <s-button link icon="ant-design:tool-outlined" secondary-icon-color to="https://www.google.com">link icon</s-button>

      <s-button link disabled>link disabled</s-button>

      <s-button link icon="ant-design:tool-outlined" disabled>link icon disabled</s-button>`,
      code2: `<s-button dark link external to="https://www.google.com">link external</s-button>

      <s-button dark link to="https://www.google.com">link route</s-button>

      <s-button dark link icon="ant-design:tool-outlined" secondary-icon-color to="https://www.google.com">link icon</s-button>`
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-button-example {
  & > .s-button { margin-bottom: 30px; }
  & > .flex-center { align-items: center; }
}

.flex-inline .c-link.s-button{
  margin-right: 15px;
  margin-top: 10px;
}

.box-dark{
  background: color(primary, base)
}
</style>
