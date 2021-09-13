i<template>
  <div id="app" v-if="hasValid" class="c-table-builder">
    <slot name="actions">
      <filters label="Filtrar por: " :search="search" v-on="$listeners" />
    </slot>

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

        <tbody ref="tbody" :class="tbodyClass" :style="style">
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
import Pagination from './components/Pagination.vue'
import Filters from './components/Filters.vue'

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

  components: { Pagination, Filters },

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

    tbodyClass () {
      return ['tbody', {
        '-max-heigth': this.maxHeight,
        '-has-top-shadow': !this.paginable && !!this.maxHeight && !this.hasTopShadow,
        '-has-bottom-shadow': !this.paginable && !!this.maxHeight && !this.hasBottomShadow
      }]
    },

    style () {
      return {
        'maxHeight': this.maxHeight + 'px',
        '--tbody-bottom': (this.maxHeight - 15) + 'px'
      }
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
  @mixin shadow {
    content: "";
    display: block;

    position: absolute;
    left: 0px;

    width: 97.5%;
    height: 45px;

    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 85%);
  }

  @mixin table-config {
    display: table;
    width: 100vh;
    table-layout: fixed;
  }

  @mixin lateral-responsiveness {
    overflow: auto;
    display: block;

    background:
      radial-gradient(ellipse, rgba(0,0,0, .3) 0%, rgba(0,0,0, 0) 75%),
      radial-gradient(ellipse, rgba(0,0,0, .3) 0%, rgba(0,0,0, 0) 75%);
    background-size: 10px 100%, 10px 100%;
    background-position: -3px center, calc(100% + 3px) center;
    background-repeat: no-repeat;
    background-color: #fff;
  }

  @mixin lateral-pagination {
    background-image: linear-gradient(to right, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0) 100%);
    background-repeat: no-repeat;
    background-size: 20px 100%;
  }

  & > .table {
    position: relative;

    // fix - max-width must be the size of the table
    @media only screen and (max-width: 677px) {
      @include lateral-responsiveness;
    }

    & > .thead {
      @include table-config;
      border: 1px solid black;

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

    & > .tbody {
      display: block;

      width: 100vh;

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
        & > .td-row {
          text-align: center;

          &:first-child {
            @include lateral-pagination;
          }

          &:last-child {
            @include lateral-pagination;
            background-position: 100% 0;
          }

          // & > .row { color: $text-color; }
        }
      }

      &.-has-top-shadow::before {
        @include shadow;
        top: 10px;
      }

      &.-has-bottom-shadow::after {
        @include shadow;
        top: var(--tbody-bottom);
      }
    }

    & .-max-heigth {
      overflow-y: scroll;
      overflow-x: hidden;
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
