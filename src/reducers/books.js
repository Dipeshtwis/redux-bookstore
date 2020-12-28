import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  books: [
    { bookId: Math.ceil(Math.random()), title: 'Understanding in C++', category: 'Programming' },
    { bookId: Math.ceil(Math.random()), title: 'Baby names 2020', category: 'Kids' },
    { bookId: Math.ceil(Math.random()), title: 'The Hunger', category: 'Horror' },
    { bookId: Math.ceil(Math.random()), title: 'Beloved', category: 'Horror' },
  ],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state, newBook: action.payload };
    case REMOVE_BOOK:
      return { ...state, removedBook: action.payload };
    default:
      return state;
  }
};

export default bookReducer;