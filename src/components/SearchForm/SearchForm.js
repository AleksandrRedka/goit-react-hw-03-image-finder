import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

const SearchForm = ({ searchValue, onChange, onSearch }) => (
  <form className={styles.searchForm} onSubmit={onSearch}>
    <input
      type="text"
      autoComplete="off"
      placeholder="Search images..."
      value={searchValue}
      onChange={onChange}
    />
  </form>
);

SearchForm.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
