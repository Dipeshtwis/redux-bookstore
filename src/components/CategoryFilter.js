import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const Category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <h2>Select book with specific category</h2>
      <select
        onChange={handleFilterChange}
        name="category"
        required
      >
        <option value="All">
          All
        </option>
        {Category.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
