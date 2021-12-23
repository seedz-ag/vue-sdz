<template>
  <div class="s-avatar">
    <slot />
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  name: 'SAvatar',
=======
  name: 'SAvatar'
>>>>>>> feature-examples-avatar

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
<<<<<<< HEAD
  display: flex;
  background: color(neutral, medium);
  height: 8px;
  width: 100%;
  border-radius: 8px;

  & > .progress{
    background-color: color(positive, base);
    border-radius: 8px;
    transition: width .9s ease-in;
  }

=======
  border-radius: 100px;
  display: flex;
  background: color(primary, base);
  height: 40px;
  width: 40px;

  & > .icon{

  }
>>>>>>> feature-examples-avatar
}
</style>
