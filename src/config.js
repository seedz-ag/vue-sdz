const config = {
  options: {
    theme: {
      primary: 'red'
    }
  },
  setOptions (value) {
    this.config = { ...this.options, ...value }
  }
}

export default config
