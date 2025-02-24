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

export const PokeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pokeApi, setPokeApi] = useState<PokemonInterface | null>(null);
  const [pokemonId, setPokemonId] = useState(1);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await api.get(`pokemon/ ${pokemonId}`);
        const pokemonTypesResponse = await api.get(
          `pokemon-species/${pokemonId}`
        );

        const pokemonInfo: PokemonInterface = {
          id: response.data.id,
          name: response.data.name,
          imagem: response.data.sprites.front_default,
          raridade: pokemonTypesResponse.data.is_legendary
            ? 'Lendario'
            : pokemonTypesResponse.data.is_mythical
            ? 'Mítico'
            : 'Comum',
          tipo: response.data.types.map((e: any) => e.type.name),
        };

        setPokeApi(pokemonInfo);
      } catch (error) {
        setHasError(true);
        console.error('Erro ao buscar Pokémon:', error);
        if (axios.isAxiosError(error)) {
          console.error(error.response?.data);
        }
      }
    };
    getPokemon();
  }, [pokemonId]);

  const nextPokemon = () => {
    setPokemonId((id: number) => id + 1);
  };

  const previousPokemon = () => {
    setPokemonId((id: number) => id - 1);
  };

  if (hasError) {
    return <p>Erro ao carregar</p>;
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
