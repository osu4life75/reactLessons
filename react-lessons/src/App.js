// ./App.js

import React from 'react';
import Constructor from './components/constructor';
import './App.css';

function App() {
  return (
    <div className="App">
      <Constructor name="Ford" />
      <Constructor name="Kia" />
      <Constructor name="Honda" />
    </div>
  );
}

export default App;
