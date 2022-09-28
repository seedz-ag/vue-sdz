<template>
  <div class="s-date-picker-example">
    simple
    <s-date-picker v-model="date" />

    show-disabled-days
    <s-date-picker show-disabled-days v-model="date" />

    range
    <s-date-picker is-range v-model="date" />
  </div>
</template>

<script>
import SDatePicker from '../../../src/components/SDatePicker/Index.vue'

export default {
  name: 'SDatePickerExample',

  components: { SDatePicker },

  data () {
    return {
      date: ''
    }
  }
}
</script>

<style lang="scss">
.s-date-picker-example {

}
</style>
