<template>
    <button class="book-like-btn" v-if="checkLikedBook(indexBook)" @click="clickedHeartAnimation(indexBook)">
        <b-icon icon="heart-fill" variant="danger" :animation="likeAnimation" font-scale="1.5"></b-icon>
    </button>
    <button class="book-like-btn" v-else @click="clickedHeartAnimation(indexBook)">
        <b-icon icon="heart" font-scale="1.5"></b-icon>
    </button>
</template>

<script>
export default {
    props: ['indexBook'],
    data() {
        return {
            isLikedAnimationOn: false,
            myLikedBooks: [],
        }
    },
    methods: {
        clickedHeartAnimation(i) {
            if(this.myLikedBooks.includes(i)) {
                this.myLikedBooks.splice(this.myLikedBooks.indexOf(i), 1);
            } else {
                this.isLikedAnimationOn = !this.isLikedAnimationOn;
                this.myLikedBooks.push(i);
                setTimeout(() => {
                    this.isLikedAnimationOn = !this.isLikedAnimationOn;
                },500)
            }
            console.log(this.myLikedBooks)
            
        },
        checkLikedBook(i) {
            return this.myLikedBooks.includes(i);
        },
    },
    computed: {
        likeAnimation() {
            return this.isLikedAnimationOn ? 'throb' : '';
        }
    },
}
</script>
