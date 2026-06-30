import '@/styles/global.css';
import '@/styles/tailwind.css';
import '@/styles/theme.css';

import { FilterProvider, FrameProvider, PhotosProvider } from '@/context';
import { GlobalError, GlobalLoading } from '@/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, useEffect } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';
import { ToastProvider } from '@/context/ToastContext';
import { UserProvider } from '@/context/UserContext';
import { amplitudeInitializer } from '@/service/amplitude/amplitudeInitializer';
import { router } from '@/router';

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
              <ToastProvider>
                <ErrorBoundary fallback={<GlobalError />}>
                  <Suspense fallback={<GlobalLoading />}>
                    <RouterProvider router={router} />
                  </Suspense>
                </ErrorBoundary>
              </ToastProvider>
            </FrameProvider>
          </PhotosProvider>
        </FilterProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
