import PropTypes from 'prop-types';

const Book = ({ book, deleteBook }) => {
  const { bookId, title, category } = book;
  return (
    <tr className = "book-row">
      <td className = "book-column">{bookId}</td>
      <td className = "book-column">{title}</td>
      <td className = "book-column">{category}</td>
      <td className = "book-column"><button type="button" onClick={deleteBook} >Delete</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;