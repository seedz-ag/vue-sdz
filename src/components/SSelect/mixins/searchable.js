const searchable = {
  data () {
    return {
      searchQuery: ''
    }
  },

  computed: {
    searchableValue () {
      if (this.focused && !this.searchQuery) return ''
      if ((!this.value || !this.value.length) && !this.searchQuery) return [ this.placeholder ]

      if (!this.searchQuery) {
        if (this.multiple) {
          return (!this.selecteds.length && '') || ''
        } else {
          return this.value
        }
      } else {
        return this.searchQuery
      }
    }
  },

  methods: {
    search ({ target: { value } }) {
      this.isOpened = true
      this.focused = false

      this.searchQuery = value
    }
  }
}

export default searchable
