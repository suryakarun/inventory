import React, { useState } from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  padding: 15px;
  border: 1px solid #ddd;
  text-align: left;
  cursor: pointer;
  background-color: #f4f4f4;
`;

const Td = styled.td`
  padding: 15px;
  border: 1px solid #ddd;
  text-align: left;
`;

const Tr = styled.tr`
  background-color: ${props => (props.lowStock ? '#ffcccc' : 'white')};
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-right: 5px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const InventoryTable = ({ items, onEdit, onDelete }) => {
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
  };

  const sortedItems = [...items].sort((a, b) => {
    return sortOrder === 'asc' ? a.quantity - b.quantity : b.quantity - a.quantity;
  });

  return (
    <Table>
      <thead>
        <tr>
          <Th>Name</Th>
          <Th>Category</Th>
          <Th onClick={handleSort}>Quantity</Th>
          <Th>Actions</Th>
        </tr>
      </thead>
      <tbody>
        {sortedItems.map(item => (
          <Tr key={item.id} lowStock={item.quantity < 10}>
            <Td>{item.name}</Td>
            <Td>{item.category}</Td>
            <Td>{item.quantity}</Td>
            <Td>
              <Button onClick={() => onEdit(item)}>Edit</Button>
              <Button onClick={() => onDelete(item.id)}>Delete</Button>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InventoryTable;
