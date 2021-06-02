<template>

    <b-container>
        <b-row style="width:100%">
                <b-col cols="12" class="d-flex justify-content-left total-books-counter">
                    Total: {{books.length}}
                </b-col>
                <b-col v-if="paginated.length < 1" cols="12">
                    <p>
                        Livros não encontrados para a pesquisa: <strong>{{ this.$store.state.searchField }}</strong>
                    </p>
                    <img src="@/assets/imgs/book.gif" style="width:54%"/>
                </b-col>
                <b-col v-for="(book, index) in paginated" :key="index" xl="3" cols="12" sm="12">

                    <article class="book-list-item">
                        <figure>
                            <router-link :to="'book/' + bookDetailParameter(book)">
                            <b-row class="justify-content-around align-items-center">
                                <b-col cols="12" offset="2">
                                    <div class="book-list-item-cover--picture">
                                        <img :src="book.cover_picture" @error="imageLoadError" width="180px">
                                    </div>
                                </b-col>
                            </b-row>
                            </router-link>
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
                        :page-count="Math.ceil((searchFilter.length / perPage))"
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
import { mapGetters } from 'vuex'

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
        bookDetailParameter(book) {
            return book.author.toLowerCase().replace(new RegExp(" ","gm"), '-')+ '/' +book.name.toLowerCase().replace(new RegExp(" ","gm"), '-')
        }
    },
    computed: {
        ...mapGetters(['searchFilter']),
        books() {
            return this.$store.state.books
        },
        paginated() {
            return this.searchFilter.slice((this.page - 1) * this.perPage, this.page * this.perPage);
        },
        pageCount() {
            return this.searchFilter.length > this.books ? 's' : 's'
        }
    },
    mounted() {
       this.$store.dispatch('getBooks');
    }
}
</script>