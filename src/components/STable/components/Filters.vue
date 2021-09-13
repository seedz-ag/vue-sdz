<template>
  <div class="filters">
    <input
      class="filter"
      v-bind="$attrs"
      :value="search"
      @input="value => $emit('search', value)"
    >
  </div>
</template>

<script>
export default {
  name: 'Filters',

  props: {
    search: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.filters {
  display: flex;
  margin-bottom: 20px;

  & > .filter {}
}
</style>
