<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Row',
  computed: {
    classes() {
      return {
        'row' : true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .row {
    @apply flex flex-wrap -mx-3;
  }
</style>
