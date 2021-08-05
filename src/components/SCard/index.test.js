import { shallowMount } from '@vue/test-utils'
import SCard from './SCard.vue'

describe('SCard', () => {
  it('test example', async () => {
    const wrapper = shallowMount (SCard)

    expect(wrapper.html()).toContain('card')
  })
})
