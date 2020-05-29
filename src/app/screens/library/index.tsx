import React from 'react';
import { View } from 'react-native';

import BookCard from './components/bookCard'

import styles from './styles/styles';

const Library = () => {
  return(
    <View style={styles.container}>
      <BookCard />
    </View>
  )
}

export default Library;