<template>
  <div class="s-button-example">
    <s-title size="title-1">Buttons</s-title>

    <source-code file="SButtonExample" comp="SButton">Example</source-code>

    <s-title size="title-2">Stats</s-title>
    <s-box>
      <div class="flex-inline">
        <s-button primary>primary</s-button>
        <s-button success>primary</s-button>
        <s-button error>primary</s-button>
        <s-button loading>loading</s-button>
        <s-button disabled>disabled</s-button>
        <s-button link>link button</s-button>
      </div>
      <br><br>
      <div class="flex-line">
        <s-button full-width>full-width</s-button>
      </div>
    </s-box>

    <pre-code :code="code1" />

    <s-title size="title-2">Sizes</s-title>

    <s-box class="flex-inline">
      <s-button small>small</s-button>
      <s-button default>default</s-button>
      <s-button large>large</s-button>
    </s-box>

    <pre-code :code="code2" />

    <s-title size="title-2">Outlined</s-title>

    <s-box class="flex-inline">
      <s-button outlined>outlined</s-button>
      <s-button outlined disabled>outlined disabled</s-button>
      <s-button outlined icon="sdz-check">outlined icon</s-button>
      <s-button outlined icon="sdz-check" disabled>outlined disabled icon</s-button>
    </s-box>

    <pre-code :code="code3" />

    <s-title size="title-2">Rounded</s-title>
    <s-box class="flex-inline">
      <s-button rounded>outlined</s-button>
      <s-button rounded disabled>rounded disabled</s-button>
      <s-button rounded icon="sdz-check">rounded icon</s-button>
      <s-button rounded icon="sdz-check" disabled>rounded disabled icon</s-button>
    </s-box>

    <pre-code :code="code4" />

    <s-title size="title-2">Transparent + outlined + white</s-title>
    <s-box class="transparent-box">
      <s-button transparent outlined white>icon</s-button>
    </s-box>
  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SourceCode from '../SourceCode/Index.vue'
import PreCode from '../PreCode/Index.vue'

export default {
  components: { SButton, SBox, STitle, SourceCode, PreCode },
  data () {
    return {
      code1: `<div class="flex-inline">
        <s-button primary>primary</s-button>
        <s-button grey>Secondary</s-button>
        <s-button loading>loading</s-button>
        <s-button disabled>disabled</s-button>
        <s-button link>link button</s-button>
      </div>

      <div class="flex-line">
        <s-button full-width>full-width</s-button>
      </div>`,
      code2: `<s-button small>small</s-button>
      <s-button default>default</s-button>
      <s-button large>large</s-button>`,
      code3: `<s-button outlined>outlined</s-button>
      <s-button outlined disabled>outlined disabled</s-button>
      <s-button outlined icon="sdz-check">outlined icon</s-button>
      <s-button outlined icon="sdz-check" disabled>outlined disabled icon</s-button>`,
      code4: `<s-button rounded>outlined</s-button>
      <s-button rounded disabled>rounded disabled</s-button>
      <s-button rounded icon="sdz-check">rounded icon</s-button>
      <s-button rounded icon="sdz-check" disabled>rounded disabled icon</s-button>`,
    }
  }
}
</script>

<style lang="scss">
.s-button-example {
  & > .s-button { margin-bottom: 30px; }
  & > .transparent-box { background-image: url('https://i.picsum.photos/id/1026/200/300.jpg?hmac=Thvj4aJ_VnAGT6DKAcy1yTs100zlstJTyImDWphGDFI'); }
}

.flex-inline .c-link.s-button{
  margin-right: 15px;
  margin-top: 10px;
}
</style>
