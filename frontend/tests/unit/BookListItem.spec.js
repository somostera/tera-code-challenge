import { shallowMount, createLocalVue } from '@vue/test-utils'
import BookListItem from '@/components/books/BookListItem.vue'
import VueRouter from 'vue-router'

const routes = [{
    name: 'book-detail',
    path: '/livro/:id'
}]

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter({
    routes
})

const book = {
    name: "Pele Negra, Máscaras Brancas",
    author: "Frantz Fanon",
    description: "A obra fala sobre a negação do racismo contra o negro na França e teve sua primeira edição, em português, em 1963. Aborda o pensamento da Diáspora Africana, o pensamento da descolonização, do pensamento psicológico, da teoria das ciências, da filosofia e da literatura caribenha. O autor trata também da ideologia que ignora a cor, e como ela pode apoiar o racismo que nega - pensamento que causou grande turbulência nas décadas de 1960 e 1970. O livro busca aguçar o senso crítico sobre o racismo e seus impactos.",
    cover_picture: "https://images-na.ssl-images-amazon.com/images/I/51MK6vm5mlL._SX357_BO1,204,203,200_.jpg",
    category: "Universitario",
    stock: 0,
    users_who_liked: [
        "Paula",
        "Giulia",
        "Matias",
        "Julia",
        "Wilson"
    ]
}

describe('BookListItem.vue', () => {
    it('render component with props', () => {
        const wrapper = shallowMount(BookListItem, {
            propsData: {
                book: book,
                index: 0
            }
        })

        expect(wrapper.find('.book-list-item-name').text()).toBe(book.name)
        expect(wrapper.find('.book-list-item-author').text()).toBe(book.author)
        expect(wrapper.find('.book-list-item-category').text()).toBe(book.category)
    })

    it('dispatch when cliked in item', async () => {
        const mockStore = { dispatch: jest.fn() }
        const wrapper = shallowMount(BookListItem, {
            localVue,
            router,
            mocks: {
                $store: mockStore,
            },
            propsData: {
                book: book,
                index: 0
            }
        })

        await wrapper.find('.book-list-item').trigger('click')

        expect(mockStore.dispatch).toHaveBeenCalledWith('booksModule/setBook', book)

        expect(wrapper.find('.book-list-item-name').text()).toBe(book.name)
        expect(wrapper.find('.book-list-item-author').text()).toBe(book.author)
        expect(wrapper.find('.book-list-item-category').text()).toBe(book.category)
    })
})