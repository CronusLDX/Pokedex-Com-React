export interface PokemonInterface {
  id: number;
  name: string;
  imagem: string;
  raridade: string;
  tipo: string[];
}

export interface PokemonInterfaceContext {
  pokeapi: PokemonInterface | null;
  nextPokemon: () => void;
  previousPokemon: () => void;
}
