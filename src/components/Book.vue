<template>
  <div class="book">
    <img :src="book.cover_picture" :alt="book.name" @click="openBookDetails" />
    <div class="book__info-wrapper">
      <div class="book__info" @click="openBookDetails">
        <strong>{{ book.name }}</strong>
        <span>{{ book.author }}</span>
        <span>{{ book.category }}</span>
      </div>
      <button class="book__like-button" @click="handleLikeButton">
        <HeartIcon name="heart" :color="color" :fill="fill" />
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeartIcon from './HeartIcon.vue'
import store from '../store'

export default defineComponent({
  name: 'Book',
  components: { HeartIcon },
  store,
  props: {
    name: String
  },
  computed: {
    book() {
      return this.$store.getters['getBookByName'](this.name)
    },
    isBookLikedByMe() {
      return this.$store.getters['isBookLikedByMe'](this.book)
    },
    color() {
      if (this.isBookLikedByMe) {
        return 'none'
      }
      return 'var(--color__text)'
    },
    fill() {
      if (this.isBookLikedByMe) {
        return '#ff3252'
      }
      return 'none'
    }
  },
  methods: {
    handleLikeButton() {
      this.$store.dispatch('toggleLikeBook', this.book)
    },
    async openBookDetails() {
      await this.$store.dispatch('setBook', this.book)
      this.$router.push({ name: 'Details', params: { name: this.book.name } })
    }
  }
})
</script>

<style lang="scss" scoped>
$color__bg: var(--color__bg);
$color__text: var(--color__text);

.book {
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  img {
    height: 280px;
  }
}

.book__info-wrapper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 80px;
  margin-top: 24px;
  width: 100%;
}

.book__info {
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 70%;

  strong {
    font-size: 18px;
    font-weight: 700;
  }

  span {
    font-size: 14px;
  }
}

.book__like-button {
  background: transparent;
  border: 0;
  cursor: pointer;
  height: 32px;
  transition: opacity 0.3s;
  width: 32px;

  &:hover {
    opacity: 0.6;
  }
}

@media only screen and (max-width: 1100px) {
  .book {
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    img {
      height: 240px;
    }
  }

  .book__info-wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    min-height: 80px;
    margin-top: 24px;
    width: 100%;
  }

  .book__info {
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 70%;

    strong {
      font-size: 18px;
      font-weight: 700;
    }

    span {
      font-size: 14px;
    }
  }

  .book__like-button {
    background: transparent;
    border: 0;
    cursor: pointer;
    height: 32px;
    transition: opacity 0.3s;
    width: 32px;

    &:hover {
      opacity: 0.6;
    }
  }
}

@media only screen and (max-width: 840px) {
}

@media only screen and (max-width: 690px) {
}
</style>
