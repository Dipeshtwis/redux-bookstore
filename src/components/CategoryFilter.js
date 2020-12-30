import PropTypes from 'prop-types';
import allCategory from '../utils/utils';

const CategoryFilter = ({ handleFilterChange }) => (
  <div>
    <h2>Select book with specific category</h2>
    <select
      onChange={handleFilterChange}
      name="category"
      required
    >
      {allCategory}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
