import { mount } from '@vue/test-utils'

import SAvatar from './Index.vue'

/* eslint-disable */
describe('SAvatar', () => {

  let cmp;

  beforeEach(() => {
    cmp = mount(SAvatar, {
      propsData: {
        size: 'm',
        color: 'dark'
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('check size m', () => {
    expect(cmp.classes('--is-size-p')).toBe(false)
    expect(cmp.classes('--is-size-g')).toBe(false)
    expect(cmp.classes('--is-size-m')).toBe(true)
    expect(cmp.classes()).toContain('--is-size-m')
  })

  test('check color dark', () => {
    expect(cmp.classes('--is-color-light')).toBe(false)
    expect(cmp.classes('--is-color-dark')).toBe(true)
    expect(cmp.classes()).toContain('--is-color-dark')
  })

})
