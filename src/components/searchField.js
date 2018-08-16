import React from 'react';
import PropTypes from 'prop-types'

const SearchField = ({ handleSubmit, value, handleChange }) => (
	<form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" value={value} onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
)

SearchField.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
}

export default SearchField;
