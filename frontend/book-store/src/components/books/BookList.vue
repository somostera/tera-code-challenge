<template>

    <b-container class="d-flex justify-content-between flex-direction-columns">
        <b-row>
            <b-col cols="12">
                Total: {{books.length}}
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="(book, index) in paginated" :key="index" xl="3" cols="12" sm="12">
                 <article class="book-list-item">
                    <figure>
                        <b-row class="justify-content-around align-items-center">
                            <b-col cols="12" offset="2">
                                <div class="book-list-item-cover--picture">
                                    <img :src="book.cover_picture" @error="imageLoadError" width="180px">
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="justify-content-around align-items-center">
                            <b-col cols="5">
                                <figcaption>
                                    <h6>
                                        <strong>
                                        {{ book.name }}
                                        </strong>
                                    </h6>
                                    <p>
                                        {{ book.author }} <br />
                                        {{ book.category }}
                                    </p>
                                </figcaption>
                            </b-col>
                            <b-col cols="2">
                                <LikeButton :book-name="book.name"></LikeButton>
                            </b-col>
                        </b-row>
                    </figure>
                </article>
            </b-col>
            <b-col cols="12" class="d-flex justify-content-center">
                <paginate
                    v-model="page"
                    :page-count="(books.length / perPage)"
                    :page-range="3"
                    :margin-pages="2"
                    :prev-text="' < '"
                    :next-text="' > '"
                    :container-class="'pagination'"
                    :hide-prev-next="true"
                    :page-class="'page-item'">
                </paginate>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import LikeButton from '@/components/buttons/LikeButton';

export default {
    components: {
        LikeButton,
    },
    data() {
        return {
            page: 1,
            perPage: 8,
        }
    },
    methods: {
        imageLoadError(e) {
            e.target.src = "https://bulma.io/images/placeholders/480x640.png";
        },
    },
    computed: {
        books() {
            return this.$store.state.books
        },
        paginated() {
            return this.books.slice((this.page - 1) * this.perPage, this.page * this.perPage);
        },
    },
    mounted() {
       this.$store.dispatch('getBooks');
    }
}
</script>