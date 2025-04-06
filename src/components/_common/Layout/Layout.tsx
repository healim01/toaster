import { ROUTE_PATH } from '@/constants/routePath';
import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  return (
    <div
      className={`flex flex-col w-screen m-h-screen ${
        location.pathname === ROUTE_PATH.takePhoto
          ? 'bg-amber-50'
          : 'bg-blue-100'
      }`}
    >
      {children}
    </div>
  );
};

export default Layout;
