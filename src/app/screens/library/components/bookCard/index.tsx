import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { Book } from '@interfaces';

import styles from './styles/styles';

const BookCard = ({ title, author, img }: Book) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('BookDetail')} style={styles.button}>
      <View style={styles.container}>
        <Image source={img}/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookCard;
