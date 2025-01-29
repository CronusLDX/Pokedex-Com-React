import { useContext } from 'react';
import { Container } from './styles';
import HomeContext from '../../../contexts/useHomeContext';

const Home = () => {
  const context = useContext(HomeContext);

  const { pokeapi, nextPokemon, previousPokemon } = context || {};

  if (!pokeapi) {
    return <p>Carregando Pokémon...</p>;
  }

  return (
    <Container>
      <main>
        <div className="pokedex-wrapper">
          <div className="pokedex">
            <img src="./src/assets/pokedex.jpg" alt="pokedex" />
            <div className="pokemon-info">
              <span>
                {pokeapi.id} - {pokeapi.name}
              </span>
              <img src={pokeapi.imagem} alt={pokeapi.name} />
              <span>Raridade: {pokeapi.raridade}</span>
              <span>Tipo: {pokeapi.tipo.join(', ')}</span>
            </div>
          </div>
        </div>
        <div className="buttons">
          <button onClick={previousPokemon}>Pokémon Anterior</button>
          <button onClick={nextPokemon}>Próximo Pokémon</button>
        </div>
      </main>
    </Container>
  );
};

export default Home;
