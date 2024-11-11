import React, { useState } from 'react';

const DisplayItems = ({ items, onDelete, onEdit }) => {
  const [editedItem, setEditedItem] = useState(''); // This holds the text of the item currently being edited
  const [editingIndex, setEditingIndex] = useState(null); // This tracks the index of the item being edited

  const handleEditChange = (e) => {
    setEditedItem(e.target.value); // Update the edited text
  };

  const handleEditSubmit = () => {
    if (editedItem.trim()) {
      onEdit(editingIndex, editedItem); // Call onEdit in parent to update the item
      setEditedItem(''); // Clear the edited text input after submitting
      setEditingIndex(null); // Reset the editing state
    }
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
          {/* Show input field if editing this item, else show item text */}
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={editedItem}
                onChange={handleEditChange}
                onBlur={handleEditSubmit} // Save changes when input loses focus
                style={{ flex: 1, marginRight: '10px' }}
              />
              <button onClick={handleEditSubmit}>Save</button>
            </>
          ) : (
            <>
              <span>{item}</span>
              <button onClick={() => onDelete(index)} style={{ marginLeft: '10px' }}>Delete</button>
              <button
                onClick={() => {
                  setEditingIndex(index); // Set the index of the item to be edited
                  setEditedItem(item); // Pre-fill the input with the item text
                }}
                style={{ marginLeft: '10px' }}
              >
                Edit
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DisplayItems;
