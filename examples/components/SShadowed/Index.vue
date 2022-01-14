<template>
  <div class="s-shadowed-example">
    <s-typography class="title-1" title="Shadowed" />
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
import STypography from '../../commons/typography.vue'

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
}
</style>
