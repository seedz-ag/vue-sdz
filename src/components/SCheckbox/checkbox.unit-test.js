import { mount } from '@vue/test-utils'

import SCheckbox from './Index.vue'

/* eslint-disable */
describe('SCheckbox', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SCheckbox, {
      propsData: {
        value: true,
        label: 'Checkbox Name',
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
    expect(span.text()).toBe('Checkbox Name')

  })


  test('check is checked', () => {

    expect(cmp.classes()).toContain('--is-checked')

  })

  test("check setChecked false", async() => {

    expect(cmp.classes()).toContain('--is-checked')

    const check = await cmp.find('input[type="checkbox"]')
    
    check.setChecked(false)
    expect(check.element.checked).toBe(false)
  })

})
