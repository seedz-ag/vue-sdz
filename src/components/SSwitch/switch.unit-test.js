import { mount } from '@vue/test-utils'

import SStepper from './Index.vue'

/* eslint-disable */
describe('SStepper', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SStepper, {
      propsData:{
        value: true,
        label: 'Default Switch',
        negative: true
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('check label text', () => {

    const span = cmp.find('.text')
    expect(span.exists()).toBe(true)
    expect(span.text()).toBe('Default Switch')

  })


  test('check is checked', () => {

    expect(cmp.classes()).toContain('s-switch')

  })

  test("check setChecked false", async() => {

    expect(cmp.classes()).toContain('s-switch')

    const check = await cmp.find('input[type="checkbox"]')
    
    check.setChecked(false)
    expect(check.element.checked).toBe(false)
  })

})
