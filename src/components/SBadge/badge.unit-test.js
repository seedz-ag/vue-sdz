import { mount } from '@vue/test-utils'

import SBadge from './Index.vue'

/* eslint-disable */
describe('SBadge', () => {

  let cmp;

  beforeEach(() => {
    cmp = mount(SBadge, {
      propsData: {
        dot: true
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('check content', () => {
    const wrapper = mount(SBadge, { propsData: { content: '5' } })

    const content = wrapper.find('div > div')
    expect(content.exists()).toBe(true)
    expect(content.text()).toBe('5')
  })

  test('check dot class', () => {
    
    const div = cmp.find('div > div')
    expect(div.classes('--dot')).toBe(true)
    expect(div.classes()).toContain('--dot')
  })

})
