import { mount, shallowMount } from '@vue/test-utils'

import SCarousel from './Index.vue'

/* eslint-disable */
describe('SCarousel', () => {
  let cmp;

  beforeEach(() => {
    cmp = mount(SCarousel, {
      propsData: {
        items: [
          { color: 'blue' },
          { color: 'yellow' },
          { color: 'red' },
          { color: 'black' },
          { color: 'pink' },
          { color: 'turquoise' },
          { color: 'magenta' },
          { color: 'white' },
          { color: 'orange' },
          { color: 'green' },
          { color: 'purple' },
          { color: 'cyan' },
          { color: 'lime' },
          { color: 'lightblue' }
        ],
        breakpoints: {
          1024: { perPage: 4 },
          768: { perPage: 3 },
          640: { perPage: 2 },
          320: { perPage: 1 }
        }
      }
    });
  });


  test('is instantiated', () => {
    expect(cmp.exists()).toBeTruthy()
  })
  

  test("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  })

  test('check items', () => {

    const items = cmp.findAll('.carousel-item')
    expect(items.length).toBe(14);

  })

  test('check class', () => {

    expect(cmp.classes('vue-coerousel')).toBe(true)
    expect(cmp.classes()).toContain('vue-coerousel')

  })


})
