<template>
  <body
    id="app"
    v-dark-mode
  >
    <div id="nav">
      <router-view name="top" />
    </div>
    <router-view />
    <div>
      <router-view name="bottom" />
    </div>
  </body>
</template>

<style>
  /* Classes Tachyons Lucas Barque*/
  .mt10{margin-top: 10px;}.mt20{margin-top: 20px;}.mt30{margin-top: 30px;}.mt40{margin-top: 40px;}.mt50{margin-top: 50px;}.mt60{margin-top: 60px;}.mt70{margin-top: 70px;}.mt80{margin-top: 80px;}.mt90{margin-top: 90px;}.mt100{margin-top: 100px;}.mt110{margin-top: 110px;}.mt120{margin-top: 120px;}.mt130{margin-top: 130px;}.mt140{margin-top: 140px;}.mt150{margin-top: 150px;}.mt160{margin-top: 160px;}.mt170{margin-top: 170px;}.mt180{margin-top: 180px;}.mt190{margin-top: 190px;}.mt200{margin-top: 200px;}
  .shadow-default{-webkit-box-shadow: 0px 1px 14px 0px rgba(0,0,0,0.5); -moz-box-shadow: 0px 1px 14px 0px rgba(0,0,0,0.5); box-shadow: 0px 1px 14px 0px rgba(0,0,0,0.5); }
  .shadow-default2{-webkit-box-shadow: 6px 6px 7px -4px rgba(0,0,0,0.19); -moz-box-shadow: 6px 6px 7px -4px rgba(0,0,0,0.19); box-shadow: 6px 6px 7px -4px rgba(0,0,0,0.19); }
  .padding-default { padding: 0 60px}
  .link-default {color: #6c6c6c !important; text-decoration: none; font: 500 1.2rem 'Open Sans', sans-serif;}

  body { background: #f1ffff}
  /* Dark Theme */
  .theme--dark{background: #1b2432; color: #fff;}
  .theme--dark .navbar {background-color: #121420 !important }
  .theme--dark .search-area input.vs-inputx.vs-input--input.normal, .theme--dark .vs-select--options, .theme--dark input.input-select.vs-select--input, .theme--dark .category-book{background: #403f4c !important}
  .theme--dark .vs-select--item {border-bottom: 1px solid #121420 !important; border-top: none !important}
  .theme--dark .category-book, .theme--dark .search-area input.vs-inputx.vs-input--input.normal, .theme--dark input.input-select.vs-select--input{border: 1px solid #121420 !important;}
  .theme--dark .category-book, .theme--dark .total-books, .theme--dark .book-title, .theme--dark .book-author, .theme--dark .book-category, .theme--dark .link-default, .theme--dark .vs-select--item{color: #fff !important}
  .theme--dark button.vs-select--item.activex { background: #555465 !important; color: #fff !important; }
  .theme--dark .vs-select--item:focus, .vs-select--item:hover { background: #5c5b6b !important }
  .theme--dark .search-area .vs-input--placeholder{color: #fff}

  @media (max-width: 991px) {
    .padding-default { padding: 0 20px}
  }
</style>