export default {
  methods: {
    checkStorage(book) {
      const books = localStorage.getItem('liked-books');
      if (!books) return false;

      const parsed = JSON.parse(books);
      if (parsed.indexOf(book.name) !== -1) return true;
      return false;
    },
    saveToStorage(book) {
      const books = localStorage.getItem('liked-books');
      if (!books) {
        this.setStorage('liked-books', [book.name]);
      } else {
        const parsed = JSON.parse(books);
        parsed.push(book.name);
        this.setStorage('liked-books', parsed);
      }
    },
    removeFromStorage(book) {
      const books = localStorage.getItem('liked-books');
      if (!books) {
        return null;
      }
      const parsed = JSON.parse(books);
      const removed = parsed.filter((b) => b !== book.name);
      this.setStorage('liked-books', removed);
      return book;
    },
    setStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getStorage(key) {
      const items = localStorage.getItem(key);
      if (!items) return [];
      return JSON.parse(items);
    },
  },
};
