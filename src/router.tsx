import { Layout } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import { PreviewPage, SavePhotoPage, TakePhotoPage } from '@/pages';
import RivePage from '@/pages/RivePage';
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
        element: <PreviewPage />,
      },
      {
        path: ROUTE_PATH.savePhoto,
        element: <SavePhotoPage />,
      },
      {
        path: '/rive',
        element: <RivePage />,
      },
    ],
  },
]);

export default router;
