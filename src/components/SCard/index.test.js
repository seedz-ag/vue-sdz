import { shallowMount } from '@vue/test-utils'
import SCard from './Index.vue'

describe('SCard', () => {
  it('test example', async () => {
    const wrapper = shallowMount (SCard)
    console.log('dasdasdasddadsdasdasdasddasddasddasddasddasdasdasd')

    expect(wrapper.html()).toContain('card')
  })
})
