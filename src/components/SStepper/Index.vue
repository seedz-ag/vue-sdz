<template>
  <div class="s-stepper">
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
      }, 1200)
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
  max-width: 1000px;
  margin: 2rem auto 0;

  & > .stepper {
    @keyframes bounce {
      from { width: 0%; }
      to { width: calc(100% - clamp(1.5rem, 4vw, 1.6rem) - calc(clamp(0.25rem, 2vw, 0.5rem) * 2)); }
    }

    display: flex;
    counter-reset: step;

    & > .step {
      display: flex;
      flex-direction: column;
      flex: 1;
      text-align: center;

      & > .content {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -75px;

        & > label {
          font-size: 12px;
          transition: opacity .7s ease;
        }
      }

      &::before {
        --size: 3rem;
        content: '';
        display: block;
        width: clamp(1.5rem, 4vw, 1.6rem);
        height: clamp(1.5rem, 4vw, 1.6rem);
        border-radius: 50%;
        background-color: color(neutral, base);
        margin: 0 auto 1rem;

        border-width: 2px;
        border-style: solid;
        transition: border-color .3s ease-in-out;

        content: counter(step);
        counter-increment: step;
      }

      &:not(:last-child):after {
        content: '';
        position: relative;
        top: calc(clamp(1.5rem, 4vw, 1.6rem) / 2);
        width: calc(100% - clamp(1.5rem, 4vw, 1.6rem) - calc(clamp(0.25rem, 2vw, 0.5rem) * 2));
        left: calc(50% + calc(clamp(1.5rem, 4vw, 1.6rem) / 2 + clamp(0.25rem, 2vw, 0.5rem)));
        height: 2px;
        background-color: #e0e0e0;
        order: -1;
      }
    }

    .--is-active {
      &::before {
        border-width: 3px;
        color: color(primary, base);
        border-color: color(primary, base);
      }

      &::after {
        background-color: color(primary, base);
        transition: color .3s ease-in-out,
        border-width .3s ease-in-out,
        background-color .3s ease-in-out;

        animation: bounce 0.7s;
      }

      & > .content:last-child { color: color(primary, base); }
    }

    .--is-disabled {
      cursor: not-allowed;

      & > .content { color: gray !important; }

      &::before {
        // color: color(neutral, medium) !important;
        // border-color: color(neutral, medium) !important;
        color: gray !important;
        border-color: gray !important;
      }
    }
    .--is-current-step > .content { font-weight: 800; }
  }
}
</style>
