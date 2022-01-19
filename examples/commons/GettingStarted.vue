<template>
  <div class="container getting-started">
    <div class="banner block">
      <div class="text">
        <s-title size="hxl">Planting the seedz of a Better World</s-title>
        <s-title size="sub-s">O <b>SDZ</b> é o Design System da <b>seedz</b> e foi plantado para crescer de forma flexível, escalável, eficiente e permanecer vivo para suporte co-branding.</s-title>
      </div>
      <div class="image">
        <img src="../../src/assets/images/getting-start.png">
      </div>
    </div>
    <div class="shortcut block">
      <div class="short">
        <s-title size="hs">Sobre</s-title>
        <p class="sm">O <b>SDZ</b> é o Design System da <b>seedz</b> e foi plantado para crescer de forma flexível, escalável, eficiente e permanecer vivo para suporte co-branding.</p>
        <s-button link @click.native="documentacao">Ler Guidelines</s-button>
      </div>
      <div class="short">
        <s-title size="hs">Design Tokens</s-title>
        <p class="sm">O <b>SDZ</b> é o Design System da <b>seedz</b> e foi plantado para crescer de forma flexível, escalável, eficiente e permanecer vivo para suporte co-branding.</p>
        <s-button link @click.native="documentacao">Ver Tokens</s-button>
      </div>
      <div class="short">
        <s-title size="hs">Componentes</s-title>
        <p class="sm">O <b>SDZ</b> é o Design System da <b>seedz</b> e foi plantado para crescer de forma flexível, escalável, eficiente e permanecer vivo para suporte co-branding.</p>
        <s-button link @click.native="documentacao">Ver Componentes</s-button>
      </div>
    </div>
  </div>
</template>

<script>
import STitle from '../commons/title.vue'

export default {
  components: { STitle }
}
</script>

<style lang="scss">
@import "../../src/styles/_index.scss";

.container.getting-started {
  padding: 50px 0 !important;
  flex-direction: column !important;

  & > .block {
    width: 100%;
    max-width: unset;
    padding: 75px 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > .banner {
    background: color(positive, light);
    margin-top: 235px;

    & > .text {
      width: 40%;
      margin-right: 20px;

      .s-title{
        color: color(primary, light);
        margin-bottom: 25px;
      }
    }

    & > .image {
      width: 40%;
    }
  }

  .shortcut{
    display: flex;
    width: 100%;

    .short{
      width: 26%;

      & > .s-title {
        color: color(primary, light);
        margin-bottom: 20px;
      }

      & > .sm {
        margin-bottom: 20px;
      }

      & > s-button {
        color: color(primary, light);
        font-weight: 500;
        cursor: pointer;
      }
    }

    .short:not(:last-child) {
      margin-right: 30px;
    }
  }
}

</style>
