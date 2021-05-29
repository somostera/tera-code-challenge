<template>
    <div class="book-list-image" :class="{ disabled: stock == 0 }">
        <img :src="src" :alt="alt" />
        <div v-if="stock == 0" class="book-list-image-stock">
            Fora de estoque
        </div>
    </div>
</template>

<script>
export default {
    name: 'BookListItemImage',
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
        },
    },
}
</script>
