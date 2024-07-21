import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardGrid = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(9);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const data = await response.json();

        // Fetch detailed data for each Pokémon
        const detailedDataPromises = data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          return response.json();
        });

        const detailedData = await Promise.all(detailedDataPromises);
        setPokemonData(detailedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, [offset, limit]);

  const handleNext = () => {
    setOffset(offset + limit);
  };

  const handlePrevious = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      {[0, 1, 2].map(row => (
        <Row key={row} className="mb-4">
          {pokemonData.slice(row * 3, row * 3 + 3).map((pokemon, index) => (
            <Col key={index} md={4}>
              <Card>
                <Link to={`/pokemon/${pokemon.id}`}>
                  <Card.Img variant="top" src={pokemon.sprites.other['official-artwork'].front_default} />
                </Link>
                <Card.Body>
                  <Card.Title>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Card.Title>
                  <Card.Text>{pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">ID: {pokemon.id}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
      <Row>
        <Col className="d-flex justify-content-between">
          <Button onClick={handlePrevious} disabled={offset === 0}>Previous</Button>
          <Button onClick={handleNext}>Next</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CardGrid;
