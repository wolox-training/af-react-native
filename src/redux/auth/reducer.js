import { actions } from './actions';

const initialState = {
  auth: {},
  loading: false,
  error: null
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
    default:
      return state;
  }
}

export default reducer;
