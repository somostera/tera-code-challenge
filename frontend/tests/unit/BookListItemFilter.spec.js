import { mount } from '@vue/test-utils'
import BookListItemFilter from '@/components/books/BookListItemFilter.vue'

describe('BookListItemFilter.vue', () => {
    it('simulate emitted event search', async () => {
        let search = 'Lorem ipsum dolor sit amet'
        const wrapper = mount(BookListItemFilter, {})

        await wrapper.find('.search > input').setValue(search)
        
        expect(wrapper.find('.search > input').element.value).toBe(search)
        expect(wrapper.emitted('on-filter-search')[0]).toEqual([search])
    })

    it('simulate emitted event selected', async () => {
        const wrapper = mount(BookListItemFilter, {})
        
        await wrapper.find('.form-selected').trigger('click')
        await wrapper.find('.items > .items-select').trigger('click')

        expect(wrapper.emitted('on-filter-select')[0]).toEqual(['rated'])
    })
})