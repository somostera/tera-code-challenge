export default {
    searchFilter: (books, searchValue) => {
        return books.filter((val) => val.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    },
    searchFilterCategory: (books, searchValue) => {
        return books.filter((val) => val.category.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    },
    orderByEvaluation(books) {
        return books.sort((bookA, bookB) => bookA.users_who_liked.length > bookB.users_who_liked.length ? -1 : bookA.users_who_liked.length < bookB.users_who_liked.length ? 1 : 0);
    },
    orderByStock(books) {
        return books.sort((bookA, bookB) => bookA.stock > bookB.stock ? -1 : bookA.stock < bookB.stock ? 1 : 0);
    },
    orderByAZ(books) {
        return books.sort((bookA, bookB) => bookA.name < bookB.name ? -1 : bookA.name > bookB.name ? 1 : 0);
    },
    orderByMyLikedBook(books, likedBooks) {
        return books.filter(book => likedBooks.includes(book.name));
    }
}