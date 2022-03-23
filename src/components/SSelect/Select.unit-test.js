import { mount, shallowMount } from '@vue/test-utils'

import SSelect from './Index.vue'

/* eslint-disable */
describe('SSelect', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SSelect, {
      propsData: {
        display: "name",
        displayBy: "value",
        items: [{name:"opcao 1", value:"opcao1"},{name:"opcao 2", value:"opcao2"},{name:"opcao 2", value:"opcao2"}],
        required: true,
        label: 'Nome da label',
        disabled: true
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })


  // test("has the expected html structure", () => {
  //   expect(cmp.element).toMatchSnapshot();
  // })

  test('label', () => {

    const label = cmp.find('.label > .text')
    expect(label.exists()).toBe(true)
    expect(label.text()).toBe('Nome da label')

  })


  test('disabled', () => {

    expect(cmp.classes('--is-disabled')).toBe(true)
    expect(cmp.classes()).toContain('--is-disabled')

  })


})
