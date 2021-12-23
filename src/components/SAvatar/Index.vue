<template>
  <div class="s-avatar">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SAvatar'

  // props: {
  //   value: {
  //     type: Number,
  //     required: true,
  //     validator: val => val >= 0 && val <= 100
  //   }
  // }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-avatar {
  border-radius: 100px;
  display: flex;
  background: color(primary, base);
  height: 40px;
  width: 40px;

  & > .icon{

  }
}
</style>
