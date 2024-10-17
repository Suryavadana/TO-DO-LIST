import React, { useState } from 'react';
import AddForm from './components/AddForm';
import DisplayItems from './components/DisplayItems';

function App() {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <div>
            <h1>To-do List</h1>
            <AddForm addItem={addItem} /> {/* Pass the addItem function */}
            <DisplayItems items={items} /> {/* Pass the items array */}
        </div>
    );
}

export default App;
