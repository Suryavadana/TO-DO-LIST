import React, { useState } from 'react';
import '../App.css';

const AddForm = ({ addItem }) => {
    const [text, setText] = useState(''); 

    const handleChange = (event) => {
        setText(event.target.value); // Update the text with the text box value
    };

    const handleClick = () => {
        if (text.trim()) {
            addItem(text); // Call addItem to add the item
            setText(''); // Clear the input after adding
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
                }}>
                Add Items
            </button>
        </div>
    );
};

export default AddForm;
