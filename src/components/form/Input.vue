<template>
  <div class="app-input">
    <label
      :for="id"
      class="text-sm mb-1 inline-block"
      v-if="label"
    >
      {{ label }}
    </label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      :class="classes"
    >
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    label: {
      type: String,
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => 'text'
    },
    id: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    classes() {
      return {
        'block w-full px-3 py-2 h-11 text-sm text-black placeholder-gray-500 transition duration-200 ease-in-out bg-white border border-gray-400 rounded-md focus:outline-none focus:border-primary focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed' : true
      }
    }
  }
}
</script>

<style lang="scss">

</style>
