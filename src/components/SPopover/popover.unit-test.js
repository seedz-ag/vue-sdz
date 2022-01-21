import { mount } from '@vue/test-utils'

import SPagination from './Index.vue'

/* eslint-disable */
describe('SPagination', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SPagination, {
      propsData:{
        position: 'top',
        align: 'left',
        vIf:true
      },
      slots:{
        default: '<div>Content Popover</div>'
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('check body', () => {

    const cl = cmp.find('div > div')

    expect(cl.text()).toContain('Content Popover')

  })

  test('check class', () => {

    const cl = cmp.find('div')

    expect(cl.classes()).toContain('s-popover')
    expect(cl.classes()).toContain('-bottom')
  })

})
