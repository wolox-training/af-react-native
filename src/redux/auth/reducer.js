import { actions } from './actions';

const initialState = {
  auth: {},
  loading: false,
  error: null,
  authLoading: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { 
        ...state,
        loading: true
      }
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: action.payload
      }
    case actions.LOGIN_FAILURE:      
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case actions.AUTH:
      return { 
        ...state,
        authLoading: true
      }
    case actions.AUTH_SUCCESS:
      return {
        ...state,
        authLoading: false,
      }
    case actions.AUTH_FAILURE:      
      return {
        ...state,
        authLoading: false,
        error: 'Error'
      }
    default:
      return state;
  }
}

export default reducer;
