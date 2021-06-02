<template>
    <button class="book-like-btn" v-if="checkLikedBook" @click="switchLikeBook(bookName)">
        <b-icon icon="heart-fill" variant="danger" animation="" font-scale="1.5"></b-icon>
    </button>
    <button class="book-like-btn" v-else @click="switchLikeBook(bookName)">
        <b-icon icon="heart" font-scale="1.5" class="book-like-btn-icon"></b-icon>
    </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['bookName'],
    methods: {
        ...mapActions(['switchLikeBook']),
    },
    computed: {
        myLikedBooks() {
            return this.$store.state.myLikedBooks
        }, 
        checkLikedBook() {
            return this.$store.state.myLikedBooks.includes(this.bookName);
        },
    },
}
</script>
