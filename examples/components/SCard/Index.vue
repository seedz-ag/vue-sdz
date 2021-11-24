<template>
  <div class="s-card-example">
    <h1 class="h1">Cards</h1>
    <div class="box">
      <s-card>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit alias nisi amet! Quia, sed? Ut eos sequi eligendi doloremque nihil ratione earum id doloribus magnam! Consequuntur nulla porro incidunt?</s-card>
      <s-card no-hover>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit alias nisi amet! Quia, sed? Ut eos sequi eligendi doloremque nihil ratione earum id doloribus magnam! Consequuntur nulla porro incidunt?</s-card>
      <s-card border-color="blue">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit alias nisi amet! Quia, sed? Ut eos sequi eligendi doloremque nihil ratione earum id doloribus magnam! Consequuntur nulla porro incidunt?</s-card>
      <s-card background-color="red">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse reprehenderit alias nisi amet! Quia, sed? Ut eos sequi eligendi doloremque nihil ratione earum id doloribus magnam! Consequuntur nulla porro incidunt?</s-card>
    </div>
  </div>
</template>

<script>
import SCard from '../../../src/components/SCard/Index.vue'

export default {
  components: { SCard }
}
</script>

<style lang="scss">
.s-card-example > .box > .s-card { margin-bottom: 60px; }
</style>
