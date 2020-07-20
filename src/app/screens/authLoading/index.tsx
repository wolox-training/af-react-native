import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { CommonActions } from '@react-navigation/native';

import { HOME, LOGIN } from '@constants/routes';
import WithSpinner from '../../components/spinner';
import { actionCreator } from '../../../redux/auth/actions';

const AuthWithSpinner = WithSpinner(View);

const AuthLoading = ({ navigation }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCredentials();
  },[])

  const [loading, setLoading] = useState(true);

  const getCredentials = async () => {
    const accessToken = await AsyncStorage.getItem('token');
    const uid = await AsyncStorage.getItem('uid');
    const client = await AsyncStorage.getItem('client');
    if(accessToken && uid && client) {
      dispatch(actionCreator.auth({accessToken, uid, client}))
      setLoading(false);
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: HOME }]
        })
      )
    }
    else {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: LOGIN }]
        })
      )
    }
  };

  return (
    <AuthWithSpinner isLoading={loading} />
  );
};

export default AuthLoading;
