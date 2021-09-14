<template>
  <div class="s-icon-example">
    <s-icon image="plus" size="30" />

    <s-icon :image="image" size="40" @click.native="changeImage" />
  </div>
</template>

<script>
import SIcon from '../../../src/components/SIcon/Index.vue'

export default {
  components: { SIcon },

  data () {
    return {
      image: 'heart'
    }
  },

  methods: {
    changeImage () {
      this.image = 'plus'
    }
  }
}
</script>
