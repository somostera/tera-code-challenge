<template>
    <div class="page-book-detail">
        <div class="container">
            <span class="back" @click="$router.go(-1)"> &lt; Voltar</span>
            <BookListItemDetail :book="book" />
        </div>
    </div>
</template>

<script>
import BookListItemDetail from '@/components/books/BookListItemDetail'
import { mapGetters } from 'vuex'

export default {
    name: 'BookDetail',
    components: {
        BookListItemDetail,
    },
    computed: {
        ...mapGetters('booksModule', ['book']),
    },
}
</script>
