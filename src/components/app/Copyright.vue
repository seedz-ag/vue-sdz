<template>
  <div class="text-center py-5">
    <p class="text-xs text-gray-700">Seedz Force © {{ getFullYear }} Todos os direitos reservados.</p>
  </div>
</template>

<script>
export default {
  name: 'Copyright',
  computed: {
    getFullYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style>

</style>