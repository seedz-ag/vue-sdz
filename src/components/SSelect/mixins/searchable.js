const searchable = {
  data () {
    return {
      searchQuery: ''
    }
  },

  computed: {
    searchableValue () {
      if (this.searchQuery) return this.searchQuery
      if (this.focused && !this.searchQuery) return ''
      if ((!this.value || !this.value?.length) && !this.searchQuery) return [ this.placeholder ]

      return this.multiple ? '' : this.value
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
