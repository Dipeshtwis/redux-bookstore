const Book = (book) => {
  const { BookId, title, category } = book;
  return (
    <tr>
      <td>{BookId}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

export default Book;