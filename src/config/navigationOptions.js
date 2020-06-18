import React from 'react';
import Header from '../app/components/header';
import arrow from '@assets/ic_back.png'
import notifications from '@assets/ic_notifications.png';

const LIBRARY = 'library';
const BOOK_DETAIL = 'book detail'

export const booksOptions = () => ({
  header: () => <Header title={BOOK_DETAIL} icon={arrow} goBack />,
  title: 'Titulo'
})

export const libraryOptions = () => ({
  header: () => <Header title={LIBRARY} icon={notifications}/>,
})