import { mount, shallowMount } from '@vue/test-utils'

import SRadiobox from './Index.vue'

/* eslint-disable */
describe('SRadiobox', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SRadiobox, {
      propsData: {
        value: true,
        label: 'Radiobox Name',
        name: 'casa',
        value: 'Casa'
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
    expect(span.text()).toBe('Radiobox Name')

  })


  test('check is checked', () => {

    expect(cmp.classes()).toContain('--is-checked')

  })

  test("check checked", async() => {

    const check = await cmp.find('input')
    
    await check.setChecked()

    expect(check.element.checked).toBeTruthy()

  })

})
