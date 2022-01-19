import { mount, shallowMount } from '@vue/test-utils'

import SCard from './Index.vue'

/* eslint-disable */
describe('SCard', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SCard, {
      propsData: {
        backgroundColor: 'red',
        borderColor: 'blue'
      },
      slots: {
        default: `Texto do card`
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('check card text', () => {

    const span = cmp.find('div')
    expect(span.exists()).toBe(true)
    expect(span.text()).toBe('Texto do card')

  })


  test('check background color', () => {

    expect(cmp.attributes().style).toContain('red')

  })

  test('check border color', () => {

    expect(cmp.attributes().style).toContain('blue')

  })

  test('check class', () => {

    expect(cmp.classes('s-card')).toBe(true)
    expect(cmp.classes()).toContain('s-card')

  })


})
