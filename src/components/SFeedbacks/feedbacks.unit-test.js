import { mount } from '@vue/test-utils'

import SFeedbacks from './Index.vue'

/* eslint-disable */
describe('SFeedbacks', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SFeedbacks, {
      propsData: {
        feedbacks: [
          { type: 'info', message: 'teste' },
          { type: 'info', message: 'Nova informação' }
        ]
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })

  test('check count messages', () => {

    const text = cmp.findAll('.message-container')
    expect(text.length).toBe(2);

  })

  test('check body text', () => {

    const text = cmp.find('is-positive')

    expect(text.exists()).toBe(false)

  })

})
