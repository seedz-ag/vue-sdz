<template>
  <calendar class="s-date-picker" v-bind="$attrs" v-on="$listeners" />
</template>

<script>
import Calendar from 'vue-coe-calendar'

export default {
  name: 'SDatePicker',

  components: { Calendar }
}
</script>

<style lang="scss">
.s-date-picker {
  height: auto !important;
}
</style>
