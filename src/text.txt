import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar.tsx';
import Footer from '../../components/Footer/Footer.tsx';
import HomeContext from '../../contexts/useHomeContext';
import { Container } from './styles.ts';
import { api } from '../../api/api.ts';
import { PokemonInterface } from '../../interfaces/pokemonInterface.tsx';
import Home from '../Home/Home/Home.tsx';
import axios from 'axios';

const Root = () => {
  const [pokeapi, setPokeapi] = useState<PokemonInterface | null>(null);
  const [pokemonId, setPokemonID] = useState(1);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await api.get(`pokemon/${pokemonId}`);
        const speciesResponse = await api.get(`pokemon-species/${pokemonId}`);

        const pokemon: PokemonInterface = {
          id: response.data.id,
          name: response.data.name,
          imagem: response.data.sprites.front_default,
          raridade: speciesResponse.data.is_legendary
            ? 'Lendário'
            : speciesResponse.data.is_mythical
            ? 'Mítico'
            : 'Comum',
          tipo: response.data.types.map((t: any) => t.type.name),
        };

        setPokeapi(pokemon);
      } catch (error) {
        console.error('Erro ao buscar Pokémon:', error);
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data);
        }
      }
    };

    fetchPokemon();
  }, [pokemonId]);

  const nextPokemon = () => {
    setPokemonID(id => id + 1);
  };

  const previousPokemon = () => {
    setPokemonID(id => id - 1);
  };

  return (
    <Container>
      <Navbar />
      <main>
        <HomeContext.Provider value={{ pokeapi, nextPokemon, previousPokemon }}>
          <Home />
        </HomeContext.Provider>
      </main>
      <Footer />
    </Container>
  );
};

export default Root;
