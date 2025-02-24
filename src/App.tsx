import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { PokeProvider } from './contexts/useHomeContext';

function App() {
  return (
    <PokeProvider>
      <RouterProvider router={router} />
    </PokeProvider>
  );
}

export default App;
