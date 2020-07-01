import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Button {
  title: string;
  style?: any;
  fill?: boolean;
  onPress: () => void;
  textStyle?: any;
}

const Button = ({title, style, fill, onPress, textStyle}: Button) => (
  <TouchableOpacity style={[styles.button, fill && styles.fillButton, style]} onPress={onPress}>
    <Text style={[styles.buttonText, fill && styles.fillButtonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default Button;