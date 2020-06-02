import React from 'react';
import { Text, View, Image } from 'react-native';

import bookImage from '@assets/img_book1.png';
import { Book } from '@interfaces';

import styles from './styles/styles';

const BookCard = ({ title, author, img }: Book) => {
  return (
    <View style={styles.container}>
      <Image source={img}/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{author}</Text>
      </View>
    </View>
  );
};

export default BookCard;
