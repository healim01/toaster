import { Layout } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { PreviewPage, TakePicPage } from '@/pages';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: ROUTE_PATH.home,
        element: <TakePicPage />,
      },
      {
        path: ROUTE_PATH.preview,
        element: <PreviewPage />,
      },
      {
        path: ROUTE_PATH.save,
        element: <SavePhotoPage />,
      },
    ],
  },
]);

export default router;
