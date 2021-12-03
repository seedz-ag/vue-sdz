<template>
  <div class="s-modal-example">
    <s-title class="h1" title="Modal" />
    <s-box class="flex-inline flex-center">
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
    </s-box>
  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'
import SModal from '../../../src/components/SModal/Index.vue'
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'

export default {
  components: { SButton, SModal, SBox, STitle },

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
  & > .s-box{
    & > .s-button { margin-right: 30px; margin-bottom: 10px;}
  }
}
</style>
