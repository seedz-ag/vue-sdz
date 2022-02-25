import { mount, shallowMount } from '@vue/test-utils'

import SInput from './Index.vue'

/* eslint-disable */
describe('SInput', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SInput, {
      propsData: {
        small: true,
        value: 'Nova informacao do input',
        round: true,
        validation: 'Com mensagem',
        positiveOnly:true,
        label: 'teste',
        icon: 'sdz-eye-off',
        placeholder: 'Digite o nome',
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
    expect(label.text()).toBe('teste')
  })

  test('icon', () => {

    const icon = cmp.find('.icon')

    expect(icon.exists()).toBe(true)
    expect(icon.classes()).toContain('sdz-eye-off')
  })

  // test('validation', () => {

  //   const div = cmp.find('.validation > .message > .text')
  //   expect(div.exists()).toBe(true)
  //   expect(div.text()).toBe('Com mensagem')

  // })

  // test('rounded', () => {

  //   const input = cmp.find('.input')

  //   expect(input.classes('--is-rounded')).toBe(true)
  //   expect(input.classes()).toContain('--is-rounded')
  // })

  test('disabled', () => {

    expect(cmp.classes('--is-disabled')).toBe(true)
    expect(cmp.classes()).toContain('--is-disabled')
  })

  test('money', async () => {
    const wrapper = mount(SInput, { propsData: { isMoney: true } })

    expect(wrapper.classes('--is-money')).toBe(true)
    expect(wrapper.classes()).toContain('--is-money')

    const input = wrapper.find('input[type="tel"]')
    await input.setValue('420')

    expect(input.element.value).toBe('R$ 4,20')
  })

  test('mask', async () => {
    const wrapper = mount(SInput, { propsData: { mask: '####-####', value: '23213213' } })

    expect(wrapper.vm.value).toBe('23213213')

    const input = wrapper.find('.input')
    await input.setValue('14213213')
    expect(input.element.value).toBe('14213213')
  })

  test('placeholder', () => {

    const input = cmp.find('.input')

    expect(input.attributes('placeholder')).toBe('Digite o nome')
  })

  test("emits input event when set value", () => {
    const handleInput = jest.fn();
    const wrapper = shallowMount(SInput, { listeners: { input: handleInput }});

    wrapper.find("input").setValue('Algo');
    expect(handleInput).toHaveBeenCalled();
  });

})
