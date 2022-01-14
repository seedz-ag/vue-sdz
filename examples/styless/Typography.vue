<template>
  <div class="typography">
    <s-typography class="title-1" title="Typography" />

    <p class="subtitle">
      A tipografia transmite nossas definições para o uso apropriado em textos e deve ser usada de acordo com a hierarquia dos elementos na interface.
    </p>

    <s-typography class="title-2" title="Font Family" />
    <s-box>
      <span>Montserrat</span>
    </s-box>

    <s-typography class="title-2" title="Font Weight" />
    <s-box>
      <b>Bold</b>
      <br>
      Regular
    </s-box>

    <s-typography class="title-2" title="Heading" />
    <p class="subtitle">
      Os Heading e Subtitles possuem responsividade, ou seja, os tamanhos das fontes mudam de acordo com os breakpoints. A tabela abaixo mostra os tamanhos em pixels desses dois componentes para as versões desktop e seus tamanhos correspondentes para a versão mobile. Em Paragraph e Caption os valores são mantidos em ambas as versões.
    </p>

    <s-box>
      <s-typography class="h1" title="Heading Display" />
      <br>
      <s-typography class="h2" title="Heading X-Large" />
      <br>
      <s-typography class="h3" title="Heading Large" />
      <br>
      <s-typography class="h4" title="Heading Medium" />
      <br>
      <s-typography class="h5" title="Heading Small" />
      <br>
      <s-typography class="h6" title="Heading X-Small" />
      <br>
      <s-typography class="subtitle-1" title="Subtitle Large" />
      <br>
      <s-typography class="subtitle-2" title="Subtitle Small" />
    </s-box>

    <pre-code :code="code1" />

    <s-typography class="title-2" title="Paragraph" />
    <s-box>
      <s-typography class="paragraph-1" title="Paragraph Large" />
      <br>
      <s-typography class="paragraph-2" title="Paragraph Small" />
      <br>
      <s-typography class="caption" title="Caption" />
    </s-box>

    <pre-code :code="code2" />
  </div>
</template>

<script>
import SBox from '../commons/box.vue'
import STypography from '../commons/typography.vue'
import PreCode from '../components/PreCode/Index.vue'

export default {
  components: { SBox, STypography, PreCode },

  data () {
    return {
      code1:`
        <s-typography class="h1" title="Heading Display" />

        <s-typography class="h2" title="Heading X-Large" />

        <s-typography class="h3" title="Heading Large" />

        <s-typography class="h4" title="Heading Medium" />

        <s-typography class="h5" title="Heading Small" />

        <s-typography class="h6" title="Heading X-Small" />

        <s-typography class="subtitle-1" title="Subtitle Large" />

        <s-typography class="subtitle-2" title="Subtitle Small" />
      `,

      code2:`
        <s-typography class="paragraph-1" title="Paragraph Large" />

        <s-typography class="paragraph-2" title="Paragraph Small" />

        <s-typography class="caption" title="Caption" />
      `
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.typography{
  & > .s-box > table {
    & > tr {
      & > td {
        padding: 10px;
        border: 1px solid #000;
        width: 25%;
        text-align: center;
      }
    }
  }
}
</style>
