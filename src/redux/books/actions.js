import { booksList } from '@constants/mocks';

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
    await dispatch({type: actions.GET_BOOKS});
    const response = await getBooks();
    if(response.data) {
      return await dispatch({
        type: actions.GET_BOOKS_SUCCESS,
        payload: response.data
      })
    }
    else{
      return await dispatch({
        type: actions.GET_BOOKS_FAILURE
      })
    }
  }
}

