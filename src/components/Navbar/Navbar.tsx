import { NavbarContainer } from './styles';
import LogoPokemon from '/src/assets/Pokemon Logo.png';

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <div>
          <img src={LogoPokemon} alt="Pokemon Logo" />
          <span>POKÉDEX</span>
        </div>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
