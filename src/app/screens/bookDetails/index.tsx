import React from 'react';

import { Route } from '@interfaces/routes';
import { Book } from '@interfaces/books';

import CommentsTable from './components/commentsTable';
import BookDetailsCard from './components/commentsTable/bookDetailsCard';


const BookDetail = ({route}: Route) => {
  const { comments }: Book = route.params;
  return (
    <>
      <BookDetailsCard book={route.params} />
      <CommentsTable comments={comments}/>
    </>
  );
}

export default BookDetail;
