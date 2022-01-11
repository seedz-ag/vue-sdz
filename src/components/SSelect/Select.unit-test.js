import { mount, shallowMount } from '@vue/test-utils'

import SSelect from './Index.vue'

/* eslint-disable */
describe('SSelect', () => {
  let cmp;

  beforeEach(() => {
    cmp = shallowMount(SSelect, {
      propsData: {
        display: "name",
        displayBy: "value",
        items: [{name:"opcao 1", value:"opcao1"},{name:"opcao 2", value:"opcao2"},{name:"opcao 2", value:"opcao2"}],
        required: true,

      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('label', () => {
    const wrapper = mount(SSelect, { propsData: { label: 'teste', items: [{name:"opcao 1", value:"opcao1"},{name:"opcao 2", value:"opcao2"},{name:"opcao 2", value:"opcao2"}], } })

    const label = wrapper.find('.label > .text')
    expect(label.exists()).toBe(true)
    expect(label.text()).toBe('teste')
  })


  test('disabled', () => {
    const wrapper = mount(SSelect, { propsData: { disabled: true, items: [{name:"opcao 1", value:"opcao1"},{name:"opcao 2", value:"opcao2"},{name:"opcao 2", value:"opcao2"}], } })

    expect(wrapper.classes('--is-disabled')).toBe(true)
    expect(wrapper.classes()).toContain('--is-disabled')
    // expect(wrapper.attributes('disabled')).toBe('disabled')
  })

})
