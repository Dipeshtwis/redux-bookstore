import PropTypes from 'prop-types';
import allCategory from '../utils/utils';

const CategoryFilter = ({ handleFilterChange }) => (
  <>
    <h2>Select book with specific category</h2>
    <select
      onChange={handleFilterChange}
      name="category"
      required
    >
      <option value="All">
        All
      </option>
      {allCategory}
    </select>
  </>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
