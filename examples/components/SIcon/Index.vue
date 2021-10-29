<template>
  <div class="s-icon-example">
    <s-icon v-for="icon in icons" :key="icon" :icon="icon" size="40" />
  </div>
</template>

<script>
import '../../../node_modules/sdz-icons/index.css'
import SIcon from '../../../src/components/SIcon/Index.vue'

export default {
  components: { SIcon },

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
.s-icon-example > .s-icon { padding: 20px; }
</style>


