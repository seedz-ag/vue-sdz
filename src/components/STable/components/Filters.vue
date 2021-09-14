<template>
  <div class="filters">
    <input
      class="filter"
      v-bind="$attrs"
      :value="search"
      @input="event => $emit('filter', event.target.value)"
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
