<template>
  <pre class="pre">
      <code>{{ code }}</code>
    </pre>
</template>

<script>

export default {
  name: 'PreCode',
  props:{
    code: String
  }
}
</script>

<style scoped lang="scss">

  .pre{
    border-radius: 12px;
    font-size: 17px;
    color:#abb2bf;
    white-space: pre-wrap;
    code{
      background-color:#282c34;
      padding:20px;
      width: 100%;
      height: auto;
      border-radius: 12px;
      box-sizing: border-box;
      display: block;
      border: none;
      margin: 0;
    }
  }

</style>
