import React, { useState } from 'react';
import { Text, View, Image, VirtualizedList } from 'react-native';

import styles from './styles';
import { Route } from '@interfaces/routes';
import { Book, Comments } from '@interfaces/books';
import Button from '../../components/button';
import Comment from './components/comment';

const renderComment = ({item}: Comments) => (
    <Comment item={item}/>
);


const BookDetail = ({route}: Route) => {
  const { img, title, year, type, author, comments }: Book = route.params;
  const [number, setNumber] = useState(2);


  const getItemCount = () => {
    return number
  }


  const handlePress = () => {
    if(number === 5) {
      setNumber(2);
    }
    else {
      setNumber(5);
    }
  }

  const getItem = (data: any, index: number) => data[index]

  const viewTitle = number === 5 ? 'view less' : 'view all';

  return (
    <>
      <View style={styles.card}>
        <View style={styles.container}>
        <Image style={styles.img} source={img}/>
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <View>
            <Text style={styles.subTitle}>{author}</Text>
            <Text style={styles.subTitle}>{year}</Text>
            <Text style={styles.subTitle}>{type}</Text>
          </View>
        </View>
        </View>
        <Button title="add comment" onPress={() => console.log('add comment')}/>
        <Button title="return book" onPress={() =>console.log('return book')} fill/>
      </View>
      <View style={[styles.card, {flex: 1}]}>
        <View style={styles.container}>
          <VirtualizedList 
            data={comments}
            renderItem={renderComment}
            getItemCount={getItemCount}
            getItem={getItem}
            keyExtractor={(item) => item.id}
            inverted
          />
        </View>
        <Button title={viewTitle} onPress={handlePress} style={styles.button}/>
      </View>
    </>
  );
}

export default BookDetail;
