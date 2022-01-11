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

    <pre-code :code="code" />
  </div>
</template>

<script>
import '../../../node_modules/sdz-icons/index.css'
import SIcon from '../../../src/components/SIcon/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SIcon, SBox, STitle, PreCode },

  data () {
    return {
      code: '<s-icon :icon="sdz-zeedz" size="40" />',
      icons: [
        'sdz-alert-triangle',
        'sdz-zoom-out',
        'sdz-zoom-in',
        'sdz-zendesk',
        'sdz-zeedz',
        'sdz-youtube',
        'sdz-whatsapp',
        'sdz-users',
        'sdz-user',
        'sdz-upload-cloud',
        'sdz-upload',
        'sdz-unlock',
        'sdz-truck',
        'sdz-triple-dots-v',
        'sdz-television',
        'sdz-suitcase',
        'sdz-star',
        'sdz-smartphone',
        'sdz-sliders',
        'sdz-slash',
        'sdz-shield-off',
        'sdz-shield',
        'sdz-share_1',
        'sdz-share',
        'sdz-seedz',
        'sdz-search',
        'sdz-scan-bar-code',
        'sdz-rotate-cw',
        'sdz-repeat',
        'sdz-refresh-ccw',
        'sdz-printer',
        'sdz-picture',
        'sdz-percent',
        'sdz-painting-roller',
        'sdz-package',
        'sdz-more-vertical',
        'sdz-more-horizzontal',
        'sdz-monitor',
        'sdz-minus-circle',
        'sdz-megaphone',
        'sdz-map-pin',
        'sdz-map',
        'sdz-mail',
        'sdz-log-out',
        'sdz-log-in',
        'sdz-login',
        'sdz-lock',
        'sdz-linkedin',
        'sdz-link',
        'sdz-life-buoy',
        'sdz-laptop',
        'sdz-key',
        'sdz-instagram',
        'sdz-info',
        'sdz-home',
        'sdz-help-circle',
        'sdz-heart',
        'sdz-globe',
        'sdz-gear',
        'sdz-folder',
        'sdz-filter',
        'sdz-file-text',
        'sdz-facebook',
        'sdz-eye-off',
        'sdz-eye',
        'sdz-download-cloud',
        'sdz-download_1',
        'sdz-download',
        'sdz-dollar-sign',
        'sdz-divide',
        'sdz-crossair',
        'sdz-credit-card',
        'sdz-copy',
        'sdz-close',
        'sdz-clock',
        'sdz-chevron-up',
        'sdz-chevron-right',
        'sdz-chevron-left',
        'sdz-chevron-down',
        'sdz-check-circle',
        'sdz-check',
        'sdz-chat',
        'sdz-cart',
        'sdz-calendar',
        'sdz-box',
        'sdz-book-open',
        'sdz-bell',
        'sdz-bar-code',
        'sdz-arrow-left',
        'sdz-archive',
        'sdz-store'
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


