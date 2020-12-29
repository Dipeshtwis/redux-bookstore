import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BooksForm = () => {
  const Category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [state, setState] = useState({ title: '', category: '' });
  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };
  const { title, category } = state;
  const handleSubmit = (e) => {
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
        <label htmlFor="title">Book title:</label>
        <input type="text" onChange={handleChange} id="title" name="title" placeholder="Title of the book" required />
        <select
          onChange={handleChange}
          name="category"
          required
        >
          <option disabled value>
            Select a category
          </option>
          {Category.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default BooksForm;