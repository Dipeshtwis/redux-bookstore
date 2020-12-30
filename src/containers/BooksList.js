import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAction } from '../actions/index';
/* eslint-disable no-unused-vars */
import Book from '../components/Book';


const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => removeBook(book);
  const allBook = books.map(book => (<Book key={`book-${book.bookId}`} book={book} deleteBook={() => handleRemoveBook(book)} />));

  return (
    <div className="book-show-div">
      <table className="book-table">
        <thead>
          <tr className="book-row">
            <th className="book-header">BookId</th>
            <th className="book-header">Title</th>
            <th className="book-header">Category</th>
            <th className="book-header">Action</th>
          </tr>
        </thead>
        <tbody>
          {allBook}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBookAction(book)) });

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
