<template>
  <div class="s-progressbar">
    <div class="progress" :style="percent" />
  </div>
</template>

<script>
export default {
  name: 'SProgressbar',

  props: {
    percent: Number
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-progressbar {
  display: flex;
  background-color: #ECEDEF;
  height: 8px;
  width: 100%;
  border-radius: 8px;

  & > .progress{
    background-color: color(positive, base);
    border-radius: 8px;
  }
}
</style>
