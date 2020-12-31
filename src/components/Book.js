import PropTypes from 'prop-types';

const Book = ({ book, deleteBook }) => {
  const { title, category } = book;
  return (
    <div className="book-row">
      <div>
        <p className="book-para">{category}</p>
        <h3>{title}</h3>
        <p className="book-para text-blue">Frank Herbert</p>
        <div className="book-row-left">
          <ul className="action-list">
            <li><button className="text-blue" type="button">Comments</button></li>
            <li><button className="text-blue" type="button" onClick={deleteBook}>Delete</button></li>
            <li><button className="text-blue" type="button">Edit</button></li>
          </ul>
        </div>
      </div>
      <div className="book-row-middle">
        <div>Hey</div>
        <span>64%</span>
        <p>Completed</p>
      </div>
      <div className="book-row-right">
        <p>CURRENT CHAPTER</p>
        <h4>Chapter 17</h4>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
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
