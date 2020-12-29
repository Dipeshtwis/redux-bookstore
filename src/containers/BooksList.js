import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* eslint-disable no-unused-vars */
import Book from '../components/Book';

const BooksList = ({ books }) => {
  const allBook = books.map(book => (<Book key = {`book-${book.bookId}`} book = {book} />));

  return (
    <div className = "book-show-div">
     <table>
       <thead>
         <tr>
          <th>BookId</th>
          <th>title</th>
          <th>category</th>
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
  books: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({ books: state.bookReducer.books });

export default connect(mapStateToProps, null)(BooksList);