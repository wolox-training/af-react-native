import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import navbar from '@assets/bc_nav_bar.png';


import styles from './styles';

interface Props {
  handlePress: void;
  route: {
    name: string;
  },
  icon: any;
}

const Header = ({route, handlePress, icon }: Props) => {
  
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={handlePress}>
        <Image 
          source={icon}
          style={styles.arrow}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{route.name}</Text>
      <Image 
      source={navbar}
      style={styles.backgroundImage} 
      />
    </View>
  )
}

export default Header;
