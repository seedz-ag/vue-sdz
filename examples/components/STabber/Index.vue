<template>
  <div class="s-tabber-example">
    <h1 class="h1">Tabber</h1>
    <div class="box">
      <s-tabber
        :tabs="tabs"
        :active-tab="activeTab"
        @change-tab="tab => activeTab = tab"
      />

      <s-tabber
        alternative
        :tabs="tabs"
        :active-tab="activeTab"
        @change-tab="tab => activeTab = tab"
      />
    </div>
  </div>
</template>

<script>
import STabber from '../../../src/components/STabber/Index.vue'

export default {
  components: { STabber },

  data () {
    return {
      activeTab: 'seumadruga',
      tabs: [
        { name: 'Chaves', value: 'chaves', icon: 'sdz-share' },
        { name: 'Seu Madruga', value: 'seumadruga', icon: 'sdz-divide' },
        { name: 'Nhonho', value: 'nhonho', icon: 'sdz-key', disabled: true },
        { name: 'Quico', value: 'quico', icon: 'sdz-key' }
      ]
    }
  }
}
</script>

<style lang="scss">
.s-tabber-example > .s-tabber { margin-bottom: 60px; }
</style>
