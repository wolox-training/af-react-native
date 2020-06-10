import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Library from '@app/screens/library';
import BookDetail from '@screens/bookDetails';
import Header from './src/app/components/header';
import { LIBRARY, BOOK_DETAIL } from '@constants/routes';
import arrow from '@assets/ic_back.png'
import notifications from '@assets/ic_notifications.png';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name={LIBRARY} 
          component={Library} 
          options={({navigation, route}) => ({
            header: () => <Header handlePress={console.log('notifications')} route={route} icon={notifications}/>
          })}
        />
        <Stack.Screen 
          name={BOOK_DETAIL} 
          component={BookDetail}
          options={({navigation, route}) => ({
            header: () => <Header handlePress={navigation.goBack} route={route} icon={arrow}/>
          })}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;