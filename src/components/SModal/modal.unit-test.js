import { mount } from '@vue/test-utils'

import SModal from './Index.vue'

/* eslint-disable */
describe('SModal', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SModal, {
      propsData:{
        isOpened: true,
        title: 'Novo titulo para o modal',
        noClose: true,

      },
      slots:{
        default: 'Conteudo do modal'
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('check header text', () => {

    const text = cmp.find('transition-stub > div > div > div > div')
    
    expect(text.exists()).toBe(true)
    expect(text.text()).toContain('Novo titulo para o modal')

  })

  test('check body text', () => {

    const text = cmp.find('.content')
    
    expect(text.exists()).toBe(true)
    expect(text.text()).toContain('Conteudo do modal')

  })

  test('check class', () => {

    const div = cmp.find('transition-stub > div')
    
    expect(div.exists()).toBe(true)
    expect(div.classes()).toContain('s-modal')

  })

})
