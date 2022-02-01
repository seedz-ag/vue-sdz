export default {
  inject: [ 'getIsXsMobile', 'getIsMobile' ],

  computed: {
    isXsMobile () {
      return this.getIsXsMobile()
    },

    isMobile () {
      return this.getIsMobile()
    }
  }
}
