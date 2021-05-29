<template>
    <div @click.stop="favoriteBook(book)" class="btn-like">
        <i v-if="liked" class="bi bi-heart-fill"></i>
        <i v-else class="bi bi-heart"></i>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'BookListItemLike',
    props: {
        book: {
            type: Object,
            required: true,
            default() {
                return {}
            },
        },
    },
    computed: {
        ...mapGetters('booksModule', ['favoriteBooks']),
    },
    data() {
        return {
            liked: false,
        }
    },
    created() {
        this.liked = this.likedBook()
    },
    methods: {
        likedBook() {
            return this.favoriteBooks.some(b => b.name === this.book.name)
        },
        favoriteBook(book) {
            !this.liked
                ? this.$store.dispatch('booksModule/setBookFavorite', book)
                : this.$store.dispatch('booksModule/removeBookFavorite', book)

            this.liked = this.likedBook()
        },
    },
}
</script>
