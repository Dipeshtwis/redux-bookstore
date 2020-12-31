import PropTypes from 'prop-types';
import allCategory from '../utils/utils';

const CategoryFilter = ({ handleFilterChange }) => (
  <div className="filter-box">
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
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
