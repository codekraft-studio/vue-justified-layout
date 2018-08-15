import {shallowMount} from '@vue/test-utils'
import VueJustifiedLayout from '@/components/JustifiedLayout.vue'

describe('JustifiedLayout.vue', () => {
  describe('props', () => {
    it('items prop is required', () => {
      const wrapper = shallowMount(VueJustifiedLayout);
      const options = wrapper.vm.$options;
      expect(options.props.items.required).toBeTruthy()
      expect(options.props.items.type).toBe(Array);
    })

    it('accept an array of numbers', () => {
      expect(() => {
        shallowMount(VueJustifiedLayout, {
          propsData: {
            items: [2, 1.5, 1]
          }
        });
      }).not.toThrow()
    })

    it('accept an array of objects', () => {
      expect(() => {
        shallowMount(VueJustifiedLayout, {
          propsData: {
            items: [
              {
                width: 250,
                height: 400,
                url: 'https://source.unsplash.com/featured/250x400?green,blue'
              }, {
                width: 300,
                height: 400,
                url: 'https://source.unsplash.com/featured/300x400?green,blue'
              }
            ]
          }
        });
      }).not.toThrow()
    })
  })

  describe('rendering', () => {
    it('render empty container when items are empty', () => {
      const wrapper = shallowMount(VueJustifiedLayout, {
        propsData: {
          items: []
        }
      })
      expect(wrapper.find('div.justified-container')).toBeTruthy()
    })

    it('render with custom style options', () => {
      const wrapper = shallowMount(VueJustifiedLayout, {
        propsData: {
          items: [
            1, 0.5, 1
          ],
          options: {
            targetRowHeight: 250
          }
        }
      })
      const items = wrapper.find('div.justified-item')
      expect(items).toBeTruthy()
      for (var i = 0; i < items.length; i++) {
        expect(items[i].attributes().style).toContain('height: 250px;')
      }
    })
  })

  describe('events', () => {
    it('attach a resize event listener', () => {
      const mockFn = jest.fn()
      window.addEventListener = mockFn
      const wrapper = shallowMount(VueJustifiedLayout, {
        propsData: {
          items: []
        }
      })
      expect(window.addEventListener).toHaveBeenCalled();
      expect(mockFn).toHaveBeenCalledWith('resize', wrapper.vm.onResize)
    });

    it('remove resize event listener on destroy', () => {
      const mockFn = jest.fn()
      const wrapper = shallowMount(VueJustifiedLayout, {
        propsData: {
          items: []
        }
      })
      window.removeEventListener = mockFn
      wrapper.destroy()
      expect(window.removeEventListener).toHaveBeenCalled();
      expect(mockFn).toHaveBeenCalledWith('resize', wrapper.vm.onResize)
    })
  })
})
