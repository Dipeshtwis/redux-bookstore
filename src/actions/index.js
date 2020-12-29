export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBookAction = (book) => ({
  type: CREATE_BOOK,
  book,
});

export const removeBookAction = (book) => ({
  type: REMOVE_BOOK,
  book,
});