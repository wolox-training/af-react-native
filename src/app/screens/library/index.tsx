import React from 'react';
import { View, FlatList } from 'react-native';

import BookCard from './components/bookCard'
import { booksList } from '@constants/mocks';
import { Book } from '@interfaces/books';

import styles from './styles';

const renderItem =({item}: Book) => (
  <View>
    <BookCard item={item} />
  </View>
);

const Library = () => {
  return(
    <View style={styles.container}>
      <FlatList 
        data={booksList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Library;