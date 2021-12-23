<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SAvatar',

  props: {
    size: {
      type: String,
      validator: function (value) {
        return ['p', 'm', 'g'].indexOf(value) !== -1
      },
      default: 'm'
    },

    color: {
      type: String,
      validator: function (value) {
        return ['p', 'm', 'g'].indexOf(value) !== -1
      },
      default: 'm'
    }

    // value: {
    //   type: String,
    //   validator: function (value) {
    //     return ['p', 'm', 'g'].indexOf(value) !== -1
    //   }
    // }
  },

  computed:{
    classes(){
      return [
        's-avatar',
        `--is-size-${this.size}`,
        `--is-color-${this.color}`
      ]
    }
  }

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
    color: color(base, neutral)
  }

  & .dark{
    background: color(base, neutral);
  }
}
</style>
