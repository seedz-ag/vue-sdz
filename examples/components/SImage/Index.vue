<template>
  <div class="s-image-example">
    <s-image
      :src="src"
      :duration="100"
      fallback="https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg"
    />

    <button @click="changeImage('chaves')">chaves</button>
    <button @click="changeImage('seumadruga')">seu madruga</button>
    <button @click="changeImage('nhonho')">nhonho</button>
    <button @click="changeImage('victao')">victao</button>
  </div>
</template>

<script>
import SImage from '../../../src/components/SImage/Index.vue'

export default {
  components: { SImage },

  data () {
    return {
      src: ''
    }
  },

  created () {
    this.changeImage('chaves')
  },

  methods: {
    changeImage (image) {
      this.src = new URL(`../../../src/assets/examples/${image}.jpg`, import.meta.url).href
    }
  }
}
</script>

<style lang="scss">
.s-image-example {
  margin: 0 auto;

  & > .s-image { width: 250px; }
}
</style>
