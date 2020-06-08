import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';
import { Route } from '@interfaces/routes';
import { Book } from '@interfaces/books';
import Button from '@components/button';
import Card from '@components/card';
import CommentsTable from './components/commentsTable';


const BookDetail = ({route}: Route) => {
  const { img, title, year, type, author, comments }: Book = route.params;

  return (
    <>
      <Card>
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
      </Card>
      <CommentsTable comments={comments}/>
    </>
  );
}

export default BookDetail;
