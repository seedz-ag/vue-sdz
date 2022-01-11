<template>
  <div class="s-collapsible-example">
    <s-title class="h1" title="Collapse" />

    <source-code file="SCollapsibleExample" comp="SCollapsible">
      <s-button class="header" slot="header">header toggle</s-button>
      <div v-html="content" />
    </source-code>

    <s-box class="flex-inline flex-center">
      <s-button outlined @click="increased()">increase content</s-button>

      <s-collapsible :is-opened="isOpened" @toggle="v => isOpened = v">
        <s-button class="header" slot="header">header toggle</s-button>

        <div v-html="content" />
      </s-collapsible>
    </s-box>
  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'
import SCollapsible from '../../../src/components/SCollapsible/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SourceCode from '../SourceCode/Index.vue'

export default {
  name: 'SCollapsibleExample',

  components: { SButton, SCollapsible, SBox, STitle, SourceCode },

  data () {
    return {
      isOpened: true,
      content: 'initial content!'
    }
  },

  methods: {
    increased () {
      this.content = this.content + '<br /> dynamic content...'
    }
  }
}
</script>


<style lang="scss">
.s-collapsible-example {
  & > .s-box{
    & > .s-button {
      margin-bottom: 50px;
      margin-right: 20px;
    }

    & > .s-collapsible > .wrapper {
      margin-top: 5px;
      border: 1px solid black;
    }
  }

}
</style>
