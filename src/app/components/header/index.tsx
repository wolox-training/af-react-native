import React from 'react';
import { Image, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import navbar from '@assets/bc_nav_bar.png';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

interface Props {
  title?: string;
  icon: any;
  goBack?: boolean;
  right?: boolean;
}

const Header = ({title, icon, goBack, right }: Props) => {
  const handlePress = goBack && useNavigation().goBack;
  return (
    <View style={[styles.header, right && styles.buttonRight]}>
      <TouchableOpacity onPress={handlePress} style={[styles.button, right && styles.buttonRight]}>
        <Image 
          source={icon}
          style={[styles.arrow, right && styles.iconRight]}
        />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      <ImageBackground 
        source={navbar}
        style={styles.backgroundImage} 
      />
    </View>
  )
}

export default Header;
