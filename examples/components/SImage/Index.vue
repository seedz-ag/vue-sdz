<template>
  <div class="s-image-example">
    <h1 class="h1">Image</h1>

    <div class="box flex-center">
      <div class="alter-image">
        <s-image
          :src="src"
          :duration="100"
          fallback="https://i.ytimg.com/vi/Yt9t9e9gmmw/maxresdefault.jpg"
        />
      </div>
      <div class="flex-inline">
        <s-button primary @click="changeImage('chaves')">chaves</s-button>
        <button @click="changeImage('seumadruga')">seu madruga</button>
        <button @click="changeImage('nhonho')">nhonho</button>
        <button @click="changeImage('victao')">victao</button>
      </div>
    </div>

  </div>
</template>

<script>
import SButton from '../../../src/components/SButton/Index.vue'
import SImage from '../../../src/components/SImage/Index.vue'

export default {
  components: { SButton },
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

.alter-image{width:50%;}
</style>
