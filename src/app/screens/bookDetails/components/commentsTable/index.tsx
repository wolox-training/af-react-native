import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import Card from '../../../../components/card';
import { Comments } from '@interfaces/books';
import styles from './styles';
import Comment from '../comment'
import Button from '../../../../components/button';

const renderComment = ({item}: Comments) => (
    <Comment item={item}/>
  );

const CommentsTable = ({comments}: Comments) => {
  const [number, setNumber] = useState(2);

  const handlePress = () => {
    setNumber(5)
  }

  const viewTitle = 'view all';
  
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <FlatList 
          data={comments}
          renderItem={renderComment}
          keyExtractor={(item) => item.id}
          inverted
          initialNumToRender={number}
          windowSize={1}
        />
      </View>
      {number === 2 && <Button title={viewTitle} onPress={handlePress} style={styles.button}/>}
    </Card>
  )
}

export default CommentsTable;
