import { GlobalError, GlobalLoading } from '@/components';
import { FilterProvider, FrameProvider, PhotosProvider } from '@/context';
import { UserProvider } from '@/context/UserContext';
import { router } from '@/router';
import { amplitudeInitializer } from '@/service/amplitude/amplitudeInitializer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';

import '@/styles/global.css';
import '@/styles/tailwind.css';
import '@/styles/theme.css';

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
              <ErrorBoundary fallback={<GlobalError />}>
                <Suspense fallback={<GlobalLoading />}>
                  <RouterProvider router={router} />
                </Suspense>
              </ErrorBoundary>
            </FrameProvider>
          </PhotosProvider>
        </FilterProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
