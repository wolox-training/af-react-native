import React, { useEffect } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Book, State } from '@interfaces/books';
import WithSpinner from '@components/spinner';
import { actionCreator } from '@redux/books/actions';

import BookCard from './components/bookCard';
import styles from './styles';

const ListWithSpinner = WithSpinner(FlatList);

const renderItem: ListRenderItem<Book> =({ item }) => (
  <BookCard item={item} />
);

const Library = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const books = useSelector((state : State) => state.books.books);
  const isLoading = useSelector((state : State) => state.books.loading);
  useEffect(() => {
    dispatch(actionCreator.getBooks(navigation));
  },[])

  return(
    <View style={styles.container}>
      <ListWithSpinner 
        data={books}
        renderItem={renderItem}
        keyExtractor={(item: Book) => `${item.id}`}
        isLoading={isLoading}
      />
    </View>
  )
}

export default Library;
