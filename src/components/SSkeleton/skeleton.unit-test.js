import { mount } from '@vue/test-utils'

import Skeleton from './Index.vue'

/* eslint-disable */
describe('Skeleton', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(Skeleton, {
      propsData:{
        size: 65,
        rows: 3
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

    const cl = cmp.find('div')

    expect(cl.classes()).toContain('s-skeleton-container')
  })

  test('check style', () => {

    const cl = cmp.find('div > div')

    expect(cl.attributes().style).toContain('width: 65%; height: 60px;')
  })

})
