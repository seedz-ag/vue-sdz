<template>
  <div class="s-popover-example">
    <h1 class="h1">Popover</h1>
    <div class="box">
      <div class="example-popover flex-line flex-center">
        <s-popover
          v-if="showPopover"

          class="popover"

          :align="align"
          :position="position"
          :element-spacing="5"
          :target="$refs['teste']"

          @handler="showPopover = false"
        >
          <div>Content Popover</div>
        </s-popover>

        <div ref="teste" class="target">popover target</div>
      </div>
      
      <div class="buttons flex-inline">
          <s-button @click.stop="openPopover({ position: 'top', align: 'left' })">top left</s-button>
          <s-button @click.stop="openPopover({ position: 'top', align: 'center' })">top center</s-button>
          <s-button @click.stop="openPopover({ position: 'top', align: 'right' })">top right</s-button>

          <s-button @click.stop="openPopover({ position: 'bottom', align: 'left' })">bottom left</s-button>
          <s-button @click.stop="openPopover({ position: 'bottom', align: 'center' })">bottom center</s-button>
          <s-button @click.stop="openPopover({ position: 'bottom', align: 'right' })">bottom right</s-button>
      </div>
      
    </div>
  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'
import SPopover from '../../../src/components/SPopover/Index.vue'

export default {
  components: { SPopover, SButton },

  data () {
    return {
      align: '',
      position: '',
      showPopover: false
    }
  },

  methods: {
    openPopover ({ position, align }) {
      this.align = align
      this.position = position
      this.showPopover = true
    }
  }
}
</script>

<style lang="scss">
.s-popover-example {
  & > .box{
    & > .buttons {
      margin-top: 70px;

      & > .s-button{
        margin-right: 15px;
      }
    }

    & > .example-popover{
      & > .target {
        border: 1px solid black;
        padding: 10px;
        margin-top: 30px;
      }
    }
    
  }

}
</style>
