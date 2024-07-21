import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    };

    fetchPokemonData();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Card className="mt-4">
        <Card.Img variant="top" src={pokemon.sprites.other['official-artwork'].front_default} />
        <Card.Body>
          <Card.Title>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Card.Title>
          <Card.Text>
            <strong>Types:</strong> {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}<br />
            <strong>Height:</strong> {pokemon.height}<br />
            <strong>Weight:</strong> {pokemon.weight}<br />
            <strong>Abilities:</strong> {pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button href="/">Back to List</Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default PokemonDetail;
