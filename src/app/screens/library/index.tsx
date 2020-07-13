import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import BookCard from './components/bookCard'
import { Book } from '@interfaces/books';
import withSpinner from '../../components/spinner'

import styles from './styles';
import { actionCreator } from '@redux/books/actions';

const renderItem =({item}: Book) => (
  <BookCard item={item} />
);

const Library = () => {
  const dispatch = useDispatch();
  const books = useSelector((state : Book) => state.books.books.page);
  const isLoading = useSelector((state : Book) => state.books.loading);
  useEffect(() => {
    dispatch(actionCreator.getBooks());
  },[])

  return(
    <View style={styles.container}>
      {books && 
        <FlatList 
          data={books}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      }
    </View>
  )
}

export default withSpinner(Library);