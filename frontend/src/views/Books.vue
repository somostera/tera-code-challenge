<template>
    <div class="page-book">
        <div class="container-fluid">
            <BookList />
        </div>
    </div>
</template>

<script>
import BookList from '@/components/books/BookList.vue'

export default {
    name: 'Book',
    components: {
        BookList,
    },
}
</script>
