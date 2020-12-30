const categoryArray = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
const allCategory = categoryArray.map(category => (
  <option key={category} value={category}>
    {category}
  </option>
));

export default allCategory;
