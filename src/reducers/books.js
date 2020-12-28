import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const createBookReducer = (state = [], action) => {
  switch(action.type){
    case CREATE_BOOK:
      return {...state, action.payload};
    case REMOVE_BOOK:
      return {...state, action.payload};
    default:
      return state;
  }
}

const removeBookReducer = (state = [], action) => {
  switch(action.type){
    case CREATE_BOOK:
      return {...state, action.payload};
    case REMOVE_BOOK:
      return {...state, action.payload};
    default:
      return state;
  }
}