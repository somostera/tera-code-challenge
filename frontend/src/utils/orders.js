export default {
    orderByRated: books => {
        return books.sort((a, b) => {
            if (a.users_who_liked.length > b.users_who_liked.length) return -1
            if (a.users_who_liked.length < b.users_who_liked.length) return 1
            return 0
        })
    },
    orderByStock: books => {
        return books.filter(item => {
            return item.stock > 0
        })
    },
    orderByName: function(books) {
        return books.sort((a, b) => {
            if (a.name < b.name) return -1
            if (a.name > b.name) return 1
            return 0
        })
    },
}
