<template>
  <s-input 
    :label="getProp('label')"
    :placeholder="getProp('placeholder')"
    :small="getProp('size','small')"
    :larger="getProp('size','larger')"
    :icon="getProp('icon')"
    :disabled="getProp('disabled','true')"
    :round="getProp('round','true')"
    :float-label="getProp('float-label','true')"
    :validation="getProp('validation')"
    :is-money="getProp('is-money','true')"
    :mask="getProp('mask')"
  />
</template>

<script>
import SInput from '../../../../src/components/SInput/Index.vue'

export default {
  name:'InputExample',
  components:{
    SInput
  },
  props:{
    getProp: Function
  }
}

</script>