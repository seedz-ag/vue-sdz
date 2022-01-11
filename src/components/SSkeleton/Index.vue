<template>
  <div class="s-skeleton-container">
    <div
      class="s-skeleton"
      :style="[cardStyles, getHeight]"
    >
      <div class="skeleton-background" :style="[getHeight,getSkeleton]" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SSkeleton',

  props: {
  

    /**
     * Skeleton width in percentage.
     */
    size: Number,

    /**
     * Skeleton row in percentage.
     */
    rows: Number,

    /**
     * Round skeleton.
     */
    round: Boolean

  },

  computed: {
    cardStyles () {
      return {
        width: this.size?`${this.size}%`:'100%',
      }
    },
    getHeight () {
      return{
        height: this.rows?`${this.rows*20}px`:'20px'
      }
    },
    getSkeleton () {
      return {
        borderRadius: this.round?'100%':'$border-radius-sm'
      }
    }
  }
}
</script>

<style lang="scss">
@import "./src/styles/_index.scss";

@-webkit-keyframes skeleton-shine{0%{background-position:-30rem}to{background-position:30rem}}@keyframes skeleton-shine{0%{background-position:-30rem}to{background-position:30rem}}

.s-skeleton-container {
  width:100%;
  height:auto;
  .s-skeleton{
    box-shadow: none;
    color: #46285d;
    display: block;
    transition: box-shadow .15s ease-out;
    box-sizing: inherit;
    margin-bottom: 16px;
    

    .skeleton-background{
      border-radius: $border-radius-sm;
      min-height: 1.5em;
      background-color: rgba(36,27,39,.05);
      background-image: linear-gradient(100deg,rgba(45,35,46,0),rgba(45,35,46,.1) 20%,rgba(45,35,46,0) 40%);
      background-size: 60rem;
      content: "";
      -webkit-animation: skeleton-shine 1.5s linear infinite;
      animation: skeleton-shine 1.5s linear infinite;
    }
  }
}
</style>
