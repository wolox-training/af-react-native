import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import BookCard from './components/bookCard'
import { Book } from '@interfaces/books';

import styles from './styles';
import { actionCreator } from '@src/redux/books/actions';

const renderItem =({item}: Book) => (
  <BookCard item={item} />
);

const Library = () => {
  const dispatch = useDispatch();
  const books = useSelector((state : Book) => state.books.books)
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

export default Library;