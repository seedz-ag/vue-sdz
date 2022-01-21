import { mount } from '@vue/test-utils'

import SBreadcrumb from './Index.vue'

/* eslint-disable */
describe('SBreadcrumb', () => {

  let cmp;

  beforeEach(() => {
    cmp = mount(SBreadcrumb, {
      propsData: {
        color: 'light',
        items: [
          {
            disabled: true,
            current: false,
            text: 'Parent Page',
            to: '#',
            external: false
          },
          {
            disabled: true,
            current: false,
            text: 'Sub-Parent Page 1',
            to: '#',
            external: false
          },
          {
            disabled: true,
            current: true,
            text: 'Sub-Parent Page 2',
            to: '#',
            external: false
          }
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

  test('check text li', () => {

    const content = cmp.find('div > ul > li')
    expect(content.exists()).toBe(true)
    expect(content.text()).toBe('Parent Page')
  })

  test('check icon', () => {

    const content = cmp.find('div > ul > li > i')
    expect(content.classes('sdz-chevron-right')).toBe(true)
    expect(content.classes()).toContain('sdz-chevron-right')
  })

  test('check not dark class', () => {
    
    const div = cmp.find('div > ul')
    expect(div.classes('dark')).toBe(false)
  })

})
