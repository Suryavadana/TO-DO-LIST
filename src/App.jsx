import React, { useState } from 'react';
import AddForm from './components/AddForm';
import DisplayItems from './components/DisplayItems';

function App() {
  const [items, setItems] = useState([]); // List of items

  // Function to add a new item to the list
  const addItem = (item) => {
    setItems([...items, item]); // Add item to the list
  };

  // Function to delete an item from the list
  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index); // Remove item by index
    setItems(updatedItems); // Update the state
  };

  // Function to edit an item
  const handleEdit = (index, newItem) => {
    const updatedItems = items.map((item, i) => i === index ? newItem : item); // Replace the item with new value
    setItems(updatedItems); // Update the state
  };

  return (
    <div>
      <h1>To-do List</h1>
      <AddForm addItem={addItem} />
      <DisplayItems
        items={items}
        onDelete={handleDelete} // Pass delete function as a prop
        onEdit={handleEdit} // Pass edit function as a prop
      />
    </div>
  );
}

export default App;
