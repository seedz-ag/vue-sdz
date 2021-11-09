<template>
  <div class="s-button-example">
    <s-button outlined />
    <s-button primary />
    <s-button success />
    <s-button error />
    <s-button disabled />
    <s-button icon="plus" />

    <s-button link external to="https://www.google.com">link external</s-button>
    <br>

    <s-button link disabled>link disabled</s-button>
    <br>

    <s-button link icon="sdz-check" disabled>link icon disabled</s-button>
    <br>

    <s-button link to="https://www.google.com">link route</s-button>
    <br>

    <s-button link icon="sdz-check" secondary-icon-color to="https://www.google.com">link icon</s-button>

    <s-button small>small</s-button>
    <s-button default>default</s-button>
    <s-button large>large</s-button>


    <s-button outlined>outlined</s-button>
    <s-button outlined disabled>outlined disabled</s-button>
    <s-button outlined icon="sdz-check">outlined icon</s-button>

    <s-button loading>loading</s-button>
    <s-button primary>primary</s-button>
    <s-button success>success</s-button>
    <s-button grey>grey</s-button>
    <s-button error>error</s-button>
    <s-button disabled>disabled</s-button>
    <s-button full-width>full-width</s-button>
    <s-button icon="sdz-check">icon</s-button>
  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'

export default {
  components: { SButton }
}
</script>

<style lang="scss">
.s-button-example {
  & > .s-button { margin-bottom: 30px; }
}
</style>
