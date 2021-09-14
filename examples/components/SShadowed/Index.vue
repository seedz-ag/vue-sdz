<template>
  <div class="s-shadowed-example">
    <s-shadowed class="example-1">
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
  </div>
</template>

<script>
import SShadowed from '../../../src/components/SShadowed/Index.vue'

export default {
  components: { SShadowed }
}
</script>

<style lang="scss">
.s-shadowed-example {
  padding: 50px;
  margin: 0 auto;

  & > .example-1 {
    & > .wrapper {
      height: 400px;
      overflow-y: scroll;
      background-color: gray;
    }
  }
}
</style>
