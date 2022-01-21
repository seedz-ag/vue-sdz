import { mount } from '@vue/test-utils'

import SHeader from './Index.vue'

/* eslint-disable */
describe('SHeader', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SHeader, {
      propsData:{
        isOpened: true
      },
      slots:{
        default: '<div>Item da Header</div>'
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('check collapsible class', () => {

    const text = cmp.find('.s-collapsible')
    expect(text.exists()).toBe(true)

  })

  test('check body text', () => {

    const text = cmp.find('div > div > div')
    
    expect(text.exists()).toBe(true)
    expect(text.text()).toContain('Item da Header')

  })

})
