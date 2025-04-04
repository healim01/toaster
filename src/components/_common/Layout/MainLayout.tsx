import { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return <div className="w-full">{children}</div>;
};

export default MainLayout;
