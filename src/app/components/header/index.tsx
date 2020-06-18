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
      <View style={styles.button}>
        <TouchableOpacity onPress={handlePress}>
          <Image 
            source={icon}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View> :
      <View style={styles.button}>
        <Image 
          source={icon}
          style={styles.arrow}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      }
      {rightIcon && rightTitle && rightHandlePress &&
        <View style={styles.buttonRight}>
          <TouchableOpacity onPress={rightHandlePress}>
            <Image 
              source={rightIcon}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{rightTitle}</Text>
        </View>
      }
    </ImageBackground>
  )
}

export default Header;
