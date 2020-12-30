export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const createBookAction = book => ({
  type: CREATE_BOOK,
  book,
});

export const removeBookAction = book => ({
  type: REMOVE_BOOK,
  book,
});

export const changeFilterAction = filter => ({
  type: CHANGE_FILTER,
  filter,
});
