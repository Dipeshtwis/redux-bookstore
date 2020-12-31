import PropTypes from 'prop-types';

const Book = ({ book, deleteBook }) => {
  const { title, category } = book;
  return (
    <div className="book-row">
      <div>
        <p>{category}</p>
        <h3>{title}</h3>
        <p>Frank Herbert</p>
        <div>
          <ul>
            <li><button type="button">Comments</button></li>
            <li><button type="button" onClick={deleteBook}>Delete</button></li>
            <li><button type="button">Edit</button></li>
          </ul>
        </div>
      </div>
      <div>
        <div>Hey</div>
        <span>64%</span>
        <p>Completed</p>
      </div>
      <div>
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
