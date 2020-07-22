import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '@redux/auth/actions';


import store from './src/redux/store';
import AppNavigation from './AppNavigation';

const App = () => {
  // const navigation = useNavigation();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actionCreator.authSetup(navigation))
  // }, [dispatch])

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
