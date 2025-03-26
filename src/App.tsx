import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import { FilterProvider, PhotosProvider } from '@/context';
import './tailwind.css';

function App() {
  return (
    <FilterProvider>
      <PhotosProvider>
        <RouterProvider router={router} />
      </PhotosProvider>
    </FilterProvider>
  );
}

export default App;
