import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    book: { type: Object, required: true },
  },
  computed: {
    ...mapGetters(['getBooks', 'getUser']),
    hasBook() {
      if (!this.book) return false;
      return Object.keys(this.book).length !== 0;
    },
    hasUserLiked() {
      if (!this.hasBook) return false;
      const whoLiked = this.book.users_who_liked;
      if (Array.isArray(whoLiked)) {
        const liked = whoLiked.indexOf(this.getUser) !== -1;
        return liked;
      }
      return false;
    },
  },
  methods: {
    ...mapActions(['likeBook']),
    like() {
      const books = [...this.getBooks];
      const bookIndex = books.findIndex((b) => b.name === this.book.name);
      const whoLiked = this.getBooks[bookIndex].users_who_liked;
      if (Array.isArray(whoLiked)) {
        books[bookIndex].users_who_liked.push(this.getUser);
      } else {
        books[bookIndex].users_who_liked = [this.getUser];
      }
      this.likeBook({ books });
    },
  },
};
