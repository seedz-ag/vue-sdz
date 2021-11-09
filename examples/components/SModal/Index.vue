<template>
  <div class="s-modal-example">
    <s-button @click="showSimpleModal = true">open simple modal</s-button>

    <s-modal
      title="header modal"
      :is-opened="showSimpleModal"
      @close="showSimpleModal = false"
    >
      modal content
    </s-modal>

    <s-button @click="showNoHeaderModal = true">open no header modal</s-button>

    <s-modal
      no-header
      :is-opened="showNoHeaderModal"
      @close="showNoHeaderModal = false"
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
      showSimpleModal: false,
      showNoHeaderModal: false
    }
  }
}
</script>

<style lang="scss">
.s-modal-example {
  & > .s-button { margin-bottom: 30px; }
}
</style>
