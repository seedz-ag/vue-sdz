i<template>
  <div v-if="hasValid" class="c-table-builder">
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

        <s-shadowed :has-bottom-shadow="false">
          <tbody ref="tbody" class="tbody">
            <tr v-for="(row, index) in rows" :key="index" class="tr-row">
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

        <slot name="tfoot" />
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
import Filters from './components/Filters.vue'
import Pagination from './components/Pagination.vue'

// mixins
import warnings from './mixins/warnings'
import sortable from './mixins/sortable'
import selectable from './mixins/selectable'
import paginable from './mixins/paginable'

export default {
  name: 'STable',

  components: { SShadowed, Pagination, Filters },

  mixins: [ warnings, sortable, selectable, paginable ],

  props: {
    cols: {
      type: Array,
      required: true
    },

    rows: {
      type: Array,
      required: true
    },

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

    dataTable () {
      return this.paginable ? this.pagination.data : this.rows
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
  }
}
</style>
