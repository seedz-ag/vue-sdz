<template>
  <div class="s-button-example">
    <h1 class="h1">Buttons</h1>

    <h2 class="h2">Stats</h2>
    <div class="box">
      <div class="flex-inline">
        <s-button primary>primary</s-button>
        <s-button grey>Secondary</s-button>
        <s-button success>success</s-button>
        <s-button error>error</s-button>
        <s-button loading>loading</s-button>
        <s-button disabled>disabled</s-button>
      </div>
      <br><br>
      <div class="flex-line">
        <s-button full-width>full-width</s-button>
      </div>
    </div>

    <h2 class="h2">Links</h2>
    <div class="box flex-line flex-center">
      <s-button link external to="https://www.google.com">link external</s-button>
      <br>
      <s-button link disabled>link disabled</s-button>
      <br>
      <s-button link icon="sdz-check" disabled>link icon disabled</s-button>
      <br>
      <s-button link to="https://www.google.com">link route</s-button>
      <br>
      <s-button link icon="sdz-check" secondary-icon-color to="https://www.google.com">link icon</s-button>
    </div>
    
    <h2 class="h2">Sizes</h2>
    <div class="box flex-inline">
      <s-button small>small</s-button>
      <s-button default>default</s-button>
      <s-button large>large</s-button>
    </div>

    <h2 class="h2">Outlined</h2>
    <div class="box flex-inline">
      <s-button outlined>outlined</s-button>
      <s-button outlined disabled>outlined disabled</s-button>
      <s-button outlined icon="sdz-check">outlined icon</s-button>
      <s-button outlined icon="sdz-check" disabled>outlined disabled icon</s-button>
    </div>

    <h2 class="h2">Enhancers</h2>
    <div class="box">
      <s-button icon="sdz-check">icon</s-button>
    </div>  

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

.flex-inline .c-link.s-button{
  margin-right: 15px;
}
</style>
