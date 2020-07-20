import { auth } from '@services/AuthService';
import { AUTH_LOADING } from '@constants/routes';
import AsyncStorage from '@react-native-community/async-storage';

export const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  AUTH: 'AUTH',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAILURE: 'AUTH_FAILURE',
}

export const actionCreator = {
  login: (user, navigation) => async (dispatch) => {
    dispatch({type: actions.LOGIN});
    const resp = await auth.login(user);
    if(resp.ok) {
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: resp.data,
      });
      const { client, uid, 'access-token': accessToken } = resp.headers;
      await AsyncStorage.setItem('token', accessToken);
      await AsyncStorage.setItem('client', client);
      await AsyncStorage.setItem('uid', uid);
      navigation.navigate(AUTH_LOADING)
    }
    else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: resp.data.errors[0]
      });
    }
  },
  auth: (credentials) => async (dispatch) => {
    dispatch({type: actions.AUTH});
    await auth.auth(credentials);
  }
}
