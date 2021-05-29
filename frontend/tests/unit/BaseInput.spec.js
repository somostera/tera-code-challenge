import { shallowMount } from '@vue/test-utils'
import BaseInput from '@/components/ui/BaseInput.vue'

describe('BaseInput.vue', () => {
    it('pass value to input', () => {
        let value = 'Lorem ipsum dolor sit amet'
        const wrapper = shallowMount(BaseInput, {
            propsData: {
                value: value,
            },
        })

        const inputValue = wrapper.find('input').element.value
        expect(inputValue).toBe(value)
    })

    it('pass placeholder to input', () => {
        let placeholder = 'Custom placeholder text'
        let value = ''
        const wrapper = shallowMount(BaseInput, {
            propsData: {
                value: value,
                placeholder: placeholder,
            },
        })

        const inputPlaceholder = wrapper.find('input').element.placeholder
        expect(inputPlaceholder).toBe(placeholder)
    })
})
