<template>
    <div class="book-list-item" @click="goToDetail">
        <div class="book-list-item-image">
            <img :src="book.cover_picture" :alt="book.name" @error="noImage" />
        </div>
        <div class="book-list-item-info">
            <div>
                <div class="book-list-item-name">{{ book.name }}</div>
                <div class="book-list-item-author">{{ book.author }}</div>
                <div class="book-list-item-category">{{ book.category }}</div>
            </div>
            <BookListItemLike class="book-list-item-like" :book="book" />
        </div>
    </div>
</template>

<script>
import BookListItemLike from './BookListItemLike'

export default {
    name: 'BookListItem',
    components: {
        BookListItemLike,
    },
    props: {
        index: {
            type: Number,
            required: true,
        },
        book: {
            type: Object,
            required: true,
            default() {
                return {}
            },
        },
    },
    methods: {
        noImage(e) {
            e.target.src = require('@/assets/images/no_image.png')
        },
        goToDetail() {
            this.$store.dispatch('booksModule/setBook', this.book)
            this.$router.push({
                name: 'book-detail',
                params: { id: this.index },
            })
        },
    },
}
</script>
