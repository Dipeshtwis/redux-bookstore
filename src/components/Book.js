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
  book: PropTypes.shape({
    bookId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default Book;