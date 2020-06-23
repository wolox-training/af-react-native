import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import BookCard from './components/bookCard'
// import { booksList } from '@constants/mocks';
import { Book } from '@interfaces/books';

import styles from './styles';
import { actionCreator } from '../../../redux/books/actions';

const renderItem =({item}: Book) => (
  <BookCard item={item} />
);

const Library = ({getBooks}: Book) => {
  const [booksList, setBookList] = useState([]);
  
  useEffect(() => {
    const asyncBooks = async () => {
      const resp = await getBooks();
      setBookList(resp.payload)
    }
    asyncBooks();
  },[])

  return(
    <View style={styles.container}>
      {booksList && 
        <FlatList 
          data={booksList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      }
    </View>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBooks: () => dispatch(actionCreator.getBooks())
  }
}

export default connect(null, mapDispatchToProps)(Library);