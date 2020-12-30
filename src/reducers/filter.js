import { CHANGE_FILTER } from '../actions/index';

const bookFilterReducer = (state = 'All', action) => {
  switch(action.type){
  	case CHANGE_FILTER:
  	  return action.filter;
  	default:
  	  return state;
  }
}

export default bookFilterReducer;