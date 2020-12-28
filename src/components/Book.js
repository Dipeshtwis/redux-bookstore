import React, { useState } from 'react';

const Book = (book) => {
  const { Book ID, title, category } = book;
  return (
    <td>{Book ID}</td>
    <td>{title}</td>
    <td>{category}</td>
  );
}

export default Book;