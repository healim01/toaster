import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="w-[1200px] max-w-full mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
