import { v4 as uuidv4 } from 'uuid';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  books: [
    { bookId: uuidv4(), title: 'Understanding in C', category: 'Programming' },
    { bookId: uuidv4(), title: 'Baby names 2020', category: 'Kids' },
    { bookId: uuidv4(), title: 'The Hunger', category: 'Horror' },
    { bookId: uuidv4(), title: 'Beloved', category: 'Horror' },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, newBook: action.payload };
    case REMOVE_BOOK:
      return state.filter(book => book.bookId !== action.bookId);
    default:
      return state;
  }
};

export default bookReducer;