import { mount } from '@vue/test-utils'

import SCollapsible from './Index.vue'

/* eslint-disable */
describe('SCollapsible', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SCollapsible, {
      propsData: {
        isOpened: true
      },
      slots: {
        header:'Header do collapsible',
        default: `Texto do collapsible`
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('check header text', () => {

    const text = cmp.find('div > div')
    expect(text.exists()).toBe(true)
    expect(text.text()).toBe('Header do collapsible')

  })

  test('check body text', () => {

    const text = cmp.find('.wrapper')

    expect(text.attributes().style).toContain('opacity')
    expect(text.exists()).toBe(true)
    expect(text.text()).toBe('Texto do collapsible')

  })

})
