import React from 'react';
import { Text, View, Image } from 'react-native';

import bookImage from '@assets/img_book1.png';

import styles from './styles/styles';

const BookCard = () => {
  return (
    <View style={styles.container}>
      <Image source={bookImage}/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>A Little Bird Told Me</Text>
        <Text style={styles.subTitle}>Timothy Cross</Text>
      </View>
    </View>
  );
};

export default BookCard;
