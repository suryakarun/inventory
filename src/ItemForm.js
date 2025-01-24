import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const ItemForm = ({ onSubmit, itemToEdit }) => {
  const [formData, setFormData] = useState({ name: '', category: '', quantity: '' });

  useEffect(() => {
    if (itemToEdit) {
      setFormData(itemToEdit);
    }
  }, [itemToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', category: '', quantity: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <Input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" required />
      <Input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" required />
      <Button type="submit">{itemToEdit ? 'Update' : 'Add'} Item</Button>
    </Form>
  );
};

export default ItemForm;
