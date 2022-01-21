import { mount } from '@vue/test-utils'

import STabber from './Index.vue'

/* eslint-disable */
describe('STabber', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(STabber, {
      propsData:{
        activeTab: 'seumadruga',
        tabs: [
          { name: 'Chaves', value: 'chaves', icon: 'sdz-share' },
          { name: 'Seu Madruga', value: 'seumadruga', icon: 'sdz-divide' },
          { name: 'Nhonho', value: 'nhonho', icon: 'sdz-key', disabled: true },
          { name: 'Quico', value: 'quico', icon: 'sdz-key' }
        ]
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('count items', () => {

    const items = cmp.findAll('.content')

    expect(items.length).toBe(4)
  })

  test('check item', () => {

    const cl = cmp.find('.text')

    expect(cl.text()).toContain('Chaves')
  })

})
