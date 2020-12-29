import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { bookId, title, category } = book;
  return (
    <tr className = "book-row">
      <td className = "book-column">{bookId}</td>
      <td className = "book-column">{title}</td>
      <td className = "book-column">{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf.isRequired,
};

export default Book;