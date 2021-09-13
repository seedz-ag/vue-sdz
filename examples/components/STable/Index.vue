<template>
  <section class="s-table-example">
    <s-table
      :cols="cols"
      :rows="tableRows"
      :search="search"
      :search-params="['name']"
      :checkeds.sync="checkeds"
      :current-page="2"
      :per-page="5"
      selectable
      sortable
      pagination-type="ellipsised"
      @sort="onSort"
      @filter="synchronizeSearch"
    >
    <!-- paginable
    max-height="300" -->
    </s-table>
  </section>
</template>

<script>
import STable from '../../../src/components/STable/Index.vue'
import findByInclusive from '../../../src/helpers/findByInclusive'

import { cols, rows } from './data-table'

export default {
  name: 'STableExample',

  components: { STable },
  data () {
    return {
      cols,
      rows,
      search: '',
      checkeds: []
    }
  },

  computed: {
    tableRows () {
      if (!this.search) return this.rows

      return findByInclusive(this.rows, this.search, 'name')
    }
  },

  methods: {
    synchronizeSearch (value) {
      this.search = value
    },

    onSort (data) {
      console.log(data)
      this.rows = data
    }
  }
}
</script>

<style lang="scss">
.s-table-example {
  height: 600px;
  padding: 50px;
  margin: 0 auto;
}
</style>
