import React from 'react';
import { Text, View, Image, } from 'react-native';
import { Comments } from '@interfaces/books';

import styles from './styles';

const Comment =({item}: Comments) => {
  const { name, image, text } = item;
  return (
    <View style={styles.comment}>
      <Image style={styles.image} source={image}/>
      <View style={styles.containerText}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  )
} 

export default Comment;