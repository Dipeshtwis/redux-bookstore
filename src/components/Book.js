import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { BookId, title, category } = book;
  return (
    <tr>
      <td>{BookId}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf.isRequired,
};

export default Book;