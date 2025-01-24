import React from 'react';
import styled from 'styled-components';

// Styled select element
const Select = styled.select`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Filter = ({ categories, onFilter }) => {
  return (
    <Select onChange={(e) => onFilter(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </Select>
  );
};

export default Filter;
