import { ROUTE_PATH } from '@/constants/routePath';
import { TakePicPage, SavePicPage } from '@/pages';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Outlet />,
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
