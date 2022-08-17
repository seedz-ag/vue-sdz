<template>
  <div class="s-shadowed-example">
    <s-title size="title-1">Shadowed</s-title>

    <s-shadowed class="example-1" has-upper-shadow has-bottom-shadow>
      <div class="wrapper">
        AAA <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        BBB <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        CC <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        DDD <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        EEE <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
        aaaaaaaa <br>
      </div>
    </s-shadowed>

    <s-shadowed class="example-2" has-left-shadow has-right-shadow>
      <div class="wrapper2">
        <div>aaaaaaaaaaaaaa</div>
        <div>bbbbbbbbbbbbbbbbb</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>aaaaaaaaaaaaaa</div>
        <div>xxxxxxxxxxxxxxxxxx</div>
        <div>zzzzzzzzzzzzzzzzzzzz</div>
      </div>
    </s-shadowed>
  </div>
</template>

<script>
import SShadowed from '../../../src/components/SShadowed/Index.vue'
import STitle from '../../commons/title.vue'

export default {
  components: { SShadowed, STitle }
}
</script>

<style lang="scss">
.s-shadowed-example {
  & > .example-1 {
    & > .wrapper {
      height: 400px;
      overflow-y: scroll;
      background-color: gray;
    }
  }

  & > .example-2 {
    margin-top: 50px;

    & > .wrapper2 {
      display: flex;
      width: 500px;
      height: 50px;
      overflow-x: scroll;
      background-color: gray;
    }
  }
}
</style>
