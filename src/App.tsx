import { FilterProvider, FrameProvider, PhotosProvider } from '@/context';
import { UserProvider } from '@/context/UserContext';
import router from '@/router';
import { amplitudeInitializer } from '@/service/amplitude/amplitudeInitializer';
import '@/styles/global.css';
import '@/styles/tailwind.css';
import '@/styles/theme.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

const { init } = amplitudeInitializer();
const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    init();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <FilterProvider>
          <PhotosProvider>
            <FrameProvider>
              <RouterProvider router={router} />
            </FrameProvider>
          </PhotosProvider>
        </FilterProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
