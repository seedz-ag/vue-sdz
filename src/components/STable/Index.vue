i<template>
  <div v-if="hasValid" class="c-table-builder">
    <!-- <slot name="actions">
      <filters label="Filtrar por: " :search="search" v-on="$listeners" />
    </slot> -->

    <div v-if="!isEmpty" class="table-container">
      <table class="table">
        <thead class="thead">
          <tr class="tr-col">
            <th v-if="selectable" class="th-col-selectable">
              <input type="checkbox" @click="$selectedAll">
            </th>

            <slot name="col" :cols="cols">
              <th
                v-for="({ label, row }, index) in cols"
                :key="index"
                class="th-col"
              >
                <!-- to do -->
                <slot name="icon-sortable">
                  <span v-if="sortable" class="icon-sortable-all" @click="$handlerSort(row)">
                    {{ iconToSort }}
                  </span>
                </slot>
                <span>{{ label }}</span>
              </th>
            </slot>
          </tr>
        </thead>

        <s-shadowed target="tbody">
          <tbody ref="tbody" class="tbody">
            <tr v-for="(row, index) in _rows" :key="index" class="tr-row">
              <td v-if="selectable" class="td-row-selectable">
                <input type="checkbox" :value="row" v-model="checkeds" @change="$selected(row)">
              </td>

              <slot name="row" :rows="row" :cols="cols">
                <td v-for="(_, _index) in cols.length" :key="_index" ref="" class="td-row">
                  <span class="row">{{ getRow(row, _index) }}</span>
                </td>
              </slot>
            </tr>
          </tbody>
        </s-shadowed>

        <slot name="total">
          <tfoot class="tfoot">
            <tr v-if="total" class="tr-totalizator">
              <th v-for="(total, index) in totals" :key="index" class="th-totalizator">
                <span>{{ total }}</span>
              </th>
            </tr>
          </tfoot>
        </slot>
      </table>

      <pagination
        v-if="paginable"
        :pages="pages"
        :page="page"
        @to-first="toFirst"
        @change-page="changePage"
        @to-last="toLast"
      />
    </div>

    <div v-else>
      EMPTY STATE
    </div>
  </div>

  <div v-else class="empty-state">
    <slot name="empty">
      error: invalid table!
    </slot>
  </div>
</template>

<script>
// components
import SShadowed from '../SShadowed/Index.vue'
// import Filters from './components/Filters.vue'
import Pagination from './components/Pagination.vue'

// mixins
import warnings from './mixins/warnings'
import sortable from './mixins/sortable'
import selectable from './mixins/selectable'
import paginable from './mixins/paginable'
import scroll from './mixins/scroll'

// helpers
import findBy from '../../helpers/findBy'
import removeGaps from './helpers/removeGaps'

export default {
  name: 'STable',

  components: {
    SShadowed,
    Pagination,
    // Filters
  },

  mixins: [ warnings, sortable, selectable, paginable, scroll ],

  props: {
    cols: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    },
    total: Object,
    search: String,
    searchParams: {
      // array of strings
      // required if paginable
      type: Array
    }
  },

  data () {
    return {
      iconToSort: '▼'
    }
  },

  computed: {
    isEmpty () {
      return !this.pages.length && this.search
    },

    _rows () {
      const rowsWithoutGaps = removeGaps(this.dataTable)

      return rowsWithoutGaps
    },

    totals () {
      const sum = prop => (total, obj) => (typeof obj[prop] === 'number' && total + (+(obj[prop]) || 0)) || '-'

      const makeSum = prop => this.dataTable.reduce(sum(prop), 0)

      const makeLabel = row => (row === this.total.colPosition && this.total.label) || null

      const total = ({ row, hasTotal }) => hasTotal ? makeSum(row) : makeLabel(row)

      if (this.selectable) {
        const totals = this.cols.map(total)
        // append a position in columns to fix alignment
        totals.unshift(null)

        return totals
      } else {
        return this.cols.map(total)
      }
    },
    dataTable () {
      const filtereds = findBy(this.rows, this.search, this.searchParams)
      const filteredRows = this.search && this.searchParams ? filtereds : this.rows

      return this.paginable ? this.pagination.data : filteredRows
    }
  },

  methods: {
    getRow (row, index) {
      const props = this.cols.map(({ row }) => row)

      return row[props[index]] || ''
    }
  },

  install (Vue, { name = 'vue-coe-table' } = {}) {
    Vue.component(name, this)
  }
}
</script>

<style lang="scss">
.c-table-builder > .table-container {
  @mixin table-config {
    width: 100%;
    display: table;
    table-layout: fixed;
  }

  & > .table {
    position: relative;
    width: 100%;

    & > .thead {
      @include table-config;
      border: 1px solid black;
      width: 100%;
      & > .tr-col {
        background-color: white;

        & > .th-col-selectable { width: 50px; }
        & > .th-col {
          min-width: 100px;

          & > .icon-sortable-all { cursor: pointer; }
          & > .icon-sortable-one { cursor: pointer; }
        }
      }
    }

    & > .shadowed {

      & > .tbody {
        overflow-y: scroll;
        display: block;
        height: 600px;

        & > .tr-row {
          @include table-config;

          width: 100%;
          border: 1px solid black;

          & > .td-row-selectable {
            width: 50px;
            text-align: center;

            &:first-child {
              background-image: linear-gradient(to right, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
              background-repeat: no-repeat;
              background-size: 20px 100%;
            }
          }

          & > .td-row { text-align: center; }
        }
      }
    }

    & > .tfoot {
      @include table-config;

      & > .tr-totalizator {
        // color: $text-color;
        // background-color: $background-color;

        & > .th-totalizator {
          // fix - make dynamic based on prop selectable
          &:first-child { width: 50px; }
        }
      }
    }
  }

  & > .empty-state {}
}
</style>
