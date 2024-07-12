import React from 'react';

function Menu({ addItem, removeItem }) {
  const newItem = { id: 3, item: 'Orange', quantity: 1 };

  return (
    <div>
      <h2>Menu</h2>
      <button onClick={() => addItem(newItem)}>Add Orange</button>
      <button onClick={() => removeItem(2)}>Remove Banana</button>
    </div>
  );
}

export default Menu;
