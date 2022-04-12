<template>
  <section class="s-table-example">
    <s-title size="title-1">Table (simple)</s-title>
    <s-box>
      <s-table
        paginable
        selectable

        :cols="cols"
        :rows="tableRows"
        :page="page"
        :per-page="perPage"
        :sortable="['name', 'sagacity']"
        :actions="[{ label: 'Editar' }, { label: 'Remover' }]"

        @next="page++"
        @previous="page--"
        @change:page="v => page = v"

        @sort="sort"
        @action="action"
        @change:per-page="v => perPage = v"

        @selected="v => selecteds = v"
      />
    </s-box>

    <s-title size="title-1">Table (dynamic)</s-title>
    <s-box>
      <s-table
        paginable
        selectable
        :show-per-page="false"

        :cols="cols2"
        :rows="tableRows2"

        :page="page"
        :per-page="perPage"
        :total-pages="totalPages"

        :sortable="['name', 'sagacity']"
        :actions="[{ label: 'Editar' }, { label: 'Remover' }]"

        @next="page++"
        @previous="page--"
        @change:page="v => page = v"

        @sort="sort"
        @action="action"
        @change:per-page="v => perPage = v"

        @selected="v => selecteds = v"
      />
    </s-box>

    <s-title size="title-1">Table (scoped)</s-title>
    <s-box>
      <s-table :cols="cols" :rows="tableRows">
        <template slot="row" slot-scope="{ row }">
          <td class="td-row"><span class="row">{{ row.name }}</span></td>

          <td class="td-row"><span class="row">{{ row.email }}</span></td>

          <td class="td-row"><span class="row">{{ row.malice }}</span></td>

          <td class="td-row"><span class="row">{{ row.sagacity }}</span></td>
        </template>
      </s-table>
    </s-box>
  </section>
</template>

<script>
import STable from '../../../src/components/STable/Index.vue'
import findByInclusive from '../../../src/helpers/findByInclusive'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

import { cols, rows } from './data-table'

export default {
  name: 'STableExample',

  components: {
    STable,
    SBox,
    STitle
  },

  data () {
    return {
      cols,
      rows,
      cols2: [],
      rows2: [],
      totalPages: null,
      page: 1,
      perPage: 10,
      search: '',
      selecteds: []
    }
  },

  watch: {
    page: {
      immediate: true,
      handler: 'getDataTable'
    }
  },

  computed: {
    tableRows () {
      if (!this.search) return this.rows

      return findByInclusive(this.rows, this.search, 'name')
    },

    tableRows2 () {
      if (!this.search) return this.rows2

      return findByInclusive(this.rows2, this.search, 'name')
    }
  },

  methods: {
    getDataTable (page = 1) {
      const myInit = { method: 'GET', headers: new Headers() }

      fetch(`https://mocki.io/v1/a2f5d112-cb71-4a3b-9941-089fe0e4b8f3?page=${page}`, myInit)
        .then(response => response.json())
        .then(data => {
          const cols = Object.keys(data.data[0])
          const rows = data.data

          this.cols2 = cols.map(col => ({ text: col, row: col }))
          this.rows2 = rows
          this.totalPages = data.recordsTotal
        })
    },

    synchronizeSearch (value) {
      this.search = value
    },

    getRow (row, index) {
      const props = this.cols.map(({ row }) => row)

      return row[props[index]] || ''
    },

    onSort (data) {
      console.log(data)
      this.rows = data
    },

    action ({ action, row }) {
      console.log(action, row)
    },

    sort ({ row, type }) {
      console.log(row, type)
    }
  }
}
</script>

<style lang="scss">
.s-table-example {
  width: 100%;
  height: 600px;
}
</style>
