<template>
  <div class="s-tabber-example">
    <s-title size="title-1">Tabber</s-title>
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
    <pre-code :code="code" />
  </div>
</template>

<script>
import STabber from '../../../src/components/STabber/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { STabber, SBox, STitle, PreCode },

  data () {
    return {
      code: `
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
      />`,
      activeTab: 'seumadruga',
      tabs: [
        { name: 'Chaves', value: 'chaves', icon: 'ant-design:tool-outlined' },
        { name: 'Seu Madruga', value: 'seumadruga', icon: 'ant-design:tool-outlined' },
        { name: 'Nhonho', value: 'nhonho', icon: 'ant-design:tool-outlined', disabled: true },
        { name: 'Quico', value: 'quico', icon: 'ant-design:tool-outlined' },
        { name: 'Dona florinda', value: 'donaflorinda', icon: 'ant-design:tool-outlined' },
        { name: 'Chiquinha', value: 'Chiquinha', icon: 'ant-design:tool-outlined' }
      ]
    }
  }
}
</script>

<style lang="scss">
.s-tabber-example > .s-tabber { margin-bottom: 60px; }
.s-tabber.-alternative {margin-top: 30px}
</style>
