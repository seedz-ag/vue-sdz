<template>
  <div class="s-icon-example">
    <s-icon icon="plus" size="30" />

    <s-icon :icon="icon" size="40" @click.native="changeIcon" />
  </div>
</template>

<script>
import SIcon from '../../../src/components/SIcon/Index.vue'

export default {
  components: { SIcon },

  data () {
    return {
      icon: 'heart'
    }
  },

  methods: {
    changeIcon () {
      this.icon = 'plus'
    }
  }
}
</script>
