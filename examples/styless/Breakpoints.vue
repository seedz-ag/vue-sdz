<template>
  <div class="breakpoints">
    <s-title size="title-1">Breakpoints</s-title>

    <p class="subtitle">
      Os breakpoints são paradas que o código faz em cada ponto do código de acordo com a resolução
      da tela que acessa a aplicação. São os breakpoints que tornam o responsívo possível.
    </p>

    <p class="subtitle">
      Mixins serão utilizados no CSS para controlar os breakpoints, que foram divididos em:
      small mobile, mobile, tablet e desktop. Veja abaixo os exemplos:
    </p>

    <s-box>
      <!-- TO DO - Component Table -->
      <table>
        <tr>
          <td><b>Small Mobile</b></td>
          <td><b>Mobile</b></td>
          <td><b>Tablet</b></td>
          <td><b>Desktop</b></td>
        </tr>
        <tr>
          <td>Até 575px</td>
          <td>Até 991px</td>
          <td>Até 1999px</td>
          <td>Até 1200px</td>
        </tr>
      </table>
    </s-box>

    <pre-code :code="code1" />
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
      code1: `
        @include mobile { ... }
        @include tablet { ... }
        @include desktop { ... }
        @include responsive(x, ) { ... }

        .examples{
          padding: 10px;
          @include tablet { padding: 15px; }
          @include desktop { padding: 20px; }
        }
      `
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.breakpoints{
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
