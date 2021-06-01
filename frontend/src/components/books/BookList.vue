<template>
    <div class="book-list">
        <BookListItemFilter
            @on-filter-search="onFilterSearch"
            @on-filter-select="onFilterSelect"
            @on-filter-category="onFilterCategory"
        />

        <div class="book-list-total">Total: {{ filteredBooks.length }}</div>

        <paginate
            ref="paginator"
            class="row"
            name="bookstore"
            :list="filteredBooks"
            :per="8"
            v-if="filteredBooks.length > 0"
        >
            <div
                class="col-12 col-md-4 col-lg-3"
                v-for="(book, index) in paginated('bookstore')"
                :key="book.name"
            >
                <BookListItem :book="book" :index="index" />
            </div>
        </paginate>
        <div v-else>
            Nenhum livro encontrado
        </div>
        <paginate-links
            for="bookstore"
            :async="true"
            :show-step-links="true"
            :step-links="{
                next: '>',
                prev: '<',
            }"
            v-if="filteredBooks.length > 0"
        ></paginate-links>
    </div>
</template>

<script>
import BookListItem from './BookListItem.vue'
import BookListItemFilter from './BookListItemFilter.vue'
import { mapGetters } from 'vuex'
import filters from '@/utils/filters'
import orders from '@/utils/orders'

export default {
    name: 'BookList',
    components: {
        BookListItem,
        BookListItemFilter,
    },
    data() {
        return {
            filter: {},
            paginate: ['bookstore'],
        }
    },
    created() {
        this.$store.dispatch('booksModule/getBooks')
    },
    computed: {
        ...mapGetters('booksModule', ['books', 'favoriteBooks']),
        filteredBooks() {
            switch (this.filter.name) {
                case 'search':
                    return filters.filterByName(this.books, this.filter.value)

                case 'category':
                    if (this.filter.value.length > 0) {
                        return filters.filterByCategory(
                            this.books,
                            this.filter.value
                        )
                    } else {
                        return this.books
                    }

                case 'rated':
                    return orders.orderByRated(this.books)

                case 'stock':
                    return orders.orderByStock(this.books)

                case 'alphabetic':
                    return orders.orderByName(this.books)

                case 'likes':
                    return this.favoriteBooks

                default:
                    return this.books
            }
        },
    },
    methods: {
        onFilterSearch(value) {
            this.filter = { name: 'search', value: value }
        },
        onFilterSelect(value) {
            this.filter = { name: value }
        },
        onFilterCategory(value) {
            this.filter = { name: 'category', value: value }
        },
    },
    watch: {
        filteredBooks() {
            setTimeout(() => {
                if (
                    this.$refs.paginator &&
                    this.$refs.paginator.lastPage != 0
                ) {
                    this.$refs.paginator.goToPage(1)
                }
            }, 150)
        },
    },
}
</script>
