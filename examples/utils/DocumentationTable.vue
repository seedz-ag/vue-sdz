<template>
  <div class="documentation-table">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'DocumentationTable',

  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.documentation-table {

}
</style>
