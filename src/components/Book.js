import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { bookId, title, category } = book;
  return (
    <tr>
      <td>{bookId}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf.isRequired,
};

export default Book;