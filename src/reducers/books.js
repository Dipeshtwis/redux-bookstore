import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = {
  books: [
    { bookId: 1, title: 'Understanding in C++', category: 'Programming' },
    { bookId: 2, title: 'Baby names 2020', category: 'Kids' },
    { bookId: 3, title: 'The Hunger', category: 'Horror' },
    { bookId: 4, title: 'Beloved', category: 'Horror' },
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