import { mount, shallowMount } from '@vue/test-utils'

import SButton from './Index.vue'

/* eslint-disable */
describe('SButton', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SButton, {
      propsData: {
        fullWidth: true,
        disabled: true,
        success: true,
        icon: 'sdz-check'
      },
      slots: {
        default: `Novo botão`
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('check button text', () => {

    const label = cmp.find('button > span')
    expect(label.exists()).toBe(true)
    expect(label.text()).toBe('Novo botão')

  })


  test('disabled', () => {

    expect(cmp.classes('--disabled')).toBe(true)
    expect(cmp.classes()).toContain('--disabled')

  })

  test('success', () => {

    expect(cmp.classes('--success')).toBe(true)
    expect(cmp.classes()).toContain('--success')

  })

  test('check icon', async () => {
    const wrapper = mount(SButton, { propsData: { icon: 'sdz-check' } })

    const icon = wrapper.find('i')

    expect(icon.exists()).toBe(true)
    expect(icon.classes()).toContain('sdz-check')
  })

  test("emits click event when clicked", () => {
    const handleClick = jest.fn();
    const wrapper = shallowMount(SButton, { listeners: { click: handleClick } });

    wrapper.find("button").trigger("click");
    expect(handleClick).toHaveBeenCalled();
  })


})
