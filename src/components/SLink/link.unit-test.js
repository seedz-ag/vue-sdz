import { mount } from '@vue/test-utils'

import SLink from './Index.vue'

/* eslint-disable */
describe('SLink', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SLink, {
      propsData:{
        link: true,
        dark: true,
        to: 'https://seedz.ag'
      },
      slots:{
        default: 'Nome do Link'
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('check class', () => {

    expect(cmp.classes()).toContain('c-link')

  })

  test('check body text', () => {

    const text = cmp.find('a')
    
    expect(text.exists()).toBe(true)
    expect(text.text()).toContain('Nome do Link')

  })

  test('check link', () => {

    const a = cmp.find('a')
    
    expect(a.exists()).toBe(true)
    expect(a.attributes().to).toContain('https://seedz.ag')

  })

})
