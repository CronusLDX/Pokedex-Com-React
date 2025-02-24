import { usePokemon } from '../../../contexts/useHomeContext';
import { Container } from './styles';
import PokedexImg from '/src/assets/pokedex.jpg';

const Home = () => {
  const { pokeApi, nextPokemon, previousPokemon } = usePokemon();
  if (!pokeApi) {
    return <p> O conteúdo dos itens renderizados é nulo</p>;
  }
  return (
    <Container>
      <main>
        <div className="pokedex-wrapper">
          <div className="pokedex">
            <img src={PokedexImg} alt="pokedex" />
            <div className="pokemon-info">
              <span>
                {pokeApi.id} - {pokeApi.name}
              </span>
              <img src={pokeApi.imagem} alt={pokeApi.name} />
              <span>Raridade: {pokeApi.raridade}</span>
              <span>Tipo: {pokeApi.tipo.join(', ')}</span>
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
