import React from 'react';

function Navbar({ shoppingCart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {shoppingCart.map((item) => (
          <li key={item.id}>
            {item.item} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
