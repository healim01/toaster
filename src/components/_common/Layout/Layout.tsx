import { ROUTE_PATH } from '@/constants/routePath';
import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

const YellowBg = [ROUTE_PATH.start, ROUTE_PATH.takePhoto];

const Layout = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  return (
    <div
      className={`flex flex-col w-screen m-h-screen ${
        YellowBg.includes(location.pathname) ? 'bg-yellow-50' : 'bg-blue-100'
      }`}
    >
      {children}
    </div>
  );
};

export default Layout;
