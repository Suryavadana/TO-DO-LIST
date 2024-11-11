import React, { useState } from 'react';
import '../App.css';

const AddForm = ({ addItem }) => {
  const [text, setText] = useState(''); // State for input field

  const handleChange = (event) => {
    setText(event.target.value); // Update state when typing
  };

  const handleClick = () => {
    if (text.trim()) {
      addItem(text); // Add the item to the list
      setText(''); // Clear the input field
    } else {
      alert('Please enter a task.');
    }
  };

  return (
    <div className='add-form'>
      <input
        type='text'
        value={text}
        placeholder='Enter new task'
        onChange={handleChange}
        style={{
          padding: '10px 15px',
          backgroundColor: 'Orange',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      />
      <button
        onClick={handleClick}
        style={{
          padding: '10px 15px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Add Item
      </button>
    </div>
  );
};

export default AddForm;
