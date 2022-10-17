<template>
  <div class="s-button-example">
    <s-title size="title-1">Buttons</s-title>

    <source-code file="SButtonExample" comp="SButton">Example</source-code>

    <s-title size="title-2">Stats</s-title>
    <s-box>
      <div class="flex-inline">
        <s-button>Default</s-button>
        <s-button primary>Primary</s-button>
        <!-- <s-button success>primary</s-button>
        <s-button error>primary</s-button> -->
        <s-button primary icon="ant-design:tool-outlined">Icon</s-button>
        <s-button primary loading>Loading</s-button>
        <s-button disabled>Disabled</s-button>
        <s-button link>Link Button</s-button>
      </div>
      <br><br>
      <div class="flex-line">
        <s-button primary full-width>full-width</s-button>
      </div>
    </s-box>

    <pre-code :code="code1" />

    <s-title size="title-2">Sizes</s-title>

    <s-box class="flex-inline">
      <s-button primary small>small</s-button>
      <s-button primary default>default</s-button>
      <s-button primary large>large</s-button>
    </s-box>

    <pre-code :code="code2" />

    <s-title size="title-2">Outlined</s-title>

    <s-box class="flex-inline">
      <s-button outlined>outlined</s-button>
      <s-button outlined disabled>outlined disabled</s-button>
      <s-button outlined icon="ant-design:tool-outlined">outlined icon</s-button>
      <s-button outlined icon="ant-design:tool-outlined" disabled>outlined disabled icon</s-button>
      <s-button outlined loading>loading</s-button>
    </s-box>

    <pre-code :code="code3" />

    <s-title size="title-2">Rounded</s-title>
    <s-box class="flex-inline">
      <s-button outlined rounded>outlined</s-button>
      <s-button primary rounded disabled>rounded disabled</s-button>
      <s-button primary rounded icon="ant-design:tool-outlined">rounded icon</s-button>
      <s-button primary rounded icon="ant-design:tool-outlined" disabled>rounded disabled icon</s-button>
      <s-button primary rounded loading>loading</s-button>
    </s-box>

    <pre-code :code="code4" />

    <s-title size="title-2">White Mode</s-title>
    <s-box class="black-box flex-inline">
      <s-button link white>Link white</s-button>
      <s-button white>White Mode</s-button>
      <s-button white disabled>White disabled</s-button>
      <s-button white icon="ant-design:tool-outlined">White icon</s-button>
      <s-button white icon="ant-design:tool-outlined" disabled>White disabled icon</s-button>
      <s-button white loading />
    </s-box>

    <pre-code :code="code5" />
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
      code1: `
        <s-button>Default</s-button>
        <s-button primary>Primary</s-button>
        <s-button primary loading>Loading</s-button>
        <s-button primary disabled>Disabled</s-button>
        <s-button primary link>Link Button</s-button>
        <s-button primary full-width>Full Width</s-button>
      `,
      code2: `<s-button small>small</s-button>
      <s-button default>default</s-button>
      <s-button large>large</s-button>`,
      code3: `<s-button outlined>outlined</s-button>
      <s-button outlined disabled>outlined disabled</s-button>
      <s-button outlined icon="check">outlined icon</s-button>
      <s-button outlined icon="check" disabled>outlined disabled icon</s-button>`,
      code4: `<s-button rounded>outlined</s-button>
      <s-button rounded disabled>rounded disabled</s-button>
      <s-button rounded icon="check">rounded icon</s-button>
      <s-button rounded icon="check" disabled>rounded disabled icon</s-button>`,
      code5: `
        <s-button link white>Link white</s-button>
        <s-button white>White Mode</s-button>
        <s-button white disabled>White disabled</s-button>
        <s-button white icon="ant-design:tool-outlined">White icon</s-button>
        <s-button white icon="ant-design:tool-outlined" disabled>White disabled icon</s-button>
        <s-button white loading></s-button>
      `,
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-button-example {
  & > .s-button { margin-bottom: 30px; }
  & > .transparent-box { background-image: url('https://i.picsum.photos/id/1026/200/300.jpg?hmac=Thvj4aJ_VnAGT6DKAcy1yTs100zlstJTyImDWphGDFI'); }
  & > .black-box { background-color: color(base, dark) }
}

.flex-inline .c-link.s-button{
  margin-right: 15px;
  margin-top: 10px;
}
</style>
