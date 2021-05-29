import { shallowMount } from '@vue/test-utils'
import BaseLoader from '@/components/ui/BaseLoader.vue'

describe('BaseLoader.vue', () => {
    it('renders a loader using state isLoading true', () => {
        const wrapper = shallowMount(BaseLoader, {
            computed: {
                isLoading: () => true,
            },
        })

        expect(wrapper.find('.loader').isVisible()).toBe(true)
    })

    it('renders a loader using state isLoading false', () => {
        const wrapper = shallowMount(BaseLoader, {
            computed: {
                isLoading: () => false,
            },
        })

        expect(wrapper.find('.loader').isVisible()).toBe(false)
    })
})
