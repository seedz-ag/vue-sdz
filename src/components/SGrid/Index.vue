<template>
  <div class="s-grid">
    <div :class="size">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SGrid',

  props: {
    size: {
      type: String,
      required: true
    },
  },
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-grid {
  .col-6{
    background: #000;
    max-width: 50%;
    min-height: 50px;
  }
}
</style>
