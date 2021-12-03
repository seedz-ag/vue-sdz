<template>
  <div :class="classTitle">{{ title }}</div>
</template>

<script>
export default {
  name: 'STitle',

  props: {
    classTitle: String,
    title: String
  },
}
</script>

<style lang="scss">
  @import "./src/styles/_index.scss";

  .h1{
    font-size: 1.80rem;
    font-weight: 700;
    margin-bottom: 30px;
  }

  .h1:after{
    content: "";
    height: 2px;
    width: 80px;
    background-color: #000;
    display: block;
    margin-top: 30px;
  }

  .h2{
    font-size: 1.4rem;
    font-weight: 500;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

</style>
