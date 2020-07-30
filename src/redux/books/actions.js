import { books } from '@services/BookService';
import { CommonActions } from '@react-navigation/native';
import { LOGIN } from '@constants/routes';


export const actions = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE'
}

export const actionCreator = {
  getBooks: (navigation) => async (dispatch) => {
    dispatch({type: actions.GET_BOOKS});
    const response = await books.getBookDetail();
    if(response.ok) {
      dispatch({
        type: actions.GET_BOOKS_SUCCESS,
        payload: response.data
      })
    }
    else {
      dispatch({
        type: actions.GET_BOOKS_FAILURE
      });
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: LOGIN }]
        })
      )
    }
  }
}
