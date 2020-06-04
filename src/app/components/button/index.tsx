import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Button {
  title: string;
  style?: any;
  fill?: boolean;
  onPress: void;
}

const Button = ({title, style, fill, onPress}: Button) => (
  <TouchableOpacity style={[styles.button, fill && styles.fillButton, style]} onPress={onPress}>
    <Text style={[styles.buttonText, fill && styles.fillButtonText]}>{title}</Text>
  </TouchableOpacity>
);

export default Button;