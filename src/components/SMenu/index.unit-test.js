import { shallowMount } from '@vue/test-utils'
import SMenu from './Index.vue'

describe('SMenu', () => {
  it('test example', async () => {
    const wrapper = shallowMount (SMenu)

    expect(wrapper.html()).toContain('menu')
  })
})
