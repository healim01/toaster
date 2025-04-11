import { FilterProvider, FrameProvider, PhotosProvider } from '@/context';
import router from '@/router';
import { amplitudeInitializer } from '@/service/amplitude/amplitudeInitializer';
import '@/styles/global.css';
import '@/styles/tailwind.css';
import '@/styles/theme.css';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

const { init } = amplitudeInitializer();

function App() {
  useEffect(() => {
    init();
  }, []);

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
