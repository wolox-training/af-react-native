import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import books from './books/reducer'; 


const reducers = combineReducers({
  books
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
