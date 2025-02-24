export interface PokemonInterface {
  id: number;
  name: string;
  imagem: string;
  raridade: string;
  tipo: string[];
}

export interface PokemonInterfaceContext {
  pokeApi: PokemonInterface | null;
  nextPokemon: () => void;
  previousPokemon: () => void;
}
