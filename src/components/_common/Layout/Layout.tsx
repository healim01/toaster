import { YellowBg } from '@/constants/system';
import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

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
