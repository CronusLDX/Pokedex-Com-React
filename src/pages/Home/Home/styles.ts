import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgb(139, 255, 207);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .pokedex-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  .pokedex {
    position: relative;
    height: 30rem;
  }

  .pokedex img {
    height: 100%;
    border-radius: 2%;
  }

  .pokemon-info {
    position: absolute;
    top: 18.5%;
    left: 12%;
    width: 70%;
    height: 50%;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    color: black;
  }

  .pokemon-info img {
    width: 160px;
    height: 180px;
  }

  .buttons {
    gap: 2rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  button {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: rgb(0, 0, 0);
    transition: 0.3s;
    border: 2px solid rgb(255, 208, 0);
  }
`;
