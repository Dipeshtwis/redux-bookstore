import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import bookReducer from './books';
import bookFilterReducer from './filter';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: bookFilterReducer,
});

const initialState = {
  books: [
    { bookId: uuidv4(), title: 'Understanding in C', category: 'Learning' },
    { bookId: uuidv4(), title: 'Baby names 2020', category: 'Kids' },
    { bookId: uuidv4(), title: 'The Hunger', category: 'Horror' },
    { bookId: uuidv4(), title: 'Beloved', category: 'Horror' },
  ],
  filter: 'All',
};

const store = createStore(rootReducer, initialState);

export default store;
