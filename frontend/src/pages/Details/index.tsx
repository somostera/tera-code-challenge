import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiHeart } from 'react-icons/fi';
import { useGlobalContext } from '../../contexts/GlobalContext';

import {
  Container,
  Content,
  LikeButton,
} from './styles';

import { Header } from '../../components/Header';

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

type ParamsData = {
  nameId: string,
}

export function Details(){
  const [currentBook, setCurrentBook] = useState({} as BooksDataFormatted | undefined);

  const { booksFormatted, handleLikeBook } = useGlobalContext();

  const params: ParamsData = useParams();

  function handleLike() {
    handleLikeBook(currentBook!.name, !currentBook!.me_like);
  }

  useEffect(() => {
    if(params.nameId) {
      const findedBook = booksFormatted.find(book => book.name === params.nameId);
      setCurrentBook(findedBook);
    }
  }, [params, booksFormatted])

  return (
    <Container>
      <Header />
      <Link to="/">
        <FiChevronLeft />
        <p>Voltar</p>
      </Link>

      <Content>
        <div>
          <section>
            <h1>{currentBook?.name}</h1>

            <section className="mobile">
              <div>
                <img src={currentBook?.cover_picture} alt={currentBook?.name}/>
                <LikeButton isLiked={currentBook!.me_like} onClick={handleLike}>
                  <FiHeart size={24}/>
                </LikeButton>
              </div>

              <section>
                <div>
                  <h2>{currentBook?.author}</h2>
                  <h2>{currentBook?.category}</h2>
                </div>

                {currentBook?.stock === 0 
                  ? <h3>Fora de estoque</h3>
                  : <h3>Em estoque: {currentBook?.stock} unidades</h3>
                }
              </section>
            </section>

            <div>
              <h2>{currentBook?.author}</h2>
              <LikeButton isLiked={currentBook!.me_like} onClick={handleLike}>
                <FiHeart size={24}/>
              </LikeButton>
            </div>

            <h2>{currentBook?.category}</h2>

            {currentBook?.stock === 0 
              ? <h3>Fora de estoque</h3>
              : <h3>Em estoque: {currentBook?.stock} unidades</h3>
            }

            <p>
              {currentBook?.description}
            </p>
          </section>

          <div>
            <img src={currentBook?.cover_picture} alt={currentBook?.name}/>
          </div>
        </div>
      </Content>
    </Container>
  );
}