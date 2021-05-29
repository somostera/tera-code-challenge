import { shallowMount } from '@vue/test-utils'
import BaseSelect from '@/components/ui/BaseSelect.vue'

const options = [
    {
        name: 'option1',
        value: 'value1',
    },
    {
        name: 'option2',
        value: 'value2',
    },
    {
        name: 'option3',
        value: 'value3',
    },
]

describe('BaseSelect.vue', () => {
    it('render component with a default option', () => {
        let defaultOption = { name: 'option3', value: 'value3' }
        const wrapper = shallowMount(BaseSelect, {
            propsData: {
                default: defaultOption,
                options: options,
            },
        })

        expect(wrapper.find('.selected span').text()).toBe(defaultOption.name)
    })

    it('render component with a placeholder', () => {
        let placeholder = 'Lorem ipsum'
        const wrapper = shallowMount(BaseSelect, {
            propsData: {
                placeholder: placeholder,
                options: options,
            },
        })

        expect(wrapper.find('.selected span').text()).toBe(placeholder)
    })

    it('click and open the options', async () => {
        const wrapper = shallowMount(BaseSelect, {
            propsData: {
                options: options,
            },
        })

        await wrapper.find('.selected').trigger('click')

        expect(
            wrapper.find('.items').element.classList.contains('selectHide')
        ).toBe(false)
    })

    it('click and select a option in emitted event', async () => {
        const wrapper = shallowMount(BaseSelect, {
            propsData: {
                options: options,
            },
        })

        await wrapper.find('.selected').trigger('click')
        await wrapper.find('.items > .items-select').trigger('click')

        expect(wrapper.emitted().input[0]).toEqual([options[0].value])
    })
})
