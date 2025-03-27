import { Layout } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { SavePicPage, TakePicPage } from '@/pages';
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
        path: ROUTE_PATH.save,
        element: <SavePicPage />,
      },
    ],
  },
]);

export default router;
