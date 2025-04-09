import { FilterProvider, FrameProvider, PhotosProvider } from '@/context';
import router from '@/router';
import '@/styles/global.css';
import '@/styles/tailwind.css';
import '@/styles/theme.css';
import { RouterProvider } from 'react-router-dom';

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
