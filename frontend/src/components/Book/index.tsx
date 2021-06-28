import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';

import { useGlobalContext } from '../../contexts/GlobalContext';

import {
  Container,
  LikeButton,
} from './styles';

type BooksData = {
  author: string;
  category: string;
  cover_picture: string;
  name: string;
  users_who_liked?: string[];
  me_like: boolean;
}

export function Book({
  author,
  category,
  cover_picture,
  name,
  me_like,
}: BooksData){

  const { handleLikeBook } = useGlobalContext();

  function handleLike() {
    handleLikeBook(name, !me_like);
  }

  return (
    <Container>
      <Link to={`/details/${name}`}>
        <div>
          <img src={cover_picture} alt={name}/>
        </div>
      </Link>

      <section>
        <div>
          <h1>{name}</h1>
          <h2>{author}</h2>
          <h3>{category}</h3>
        </div>

        <LikeButton isLiked={me_like} onClick={handleLike}>
          <FiHeart size={25} />
        </LikeButton>
      </section>
    </Container>
  );
}