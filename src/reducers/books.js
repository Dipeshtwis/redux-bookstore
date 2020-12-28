import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const bookReducer = (state = [], action) => {
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