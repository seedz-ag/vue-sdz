<template>
  <div class="s-tabber-example">
    <s-title class="h1" title="Tabber" />
    <s-box>
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
    </s-box>
  </div>
</template>

<script>
import STabber from '../../../src/components/STabber/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

export default {
  components: { STabber, SBox, STitle },

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
.s-tabber.-alternative {margin-top: 30px}
</style>
