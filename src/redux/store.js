import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import Reactotron from '../config/ReactotronConfig';

import books from './books/reducer'; 
import auth from './auth/reducer';

const reducers = combineReducers({
  books,
  auth
});

const middlewares = [applyMiddleware(thunk)];

if (__DEV__) {
  const reactotronMiddleware = Reactotron.createEnhancer();
  middlewares.push(reactotronMiddleware)
}

const store = createStore(reducers, compose(...middlewares));

export default store;
