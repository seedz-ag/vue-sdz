<template>
  <div class="breakpoints">
    <s-title class="h1" title="Breakpoints" />

    <p class="subtitle">
      Os breakpoints são paradas que o código faz em cada ponto do código de acordo com a resolução
      da tela que acessa a aplicação. São os breakpoints que tornam o responsívo possível.
    </p>

    <p class="subtitle">
      Mixins serão utilizados no CSS para controlar os breakpoints, que foram divididos em:
      small mobile, mobile, tablet e desktop. Veja abaixo os exemplos:
    </p>

    <s-box>
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
      code1:`
      $breakpoints: (
        xs-mobile:  0px,
        mobile: 576px,
        tablet:  992px,
        desktop: 1200px
      );

      @mixin xs-mobile {
        @media only screen and (max-width: #{map-get($breakpoints, mobile) - 1px}) { @content; }
      }

      @mixin mobile {
        @media only screen and (min-width: #{map-get($breakpoints, mobile)})
          and (max-width: #{map-get($breakpoints, tablet) - 1px}) { @content; }
      }

      @mixin tablet {
        @media only screen and (min-width: #{map-get($breakpoints, tablet)})
          and (max-width: #{map-get($breakpoints, desktop) - 1px}) { @content; }
      }

      @mixin desktop {
        @media only screen and (min-width: #{map-get($breakpoints, desktop)}) { @content; }
      }

      @mixin responsive ($media1, $media2) {
        @if $media1 == xs-mobile and $media2 == mobile {
          @media only screen and (max-width: #{map-get($breakpoints, tablet) - 1px})
          { @content; }
        } @else if $media1 == xs-mobile and $media2 == tablet {
          @media only screen and (max-width: #{map-get($breakpoints, desktop) - 1px})
          { @content; }
        } @else if $media1 == mobile and $media2 == tablet {
          @media only screen and (min-width: #{map-get($breakpoints, mobile)})
            and (max-width: #{map-get($breakpoints, desktop) - 1px}) { @content; }
        } @else if $media1 == mobile and $media2 == desktop {
          @media only screen and (min-width: #{map-get($breakpoints, mobile)})
          { @content; }
        } @else if  $media1 == tablet and $media2 == desktop {
          @media only screen and (min-width: #{map-get($breakpoints, tablet)})
          { @content; }
        }
      }`
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
