import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  PokemonInterface,
  PokemonInterfaceContext,
} from '../interfaces/pokemonInterface';
import { api } from '../api/api';
import axios from 'axios';

export const PokeContext = createContext<PokemonInterfaceContext | null>(null);

export const PokeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pokeApi, setPokeApi] = useState<PokemonInterface | null>(null);
  const [pokemonId, setPokemonId] = useState(1);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(`pokemon/${pokemonId}`);
        const pokemonTypesResponse = await api.get(
          `pokemon-species/${pokemonId}`
        );

        const pokemonInfo: PokemonInterface = {
          id: response.data.id,
          name: response.data.name,
          imagem: response.data.sprites.front_default,
          raridade: pokemonTypesResponse.data.is_legendary
            ? 'Lendário'
            : pokemonTypesResponse.data.is_mythical
            ? 'Mítico'
            : 'Comum',
          tipo: response.data.types.map((e: any) => e.type.name),
        };

        setPokeApi(pokemonInfo);
        setErrorMessage(null); 
      } catch (error) {
        setHasError(true);
        setErrorMessage('Erro ao buscar Pokémon. Tente novamente.');
        console.error('Erro ao buscar Pokémon:', error);
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getPokemon();
  }, [pokemonId]);

  const nextPokemon = () => {
    if (pokemonId < 898) { 
      setPokemonId((id) => id + 1);
    }
  };

  const previousPokemon = () => {
    if (pokemonId > 1) { 
      setPokemonId((id) => id - 1);
    }
  };

  if (isLoading) {
    return <p>Carregando...</p>; 
  }

  if (hasError) {
    return <p>{errorMessage}</p>; 
  }

  return (
    <PokeContext.Provider value={{ pokeApi, nextPokemon, previousPokemon }}>
      {children}
    </PokeContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokeContext);

  if (!context) {
    throw new Error('Erro ao carregar o contexto, por favor verifique');
  }

  return context;
};
