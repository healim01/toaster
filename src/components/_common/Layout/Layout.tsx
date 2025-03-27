import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return <div className="w-screen h-screen">{children}</div>;
};

export default Layout;
