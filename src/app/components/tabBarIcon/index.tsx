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

const ACTIVE_ICON = 'activeIcon';
const INACTIVE_ICON = 'inactiveIcon';

const TabBarIcon = ({ route }: Route) => {
  const tabsItems = { 
    [LIBRARY]: { [ACTIVE_ICON]: libraryActive, [INACTIVE_ICON]: libraryInactive, title: LIBRARY },
    [WISH] : { [ACTIVE_ICON]: wishActive, [INACTIVE_ICON]: wishInactive, title: WISH } 
  }

  return ({
    tabBarLabel: ({ focused }: Props) => {
      return (
        <Text style={[focused ? styles.focused: styles.inactive]}>{tabsItems[route.name].title}</Text>
      )
    },
    tabBarIcon: ({ focused, size }: Props) => {
      let icon = tabsItems[route.name][focused ? 'activeIcon' : 'inactiveIcon'];
      return (
        <Image source={icon} style={{height: size, width: size}} />
      )
    }
  })
}



export default TabBarIcon;
