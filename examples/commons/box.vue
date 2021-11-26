<template>
  <div class="s-box">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SBox'
  }
</script>

<style lang="scss">
  @import "./src/styles/_index.scss";

  .s-box{
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    padding: 30px;
    margin-bottom: 60px;
  }
</style>
