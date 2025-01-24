import React, { useState } from 'react';
import InventoryTable from './InventoryTable';
import ItemForm from './ItemForm';
import Filter from './Filter';
import './Styles.css';


const App = () => {
  const [items, setItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [filter, setFilter] = useState('');

  const handleAddOrEditItem = (item) => {
    if (item.id) {
      setItems(items.map(i => (i.id === item.id ? item : i)));
    } else {
      item.id = Date.now();
      setItems([...items, item]);
    }
    setItemToEdit(null);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEditItem = (item) => {
    setItemToEdit(item);
  };

  const handleFilter = (category) => {
    setFilter(category);
  };

  const filteredItems = filter ? items.filter(item => item.category === filter) : items;

  const categories = [...new Set(items.map(item => item.category))];

  return (
    <div>
      <h1>Inventory Management</h1>
      <ItemForm onSubmit={handleAddOrEditItem} itemToEdit={itemToEdit} />
      <Filter categories={categories} onFilter={handleFilter} />
      <InventoryTable items={filteredItems} onEdit={handleEditItem} onDelete={handleDeleteItem} />
    </div>
  );
};

export default App;
