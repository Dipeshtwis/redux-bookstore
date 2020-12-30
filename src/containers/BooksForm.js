import { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { createBookAction } from '../actions/index';
import allCategory from '../utils/utils';

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({ title: '', category: '' });
  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const { title, category } = state;
  const handleSubmit = e => {
    e.preventDefault();
    createBook({
      bookId: uuidv4(),
      title,
      category,
    });
    setState({ title: '', category: '' });
  };

  return (
    <>
      <h2>Add Book here</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={state.title || ''} onChange={handleChange} id="title" name="title" placeholder="Title of the book" required />
        <select
          onChange={handleChange}
          name="category"
          value={state.category}
          required
        >
          <option value="default">
            Select a category
          </option>     
              {allCategory}
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBookAction(book)) });

export default connect(null, mapDispatchToProps)(BooksForm);
