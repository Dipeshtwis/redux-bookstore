import { combineReducers } from 'redux';
import { createBookReducer, removeBookReducer } from './books'

export const rootReducer = combineReducers({
  createBookReducer,
  removeBookReducer
})