<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppAlert',

  props: {
    variant: {
      type: String,
      default: 'info'
    }
  },

  computed: {
    classes () {
      return {
        'alert' : true,
        [`alert-${this.variant}`] : true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .alert {
    @apply rounded p-4 flex text-sm border-l-4 mb-3;

    &.alert-error {
      @apply border-red-500 text-red-500 bg-red-100;
    }

    &.alert-success {
      @apply border-green-500 text-green-500 bg-green-100;
    }

    &.alert-info {
      @apply border-blue-500 text-blue-500 bg-blue-100;
    }
  }
</style>
