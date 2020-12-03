<template>
  <div class="details">
    <div class="header">
      <router-link to="/">
        <BaseIcon name="chevron-left" fill="none" :color="backColor" />
        Voltar
      </router-link>
    </div>

    <div class="body">
      <h1>{{ book.name }}</h1>
      <div class="out-of-stock-image" v-if="book.stock === 0">
        <div>FORA DE ESTOQUE</div>
        <img :src="book.cover_picture" :alt="book.name" />
      </div>
      <img
        class="book-cover-picture"
        :src="book.cover_picture"
        :alt="book.name"
        v-else
      />
      <div class="book-info">
        <div>
          <div class="author-category">
            <p>{{ book.author }}</p>
            <p>{{ book.category }}</p>
          </div>
          <div class="stock">
            <p v-if="book.stock > 0">Em estoque: {{ book.stock }} unidades</p>
            <p v-else>Fora de Estoque</p>
          </div>
        </div>

        <button class="like-button" @click="handleLikeButton">
          <HeartIcon :color="color" :fill="fill" />
        </button>
      </div>
      <p>
        {{ book.description }}
      </p>
    </div>
  </div>
</template>

<script>
import BaseIcon from '../components/BaseIcon'
import HeartIcon from '../components/HeartIcon'

export default {
  name: 'Details',
  // title: `Livraria do Cowboy :: ${this.book.name}`,
  components: {
    BaseIcon,
    HeartIcon
  },
  computed: {
    book() {
      return this.$store.getters['getBookByName'](this.$route.params.name)
    },
    isBookLikedByMe() {
      return this.$store.getters['isBookLikedByMe'](this.book)
    },
    color() {
      if (this.isBookLikedByMe) {
        return 'none'
      }
      return '#333'
    },
    fill() {
      if (this.isBookLikedByMe) {
        return '#ff3252'
      }
      return 'none'
    },
    backColor() {
      return 'var(--color__text)'
    }
  },
  methods: {
    handleLikeButton() {
      this.$store.dispatch('toggleLikeBook', this.book)
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background: var(--color__bg);
  color: var(--color__text);
}

.details {
  align-items: center;
  background: var(--color__bg);
  color: var(--color__text);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: auto;

  .header {
    font-size: 20px;
    line-height: 1px;
    margin: 30px auto;
    width: 90%;

    a {
      align-items: center;
      color: var(--color__text);
      display: flex;
      text-decoration: none;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 60%;

    .book-cover-picture {
      margin: 10px;
      position: absolute;
      right: 0;
      top: 0;
      width: 320px;
    }

    .out-of-stock-image {
      margin-left: 20px;
      position: absolute;
      right: 0;
      top: 0;
      width: 40%;

      > img {
        align-self: flex-end;
        bottom: 0;
        float: right;
        left: 0;
        margin-left: 20px;
        opacity: 0.6;
        width: 320px;
      }

      > div {
        background: #000;
        -webkit-box-shadow: 2px 8px 5px 0px rgba(71, 71, 71, 1);
        -moz-box-shadow: 2px 8px 5px 0px rgba(71, 71, 71, 1);
        box-shadow: 2px 8px 5px 0px rgba(71, 71, 71, 1);
        color: #fff;
        font-size: 14px;
        font-weight: 800;
        left: 50%;
        top: calc(50% - 24px);
        padding: 16px;
        position: absolute;
        text-align: center;
        z-index: 100;
      }
    }

    h1 {
      font-size: 36px;
      max-width: 480px;
      text-align: left;
    }

    .book-info {
      align-items: flex-start;
      display: flex;
      justify-content: space-between;
      width: 30%;

      > div {
        flex-direction: column;
        font-size: 20px;
        margin-top: 10px;
        text-align: left;

        .author-category {
          display: flex;
          flex-direction: column;
          margin-bottom: 8px;
        }
      }

      .like-button {
        background: transparent;
        border: 0;
        cursor: pointer;
        height: 32px;
        margin-top: 6px;
        transition: opacity 0.3s;
        width: 32px;

        &:hover {
          opacity: 0.6;
        }
      }
    }

    > p {
      margin: 20px 400px 0 0;
      text-align: left;
    }
  }
}

@media only screen and (max-width: 1100px) {
  .details {
    .body {
      width: 80%;
    }
  }
}

@media only screen and (max-width: 840px) {
  .details {
    align-items: center;
    display: flex;
    flex-direction: column;

    .header {
      font-size: 16px;
    }

    .body {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 90%;

      .book-cover-picture {
        align-self: center;
        height: 320px;
        position: unset;
        width: auto;
      }

      .out-of-stock-image {
        align-self: center;
        height: 320px;
        margin-left: -16px;
        margin-top: 20px;
        position: relative;
        right: 0;
        top: 0;
        width: auto;

        > img {
          float: none;
          height: 320px;
          opacity: 0.6;
          width: auto;
        }

        > div {
          font-size: 12px;
          left: calc(50% - 72px);
        }
      }

      h1 {
        font-size: 24px;
        margin-bottom: 20px;
      }

      .book-info {
        align-items: flex-start;
        align-self: center;
        display: flex;
        justify-content: space-between;
        margin-left: 24px;
        margin-top: 24px;
        width: 100%;

        > div {
          display: flex;
          flex-direction: row;
          font-size: 14px;
          justify-content: space-between;
          width: 90%;
        }

        .like-button {
          position: absolute;
          right: 32px;
          top: 170px;
        }
      }

      > p {
        margin: 24px 8px 56px 8px;
        text-align: left;
      }
    }
  }
}
</style>
