import { createContext } from 'react';
import { PokemonInterfaceContext } from '../interfaces/pokemonInterface';

const HomeContext = createContext<PokemonInterfaceContext | null>(null);

export default HomeContext;
