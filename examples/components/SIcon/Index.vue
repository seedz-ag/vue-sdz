<template>
  <div class="s-icon-example">
    <s-title class="h1" title="Icons" />

    <p class="subtitle">
      Nossa biblioteca de ícones foi criada a partir da biblioteca open source Feather Icons com alguns exclusivos criados para a plataforma.
    </p>

    <s-box>
      <div class="box-icons flex-inline">
        <div class="icons">
          <s-icon disabled icon="sdz-key" size="40" /> <span>disabled</span>
        </div>

        <br>

        <div v-for="icon in icons" :key="icon" class="icons">
          <s-icon :icon="icon" size="40" />

          <span>{{ icon }}</span>
        </div>
      </div>
    </s-box>
  </div>
</template>

<script>
import '../../../node_modules/sdz-icons/index.css'
import SIcon from '../../../src/components/SIcon/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

export default {
  components: { SIcon, SBox, STitle },

  data () {
    return {
      icons: [
        'sdz-share',
        'sdz-divide',
        'sdz-key',
        'sdz-rotate-cw',
        'sdz-shield-off',
        'sdz-dollar-sign',
        'sdz-lock',
        'sdz-percent',
        'sdz-link',
        'sdz-shield',
        'sdz-instagram',
        'sdz-minus-circle',
        'sdz-life-buoy',
        'sdz-refresh-ccw',
        'sdz-repeat',
        'sdz-info',
        'sdz-help-circle',
        'sdz-calendar',
        'sdz-chat',
        'sdz-cart',
        'sdz-alert-triangle',
        'sdz-zendesk',
        'sdz-whatsapp',
        'sdz-users',
        'sdz-user',
        'sdz-star',
        'sdz-share-2',
        'sdz-search',
        'sdz-printer',
        'sdz-picture',
        'sdz-map-pin',
        'sdz-map',
        'sdz-mail',
        'sdz-home',
        'sdz-heart',
        'sdz-gear',
        'sdz-filter',
        'sdz-eye-off',
        'sdz-eye',
        'sdz-download',
        'sdz-credit-card',
        'sdz-close',
        'sdz-clock',
        'sdz-chevron-up',
        'sdz-chevron-down',
        'sdz-check-circle',
        'sdz-check',
        'sdz-bell',
        'sdz-arrow-left',
      ]
    }
  }
}
</script>

<style lang="scss">
.s-icon-example {
  display: flex;
  flex-direction: column;

  & > .s-box{

    & > .flex-inline{
      flex-flow: wrap;
    }

    & > .box-icons{
      width: 90%;

      & > .icons {
        display: flex;
        align-items: center;
        width: 33%;

        & > .s-icon { padding: 10px;}
        & > span { margin-left: 10px; }
      }
    }
  }


}
</style>


