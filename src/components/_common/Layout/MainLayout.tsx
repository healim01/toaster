import { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-[1200px] flex-1 mx-auto overflow-hidden">
      <div className="flex flex-col w-full h-full">{children}</div>
    </div>
  );
};

export default MainLayout;
