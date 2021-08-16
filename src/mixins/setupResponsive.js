const breakpoints = {
  small: 334,
  medium: 770,
  large: 1024,
  veryLarge: 1224
}

export default {
  data () {
    return {
      smallScreen: window.matchMedia(`screen and (max-width: ${breakpoints.small}px)`),
      mediumScreen: window.matchMedia(`screen and (min-width: ${breakpoints.small + 1}px) and (max-width: ${breakpoints.medium}px)`),
      largeScreen: window.matchMedia(`screen and (min-width: ${breakpoints.medium + 1}px) and (max-width: ${breakpoints.large}px)`),
      veryLargeScreen: window.matchMedia(`screen and (min-width: ${breakpoints.large + 1}px)`),

      isSmallScreen: false,
      isMediumScreen: false,
      isLargeScreen: false,
      isVeryLargeScreen: false,

      isMounted: false
    }
  },

  methods: {
    setBreakpoint () {
      this.isSmallScreen = !!this.smallScreen?.matches
      this.isMediumScreen = !!this.mediumScreen?.matches
      this.isLargeScreen = !!this.largeScreen?.matches
      this.isVeryLargeScreen = !!this.veryLargeScreen?.matches
    },

    getIsSmallScreen () {
      return this.isSmallScreen
    },

    getIsMediumScreen () {
      return this.isMediumScreen
    },

    getIsLargeScreen () {
      return this.isLargeScreen
    },

    getIsVeryLargeScreen () {
      return this.isVeryLargeScreen
    }
  },

  beforeDestroy () {
    this.smallScreen.removeListener(this.setBreakpoint)
    this.mediumScreen.removeListener(this.setBreakpoint)
    this.largeScreen.removeListener(this.setBreakpoint)
    this.veryLargeScreen.removeListener(this.setBreakpoint)
  },

  mounted () {
    this.smallScreen.addListener(this.setBreakpoint)
    this.mediumScreen.addListener(this.setBreakpoint)
    this.largeScreen.addListener(this.setBreakpoint)
    this.veryLargeScreen.addListener(this.setBreakpoint)

    this.setBreakpoint()

    this.isMounted = true
  },

  provide () {
    return {
      getIsSmallScreen: this.getIsSmallScreen,
      getIsMediumScreen: this.getIsMediumScreen,
      getIsLargeScreen: this.getIsLargeScreen,
      getIsVeryLargeScreen: this.getIsVeryLargeScreen
    }
  }
}
