import { Footer, Header, Layout, MainLayout } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import {
  CustomPhotoPage,
  NotFoundPage,
  SavePhotoPage,
  StartPage,
  TakePhotoPage,
} from '@/pages';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Header />
        <Outlet />
        <Footer />
      </Layout>
    ),
    children: [
      {
        path: ROUTE_PATH.start,
        element: <StartPage />,
      },
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          {
            path: ROUTE_PATH.takePhoto,
            element: <TakePhotoPage />,
          },
          {
            path: ROUTE_PATH.customPhoto,
            element: <CustomPhotoPage />,
          },
          {
            path: ROUTE_PATH.savePhoto,
            element: <SavePhotoPage />,
          },
          {
            path: '*',
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
