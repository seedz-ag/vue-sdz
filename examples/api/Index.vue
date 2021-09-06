<template>
  <div>
    <div class="menu">
      <router-link
        :key="name"
        v-for="name in apis"
        :to="{ name: `api-${name}` }"
      >
        {{ name }}
      </router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
const requireComponent = require.context('./', true, /.*?Index\.vue$/)

const apiList = requireComponent
  .keys()
  .filter(component => component !== './Index.vue')
  .map(fileName => fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .split('/')[0])

export default {
  name: 'Apis',

  computed: {
    apis () {
      return apiList
    }
  }
}
</script>
