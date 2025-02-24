import Navbar from '../../components/Navbar/Navbar.tsx';
import { Container } from './styles.ts';
import Home from '../Home/Home/Home.tsx';
import React from 'react';

const Root: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <main>
        <Home />
      </main>
    </Container>
  );
};

export default Root;
