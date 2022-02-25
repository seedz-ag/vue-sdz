<template>
  <div class="s-drawler-example">
    <s-title size="title-1">Drawler</s-title>

    <!-- <source-code file="SDrawerExample" comp="SDrawer">
      <s-button class="header" slot="header">header toggle</s-button>
      <div v-html="content" />
    </source-code> -->

    <s-box class="flex-inline flex-center">
      <s-button @click="isOpened = !isOpened">open</s-button>

      <s-drawer :is-opened="isOpened" direction="left" @close="isOpened = false">
        OPA
      </s-drawer>
    </s-box>
  </div>
</template>

<script>
import SBox from '../../commons/box.vue'
import STitle from '../../commons/title.vue'
import SButton from '../../../src/components/SButton/Index.vue'
import SDrawer from '../../../src/components/SDrawer/Index.vue'
// import SourceCode from '../SourceCode/Index.vue'

export default {
  name: 'SDrawerExample',

  components: { STitle, SDrawer, SBox, SButton },

  data () {
    return {
      isOpened: false
    }
  }
}
</script>


<style lang="scss">
.s-collapsible-drawler {
}
</style>
