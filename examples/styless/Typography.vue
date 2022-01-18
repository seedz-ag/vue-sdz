<template>
  <div class="typography">
    <s-title size="title-1">Typography</s-title>

    <p class="subtitle">
      A tipografia transmite nossas definições para o uso apropriado em textos e deve ser usada de acordo com a hierarquia dos elementos na interface.
    </p>

    <s-title size="title-2">Font Family</s-title>
    <s-box>
      <span>Montserrat</span>
    </s-box>

    <s-title size="title-2">Font Weight</s-title>
    <s-box>
      <b>Bold</b>
      <br>
      Regular
    </s-box>

    <s-title size="title-2">Heading</s-title>
    <p class="subtitle">
      Os Heading e Subtitles possuem responsividade, ou seja, os tamanhos das fontes mudam de acordo com os breakpoints. A tabela abaixo mostra os tamanhos em pixels desses dois componentes para as versões desktop e seus tamanhos correspondentes para a versão mobile. Em Paragraph e Caption os valores são mantidos em ambas as versões.
    </p>

    <s-box>
      <s-title size="hd">Heading Display</s-title>
      <br>
      <s-title size="hxl">Heading X-Large</s-title>
      <br>
      <s-title size="hl">Heading Large</s-title>
      <br>
      <s-title size="hm">Heading Medium</s-title>
      <br>
      <s-title size="hs">Heading Small</s-title>
      <br>
      <s-title size="hxs">Heading X-Small</s-title>
      <br>
      <s-title size="sub-l">Subtitle Large</s-title>
      <br>
      <s-title size="sub-s">Subtitle Small</s-title>
    </s-box>

    <pre-code :code="code1" />

    <s-title size="title-2">Paragraph</s-title>
    <s-box>
      <p>Paragraph Large</p>
      <br>
      <p class="small">Paragraph Small</p>
      <br>
      <caption>Caption</caption>
    </s-box>

    <pre-code :code="code2" />
  </div>
</template>

<script>
import SBox from '../commons/box.vue'
import STitle from '../commons/title.vue'
import PreCode from '../components/PreCode/Index.vue'

export default {
  components: { SBox, STitle, PreCode },

  data () {
    return {
      code1:`
        <s-title size="hd">Heading Display</s-title>

        <s-title size="hxl">Heading X-Large</s-title>

        <s-title size="hl">Heading Large</s-title>

        <s-title size="hm">Heading Medium</s-title>

        <s-title size="hs">Heading Small</s-title>

        <s-title size="hxs">Heading X-Small</s-title>

        <s-title size="sub-l">Subtitle Large</s-title>

        <s-title size="sub-s">Subtitle Small</s-title>
      `,
      code2:`
        <p>Paragraph Large</p>

        <p class="small">Paragraph Small</p>

        <caption>Caption</caption>
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
