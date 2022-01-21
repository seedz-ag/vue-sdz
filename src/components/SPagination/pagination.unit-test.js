import { mount } from '@vue/test-utils'

import SPagination from './Index.vue'

/* eslint-disable */
describe('SPagination', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SPagination, {
      propsData:{
        totalPage: 25,
        page: 8,

      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('check number', () => {

    expect(cmp.text()).toContain('25')

  })

  test('check count text', () => {

    const text = cmp.findAll('.text')
    
    expect(text.length).toBe(5)

  })

  test('check class', () => {

    const cl = cmp.find('div > div > i')

    expect(cl.classes()).toContain('sdz-chevron-up')

  })

})
