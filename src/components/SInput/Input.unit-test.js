import { mount, shallowMount } from '@vue/test-utils'

import SInput from './Index.vue'

/* eslint-disable */
describe('SInput', () => {
  test('is instantiated', () => {
    const wrapper = shallowMount(SInput)

    expect(wrapper.exists()).toBeTruthy()
  })

  test('label', () => {
    const wrapper = mount(SInput, { propsData: { label: 'teste' } })

    const label = wrapper.find('.label > .text')
    expect(label.exists()).toBe(true)
    expect(label.text()).toBe('teste')
  })

  // test('is float label', () => {
  //   const wrapper = mount(SInput, { propsData: { label: 'teste', floatLabel: true } })

  //   const label = wrapper.find('.label')
  //   expect(label.element.style.transform).toBe('translateY(35px)')
  //   expect(wrapper.find(".label").attributes().style).toBe("transform: translateY(35px)")
  // })

  test('icon', () => {
    const wrapper = mount(SInput, { propsData: { icon: 'sdz-eye-off' } })

    const icon = wrapper.find('.icon')

    expect(icon.exists()).toBe(true)
    expect(icon.classes()).toContain('sdz-eye-off')
  })

  test('validation', () => {
    const wrapper = mount(SInput, { propsData: { validation: 'error msg' } })

    const div = wrapper.find('.validation > .message > .text')
    expect(div.exists()).toBe(true)
    expect(div.text()).toBe('error msg')
  })

  test('rounded', () => {
    const wrapper = mount(SInput, { propsData: { round: true } })

    const input = wrapper.find('.input')

    expect(input.classes('--is-rounded')).toBe(true)
    expect(input.classes()).toContain('--is-rounded')
  })

  test('disabled', () => {
    const wrapper = mount(SInput, { propsData: { disabled: true } })

    expect(wrapper.classes('--is-disabled')).toBe(true)
    expect(wrapper.classes()).toContain('--is-disabled')
    // expect(wrapper.attributes('disabled')).toBe('disabled')
  })

  test('money', async () => {
    const wrapper = mount(SInput, { propsData: { isMoney: true } })

    expect(wrapper.classes('--is-money')).toBe(true)
    expect(wrapper.classes()).toContain('--is-money')

    const input = wrapper.find('input[type="tel"]')
    await input.setValue('420')

    expect(input.element.value).toBe('R$ 4,20')
  })

  // test('mask', async () => {
  //   const wrapper = mount(SInput, { propsData: { mask: '####-####', value: '23213213' } })

  //   expect(wrapper.vm.value).toBe('2321-3213')

  //   const input = wrapper.find('.input')
  //   await input.setValue('23213213')

  //   expect(input.element.value).toBe('2321-3213')
  // })

  test('placeholder', () => {
    const wrapper = mount(SInput, { propsData: { placeholder: 'Digite o nome' } })

    const input = wrapper.find('.input')

    expect(input.attributes('placeholder')).toBe('Digite o nome')
  })
})
