<template>
  <div class="s-collapsible-example">
    <!-- <source-code file="SCollapsibleExample" comp="SCollapsible">
      <s-button class="header" slot="header">header toggle</s-button>
      <div v-html="content" />
    </source-code> -->

    <s-title size="title-1">Collapse</s-title>
    <s-box class="flex-inline flex-center">
      <s-button outlined @click="increased()">increase content</s-button>

      <s-collapsible outside-closable :is-opened="isOpened1" @toggle="v => isOpened1 = v">
        <s-button class="header" slot="header">header toggle</s-button>

        <div v-html="content" />
      </s-collapsible>
    </s-box>

    <s-title size="title-1">Collapse (no header)</s-title>
    <s-box class="flex-inline flex-center">
      <s-button outlined @click="increased()">increase content</s-button>

      <s-button @click.native="isOpened3 = !isOpened3">toggle</s-button>
      <s-collapsible no-header :is-opened="isOpened3">
        <div v-html="content" />
      </s-collapsible>
    </s-box>

    <s-title size="title-1">Collapse Without Header</s-title>
    <s-box class="flex-inline flex-center">
      <s-button outlined @click="increased()">increase content</s-button>

      <s-button @click="isOpened2 = !isOpened2">header toggle</s-button>
      <s-collapsible no-header :is-opened="isOpened2" @toggle="v => isOpened2 = v">
        <s-button class="header" slot="header">header toggle</s-button>

        <div class="item">11111</div>
        <div class="item">22222</div>
        <div class="item">33333</div>
        <div class="item">44444</div>
        <div class="item">55555</div>
      </s-collapsible>
    </s-box>

    <s-title size="title-1">Collapse (outsideClosable)</s-title>
    <s-box class="flex-inline flex-center">
      <s-button outlined @click="increased()">increase content</s-button>

      <s-button @click.native="isOpened4 = !isOpened4">toggle</s-button>
      <s-collapsible outside-closable :is-opened="isOpened4">
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
// import SourceCode from '../SourceCode/Index.vue'

export default {
  name: 'SCollapsibleExample',

  components: {
    SButton,
    SCollapsible,
    SBox,
    STitle,
    // SourceCode
  },

  data () {
    return {
      isOpened1: false,
      isOpened2: false,
      isOpened3: false,
      isOpened4: false,
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
