<template>
  <div class="s-collapsible-example">
    <!-- <source-code file="SCollapsibleExample" comp="SCollapsible">
      <s-button class="header" slot="header">header toggle</s-button>
      <div v-html="content" />
    </source-code> -->

    <s-title size="title-1">Collapse</s-title>
    <s-box class="flex-inline flex-center">
      <s-button outlined @click="decrease()">decrease content</s-button>
      <s-button outlined @click="increased()">increase content</s-button>

      <s-collapsible :is-opened="isOpened1" @toggle="v => isOpened1 = v">
        <s-button primary class="header" slot="header">header toggle</s-button>

        <s-button v-for="btn in btns" :key="btn">{{ btn }}</s-button>
      </s-collapsible>
    </s-box>

    <!-- <s-title size="title-1">Collapse (no header)</s-title>
    <s-box class="flex-inline flex-center">
      <s-button outlined @click="increased()">increase content</s-button>

      <s-button primary @click.native="isOpened3 = !isOpened3">toggle</s-button>
      <s-collapsible no-header :is-opened="isOpened3">
        <div v-html="content" />
      </s-collapsible>
    </s-box>

    <s-title size="title-1">Collapse Without Header</s-title>
    <s-box class="flex-inline flex-center">
      <s-button primary outlined @click="increased()">increase content</s-button>

      <s-button primary @click="isOpened2 = !isOpened2">header toggle</s-button>
      <s-collapsible no-header :is-opened="isOpened2" @toggle="v => isOpened2 = v">
        <s-button primary class="header" slot="header">header toggle</s-button>

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

      <s-button primary @click.native="isOpened4 = !isOpened4">toggle</s-button>
      <s-collapsible outside-closable :is-opened="isOpened4">
        <div v-html="content" />
      </s-collapsible>
    </s-box> -->
  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'
// import SSelect from '../../../src/components/SSelect/Index.vue'
import SCollapsible from '../../../src/components/SCollapsible/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
// import SourceCode from '../SourceCode/Index.vue'

export default {
  name: 'SCollapsibleExample',

  components: {
    SButton,
    // SSelect,
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
      btnCount: 1,
      btns: [1],
      items: [
        { slug: 'item 1', name: 'name item 1' },
        { slug: 'item 2', name: 'name item 2' },
        { slug: 'item 22', name: 'name item 22' },
        { slug: 'item 3', name: 'name item 3' },
        { slug: 'item 4', name: 'name item 4' },
        { slug: 'item 5', name: 'name item 5' },
        { slug: 'item 6', name: 'name item 6' },
      ],
      data1: { slug: 'item 3', name: 'name item 3' }
    }
  },

  created () {

  },

  methods: {
    increased () {
      this.btnCount++
      this.btns.push(this.btnCount)
    },

    decrease () {
      this.btns = this.btns.filter(b => b !== this.btnCount)
      this.btnCount--
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
      flex-wrap: nowrap;
      width: 145px;
      border: 1px solid black;
    }
  }

}
</style>
