import { mount } from '@vue/test-utils'

import SStepper from './Index.vue'

/* eslint-disable */
describe('SStepper', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SStepper, {
      propsData:{
        step: 2,
        items: [
          { label: 'item 1', icon: 'sdz-dollar-sign', disabled: false },
          { label: 'item 2', icon: 'sdz-link', disabled: false },
          { label: 'item 3', icon: 'sdz-shield', disabled: false },
          { label: 'item 4', icon: 'sdz-shield-off', disabled: true },
          { label: 'item 5', icon: 'sdz-cart', disabled: false }
        ]
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('count items', () => {

    const items = cmp.findAll('.content')

    expect(items.length).toBe(5)
  })

  test('check item', () => {

    const cl = cmp.find('.--is-active > div > label')

    expect(cl.text()).toContain('item 1')
  })

})
