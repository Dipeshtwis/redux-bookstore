import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* eslint-disable no-unused-vars */
import Book from '../components/Book';

const BooksList = ({ books }) => {
  const allBook = books.map(book => (<Book key = {`book-${book.bookId}`} book = {book} />));

  return (
    <div className = "book-show-div">
     <table className = "book-table">
       <thead>
         <tr className = "book-row">
          <th className = "book-header">BookId</th>
          <th className = "book-header">Title</th>
          <th className = "book-header">Category</th>
          <th className = "book-header">Action</th>
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
};

const mapStateToProps = (state) => ({ books: state.books });

export default connect(mapStateToProps, null)(BooksList);