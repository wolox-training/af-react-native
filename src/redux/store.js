import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

import Reactotron from '../config/ReactotronConfig';

import books from './books/reducer'; 

const reducers = combineReducers({
  books
});

const middlewares = [applyMiddleware(thunk)];

if (__DEV__) {
  const reactotronMiddleware = Reactotron.createEnhancer();
  middlewares.push(reactotronMiddleware)
}

const store = createStore(reducers, compose(...middlewares));

export default store;
