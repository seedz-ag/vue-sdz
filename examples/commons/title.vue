<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'STitle',

  props: {
    size: {
      type: String,
      validator: function (value) {
        return ['title-1', 'title-2','hd', 'hxl', 'hl', 'hm', 'hs', 'hxs', 'sub-l', 'sub-s'].indexOf(value) !== -1
      }
    }
  },

  computed: {
    classes () {
      const isSize = v => this.size === v
      return [
        's-title', {
          '--title-1': isSize('title-1'),
          '--title-2': isSize('title-2'),
          '--hd': isSize('hd'),
          '--hxl': isSize('hxl'),
          '--hl': isSize('hl'),
          '--hm': isSize('hm'),
          '--hs': isSize('hs'),
          '--hxs': isSize('hxs'),
          '--sub-l': isSize('sub-l'),
          '--sub-s': isSize('sub-s')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "./src/styles/_index.scss";

.s-title{
  color: color(base,base);
}

.--title-1{
  font-size: 1.80rem;
  font-weight: 700;
  margin-bottom: 30px;
}

.--title-1:after{
  content: "";
  height: 2px;
  width: 80px;
  background-color: #000;
  display: block;
  margin-top: 30px;
}

.--title-2{
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 3rem;
  margin-bottom: 1rem;
}

.--hd{
  font-size: 34px;
  font-weight: bold;

  @include mobile {
    font-size: 30px;
  }
}

.--hxl{
  font-size: 30px;
  font-weight: bold;

  @include mobile {
    font-size: 26px;
  }
}

.--hl{
  font-size: 28px;
  font-weight: bold;

  @include mobile {
    font-size: 24px;
  }
}

.--hm{
  font-size: 24px;
  font-weight: bold;

  @include mobile {
    font-size: 22px;
    font-weight: 600;
  }
}

.--hs{
  font-size: 20px;
  font-weight: bold;

  @include mobile {
    font-size: 18px;
  }
}

.--hxs{
  font-size: 14px;
  font-weight: bold;

  @include mobile {
    font-size: 14px;
  }
}

.--sub-l{
  font-weight: 500;
  font-size: 28px;

  @include mobile {
    font-size: 24px;
  }
}

.--sub-s{
  font-weight: 500;
  font-size: 24px;

  @include mobile {
    font-size: 20px;
  }
}
</style>
