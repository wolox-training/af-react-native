import React from 'react';
import { Text, View, Image } from 'react-native';

import Button from '@components/button';
import Card from '@components/card';

import { Book } from '@interfaces/books';
import styles from './styles';

const BookDetailsCard = ({ book }: Book) => {
  const { title, image, author, year, type } = book;
  console.log(book)
  return(
    <Card>
      <View style={styles.container}>
      <Image style={styles.img} source={{uri: image.url}}/>
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
  )
}

export default BookDetailsCard;
