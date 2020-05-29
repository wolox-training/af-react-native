import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles/styles';

const BookCard = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/img_book1.png')}/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>A Little Bird Told Me</Text>
        <Text style={styles.subTitle}>Timothy Cross</Text>
      </View>
    </View>
  );
};

export default BookCard;