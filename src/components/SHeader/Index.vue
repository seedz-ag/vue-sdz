<template>
  <s-collapsible class="s-header" no-header v-bind="$attrs" v-on="$listeners">
    <slot />
  </s-collapsible>
</template>

<script>
import SCollapsible from '../../../src/components/SCollapsible/Index.vue'

export default {
  name: 'SHeader',

  components: { SCollapsible }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-header {
  position: sticky;
  top: 0;

  background-color: color(neutral, base);

  & > .wrapper {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 0 30px;
    border-radius: 10px 10px;
    box-shadow: 0px 6px 19px -18px #000000;
    -webkit-box-shadow: 0px 6px 12px -5px #000000;

    & > .logo {
      width: 100%;
      max-width: 225px;
      flex-direction: row;
      display: flex;

      & > img {
        height: 100%;
      }
    }

    & > .search {
      width: 50%;

      & > .s-input {
        margin-top: 0px;
        height: 40px;
      }
    }

    & > .icons {
      display: flex;
      justify-content: flex-end;
      width: 30%;

      & > .s-icon {
        cursor: pointer;
        color: color(primary, base);
        font-size: 25px !important;
        margin-right: 15px;
        margin-top: 5px;

        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
}
</style>
