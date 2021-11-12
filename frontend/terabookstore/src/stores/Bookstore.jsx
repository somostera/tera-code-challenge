import React, { useState,  useEffect } from 'react'

//APIs
import boosktore from '../api/bookstore'

import _ from 'lodash'

export const BookstoreContext = React.createContext()
export const BookstoreProvider = ({ children }) => {

    const [booksData, setBooksData] = useState([])
    const [booksDataBKP, setBooksDataBKP] = useState([])
    const [selectedBook, setSelectedBook] = useState([])
    const [showBookDetail, setShowBookDetail] = useState(false)
    const [darkTheme, setDarkTheme] = useState(false)
    const [optionFilter] = useState([
        {
            value: "0",
            label: "Todos"
        },
        {
            value: "1",
            label: "Melhores Avaliados"
        },
        {
            value: "2",
            label: "Em Estoque"
        },
        {
            value: "3",
            label: "Ordem Alfabética"
        },
        {
            value: "4",
            label: "Livros Curtidos"
        },
        {
            value: "5",
            label: "Por Categoria"
        }])
    const [selectedFilter, setSelectedFilter] = useState([])
    const [category, setCategory] = useState('')
    const [bookName, setBookName] = useState('')

    const getBooks = () => new Promise((resolve, reject) => {
        boosktore.getBooks().then(data => {
            setBooksData(data)
            setBooksDataBKP(data)
            resolve()
        }).catch(e => {
            reject(e)
        })
    })



    useEffect(() => {
        const hydrate = async () => {
            await getBooks()
        }
        hydrate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        let bkpBooksData = booksData.length ===0 ? _.cloneDeep(booksDataBKP) : _.unionWith(booksData, booksDataBKP, _.isEqual)
        if(selectedFilter){

            switch (selectedFilter) {
                case "0":
                    bkpBooksData =  _.unionWith(booksData, booksDataBKP, _.isEqual)
                break
                case "1":
                    bkpBooksData =_.orderBy(_.filter(bkpBooksData, (book) => {return book.users_who_liked.length > 0}), 'users_who_liked.length', 'desc')
                break
                case "2":
                    bkpBooksData = _.filter(bkpBooksData, (book) => {return book.stock > 0})
                break
                case "3":
                    bkpBooksData = _.orderBy(bkpBooksData, 'name', 'asc')
                break
                case "4":
                    bkpBooksData = _.filter(bkpBooksData, (book) => {return book.liked === true})
                break
                case "5":
                    bkpBooksData = category !== '' ?  _.filter(bkpBooksData, (book) => {return book.category.toLowerCase().includes(category.toLowerCase())}) : _.cloneDeep(booksDataBKP)
                break
                default:
                    bkpBooksData = _.cloneDeep(booksDataBKP)
                break
            }
         }
         if(bookName !== ''){

            bkpBooksData = _.filter(bkpBooksData, (book) => {return book.name.toLowerCase().includes(bookName.toLowerCase())})
         }

       setBooksData(bkpBooksData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedFilter,category,bookName])

    const renderStore = //isLoading ?
        // <LoadingOverlay visible />
        // :
        <BookstoreContext.Provider value={{
            booksData, setBooksData,
            selectedBook, setSelectedBook,
            showBookDetail, setShowBookDetail,
            selectedFilter, setSelectedFilter,
            category, setCategory,
            bookName, setBookName,
            optionFilter,
            darkTheme, setDarkTheme

        }}>
            {children}
        </BookstoreContext.Provider>

    return renderStore
}
