import { FilterProvider, FrameProvider, PhotosProvider } from '@/context';
import router from '@/router';
import { RouterProvider } from 'react-router-dom';
import './tailwind.css';

function App() {
  return (
    <FilterProvider>
      <PhotosProvider>
        <FrameProvider>
          <RouterProvider router={router} />
        </FrameProvider>
      </PhotosProvider>
    </FilterProvider>
  );
}

export default App;
