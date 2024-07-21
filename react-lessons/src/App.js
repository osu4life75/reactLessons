import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardGrid from './components/Body';
import PokemonDetail from './PokemonDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CardGrid />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
