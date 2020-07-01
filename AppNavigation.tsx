import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Library from '@app/screens/library';
import BookDetail from '@screens/bookDetails';
import { LIBRARY, BOOK_DETAIL, WISH, LOGIN } from '@constants/routes';
import TabBarIcon from '@components/tabBarIcon';
import Wish from '@screens/wish';
import Login from '@screens/login';
import { booksOptions, libraryOptions } from './src/config/navigationOptions';

const Stack = createStackNavigator();

const LibraryScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={LIBRARY} 
        component={Library} 
        options={libraryOptions}
      />
      <Stack.Screen 
        name={BOOK_DETAIL} 
        component={BookDetail}
        options={booksOptions}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const AppNavigation = () =>{
  return (
    <Tab.Navigator screenOptions={ TabBarIcon }>
      <Tab.Screen name={LIBRARY} component={LibraryScreen} />
      <Tab.Screen name={WISH} component={Wish} />
    </Tab.Navigator>
  )
}

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  )
}


export default AuthNavigation;