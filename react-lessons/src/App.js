import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import Menu from './components/Menu';


function App() {
  // Define state
  const [shoppingCart, setShoppingCart] = useState([
    { id: 1, item: 'Apple', quantity: 3 },
    { id: 2, item: 'Banana', quantity: 2 },
  ]);

  // Function to add an item to the shopping cart
  const addItem = (item) => {
    setShoppingCart([...shoppingCart, item]);
  };

  // Function to remove an item from the shopping cart
  const removeItem = (itemId) => {
    setShoppingCart(shoppingCart.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <NavBar shoppingCart={shoppingCart} />
      <Menu addItem={addItem} removeItem={removeItem} />
    </div>
  );
}

export default App;
