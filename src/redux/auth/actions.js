import { auth } from '@services/AuthService';
import { HOME } from '@constants/routes';

export const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
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
      navigation.navigate(HOME)
    }
    else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: resp.data.errors[0]
      });
    }
  }
}
