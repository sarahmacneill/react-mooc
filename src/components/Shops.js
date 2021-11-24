import React, { useState } from 'react';

export default function Shops() {

    const [list, setList] = useState(['Janetta\'s Gelataria', 'Dairy Queen', 'Luca\'s Gelato']);
    const [item, setItem] = useState('');

    function handleChange(event) {
        setItem(event.target.value);
    }

    function handleSubmit(event) {
        const listCopy = [...list];
        listCopy.push(item);
        setList(listCopy);
        event.preventDefault();
    }

    return (
        <div id="shops" className="page-break pad1">
            <h2>Ice Cream Shops</h2>
            <p>Use this as a place to note down your favourite places to get ice cream:</p>
            <ul>
                {list.map(listItem => <li key={listItem}>{listItem}</li>)}
            </ul>
            
            <form onSubmit={handleSubmit}>
                <label>Add a place:</label>
                <input value={item} onChange={handleChange} />
                <button type="submit">+ add</button>
            </form>
        </div>
    );
}
