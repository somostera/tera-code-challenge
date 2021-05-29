import { shallowMount } from '@vue/test-utils'
import BookListItemLike from '@/components/books/BookListItemLike.vue'

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

describe('BookListItemLike.vue', () => {
    it('renders a liked book', () => {
        const wrapper = shallowMount(BookListItemLike, {
            propsData: {
                book: book,
            },
            computed: {
                favoriteBooks: () => [{
                    name: book.name
                }]
            }
        })

        expect(wrapper.find('.bi-heart-fill').isVisible()).toBe(true)
    })

    it('renders a not liked book', () => {
        const wrapper = shallowMount(BookListItemLike, {
            propsData: {
                book: book,
            },
            computed: {
                favoriteBooks: () => [{
                    name: 'Lorem ipsum'
                }]
            }
        })

        expect(wrapper.find('.bi-heart').isVisible()).toBe(true)
    })

    it('dispatches a liked book when button is cliked (removed)', async () => {
        const mockStore = { dispatch: jest.fn() }
        const wrapper = shallowMount(BookListItemLike, {
            mocks: {
                $store: mockStore
            },
            propsData: {
                book: book,
            },
            computed: {
                favoriteBooks: () => [{
                    name: book.name
                }]
            }
        })

        await wrapper.find('.btn-like').trigger('click')

        expect(mockStore.dispatch).toHaveBeenCalledWith("booksModule/removeBookFavorite", book)
    })

    it('dispatches a liked book when button is cliked (set favorite)', async () => {
        const mockStore = { dispatch: jest.fn() }
        const wrapper = shallowMount(BookListItemLike, {
            mocks: {
                $store: mockStore
            },
            propsData: {
                book: book,
            },
            computed: {
                favoriteBooks: () => []
            }
        })

        await wrapper.find('.btn-like').trigger('click')

        expect(mockStore.dispatch).toHaveBeenCalledWith('booksModule/setBookFavorite', book)
    })
})