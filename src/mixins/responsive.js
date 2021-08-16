export default {
  inject: ['getIsSmallScreen', 'getIsMediumScreen', 'getIsLargeScreen', 'getIsVeryLargeScreen'],

  computed: {
    isSmallScreen () {
      return this.getIsSmallScreen()
    },

    isMediumScreen () {
      return this.getIsMediumScreen()
    },

    isLargeScreen () {
      return this.getIsLargeScreen()
    },

    isVeryLargeScreen () {
      return this.getIsVeryLargeScreen()
    }
  }
}
