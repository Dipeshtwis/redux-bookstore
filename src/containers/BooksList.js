import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAction, changeFilterAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
/* eslint-disable no-unused-vars */
import Book from '../components/Book';

const BooksList = ({
  books, removeBook, filter, changeFilterAction,
}) => {
  const handleRemoveBook = book => removeBook(book);
  const handleFilterChange = e => changeFilterAction(e.target.value);
  const filteredBook = filter === 'All' ? books : books.filter(book => book.category === filter);
  const allBook = books.map(book => (<Book key={`book-${book.bookId}`} book={book} deleteBook={() => handleRemoveBook(book)} />));

  return (
    <div className="book-show-div">
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
  filter: PropTypes.string.isRequired,
  changeFilterAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });
const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBookAction(book)),
  changeFilterAction: filter => dispatch(changeFilterAction(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
