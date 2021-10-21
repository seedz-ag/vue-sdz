<template>
  <div class="s-loader">
    <svg
      id="loading"

      focusable="false"
      aria-hidden="true"
      role="presentation"
      viewBox="0 0 20 20"
      class="loader"

      :style="style"
    >
      <path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SLoader',

  props: {
    size: {
      type: [String, Number],
      default: 125
    }
  },

  computed: {
    style () {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

.s-loader {
  & > .loader {
    animation: loading 2s linear infinite;
    -moz-animation: loading 2s linear infinite;
    -webkit-animation: loading 2s linear infinite;

    & > path { fill: color(primary, base); }
  }

  @keyframes loading {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
  }

  @-webkit-keyframes loading {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
  }

  @-moz-keyframes loading {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
  }
}
</style>
