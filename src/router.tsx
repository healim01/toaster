import { Layout } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { FrameSelectPage, SavePhotoPage, TakePhotoPage } from '@/pages';
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
        path: ROUTE_PATH.takePhoto,
        element: <TakePhotoPage />,
      },
      {
        path: ROUTE_PATH.preview,
        element: <FrameSelectPage />,
      },
      {
        path: ROUTE_PATH.savePhoto,
        element: <SavePhotoPage />,
      },
    ],
  },
]);

export default router;
