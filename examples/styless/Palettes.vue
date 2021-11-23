<template>
  <div class="palettes">
    <h1 class="h1">Colors</h1>
    <div v-for="color in colors" :key="color" :class="color">
      <h2 class="h2">{{ color }}</h2>
      <div class="palette">base</div>
      <div class="palette">light</div>
      <div class="palette">medium</div>
      <div class="palette">dark</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Palettes',

  data () {
    return {
      colors: [
        'base',
        'neutral',
        'primary',
        'secondary',
        'highlight',
        'positive',
        'negative'
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.palettes {
  @mixin palettes ($color) {
    /*& > :nth-child(1) { text-align: center; }*/
    & > :nth-child(2) { background: color($color, base); }
    & > :nth-child(3) { background: color($color, light); }
    & > :nth-child(4) { background: color($color, medium); }
    & > :nth-child(5) { background: color($color, dark); }
  }

  & > div { margin-bottom: 50px; }

  & > div > .palette {
    width: 100%;
    height: 40px;
    color: $neutral-color;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > .neutral { @include palettes(neutral) }

  & > .base { @include palettes(base) }

  & > .primary { @include palettes(primary) }

  & > .secondary { @include palettes(secondary) }

  & > .highlight { @include palettes(highlight) }

  & > .positive { @include palettes(positive) }

  & > .negative { @include palettes(negative) }

  .neutral> .palette, .highlight > .palette, .positive > .palette, .negative > .palette{
    color: #000;
  }
}
</style>
