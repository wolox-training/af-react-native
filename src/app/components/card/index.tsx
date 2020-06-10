import React, {ReactNode} from 'react';
import { View, Text } from 'react-native'

import styles from './styles';

interface Component {
  children: ReactNode;
  style?: any;
}

const Card = ({children, style}: Component) => {
  return (
    <View style={[styles.card, style]}>
      {children}
    </View>
  )
}

export default Card;
