import { mount } from '@vue/test-utils'

import SProgressbar from './Index.vue'

/* eslint-disable */
describe('SProgressbar', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SProgressbar, {
      propsData:{
        value: 65
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

    expect(cl.classes()).toContain('s-progress-bar')
  })

  test('check class', () => {

    const cl = cmp.find('div > div')

    expect(cl.attributes().style).toContain('width')
  })

})
