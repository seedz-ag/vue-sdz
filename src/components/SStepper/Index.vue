<template>
  <ul class="c-stepper">
    {{ progressiveStep }}
    <li
      v-for="(item, stepIndex) in items"

      :key="stepIndex"
      :class="getClasses(stepIndex)"

      @click="$emit('select', item)"
    >
      <label>{{ item }}</label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SStepper',

  props: {
    step: Number,

    items: { type: Array, required: true }
  },

  data () {
    return {
      progressiveStep: 1
    }
  },

  watch: {
    step: 'incrementStep',

    progressiveStep: {
      handler: 'incrementStep',
      immediate: true
    }
  },

  methods: {
    incrementStep () {
      setTimeout(() => {
        if (this.progressiveStep <= this.step) this.progressiveStep++
      }, 1200)
    },

    getClasses (stepIndex) {
      const isActive = stepIndex <= (this.progressiveStep - 1)

      return {
        '--is-active': isActive,
        '--is-current-step': isActive && this.step === stepIndex
      }
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.c-stepper {
  @keyframes bounce {
    from { width: 0%; }
    to { width: 100%; }
  }

  margin: 0;
  width: 100%;
  display: flex;
  counter-reset: step;
  align-items: baseline;
  justify-content: space-between;

  li {
    width: 100%;
    font-size: 12px;
    color: #7d7d7d;
    position: relative;
    text-align: center;
    list-style-type: none;

    label {
      font-size: 12px;
      transition: opacity .7s ease;

      // &:before {
      //   content: '';
      //   z-index: -1;

      //   width: 100%;
      //   height: 1px;

      //   top: 15px;
      //   left: -50%;
      //   position: absolute;

      //   background: color(primary, light);
      // }
      // &:first-child:before { content: none; }
    }

    &::before {
      width: 30px;
      height: 30px;

      display: block;

      content: counter(step);
      counter-increment: step;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 50%;
      border-width: 2px;
      border-style: solid;
      border-color: color(base, light);

      margin: 0 auto -50px auto;
      background-color: color(neutral, base);
      transition: border-color .3s ease-in-out;
    }

    &:first-child:after { content: none; }
  }

  li > label::after:not(:first-child) { content: none; }

  .--is-active {
    // circle bocer
    &::before { border-color: color(primary, base); }

    // line before circle
    &::after {
      content: '';
      z-index: -1;

      width: 100%;
      height: 2px;

      top: 15px;
      left: -50%;
      position: absolute;

      background-color: color(primary, base);
      transition: background-color .3s ease-in-out;

      animation: bounce 0.7s;
    }
  }

  .--is-current-step > label { font-weight: 800; }
}
</style>
