import { auth } from '../../services/AuthService';
import { NavigationAction } from '@react-navigation/native';
import { HOME } from '../../constants/routes';

export const actions = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE'
}

export const actionCreator = {
  login: user => async (dispatch) => {
    dispatch({type: actions.LOGIN});
    const resp = await auth.login(user);
    dispatch(NavigationAction.navigate({routeName : HOME}))
    // if(resp.ok) {
    //   dispatch({
    //     type: actions.LOGIN_SUCCESS,
    //     payload: resp.data,
    //   });
      
    // }
    // else {
    //   dispatch({
    //     type: actions.LOGIN_FAILURE,
    //     payload: resp.data.errors[0]
    //   });
    // }
  }
}
