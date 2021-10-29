<template>
  <div class="s-popover-example">
    <div class="buttons">
      <s-button @click.stop="openPopover({ position: 'top', align: 'left' })">top left</s-button>
      <s-button @click.stop="openPopover({ position: 'top', align: 'center' })">top center</s-button>
      <s-button @click.stop="openPopover({ position: 'top', align: 'right' })">top right</s-button>

      <s-button @click.stop="openPopover({ position: 'bottom', align: 'left' })">bottom left</s-button>
      <s-button @click.stop="openPopover({ position: 'bottom', align: 'center' })">bottom center</s-button>
      <s-button @click.stop="openPopover({ position: 'bottom', align: 'right' })">bottom right</s-button>
    </div>

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
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  width: 700px;

  & > .buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & > .s-button { margin: 15px; }
  }

  & > .target {
    margin-top: 60px;
    border: 1px solid black;
    padding: 10px;
  }
}
</style>
