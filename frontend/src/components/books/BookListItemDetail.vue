<template>
    <div class="book-detail">
        <div class="book-detail-image position-relative">
            <BookListItemImage
                :stock="parseInt(book.stock)"
                :src="book.cover_picture"
                :alt="book.name"
            />
        </div>

        <div class="book-detail-title">{{ book.name }}</div>

        <div class="book-detail-info">
            <div class="d-flex align-items-start justify-content-between">
                <div>
                    <div class="book-detail-author">{{ book.author }}</div>
                    <div class="book-detail-category">{{ book.category }}</div>
                </div>
                <BookListItemLike class="book-detail-like" :book="book" />
            </div>

            <div class="book-detail-stock">
                <span class="stock" v-if="book.stock > 0">
                    Em estoque: {{ book.stock }} unidades
                </span>
                <span class="without-stock" v-else>
                    Fora de estoque
                </span>
            </div>
        </div>

        <div class="book-detail-description">{{ book.description }}</div>
    </div>
</template>

<script>
import BookListItemImage from './BookListItemImage'
import BookListItemLike from './BookListItemLike'

export default {
    name: 'BookListItemDetail',
    components: {
        BookListItemImage,
        BookListItemLike,
    },
    props: {
        book: {
            type: Object,
            required: true,
            default() {
                return {}
            },
        },
    },
}
</script>
