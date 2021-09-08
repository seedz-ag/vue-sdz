<template>
  <div class="s-sidebar-example">
    <s-sidebar :items="items" />
  </div>
</template>

<script>
import SSidebar from '../../../src/components/SSidebar/Index.vue'

export default {
  components: { SSidebar },

  data () {
    return {
      items: [
        { name: 's-button', icon: 'xxx', redirect: '/components/s-button' },
        { name: 's-card', redirect: '/components/s-card', disabled: true },
        {
          name: 'Teste',
          icon: 'yyy',
          redirect: '/teste',
          child: [
            { name: 'Filho teste', redirect: '/filho-teste' },
            { name: 'Filho teste-2', redirect: '/filho-teste-2' }
          ]
        },
        {
          name: 'Coe',
          icon: 'zzz',
          redirect: '/coe',
          child: [
            { name: 'Filho coe', redirect: '/filho-coe', disabled: true },
            { name: 'Filho coe-2', redirect: '/filho-coe-2' },
            {
              name: 'Filho coe-3',
              redirect: '/filho-coe-3',
              child: [
                { name: 'Mane', redirect: '/mane-coe' },
                { name: 'Mane-3', redirect: '/mane-coe-3' }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
