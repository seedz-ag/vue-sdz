import { mount } from '@vue/test-utils'

import SAlert from './Index.vue'

/* eslint-disable */
describe('SAlert', () => {

  let cmp;

  beforeEach(() => {
    cmp = mount(SAlert, {
      propsData: {
        header: 'Nome do titulo',
        msg: 'Mensagem do alert'
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('positive', () => {
    const wrapper = mount(SAlert, { propsData: { positive: true } })
    expect(wrapper.classes('--is-positive')).toBe(true)
    expect(wrapper.classes()).toContain('--is-positive')
  })

  test('negative', () => {
    const wrapper = mount(SAlert, { propsData: { negative: true } })
    expect(wrapper.classes('--is-negative')).toBe(true)
    expect(wrapper.classes()).toContain('--is-negative')
  })

  test('header', () => {
    const wrapper = mount(SAlert, { propsData: { header: 'Nome do titulo' } })

    const div = wrapper.find('div > div')
    expect(div.exists()).toBe(true)
    expect(div.text()).toBe('Nome do titulo')

  })

  test('message alert', () => {
    const wrapper = mount(SAlert, { propsData: { msg: 'Mensagem do alert' } })

    const div = wrapper.find('.msg')
    expect(div.exists()).toBe(true)
    expect(div.text()).toBe('Mensagem do alert')

  })

})
