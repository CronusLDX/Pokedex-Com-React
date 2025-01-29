import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 98.7vw;
  height: 100%;
  background-color: rgb(0, 0, 0);
  justify-content: start;
  align-items: center;
  flex-direction: row;
  display: flex;

  div {
    height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      width: 100%;
    }
    span {
      font-size: 22px;
      color: white;
      font-weight: 700;
    }
  }
`;
