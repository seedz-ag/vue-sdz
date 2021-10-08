<template>
  <div class="s-collapsible-example">
    <s-button outlined @click="inscreaseContent()">increase content</s-button>

    <s-collapsible :is-opened="isOpened" @toggle="v => isOpened = v">
      <s-button class="header" slot="header">header toggle</s-button>

      <div v-html="content" />
    </s-collapsible>
  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'
import SCollapsible from '../../../src/components/SCollapsible/Index.vue'

export default {
  name: 'SCollapsibleExample',

  components: { SButton, SCollapsible },

  data () {
    return {
      isOpened: true,
      content: 'aaaaaaaaa'
    }
  },

  methods: {
    inscreaseContent () {
      this.content = this.content + '<br /> inscreased...'
    }
  }
}
</script>


<style lang="scss">
.s-collapsible-example {
  & > .s-button {
    margin: 0 auto;
    margin-bottom: 50px;
  }

  & > .s-collapsible > .wrapper {
    margin-top: 5px;
    border: 1px solid black;
  }
}
</style>
