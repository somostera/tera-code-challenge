import React, { useEffect, useState } from 'react';

import { Container, Content } from './styles';

import { useGlobalContext } from '../../contexts/GlobalContext';

import { Header } from '../../components/Header';
import { Book } from '../../components/Book';
import { Pagination } from '../../components/Pagination';

type BooksData = {
  author: string;
  category: string;
  cover_picture: string;
  description: string;
  name: string;
  stock: number;
  users_who_liked: string[];
}

type BooksDataFormatted = BooksData & {
  me_like: boolean;
}

export function Home() {
  const [searchBooks, setSearchBooks] = useState<BooksDataFormatted[]>([]);
  const [isCategoryFilter, setIsCategoryFilter] = useState(false);
  const [totalBooks, setTotalBooks] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);


  const { booksFormatted } = useGlobalContext();

  useEffect(() => {
    const allBooks = [...booksFormatted];
    
    const firstPageItems = allBooks.slice(0, 8);
    
    setSearchBooks(firstPageItems);
    setTotalBooks(booksFormatted.length);
  }, [booksFormatted]);

  function handleSearch(search: string, type: string) {
    if (type === 'name') {
      if (search !== '') {
        const filteredResults = booksFormatted.filter(
          book => (book.name.toLowerCase()).includes(search.toLowerCase())
        );
    
        setSearchBooks(filteredResults);
        setTotalBooks(filteredResults.length);
      } else {
        setSearchBooks(booksFormatted);
        setTotalBooks(booksFormatted.length);
      }
    }

    if (type === 'category') {
      if (search !== '') {
        const filteredResults = booksFormatted.filter(
          book => (book.category.toLowerCase()).includes(search.toLowerCase())
        );
    
        setSearchBooks(filteredResults);
        setTotalBooks(filteredResults.length);
      } else {
        setSearchBooks(booksFormatted);
        setTotalBooks(booksFormatted.length);
      }
    }
  }

  function handleFilter(filterValue: string) {
    const allBooks = [...booksFormatted];

    switch(filterValue) {
      case 'bests': 
        const bestsSort = allBooks.sort((a, b) => {
          return a.users_who_liked.length > b.users_who_liked.length ? -1 
            : a.users_who_liked.length < b.users_who_liked.length ? 1 : 0;
        });

        setSearchBooks(bestsSort);
        setIsCategoryFilter(false);
        setTotalBooks(bestsSort.length);
        break;
      case 'stock': 
        const stockFiltered = allBooks.filter(book => book.stock > 0);

        const stockSort = stockFiltered.sort((a, b) => {
          return a.stock > b.stock ? -1 
            : a.stock < b.stock ? 1 : 0;
        });

        setSearchBooks(stockSort);
        setIsCategoryFilter(false);
        setTotalBooks(stockSort.length);
        break;
      case 'alfabetic': 
        const alfabeticSort = allBooks.sort((a, b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });

        setSearchBooks(alfabeticSort);
        setIsCategoryFilter(false);
        setTotalBooks(alfabeticSort.length);
        break;
      case 'liked': 
      const likedFiltered = allBooks.filter(book => book.me_like === true);

        setSearchBooks(likedFiltered);
        setIsCategoryFilter(false);
        setTotalBooks(likedFiltered.length);
        break;
      case 'categories': 
        setSearchBooks(booksFormatted);
        setIsCategoryFilter(true);
        setTotalBooks(booksFormatted.length);
        break;
      default:
        setSearchBooks(booksFormatted);
        setIsCategoryFilter(false);
        setTotalBooks(booksFormatted.length);
    }
  }

  function handleChangePage(pageNumber: number) {
    const allBooks = [...booksFormatted];
    
    const newPageItems = allBooks.slice((pageNumber * 8 - 8), pageNumber * 8);

    setSearchBooks(newPageItems);
    setCurrentPage(pageNumber);
  }

  return (
    <Container>
      <Header />
      <header>
        <input 
          placeholder="Procure por um livro"
          onChange={e => handleSearch(e.target.value, 'name')}
          disabled={isCategoryFilter}
        />

        <div>
          {isCategoryFilter && (
            <input 
              placeholder="Nome da Categoria"
              onChange={e => handleSearch(e.target.value, 'category')}
              autoFocus
            />
          )}

          <select onChange={e => handleFilter(e.target.value)}>
            <option value="none">Filtros</option>
            <option value="bests">Melhores Avaliados</option>
            <option value="stock">Em estoque</option>
            <option value="alfabetic">Ordem Alfabética</option>
            <option value="liked">Livros Curtidos</option>
            <option value="categories">Por Categoria</option>
          </select>
        </div>
      </header>

      <section>Total: {totalBooks}</section>

      <Content>
        <div>
          {searchBooks.map(book => (
            <Book
              key={book.name}
              author={book.author}
              category={book.category}
              cover_picture={book.cover_picture}
              name={book.name}
              me_like={book.me_like}
            />
          ))}
        </div>
      </Content>

      <Pagination 
        pageInfo={{
          count: totalBooks,
          currentPage: currentPage,
          pages: Math.ceil(totalBooks / 8),
        }}
        onPageChange={handleChangePage}
      />
    </Container>
  );
}
