import React, { useState } from 'react';
import { View, VirtualizedList } from 'react-native';
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

  const getItem = (data: any, index: number) => data[index];
  const getItemCount = () => {
    return number
  }

  const handlePress = () => {
    setNumber(5)
  }

  const viewTitle = 'view all';
  
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <VirtualizedList 
          data={comments}
          renderItem={renderComment}
          getItemCount={getItemCount}
          getItem={getItem}
          keyExtractor={(item) => item.id}
          inverted
        />
      </View>
      <Button title={viewTitle} onPress={handlePress} style={styles.button}/>
    </Card>
  )
}

export default CommentsTable;
