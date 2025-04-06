import { Header, Layout, MainLayout } from '@/components';
import Footer from '@/components/_common/Footer/Footer';
import { ROUTE_PATH } from '@/constants/routePath';
import { CustomPhotoPage, SavePhotoPage, TakePhotoPage } from '@/pages';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Header />
        <MainLayout>
          <Outlet />
        </MainLayout>
        <Footer />
      </Layout>
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
    ],
  },
]);

export default router;
