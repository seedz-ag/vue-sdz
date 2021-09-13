<template>
  <section>
    <s-table
      :cols="cols"
      :rows="rows"
      :total="total"
      :search="search"
      :search-params="['name']"
      :checkeds.sync="checkeds"
      :current-page="2"
      :per-page="5"
      max-height="300"
      selectable
      sortable
      pagination-type="ellipsised"
      @search="synchronizeSearch"
    >
      <tfoot slot="total" class="tfoot">
        <tr class="tr-totalizator">
          <th class="th-totalizator"><span>-</span></th>
          <th class="th-totalizator"><span>-</span></th>
          <th class="th-totalizator"><span>-</span></th>
          <th class="th-totalizator"><span>{{ ageTotal }}</span></th>
          <th class="th-totalizator"><span>{{ maliceTotal }}</span></th>
          <th class="th-totalizator"><span>{{ sagacityTotal }}</span></th>
          <th class="th-totalizator"><span /></th>
        </tr>
      </tfoot>
    </s-table>
    <!-- paginable
    max-height="300" -->
  </section>
</template>

<script>
import STable from '../../../src/components/STable/Index.vue'

import { cols, rows, total } from './data-table'

export default {
  name: 'STableExample',

  components: { STable },
  data () {
    return {
      cols,
      rows,
      total,
      search: '',
      checkeds: []
    }
  },

  computed: {
    ageTotal () {
      return this.getTotal(this.rows, 'age')
    },

    maliceTotal () {
      return this.getTotal(this.rows, 'malice')
    },

    sagacityTotal () {
      return this.getTotal(this.rows, 'sagacity')
    }
  },

  methods: {
    synchronizeSearch (value) {
      this.search = value
    },

    getTotal (data, prop) {
      return data.reduce((total, item) => total + item[prop], 0)
    }
  }
}
</script>
