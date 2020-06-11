import React from 'react';
import { Image, Text } from 'react-native';
import { LIBRARY, WISH } from '@constants/routes';

import libraryActive from '@assets/ic_library_active.png';
import libraryInactive from '@assets/ic_library.png';
import wishInactive from '@assets/ic_wishlist.png';
import wishActive from '@assets/ic_wishlist_active.png';

import { Route } from '@interfaces/routes';

import styles from './styles';

interface Props {
  focused: boolean;
  size: number;
}

const TabBarIcon = ({ route }: Route) => ({
  tabBarLabel: ({ focused }: Props) => {
    return (
      <Text style={[focused ? styles.focused: styles.inactive]}>{route.name}</Text>
    )
  },
  tabBarIcon: ({ focused, size }: Props) => {
    let image = libraryActive;
    if(route.name === LIBRARY) {
      if(focused) {
        image = libraryActive
      }
      else {
        image = libraryInactive
      }
    }   
    if(route.name === WISH) {
      if(focused) {
        image = wishActive
      }
      else {
        image = wishInactive
      }
    }
    return (
      <Image source={image} style={{height: size, width: size}} />
    )
  }
})

export default TabBarIcon;
