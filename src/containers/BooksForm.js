import { useState } from 'react';

const BooksForm = () => {
  // eslint-disable-next-line no-unused-vars
  const Category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [state, setState] = useState({ title: '', category: '' });
  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  return (
    <>
      <h2>Add Book here</h2>
      <form>
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