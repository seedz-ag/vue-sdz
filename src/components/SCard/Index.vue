<template>
  <div
    :class="cardClasses"
    :style="cardStyles"
  >
    <!-- @slot The card's content slot. -->
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SCard',

  props: {
    /**
     * The background color of the card.
     */
    backgroundColor: {
      type: String,
      default: 'white'
    },

    /**
     * The color of the card's border.
     */
    borderColor: String,

    /**
     * Removes the card's left-border.
     */
    noBorder: {
      type: Boolean,
      default: true
    },

    /**
     * Disables the card's hover transition.
     */
    noHover: Boolean
  },

  computed: {
    cardStyles () {
      return {
        background: this.backgroundColor,
        borderLeft: `4px solid ${this.borderColor}`
      }
    },

    cardClasses () {
      return ['s-card',
        {
          '-no-hover': this.noHover
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-card {
  position: relative;
  box-shadow: $shadow-1;
  transition: all .3s ease;
  border-radius: $border-radius-sm;

  &:hover { box-shadow: $shadow-2; }

  &::before {
    display: none;
    position: absolute;
    content: '';
    left: 0px;
    top: 0px;

    height: 100%;
    min-width: 4px;
    width: 4px;
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
  }

  &.-no-hover:hover { box-shadow: $shadow-1; }
}
</style>
