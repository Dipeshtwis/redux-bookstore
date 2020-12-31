import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';
import { removeBookAction, changeFilterAction } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';

const BooksList = ({
  books, removeBook, filter, changeFilterAction,
}) => {
  const handleRemoveBook = book => removeBook(book);
  const handleFilterChange = e => changeFilterAction(e.target.value);
  const filteredBook = filter === 'All' ? books : books.filter(book => book.category === filter);
  const allBook = filteredBook.map(book => (<Book key={`book-${book.bookId}`} book={book} deleteBook={() => handleRemoveBook(book)} />));

  return (
    <div>
      <div className="nav-bar">
        <div className="navbar-left">
          <div>
            <h2 className="bookstore-name">Bookstore CMS</h2>
          </div>
          <div className="nav-element">
            <p className="nav-text">BOOKS</p>
          </div>
          <div className="nav-element">
            <p className="nav-text">CATEGORIES</p>
          </div>
          <CategoryFilter handleFilterChange={handleFilterChange} />
        </div>
        <div className="navbar-right">
          <div className="icon">
            <FaUser className="icon__main" />
          </div>
        </div>
      </div>
      <div className="book-show-div">
        {allBook}
      </div>
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
