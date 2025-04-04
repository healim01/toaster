import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-100">
      {children}
    </div>
  );
};

export default Layout;
