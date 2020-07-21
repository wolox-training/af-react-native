import { auth, storage } from '@services/AuthService';
import { INITIAL_LOADING } from '@constants/routes';
import { CommonActions } from '@react-navigation/native';
import { HOME, LOGIN } from '@constants/routes';

export const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  AUTH: 'AUTH',
  AUTH_SUCCESS: 'AUTH_SUCCESS',
  AUTH_FAILURE: 'AUTH_FAILURE',
}

export const actionCreator = {
  // TODO: refactor navigation
  login: (user, navigation) => async (dispatch) => {
    dispatch({type: actions.LOGIN});
    const resp = await auth.login(user);
    if(resp.ok) {
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: resp.data,
      });
      const { client, uid, 'access-token': token } = resp.headers;
      storage.setItem({client, uid, token});
      navigation.navigate(INITIAL_LOADING)
    }
    else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: resp.data.errors[0]
      });
    }
  },
  authSetup: (navigation) => async (dispatch) => {
    dispatch({type: actions.AUTH});
    const resp = await auth.auth();
    if(resp.ok) {
      dispatch({
        type: actions.AUTH_SUCCESS
      });
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: HOME }]
        })
      )
    }
    else {
      dispatch({
        type: actions.AUTH_FAILURE
      })
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: LOGIN }]
        })
      )
    }
  },
}
