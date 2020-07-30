import React, { useState } from 'react';
import { Text, View, Image, Animated, TouchableWithoutFeedback } from 'react-native';

import Button from '@components/button';
import Card from '@components/card';
import { MOUNTAIN_MEADOW, TURQUOISE } from '@constants/colors'

import { Book } from '@interfaces/books';
import styles from './styles';

const BookDetailsCard = ({ book }: Book) => {
  const { title, image: { url }, author, year, type } = book;
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const boxInterpolation =  animation.interpolate({
    inputRange: [0, 1],
    outputRange:[TURQUOISE , MOUNTAIN_MEADOW]
  })

  const radiusInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50]
  })

  const animatedStyle = {
    backgroundColor: boxInterpolation,
    borderRadius: radiusInterpolation
  }

  const handlePress = () => {
    Animated.timing(animation, {
      toValue:1,
      duration: 1000,
      useNativeDriver: false
    }).start()
  }

  return(
    <Card>
      <View style={styles.container}>
      <Image style={styles.img} source={{ uri: url }}/>
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
      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View style={{...styles.buttonRent, ...animatedStyle}}>
         <Text style={styles.buttonText}>RENT</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </Card>
  )
}

export default BookDetailsCard;
