import { Footer, Header, Layout, MainLayout } from '@/components';
import { ROUTE_PATH } from '@/constants/routePath';
import {
  CustomPhotoPage,
  MyPage,
  NotFoundPage,
  SavePhotoPage,
  StartPage,
  TakePhotoPage,
} from '@/pages';
import AddStickerPage from '@/pages/AddStickerPage';
import { createBrowserRouter, Outlet } from 'react-router-dom';

export const router = createBrowserRouter([
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
            path: ROUTE_PATH.selectFrame,
            element: <CustomPhotoPage />,
          },
          {
            path: ROUTE_PATH.addSticker,
            element: <AddStickerPage />,
          },
          {
            path: ROUTE_PATH.savePhoto,
            element: <SavePhotoPage />,
          },
          {
            path: ROUTE_PATH.myPage,
            element: <MyPage />,
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
