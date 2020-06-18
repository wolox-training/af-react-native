import React from 'react';
import { Image, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import navbar from '@assets/bc_nav_bar.png';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

interface Props {
  title?: string;
  icon: any;
  goBack?: boolean;
  rightIcon?: any;
  rightHandlePress?: () => void;
  rightTitle?: string;
}

const Header = ({title, icon, goBack, rightIcon, rightTitle, rightHandlePress }: Props) => {
  const navigate = useNavigation();

  const handlePress = () => navigate.goBack()

  return (
    <ImageBackground source={navbar} style={styles.header}>
      {goBack ?
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Image 
          source={icon}
          style={styles.arrow}
        />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity> :
      <View style={styles.button}>
        <Image 
          source={icon}
          style={styles.arrow}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      }
      {rightIcon && rightTitle && rightHandlePress &&
        <TouchableOpacity onPress={rightHandlePress} style={[styles.button, rightIcon && styles.buttonRight]}>
          <Image 
            source={rightIcon}
            style={styles.arrow}
          />
          <Text style={styles.title}>{rightTitle}</Text>
        </TouchableOpacity>
      }
    </ImageBackground>
  )
}

export default Header;
