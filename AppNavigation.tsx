import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Library from '@app/screens/library';
import BookDetail from '@screens/bookDetails';
import Header from './src/app/components/header';
import { LIBRARY, BOOK_DETAIL, WISH } from '@constants/routes';
import arrow from '@assets/ic_back.png'
import notifications from '@assets/ic_notifications.png';
import TabBarIcon from '@components/tabBarIcon';
import Wish from '@screens/wish';

const Stack = createStackNavigator();

const LibraryScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={LIBRARY} 
        component={Library} 
        options={({navigation, route}) => ({
          header: () => <Header handlePress={() => console.log('notifications')} route={route} icon={notifications}/>
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



export default AppNavigation;