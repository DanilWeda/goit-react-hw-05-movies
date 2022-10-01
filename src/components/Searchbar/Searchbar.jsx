import { useState } from "react";
import PropTypes from 'prop-types';

const Searchbar = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e) => {
    setValue(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    if (!value) return alert('Enter the name of the film');
    onSearch(value);
    setValue('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default Searchbar
