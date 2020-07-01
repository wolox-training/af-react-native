import { booksList } from '@constants/mocks';
import { books } from '../../services/BookService'

const getBooks = () => {
  return {data: booksList}
}

export const actions = {
  GET_BOOKS: 'GET_BOOKS',
  GET_BOOKS_SUCCESS: 'GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: 'GET_BOOKS_FAILURE'
}

export const actionCreator = {
  getBooks: () => async (dispatch) => {
    dispatch({type: actions.GET_BOOKS});
    const response = await books.getBookDetail();
    if(response.ok) {
      dispatch({
        type: actions.GET_BOOKS_SUCCESS,
        payload: response.data
      })
    }
    else{
      dispatch({
        type: actions.GET_BOOKS_FAILURE
      })
    }
  }
}

