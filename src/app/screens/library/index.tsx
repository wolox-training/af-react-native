import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import BookCard from './components/bookCard'
import { Book } from '@interfaces/books';
import WithSpinner from '../../components/spinner'

import styles from './styles';
import { actionCreator } from '@redux/books/actions';

const ListWithSpinner = WithSpinner(FlatList);

const renderItem =({item}: Book) => (
  <BookCard item={item} />
);

const Library = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const books = useSelector((state : Book) => state.books.books);
  const isLoading = useSelector((state : Book) => state.books.loading);
  useEffect(() => {
    dispatch(actionCreator.getBooks(navigation));
  },[])

  return(
    <View style={styles.container}>
      <ListWithSpinner 
        data={books}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        isLoading={isLoading}
      />
    </View>
  )
}

export default Library;
