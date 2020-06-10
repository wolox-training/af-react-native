import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Library from '@app/screens/library';
import BookDetail from '@screens/bookDetails';
import { LIBRARY, BOOK_DETAIL } from '@constants/routes';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={LIBRARY} component={Library} />
        <Stack.Screen name={BOOK_DETAIL} component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;