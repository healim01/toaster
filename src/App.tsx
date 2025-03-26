import { RouterProvider } from 'react-router-dom';
import router from '@/router';
import { FilterProvider, PhotosProvider } from '@/context';
import './tailwind.css';

function App() {
  return <RouterProvider router={router} />;
      <PhotosProvider>
        <RouterProvider router={router} />
      </PhotosProvider>
}

export default App;
