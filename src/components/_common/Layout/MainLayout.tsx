import MobileBlocker from '@/components/etc/MobileBlocker';
import { useIsMobile } from '@/hooks';
import { PropsWithChildren } from 'react';

const MainLayout = ({ children }: PropsWithChildren) => {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileBlocker />;

  return (
    <div className="w-full min-h-screen h-full mx-auto px-4 sm:px-6 md:px-8 max-w-screen-xl mt-2">
      <div className="flex flex-col w-full h-full">{children}</div>
    </div>
  );
};

export default MainLayout;
