<template>
  <div class="s-modal-example">
    <s-button @click="show = true">open modal</s-button>

    <s-modal
      title="header modal"
      :is-opened="show"
      @close="show = false"
    >
      modal content
    </s-modal>
  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'
import SModal from '../../../src/components/SModal/Index.vue'

export default {
  components: { SButton, SModal },

  data () {
    return {
      show: false
    }
  }
}
</script>

<style>

</style>
