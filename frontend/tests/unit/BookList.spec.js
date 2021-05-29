import { shallowMount, createLocalVue, config } from '@vue/test-utils'
import Vuex from 'vuex'
import BookList from '@/components/books/BookList.vue'
import * as type from '../../src/store/mutation-types'

const localVue = createLocalVue()
localVue.use(Vuex)

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
        name: "Head First Design Patterns: A Brain-Friendly Guide",
        author: "Eric Freeman",
        description: "At any given moment, someone struggles with the same software design problems you have. And, chances are, someone else has already solved your problem. This edition of Head First Design Patterns—now updated for Java 8—shows you the tried-and-true, road-tested patterns used by developers to create functional, elegant, reusable, and flexible software. By the time you finish this book, you’ll be able to take advantage of the best design practices and experiences of those who have fought the beast of software design and triumphed. We think your time is too valuable to spend struggling with New concepts. Using the latest research in cognitive science and learning theory to craft a multi-sensory learning experience, Head First Design Patterns uses a visually rich format designed for the way your brain works, not a text-heavy approach that puts you to sleep.",
        cover_picture: "https://images-na.ssl-images-amazon.com/images/I/61APhXCksuL._SX430_BO1,204,203,200_.jpg",
        category: "Technology",
        stock: 14,
        users_who_liked: []
    },
    {
        name: "Beck Mongolian Chop Squad",
        author: "Harold Sakuichi",
        description: "BECK is a Japanese manga series written and illustrated by Harold Sakuishi. It was originally serialized in Monthly Shōnen Magazine from 1999 to 2008, with the 103 chapters later published into 34 tankōbon volumes by Kodansha. It tells the story of a group of Japanese teenagers who form a rock band and their struggle to fame, focusing on 14-year-old Yukio \"Koyuki\" Tanaka, who until meeting guitar prodigy Ryusuke Minami was an average teen with a boring life. It was adapted into a 26-episode anime television series, titled BECK: Mongolian Chop Squad, by Madhouse and aired on TV Tokyo from October 2004 to March 2005. A live-action film adaptation was released in 2010 and stars Takeru Satoh as Koyuki and Hiro Mizushima as Ryusuke.[4] The series has also spawned three guidebooks, four soundtracks, a video game and a line of guitars. The Beck manga was licensed for an English-language release in North America by Tokyopop. The first volume was published in July 2005, but the series was discontinued after the release of volume 12 in June 2008. In July 2018, ComiXology began releasing the series digitally. The anime was given an English-language release by Funimation from in 2007 to 2008.",
        cover_picture: "https://upload.wikimedia.org/wikipedia/en/f/f8/BECK_vol1_Cover.jpg",
        category: "Manga",
        stock: 0,
        users_who_liked: [
            "Matias",
            "Wilson",
            "Giulia"
        ]
    },
]

describe('BookList.vue', () => {
    let store

    beforeEach(() => {
        store = new Vuex.Store({
            modules: {
                booksModule: {
                    namespaced: true,
                    state: {
                        isLoading: false,
                        books: []
                    },
                    getters: {
                        isLoading(state) {
                            return state.isLoading
                        },
                        books(state) {
                            return state.books
                        }
                    },
                    mutations: {
                        [type.FETCHING_BOOKS_SUCCESS](state, books) {
                            state.books = books
                        }
                    },
                    actions: {
                        getBooks({ commit }) {
                            commit(type.FETCHING_BOOKS_SUCCESS, books)
                            return books
                        }
                    },
                }    
            }
        })
    })

    it('renders the searched book', async () => {
        let filter = { name: 'search', value: 'Pele Negra, Máscaras Brancas' }
        const wrapper = shallowMount(BookList, { store, localVue })

        await wrapper.setData({ filter: filter })

        let filteredBooks = wrapper.vm.filteredBooks

        expect(filteredBooks.length).toBe(1)
        expect(filteredBooks[0].name).toBe(filter.value)
    })

    it('renders the searched category', async () => {
        let filter = { name: 'category', value: 'Manga' }
        const wrapper = shallowMount(BookList, { store, localVue })

        await wrapper.setData({ filter: filter })

        let filteredBooks = wrapper.vm.filteredBooks

        expect(filteredBooks.length).toBe(1)
        expect(filteredBooks[0].category).toBe(filter.value)
    })

    it('renders the books ordered by rated', async () => {
        let filter = { name: 'rated' }
        const wrapper = shallowMount(BookList, { store, localVue })

        await wrapper.setData({ filter: filter })

        let filteredBooks = wrapper.vm.filteredBooks

        expect(filteredBooks.length).toBe(books.length)
        expect(filteredBooks[0].name).toBe('Pele Negra, Máscaras Brancas')
        expect(filteredBooks[2].name).toBe('Head First Design Patterns: A Brain-Friendly Guide')
    })

    it('renders the books ordered by stock', async () => {
        let filter = { name: 'stock' }
        const wrapper = shallowMount(BookList, { store, localVue })

        await wrapper.setData({ filter: filter })

        let filteredBooks = wrapper.vm.filteredBooks

        expect(filteredBooks.length).toBe(1)
        expect(filteredBooks[0].name).toBe('Head First Design Patterns: A Brain-Friendly Guide')
    })
})