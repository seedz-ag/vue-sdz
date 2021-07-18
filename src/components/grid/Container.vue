<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    fluid: {
      type: Boolean,
      defaut: false
    }
  },
  computed: {
    classes() {
      return {
        'container' : !this.fluid,
        'container-fluid' : this.fluid
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    @apply mx-auto;
  }
</style>
