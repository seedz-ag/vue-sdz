<template>
  <div class="s-stepper">
    <div class="stepper-tracker" />

    <ul class="stepper">
      <li
        v-for="(item, stepIndex) in items"

        :key="stepIndex"
        :class="getClasses(item, stepIndex)"

        @click="$emit('select', item)"
      >
        <div class="content">
          <label>{{ item.label }}</label>

          <s-icon v-if="item.icon" :icon="item.icon" v-bind="$attrs" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SStepper',

  components: {
    SIcon: () => import('../SIcon/Index.vue').then(c => c.default)
  },

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
      }, 1000)
    },

    getClasses (item, stepIndex) {
      const isActive = stepIndex <= (this.progressiveStep - 1)

      return ['step', {
        '--is-active': isActive,
        '--is-disabled': item.disabled,
        '--is-current-step': isActive && this.step === stepIndex
      }]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-stepper {
  & > .stepper-tracker {
    position: relative;

    &::after {
      content: '';
      z-index: -2;

      height: 2px;
      width: calc(100% - 20%);

      top: 15px;
      left: 10%;
      position: absolute;

      background: color(base, light);
    }
  }

  & > .stepper {
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

    & > .step {
      width: 100%;
      font-size: 12px;
      position: relative;
      text-align: center;
      list-style-type: none;

      & > .content {
        display: flex;
        align-items: center;
        justify-content: center;

        & > label {
          font-size: 12px;
          transition: opacity .7s ease;
        }
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

        border-width: 2px;
        border-radius: 50%;
        border-style: solid;

        margin: 0 auto -55px auto;
        background-color: color(neutral, base);
        transition: border-color .3s ease-in-out;
      }

      &:first-child:after { content: none; }
    }

    .--is-active {
      &::before {
        color: color(primary, base);
        border-color: color(primary, base);
      }

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

      & > .content:last-child { color: color(primary, base); }
    }

    .--is-disabled {
      cursor: not-allowed;

      & > .content { color: gray !important; }

      &::before {
        // color: color(neutral, light) !important;
        // border-color: color(neutral, light) !important;
        color: gray !important;
        border-color: gray !important;
      }
    }
    .--is-current-step > .content { font-weight: 800; }
  }
}
</style>
