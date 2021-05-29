import { shallowMount } from '@vue/test-utils'
import BookListItemDetail from '@/components/books/BookListItemDetail.vue'

const books = [
    {
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
    },
    {
        name: "Pele Negra, Máscaras Brancas",
        author: "Frantz Fanon",
        description: "A obra fala sobre a negação do racismo contra o negro na França e teve sua primeira edição, em português, em 1963. Aborda o pensamento da Diáspora Africana, o pensamento da descolonização, do pensamento psicológico, da teoria das ciências, da filosofia e da literatura caribenha. O autor trata também da ideologia que ignora a cor, e como ela pode apoiar o racismo que nega - pensamento que causou grande turbulência nas décadas de 1960 e 1970. O livro busca aguçar o senso crítico sobre o racismo e seus impactos.",
        cover_picture: "https://images-na.ssl-images-amazon.com/images/I/51MK6vm5mlL._SX357_BO1,204,203,200_.jpg",
        category: "Universitario",
        stock: 15,
        users_who_liked: [
            "Paula",
            "Giulia",
            "Matias",
            "Julia",
            "Wilson"
        ]
    }
]

describe('BookListItemFilter.vue', () => {
    it('check book details without stock', () => {
        const wrapper = shallowMount(BookListItemDetail, {
            propsData: {
                book: books[0],
            }
        })

        expect(wrapper.find('.book-detail-title').text()).toBe(books[0].name)
        expect(wrapper.find('.book-detail-author').text()).toBe(books[0].author)
        expect(wrapper.find('.book-detail-category').text()).toBe(books[0].category)
        expect(wrapper.find('.book-detail-description').text()).toBe(books[0].description)
        expect(wrapper.find('.without-stock').exists()).toBe(true)
    })

    it('check book details with stock', () => {
        const wrapper = shallowMount(BookListItemDetail, {
            propsData: {
                book: books[1],
            }
        })

        expect(wrapper.find('.book-detail-title').text()).toBe(books[1].name)
        expect(wrapper.find('.book-detail-author').text()).toBe(books[1].author)
        expect(wrapper.find('.book-detail-category').text()).toBe(books[1].category)
        expect(wrapper.find('.book-detail-description').text()).toBe(books[1].description)
        expect(wrapper.find('.stock').exists()).toBe(true)
    })
})