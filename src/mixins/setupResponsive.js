export default {
  data () {
    return {
      xsMobileMedia: window.matchMedia('screen and (max-width: 576px)'),
      mobileMedia: window.matchMedia('screen and (max-width: 992px)'),
      isXsMobile: false,
      isMobile: false
    }
  },

  methods: {
    setBreakpoint () {
      this.isMobile = this.mobileMedia && this.mobileMedia.matches
      this.isXsMobile = this.xsMobileMedia && this.xsMobileMedia.matches
    },

    getIsXsMobile () {
      return this.isXsMobile
    },

    getIsMobile () {
      return this.isMobile
    },

    onOrientationChange () {
      window.addEventListener('resize', () => {
        const matchMedia = window.matchMedia || (() => {})
        if ((matchMedia('(orientation: portrait)') || {}).matches) {
          setTimeout(() => window.scrollTo(0, 1), 400)
        }
      }, { once: true })
    }
  },

  beforeDestroy () {
    this.mobileMedia.removeListener(this.setBreakpoint)
    this.xsMobileMedia.removeListener(this.setBreakpoint)
    window.removeEventListener('orientationchange', this.onOrientationChange)
  },

  mounted () {
    this.mobileMedia.addListener(this.setBreakpoint)
    this.xsMobileMedia.addListener(this.setBreakpoint)
    window.addEventListener('orientationchange', this.onOrientationChange)
    this.setBreakpoint()
  },

  provide () {
    return {
      getIsXsMobile: this.getIsXsMobile,
      getIsMobile: this.getIsMobile
    }
  }
}
