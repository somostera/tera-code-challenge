import { shallowMount } from '@vue/test-utils'
import BookListItemImage from '@/components/books/BookListItemImage.vue'

const mock = {
    src: 'https://images-na.ssl-images-amazon.com/images/I/51MK6vm5mlL._SX357_BO1,204,203,200_.jpg',
    alt: 'Pele Negra, Máscaras Brancas',
    stock: 20
}

describe('BookListItemImage.vue', () => {
    it('render with stock', () => {
        const wrapper = shallowMount(BookListItemImage, {
            propsData: {
                src: mock.src,
                alt: mock.alt,
                stock: mock.stock
            }
        })

        expect(wrapper.find('.book-list-image-stock').exists()).toBe(false)
    })

    it('render without stock', () => {
        const wrapper = shallowMount(BookListItemImage, {
            propsData: {
                src: mock.src,
                alt: mock.alt,
                stock: 0
            }
        })

        expect(wrapper.find('.book-list-image-stock').exists()).toBe(true)
    })
})