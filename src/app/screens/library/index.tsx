import React from 'react';
import { View, FlatList } from 'react-native';

import BookCard from './components/bookCard'
import { booksList } from '@constants/mocks';
import { Book } from '@interfaces';

import styles from './styles/styles';

const renderItem =({item}: Book) => (
  <BookCard title={item.title} author={item.author} img={item.img} />
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