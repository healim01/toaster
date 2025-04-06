import { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-screen mx-auto px-4 sm:px-6 md:px-8 max-w-screen-xl overflow-y-scroll">
      <div className="flex flex-col w-full h-full">{children}</div>
    </div>
  );
};

export default MainLayout;
