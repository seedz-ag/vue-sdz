<template>
  <div class="s-progress-bar">
    <div class="progress" :style="{ width: value + '%' }" />
  </div>
</template>

<script>
export default {
  name: 'SProgressbar',

  props: {
    value: {
      type: Number,
      required: true,
      validator: val => val >= 0 && val <= 100
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-progress-bar {
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

}
</style>
