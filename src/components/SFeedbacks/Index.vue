<template>
  <coe-feedback :feedbacks="feedbacks" v-on="$listeners">
    <template slot="feedbacks" slot-scope="{ feedbacks, success, error }">
      <s-card
        v-for="(feedback, index) in feedbacks"
        :key="index"
        :class="getClasses(feedback.type)"
      >
        <div class="message-container">
          <span class="message">{{ feedback.message }} </span>

          <span :style="{ color: getColor(feedback.type, success, error) }" class="highlighted">
            {{ feedback.highlighted }}
          </span>
        </div>

        <s-button
          v-if="dismissible"
          grey
          icon="eva:close-fill"
          class="button"
          @click="$emit('close', feedback)"
        />
      </s-card>
    </template>
  </coe-feedback>
</template>

<script>
import SCard from '../SCard/Index.vue'
import SButton from '../SButton/Index.vue'
import { CoeFeedback } from 'vue-coe-feedback'

export default {
  name: 'SFeedbacks',

  components: { CoeFeedback, SCard, SButton },

  props: {
    feedbacks: {
      type: Array,
      default: () => []
    },

    dismissible: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    getClasses (type) {
      return ['feedback', {
        '--is-negative': type === 'error',
        '--is-positive': type === 'success'
      }]
    },

    getColor (type, success, error) {
      const colors = { success, error }

      return colors[type]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.coe-feedbacks {
  & > .feedback {
    margin-left: 20px;
    min-height: 60px;
    box-shadow: -1px -1px 4px 0 rgba(0,0,0,0.2);
    background: color(base, light);

    &.--is-negative {
      background-color: color(negative, dark);

      & > .message-container > .message, .highlighted { color: color(neutral, dark); }
    }

    &.--is-positive {
      background-color: color(primary, light);

      & > .message-container > .message, .highlighted  { color: color(neutral, dark); }
    }

    &:last-child { margin-bottom: 20px; }

    & > .message-container {
      display: flex;
      align-items: center;
      flex-direction: column;

      margin: 0 !important;

      font-weight: unset;
      color: color(neutral, base);

      & > .message { font-weight: $font-weight-bold; }
      & > .highlighted { font-weight: $font-weight-regular; }
    }

    & > .button {
      width: 30px;
      margin-right: 15px;
      height: 30px !important;
      min-width: unset !important;
      min-height: unset !important;
      border-radius: 50% !important;
      border: 1px solid rgba(#FFF, .3);
      background-color: transparent !important;

      & > .icon {
        color: color(neutral, light);
        margin: 0 !important;
        font-size: 14px !important;
      }

      &:hover {
        border-color: rgba(#FFF, .8);
        & > .icon { color: color(neutral, base);}
      }
    }
  }
}
</style>
