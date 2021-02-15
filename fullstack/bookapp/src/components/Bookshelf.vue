<template>
  <div class="bookshelf">
    <div class="book" v-for="(item, index) in 8" :key="index">
      <img
        class="cover"
        src="https://images-na.ssl-images-amazon.com/images/I/41TPrNDI50L._SX218_BO1,204,203,200_QL40_ML2_.jpg"
        alt="clear archteture book"
        width="120"
      />
      <div class="info">
        <div class="title">
          <h2 class="book-title">Clean Archteture</h2>
          <p class="book-author">Martin Fowler</p>
          <p class="book-category">Technology</p>
        </div>
        <div class="like"><img src="@/assets/like.png" width="24" /></div>
      </div>
    </div>
    <div class="pagination">
      <div>
        &#60; 1 2 3 ... 40 >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bookshelf'
}
</script>

<style lang="scss">
@import '@/assets/sass/main.scss';

.book {
  width: 310px;
  margin: 20px 0 0 0;
}

.bookshelf {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
}

.book-author {
  font-size: 0.7rem;
}

.book-category {
  font-size: 0.6rem;
}

.book-title {
  font-size: 1rem;
}

.cover {
  display: block;
  margin: 0 auto;
  height: 100;
}

.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 20px 0 30px;
}

.pagination {
  display: flex;
  margin-top: 20px;
  width: 100%;
}

.pagination div {
  display: inline-block;
  margin: 0 auto;
}

@media only screen and (max-width: 600px) {
}
</style>
