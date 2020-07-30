import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BOOK_DETAIL } from '@constants/routes';


import { Book } from '@interfaces/books';

import styles from './styles';

interface Props {
  item: Book;
}

const BookCard = ({ item }: Props) => {
  const {image: { url }, title, author} = item;
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(BOOK_DETAIL, item)} style={styles.button}>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: url }}/>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookCard;
