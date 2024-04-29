import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <>
    <input
      type="text"
      placeholder="Search by category"
      value={searchTerm}
      onChange={onSearchChange}
    />
    </>
  );
}

export default SearchBar;